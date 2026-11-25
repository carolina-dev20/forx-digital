"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";

import { getCases } from "@/data/cases";
import { founder } from "@/data/founder";
import DeviceMockup from "./DeviceMockup";
import { BlockHead, d } from "./scenes/blocks";
import s from "./scenes/scenes.module.css";
import { useHref, useLang } from "./LangProvider";
import type { Dict } from "../i18n";

const TEXT: Dict<{
  label: string;
  title: [string, string];
  visit: string;
  visitSr: (client: string) => string;
  case: string;
  caseSr: (client: string) => string;
  photoOf: (name: string) => string;
  photoFallback: string;
  whoTitle: string;
}> = {
  pt: {
    label: "PORTFÓLIO",
    title: ["Projetos que já ", "colocamos no ar."],
    visit: "Ver site",
    visitSr: (client) => ` de ${client} (abre em nova aba)`,
    case: "Ver o case",
    caseSr: (client) => ` de ${client}`,
    photoOf: (name) => `Foto de ${name}`,
    photoFallback: "Foto de quem cuida dos projetos da FORX",
    whoTitle: "Quem cuida do seu projeto sou eu",
  },
  en: {
    label: "PORTFOLIO",
    title: ["Projects we have ", "already launched."],
    visit: "Visit website",
    visitSr: (client) => ` of ${client} (opens in a new tab)`,
    case: "See the case study",
    caseSr: (client) => ` of ${client}`,
    photoOf: (name) => `Photo of ${name}`,
    photoFallback: "Photo of the person who runs FORX projects",
    whoTitle: "I personally take care of your project",
  },
  es: {
    label: "PORTAFOLIO",
    title: ["Proyectos que ya ", "pusimos en línea."],
    visit: "Ver sitio",
    visitSr: (client) => ` de ${client} (se abre en una nueva pestaña)`,
    case: "Ver el caso",
    caseSr: (client) => ` de ${client}`,
    photoOf: (name) => `Foto de ${name}`,
    photoFallback: "Foto de quien cuida los proyectos de FORX",
    whoTitle: "Quien cuida tu proyecto soy yo",
  },
};

/** Portfólio da home: os projetos no ar + "Quem cuida do seu projeto". */
export default function HomePortfolio() {
  const lang = useLang();
  const href = useHref();
  const t = TEXT[lang];
  const cases = getCases(lang);

  return (
    <section id="portfolio" className={`${s.block} scroll-mt-20`} data-tone="black">
      <BlockHead
        label={t.label}
        title={[{ text: t.title[0] }, { text: t.title[1], hl: true }]}
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {cases.map((item, index) => (
          <article
            key={item.slug}
            className={`${s.fade} flex flex-col rounded-[20px] border border-[var(--panel-line)] bg-[var(--card)] p-4 sm:p-6`}
            data-fade
            style={d(0.08 * index)}
          >
            <DeviceMockup
              desktop={item.imagens.desktop}
              mobile={item.imagens.mobile}
              sizes={{ desktop: "(min-width: 1024px) 400px, 85vw", mobile: "(min-width: 640px) 120px, 40vw" }}
            />

            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="text-[22px] font-medium tracking-[-0.02em] text-[var(--fg)]">
                  {item.cliente}
                </h3>
                <p className="mt-1 text-[15px] text-[var(--fg-2)]">
                  {item.subtitulo || item.tipoProjeto}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1a1238]! transition-colors hover:bg-[#e4d9ff]"
                >
                  {t.visit}
                  <ArrowUpRight size={16} aria-hidden="true" />
                  <span className="sr-only">{t.visitSr(item.cliente)}</span>
                </a>
                <Link
                  href={href(`/cases#${item.slug}`)}
                  className="text-sm font-medium text-[var(--fg-2)]! underline-offset-4 hover:text-[var(--fg)]! hover:underline"
                >
                  {t.case}<span className="sr-only">{t.caseSr(item.cliente)}</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* QUEM CUIDA DO SEU PROJETO */}
      <div
        className={`${s.fade} mt-6 flex flex-col gap-5 rounded-[20px] border border-[var(--panel-line)] p-6 sm:flex-row sm:items-center sm:p-7`}
        data-fade
      >
        {founder.photo ? (
          <Image
            src={founder.photo}
            alt={founder.name ? t.photoOf(founder.name) : t.photoFallback}
            width={88}
            height={88}
            className="h-[88px] w-[88px] shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full bg-[var(--card-2)] text-[var(--fg-3)]"
            aria-hidden="true"
          >
            <UserRound size={34} />
          </span>
        )}

        <div>
          <h3 className="text-[22px] font-medium tracking-[-0.02em] text-[var(--fg)]">
            {t.whoTitle}
          </h3>
          {(founder.name || founder.role) && (
            <p className="mt-1 text-[15px] font-medium text-[var(--hl)]">
              {[founder.name, founder.role].filter(Boolean).join(" · ")}
            </p>
          )}
          {founder.quote && (
            <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--fg-2)]">
              “{founder.quote}”
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
