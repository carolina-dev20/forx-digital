import { localizedOg } from "@/app/og";

const og = localizedOg({
  "pt": {
    "alt": "Cases da FORX Digital: negócios que agora aparecem no Google",
    "eyebrow": "Cases FORX",
    "title": "Negócios que agora",
    "highlight": "aparecem no Google."
  },
  "en": {
    "alt": "FORX Digital case studies: businesses that now show up on Google",
    "eyebrow": "FORX case studies",
    "title": "Businesses that now",
    "highlight": "show up on Google."
  },
  "es": {
    "alt": "Casos de FORX Digital: negocios que ahora aparecen en Google",
    "eyebrow": "Casos FORX",
    "title": "Negocios que ahora",
    "highlight": "aparecen en Google."
  }
});

export const generateImageMetadata = og.generateImageMetadata;
export default og.Image;
