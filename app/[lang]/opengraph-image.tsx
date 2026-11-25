import { localizedOg } from "@/app/og";

const og = localizedOg({
  "pt": {
    "alt": "FORX Digital: tecnologia, gestão e crescimento",
    "eyebrow": "Tecnologia, gestão e crescimento",
    "title": "Sites, CRM, automação e tráfego pago",
    "highlight": "para sua empresa crescer."
  },
  "en": {
    "alt": "FORX Digital: technology, management and growth",
    "eyebrow": "Technology, management and growth",
    "title": "Websites, CRM, automation and paid ads",
    "highlight": "to help your business grow."
  },
  "es": {
    "alt": "FORX Digital: tecnología, gestión y crecimiento",
    "eyebrow": "Tecnología, gestión y crecimiento",
    "title": "Sitios web, CRM, automatización y anuncios",
    "highlight": "para que tu empresa crezca."
  }
});

export const generateImageMetadata = og.generateImageMetadata;
export default og.Image;
