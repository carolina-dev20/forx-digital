"use client";

import ServicePage from "../components/scenes/ServicePage";
import { twoLines } from "../components/scenes/blocks";
import { criacaoContent } from "./content";

export default function CriacaoContent() {
  return (
    <ServicePage
      content={criacaoContent}
      ui={{
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
      }}
    />
  );
}
