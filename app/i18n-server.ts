import { lang } from "next/root-params";
import { notFound } from "next/navigation";

import { hasLocale, type Locale } from "./i18n";

/** Idioma da página atual (componentes e metas do servidor). */
export async function getLang(): Promise<Locale> {
  const value = await lang();
  if (!hasLocale(value)) notFound();
  return value;
}
