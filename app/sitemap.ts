import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/criacao-de-sites`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...["processos-internos", "crm", "automacao"].map((slug) => ({
      url: `${SITE_URL}/gestao/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/precos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacidade`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
