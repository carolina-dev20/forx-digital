
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  MapPin,
  MonitorSmartphone,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
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
    id: "gestao-processos",
    number: "01",
    icon: BriefcaseBusiness,
    title: "Gestão e processos",
    href: "/gestao/processos-internos",
    description:
      "Estruturação de processos internos, rotinas e indicadores para dar mais clareza, controle e eficiência à operação da sua empresa.",
    tags: [
      "Processos internos",
      "Indicadores",
      "Organização",
    ],
  },
  {
    id: "relacionamento-clientes",
    number: "02",
    icon: Users,
    title: "Relacionamento com clientes",
    href: "/gestao/crm",
    description:
      "Organização do atendimento e do funil comercial com CRM, para acompanhar contatos, oportunidades e não perder nenhum cliente.",
    tags: [
      "CRM",
      "Funil de vendas",
      "Atendimento",
    ],
  },
  {
    id: "automacao",
    number: "03",
    icon: Workflow,
    title: "Automação",
    href: "/gestao/automacao",
    description:
      "Automatizamos tarefas repetitivas, avisos e fluxos de trabalho para sua equipe ganhar tempo e focar no que gera resultado.",
    tags: [
      "Fluxos",
      "Integrações",
      "WhatsApp",
    ],
  },
  {
    id: "desenvolvimento-software",
    number: "04",
    icon: Code2,
    title: "Desenvolvimento de software",
    href: "#contato",
    description:
      "Plataformas digitais e sistemas sob medida, desenvolvidos para as necessidades reais do seu negócio.",
    tags: [
      "Plataformas",
      "Sistemas web",
      "Sob medida",
    ],
  },
  {
    id: "criacao-de-sites",
    number: "05",
    icon: MonitorSmartphone,
    title: "Criação de sites",
    href: "/criacao-de-sites",
    description:
      "Sites institucionais e landing pages profissionais, responsivos e preparados para o Google, que fortalecem sua presença no mercado.",
    tags: [
      "Institucionais",
      "Landing pages",
      "SEO",
    ],
  },
  {
    id: "marketing-digital",
    number: "06",
    icon: Target,
    title: "Marketing digital e tráfego pago",
    href: "#contato",
    description:
      "Campanhas no Google Ads e Meta Ads, SEO local e estratégias de crescimento online para atrair clientes de forma consistente.",
    tags: [
      "Google Ads",
      "Meta Ads",
      "SEO local",
    ],
  },
];

// ==========================================
// ETAPAS
// ==========================================

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos seu negócio, sua operação e os desafios que precisam ser resolvidos.",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Definimos a solução ideal: processos, tecnologia e estratégias de crescimento.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Construímos sistemas, automações, sites e campanhas alinhados aos seus objetivos.",
  },
  {
    number: "04",
    title: "Implantação",
    description:
      "Colocamos a solução em funcionamento e acompanhamos os resultados com você.",
  },
];

// ==========================================
// DIFERENCIAIS
// ==========================================

const benefits = [
  {
    icon: MousePointer2,
    title: "Visão integrada",
    description:
      "Gestão, tecnologia e marketing pensados juntos, e não como peças soltas.",
  },
  {
    icon: Zap,
    title: "Operação mais eficiente",
    description:
      "Processos organizados e automações que reduzem retrabalho e tempo perdido.",
  },
  {
    icon: Globe2,
    title: "Presença no mercado",
    description:
      "Sites e estratégias digitais que tornam sua empresa mais fácil de encontrar.",
  },
  {
    icon: ShieldCheck,
    title: "Crescimento sustentável",
    description:
      "Soluções que acompanham a evolução do seu negócio de forma inteligente.",
  },
];

// ==========================================
// PERGUNTAS FREQUENTES
// ==========================================

