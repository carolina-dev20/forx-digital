import { localizedOg } from "@/app/og";
import { locales } from "@/app/i18n";
import { gestaoPages } from "../content";

const og = localizedOg(
  Object.fromEntries(
    locales.map((lang) => {
      const content = gestaoPages[lang]["automacao"];
      return [
        lang,
        {
          alt: `${content.seo.title} | FORX Digital`,
          eyebrow: content.seo.title,
          title: `${content.hero.before} ${content.hero.highlight}`,
          highlight: content.hero.after,
        },
      ];
    })
  ) as Parameters<typeof localizedOg>[0]
);

export const generateImageMetadata = og.generateImageMetadata;
export default og.Image;
