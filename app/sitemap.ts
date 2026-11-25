import type { MetadataRoute } from "next";

import { localizePath, locales } from "./i18n";
import { SITE_URL, languageAlternates } from "./seo";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const pages: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/criacao-de-sites", changeFrequency: "monthly", priority: 0.9 },
  ...["processos-internos", "crm", "automacao"].map((slug) => ({
    path: `/gestao/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  { path: "/sistema-forx", changeFrequency: "monthly", priority: 0.8 },
  { path: "/cases", changeFrequency: "monthly", priority: 0.8 },
  { path: "/precos", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacidade", changeFrequency: "yearly", priority: 0.3 },
];

/** Cada página em português, inglês e espanhol, com os links entre os idiomas. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.flatMap((page) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(page.path))
        .filter(([key]) => key !== "x-default")
        .map(([key, path]) => [key, `${SITE_URL}${path}`])
    );

    return locales.map((lang) => ({
      url: `${SITE_URL}${localizePath(lang, page.path)}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      // Português é o idioma principal do site.
      priority: lang === "pt" ? page.priority : Math.round(page.priority * 0.8 * 10) / 10,
      alternates: { languages },
    }));
  });
}
