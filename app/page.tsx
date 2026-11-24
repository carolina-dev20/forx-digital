import type { Metadata } from "next";

import HomeContent from "./HomeContent";
import { homeFaqs } from "./home-faqs";
import {
  faqSchema,
  jsonLd,
  organizationSchema,
  pageMetadata,
  websiteSchema,
} from "./seo";

export const metadata: Metadata = pageMetadata({
  title: "Sites, CRM, Automação e Tráfego Pago em Guarulhos | FORX Digital",
  description:
    "Criação de sites, CRM, automação de processos e tráfego pago para empresas de Guarulhos e São Paulo. Tecnologia e gestão para o seu negócio crescer.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          organizationSchema,
          websiteSchema,
          faqSchema(homeFaqs),
        ])}
      />
      <HomeContent />
    </>
  );
}
