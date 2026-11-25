import { localizedOg } from "@/app/og";

const og = localizedOg({
  "pt": {
    "alt": "Criação de sites profissionais em Guarulhos e São Paulo | FORX Digital",
    "eyebrow": "Criação de sites",
    "title": "Sua marca merece",
    "highlight": "um espaço próprio no digital."
  },
  "en": {
    "alt": "Professional website design in Guarulhos and São Paulo | FORX Digital",
    "eyebrow": "Website design",
    "title": "Your brand deserves",
    "highlight": "its own place online."
  },
  "es": {
    "alt": "Creación de sitios web profesionales en Guarulhos y São Paulo | FORX Digital",
    "eyebrow": "Creación de sitios web",
    "title": "Tu marca merece",
    "highlight": "un espacio propio en digital."
  }
});

export const generateImageMetadata = og.generateImageMetadata;
export default og.Image;
