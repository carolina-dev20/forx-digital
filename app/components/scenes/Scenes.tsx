"use client";

import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Link from "next/link";
import { ArrowDown, MousePointer2, Sparkles, type LucideIcon } from "lucide-react";

import s from "./scenes.module.css";

// ==========================================
// CORES
// ==========================================

export type RGB = [number, number, number];

export const WHITE: RGB = [255, 255, 255];
const BOWL_RIM: RGB = [226, 218, 255]; // lavanda clara
const BOWL_CORE: RGB = [176, 150, 255]; // lilás / roxo
export const INK: RGB = [26, 18, 56]; // texto principal
export const HERO_HL: RGB = [59, 7, 100]; // purple-950
const STMT_HL: RGB = [59, 7, 100]; // purple-950
export const REVEAL: RGB = [139, 92, 246]; // cor intermediária da revelação
export const PANEL_GHOST: RGB = [110, 95, 150];
export const PANEL_ACCENT: RGB = [201, 182, 255];

// ==========================================
// UTILIDADES
// ==========================================

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (x: number) => {
  const t = clamp(x);
  return t * t * (3 - 2 * t);
};
const mix = (a: RGB, b: RGB, k: number): RGB => [
  a[0] + (b[0] - a[0]) * k,
  a[1] + (b[1] - a[1]) * k,
  a[2] + (b[2] - a[2]) * k,
];

/** Tabela da cuia por rolagem (q = rolagem / altura da tela). */
const KEYS = {
  q: [0, 0.03, 0.08, 0.18, 0.4, 0.66, 0.87, 1.15, 1.43, 1.8],
  tip: [0.3, 0.45, 0.65, 0.8, 0.95, 1.05, 1.05, 1.1, 1.3, 2.4],
  half: [0.34, 0.38, 0.38, 0.38, 0.38, 0.46, 0.66, 0.9, 1.6, 3.0],
  soft: [0.22, 0.26, 0.22, 0.22, 0.19, 0.16, 0.13, 0.1, 0.1, 0.1],
};

function lookup(q: number, values: number[]) {
  const qs = KEYS.q;
  if (q <= qs[0]) return values[0];
  for (let i = 1; i < qs.length; i++) {
    if (q <= qs[i]) {
      const k = (q - qs[i - 1]) / (qs[i] - qs[i - 1]);
      return values[i - 1] + (values[i] - values[i - 1]) * k;
    }
  }
  return values[values.length - 1];
}

// ==========================================
// TEXTO DIVIDIDO EM LETRAS
// ==========================================

export type Segment = { text: string; hl?: boolean } | { br: true };

export function SplitText({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((seg, si) => {
        if ("br" in seg) return <br key={si} />;
        const parts = seg.text.split(/(\s+)/);
        return (
          <Fragment key={si}>
            {parts.map((part, pi) =>
              /^\s+$/.test(part) || part === "" ? (
                part
              ) : (
                <span key={pi} className={s.word}>
                  {Array.from(part).map((c, ci) => (
                    <span
                      key={ci}
                      className={s.ch}
                      data-c=""
                      data-hl={seg.hl ? "" : undefined}
                    >
                      {c}
                    </span>
                  ))}
                </span>
              )
            )}
          </Fragment>
        );
      })}
    </>
  );
}

export const plain = (segments: Segment[]) =>
  segments.map((seg) => ("br" in seg ? " " : seg.text)).join(" ").replace(/\s+/g, " ").trim();

export type Painter = {
  els: HTMLElement[];
  last: Float32Array;
};

export function makePainter(root: HTMLElement | null): Painter {
  const els = root ? Array.from(root.querySelectorAll<HTMLElement>("[data-c]")) : [];
  return { els, last: new Float32Array(els.length).fill(-1) };
}

