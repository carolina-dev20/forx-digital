"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MousePointer2,
  Sparkles,
  X,
  Plus,
  Minus,
} from "lucide-react";

// Mesmo visual da página Criação de Sites.
import styles from "../criacao-de-sites/sites.module.css";
import MegaMenu from "../components/MegaMenu";
import { gestaoList, gestaoPages, type GestaoSlug } from "./content";

export default function GestaoServicePage({ slug }: { slug: GestaoSlug }) {
  const content = gestaoPages[slug];
  const related = gestaoList.filter((item) => item.slug !== slug);

  const [comparison, setComparison] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const mouseStyle = {
    "--mouse-x": `${cursor.x}%`,
    "--mouse-y": `${cursor.y}%`,
  } as CSSProperties;

  const whatsappUrl =
    "https://wa.me/5511994880312?text=" +
    encodeURIComponent(content.cta.whatsappMessage);

  const side = comparison ? content.comparison.with : content.comparison.without;

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <MegaMenu />

      {/* HERO */}
      <section
        className={styles.hero}
        style={mouseStyle}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          setCursor({
            x: ((event.clientX - rect.left) / rect.width) * 100,
            y: ((event.clientY - rect.top) / rect.height) * 100,
          });
        }}
      >
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.eyebrow}>{content.eyebrow}</span>

            <h1 className={styles.heroTitle}>
              {content.hero.before}
              <br />
              <span>{content.hero.highlight}</span>
              <br />
              {content.hero.after}
            </h1>

            <p className={styles.heroDescription}>{content.hero.description}</p>

            <div className={styles.heroActions}>
              <a href="#por-que" className={styles.primaryButton}>
                Descubra os benefícios
                <ArrowRight size={18} />
              </a>

              <a href="#comparacao" className={styles.secondaryButton}>
                Veja a diferença
                <MousePointer2 size={17} />
              </a>
            </div>
          </motion.div>

          {/* DEMONSTRAÇÃO */}
          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            aria-hidden="true"
          >
            <div className={styles.browser}>
              <div className={styles.browserTop}>
                <div className={styles.browserDots}>
                  <i />
                  <i />
                  <i />
                </div>
                <span>{content.mock.url}</span>
              </div>

              <div className={styles.browserContent}>
                <span>{content.mock.label}</span>
                <h2>{content.mock.title}</h2>
                <div className={styles.browserButton}>
                  {content.mock.button}
                  <ArrowUpRight size={13} />
                </div>
                <div className={styles.browserCards}>
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>

            <motion.div
              className={styles.floatingBadge}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={19} />
              {content.badge}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* O QUE É */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>01 / ENTENDA</span>

            <h2 className={styles.sectionTitle}>
              {content.intro.titleBefore}
              <br />
              <span>{content.intro.titleHighlight}</span>
            </h2>

            <p className={styles.sectionDescription}>{content.intro.description}</p>
          </motion.div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="por-que" className={styles.benefitsSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>02 / BENEFÍCIOS</span>

          <h2 className={styles.sectionTitle}>
            {content.benefitsTitle.before}
            <br />
            <span>{content.benefitsTitle.highlight}</span>
          </h2>

          <div className={styles.benefitsGrid}>
            {content.benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className={styles.benefitCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, rotateX: 3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Icon size={28} aria-hidden="true" />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  <ArrowUpRight className={styles.cardArrow} size={20} aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      <section id="comparacao" className={styles.comparisonSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>03 / ANTES E DEPOIS</span>

          <h2 className={styles.sectionTitle}>
            Veja a diferença
            <br />
            <span>na rotina da sua empresa.</span>
          </h2>

          <p className={styles.sectionDescription}>
            Clique nos botões para comparar os dois cenários.
          </p>

          <div className={styles.comparisonControls}>
            <button
              type="button"
              aria-pressed={!comparison}
              className={!comparison ? styles.activeButton : ""}
              onClick={() => setComparison(false)}
            >
              {content.comparison.withoutLabel}
            </button>
            <button
              type="button"
              aria-pressed={comparison}
              className={comparison ? styles.activeButton : ""}
              onClick={() => setComparison(true)}
            >
              {content.comparison.withLabel}
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={comparison ? "com" : "sem"}
              className={styles.comparisonPanel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.comparisonContent}>
                {comparison ? <CheckCircle2 size={38} /> : <X size={38} />}
                <h3>{side.title}</h3>
                <p>{side.description}</p>
                <div className={styles.comparisonFeatures}>
                  {side.points.map((point) => (
                    <span key={point}>
                      {comparison && <CheckCircle2 size={16} />}
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ENTREGAS */}
      <section className={styles.typesSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>04 / SOLUÇÃO</span>

          <h2 className={styles.sectionTitle}>
            {content.deliverablesTitle.before}
            <br />
            <span>{content.deliverablesTitle.highlight}</span>
          </h2>

          <div className={styles.typesGrid}>
            {content.deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className={styles.typeCard}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.typeTop}>
                    <span className={styles.typeNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <span className={styles.typeTag}>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ArrowUpRight size={23} aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>05 / DÚVIDAS FREQUENTES</span>

          <h2 className={styles.sectionTitle}>
            Perguntas que
            <br />
            <span>merecem respostas.</span>
          </h2>

          <div className={styles.faqList}>
            {content.faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={faq.question} className={styles.faqItem}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                  >
                    {faq.question}
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className={styles.faqAnswer}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUTRAS SOLUÇÕES DE GESTÃO */}
      <section className={styles.typesSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>06 / GESTÃO FORX</span>

          <h2 className={styles.sectionTitle}>
            Soluções que
            <br />
            <span>funcionam melhor juntas.</span>
          </h2>

          <div className={styles.typesGrid}>
            {related.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.slug}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <Link href={item.href} className={styles.typeCard}>
                    <div className={styles.typeTop}>
                      <span className={styles.typeNumber}>GESTÃO</span>
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <span className={styles.typeTag}>{item.menuDescription.toUpperCase()}</span>
                    <h3>{item.menuLabel}</h3>
                    <p>{item.seo.description}</p>
                    <ArrowUpRight size={23} aria-hidden="true" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>VAMOS CONVERSAR?</span>

          <h2>{content.cta.title}</h2>

          <p>{content.cta.description}</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            Falar com a FORX
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className={styles.footer}>
        <Link href="/">FORX Digital.</Link>
        <span>© 2026 FORX Digital — Tecnologia, gestão e crescimento.</span>
      </footer>
    </main>
  );
}
