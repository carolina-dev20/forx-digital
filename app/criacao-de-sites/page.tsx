
"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  MousePointer2,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
  Plus,
  Minus,
  Monitor,
  LayoutTemplate,
  PanelsTopLeft,
} from "lucide-react";

import styles from "./sites.module.css";

const benefits = [
  {
    icon: Globe2,
    title: "Sua empresa disponível online",
    description:
      "Apresente seus serviços, sua história e suas informações em um endereço digital próprio.",
  },
  {
    icon: Search,
    title: "Mais oportunidades de ser encontrado",
    description:
      "Um site bem estruturado pode ajudar sua empresa a aparecer nos mecanismos de busca.",
  },
  {
    icon: ShieldCheck,
    title: "Mais credibilidade",
    description:
      "Uma apresentação profissional ajuda a transmitir confiança a novos clientes.",
  },
  {
    icon: Smartphone,
    title: "Experiência em qualquer dispositivo",
    description:
      "Seu conteúdo se adapta a celulares, tablets e computadores.",
  },
];

const siteTypes = [
  {
    icon: Monitor,
    number: "01",
    title: "Site institucional",
    description:
      "Ideal para empresas e profissionais que desejam apresentar sua marca, serviços e formas de contato.",
    tag: "PRESENÇA PROFISSIONAL",
  },
  {
    icon: LayoutTemplate,
    number: "02",
    title: "Landing page",
    description:
      "Uma página estratégica para apresentar uma oferta, campanha ou serviço específico.",
    tag: "FOCO EM CONVERSÃO",
  },
  {
    icon: PanelsTopLeft,
    number: "03",
    title: "Portfólio profissional",
    description:
      "Apresente projetos, experiências e resultados de forma organizada e visualmente marcante.",
    tag: "AUTORIDADE DIGITAL",
  },
];

const faqs = [
  {
    question: "Preciso ter um site mesmo usando Instagram?",
    answer:
      "O Instagram é um ótimo canal de relacionamento, mas um site oferece um espaço próprio para organizar informações, apresentar serviços e facilitar o contato. Os dois podem trabalhar juntos.",
  },
  {
    question: "Meu site pode aparecer no Google?",
    answer:
      "Sim. Um site pode ser indexado pelos mecanismos de busca. A visibilidade depende de fatores como conteúdo, estrutura técnica, concorrência e otimização. Não existe garantia de primeira posição.",
  },
  {
    question: "O site funciona no celular?",
    answer:
      "Sim. Os sites podem ser desenvolvidos com design responsivo, adaptando a experiência para diferentes tamanhos de tela.",
  },
  {
    question: "Posso solicitar alterações depois?",
    answer:
      "Sim. As possibilidades de atualização e manutenção são definidas conforme o escopo e as condições combinadas para cada projeto.",
  },
];

const whatsappUrl =
  "https://wa.me/5511994880312?text=" +
  encodeURIComponent(
    "Olá, FORX Digital! Gostaria de um orçamento para criação de site."
  );

