"use client";

import { createContext, useContext, type ReactNode } from "react";

import { defaultLocale, localizePath, type Dict, type Locale } from "../i18n";

const LangContext = createContext<Locale>(defaultLocale);

/** Disponibiliza o idioma da página para os componentes do navegador. */
export default function LangProvider({
  lang,
  children,
}: {
  lang: Locale;
  children: ReactNode;
}) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

/** Idioma da página atual. */
export function useLang(): Locale {
  return useContext(LangContext);
}

/** Textos no idioma atual: const t = useT(TEXT). */
export function useT<T>(dict: Dict<T>): T {
  return dict[useLang()];
}

/** Converte um link interno para o idioma atual ("/precos" → "/en/precos"). */
export function useHref() {
  const lang = useLang();
  return (href: string) => localizePath(lang, href);
}
