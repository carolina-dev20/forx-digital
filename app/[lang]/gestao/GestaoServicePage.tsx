"use client";

import ServicePage from "@/app/components/scenes/ServicePage";
import { useLang } from "@/app/components/LangProvider";
import { gestaoList, gestaoPages, type GestaoSlug } from "./content";

export default function GestaoServicePage({ slug }: { slug: GestaoSlug }) {
  const lang = useLang();
  const content = gestaoPages[lang][slug];
  const related = gestaoList[lang].filter((item) => item.slug !== slug);

  return <ServicePage content={content} related={related} />;
}
