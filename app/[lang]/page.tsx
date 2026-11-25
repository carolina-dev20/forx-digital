import type { Metadata } from "next";

import HomeContent from "./HomeContent";
import { homeFaqs } from "./home-faqs";
import { getLang } from "@/app/i18n-server";
import type { Dict } from "@/app/i18n";
import {
  faqSchema,
  jsonLd,
  organizationSchema,
  pageMetadata,
  websiteSchema,
} from "@/app/seo";

const META: Dict<{ title: string; description: string }> = {
  pt: {
    title: "Sites, CRM, Automação e Tráfego Pago em Guarulhos | FORX Digital",
    description:
      "Criação de sites, CRM, automação de processos e tráfego pago para empresas de Guarulhos e São Paulo. Tecnologia e gestão para o seu negócio crescer.",
  },
  en: {
    title: "Websites, CRM, Automation and Paid Ads in São Paulo, Brazil | FORX Digital",
    description:
      "Websites, CRM, process automation and paid ads for businesses in Guarulhos and São Paulo, Brazil. Technology and management to help your business grow.",
  },
  es: {
    title: "Sitios web, CRM, Automatización y Publicidad en São Paulo, Brasil | FORX Digital",
    description:
      "Creación de sitios web, CRM, automatización de procesos y publicidad pagada para empresas de Guarulhos y São Paulo, Brasil. Tecnología y gestión para que tu negocio crezca.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  return pageMetadata({ lang, ...META[lang], path: "/", absoluteTitle: true });
}

export default async function Home() {
  const lang = await getLang();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          organizationSchema(lang),
          websiteSchema(lang),
          faqSchema(homeFaqs[lang]),
        ])}
      />
      <HomeContent />
    </>
  );
}
