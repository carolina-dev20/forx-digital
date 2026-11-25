import type { Metadata } from "next";

import CasesContent from "./CasesContent";
import { getCases } from "@/data/cases";
import { getLang } from "@/app/i18n-server";
import { localizePath, type Dict } from "@/app/i18n";
import { SITE_NAME, SITE_URL, breadcrumbSchema, jsonLd, pageMetadata } from "@/app/seo";

const PATH = "/cases";

const META: Dict<{ title: string; description: string; crumb: string; collection: string; site: string }> = {
  pt: {
    title: "Cases: Sites e Presença Digital em Guarulhos",
    description:
      "Antes e depois de negócios de Guarulhos atendidos pela FORX: sites com SEO local e presença no Google para o Cleide Beauty Salão e a Larissa Barbosa.",
    crumb: "Cases",
    collection: "Cases da FORX Digital",
    site: "Site",
  },
  en: {
    title: "Case Studies: Websites and Online Presence in Guarulhos",
    description:
      "Before and after for Guarulhos businesses served by FORX: websites with local SEO and Google presence for Cleide Beauty Salão and Larissa Barbosa.",
    crumb: "Case studies",
    collection: "FORX Digital case studies",
    site: "Website",
  },
  es: {
    title: "Casos: Sitios Web y Presencia Digital en Guarulhos",
    description:
      "Antes y después de negocios de Guarulhos atendidos por FORX: sitios con SEO local y presencia en Google para Cleide Beauty Salão y Larissa Barbosa.",
    crumb: "Casos",
    collection: "Casos de FORX Digital",
    site: "Sitio web",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const meta = META[lang];
  return pageMetadata({ lang, title: meta.title, description: meta.description, path: PATH });
}

export default async function CasesPage() {
  const lang = await getLang();
  const meta = META[lang];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          breadcrumbSchema(lang, [{ name: meta.crumb, path: PATH }]),
          {
            // Página de cases: lista os projetos publicados (sites das clientes).
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: meta.collection,
            url: `${SITE_URL}${localizePath(lang, PATH)}`,
            hasPart: getCases(lang).map((item) => ({
              "@type": "CreativeWork",
              name: `${meta.site} ${item.cliente}`,
              url: item.url,
              about: item.segmento,
              creator: { "@type": "Organization", name: SITE_NAME },
            })),
          },
        ])}
      />
      <CasesContent />
    </>
  );
}
