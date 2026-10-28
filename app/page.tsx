
"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Layers3,
  MapPin,
  MonitorSmartphone,
  MousePointer2,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

import MegaMenu from "./components/MegaMenu";
import GooglePresence from "./components/GooglePresence";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import WhatsAppFloat from "./components/WhatsAppFloat";

// ==========================================
// EFEITO 3D
// ==========================================

const Waves3d = dynamic(
  () => import("./components/Waves3d"),
  { ssr: false }
);

// ==========================================
// WHATSAPP OFICIAL
// ==========================================

const WHATSAPP_NUMBER = "5511994880312";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

// ==========================================
// SERVIÇOS
// ==========================================

const services = [
  {
    number: "01",
    icon: MonitorSmartphone,
    title: "Criação de sites",
    href: "/criacao-de-sites",
    description:
      "Sites profissionais, responsivos e personalizados para transformar a presença digital da sua empresa.",
    tags: [
      "Institucionais",
      "Landing pages",
      "Responsividade",
    ],
  },
  {
    number: "02",
    icon: Search,
    title: "Presença no Google",
    href: "#contato",
    description:
      "Estratégias de SEO local para ajudar empresas de Guarulhos e São Paulo a conquistar mais visibilidade nas pesquisas.",
    tags: [
      "SEO local",
      "Google Business",
      "Visibilidade",
    ],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Identidade digital",
    href: "#contato",
    description:
      "Experiências visuais que valorizam sua marca e transmitem profissionalismo em cada detalhe.",
    tags: [
      "Design",
      "Experiência",
      "Identidade",
    ],
  },
  {
    number: "04",
    icon: Code2,
    title: "Soluções personalizadas",
    href: "#contato",
    description:
      "Funcionalidades que facilitam o contato com seus clientes e tornam seu site uma ferramenta de negócio.",
    tags: [
      "Formulários",
      "WhatsApp",
      "Integrações",
    ],
  },
  {
    number: "05",
    icon: Target,
    title: "Gestão de Tráfego Pago",
    href: "#contato",
    description:
      "Campanhas estratégicas no Google Ads e Meta Ads para alcançar públicos relevantes, atrair potenciais clientes e gerar oportunidades de negócio.",
    tags: [
      "Google Ads",
      "Meta Ads",
      "Performance",
    ],
  },
];

// ==========================================
// ETAPAS
// ==========================================

const steps = [
  {
    number: "01",
    title: "Entendimento",
    description:
      "Conhecemos seu negócio, seus objetivos e o público que você deseja alcançar.",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Definimos a estrutura, a identidade visual e as funcionalidades do projeto.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Construímos uma experiência moderna, responsiva e alinhada à sua marca.",
  },
  {
    number: "04",
    title: "Publicação",
    description:
      "Preparamos o site para entrar no ar e orientamos sobre os próximos passos.",
  },
];

// ==========================================
// DIFERENCIAIS
// ==========================================

const benefits = [
  {
    icon: MousePointer2,
    title: "Experiência que envolve",
    description:
      "Interfaces intuitivas, animações elegantes e navegação fluida.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Atenção à velocidade, organização do código e experiência mobile.",
  },
  {
    icon: Globe2,
    title: "Presença digital",
    description:
      "Estrutura preparada para boas práticas de SEO e descoberta online.",
  },
  {
    icon: ShieldCheck,
    title: "Profissionalismo",
    description:
      "Um projeto pensado para transmitir confiança e valorizar seu negócio.",
  },
];

// ==========================================
// PERGUNTAS FREQUENTES
// ==========================================

