import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "../og";

export const alt = "Preços e planos de site, sistema e tráfego | FORX Digital";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "Planos FORX Digital",
    title: "Escolha o plano ideal",
    highlight: "para o seu negócio.",
  });
}
