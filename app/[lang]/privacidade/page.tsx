import type { Metadata } from "next";

import MegaMenu from "@/app/components/MegaMenu";
import Scenes from "@/app/components/scenes/Scenes";
import SmallFooter from "@/app/components/scenes/SmallFooter";
import { SceneEffectsRoot } from "@/app/components/scenes/blocks";
import s from "@/app/components/scenes/scenes.module.css";
import { getLang } from "@/app/i18n-server";
import type { Dict } from "@/app/i18n";
import { breadcrumbSchema, jsonLd, pageMetadata } from "@/app/seo";
import Policy from "./Policy";

const PATH = "/privacidade";

const TEXT: Dict<{ title: string; description: string; hero: [string, string]; lead: string }> = {
  pt: {
    title: "Política de Privacidade",
    description:
      "Como a FORX Digital trata dados pessoais no site: cookies, Google Analytics, contato pelo WhatsApp e os seus direitos pela LGPD.",
    hero: ["Política de", "Privacidade"],
    lead: "Como tratamos os dados de quem visita o site da FORX Digital, por que fazemos isso e como você controla as suas informações.",
  },
  en: {
    title: "Privacy Policy",
    description:
      "How FORX Digital handles personal data on its website: cookies, Google Analytics, WhatsApp contact and your rights under Brazil's LGPD.",
    hero: ["Privacy", "Policy"],
    lead: "How we handle the data of people who visit the FORX Digital website, why we do it and how you control your information.",
  },
  es: {
    title: "Política de Privacidad",
    description:
      "Cómo FORX Digital trata los datos personales en su sitio: cookies, Google Analytics, contacto por WhatsApp y tus derechos según la LGPD de Brasil.",
    hero: ["Política de", "Privacidad"],
    lead: "Cómo tratamos los datos de quienes visitan el sitio de FORX Digital, por qué lo hacemos y cómo controlas tu información.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const t = TEXT[lang];
  return pageMetadata({ lang, title: t.title, description: t.description, path: PATH });
}

export default async function PrivacidadePage() {
  const lang = await getLang();
  const t = TEXT[lang];

  return (
    <main className={s.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(lang, [{ name: t.title, path: PATH }]))}
      />

      <MegaMenu />

      <Scenes
        compact
        eyebrow="LGPD"
        heroTitle={[{ text: t.hero[0] }, { br: true }, { text: t.hero[1], hl: true }]}
        description={t.lead}
      />

      <SceneEffectsRoot className={`${s.scenes} ${s.lightPanel}`}>
        <article className={`${s.legal} ${s.fade}`} data-fade lang={lang === "pt" ? "pt-BR" : lang}>
          <Policy lang={lang} />
        </article>
      </SceneEffectsRoot>

      <SmallFooter />
    </main>
  );
}
