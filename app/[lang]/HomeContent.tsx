"use client";

import { useRef } from "react";
import Link from "next/link";

import {
  BriefcaseBusiness,
  Code2,
  MapPin,
  MonitorSmartphone,
  Target,
  Users,
  Workflow,
} from "lucide-react";

import MegaMenu from "@/app/components/MegaMenu";
import GooglePresence from "@/app/components/GooglePresence";
import HomePortfolio from "@/app/components/HomePortfolio";
import ContactForm from "@/app/components/ContactForm";
import WhatsAppFloat from "@/app/components/WhatsAppFloat";
import ServicesShowcase, { type ShowcaseService } from "@/app/components/ServicesShowcase";
import Scenes, { DotButton } from "@/app/components/scenes/Scenes";
import {
  BlockHead,
  FaqList,
  d,
  useSceneEffects,
} from "@/app/components/scenes/blocks";
import s from "@/app/components/scenes/scenes.module.css";
import { useHref, useLang } from "@/app/components/LangProvider";
import { whatsappUrl, type Dict } from "@/app/i18n";
import { INSTAGRAM } from "@/app/seo";
import { homeFaqs } from "./home-faqs";

// ==========================================
// SERVIÇOS
// ==========================================

/** Dados fixos de cada serviço (ícone, âncora e link); os textos ficam em SERVICE_TEXT. */
const serviceBase = [
  { id: "gestao-processos", number: "01", icon: BriefcaseBusiness, href: "/gestao/processos-internos" },
  { id: "relacionamento-clientes", number: "02", icon: Users, href: "/gestao/crm" },
  { id: "automacao", number: "03", icon: Workflow, href: "/gestao/automacao" },
  { id: "desenvolvimento-software", number: "04", icon: Code2, href: "#contato" },
  { id: "criacao-de-sites", number: "05", icon: MonitorSmartphone, href: "/criacao-de-sites" },
  { id: "marketing-digital", number: "06", icon: Target, href: "#contato" },
];

type ServiceText = { tab: string; title: string; description: string; tags: string[] };

