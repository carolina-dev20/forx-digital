"use client";

import { useRef } from "react";
import Link from "next/link";
import { Check, Globe, Wallet } from "lucide-react";

import { cases } from "@/data/cases";
import CaseCard, { whatsappLink } from "../components/cases/CaseCard";
import SystemCard from "../components/cases/SystemCard";
import MegaMenu from "../components/MegaMenu";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Scenes from "../components/scenes/Scenes";
import {
  BlockHead,
  CardDot,
  CtaGlow,
  d,
  twoLines,
  useSceneEffects,
} from "../components/scenes/blocks";
import s from "../components/scenes/scenes.module.css";
import { criacaoContent } from "../criacao-de-sites/content";

const WHATSAPP_URL = whatsappLink(
  "Olá! Conheci os cases da FORX Digital pelo site e gostaria de solicitar um orçamento."
);

/** O que vem no projeto, em itens concretos. */
const INCLUDED = [
  "Site responsivo (celular, tablet e computador)",
  "Domínio com o nome da sua empresa",
  "SEO local para aparecer nas buscas da sua região",
  "Perfil da Empresa no Google",
  "Botão de WhatsApp em todas as páginas",
  "Agenda online (opcional)",
];

/** Próximos passos para quem quer um site. */
const RELATED = [
  {
    slug: "criacao-de-sites",
    href: "/criacao-de-sites",
    icon: Globe,
    label: "Criação de sites",
    tag: "DESENVOLVIMENTO WEB",
    description: criacaoContent.hero.description,
  },
  {
    slug: "precos",
    href: "/precos",
    icon: Wallet,
    label: "Ver planos",
    tag: "PLANOS E PREÇOS",
    description:
      "Compare os planos de presença digital e veja quanto custa um projeto parecido com estes.",
  },
];

export default function CasesContent() {
  const rootRef = useRef<HTMLDivElement>(null);
  useSceneEffects(rootRef);

  return (
    <main className={s.main}>
      <MegaMenu />

      {/* TOPO (curto: os cases vêm logo abaixo) */}
      <Scenes
        compact
        eyebrow="CASES FORX"
        heroTitle={[
          { text: "Negócios que agora" },
          { br: true },
          { text: "aparecem no Google", hl: true },
          { text: " e recebem contato pelo WhatsApp." },
        ]}
        description="Veja o que fizemos para cada cliente, em quanto tempo e quanto custa um projeto parecido."
      />

      <div ref={rootRef}>
        <div className={`${s.scenes} ${s.rest}`}>
          {/* CASES */}
          <section id="cases" className={s.block} data-tone="light">
            <div className="max-w-[1180px]">
              <BlockHead
                label="01 / CASES"
                title={twoLines("Antes e depois", "de cada negócio.")}
                lead="O problema de cada cliente, o que fizemos e o que mudou."
              />

              <div className="mt-[6vh] grid gap-6">
                {cases.map((item, index) => (
                  <div key={item.slug} className={s.fade} data-fade style={d(0)}>
                    <CaseCard item={item} index={index} />
                  </div>
                ))}
                <div className={s.fade} data-fade style={d(0)}>
                  <SystemCard index={cases.length} />
                </div>
              </div>
            </div>
          </section>

          {/* O QUE VEM NO SEU PROJETO */}
          <section className={s.block} data-tone="light">
            <BlockHead
              label="02 / O QUE VEM NO SEU PROJETO"
              title={twoLines("Tudo o que", "vem no pacote.")}
            />

            <ul className="mt-[6vh] grid max-w-[1180px] gap-x-10 border-t border-[var(--panel-line)] sm:grid-cols-2">
              {INCLUDED.map((item, index) => (
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
            <BlockHead
              label="03 / SOLUÇÕES FORX"
              title={twoLines("Seu negócio pode", "ser o próximo case.")}
            />

            <div className={s.related}>
              {RELATED.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.slug}
                    href={item.href}
                    className={`${s.relCard} ${s.fade}`}
                    data-fade
                    style={d(0.08 * (index % 2))}
                  >
                    <div className={s.cellTop}>
                      <span className={s.tag}>{item.tag}</span>
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3>{item.label}</h3>
                    <p>{item.description}</p>
                    <CardDot />
                  </Link>
                );
              })}
            </div>
          </section>
        </div>

        {/* CHAMADA FINAL */}
        <CtaGlow
          label="VAMOS CRIAR ALGO?"
          title={twoLines("Seu projeto pode", "ser o próximo.")}
          text="Vamos transformar sua ideia em uma experiência digital que apresenta, conecta e gera contatos."
          button={{ label: "Solicitar orçamento", href: WHATSAPP_URL, external: true }}
        />

        {/* RODAPÉ */}
        <footer className={`${s.scenes} ${s.foot}`}>
          <Link href="/">FORX Digital.</Link>
          <span className={s.footLinks}>
            <span>© 2026 FORX Digital — Tecnologia, gestão e crescimento.</span>
            <Link href="/privacidade">Política de Privacidade</Link>
          </span>
        </footer>
      </div>

      <WhatsAppFloat />
    </main>
  );
}