/** Pinta cada letra: invisível → borrada → cor intermediária → cor final. */
export function paint(
  pt: Painter,
  p: number,
  spread: number,
  final: RGB,
  accent: RGB,
  ghost: RGB,
  hlFinal: RGB
) {
  const n = pt.els.length;
  for (let i = 0; i < n; i++) {
    const t = clamp((p * (1 + spread) - i / n) / spread);
    const q = Math.round(t * 200) / 200;
    if (pt.last[i] === q) continue;
    pt.last[i] = q;

    const el = pt.els[i];
    let a = 1;
    let col: RGB;
    let blur = 0;

    if (q <= 0.35) {
      const k = q / 0.35;
      a = k;
      col = ghost;
      blur = 8 - 6.5 * k;
    } else if (q <= 0.7) {
      const k = (q - 0.35) / 0.35;
      col = mix(ghost, accent, k);
      blur = 1.5 * (1 - k);
    } else {
      const k = (q - 0.7) / 0.3;
      col = mix(accent, el.dataset.hl !== undefined ? hlFinal : final, k);
    }

    el.style.color = `rgba(${col[0] | 0},${col[1] | 0},${col[2] | 0},${a.toFixed(3)})`;
    el.style.filter = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : "none";
  }
}

// ==========================================
// BRILHO EM FORMA DE CUIA (canvas 96×60)
// ==========================================

const BW = 96;
const BH = 60;
const RND = 0.25;
const N_EDGE = 48;