const faqs = [
  {
    question: "Quanto custa criar um site?",
    answer:
      "O investimento depende da estrutura, das páginas e das funcionalidades necessárias. Cada proposta é preparada conforme as necessidades do negócio.",
  },
  {
    question: "Meu site vai funcionar no celular?",
    answer:
      "Sim. Desenvolvemos projetos responsivos para proporcionar uma boa experiência em celulares, tablets e computadores.",
  },
  {
    question: "O site pode aparecer no Google?",
    answer:
      "Sim. Podemos preparar a estrutura técnica para indexação e boas práticas de SEO. O posicionamento nos resultados depende de diversos fatores e não pode ser garantido.",
  },
  {
    question: "Posso integrar meu WhatsApp?",
    answer:
      "Sim. Podemos adicionar botões de contato e formulários que facilitam o envio de mensagens para seu WhatsApp.",
  },
  {
    question: "Vocês ajudam com domínio e hospedagem?",
    answer:
      "Podemos orientar na escolha e configuração de domínio e hospedagem, conforme a necessidade de cada projeto.",
  },
  {
    question: "A FORX Digital oferece gestão de tráfego pago?",
    answer:
      "Sim. Desenvolvemos estratégias de anúncios no Google Ads e Meta Ads para empresas de Guarulhos, São Paulo e região. As campanhas são planejadas conforme os objetivos do negócio, o público-alvo e o orçamento disponível.",
  },
];

