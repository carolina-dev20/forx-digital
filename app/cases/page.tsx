import type { Metadata } from "next";

import CasesContent from "./CasesContent";
import { cases } from "@/data/cases";
import { SITE_NAME, SITE_URL, breadcrumbSchema, jsonLd, pageMetadata } from "../seo";

const PATH = "/cases";

export const metadata: Metadata = pageMetadata({
  title: "Cases: Sites e Presença Digital em Guarulhos",
  description:
    "Antes e depois de negócios de Guarulhos atendidos pela FORX: sites com SEO local e presença no Google para o Cleide Beauty Salão e a Larissa Barbosa.",
  path: PATH,
});

export default function CasesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          breadcrumbSchema([{ name: "Cases", path: PATH }]),
          {
            // Página de cases: lista os projetos publicados (sites das clientes).
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Cases da FORX Digital",
            url: `${SITE_URL}${PATH}`,
            hasPart: cases.map((item) => ({
              "@type": "CreativeWork",
              name: `Site ${item.cliente}`,
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
