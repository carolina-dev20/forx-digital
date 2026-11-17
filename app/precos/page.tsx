import type { Metadata } from "next";
import Link from "next/link";

import MegaMenu from "../components/MegaMenu";
import PricingSection from "../components/PricingSection";
import Scenes from "../components/scenes/Scenes";
import s from "../components/scenes/scenes.module.css";
import { breadcrumbSchema, jsonLd, pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Preços e Planos de Sites e CRM",
  description:
    "Compare os planos da FORX Digital: sites com SEO e presença no Google a partir de R$ 200/mês e CRM com implantação para organizar o seu comercial.",
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
        description="Compare os planos de presença digital e de CRM e descubra quais soluções fazem sentido para o momento da sua empresa."
      />

      {/* TABELA DE PLANOS EM ROXO-CLARO */}
      <div className={`${s.scenes} ${s.lightPanel}`}>
        <PricingSection />
      </div>

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