export default function CriacaoDeSitesPage() {
  const [comparison, setComparison] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const mouseStyle = {
    "--mouse-x": `${cursor.x}%`,
    "--mouse-y": `${cursor.y}%`,
  } as CSSProperties;

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          FORX <span>Digital.</span>
        </Link>

        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={16} />
          Voltar à FORX
        </Link>
      </header>

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
            <span className={styles.eyebrow}>
              FORX DIGITAL / DESENVOLVIMENTO WEB
            </span>

            <h1 className={styles.heroTitle}>
              Sua marca merece
              <br />
              <span>um espaço próprio</span>
              <br />
              no digital.
            </h1>

            <p className={styles.heroDescription}>
              Muito mais que uma página na internet. Um site
              profissional apresenta seu negócio, fortalece
              sua identidade e cria novos caminhos para
              conectar você aos seus clientes.
            </p>

            <div className={styles.heroActions}>
              <a
                href="#por-que-ter"
                className={styles.primaryButton}
              >
                Descubra as possibilidades
                <ArrowRight size={18} />
              </a>

              <a
                href="#comparacao"
                className={styles.secondaryButton}
              >
                Explore a experiência
                <MousePointer2 size={17} />
              </a>
            </div>
          </motion.div>

          {/* DEMONSTRAÇÃO DE SITE */}
          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className={styles.browser}>
              <div className={styles.browserTop}>
                <div className={styles.browserDots}>
                  <i />
                  <i />
                  <i />
                </div>
                <span>seunegocio.com.br</span>
              </div>

              <div className={styles.browserContent}>
                <span>SEU NEGÓCIO, SUA IDENTIDADE</span>

                <h2>
                  Uma presença digital que impressiona.
                </h2>

                <div className={styles.browserButton}>
                  Conhecer serviços
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
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={19} />
              Design profissional
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* O QUE É UM SITE */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>
              01 / ENTENDA
            </span>

            <h2 className={styles.sectionTitle}>
              Afinal, o que é
              <br />
              <span>um site profissional?</span>
            </h2>

            <p className={styles.sectionDescription}>
              Um site é o espaço digital onde sua empresa
              pode apresentar seus serviços, contar sua
              história, mostrar seus diferenciais e
              disponibilizar formas de contato.
              Ele funciona como uma referência oficial
              do seu negócio na internet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section
        id="por-que-ter"
        className={styles.benefitsSection}
      >
        <div className={styles.container}>
          <span className={styles.sectionLabel}>
            02 / POSSIBILIDADES
          </span>

          <h2 className={styles.sectionTitle}>
            Por que investir
            <br />
            <span>em um site?</span>
          </h2>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  className={styles.benefitCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -10,
                    rotateX: 3,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                >
                  <Icon size={28} />

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>

                  <ArrowUpRight
                    className={styles.cardArrow}
                    size={20}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO INTERATIVA */}
      <section
        id="comparacao"
        className={styles.comparisonSection}
      >
        <div className={styles.container}>
          <span className={styles.sectionLabel}>
            03 / EXPERIÊNCIA INTERATIVA
          </span>

          <h2 className={styles.sectionTitle}>
            Veja a diferença
            <br />
            <span>de uma presença profissional.</span>
          </h2>

          <p className={styles.sectionDescription}>
            Clique nos botões para comparar duas formas
            de apresentar um negócio aos clientes.
          </p>

          <div className={styles.comparisonControls}>
            <button
              type="button"
              className={
                !comparison ? styles.activeButton : ""
              }
              onClick={() => setComparison(false)}
            >
              Sem site
            </button>

            <button
              type="button"
              className={
                comparison ? styles.activeButton : ""
              }
              onClick={() => setComparison(true)}
            >
              Com site profissional
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
              {comparison ? (
                <div className={styles.comparisonContent}>
                  <CheckCircle2 size={38} />

                  <h3>
                    Uma apresentação mais completa.
                  </h3>

                  <p>
                    Seus serviços, diferenciais,
                    localização e formas de contato
                    organizados em um único endereço digital.
                  </p>

                  <div className={styles.comparisonFeatures}>
                    <span>
                      <CheckCircle2 size={16} />
                      Informações organizadas
                    </span>

                    <span>
                      <CheckCircle2 size={16} />
                      Identidade profissional
                    </span>

                    <span>
                      <CheckCircle2 size={16} />
                      Contato facilitado
                    </span>
                  </div>
                </div>
              ) : (
                <div className={styles.comparisonContent}>
                  <X size={38} />

                  <h3>Informações espalhadas.</h3>

                  <p>
                    Sem um site, o cliente pode depender
                    de diferentes redes e canais para
                    encontrar seus serviços, horários
                    e informações.
                  </p>

                  <div className={styles.comparisonFeatures}>
                    <span>Informações em diferentes canais</span>
                    <span>Apresentação menos centralizada</span>
                    <span>Mais etapas para entrar em contato</span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* TIPOS DE SITES */}
      <section className={styles.typesSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>
            04 / SOLUÇÕES
          </span>

          <h2 className={styles.sectionTitle}>
            Cada negócio tem
            <br />
            <span>uma necessidade diferente.</span>
          </h2>

          <div className={styles.typesGrid}>
            {siteTypes.map((site) => {
              const Icon = site.icon;

              return (
                <motion.div
                  key={site.number}
                  className={styles.typeCard}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.typeTop}>
                    <span className={styles.typeNumber}>
                      {site.number}
                    </span>
                    <Icon size={24} />
                  </div>

                  <span className={styles.typeTag}>
                    {site.tag}
                  </span>

                  <h3>{site.title}</h3>

                  <p>{site.description}</p>

                  <ArrowUpRight size={23} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>
            05 / DÚVIDAS FREQUENTES
          </span>

          <h2 className={styles.sectionTitle}>
            Perguntas que
            <br />
            <span>merecem respostas.</span>
          </h2>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={faq.question}
                  className={styles.faqItem}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setActiveFaq(isOpen ? null : index)
                    }
                  >
                    {faq.question}

                    {isOpen ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
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

      {/* CHAMADA FINAL */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>
            VAMOS CRIAR ALGO?
          </span>

          <h2>
            Sua próxima grande
            <br />
            ideia começa aqui.
          </h2>

          <p>
            Vamos transformar a presença digital do
            seu negócio em uma experiência profissional
            e memorável.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            Solicitar orçamento
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className={styles.footer}>
        <Link href="/">FORX Digital.</Link>
        <span>© 2026 FORX Digital.</span>
      </footer>
    </main>
  );
}
