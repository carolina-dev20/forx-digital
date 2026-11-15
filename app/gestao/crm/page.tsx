import type { Metadata } from "next";
import GestaoServicePage from "../GestaoServicePage";
import { gestaoPages } from "../content";

const content = gestaoPages["crm"];

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  alternates: { canonical: content.href },
  openGraph: {
    title: `${content.seo.title} | FORX Digital`,
    description: content.seo.description,
    url: content.href,
  },
};

export default function Page() {
  return <GestaoServicePage slug="crm" />;
}