const SERVICE_TEXT: Dict<ServiceText[]> = {
  pt: [
    {
      tab: "Gestão",
      title: "Gestão e processos",
      description:
        "Estruturação de processos internos, rotinas e indicadores para dar mais clareza, controle e eficiência à operação da sua empresa.",
      tags: ["Processos internos", "Indicadores", "Organização"],
    },
    {
      tab: "CRM",
      title: "Relacionamento com clientes",
      description:
        "Organização do atendimento e do funil comercial com CRM, para acompanhar contatos, oportunidades e não perder nenhum cliente.",
      tags: ["CRM", "Funil de vendas", "Atendimento"],
    },
    {
      tab: "Automação",
      title: "Automação",
      description:
        "Automatizamos tarefas repetitivas, avisos e fluxos de trabalho para sua equipe ganhar tempo e focar no que gera resultado.",
      tags: ["Fluxos", "Integrações", "WhatsApp"],
    },
    {
      tab: "Software",
      title: "Desenvolvimento de software",
      description:
        "Plataformas digitais e sistemas sob medida, desenvolvidos para as necessidades reais do seu negócio.",
      tags: ["Plataformas", "Sistemas web", "Sob medida"],
    },
    {
      tab: "Sites",
      title: "Criação de sites",
      description:
        "Sites institucionais e landing pages profissionais, responsivos e preparados para o Google, que fortalecem sua presença no mercado.",
      tags: ["Institucionais", "Landing pages", "SEO"],
    },
    {
      tab: "Marketing",
      title: "Marketing digital e tráfego pago",
      description:
        "Campanhas no Google Ads e Meta Ads, SEO local e estratégias de crescimento online para atrair clientes de forma consistente.",
      tags: ["Google Ads", "Meta Ads", "SEO local"],
    },
  ],
  en: [
    {
      tab: "Management",
      title: "Management and processes",
      description:
        "We structure internal processes, routines and metrics to bring more clarity, control and efficiency to your company's operation.",
      tags: ["Internal processes", "Metrics", "Organization"],
    },
    {
      tab: "CRM",
      title: "Customer relationships",
      description:
        "We organize customer service and the sales pipeline with a CRM, so you can track contacts and opportunities and never lose a customer.",
      tags: ["CRM", "Sales pipeline", "Customer service"],
    },
    {
      tab: "Automation",
      title: "Automation",
      description:
        "We automate repetitive tasks, notifications and workflows so your team saves time and focuses on what brings results.",
      tags: ["Workflows", "Integrations", "WhatsApp"],
    },
    {
      tab: "Software",
      title: "Software development",
      description:
        "Digital platforms and custom systems, built for the real needs of your business.",
      tags: ["Platforms", "Web systems", "Custom-built"],
    },
    {
      tab: "Websites",
      title: "Website design",
      description:
        "Professional business websites and landing pages, responsive and ready for Google, that strengthen your market presence.",
      tags: ["Business websites", "Landing pages", "SEO"],
    },
    {
      tab: "Marketing",
      title: "Digital marketing and paid ads",
      description:
        "Google Ads and Meta Ads campaigns, local SEO and online growth strategies to attract customers consistently.",
      tags: ["Google Ads", "Meta Ads", "Local SEO"],
    },
  ],
  es: [
    {
      tab: "Gestión",
      title: "Gestión y procesos",
      description:
        "Estructuramos procesos internos, rutinas e indicadores para dar más claridad, control y eficiencia a la operación de tu empresa.",
      tags: ["Procesos internos", "Indicadores", "Organización"],
    },
    {
      tab: "CRM",
      title: "Relación con clientes",
      description:
        "Organizamos la atención y el embudo comercial con un CRM, para seguir contactos y oportunidades y no perder ningún cliente.",
      tags: ["CRM", "Embudo de ventas", "Atención"],
    },
    {
      tab: "Automatización",
      title: "Automatización",
      description:
        "Automatizamos tareas repetitivas, avisos y flujos de trabajo para que tu equipo gane tiempo y se enfoque en lo que da resultados.",
      tags: ["Flujos", "Integraciones", "WhatsApp"],
    },
    {
      tab: "Software",
      title: "Desarrollo de software",
      description:
        "Plataformas digitales y sistemas a medida, desarrollados para las necesidades reales de tu negocio.",
      tags: ["Plataformas", "Sistemas web", "A medida"],
    },
    {
      tab: "Sitios web",
      title: "Creación de sitios web",
      description:
        "Sitios institucionales y landing pages profesionales, adaptables a cualquier pantalla y preparados para Google, que fortalecen tu presencia en el mercado.",
      tags: ["Institucionales", "Landing pages", "SEO"],
    },
    {
      tab: "Marketing",
      title: "Marketing digital y publicidad pagada",
      description:
        "Campañas en Google Ads y Meta Ads, SEO local y estrategias de crecimiento online para atraer clientes de forma constante.",
      tags: ["Google Ads", "Meta Ads", "SEO local"],
    },
  ],
};

// ==========================================
// TEXTOS DA PÁGINA
// ==========================================

type Step = { number: string; title: string; description: string };

