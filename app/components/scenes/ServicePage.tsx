"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, X, type LucideIcon } from "lucide-react";

import MegaMenu from "../MegaMenu";
import Scenes, { type Segment } from "./Scenes";
import {
  BlockHead,
  CardDot,
  CtaGlow,
  EASE,
  FaqList,
  d,
  twoLines,
  useSceneEffects,
} from "./blocks";
import s from "./scenes.module.css";
import SmallFooter from "./SmallFooter";
import { useHref, useT } from "../LangProvider";
import { whatsappUrl as waUrl } from "../../i18n";

/** Textos padrão (quando a página não define os próprios). */
const DEFAULTS = {
  pt: {
    primary: "Descubra os benefícios",
    secondary: "Veja a diferença",
    benefitsLabel: "02 / BENEFÍCIOS",
    talk: "Falar com a FORX",
    comparisonLabel: "03 / ANTES E DEPOIS",
    comparisonTitle: ["Veja a diferença", "na rotina da sua empresa."] as [string, string],
    comparisonLead: "Clique nos botões para comparar os dois cenários.",
    solutionsLabel: "04 / SOLUÇÃO",
    faqLabel: "05 / DÚVIDAS FREQUENTES",
    faqTitle: ["Perguntas que", "merecem respostas."] as [string, string],
    relatedLabel: "06 / GESTÃO FORX",
    relatedTitle: ["Soluções que", "funcionam melhor juntas."] as [string, string],
    ctaLabel: "VAMOS CONVERSAR?",
  },
  en: {
    primary: "See the benefits",
    secondary: "See the difference",
    benefitsLabel: "02 / BENEFITS",
    talk: "Talk to FORX",
    comparisonLabel: "03 / BEFORE AND AFTER",
    comparisonTitle: ["See the difference", "in your company's routine."] as [string, string],
    comparisonLead: "Click the buttons to compare the two scenarios.",
    solutionsLabel: "04 / SOLUTION",
    faqLabel: "05 / FREQUENTLY ASKED QUESTIONS",
    faqTitle: ["Questions that", "deserve answers."] as [string, string],
    relatedLabel: "06 / FORX MANAGEMENT",
    relatedTitle: ["Solutions that", "work better together."] as [string, string],
    ctaLabel: "SHALL WE TALK?",
  },
  es: {
    primary: "Descubre los beneficios",
    secondary: "Mira la diferencia",
    benefitsLabel: "02 / BENEFICIOS",
    talk: "Hablar con FORX",
    comparisonLabel: "03 / ANTES Y DESPUÉS",
    comparisonTitle: ["Mira la diferencia", "en la rutina de tu empresa."] as [string, string],
    comparisonLead: "Haz clic en los botones para comparar los dos escenarios.",
    solutionsLabel: "04 / SOLUCIÓN",
    faqLabel: "05 / PREGUNTAS FRECUENTES",
    faqTitle: ["Preguntas que", "merecen respuestas."] as [string, string],
    relatedLabel: "06 / GESTIÓN FORX",
    relatedTitle: ["Soluciones que", "funcionan mejor juntas."] as [string, string],
    ctaLabel: "¿HABLAMOS?",
  },
};

type Item = { icon: LucideIcon; title: string; description: string };

export type ServiceContent = {
  icon: LucideIcon;
  eyebrow: string;
  hero: { before: string; highlight: string; after: string; description: string };
  mock: { url: string; label: string; title: string; button: string };
  badge: string;
  intro: { titleBefore: string; titleHighlight: string; description: string };
  benefitsTitle: { before: string; highlight: string };
  benefits: Item[];
  comparison: {
    withoutLabel: string;
    withLabel: string;
    without: { title: string; description: string; points: string[] };
    with: { title: string; description: string; points: string[] };
  };
  deliverablesTitle: { before: string; highlight: string };
  deliverables: (Item & { tag: string })[];
  faqs: { question: string; answer: string }[];
  cta: { title: string; description: string; whatsappMessage: string };
};

/** Textos de interface que mudam de uma página para outra. */
export type ServiceUi = {
  primary?: string;
  secondary?: string;
  benefitsId?: string;
  benefitsLabel?: string;
  comparisonLabel?: string;
  comparisonTitle?: Segment[];
  comparisonLead?: string;
  solutionsId?: string;
  solutionsLabel?: string;
  ctaLabel?: string;
  ctaTitle?: Segment[];
  ctaButton?: string;
};

export type RelatedItem = {
  slug: string;
  href: string;
  icon: LucideIcon;
  menuLabel: string;
  menuDescription: string;
  seo: { description: string };
};

