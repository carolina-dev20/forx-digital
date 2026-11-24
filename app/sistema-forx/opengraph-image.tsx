import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "../og";

export const alt = "Sistema FORX: agenda online e lembretes automáticos no WhatsApp";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "Sistema FORX",
    title: "Agenda e lembretes",
    highlight: "automáticos.",
  });
}
