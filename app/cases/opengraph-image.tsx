import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "../og";

export const alt = "Cases da FORX Digital: negócios que agora aparecem no Google";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "Cases FORX",
    title: "Negócios que agora",
    highlight: "aparecem no Google.",
  });
}
