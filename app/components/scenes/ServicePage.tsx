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

  const whatsappUrl =
    "https://wa.me/5511994880312?text=" +
    encodeURIComponent(content.cta.whatsappMessage);

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
          label: ui.primary ?? "Descubra os benefícios",
          href: `#${benefitsId}`,
        }}
        secondary={{ label: ui.secondary ?? "Veja a diferença", href: "#comparacao" }}
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
          label: ui.benefitsLabel ?? "02 / BENEFÍCIOS",
          title: twoLines(content.benefitsTitle.before, content.benefitsTitle.highlight),
          items: content.benefits,
          icon: content.icon,
        }}
        navCta={{ label: "Falar com a FORX", href: whatsappUrl, external: true }}
      />

      <div ref={rootRef}>
        <div className={`${s.scenes} ${s.rest}`}>
          {/* COMPARAÇÃO */}
          <section id="comparacao" className={s.block}>
            <BlockHead
              label={ui.comparisonLabel ?? "03 / ANTES E DEPOIS"}
              title={
                ui.comparisonTitle ??
                twoLines("Veja a diferença", "na rotina da sua empresa.")
              }
              lead={ui.comparisonLead ?? "Clique nos botões para comparar os dois cenários."}
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
          <section id={ui.solutionsId} className={s.block}>
            <BlockHead
              label={ui.solutionsLabel ?? "04 / SOLUÇÃO"}
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

          {/* PERGUNTAS FREQUENTES */}
          <section className={s.block}>
            <BlockHead
              label="05 / DÚVIDAS FREQUENTES"
              title={twoLines("Perguntas que", "merecem respostas.")}
            />
            <FaqList faqs={content.faqs} />
          </section>

          {/* OUTRAS SOLUÇÕES */}
          {hasRelated && (
            <section className={s.block}>
              <BlockHead
                label="06 / GESTÃO FORX"
                title={twoLines("Soluções que", "funcionam melhor juntas.")}
              />

              <div className={s.related}>
                {related.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.slug}
                      href={item.href}
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
          label={ui.ctaLabel ?? "VAMOS CONVERSAR?"}
          title={ui.ctaTitle ?? [{ text: content.cta.title }]}
          text={content.cta.description}
          button={{
            label: ui.ctaButton ?? "Falar com a FORX",
            href: whatsappUrl,
            external: true,
          }}
        />

        {/* RODAPÉ */}
        <footer className={`${s.scenes} ${s.foot}`}>
          <Link href="/">FORX Digital.</Link>
          <span className={s.footLinks}>
          <span>© 2026 FORX Digital — Tecnologia, gestão e crescimento.</span>
          <Link href="/privacidade">Política de Privacidade</Link>
        </span>
        </footer>
      </div>
    </main>
  );
}
