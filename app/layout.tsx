import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieConsent from "./components/CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.forxdigital.com.br"),

  title: {
    default: "FORX Digital | Criação de Sites e SEO",
    template: "%s | FORX Digital",
  },

  description:
    "FORX Digital: criação de sites profissionais, landing pages e SEO para empresas que desejam fortalecer sua presença online e conquistar clientes.",

  applicationName: "FORX Digital",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.forxdigital.com.br/",
    siteName: "FORX Digital",
    title: "FORX Digital | Criação de Sites e SEO",
    description:
      "Criação de sites profissionais, landing pages e SEO para empresas que querem crescer no digital.",
  },

  twitter: {
    card: "summary",
    title: "FORX Digital | Criação de Sites e SEO",
    description:
      "Sites profissionais, landing pages e SEO para fortalecer a presença digital da sua empresa.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}