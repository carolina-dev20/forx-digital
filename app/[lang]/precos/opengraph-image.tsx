import { localizedOg } from "@/app/og";

const og = localizedOg({
  "pt": {
    "alt": "Preços e planos de site, sistema e tráfego | FORX Digital",
    "eyebrow": "Planos FORX Digital",
    "title": "Escolha o plano ideal",
    "highlight": "para o seu negócio."
  },
  "en": {
    "alt": "Pricing and plans for website, system and ads | FORX Digital",
    "eyebrow": "FORX Digital plans",
    "title": "Choose the right plan",
    "highlight": "for your business."
  },
  "es": {
    "alt": "Precios y planes de sitio web, sistema y publicidad | FORX Digital",
    "eyebrow": "Planes FORX Digital",
    "title": "Elige el plan ideal",
    "highlight": "para tu negocio."
  }
});

export const generateImageMetadata = og.generateImageMetadata;
export default og.Image;
