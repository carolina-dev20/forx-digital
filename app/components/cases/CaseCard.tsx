"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Clock, Play, Quote } from "lucide-react";

import type { Case, CaseTestimonial } from "@/data/cases";
import DeviceMockup from "../DeviceMockup";
import { DotButton } from "../scenes/Scenes";
import { useHref, useLang, useT } from "../LangProvider";
import { planName } from "../PricingSection";
import { whatsappUrl, type Dict } from "../../i18n";

export const whatsappLink = (message: string) => whatsappUrl(message);

export const CASE_TEXT: Dict<{
  done: string;
  ongoing: string;
  watchVideo: (name: string) => string;
  photoOf: (name: string) => string;
  newTab: string;
  scope: string;
  before: string;
  whatWeDid: string;
  timeline: string;
  readyIn: (time: string) => string;
  after: string;
  results: string;
  source: string;
  similar: string;
  plan: string;
  from: string;
  perMonth: string;
  seePlans: string;
  cta: string;
  ctaMsg: (client: string) => string;
  live: string;
}> = {
  pt: {
    done: "Projeto concluído",
    ongoing: "Em andamento",
    watchVideo: (name) => `Assistir ao depoimento em vídeo de ${name}`,
    photoOf: (name) => `Foto de ${name}`,
    newTab: "(abre em nova aba)",
    scope: "Escopo do projeto",
    before: "Antes",
    whatWeDid: "O que fizemos",
    timeline: "Prazo",
    readyIn: (time) => `Pronto em ${time}.`,
    after: "Depois",
    results: "Resultados confirmados",
    source: "Fonte",
    similar: "Projeto parecido: plano",
    plan: "plano",
    from: "a partir de",
    perMonth: "/mês",
    seePlans: "Ver planos",
    cta: "Quero um site assim no WhatsApp",
    ctaMsg: (client) => `Olá! Vi o case da ${client} no site da FORX e quero um projeto parecido para o meu negócio.`,
    live: "Ver site no ar",
  },
  en: {
    done: "Project completed",
    ongoing: "In progress",
    watchVideo: (name) => `Watch ${name}'s video testimonial`,
    photoOf: (name) => `Photo of ${name}`,
    newTab: "(opens in a new tab)",
    scope: "Project scope",
    before: "Before",
    whatWeDid: "What we did",
    timeline: "Timeline",
    readyIn: (time) => `Ready in ${time}.`,
    after: "After",
    results: "Confirmed results",
    source: "Source",
    similar: "Similar project: the",
    plan: "plan",
    from: "from",
    perMonth: "/month",
    seePlans: "See plans",
    cta: "I want a website like this on WhatsApp",
    ctaMsg: (client) => `Hi! I saw the ${client} case study on the FORX website and I want a similar project for my business.`,
    live: "See the live website",
  },
  es: {
    done: "Proyecto concluido",
    ongoing: "En curso",
    watchVideo: (name) => `Ver el testimonio en video de ${name}`,
    photoOf: (name) => `Foto de ${name}`,
    newTab: "(se abre en una nueva pestaña)",
    scope: "Alcance del proyecto",
    before: "Antes",
    whatWeDid: "Lo que hicimos",
    timeline: "Plazo",
    readyIn: (time) => `Listo en ${time}.`,
    after: "Después",
    results: "Resultados confirmados",
    source: "Fuente",
    similar: "Proyecto similar: plan",
    plan: "plan",
    from: "desde",
    perMonth: "/mes",
    seePlans: "Ver planes",
    cta: "Quiero un sitio así por WhatsApp",
    ctaMsg: (client) => `¡Hola! Vi el caso de ${client} en el sitio de FORX y quiero un proyecto similar para mi negocio.`,
    live: "Ver el sitio publicado",
  },
};

/* ---------- peças pequenas ---------- */

/** Rótulo de cada bloco do case ("ANTES", "O QUE FIZEMOS"...). */
export function BlockLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--fg-3)]">
      {children}
    </p>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-[var(--panel-line)] px-3 py-1.5 text-xs text-[var(--fg-2)]">
      {children}
    </li>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[var(--fg)]">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--card-2)] text-[var(--hl)]">
            <Check size={13} strokeWidth={2.5} aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function StatusBadge({ status }: { status: Case["status"] }) {
  const t = useT(CASE_TEXT);
  const done = status === "concluído";
  const Icon = done ? Check : Clock;
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--panel-line)] px-3 py-1.5 text-xs text-[var(--fg)]">
      <Icon size={14} className="text-[var(--hl)]" aria-hidden="true" />
      {done ? t.done : t.ongoing}
    </span>
  );
}

export { ImagePlaceholder } from "../DeviceMockup";

/** Vídeo só é carregado depois do clique (sem peso extra na página). */
function VideoTestimonial({ src, poster, name }: { src: string; poster?: string; name: string }) {
  const text = useT(CASE_TEXT);
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <video
        src={src}
        poster={poster}
        controls
        autoPlay
        playsInline
        className="aspect-[9/16] w-full max-w-[220px] rounded-[14px] bg-black"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={text.watchVideo(name)}
      className="group/video relative flex aspect-[9/16] w-full max-w-[220px] items-center justify-center overflow-hidden rounded-[14px] bg-[var(--card-2)]"
    >
      {poster && (
        <Image src={poster} alt="" fill sizes="220px" className="object-cover opacity-70" />
      )}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#3b0764] text-white transition-transform group-hover/video:scale-110">
        <Play size={22} fill="currentColor" aria-hidden="true" />
      </span>
    </button>
  );
}

