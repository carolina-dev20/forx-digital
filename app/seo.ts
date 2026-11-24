import type { Metadata } from "next";

// ==========================================
// DADOS DO SITE (usados em metas, sitemap, robots e schema.org)
// ==========================================

export const SITE_URL = "https://www.forxdigital.com.br";
export const SITE_NAME = "FORX Digital";
export const PHONE = "+55 11 99488-0312";
export const INSTAGRAM = "https://www.instagram.com/forxpdigital";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Metas de uma página: título, descrição, endereço canônico e prévias de
 * compartilhamento (Open Graph e Twitter/X).
 * A imagem de compartilhamento vem dos arquivos opengraph-image.tsx.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  /** true: usa o título exatamente como está (sem "| FORX Digital" no fim). */
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: SITE_NAME,
      url: path,
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

/** Empresa: serviço profissional com atendimento em Guarulhos, São Paulo e região. */
export const organizationSchema: Json = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/opengraph-image`,
  description:
    "Tecnologia e soluções estratégicas que conectam gestão, automação, desenvolvimento de software e marketing digital para empresas crescerem de forma inteligente.",
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
  knowsAbout: [
    "Criação de sites",
    "Landing pages",
    "SEO local",
    "Google Ads",
    "Meta Ads",
    "CRM",
    "Automação de processos",
    "Gestão de processos",
    "Desenvolvimento de software",
  ],
};

export const websiteSchema: Json = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: "pt-BR",
  publisher: { "@id": ORG_ID },
};

/** Serviço oferecido pela FORX numa página específica. */
export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: name,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "City", name: "Guarulhos" },
      { "@type": "City", name: "São Paulo" },
    ],
  };
}

/** Caminho de navegação (Início › Página) mostrado nos resultados do Google. */
export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Início", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "/" : item.path}`,
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
