"use client";

import { useRef } from "react";
import Link from "next/link";
import { Globe, MapPin, Megaphone, Monitor, Search } from "lucide-react";

import MegaMenu from "../components/MegaMenu";
import Portfolio from "../components/Portfolio";
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
import { gestaoList } from "../gestao/content";

const WHATSAPP_URL =
  "https://wa.me/5511994880312?text=" +
  encodeURIComponent(
    "Olá! Conheci os cases da FORX Digital pelo site e gostaria de solicitar um orçamento."
  );

/** O que aparece nos cases: as frentes de trabalho de cada projeto. */
const DELIVERABLES = [
  {
    icon: Monitor,
    tag: "SITE E LANDING PAGE",
    title: "Uma vitrine própria",
    description:
      "Serviços, informações e canais de contato reunidos em um só lugar, com a identidade de cada marca.",
  },
  {
    icon: Search,
    tag: "SEO",
    title: "Estrutura para ser encontrado",
    description:
      "Otimização técnica e de conteúdo para que o site apareça para quem já está buscando aquele serviço.",
  },
  {
    icon: MapPin,
    tag: "PRESENÇA LOCAL",
    title: "Perfil da Empresa no Google",
    description:
      "Informações completas e consistentes para apoiar a descoberta do negócio nas buscas da região.",
  },
  {
    icon: Megaphone,
    tag: "TRÁFEGO PAGO",
    title: "Alcance além da busca",
    description:
      "Campanhas que complementam a estratégia e levam a marca a novas oportunidades de público.",
  },
];

/** Outras soluções da FORX (mesmo formato dos cartões da página de CRM). */
const RELATED = [
  {
    slug: "criacao-de-sites",
    href: "/criacao-de-sites",
    icon: Globe,
    label: "Criação de sites",
    tag: "DESENVOLVIMENTO WEB",
    description: criacaoContent.hero.description,
  },
  ...gestaoList.map((item) => ({
    slug: item.slug,
    href: item.href,
    icon: item.icon,
    label: item.menuLabel,
    tag: item.menuDescription.toUpperCase(),
    description: item.seo.description,
  })),
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
          { text: "Projetos que" },
          { br: true },
          { text: "geram resultados.", hl: true },
        ]}
        description="Negócios reais que passaram a ser encontrados no Google, apresentar melhor seus serviços e receber contatos direto pelo site e pelo WhatsApp."
      />

      <div ref={rootRef}>
        <div className={`${s.scenes} ${s.rest}`}>
          {/* CASES */}
          <Portfolio
            label="01 / CASES"
            title={twoLines("O que mudou", "para cada negócio.")}
            lead="O que foi desenvolvido em cada projeto e os resultados que ele trouxe para o cliente."
          />

          {/* O QUE ENTREGAMOS */}
          <section className={s.block}>
            <BlockHead
              label="02 / O QUE ENTREGAMOS"
              title={twoLines("Cada detalhe", "pensado para o cliente.")}
            />

            <div className={s.grid}>
              {DELIVERABLES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`${s.cell} ${s.fade}`}
                    data-fade
                    style={d(0.08 * (index % 2))}
                  >
                    <div className={s.cellTop}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <span className={s.tag}>{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* OUTRAS SOLUÇÕES */}
          <section className={s.block}>
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
