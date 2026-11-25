import type { Metadata } from "next";

import GestaoServicePage from "../GestaoServicePage";
import { gestaoPages } from "../content";
import { getLang } from "@/app/i18n-server";
import {
  breadcrumbSchema,
  faqSchema,
  jsonLd,
  pageMetadata,
  serviceSchema,
} from "@/app/seo";

const SLUG = "processos-internos";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const content = gestaoPages[lang][SLUG];
  return pageMetadata({
    lang,
    title: content.seo.title,
    description: content.seo.description,
    path: content.href,
  });
}

export default async function Page() {
  const lang = await getLang();
  const content = gestaoPages[lang][SLUG];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          serviceSchema({
            lang,
            name: content.menuLabel,
            description: content.seo.description,
            path: content.href,
          }),
          breadcrumbSchema(lang, [{ name: content.menuLabel, path: content.href }]),
          faqSchema(content.faqs),
        ])}
      />
      <GestaoServicePage slug={SLUG} />
    </>
  );
}
