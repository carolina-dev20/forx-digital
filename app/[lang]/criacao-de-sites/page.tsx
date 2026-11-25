import type { Metadata } from "next";

import CriacaoContent from "./CriacaoContent";
import { criacaoContent, criacaoFaqs } from "./content";
import { getLang } from "@/app/i18n-server";
import type { Dict } from "@/app/i18n";
import {
  breadcrumbSchema,
  faqSchema,
  jsonLd,
  pageMetadata,
  serviceSchema,
} from "@/app/seo";

const PATH = "/criacao-de-sites";

const META: Dict<{ title: string; description: string; service: string; crumb: string }> = {
  pt: {
    title: "Criação de Sites Profissionais em Guarulhos e SP",
    description:
      "Criação de sites institucionais, landing pages e portfólios responsivos, com SEO e contato pelo WhatsApp. Atendimento em Guarulhos, São Paulo e região.",
    service: "Criação de sites profissionais",
    crumb: "Criação de Sites",
  },
  en: {
    title: "Professional Website Design in São Paulo, Brazil",
    description:
      "Responsive business websites, landing pages and portfolios, with SEO and WhatsApp contact. Serving Guarulhos, São Paulo and nearby.",
    service: "Professional website design",
    crumb: "Website Design",
  },
  es: {
    title: "Creación de Sitios Web Profesionales en São Paulo, Brasil",
    description:
      "Creación de sitios institucionales, landing pages y portafolios adaptables, con SEO y contacto por WhatsApp. Atención en Guarulhos, São Paulo y alrededores.",
    service: "Creación de sitios web profesionales",
    crumb: "Creación de Sitios Web",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const meta = META[lang];
  return pageMetadata({ lang, title: meta.title, description: meta.description, path: PATH });
}

export default async function CriacaoDeSitesPage() {
  const lang = await getLang();
  const meta = META[lang];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          serviceSchema({
            lang,
            name: meta.service,
            description: criacaoContent[lang].hero.description,
            path: PATH,
          }),
          breadcrumbSchema(lang, [{ name: meta.crumb, path: PATH }]),
          faqSchema(criacaoFaqs[lang]),
        ])}
      />
      <CriacaoContent />
    </>
  );
}
