import type { Metadata } from "next";

import MegaMenu from "@/app/components/MegaMenu";
import WhatsAppFloat from "@/app/components/WhatsAppFloat";
import SystemCard from "@/app/components/cases/SystemCard";
import Scenes from "@/app/components/scenes/Scenes";
import SmallFooter from "@/app/components/scenes/SmallFooter";
import { SceneEffectsRoot } from "@/app/components/scenes/blocks";
import s from "@/app/components/scenes/scenes.module.css";
import { getLang } from "@/app/i18n-server";
import type { Dict } from "@/app/i18n";
import { breadcrumbSchema, jsonLd, pageMetadata, serviceSchema } from "@/app/seo";

const PATH = "/sistema-forx";

const TEXT: Dict<{
  title: string;
  description: string;
  name: string;
  eyebrow: string;
  hero: [string, string];
  lead: string;
}> = {
  pt: {
    title: "Sistema FORX: Agenda Online e Lembretes no WhatsApp",
    description:
      "Sistema FORX: agenda online pelo link do seu negócio, aprovação dos horários e lembretes automáticos no WhatsApp para quem trabalha com horário marcado.",
    name: "Sistema FORX",
    eyebrow: "SISTEMA FORX",
    hero: ["Agenda e lembretes", "automáticos."],
    lead: "Sistema próprio da FORX para negócios que trabalham com horário marcado: o cliente agenda pelo link, você aprova e ele recebe o lembrete no WhatsApp.",
  },
  en: {
    title: "FORX System: Online Booking and WhatsApp Reminders",
    description:
      "FORX System: online booking through your business's link, appointment approval and automatic WhatsApp reminders for appointment-based businesses.",
    name: "FORX System",
    eyebrow: "FORX SYSTEM",
    hero: ["Automatic booking", "and reminders."],
    lead: "FORX's own system for appointment-based businesses: the customer books through the link, you approve and they get the reminder on WhatsApp.",
  },
  es: {
    title: "Sistema FORX: Agenda Online y Recordatorios por WhatsApp",
    description:
      "Sistema FORX: agenda online por el enlace de tu negocio, aprobación de las citas y recordatorios automáticos por WhatsApp para negocios con cita previa.",
    name: "Sistema FORX",
    eyebrow: "SISTEMA FORX",
    hero: ["Agenda y recordatorios", "automáticos."],
    lead: "Sistema propio de FORX para negocios con cita previa: el cliente agenda por el enlace, tú apruebas y él recibe el recordatorio por WhatsApp.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const t = TEXT[lang];
  return pageMetadata({ lang, title: t.title, description: t.description, path: PATH });
}

export default async function SistemaForxPage() {
  const lang = await getLang();
  const t = TEXT[lang];

  return (
    <main className={s.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          breadcrumbSchema(lang, [{ name: t.name, path: PATH }]),
          serviceSchema({ lang, name: t.name, description: t.description, path: PATH }),
        ])}
      />

      <MegaMenu />

      <Scenes
        compact
        eyebrow={t.eyebrow}
        heroTitle={[{ text: t.hero[0] }, { br: true }, { text: t.hero[1], hl: true }]}
        description={t.lead}
      />

      <SceneEffectsRoot className={`${s.scenes} ${s.rest}`}>
        <section className={s.block} data-tone="light">
          <div className={`${s.fade} max-w-[1180px]`} data-fade>
            <SystemCard />
          </div>
        </section>
      </SceneEffectsRoot>

      <SmallFooter />

      <WhatsAppFloat />
    </main>
  );
}
