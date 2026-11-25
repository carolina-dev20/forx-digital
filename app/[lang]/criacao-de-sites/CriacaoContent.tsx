"use client";

import ServicePage, { type ServiceUi } from "@/app/components/scenes/ServicePage";
import { twoLines } from "@/app/components/scenes/blocks";
import { useLang } from "@/app/components/LangProvider";
import type { Dict } from "@/app/i18n";
import { criacaoContent } from "./content";

const UI: Dict<ServiceUi> = {
  pt: {
    primary: "Descubra as possibilidades",
    secondary: "Explore a experiência",
    benefitsId: "por-que-ter",
    benefitsLabel: "02 / POSSIBILIDADES",
    comparisonLabel: "03 / EXPERIÊNCIA INTERATIVA",
    comparisonTitle: twoLines("Veja a diferença", "de uma presença profissional."),
    comparisonLead:
      "Clique nos botões para comparar duas formas de apresentar um negócio aos clientes.",
    solutionsId: "tipos",
    solutionsLabel: "04 / SOLUÇÕES",
    ctaLabel: "VAMOS CRIAR ALGO?",
    ctaTitle: twoLines("Sua próxima grande", "ideia começa aqui."),
    ctaButton: "Solicitar orçamento",
  },
  en: {
    primary: "Discover the possibilities",
    secondary: "Explore the experience",
    benefitsId: "por-que-ter",
    benefitsLabel: "02 / POSSIBILITIES",
    comparisonLabel: "03 / INTERACTIVE EXPERIENCE",
    comparisonTitle: twoLines("See the difference", "a professional presence makes."),
    comparisonLead:
      "Click the buttons to compare two ways of presenting a business to customers.",
    solutionsId: "tipos",
    solutionsLabel: "04 / SOLUTIONS",
    ctaLabel: "SHALL WE CREATE SOMETHING?",
    ctaTitle: twoLines("Your next big", "idea starts here."),
    ctaButton: "Request a quote",
  },
  es: {
    primary: "Descubre las posibilidades",
    secondary: "Explora la experiencia",
    benefitsId: "por-que-ter",
    benefitsLabel: "02 / POSIBILIDADES",
    comparisonLabel: "03 / EXPERIENCIA INTERACTIVA",
    comparisonTitle: twoLines("Mira la diferencia", "de una presencia profesional."),
    comparisonLead:
      "Haz clic en los botones para comparar dos formas de presentar un negocio a los clientes.",
    solutionsId: "tipos",
    solutionsLabel: "04 / SOLUCIONES",
    ctaLabel: "¿CREAMOS ALGO?",
    ctaTitle: twoLines("Tu próxima gran", "idea empieza aquí."),
    ctaButton: "Solicitar presupuesto",
  },
};

export default function CriacaoContent() {
  const lang = useLang();
  return <ServicePage content={criacaoContent[lang]} ui={UI[lang]} />;
}
