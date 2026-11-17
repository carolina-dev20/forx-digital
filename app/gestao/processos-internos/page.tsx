import type { Metadata } from "next";
import GestaoServicePage from "../GestaoServicePage";
import { gestaoPages } from "../content";
import {
  breadcrumbSchema,
  faqSchema,
  jsonLd,
  pageMetadata,
  serviceSchema,
} from "../../seo";

const content = gestaoPages["processos-internos"];

export const metadata: Metadata = pageMetadata({
  title: content.seo.title,
  description: content.seo.description,
  path: content.href,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          serviceSchema({
            name: content.menuLabel,
            description: content.seo.description,
            path: content.href,
          }),
          breadcrumbSchema([{ name: content.menuLabel, path: content.href }]),
          faqSchema(content.faqs),
        ])}
      />
      <GestaoServicePage slug="processos-internos" />
    </>
  );
}
