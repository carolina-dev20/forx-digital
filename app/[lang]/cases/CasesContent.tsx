"use client";

import { useRef } from "react";
import Link from "next/link";
import { Check, Globe, Wallet } from "lucide-react";

import { getCases } from "@/data/cases";
import CaseCard, { whatsappLink } from "@/app/components/cases/CaseCard";
import MegaMenu from "@/app/components/MegaMenu";
import WhatsAppFloat from "@/app/components/WhatsAppFloat";
import Scenes from "@/app/components/scenes/Scenes";
import SmallFooter from "@/app/components/scenes/SmallFooter";
import {
  BlockHead,
  CardDot,
  CtaGlow,
  d,
  twoLines,
  useSceneEffects,
} from "@/app/components/scenes/blocks";
import s from "@/app/components/scenes/scenes.module.css";
import { useHref, useLang } from "@/app/components/LangProvider";
import type { Dict } from "@/app/i18n";
import { criacaoContent } from "../criacao-de-sites/content";

type Related = { slug: string; href: string; icon: typeof Globe; label: string; tag: string; description?: string };

const TEXT: Dict<{
  whatsapp: string;
  eyebrow: string;
  hero: [string, string, string];
  description: string;
  casesLabel: string;
  casesTitle: [string, string];
  casesLead: string;
  includedLabel: string;
  includedTitle: [string, string];
  included: string[];
  relatedLabel: string;
  relatedTitle: [string, string];
  related: Related[];
  ctaLabel: string;
  ctaTitle: [string, string];
  ctaText: string;
  ctaButton: string;
}> = {
  pt: {
    whatsapp: "Olá! Conheci os cases da FORX Digital pelo site e gostaria de solicitar um orçamento.",
    eyebrow: "CASES FORX",
    hero: ["Negócios que agora", "aparecem no Google", " e recebem contato pelo WhatsApp."],
    description: "Veja o que fizemos para cada cliente, em quanto tempo e quanto custa um projeto parecido.",
    casesLabel: "01 / CASES",
    casesTitle: ["Antes e depois", "de cada negócio."],
    casesLead: "O problema de cada cliente, o que fizemos e o que mudou.",
    includedLabel: "02 / O QUE VEM NO SEU PROJETO",
    includedTitle: ["Tudo o que", "vem no pacote."],
    included: [
      "Site responsivo (celular, tablet e computador)",
      "Domínio com o nome da sua empresa",
      "SEO local para aparecer nas buscas da sua região",
      "Perfil da Empresa no Google",
      "Botão de WhatsApp em todas as páginas",
      "Agenda online (opcional)",
    ],
    relatedLabel: "03 / SOLUÇÕES FORX",
    relatedTitle: ["Seu negócio pode", "ser o próximo case."],
    related: [
      { slug: "criacao-de-sites", href: "/criacao-de-sites", icon: Globe, label: "Criação de sites", tag: "DESENVOLVIMENTO WEB" },
      { slug: "precos", href: "/precos", icon: Wallet, label: "Ver planos", tag: "PLANOS E PREÇOS", description: "Compare os planos e veja quanto custa um projeto parecido com estes." },
    ],
    ctaLabel: "VAMOS CRIAR ALGO?",
    ctaTitle: ["Seu projeto pode", "ser o próximo."],
    ctaText: "Vamos transformar sua ideia em uma experiência digital que apresenta, conecta e gera contatos.",
    ctaButton: "Solicitar orçamento",
  },
  en: {
    whatsapp: "Hi! I saw FORX Digital's case studies on the website and I would like to request a quote.",
    eyebrow: "FORX CASE STUDIES",
    hero: ["Businesses that now", "show up on Google", " and get contacted on WhatsApp."],
    description: "See what we did for each client, how long it took and how much a similar project costs.",
    casesLabel: "01 / CASE STUDIES",
    casesTitle: ["Before and after", "for each business."],
    casesLead: "Each client's problem, what we did and what changed.",
    includedLabel: "02 / WHAT COMES WITH YOUR PROJECT",
    includedTitle: ["Everything that", "comes in the package."],
    included: [
      "Responsive website (phone, tablet and computer)",
      "A domain with your company's name",
      "Local SEO to show up in searches in your area",
      "Google Business Profile",
      "WhatsApp button on every page",
      "Online booking (optional)",
    ],
    relatedLabel: "03 / FORX SOLUTIONS",
    relatedTitle: ["Your business could be", "the next case study."],
    related: [
      { slug: "criacao-de-sites", href: "/criacao-de-sites", icon: Globe, label: "Website design", tag: "WEB DEVELOPMENT" },
      { slug: "precos", href: "/precos", icon: Wallet, label: "See plans", tag: "PLANS AND PRICING", description: "Compare the plans and see how much a project like these costs." },
    ],
    ctaLabel: "SHALL WE CREATE SOMETHING?",
    ctaTitle: ["Your project could", "be the next one."],
    ctaText: "Let's turn your idea into an online experience that presents, connects and brings in contacts.",
    ctaButton: "Request a quote",
  },
  es: {
    whatsapp: "¡Hola! Conocí los casos de FORX Digital por el sitio web y me gustaría solicitar un presupuesto.",
    eyebrow: "CASOS FORX",
    hero: ["Negocios que ahora", "aparecen en Google", " y reciben contactos por WhatsApp."],
    description: "Mira lo que hicimos para cada cliente, en cuánto tiempo y cuánto cuesta un proyecto similar.",
    casesLabel: "01 / CASOS",
    casesTitle: ["Antes y después", "de cada negocio."],
    casesLead: "El problema de cada cliente, lo que hicimos y lo que cambió.",
    includedLabel: "02 / QUÉ INCLUYE TU PROYECTO",
    includedTitle: ["Todo lo que", "viene en el paquete."],
    included: [
      "Sitio adaptable (celular, tablet y computadora)",
      "Dominio con el nombre de tu empresa",
      "SEO local para aparecer en las búsquedas de tu región",
      "Perfil de Empresa en Google",
      "Botón de WhatsApp en todas las páginas",
      "Agenda online (opcional)",
    ],
    relatedLabel: "03 / SOLUCIONES FORX",
    relatedTitle: ["Tu negocio puede", "ser el próximo caso."],
    related: [
      { slug: "criacao-de-sites", href: "/criacao-de-sites", icon: Globe, label: "Creación de sitios web", tag: "DESARROLLO WEB" },
      { slug: "precos", href: "/precos", icon: Wallet, label: "Ver planes", tag: "PLANES Y PRECIOS", description: "Compara los planes y mira cuánto cuesta un proyecto parecido a estos." },
    ],
    ctaLabel: "¿CREAMOS ALGO?",
    ctaTitle: ["Tu proyecto puede", "ser el próximo."],
    ctaText: "Transformemos tu idea en una experiencia digital que presenta, conecta y genera contactos.",
    ctaButton: "Solicitar presupuesto",
  },
};