const TEXT: Dict<{
  hero: { title: [string, string, string]; description: string; primary: string; primaryMsg: string; secondary: string; secondaryMsg: string };
  services: { label: string; title: [string, string] };
  process: { label: string; title: string; lead: string; steps: Step[] };
  faq: { label: string; title: string; lead: string };
  contact: { label: string; title: string; lead: string; area: string; whatsapp: string };
  footer: { text: string; tagline: string; nav: string; contact: string; links: [string, string][]; sites: string; quote: string; rights: string; privacy: string; design: string; instagram: string };
}> = {
  pt: {
    hero: {
      title: ["Mais clientes.", " Agenda cheia.", " Zero bagunça."],
      description:
        "Site, Google, anúncios e agenda online com lembretes no WhatsApp, tudo num plano mensal só. Você atende, a FORX traz os clientes e organiza o resto.",
      primary: "Quero mais clientes",
      primaryMsg: "Olá! Conheci a FORX Digital pelo site e quero mais clientes para o meu negócio.",
      secondary: "Solicitar um diagnóstico gratuito",
      secondaryMsg: "Olá! Vi o site da FORX Digital e quero solicitar um diagnóstico gratuito para o meu negócio.",
    },
    services: { label: "O que fazemos", title: ["Soluções que conectam", "gestão, tecnologia e marketing."] },
    process: {
      label: "NOSSO PROCESSO",
      title: "Do desafio à solução funcionando.",
      lead: "Um processo claro, com foco no que realmente faz diferença para a operação e o crescimento do seu negócio.",
      steps: [
        { number: "01", title: "Diagnóstico", description: "Entendemos seu negócio, sua operação e os desafios que precisam ser resolvidos." },
        { number: "02", title: "Planejamento", description: "Definimos a solução ideal: processos, tecnologia e estratégias de crescimento." },
        { number: "03", title: "Desenvolvimento", description: "Construímos sistemas, automações, sites e campanhas alinhados aos seus objetivos." },
        { number: "04", title: "Implantação", description: "Colocamos a solução em funcionamento e acompanhamos os resultados com você." },
      ],
    },
    faq: {
      label: "PERGUNTAS FREQUENTES",
      title: "Ainda tem dúvidas?",
      lead: "Confira algumas respostas sobre nossos serviços e o desenvolvimento do seu projeto.",
    },
    contact: {
      label: "VAMOS CONVERSAR",
      title: "Vamos transformar seu desafio em solução.",
      lead: "Conte um pouco sobre sua empresa e o que você precisa melhorar. Vamos conversar sobre as possibilidades.",
      area: "Atendimento online em Guarulhos, São Paulo e região",
      whatsapp: "Conversar pelo WhatsApp",
    },
    footer: {
      text: "Tecnologia e soluções estratégicas que conectam gestão, automação, software e marketing digital.",
      tagline: "FORX Digital — Tecnologia, gestão e crescimento.",
      nav: "NAVEGAÇÃO",
      contact: "CONTATO",
      links: [["Serviços", "#servicos"], ["Gestão", "#gestao-processos"], ["Cases", "/cases"]],
      sites: "Criação de Sites",
      quote: "Solicitar orçamento ↗",
      rights: "© 2026 FORX Digital. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      design: "Design & desenvolvimento digital.",
      instagram: "Instagram da FORX Digital",
    },
  },
  en: {
    hero: {
      title: ["More customers.", " A full schedule.", " Zero mess."],
      description:
        "Website, Google, ads and online booking with WhatsApp reminders, all in one monthly plan. You serve your customers; FORX brings them in and organizes the rest.",
      primary: "I want more customers",
      primaryMsg: "Hi! I found FORX Digital through the website and I want more customers for my business.",
      secondary: "Request a free assessment",
      secondaryMsg: "Hi! I saw the FORX Digital website and I would like a free assessment for my business.",
    },
    services: { label: "What we do", title: ["Solutions that connect", "management, technology and marketing."] },
    process: {
      label: "OUR PROCESS",
      title: "From challenge to a working solution.",
      lead: "A clear process, focused on what really makes a difference to your business's operation and growth.",
      steps: [
        { number: "01", title: "Assessment", description: "We get to know your business, your operation and the challenges that need solving." },
        { number: "02", title: "Planning", description: "We define the right solution: processes, technology and growth strategies." },
        { number: "03", title: "Development", description: "We build systems, automations, websites and campaigns aligned with your goals." },
        { number: "04", title: "Launch", description: "We put the solution to work and track the results with you." },
      ],
    },
    faq: {
      label: "FREQUENTLY ASKED QUESTIONS",
      title: "Still have questions?",
      lead: "Here are some answers about our services and how your project is developed.",
    },
    contact: {
      label: "LET'S TALK",
      title: "Let's turn your challenge into a solution.",
      lead: "Tell us a little about your company and what you need to improve. Let's talk about the possibilities.",
      area: "Online service in Guarulhos, São Paulo and nearby",
      whatsapp: "Chat on WhatsApp",
    },
    footer: {
      text: "Technology and strategic solutions that connect management, automation, software and digital marketing.",
      tagline: "FORX Digital — Technology, management and growth.",
      nav: "NAVIGATION",
      contact: "CONTACT",
      links: [["Services", "#servicos"], ["Management", "#gestao-processos"], ["Case studies", "/cases"]],
      sites: "Website Design",
      quote: "Request a quote ↗",
      rights: "© 2026 FORX Digital. All rights reserved.",
      privacy: "Privacy Policy",
      design: "Digital design & development.",
      instagram: "FORX Digital on Instagram",
    },
  },
  es: {
    hero: {
      title: ["Más clientes.", " Agenda llena.", " Cero desorden."],
      description:
        "Sitio web, Google, anuncios y agenda online con recordatorios por WhatsApp, todo en un solo plan mensual. Tú atiendes; FORX trae los clientes y organiza el resto.",
      primary: "Quiero más clientes",
      primaryMsg: "¡Hola! Conocí FORX Digital por el sitio web y quiero más clientes para mi negocio.",
      secondary: "Solicitar un diagnóstico gratuito",
      secondaryMsg: "¡Hola! Vi el sitio de FORX Digital y quiero solicitar un diagnóstico gratuito para mi negocio.",
    },
    services: { label: "Lo que hacemos", title: ["Soluciones que conectan", "gestión, tecnología y marketing."] },
    process: {
      label: "NUESTRO PROCESO",
      title: "Del desafío a la solución funcionando.",
      lead: "Un proceso claro, enfocado en lo que realmente marca la diferencia en la operación y el crecimiento de tu negocio.",
      steps: [
        { number: "01", title: "Diagnóstico", description: "Entendemos tu negocio, tu operación y los desafíos que hay que resolver." },
        { number: "02", title: "Planificación", description: "Definimos la solución ideal: procesos, tecnología y estrategias de crecimiento." },
        { number: "03", title: "Desarrollo", description: "Construimos sistemas, automatizaciones, sitios web y campañas alineados con tus objetivos." },
        { number: "04", title: "Implementación", description: "Ponemos la solución en marcha y seguimos los resultados contigo." },
      ],
    },
    faq: {
      label: "PREGUNTAS FRECUENTES",
      title: "¿Todavía tienes dudas?",
      lead: "Consulta algunas respuestas sobre nuestros servicios y el desarrollo de tu proyecto.",
    },
    contact: {
      label: "HABLEMOS",
      title: "Convirtamos tu desafío en una solución.",
      lead: "Cuéntanos un poco sobre tu empresa y lo que necesitas mejorar. Hablemos de las posibilidades.",
      area: "Atención online en Guarulhos, São Paulo y alrededores",
      whatsapp: "Hablar por WhatsApp",
    },
    footer: {
      text: "Tecnología y soluciones estratégicas que conectan gestión, automatización, software y marketing digital.",
      tagline: "FORX Digital — Tecnología, gestión y crecimiento.",
      nav: "NAVEGACIÓN",
      contact: "CONTACTO",
      links: [["Servicios", "#servicos"], ["Gestión", "#gestao-processos"], ["Casos", "/cases"]],
      sites: "Creación de Sitios Web",
      quote: "Solicitar presupuesto ↗",
      rights: "© 2026 FORX Digital. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      design: "Diseño y desarrollo digital.",
      instagram: "Instagram de FORX Digital",
    },
  },
};

