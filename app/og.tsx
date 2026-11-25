import { ImageResponse } from "next/og";

import { hasLocale, type Locale } from "./i18n";

/** Tamanho padrão das prévias de compartilhamento (WhatsApp, LinkedIn, Facebook, X). */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Prévia no visual do site: fundo branco com brilho roxo vindo do topo,
 * selo, título e o endereço do site.
 */
export function renderOg({
  eyebrow,
  title,
  highlight,
}: {
  eyebrow: string;
  title: string;
  /** Trecho do título destacado em roxo (opcional, vai na linha de baixo). */
  highlight?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse 90% 75% at 50% -10%, #b096ff 0%, #e2daff 45%, #ffffff 80%)",
          color: "#1a1238",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#7942e8",
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 4,
              color: "#4b3a8f",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {highlight && (
            <div
              style={{
                fontSize: 76,
                lineHeight: 1.05,
                letterSpacing: -2,
                color: "#7942e8",
              }}
            >
              {highlight}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#3a2f5c",
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 700, color: "#1a1238" }}>
            FORX Digital
          </div>
          <div>forxdigital.com.br</div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}

type OgText = { alt: string; eyebrow: string; title: string; highlight?: string };
type LangParams = { lang: string } | Promise<{ lang: string }>;

/**
 * Prévia de compartilhamento em cada idioma. Uso num opengraph-image.tsx:
 *   const og = localizedOg({ pt: {...}, en: {...}, es: {...} });
 *   export const generateImageMetadata = og.generateImageMetadata;
 *   export default og.Image;
 */
export function localizedOg(text: Record<Locale, OgText>) {
  const pick = async (params: LangParams) => {
    const { lang } = await params;
    return text[hasLocale(lang) ? lang : "pt"];
  };

  return {
    async generateImageMetadata({ params }: { params: LangParams }) {
      const { alt } = await pick(params);
      return [{ id: "og", alt, size: OG_SIZE, contentType: OG_CONTENT_TYPE }];
    },
    async Image({ params }: { params: LangParams }) {
      const { eyebrow, title, highlight } = await pick(params);
      return renderOg({ eyebrow, title, highlight });
    },
  };
}
