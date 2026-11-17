import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "../../og";
import { gestaoPages } from "../content";

const content = gestaoPages["crm"];

export const alt = `${content.seo.title} | FORX Digital`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: content.seo.title,
    title: `${content.hero.before} ${content.hero.highlight}`,
    highlight: content.hero.after,
  });
}
