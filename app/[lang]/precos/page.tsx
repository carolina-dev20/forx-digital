import type { Metadata } from "next";

import MegaMenu from "@/app/components/MegaMenu";
import PricingSection from "@/app/components/PricingSection";
import Scenes from "@/app/components/scenes/Scenes";
import SmallFooter from "@/app/components/scenes/SmallFooter";
import { SceneEffectsRoot } from "@/app/components/scenes/blocks";
import s from "@/app/components/scenes/scenes.module.css";
import { getLang } from "@/app/i18n-server";
import type { Dict } from "@/app/i18n";
import { breadcrumbSchema, jsonLd, pageMetadata } from "@/app/seo";

const PATH = "/precos";

const TEXT: Dict<{
  title: string;
  description: string;
  crumb: string;
  eyebrow: string;
  hero: [string, string];
  lead: string;
}> = {
  pt: {
    title: "Preços e Planos: Site, Sistema e Tráfego",
    description:
      "Compare os planos da FORX Digital: site, Sistema FORX com agendamento e tráfego pago a partir de R$ 195/mês.",
    crumb: "Preços e Planos",
    eyebrow: "PLANOS FORX DIGITAL",
    hero: ["Escolha o plano ideal", "para o seu negócio."],
    lead: "Compare site, sistema e tráfego pago em cada plano e descubra quais soluções fazem sentido para o momento da sua empresa.",
  },
  en: {
    title: "Pricing and Plans: Website, System and Ads",
    description:
      "Compare FORX Digital's plans: website, the FORX System with online booking, and paid ads, from R$ 195/month.",
    crumb: "Pricing",
    eyebrow: "FORX DIGITAL PLANS",
    hero: ["Choose the right plan", "for your business."],
    lead: "Compare website, system and paid ads in each plan and find the solutions that make sense for where your company is right now.",
  },
  es: {
    title: "Precios y Planes: Sitio Web, Sistema y Publicidad",
    description:
      "Compara los planes de FORX Digital: sitio web, Sistema FORX con agenda online y publicidad pagada desde R$ 195/mes.",
    crumb: "Precios y Planes",
    eyebrow: "PLANES FORX DIGITAL",
    hero: ["Elige el plan ideal", "para tu negocio."],
    lead: "Compara sitio web, sistema y publicidad pagada en cada plan y descubre qué soluciones tienen sentido para el momento de tu empresa.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const t = TEXT[lang];
  return pageMetadata({ lang, title: t.title, description: t.description, path: PATH });
}

export default async function PrecosPage() {
  const lang = await getLang();
  const t = TEXT[lang];

  return (
    <main className={s.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(lang, [{ name: t.crumb, path: PATH }]))}
      />

      <MegaMenu />

      {/* TOPO: branco com brilho roxo e título revelado */}
      <Scenes
        compact
        eyebrow={t.eyebrow}
        heroTitle={[{ text: t.hero[0] }, { br: true }, { text: t.hero[1], hl: true }]}
        description={t.lead}
      />

      {/* TABELA DE PLANOS EM ROXO-CLARO */}
      <SceneEffectsRoot className={`${s.scenes} ${s.lightPanel}`}>
        <PricingSection />
      </SceneEffectsRoot>

      <SmallFooter />
    </main>
  );
}
