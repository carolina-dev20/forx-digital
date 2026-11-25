import { localizedOg } from "@/app/og";

const og = localizedOg({
  "pt": {
    "alt": "Sistema FORX: agenda online e lembretes automáticos no WhatsApp",
    "eyebrow": "Sistema FORX",
    "title": "Agenda e lembretes",
    "highlight": "automáticos."
  },
  "en": {
    "alt": "FORX System: online booking and automatic WhatsApp reminders",
    "eyebrow": "FORX System",
    "title": "Automatic booking",
    "highlight": "and reminders."
  },
  "es": {
    "alt": "Sistema FORX: agenda online y recordatorios automáticos por WhatsApp",
    "eyebrow": "Sistema FORX",
    "title": "Agenda y recordatorios",
    "highlight": "automáticos."
  }
});

export const generateImageMetadata = og.generateImageMetadata;
export default og.Image;
