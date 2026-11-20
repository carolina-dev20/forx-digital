import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "../og";

export const alt = "Cases da FORX Digital: projetos que geram resultados";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "Cases FORX",
    title: "Projetos que",
    highlight: "geram resultados.",
  });
}