function Testimonial({ t }: { t: CaseTestimonial }) {
  const text = useT(CASE_TEXT);
  return (
    <figure className="rounded-[16px] border border-[var(--panel-line)] bg-[var(--card)] p-5 sm:p-6">
      {t.videoUrl && (
        <div className="mb-5">
          <VideoTestimonial src={t.videoUrl} poster={t.fotoUrl} name={t.nome} />
        </div>
      )}
      <Quote size={20} className="text-[var(--hl)]" aria-hidden="true" />
      <blockquote className="mt-3 text-[15px] leading-7 text-[var(--fg)]">“{t.texto}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        {t.fotoUrl && (
          <Image
            src={t.fotoUrl}
            alt={text.photoOf(t.nome)}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
        )}
        <span className="text-sm">
          <span className="block text-[var(--fg)]">{t.nome}</span>
          <span className="block text-[var(--fg-3)]">{t.cargo}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Link discreto para o site da cliente, sempre em nova aba. */
export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  const t = useT(CASE_TEXT);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm text-[var(--fg-2)] underline-offset-4 transition-colors hover:text-[var(--fg)] hover:underline"
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
      <span className="sr-only">{t.newTab}</span>
    </a>
  );
}

/* ---------- cartão do case ---------- */

export const CARD =
  "overflow-hidden rounded-[20px] border border-[var(--panel-line)] bg-[var(--card)] p-5 sm:p-8";

export default function CaseCard({ item, index }: { item: Case; index: number }) {
  const lang = useLang();
  const href = useHref();
  const t = CASE_TEXT[lang];
  const displayName = item.nomeComercial
    ? `${item.cliente} · ${item.nomeComercial}`
    : item.cliente;
  const headingId = `${item.slug}-title`;

  return (
    <article id={item.slug} aria-labelledby={headingId} className={`${CARD} scroll-mt-24`}>
      {/* 1. CABEÇALHO */}
      <header>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--hl)]">
            {String(index + 1).padStart(2, "0")} · {item.tipoProjeto}
          </span>
          <StatusBadge status={item.status} />
        </div>
        <h3
          id={headingId}
          className="mt-4 text-[24px] font-normal tracking-[-0.03em] text-[var(--fg)] sm:text-[30px]"
        >
          {displayName}
        </h3>
        <p className="mt-1 text-sm text-[var(--fg-2)]">
          {[item.segmento, item.cidade].filter(Boolean).join(" · ")}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={t.scope}>
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>
      </header>

      <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10">
        {/* 2. IMAGENS */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <DeviceMockup desktop={item.imagens.desktop} mobile={item.imagens.mobile} />
        </div>

        <div className="grid gap-7">
          {/* 3. ANTES */}
          <div>
            <BlockLabel>{t.before}</BlockLabel>
            <p className="mt-3 text-[15px] leading-7 text-[var(--fg)]">{item.antes}</p>
          </div>

          {/* 4. O QUE FIZEMOS */}
          <div>
            <BlockLabel>{t.whatWeDid}</BlockLabel>
            <CheckList items={item.oQueFizemos} />
          </div>

          {/* 5. PRAZO */}
          {item.prazoEntrega && (
            <div>
              <BlockLabel>{t.timeline}</BlockLabel>
              <p className="mt-3 text-[15px] text-[var(--fg)]">{t.readyIn(item.prazoEntrega)}</p>
            </div>
          )}

          {/* 6. DEPOIS */}
          <div className="rounded-[16px] border border-[var(--panel-line)] bg-[var(--card)] p-5">
            <BlockLabel>{t.after}</BlockLabel>
            <p className="mt-3 text-[15px] leading-7 text-[var(--fg)]">{item.depois}</p>
          </div>

          {/* 7. MÉTRICAS */}
          {item.metricas && item.metricas.length > 0 && (
            <div>
              <BlockLabel>{t.results}</BlockLabel>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                {item.metricas.map((m) => (
                  <div
                    key={m.legenda}
                    className="flex flex-col rounded-[16px] border border-[var(--panel-line)] p-5"
                  >
                    <dt className="order-2 mt-2 text-sm leading-6 text-[var(--fg)]">{m.legenda}</dt>
                    <dd className="order-1 text-[40px] font-normal leading-none tracking-[-0.04em] text-[var(--fg)]">
                      {m.valor}
                    </dd>
                    <dd className="order-3 mt-2 text-[11px] text-[var(--fg-3)]">{t.source}: {m.fonte}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* 8. DEPOIMENTO */}
          {item.depoimento && <Testimonial t={item.depoimento} />}

          {/* 9. PREÇO */}
          {item.planoRelacionado && (
            <p className="text-sm leading-6 text-[var(--fg-2)]">
              {t.similar}{" "}
              <strong className="font-medium text-[var(--fg)]">
                {planName(lang, item.planoRelacionado.nome)}
              </strong>
              {lang === "en" ? ` ${t.plan}` : ""}, {t.from}{" "}
              <strong className="font-medium text-[var(--fg)]">
                R$ {item.planoRelacionado.precoAPartirDe}
                {t.perMonth}
              </strong>
              .{" "}
              <Link
                href={href(item.planoRelacionado.link)}
                className="text-[var(--hl)] underline underline-offset-4 hover:text-[var(--fg)]"
              >
                {t.seePlans}
              </Link>
            </p>
          )}

          {/* 10. CTAs */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[var(--panel-line)] pt-6">
            <DotButton
              external
              href={whatsappLink(t.ctaMsg(item.cliente))}
            >
              {t.cta}
            </DotButton>
            <ExternalLink href={item.url}>{t.live}</ExternalLink>
          </div>
        </div>
      </div>
    </article>
  );
}
