import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import { notFound } from "next/navigation";

import CookieConsent from "@/app/components/CookieConsent";
import LangProvider from "@/app/components/LangProvider";
import "@/app/globals.css";
import { hasLocale, htmlLang, locales, ogLocale, type Dict } from "@/app/i18n";
import { SITE_NAME, SITE_URL } from "@/app/seo";

// Inter Tight: fonte única do site (400/500/600/700), hospedada pelo next/font
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Gera as páginas em português, inglês e espanhol. */
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const DEFAULT_TITLE: Dict<string> = {
  pt: "FORX Digital | Sites, CRM, Automação e Tráfego Pago",
  en: "FORX Digital | Websites, CRM, Automation and Paid Ads",
  es: "FORX Digital | Sitios web, CRM, Automatización y Publicidad Pagada",
};

const DEFAULT_DESCRIPTION: Dict<string> = {
  pt: "Criação de sites, CRM, automação de processos e tráfego pago para empresas, com atendimento 100% online. Tecnologia e gestão para o seu negócio crescer.",
  en: "Websites, CRM, process automation and paid ads for businesses, with 100% online service. Technology and management to help your business grow.",
  es: "Creación de sitios web, CRM, automatización de procesos y publicidad pagada para empresas, con atención 100% online. Tecnología y gestión para que tu negocio crezca.",
};

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  return {
    metadataBase: new URL(SITE_URL),

    title: {
      default: DEFAULT_TITLE[lang],
      template: "%s | FORX Digital",
    },

    description: DEFAULT_DESCRIPTION[lang],

    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "technology",

    // Padrão das prévias; cada página define título, descrição e endereço próprios.
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      siteName: SITE_NAME,
      title: DEFAULT_TITLE[lang],
      description: DEFAULT_DESCRIPTION[lang],
    },

    twitter: {
      card: "summary_large_image",
      title: DEFAULT_TITLE[lang],
      description: DEFAULT_DESCRIPTION[lang],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    // Evita que números do texto virem links de telefone automaticamente no iPhone.
    formatDetection: { telephone: false },

    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/icon.png",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#160c30",
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={htmlLang[lang]}
      className={`${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LangProvider lang={lang}>
          {children}
          <CookieConsent />
        </LangProvider>
      </body>
    </html>
  );
}