export default function ServicePage({
  content,
  ui = {},
  related = [],
}: {
  content: ServiceContent;
  ui?: ServiceUi;
  related?: RelatedItem[];
}) {
  const [comparison, setComparison] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  useSceneEffects(rootRef);
  const t = useT(DEFAULTS);
  const href = useHref();

  const whatsappUrl = waUrl(content.cta.whatsappMessage);

  const benefitsId = ui.benefitsId ?? "por-que";
  const side = comparison ? content.comparison.with : content.comparison.without;
  const hasRelated = related.length > 0;

  return (
    <main className={s.main}>
      <MegaMenu />

      {/* TOPO + FRASE + PAINEL (animados com a rolagem) */}
      <Scenes
        eyebrow={content.eyebrow}
        heroTitle={[
          { text: content.hero.before },
          { br: true },
          { text: content.hero.highlight, hl: true },
          { text: " " + content.hero.after },
        ]}
        description={content.hero.description}
        primary={{
          label: ui.primary ?? t.primary,
          href: `#${benefitsId}`,
        }}
        secondary={{ label: ui.secondary ?? t.secondary, href: "#comparacao" }}
        mock={content.mock}
        badge={content.badge}
        statement={{
          text: [
            { text: `${content.intro.titleBefore} ` },
            { text: content.intro.titleHighlight, hl: true },
            { br: true },
            { text: " " + content.intro.description },
          ],
        }}
        split={{
          id: benefitsId,
          label: ui.benefitsLabel ?? t.benefitsLabel,
          title: twoLines(content.benefitsTitle.before, content.benefitsTitle.highlight),
          items: content.benefits,
          icon: content.icon,
        }}
        navCta={{ label: t.talk, href: whatsappUrl, external: true }}
      />

      <div ref={rootRef}>
        <div className={`${s.scenes} ${s.rest}`}>
          {/* COMPARAÇÃO */}
          <section id="comparacao" className={s.block} data-tone="light">
            <BlockHead
              label={ui.comparisonLabel ?? t.comparisonLabel}
              title={
                ui.comparisonTitle ??
                twoLines(...t.comparisonTitle)
              }
              lead={ui.comparisonLead ?? t.comparisonLead}
            />

            <div className={s.fade} data-fade style={d(0.15)}>
              <div className={s.toggle}>
                <button
                  type="button"
                  aria-pressed={!comparison}
                  className={!comparison ? s.active : ""}
                  onClick={() => setComparison(false)}
                >
                  {content.comparison.withoutLabel}
                </button>
                <button
                  type="button"
                  aria-pressed={comparison}
                  className={comparison ? s.active : ""}
                  onClick={() => setComparison(true)}
                >
                  {content.comparison.withLabel}
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={comparison ? "com" : "sem"}
                  className={s.compare}
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  {comparison ? <CheckCircle2 size={34} /> : <X size={34} />}
                  <h3>{side.title}</h3>
                  <p>{side.description}</p>
                  <div className={s.points}>
                    {side.points.map((point) => (
                      <span key={point}>
                        {comparison && <CheckCircle2 size={15} />}
                        {point}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* SOLUÇÕES / ENTREGAS */}
          <section id={ui.solutionsId} className={s.block} data-tone="violet">
            <BlockHead
              label={ui.solutionsLabel ?? t.solutionsLabel}
              title={twoLines(
                content.deliverablesTitle.before,
                content.deliverablesTitle.highlight
              )}
            />

            <div className={s.grid}>
              {content.deliverables.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`${s.cell} ${s.fade}`}
                    data-fade
                    style={d(0.08 * (index % 2))}
                  >
                    <div className={s.cellTop}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <span className={s.tag}>{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PERGUNTAS FREQUENTES (preto quando é a última seção, antes da chamada branca) */}
          <section className={s.block} data-tone={hasRelated ? "light" : "black"}>
            <BlockHead
              label={t.faqLabel}
              title={twoLines(...t.faqTitle)}
            />
            <FaqList faqs={content.faqs} />
          </section>

          {/* OUTRAS SOLUÇÕES */}
          {hasRelated && (
            <section className={s.block} data-tone="black">
              <BlockHead
                label={t.relatedLabel}
                title={twoLines(...t.relatedTitle)}
              />

              <div className={s.related}>
                {related.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.slug}
                      href={href(item.href)}
                      className={`${s.relCard} ${s.fade}`}
                      data-fade
                      style={d(0.08 * index)}
                    >
                      <div className={s.cellTop}>
                        <span className={s.tag}>{item.menuDescription.toUpperCase()}</span>
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <h3>{item.menuLabel}</h3>
                      <p>{item.seo.description}</p>
                      <CardDot />
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* CHAMADA FINAL */}
        <CtaGlow
          label={ui.ctaLabel ?? t.ctaLabel}
          title={ui.ctaTitle ?? [{ text: content.cta.title }]}
          text={content.cta.description}
          button={{
            label: ui.ctaButton ?? t.talk,
            href: whatsappUrl,
            external: true,
          }}
        />

        {/* RODAPÉ */}
        <SmallFooter />
      </div>
    </main>
  );
}
