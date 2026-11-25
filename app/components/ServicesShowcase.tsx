"use client";

import { Fragment, useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";

import c from "./ServicesShowcase.module.css";
import s from "./scenes/scenes.module.css";
import { useHref, useT } from "./LangProvider";

const TEXT = {
  pt: { tabs: "Serviços FORX", talk: "Falar sobre isso", learn: "Conhecer o serviço" },
  en: { tabs: "FORX services", talk: "Talk about this", learn: "Learn more" },
  es: { tabs: "Servicios FORX", talk: "Hablar sobre esto", learn: "Conocer el servicio" },
};

export type ShowcaseService = {
  /** Âncora usada pelo menu (ex.: "desenvolvimento-software"). */
  id: string;
  /** Rótulo curto da aba. */
  tab: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  tags: string[];
};

const CYCLE_MS = 4000;

/** Atraso da entrada em cascata: 0,1s, 0,2s, 0,3s... */
const delay = (step: number) => ({ "--d": `${step / 10}s` }) as CSSProperties;

function CardLink({ href, children }: { href: string; children: React.ReactNode }) {
  const localize = useHref();
  const cls =
    "mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800";
  return href.startsWith("#") ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={localize(href)} className={cls}>
      {children}
    </Link>
  );
}

export default function ServicesShowcase({
  id,
  label,
  title,
  services,
}: {
  id: string;
  label: string;
  title: [string, string];
  services: ShowcaseService[];
}) {
  const t = useT(TEXT);
  const sectionRef = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);
  const [active, setActive] = useState(0);
  // Muda a cada clique para reiniciar a contagem da troca automática.
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);

  // Liga a troca automática de abas quando a seção aparece pela primeira vez.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Troca de aba a cada 4s (pausa com o mouse/foco no painel ou movimento reduzido).
  useEffect(() => {
    if (!on || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % services.length);
    }, CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [on, paused, tick, services.length]);

  // Link do menu com âncora de um serviço (ex.: /#automacao) abre a aba certa.
  useEffect(() => {
    function syncWithHash() {
      const i = services.findIndex((s) => `#${s.id}` === window.location.hash);
      if (i >= 0) {
        setActive(i);
        setTick((n) => n + 1);
      }
    }
    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, [services]);

  function choose(i: number) {
    setActive(i);
    setTick((n) => n + 1);
  }

  const service = services[active];
  const Icon = service.icon;

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${c.section} relative z-[2] scroll-mt-20 bg-white text-black`}
    >
      {/* Âncoras do menu para cada serviço */}
      {services.map((s) => (
        <span key={s.id} id={s.id} className="block h-0 scroll-mt-24" aria-hidden="true" />
      ))}

      {/* Mesmo espaçamento, rótulo e tamanho de título das outras seções. */}
      <div className="mx-auto max-w-7xl px-6 py-[clamp(72px,12vh,128px)] text-center">
        {/* RÓTULO */}
        <span
          data-fade
          className={`${s.fade} block text-xs font-semibold uppercase tracking-[0.16em] text-[#3b0764]`}
          style={delay(1)}
        >
          {label}
        </span>

        {/* TÍTULO */}
        <h2 data-fade className={`${s.fade} ${s.h2} mx-auto mb-10 max-w-[22em]`} style={delay(2)}>
          {title[0]}
          <br />
          <span className={c.gradient}>{title[1]}</span>
        </h2>

        {/* ABAS: grade 2 colunas no celular, linha com divisórias no computador */}
        <div data-fade
          className={`${s.fade} flex justify-center`} style={delay(3)}>
          <div
            role="tablist"
            aria-label={t.tabs}
            className="grid w-full max-w-md grid-cols-2 gap-1 rounded-lg bg-gray-100 p-1 md:flex md:w-auto md:max-w-none md:items-center"
          >
            {services.map((s, i) => {
              const TabIcon = s.icon;
              const selected = i === active;
              return (
                <Fragment key={s.id}>
                  {i > 0 && <span className="hidden h-5 w-px bg-gray-300 md:block" aria-hidden="true" />}
                  <button
                    type="button"
                    role="tab"
                    id={`servico-tab-${s.id}`}
                    aria-selected={selected}
                    aria-controls="servico-painel"
                    onClick={() => choose(i)}
                    className={`flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                      selected ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    <TabIcon size={16} aria-hidden="true" />
                    {s.tab}
                  </button>
                </Fragment>
              );
            })}
          </div>
        </div>

        {/* PAINEL */}
        <div data-fade
          className={`${s.fade} mt-8`} style={delay(4)}>
          <div
            id="servico-painel"
            role="tabpanel"
            aria-labelledby={`servico-tab-${service.id}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className={`${c.stage} relative h-[460px] overflow-hidden rounded-3xl md:h-[500px]`}
          >
            <div className={c.grid} aria-hidden="true" />
            <span className={`${c.orb} left-[8%] top-[12%] h-48 w-48 bg-purple-400`} aria-hidden="true" />
            <span
              className={`${c.orb} bottom-[6%] right-[10%] h-64 w-64 bg-purple-600`}
              style={{ animationDelay: "-6s" }}
              aria-hidden="true"
            />

            <div key={service.id} className={`${c.overlay} absolute inset-0`}>
              <div className={`${c.card} flex w-full justify-center px-4`}>
                <div className="w-full max-w-[460px] rounded-2xl bg-white p-6 text-left shadow-[0_30px_60px_-20px_rgba(20,4,40,0.7)] sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3b0764] text-white">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-gray-500">
                        {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                      </p>
                      <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                    </div>
                  </div>

                  {/* Barra: posição deste serviço na lista */}
                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-gray-100" aria-hidden="true">
                    <div
                      className="h-full rounded-full bg-[#3b0764] transition-[width] duration-500"
                      style={{ width: `${((active + 1) / services.length) * 100}%` }}
                    />
                  </div>

                  <p className="mt-5 text-sm leading-6 text-gray-600">{service.description}</p>

                  <ul className="mt-5 grid gap-2.5">
                    {service.tags.map((tag) => (
                      <li key={tag} className="flex items-center gap-3 text-sm">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3b0764] text-white">
                          <Check size={12} strokeWidth={3} aria-hidden="true" />
                        </span>
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <CardLink href={service.href}>
                    {service.href.startsWith("#") ? t.talk : t.learn}
                    <ArrowRight size={16} aria-hidden="true" />
                  </CardLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
