import type { Metadata } from "next";
import { Inter_Tight, Plus_Jakarta_Sans } from "next/font/google";
import CookieConsent from "./components/CookieConsent";
import "./globals.css";

// Plus Jakarta Sans (pesos 200–800, normal e itálico), hospedada pelo next/font
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

// Inter Tight (400/500/600), usada no topo animado das páginas de Gestão
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.forxdigital.com.br"),

  title: {
    default: "FORX Digital | Tecnologia, gestão e crescimento",
    template: "%s | FORX Digital",
  },

  description:
    "FORX Digital: tecnologia e soluções estratégicas que conectam gestão, automação, desenvolvimento de software e marketing digital para empresas crescerem de forma inteligente.",

  applicationName: "FORX Digital",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.forxdigital.com.br/",
    siteName: "FORX Digital",
    title: "FORX Digital | Tecnologia, gestão e crescimento",
    description:
      "FORX Digital: tecnologia e soluções estratégicas que conectam gestão, automação, desenvolvimento de software e marketing digital para empresas crescerem de forma inteligente.",
  },

  twitter: {
    card: "summary",
    title: "FORX Digital | Tecnologia, gestão e crescimento",
    description:
      "FORX Digital: tecnologia e soluções estratégicas que conectam gestão, automação, desenvolvimento de software e marketing digital para empresas crescerem de forma inteligente.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}