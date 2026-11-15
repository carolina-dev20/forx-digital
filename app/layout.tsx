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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}