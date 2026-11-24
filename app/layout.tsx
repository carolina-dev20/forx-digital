import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import CookieConsent from "./components/CookieConsent";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "./seo";

// Inter Tight: fonte única do site (400/500/600/700), hospedada pelo next/font
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const DEFAULT_DESCRIPTION =
  "Criação de sites, CRM, automação de processos e tráfego pago para empresas de Guarulhos e São Paulo. Tecnologia e gestão para o seu negócio crescer.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "FORX Digital | Sites, CRM, Automação e Tráfego Pago",
    template: "%s | FORX Digital",
  },

  description: DEFAULT_DESCRIPTION,

  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",

  // Padrão das prévias; cada página define título, descrição e endereço próprios.
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    title: "FORX Digital | Sites, CRM, Automação e Tráfego Pago",
    description: DEFAULT_DESCRIPTION,
  },

  twitter: {
    card: "summary_large_image",
    title: "FORX Digital | Sites, CRM, Automação e Tráfego Pago",
    description: DEFAULT_DESCRIPTION,
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

export const viewport: Viewport = {
  themeColor: "#160c30",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}