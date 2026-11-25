/**
 * Idiomas do site.
 *
 * Português fica nos endereços sem prefixo (/, /precos...), para manter os links
 * e a posição no Google. Inglês e espanhol ficam em /en/... e /es/....
 * O proxy.ts faz a ponte: /precos é servido internamente por /pt/precos.
 */

export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

/** Texto em cada idioma. */
export type Dict<T> = Record<Locale, T>;

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Valor do atributo lang do <html> e do hreflang. */
export const htmlLang: Dict<string> = { pt: "pt-BR", en: "en", es: "es" };

/** Locale das prévias de compartilhamento (Open Graph). */
export const ogLocale: Dict<string> = { pt: "pt_BR", en: "en_US", es: "es_ES" };

/** Nome de cada idioma no próprio idioma (seletor). */
export const localeName: Dict<string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

/**
 * Endereço interno no idioma escolhido: "/precos" → "/en/precos",
 * "/#contato" → "/en#contato". Links externos e "#âncoras" ficam como estão.
 */
export function localizePath(lang: Locale, href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (lang === defaultLocale) return href;

  const match = href.match(/^([^?#]*)(.*)$/);
  const path = match?.[1] ?? href;
  const rest = match?.[2] ?? "";

  // Já está no formato de algum idioma (ex.: "/en/precos").
  const first = path.split("/")[1] ?? "";
  if (hasLocale(first)) return href;

  return `/${lang}${path === "/" ? "" : path}${rest}`;
}

/** Remove o prefixo de idioma: "/en/precos" → "/precos", "/es" → "/". */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");
  if (first && hasLocale(first)) return `/${rest.join("/")}`;
  return pathname || "/";
}

/** Link do WhatsApp comercial com mensagem pronta. */
export const WHATSAPP_NUMBER = "5511994880312";
export const whatsappUrl = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
