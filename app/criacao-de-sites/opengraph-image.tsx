import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "../og";

export const alt = "Criação de sites profissionais em Guarulhos e São Paulo | FORX Digital";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "Criação de sites",
    title: "Sua marca merece",
    highlight: "um espaço próprio no digital.",
  });
}
