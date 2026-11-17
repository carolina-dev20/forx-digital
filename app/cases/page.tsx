import type { Metadata } from "next";

import CasesContent from "./CasesContent";
import { breadcrumbSchema, jsonLd, pageMetadata } from "../seo";

const PATH = "/cases";

export const metadata: Metadata = pageMetadata({
  title: "Cases: Sites e Presença Digital",
  description:
    "Conheça os projetos da FORX Digital: sites com SEO local, presença no Google e tráfego pago para o Cleide Beauty Salão e a maquiadora Larissa Barbosa.",
  path: PATH,
});

export default function CasesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema([{ name: "Cases", path: PATH }]))}
      />
      <CasesContent />
    </>
  );
}
