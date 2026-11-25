import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, hasLocale } from "./app/i18n";

/**
 * Endereços por idioma:
 * - /en/... e /es/... seguem direto para as páginas em inglês e espanhol;
 * - /pt/... redireciona para o endereço sem prefixo (evita página duplicada);
 * - o resto (/, /precos...) é servido internamente pela versão em português.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  // As imagens de compartilhamento em português são geradas em /pt/.../opengraph-image:
  // servidas direto, sem redirecionar (WhatsApp e redes sociais leem esse endereço).
  if (first === defaultLocale && pathname.includes("/opengraph-image")) {
    return NextResponse.next();
  }

  if (first === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (hasLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Fora: arquivos internos do Next e arquivos com extensão (imagens, robots.txt, sitemap.xml...).
  matcher: ["/((?!_next/|api/|.*\\.[^/]+$).*)"],
};
