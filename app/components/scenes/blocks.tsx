"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

import {
  DotButton,
  HEADER,
  HERO_HL,
  INK,
  PANEL_ACCENT,
  PANEL_GHOST,
  REVEAL,
  SplitText,
  WHITE,
  clamp,
  makePainter,
  paint,
  plain,
  type RGB,
  type Segment,
} from "./Scenes";
import s from "./scenes.module.css";

export const d = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

export const EASE = [0.22, 0.7, 0.2, 1] as const;

/** Cores da revelação sobre o fundo roxo (seções data-tone="violet"). */
const VIOLET_ACCENT: RGB = [228, 217, 255];
const VIOLET_GHOST: RGB = [150, 118, 236];

/**
 * Efeitos de rolagem dentro de um contêiner:
 * - [data-reveal="dark"|"light"]: título revelado letra a letra;
 * - [data-fade]: sobe e aparece ao entrar na tela;
 * - [data-glow]: recebe --g (0 → 1) para o brilho roxo crescer.
 */
export function useSceneEffects(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // O tom da seção ([data-tone]) define as cores da revelação; sem ele, vale data-reveal.
    const titles = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]")).map(
      (el) => {
        const section = el.closest<HTMLElement>("[data-tone]")?.dataset.tone;
        const tone = section === "light" || section === "violet" ? section : el.dataset.reveal;
        return { el, tone, painter: makePainter(el) };
      }
    );
    const glows = Array.from(root.querySelectorAll<HTMLElement>("[data-glow]"));

    function update() {
      ticking = false;
      const H = Math.max(1, window.innerHeight - HEADER);

      for (const t of titles) {
        const top = (t.el.getBoundingClientRect().top - HEADER) / H;
        const p = reduce ? 1 : clamp((0.9 - top) / 0.5);
        if (t.tone === "light") {
          paint(t.painter, p, 0.35, INK, REVEAL, WHITE, HERO_HL);
        } else if (t.tone === "violet") {
          paint(t.painter, p, 0.35, WHITE, VIOLET_ACCENT, VIOLET_GHOST, VIOLET_ACCENT);
        } else {
          paint(t.painter, p, 0.35, WHITE, PANEL_ACCENT, PANEL_GHOST, PANEL_ACCENT);
        }
      }

      for (const el of glows) {
        const top = (el.getBoundingClientRect().top - HEADER) / H;
        const g = reduce ? 0.6 : clamp((1 - top) / 0.9);
        el.style.setProperty("--g", g.toFixed(3));
      }
    }

    // Agrupa os eventos de rolagem: no máximo um cálculo por quadro.
    let ticking = false;
    let raf = 0;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    }

    const fades = Array.from(root.querySelectorAll<HTMLElement>("[data-fade]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle(s.show, reduce || entry.isIntersecting);
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    fades.forEach((el) => io.observe(el));

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [rootRef]);
}

/** Título revelado letra a letra conforme entra na tela. */
export function RevealTitle({
  segments,
  tone = "dark",
  className = s.h2,
  as: Tag = "h2",
}: {
  segments: Segment[];
  tone?: "dark" | "light";
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Tag className={className} data-reveal={tone} aria-label={plain(segments)}>
      <span aria-hidden="true">
        <SplitText segments={segments} />
      </span>
    </Tag>
  );
}

/** Divide "Antes / destaque" em duas linhas. */
export const twoLines = (before: string, after: string): Segment[] => [
  { text: before },
  { br: true },
  { text: " " + after },
];

/** Cabeçalho de seção do painel escuro: rótulo + título revelado + texto opcional. */
/**
 * Liga os efeitos de rolagem do site (blocos que sobem e aparecem, títulos revelados)
 * em qualquer página, inclusive as que são componentes de servidor.
 */
export function SceneEffectsRoot({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useSceneEffects(ref);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function BlockHead({
  label,
  title,
  lead,
}: {
  label: string;
  title: Segment[];
  lead?: ReactNode;
}) {
  return (
    <div className={s.blockHead}>
      <span className={`${s.label} ${s.fade}`} data-fade>
        {label}
      </span>
      <RevealTitle segments={title} />
      {lead && (
        <p className={`${s.lead} ${s.fade}`} data-fade style={d(0.1)}>
          {lead}
        </p>
      )}
    </div>
  );
}

/** Lista de perguntas frequentes (linhas finas, + que gira e vira ×). */
export function FaqList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className={s.faq}>
      {faqs.map((faq, index) => {
        const isOpen = active === index;
        return (
          <div
            key={faq.question}
            // className fixo: o efeito de rolagem adiciona a classe "show" direto no
            // elemento; se o className mudasse ao abrir, o React a apagaria e o item sumiria.
            className={`${s.faqItem} ${s.fade}`}
            data-open={isOpen ? "" : undefined}
            data-fade
            style={d(0.05 * Math.min(index, 4))}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setActive(isOpen ? null : index)}
            >
              {faq.question}
              <span className={s.faqIcon} aria-hidden="true">
                <Plus size={16} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className={s.faqAnswer}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/** Chamada final: fundo branco com brilho roxo que cresce com a rolagem. */
export function CtaGlow({
  label,
  title,
  text,
  button,
}: {
  label: string;
  title: Segment[];
  text: string;
  button: { label: string; href: string; external?: boolean };
}) {
  return (
    <section className={`${s.scenes} ${s.cta}`} data-glow>
      <div className={s.ctaInner}>
        <span className={`${s.label} ${s.fade}`} data-fade>
          {label}
        </span>
        <RevealTitle className={s.ctaTitle} tone="light" segments={title} />
        <p className={`${s.ctaText} ${s.fade}`} data-fade style={d(0.1)}>
          {text}
        </p>
        <div className={s.fade} data-fade style={d(0.2)}>
          <DotButton href={button.href} large external={button.external}>
            {button.label}
          </DotButton>
        </div>
      </div>
    </section>
  );
}

/** Ponto que vira círculo com seta (canto dos cartões). */
export function CardDot() {
  return (
    <span className={s.relDot} aria-hidden="true">
      <svg viewBox="0 0 12 12" fill="none">
        <path
          d="M4.5 2.5 8 6l-3.5 3.5"
          stroke="#1a1238"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