export default function CasesContent() {
  const rootRef = useRef<HTMLDivElement>(null);
  useSceneEffects(rootRef);

  const lang = useLang();
  const href = useHref();
  const t = TEXT[lang];
  const cases = getCases(lang);

  return (
    <main className={s.main}>
      <MegaMenu />

      {/* TOPO (curto: os cases vêm logo abaixo) */}
      <Scenes
        compact
        eyebrow={t.eyebrow}
        heroTitle={[
          { text: t.hero[0] },
          { br: true },
          { text: t.hero[1], hl: true },
          { text: t.hero[2] },
        ]}
        description={t.description}
      />

      <div ref={rootRef}>
        <div className={`${s.scenes} ${s.rest}`}>
          {/* CASES */}
          <section id="cases" className={s.block} data-tone="light">
            <div className="max-w-[1180px]">
              <BlockHead
                label={t.casesLabel}
                title={twoLines(...t.casesTitle)}
                lead={t.casesLead}
              />

              <div className="mt-[6vh] grid gap-6">
                {cases.map((item, index) => (
                  <div key={item.slug} className={s.fade} data-fade style={d(0)}>
                    <CaseCard item={item} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* O QUE VEM NO SEU PROJETO */}
          <section className={s.block} data-tone="light">
            <BlockHead label={t.includedLabel} title={twoLines(...t.includedTitle)} />

            <ul className="mt-[6vh] grid max-w-[1180px] gap-x-10 border-t border-[var(--panel-line)] sm:grid-cols-2">
              {t.included.map((item, index) => (
                <li
                  key={item}
                  className={`${s.fade} flex items-center gap-4 border-b border-[var(--panel-line)] py-5 text-[15px] text-[var(--fg)] sm:text-base`}
                  data-fade
                  style={d(0.05 * (index % 2))}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--card-2)] text-[var(--hl)]">
                    <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* PRÓXIMOS PASSOS */}
          <section className={s.block} data-tone="violet">
            <BlockHead label={t.relatedLabel} title={twoLines(...t.relatedTitle)} />

            <div className={s.related}>
              {t.related.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.slug}
                    href={href(item.href)}
                    className={`${s.relCard} ${s.fade}`}
                    data-fade
                    style={d(0.08 * (index % 2))}
                  >
                    <div className={s.cellTop}>
                      <span className={s.tag}>{item.tag}</span>
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3>{item.label}</h3>
                    <p>{item.description ?? criacaoContent[lang].hero.description}</p>
                    <CardDot />
                  </Link>
                );
              })}
            </div>
          </section>
        </div>

        {/* CHAMADA FINAL */}
        <CtaGlow
          label={t.ctaLabel}
          title={twoLines(...t.ctaTitle)}
          text={t.ctaText}
          button={{ label: t.ctaButton, href: whatsappLink(t.whatsapp), external: true }}
        />

        <SmallFooter />
      </div>

      <WhatsAppFloat />
    </main>
  );
}
