import type { Metadata } from "next";

import CriacaoContent from "./CriacaoContent";
import { criacaoContent, criacaoFaqs } from "./content";
import {
  breadcrumbSchema,
  faqSchema,
  jsonLd,
  pageMetadata,
  serviceSchema,
} from "../seo";

const PATH = "/criacao-de-sites";

const DESCRIPTION =
  "Criação de sites institucionais, landing pages e portfólios responsivos, com SEO e contato pelo WhatsApp. Atendimento em Guarulhos, São Paulo e região.";

export const metadata: Metadata = pageMetadata({
  title: "Criação de Sites Profissionais em Guarulhos e SP",
  description: DESCRIPTION,
  path: PATH,
});

export default function CriacaoDeSitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          serviceSchema({
            name: "Criação de sites profissionais",
            description: criacaoContent.hero.description,
            path: PATH,
          }),
          breadcrumbSchema([{ name: "Criação de Sites", path: PATH }]),
          faqSchema(criacaoFaqs),
        ])}
      />
      <CriacaoContent />
    </>
  );
}