function drawBowl(
  ctx: CanvasRenderingContext2D,
  img: ImageData,
  tip: number,
  half: number,
  soft: number,
  aspect: number,
  /** Proporção usada só para a largura da cuia (permite alargá-la no celular). */
  shapeAspect: number = aspect
) {
  // Abaixo de 0.3 (só na entrada) a mesma cuia é deslocada para cima.
  const tipS = Math.max(tip, 0.3);
  const yOff = tip - tipS;

  const ex = new Float32Array(N_EDGE);
  const ey = new Float32Array(N_EDGE);
  for (let k = 0; k < N_EDGE; k++) {
    const yy = -0.3 + ((tipS + 0.3) * k) / (N_EDGE - 1);
    ey[k] = yy;
    ex[k] = half * shapeAspect * Math.pow(Math.max(0, 1 - yy / tipS), 0.72);
  }

  const data = img.data;
  for (let y = 0; y < BH; y++) {
    const py = (y + 0.5) / BH - yOff;
    for (let x = 0; x < BW; x++) {
      const px = Math.abs((x + 0.5) / BW - 0.5) * aspect;

      // Distância até o segmento mais próximo da borda.
      let d2 = Infinity;
      for (let k = 0; k < N_EDGE - 1; k++) {
        const ax = ex[k];
        const ay = ey[k];
        const bx = ex[k + 1] - ax;
        const by = ey[k + 1] - ay;
        const len = bx * bx + by * by;
        let t = len > 0 ? ((px - ax) * bx + (py - ay) * by) / len : 0;
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        const dx = px - (ax + bx * t);
        const dy = py - (ay + by * t);
        const dd = dx * dx + dy * dy;
        if (dd < d2) d2 = dd;
      }

      let sd = Math.sqrt(d2);
      const inside =
        py < tipS && px < half * shapeAspect * Math.pow(Math.max(0, 1 - py / tipS), 0.72);
      if (inside) sd = -sd;
      sd -= RND;

      const g = 1 - smooth((sd + soft) / (2 * soft));
      const col =
        g < 0.38
          ? mix(WHITE, BOWL_RIM, smooth(g / 0.38))
          : mix(BOWL_RIM, BOWL_CORE, smooth((g - 0.38) / 0.62));

      const o = (y * BW + x) * 4;
      data[o] = col[0];
      data[o + 1] = col[1];
      data[o + 2] = col[2];
      data[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

// ==========================================
// COMPONENTE
// ==========================================

export const HEADER = 82; // altura do menu fixo do site

const d = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

function Chevron() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M4.5 2.5 8 6l-3.5 3.5"
        stroke="#1a1238"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DotButton({
  href,
  children,
  large = false,
  className = "",
  style,
  external = false,
}: {
  href: string;
  children: ReactNode;
  large?: boolean;
  className?: string;
  style?: CSSProperties;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={`${s.btn} ${large ? s.lg : ""} ${className}`}
      style={style}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span className={s.dot} aria-hidden="true">
        <Chevron />
      </span>
    </a>
  );
}

export type SceneItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  id?: string;
  tags?: string[];
};

export type ScenesProps = {
  /** Linha pequena acima do título (opcional). */
  eyebrow?: string;
  /** Título principal, já dividido (use { hl: true } no trecho em destaque). */
  heroTitle: Segment[];
  description: string;
  primary?: { label: string; href: string; external?: boolean };
  /** icon "down": seta para baixo (rolar a página); padrão: cursor. */
  secondary?: { label: string; href: string; icon?: "pointer" | "down"; external?: boolean };
  /** Painel ilustrado à direita do topo (opcional). */
  mock?: { url: string; label: string; title: string; button: string };
  badge?: string;
  /** Topo mais baixo (para páginas cujo conteúdo principal vem logo abaixo). */
  compact?: boolean;
  /** Frase revelada com a rolagem (opcional). */
  statement?: { id?: string; text: Segment[] };
  /** Painel escuro dividido (opcional). */
  split?: {
    id?: string;
    label: string;
    title: Segment[];
    items: SceneItem[];
    icon: LucideIcon;
    /** Texto no centro da arte, no lugar do ícone (ex.: "360"). */
    artLabel?: string;
    /** Sem o quadrado do centro: só os anéis girando. */
    noCore?: boolean;
  };
  /** Botão flutuante que aparece durante a frase. */
  navCta?: { label: string; href: string; external?: boolean };
};

export default function Scenes({
  eyebrow,
  heroTitle,
  description,
  primary,
  secondary,
  mock,
  badge,
  compact = false,
  statement,
  split,
  navCta,
}: ScenesProps) {
  const [ready, setReady] = useState(false);

  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const stmtRef = useRef<HTMLParagraphElement>(null);
  const stmtSectionRef = useRef<HTMLElement>(null);
  const splitRef = useRef<HTMLElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const wrap = wrapRef.current;
    if (!canvas || !ctx || !wrap) return;
    const img = ctx.createImageData(BW, BH);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const heroP = makePainter(h1Ref.current);
    const stmtP = makePainter(stmtRef.current);
    const h2P = makePainter(h2Ref.current);

    const cur = { tip: -0.3, half: 0.3, soft: 0.1 };
    const tgt = { tip: 0.3, half: 0.34, soft: 0.22 };

    const start = performance.now();
    const INTRO_DELAY = 250;
    const INTRO_DUR = 1050;
    const DRAW_EVERY = 32; // ms: ~30 quadros/s bastam para um degradê lento
    const STMT_START = 0.69; // onde a frase começa quando o topo tem uma tela de altura

    let raf = 0;
    let running = false;
    let visible = true;
    let dirty = true;
    let heroDone = false;
    let lastDraw = -Infinity;
    let rowShown = false;
    let navOn = false;

    const viewH = () => Math.max(1, window.innerHeight - HEADER);

    /**
     * Rolagem "normalizada": se o topo for mais alto que a tela (comum no celular),
     * o trecho até a frase é comprimido para a mesma escala do computador.
     */
    function scrollQ(H: number) {
      const q = Math.max(0, -wrap!.getBoundingClientRect().top / H);
      const stmt = stmtSectionRef.current;
      if (!stmt) return q;
      const q0 = Math.max(0.01, (stmt.offsetTop - wrap!.offsetTop) / H);
      return q < q0 ? q * (STMT_START / q0) : STMT_START + (q - q0);
    }

    function update() {
      const H = viewH();
      const q = scrollQ(H);

      tgt.tip = lookup(q, KEYS.tip);
      tgt.half = lookup(q, KEYS.half);
      tgt.soft = lookup(q, KEYS.soft);

      // Frase: sobe para o lugar e revela com a rolagem.
      if (stmtRef.current) {
        const sp = reduce ? 1 : clamp((q - 0.56) / 2.03);
        const rise = reduce ? 1 : clamp((q - STMT_START) / 0.74);
        stmtRef.current.style.transform = `translateY(${(0.205 * (1 - rise) ** 2 * H).toFixed(1)}px)`;
        paint(stmtP, sp, 0.16, INK, REVEAL, WHITE, STMT_HL);

        const on = sp > 0.4;
        if (on !== navOn && navRef.current) {
          navOn = on;
          navRef.current.classList.toggle(s.on, on);
        }
      }

      // Painel escuro.
      const splitEl = splitRef.current;
      if (splitEl) {
        const top = (splitEl.getBoundingClientRect().top - HEADER) / H;
        const p2 = reduce ? 1 : clamp((0.8 - top) / 0.65);
        paint(h2P, p2, 0.35, WHITE, PANEL_ACCENT, PANEL_GHOST, PANEL_ACCENT);

        const show = p2 > 0.92;
        if (show !== rowShown && rowRef.current) {
          rowShown = show;
          rowRef.current.classList.toggle(s.show, show);
        }

        if (artRef.current) {
          const scale = reduce ? 1 : 1.08 - 0.08 * clamp(1 - top);
          artRef.current.style.transform = `scale(${scale.toFixed(4)})`;
        }
      }
    }

    function frame(now: number) {
      if (dirty) {
        dirty = false;
        update();
      }

      // Título do topo: revelação por tempo (1,25s).
      if (!heroDone) {
        const tHero = reduce ? 1 : clamp((now - start) / 1250);
        paint(heroP, tHero, 0.35, INK, REVEAL, WHITE, HERO_HL);
        heroDone = tHero >= 1;
      }

      const introK = reduce ? 1 : smooth((now - start - INTRO_DELAY) / INTRO_DUR);

      if (introK < 1) {
        // Entrada: a cuia desce do topo e se abre.
        cur.tip = -0.3 + (tgt.tip + 0.3) * introK;
        cur.half = 0.3 + (tgt.half - 0.3) * introK;
        cur.soft = 0.1 + (tgt.soft - 0.1) * introK;
      } else {
        cur.tip += (tgt.tip - cur.tip) * 0.12;
        cur.half += (tgt.half - cur.half) * 0.12;
        cur.soft += (tgt.soft - cur.soft) * 0.12;
      }

      if (now - lastDraw >= DRAW_EVERY) {
        lastDraw = now;
        const drift = reduce ? 0 : 1;
        const tip = cur.tip + Math.sin(now * 0.00033 + 1.3) * 0.02 * drift;
        const half = cur.half + Math.sin(now * 0.0005) * 0.015 * drift;
        // No celular (tela estreita) a cuia é alargada para não virar um "pingo" fino.
        const aspect = window.innerWidth / viewH();
        drawBowl(ctx!, img, tip, half, cur.soft, aspect, Math.max(aspect, 0.9));
      }

      // Fora da tela, para de vez (volta quando reaparecer).
      if (visible || !heroDone) {
        raf = requestAnimationFrame(frame);
      } else {
        running = false;
      }
    }

    function run() {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    }

    function onScroll() {
      dirty = true;
      if (visible) run();
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          dirty = true;
          run();
        }
      },
      { rootMargin: "120px 0px" }
    );
    io.observe(wrap);

    update();
    running = true;
    raf = requestAnimationFrame((now) => {
      setReady(true);
      frame(now);
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const ArtIcon = split?.icon;

  return (
    <div ref={wrapRef} className={`${s.scenes} ${ready ? s.ready : ""}`}>
      {/* FUNDO: BRILHO ROXO */}
      <div className={s.atmo} aria-hidden="true">
        <canvas ref={canvasRef} width={BW} height={BH} />
      </div>

      {/* BOTÃO FLUTUANTE: ponto → círculo → pílula */}
      {navCta && statement && (
        <div ref={navRef} className={s.navcta}>
          <DotButton href={navCta.href} external={navCta.external}>
            <span className={s.lbl}>{navCta.label}</span>
          </DotButton>
        </div>
      )}

      {/* 1) TOPO */}
      <section
        className={`${s.hero} ${compact ? s.compact : ""} ${mock ? "" : s.solo}`}
      >
        <div>
          {eyebrow && (
            <span className={`${s.eyebrow} ${s.fu}`} style={d(0.1)}>
              {eyebrow}
            </span>
          )}

          <h1 ref={h1Ref} className={s.h1} aria-label={plain(heroTitle)}>
            <span aria-hidden="true">
              <SplitText segments={heroTitle} />
            </span>
          </h1>

          <p className={`${s.trust} ${s.fu}`} style={d(1.15)}>
            {description}
          </p>

          {(primary || secondary) && (
            <div className={`${s.actions} ${s.fu}`} style={d(1.3)}>
              {primary && (
                <DotButton href={primary.href} large external={primary.external}>
                  {primary.label}
                </DotButton>
              )}

              {secondary && (
                <a
                  href={secondary.href}
                  className={s.secondary}
                  {...(secondary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={
                    secondary.icon === "down"
                      ? (event) => {
                          // Rola suavemente uma tela para baixo (a frase já aparece surgindo).
                          event.preventDefault();
                          window.scrollBy({
                            top: window.innerHeight - HEADER,
                            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                              ? "auto"
                              : "smooth",
                          });
                        }
                      : undefined
                  }
                >
                  {secondary.label}
                  {secondary.icon === "down" ? (
                    <ArrowDown size={17} aria-hidden="true" />
                  ) : (
                    <MousePointer2 size={17} aria-hidden="true" />
                  )}
                </a>
              )}
            </div>
          )}
        </div>

        {/* PAINEL ILUSTRADO */}
        {mock && (
          <div className={`${s.visual} ${s.fu}`} style={d(1.45)} aria-hidden="true">
            <div className={s.mock}>
              <div className={s.mockTop}>
                <span className={s.mockDots}>
                  <i />
                  <i />
                  <i />
                </span>
                {mock.url}
              </div>
              <div className={s.mockBody}>
                <span className={s.mockLabel}>{mock.label}</span>
                <h2 className={s.mockTitle}>{mock.title}</h2>
                <span className={s.mockButton}>{mock.button} ↗</span>
                <div className={s.mockCards}>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>

            {badge && (
              <div className={s.badge}>
                <Sparkles size={18} />
                {badge}
              </div>
            )}
          </div>
        )}
      </section>

      {/* 2) FRASE REVELADA COM A ROLAGEM */}
      {statement && (
        <section ref={stmtSectionRef} id={statement.id} className={s.statement}>
          <div className={s.pin}>
            <p ref={stmtRef} className={s.stmt}>
              <SplitText segments={statement.text} />
            </p>
          </div>
        </section>
      )}

      {/* 3) PAINEL ESCURO DIVIDIDO */}
      {split && ArtIcon && (
        <section ref={splitRef} id={split.id} className={s.split}>
          <div className={s.l}>
            <div className={s.lhead}>
              <span className={s.label}>{split.label}</span>
              <h2 ref={h2Ref} className={s.h2} aria-label={plain(split.title)}>
                <span aria-hidden="true">
                  <SplitText segments={split.title} />
                </span>
              </h2>
            </div>

            <div ref={rowRef} className={s.row}>
              {split.items.map((item) => {
                const ItemIcon = item.icon;
                const inner = (
                  <>
                    <ItemIcon size={22} aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.tags && (
                      <span className={s.itemTags}>
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </span>
                    )}
                  </>
                );
                return item.href ? (
                  <Link
                    key={item.title}
                    id={item.id}
                    href={item.href}
                    className={`${s.item} ${s.itemLink}`}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={item.title} id={item.id} className={s.item}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={s.r} aria-hidden="true">
            <div ref={artRef} className={s.art}>
              {/* Órbitas: cada anel gira com um ponto de luz */}
              <span className={`${s.ring} ${s.orbitA}`} style={{ width: 220, height: 220 }} />
              <span className={`${s.ring} ${s.orbitB}`} style={{ width: 360, height: 360 }} />
              <span className={`${s.ring} ${s.orbitC}`} style={{ width: 520, height: 520 }} />
              {!split.noCore && (
              <span className={s.core}>
                {split.artLabel ? (
                  <span className={s.coreLabel}>{split.artLabel}</span>
                ) : (
                  <ArtIcon size={46} color="#fff" strokeWidth={1.4} />
                )}
              </span>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
