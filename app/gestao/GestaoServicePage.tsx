"use client";

import ServicePage from "../components/scenes/ServicePage";
import { gestaoList, gestaoPages, type GestaoSlug } from "./content";

export default function GestaoServicePage({ slug }: { slug: GestaoSlug }) {
  const content = gestaoPages[slug];
  const related = gestaoList.filter((item) => item.slug !== slug);

  return <ServicePage content={content} related={related} />;
}