// ==========================================
// COMPONENTE DE TÍTULOS
// ==========================================

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-3"
      >
        <span className="h-px w-7 bg-[#7942E8]" />

        <span
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? "text-white/60" : "text-black/45"
          }`}
        >
          {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        initial={{
          opacity: 0,
          y: 22,
          filter: "blur(5px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`text-[34px] font-medium leading-[1.12] tracking-[-0.055em] sm:text-5xl lg:text-[58px] ${
          light ? "text-white" : "text-[#151515]"
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
            light ? "text-white/50" : "text-black/50"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

// ==========================================
// FAQ ANIMADO
// ==========================================

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-5 py-5 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="text-xs text-black/35">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="text-base font-medium text-[#151515]">
            {question}
          </span>
        </div>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-5 pl-8 text-sm leading-7 text-black/55">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ==========================================
// COMPONENTE DOS CARDS DE SERVIÇOS
// ==========================================

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;

  const isLastOddCard =
    index === services.length - 1 &&
    services.length % 2 !== 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className={`group relative flex min-h-[290px] flex-col overflow-hidden bg-[#161616] p-7 transition-colors duration-500 hover:bg-[#1C1C1C] sm:p-9 ${
        isLastOddCard
          ? "md:col-span-2 md:min-h-[310px]"
          : ""
      }`}
    >
      {/* LINK SOBRE O CARD */}
      <Link
        href={service.href}
        aria-label={`Conhecer ${service.title}`}
        className="absolute inset-0 z-10 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B994FF]"
      />

      {/* CABEÇALHO: NÚMERO E ÍCONE */}
      <div className="flex w-full items-start justify-between">
        <span className="text-xs tracking-[0.2em] text-white/35">
          / {service.number}
        </span>

        <Icon
          size={25}
          strokeWidth={1.5}
          className="text-white/65 transition duration-500 group-hover:-rotate-6 group-hover:text-[#B994FF]"
        />
      </div>

      {/* CONTEÚDO */}
      <div
        className={`mt-auto pt-10 ${
          isLastOddCard
            ? "mx-auto w-full max-w-[620px] md:text-center"
            : ""
        }`}
      >
        <h3 className="text-[26px] font-medium tracking-[-0.04em] text-white">
          {service.title}
        </h3>

        <p
          className={`mt-3 text-sm leading-7 text-white/45 ${
            isLastOddCard
              ? "max-w-[520px] md:mx-auto"
              : "max-w-sm"
          }`}
        >
          {service.description}
        </p>

        <div
          className={`mt-5 flex flex-wrap gap-2 ${
            isLastOddCard ? "md:justify-center" : ""
          }`}
        >
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/45"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* EFEITO ROXO NO HOVER */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#7942E8] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

// ==========================================
// PÁGINA PRINCIPAL
// ==========================================

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#151515]">

      {/* ======================================
          MENU
      ====================================== */}

      <MegaMenu />

      {/* ======================================
          HERO COM ONDAS 3D
      ====================================== */}

      <section
        id="inicio"
        className="relative flex min-h-[680px] items-center overflow-hidden bg-[#080808] text-white lg:min-h-[760px]"
      >
        <div className="pointer-events-none absolute inset-0 z-0">
          <Waves3d />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-20 pt-24 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-[#A879F5] shadow-[0_0_18px_rgba(168,121,245,0.9)]" />

            <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
              Agência digital em Guarulhos e São Paulo
            </span>
          </motion.div>

          <h1 className="max-w-[1000px] text-[clamp(3.2rem,8vw,7.5rem)] font-medium leading-[0.98] tracking-[-0.075em]">
            {[
              ["Sua marca.", "text-white"],
              ["Uma nova", "text-white/45"],
              ["presença digital.", "text-white"],
            ].map(([line, color], index) => (
              <motion.span
                key={line}
                initial={{
                  opacity: 0,
                  y: 45,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.85,
                  delay: 0.15 + index * 0.15,
                }}
                className={`block ${color}`}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.7 }}
            className="mt-9 flex flex-col items-start gap-7 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="max-w-lg text-base leading-7 text-white/55 md:text-lg">
                Criação de sites, landing pages, SEO local e
                tráfego pago para empresas de Guarulhos,
                São Paulo e região. Unimos design, tecnologia
                e estratégia para fortalecer sua presença digital.
              </p>

              <a
                href="#contato"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#EDE5FF]"
              >
                Vamos criar seu projeto
                <ArrowUpRight size={19} />
              </a>
            </div>

            <a
              href="#introducao"
              className="flex items-center gap-3 text-sm text-white/50 transition hover:text-white"
            >
              Explorar

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20">
                <ArrowDown size={18} />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ======================================
          INTRODUÇÃO
      ====================================== */}

      <section
        id="introducao"
        className="scroll-mt-24 bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="flex items-start gap-3">
            <span className="mt-2 h-px w-7 bg-[#7942E8]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              O digital começa aqui
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[35px] font-medium leading-[1.13] tracking-[-0.055em] sm:text-5xl lg:text-[60px]">
              Não basta estar online.

              <span className="block text-black/35">
                É preciso ser lembrado.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-black/50">
              Sua presença digital é muitas vezes o primeiro
              contato entre sua empresa e um futuro cliente.
              Na FORX Digital, transformamos esse contato
              em uma experiência profissional, intuitiva
              e memorável.
            </p>

            <a
              href="#servicos"
              className="mt-7 inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-semibold"
            >
              Conheça nossas soluções
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ======================================
          SERVIÇOS — LAYOUT CORRIGIDO
      ====================================== */}

      <section
        id="servicos"
        className="scroll-mt-20 bg-[#111111] px-6 py-20 text-white md:px-12 md:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="O que fazemos"
              title="Soluções que transformam presença em oportunidade."
              description="Cada negócio tem uma história. Criamos soluções digitais para comunicá-la com clareza, personalidade e impacto."
              light
            />

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20">
              <Sparkles
                size={21}
                className="text-[#B994FF]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[26px] border border-white/10 bg-white/10 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={service.number}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          PRESENÇA NO GOOGLE
      ====================================== */}

      <GooglePresence />

      {/* ======================================
          PORTFÓLIO
      ====================================== */}

      <section
        id="portfolio"
        className="scroll-mt-20 bg-white"
      >
        <Portfolio />
      </section>

      {/* ======================================
          PROCESSO
      ====================================== */}

      <section
        id="processo"
        className="scroll-mt-20 bg-[#F5F5F5] px-6 py-16 md:px-12 md:py-20 lg:px-20"
      >
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            eyebrow="Nosso processo"
            title="Da primeira ideia ao projeto publicado."
            description="Um processo organizado, com atenção aos detalhes e foco no que faz sentido para o seu negócio."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-[22px] border border-black/10 bg-white p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm text-black/35">
                    {step.number}
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="text-black/25 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#7942E8]"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/50">
                    {step.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#7942E8] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          DIFERENCIAIS
      ====================================== */}

      <section
        id="diferenciais"
        className="scroll-mt-20 bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Por que a FORX?"
              title="Cada detalhe importa."
              description="Não criamos apenas páginas. Pensamos em como sua marca será percebida por quem chega até ela."
            />

            <a
              href="#contato"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-[#333333]"
            >
              Fale sobre seu projeto
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="border-t border-black/10 pt-6"
                >
                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    className="mb-6 text-[#7942E8]"
                  />

                  <h3 className="text-xl font-medium tracking-[-0.03em]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/50">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          SOBRE A FORX
      ====================================== */}

      <section
        id="sobre"
        className="relative scroll-mt-20 overflow-hidden bg-[#111111] px-6 py-20 text-white md:px-12 md:py-24 lg:px-20"
      >
        <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#7942E8]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Sobre nós"
            title="Ideias ousadas. Execução inteligente."
            light
          />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg leading-8 text-white/65">
              A FORX Digital nasceu para ajudar empresas
              de Guarulhos, São Paulo e região a se destacarem
              em um ambiente cada vez mais conectado.
            </p>

            <p className="mt-5 text-base leading-7 text-white/45">
              Combinamos design, desenvolvimento e visão
              estratégica para construir experiências
              digitais que valorizam marcas e aproximam
              negócios de seus clientes.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Design",
                "Tecnologia",
                "Estratégia",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/70"
                >
                  <Check
                    size={14}
                    className="text-[#B994FF]"
                  />

                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================
          PERGUNTAS FREQUENTES
      ====================================== */}

      <section className="bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto grid max-w-[1280px] gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Ainda tem dúvidas?"
            description="Confira algumas respostas sobre nossos serviços e o desenvolvimento do seu projeto."
          />

          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          CONTATO
      ====================================== */}

      <section
        id="contato"
        className="relative scroll-mt-20 overflow-hidden bg-[#111111] px-6 py-20 text-white md:px-12 md:py-24 lg:px-20"
      >
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#7942E8]/10 blur-[110px]" />

        <div className="relative mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Vamos conversar"
              title="Seu próximo projeto começa aqui."
              description="Conte um pouco sobre sua empresa e o que você deseja criar. Vamos conversar sobre as possibilidades."
              light
            />

            <div className="mt-8 flex items-center gap-3 text-sm text-white/45">
              <MapPin
                size={18}
                className="text-[#B994FF]"
              />

              Atendimento online em Guarulhos, São Paulo e região
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-[#A879F5] hover:bg-[#7942E8]/15"
            >
              Conversar pelo WhatsApp

              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ======================================
          RODAPÉ
      ====================================== */}

      <footer className="bg-[#080808] px-6 pb-8 pt-14 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 md:flex-row">
            <div>
              <a
                href="#inicio"
                className="text-4xl font-black tracking-[-0.08em]"
              >
                FORX

                <span className="ml-2 text-lg font-medium tracking-normal text-white/55">
                  DIGITAL
                </span>

                <span className="text-[#A879F5]">
                  .
                </span>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
                Criação de sites, landing pages, SEO local
                e tráfego pago em Guarulhos e São Paulo.
                Design, tecnologia e estratégia para
                fortalecer sua presença digital.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:gap-20">
              <div>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                  Navegação
                </h3>

                <div className="flex flex-col gap-3">
                  {[
                    ["Serviços", "#servicos"],
                    ["Projetos", "#portfolio"],
                    ["Processo", "#processo"],
                    ["Sobre", "#sobre"],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      {label}
                    </a>
                  ))}

                  <Link
                    href="/criacao-de-sites"
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    Criação de Sites
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                  Contato
                </h3>

                <div className="flex flex-col gap-3">
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                  >
                    Solicitar orçamento

                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                  >
                    WhatsApp

                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/35 sm:flex-row">
            <p>
              © 2026 FORX Digital. Todos os direitos reservados.
            </p>

            <p>
              Design & desenvolvimento digital.
            </p>
          </div>
        </div>
      </footer>

      {/* ======================================
          WHATSAPP FLUTUANTE
      ====================================== */}

      <WhatsAppFloat phone="5511994880312" />

    </main>
  );
}