// ==========================================
// PÁGINA PRINCIPAL
// ==========================================

export default function HomeContent() {
  const rootRef = useRef<HTMLDivElement>(null);
  useSceneEffects(rootRef);

  const lang = useLang();
  const href = useHref();
  const t = TEXT[lang];
  const faqs = homeFaqs[lang];
  const whatsappLink = whatsappUrl();

  const services: ShowcaseService[] = serviceBase.map((base, index) => ({
    ...base,
    ...SERVICE_TEXT[lang][index],
  }));

  return (
    <main className={s.main}>

      <MegaMenu />

      {/* TOPO + FRASE + PAINEL (animados com a rolagem) */}
      <div id="inicio">
        <Scenes
          heroTitle={[
            { text: t.hero.title[0] },
            { br: true },
            { text: t.hero.title[1], hl: true },
            { br: true },
            { text: t.hero.title[2] },
          ]}
          description={t.hero.description}
          primary={{
            label: t.hero.primary,
            href: whatsappUrl(t.hero.primaryMsg),
            external: true,
          }}
          secondary={{
            label: t.hero.secondary,
            href: whatsappUrl(t.hero.secondaryMsg),
            external: true,
          }}
        />

      </div>

      <div ref={rootRef}>
        {/* O QUE FAZEMOS: abas com um card por serviço */}
        <ServicesShowcase
          id="servicos"
          label={t.services.label}
          title={t.services.title}
          services={services}
        />
        <div className={`${s.scenes} ${s.rest}`}>
          {/* PORTFÓLIO + QUEM CUIDA DO SEU PROJETO */}
          <HomePortfolio />

          {/* PRESENÇA NO GOOGLE */}
          <GooglePresence />

          {/* PROCESSO */}
          <section id="processo" className={s.block} data-tone="violet">
            <BlockHead
              label={t.process.label}
              title={[{ text: t.process.title }]}
              lead={t.process.lead}
            />

            <div className={s.grid}>
              {t.process.steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`${s.cell} ${s.fade}`}
                  data-fade
                  style={d(0.08 * (index % 2))}
                >
                  <div className={s.cellTop}>
                    <span>{step.number}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PERGUNTAS FREQUENTES */}
          <section className={s.block} data-tone="light">
            <BlockHead
              label={t.faq.label}
              title={[{ text: t.faq.title }]}
              lead={t.faq.lead}
            />
            <FaqList faqs={faqs} />
          </section>

          {/* CONTATO */}
          <section id="contato" className={`${s.block} scroll-mt-20`} data-tone="black">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <BlockHead
                  label={t.contact.label}
                  title={[{ text: t.contact.title }]}
                  lead={t.contact.lead}
                />

                <div
                  className={`${s.fade} mt-8 flex items-center gap-3 text-sm text-white/55`}
                  data-fade
                  style={d(0.15)}
                >
                  <MapPin size={18} className="text-[#c9b6ff]" />
                  {t.contact.area}
                </div>

                <div className={`${s.fade} mt-8`} data-fade style={d(0.2)}>
                  <DotButton href={whatsappLink} large external>
                    {t.contact.whatsapp}
                  </DotButton>
                </div>
              </div>

              <div className={`${s.compare} ${s.fade}`} data-fade style={d(0.1)}>
                <ContactForm />
              </div>
            </div>
          </section>
        </div>

        {/* RODAPÉ */}
        <footer className={`${s.scenes} ${s.footBig}`}>
          <div className={s.footGrid}>
            <div>
              <a href="#inicio" className={s.footBrand}>
                FORX DIGITAL<em>.</em>
              </a>
              <p className={s.footText}>
                {t.footer.text}
                <strong>{t.footer.tagline}</strong>
              </p>
            </div>

            <div className={s.footCols}>
              <div>
                <h3>{t.footer.nav}</h3>
                <ul>
                  {t.footer.links.map(([label, link]) => (
                    <li key={link}>
                      <a href={href(link)}>{label}</a>
                    </li>
                  ))}
                  <li>
                    <Link href={href("/criacao-de-sites")}>{t.footer.sites}</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3>{t.footer.contact}</h3>
                <ul>
                  <li>
                    <a href="#contato">{t.footer.quote}</a>
                  </li>
                  <li>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      WhatsApp ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href={INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.footer.instagram}
                    >
                      Instagram ↗
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={s.footBottom}>
            <p>{t.footer.rights}</p>
            <p>
              <Link href={href("/privacidade")}>{t.footer.privacy}</Link> · {t.footer.design}
            </p>
          </div>
        </footer>
      </div>

      {/* WHATSAPP FLUTUANTE */}
      <WhatsAppFloat />
    </main>
  );
}
