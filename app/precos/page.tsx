import type { Metadata } from "next";
import Link from "next/link";

import MegaMenu from "../components/MegaMenu";
import PricingSection from "../components/PricingSection";
import Scenes from "../components/scenes/Scenes";
import { SceneEffectsRoot } from "../components/scenes/blocks";
import s from "../components/scenes/scenes.module.css";
import { breadcrumbSchema, jsonLd, pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Preços e Planos: Site, Sistema e Tráfego",
  description:
    "Compare os planos da FORX Digital: site, Sistema FORX com agendamento e tráfego pago a partir de R$ 195/mês.",
  path: "/precos",
});

export default function PrecosPage() {
  return (
    <main className={s.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([{ name: "Preços e Planos", path: "/precos" }])
        )}
      />

      <MegaMenu />

      {/* TOPO: branco com brilho roxo e título revelado */}
      <Scenes
        compact
        eyebrow="PLANOS FORX DIGITAL"
        heroTitle={[
          { text: "Escolha o plano ideal" },
          { br: true },
          { text: "para o seu negócio.", hl: true },
        ]}
        description="Compare site, sistema e tráfego pago em cada plano e descubra quais soluções fazem sentido para o momento da sua empresa."
      />

      {/* TABELA DE PLANOS EM ROXO-CLARO */}
      <SceneEffectsRoot className={`${s.scenes} ${s.lightPanel}`}>
        <PricingSection />
      </SceneEffectsRoot>

      <footer className={`${s.scenes} ${s.foot}`}>
        <Link href="/">FORX Digital.</Link>
        <span className={s.footLinks}>
          <span>© 2026 FORX Digital — Tecnologia, gestão e crescimento.</span>
          <Link href="/privacidade">Política de Privacidade</Link>
        </span>
      </footer>
    </main>
  );
}
