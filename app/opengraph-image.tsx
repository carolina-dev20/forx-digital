import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "./og";

export const alt = "FORX Digital: tecnologia, gestão e crescimento";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "Tecnologia, gestão e crescimento",
    title: "Sites, CRM, automação e tráfego pago",
    highlight: "para sua empresa crescer.",
  });
}
