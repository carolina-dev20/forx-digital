import type { Metadata } from "next";

import { htmlLang, localizePath, locales, ogLocale, type Dict, type Locale } from "./i18n";

// ==========================================
// DADOS DO SITE (usados em metas, sitemap, robots e schema.org)
// ==========================================

export const SITE_URL = "https://www.forxdigital.com.br";
export const SITE_NAME = "FORX Digital";
export const PHONE = "+55 11 99488-0312";
export const INSTAGRAM = "https://www.instagram.com/forxpdigital";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** Endereços da mesma página em cada idioma (hreflang), para o Google. */
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const lang of locales) languages[htmlLang[lang]] = localizePath(lang, path);
  languages["x-default"] = path;
  return languages;
}

/**
 * Metas de uma página: título, descrição, endereço canônico, versões em outros
 * idiomas e prévias de compartilhamento (Open Graph e Twitter/X).
 * A imagem de compartilhamento vem dos arquivos opengraph-image.tsx.
 */
export function pageMetadata({
  lang,
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  lang: Locale;
  title: string;
  description: string;
  /** Endereço em português, sem prefixo de idioma (ex.: "/precos"). */
  path: string;
  /** true: usa o título exatamente como está (sem "| FORX Digital" no fim). */
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const url = localizePath(lang, path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      siteName: SITE_NAME,
      url,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

// ==========================================
// SCHEMA.ORG (dados estruturados para o Google)
// ==========================================

type Json = Record<string, unknown>;

const ORG_DESCRIPTION: Dict<string> = {
  pt: "Tecnologia e soluções estratégicas que conectam gestão, automação, desenvolvimento de software e marketing digital para empresas crescerem de forma inteligente.",
  en: "Technology and strategic solutions that connect management, automation, software development and digital marketing so businesses can grow smartly.",
  es: "Tecnología y soluciones estratégicas que conectan gestión, automatización, desarrollo de software y marketing digital para que las empresas crezcan de forma inteligente.",
};

const ORG_TOPICS: Dict<string[]> = {
  pt: ["Criação de sites", "Landing pages", "SEO local", "Google Ads", "Meta Ads", "CRM", "Automação de processos", "Gestão de processos", "Desenvolvimento de software"],
  en: ["Website design", "Landing pages", "Local SEO", "Google Ads", "Meta Ads", "CRM", "Process automation", "Process management", "Software development"],
  es: ["Creación de sitios web", "Landing pages", "SEO local", "Google Ads", "Meta Ads", "CRM", "Automatización de procesos", "Gestión de procesos", "Desarrollo de software"],
};

/** Empresa: serviço profissional com atendimento em Guarulhos, São Paulo e região. */
export const organizationSchema = (lang: Locale): Json => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/opengraph-image`,
  description: ORG_DESCRIPTION[lang],
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guarulhos",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Guarulhos" },
    { "@type": "City", name: "São Paulo" },
    { "@type": "State", name: "São Paulo" },
  ],
  sameAs: [INSTAGRAM],
  knowsAbout: ORG_TOPICS[lang],
});

export const websiteSchema = (lang: Locale): Json => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: `${SITE_URL}${localizePath(lang, "/")}`,
  inLanguage: htmlLang[lang],
  publisher: { "@id": ORG_ID },
});

/** Serviço oferecido pela FORX numa página específica. */
export function serviceSchema({
  lang,
  name,
  description,
  path,
}: {
  lang: Locale;
  name: string;
  description: string;
  path: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${localizePath(lang, path)}`,
    inLanguage: htmlLang[lang],
    serviceType: name,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "City", name: "Guarulhos" },
      { "@type": "City", name: "São Paulo" },
    ],
  };
}

/** Caminho de navegação (Início › Página) mostrado nos resultados do Google. */
const HOME_LABEL: Dict<string> = { pt: "Início", en: "Home", es: "Inicio" };

export function breadcrumbSchema(lang: Locale, items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: HOME_LABEL[lang], path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${localizePath(lang, item.path)}`,
    })),
  };
}

/** Perguntas frequentes da página. */
export function faqSchema(faqs: { question: string; answer: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Bloco <script type="application/ld+json"> pronto para renderizar. */
export function jsonLd(data: Json | Json[]) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
