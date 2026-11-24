import type { Metadata } from "next";
import Link from "next/link";

import MegaMenu from "../components/MegaMenu";
import WhatsAppFloat from "../components/WhatsAppFloat";
import SystemCard from "../components/cases/SystemCard";
import Scenes from "../components/scenes/Scenes";
import { SceneEffectsRoot } from "../components/scenes/blocks";
import s from "../components/scenes/scenes.module.css";
import { breadcrumbSchema, jsonLd, pageMetadata, serviceSchema } from "../seo";

const PATH = "/sistema-forx";
const DESCRIPTION =
  "Sistema FORX: agenda online pelo link do seu negócio, aprovação dos horários e lembretes automáticos no WhatsApp para quem trabalha com horário marcado.";

export const metadata: Metadata = pageMetadata({
  title: "Sistema FORX: Agenda Online e Lembretes no WhatsApp",
  description: DESCRIPTION,
  path: PATH,
});

export default function SistemaForxPage() {
  return (
    <main className={s.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          breadcrumbSchema([{ name: "Sistema FORX", path: PATH }]),
          serviceSchema({ name: "Sistema FORX", description: DESCRIPTION, path: PATH }),
        ])}
      />

      <MegaMenu />

      <Scenes
        compact
        eyebrow="SISTEMA FORX"
        heroTitle={[
          { text: "Agenda e lembretes" },
          { br: true },
          { text: "automáticos.", hl: true },
        ]}
        description="Sistema próprio da FORX para negócios que trabalham com horário marcado: o cliente agenda pelo link, você aprova e ele recebe o lembrete no WhatsApp."
      />

      <SceneEffectsRoot className={`${s.scenes} ${s.rest}`}>
        <section className={s.block} data-tone="light">
          <div className={`${s.fade} max-w-[1180px]`} data-fade>
            <SystemCard />
          </div>
        </section>
      </SceneEffectsRoot>

      <footer className={`${s.scenes} ${s.foot}`}>
        <Link href="/">FORX Digital.</Link>
        <span className={s.footLinks}>
          <span>© 2026 FORX Digital — Tecnologia, gestão e crescimento.</span>
          <Link href="/privacidade">Política de Privacidade</Link>
        </span>
      </footer>

      <WhatsAppFloat />
    </main>
  );
}
