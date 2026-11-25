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
    title: "Criação de Sites Profissionais para Empresas",
    description:
      "Criação de sites institucionais, landing pages e portfólios responsivos, com SEO e contato pelo WhatsApp. Atendimento 100% online.",
    service: "Criação de sites profissionais",
    crumb: "Criação de Sites",
  },
  en: {
    title: "Professional Website Design for Businesses",
    description:
      "Responsive business websites, landing pages and portfolios, with SEO and WhatsApp contact. 100% online service.",
    service: "Professional website design",
    crumb: "Website Design",
  },
  es: {
    title: "Creación de Sitios Web Profesionales para Empresas",
    description:
      "Creación de sitios institucionales, landing pages y portafolios adaptables, con SEO y contacto por WhatsApp. Atención 100% online.",
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