const faqs = [
  {
    question: "A FORX Digital ajuda na gestão da minha empresa?",
    answer:
      "Sim. Além de sites e marketing, ajudamos a organizar processos internos, estruturar o atendimento com CRM, automatizar tarefas repetitivas e desenvolver sistemas sob medida quando o negócio precisa.",
  },
  {
    question: "Quanto custa um site ou sistema?",
    answer:
      "Depende do que o seu negócio precisa: quantidade de páginas, funcionalidades, integrações e conteúdo. Por isso, entendemos o projeto antes e enviamos uma proposta com escopo, valor e etapas bem definidos, sem surpresas no meio do caminho.",
  },
  {
    question: "Quanto tempo leva para o projeto ficar pronto?",
    answer:
      "O prazo varia conforme o tamanho do projeto e a agilidade no envio de informações, como textos, fotos e aprovações. O cronograma é apresentado junto com a proposta, e você acompanha cada etapa até a entrega.",
  },
  {
    question: "Existe mensalidade depois que o projeto fica pronto?",
    answer:
      "Alguns custos são recorrentes por natureza, como domínio e hospedagem. Manutenção, atualizações e suporte podem ser contratados conforme a sua necessidade. Tudo é explicado na proposta para você saber exatamente o que é pago uma vez e o que é contínuo.",
  },
  {
    question: "O domínio e o site ficam no nome da minha empresa?",
    answer:
      "Recomendamos que o domínio seja registrado em nome da sua empresa, para que você tenha controle sobre ele. Orientamos todo o processo de registro e configuração e deixamos claro, na proposta, como fica a titularidade de cada item do projeto.",
  },
  {
    question: "Preciso entender de tecnologia para acompanhar o projeto?",
    answer:
      "Não. Explicamos cada etapa em linguagem simples, cuidamos da parte técnica e pedimos sua opinião apenas no que importa para o seu negócio: conteúdo, visual e funcionamento.",
  },
  {
    question: "Meu site vai aparecer no Google?",
    answer:
      "Preparamos o site com a estrutura técnica e as boas práticas de SEO para que ele possa ser encontrado nas pesquisas. A posição nos resultados depende de fatores como concorrência e conteúdo, por isso nenhuma empresa séria pode garantir o primeiro lugar.",
  },
  {
    question: "O valor dos anúncios no Google e no Instagram está incluso na gestão de tráfego?",
    answer:
      "Normalmente não. A verba dos anúncios é paga diretamente ao Google e à Meta, e você define quanto quer investir. A FORX cuida do planejamento, da criação e do acompanhamento das campanhas para que esse investimento traga contatos de clientes reais.",
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
      id={service.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className={`group relative flex min-h-[290px] scroll-mt-24 flex-col overflow-hidden bg-[#161616] p-7 transition-colors duration-500 hover:bg-[#1C1C1C] sm:p-9 ${
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.forxdigital.com.br/#organization",
  name: "FORX Digital",
  url: "https://www.forxdigital.com.br/",
  description:
    "Criação de sites profissionais, landing pages, SEO local e estratégias de tráfego pago.",
  sameAs: ["https://www.instagram.com/forx.digital/"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.forxdigital.com.br/#website",
  name: "FORX Digital",
  url: "https://www.forxdigital.com.br/",
  publisher: {
    "@id": "https://www.forxdigital.com.br/#organization",
  },
};


  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#151515]">
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      organizationSchema,
      websiteSchema,
    ]),
  }}
/>

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
              Tecnologia, gestão e crescimento
            </span>
          </motion.div>

          <h1 className="max-w-[1000px] text-[clamp(3.2rem,8vw,7.5rem)] font-medium leading-[0.98] tracking-[-0.075em]">
            {[
              ["Tecnologia.", "text-white"],
              ["Gestão.", "text-white/45"],
              ["Crescimento.", "text-white"],
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
                Soluções que conectam gestão, automação,
                desenvolvimento de software e marketing digital
                para empresas que querem crescer de forma inteligente.
              </p>

              <a
                href="#contato"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#EDE5FF]"
              >
                Fale com a FORX
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
              Do processo ao crescimento
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[35px] font-medium leading-[1.13] tracking-[-0.055em] sm:text-5xl lg:text-[60px]">
              Da operação interna

              <span className="block text-black/35">
                ao crescimento online.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-black/50">
              Atuamos desde a estruturação de processos
              internos e do relacionamento com clientes
              até o desenvolvimento de plataformas digitais
              e estratégias de crescimento online.
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
              title="Soluções que conectam gestão, tecnologia e marketing."
              description="Da organização interna à conquista de novos clientes: tudo o que sua empresa precisa para operar melhor e crescer."
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
            title="Do desafio à solução funcionando."
            description="Um processo claro, com foco no que realmente faz diferença para a operação e o crescimento do seu negócio."
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
              title="Tecnologia a serviço do seu negócio."
              description="Não entregamos ferramentas isoladas. Conectamos gestão, automação, software e marketing para gerar resultado de verdade."
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
            title="Transformamos desafios em soluções tecnológicas."
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
              A FORX Digital é uma empresa de tecnologia e
              soluções estratégicas para negócios, especializada
              em conectar gestão, automação, desenvolvimento de
              software e marketing digital.
            </p>

            <p className="mt-5 text-base leading-7 text-white/45">
              Nosso propósito é transformar desafios empresariais
              em soluções tecnológicas, ajudando empresas a otimizar
              sua operação, fortalecer sua presença no mercado e
              crescer de forma inteligente e sustentável.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Tecnologia",
                "Gestão",
                "Crescimento",
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
              title="Vamos transformar seu desafio em solução."
              description="Conte um pouco sobre sua empresa e o que você precisa melhorar. Vamos conversar sobre as possibilidades."
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
                Tecnologia e soluções estratégicas que conectam
                gestão, automação, software e marketing digital.
                <span className="mt-3 block font-medium text-white/70">
                  FORX Digital — Tecnologia, gestão e crescimento.
                </span>
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
                    ["Gestão", "#gestao-processos"],
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

<a
  href="https://www.instagram.com/forx.digital/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram da FORX Digital"
  className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-[#A879F5]"
>
  Instagram

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
