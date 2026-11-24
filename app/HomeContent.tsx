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

import MegaMenu from "./components/MegaMenu";
import GooglePresence from "./components/GooglePresence";
import HomePortfolio from "./components/HomePortfolio";
import ContactForm from "./components/ContactForm";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ServicesShowcase from "./components/ServicesShowcase";
import Scenes, { DotButton } from "./components/scenes/Scenes";
import {
  BlockHead,
  FaqList,
  d,
  useSceneEffects,
} from "./components/scenes/blocks";
import s from "./components/scenes/scenes.module.css";
import { homeFaqs as faqs } from "./home-faqs";
import { INSTAGRAM } from "./seo";

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
    tab: "Gestão",
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
    tab: "CRM",
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
    tab: "Automação",
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
    tab: "Software",
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
    tab: "Sites",
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
    tab: "Marketing",
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
// PERGUNTAS FREQUENTES
// ==========================================


// ==========================================
// PÁGINA PRINCIPAL
// ==========================================

export default function HomeContent() {
  const rootRef = useRef<HTMLDivElement>(null);
  useSceneEffects(rootRef);

  return (
    <main className={s.main}>

      <MegaMenu />

      {/* TOPO + FRASE + PAINEL (animados com a rolagem) */}
      <div id="inicio">
        <Scenes
          heroTitle={[
            { text: "Mais clientes." },
            { br: true },
            { text: " Agenda cheia.", hl: true },
            { br: true },
            { text: " Zero bagunça." },
          ]}
          description="Site, Google, anúncios e agenda online com lembretes no WhatsApp, tudo num plano mensal só. Você atende, a FORX traz os clientes e organiza o resto."
          primary={{
            label: "Quero mais clientes",
            href: `${whatsappLink}?text=${encodeURIComponent(
              "Olá! Conheci a FORX Digital pelo site e quero mais clientes para o meu negócio."
            )}`,
            external: true,
          }}
          secondary={{ label: "Ver planos a partir de R$ 195/mês", href: "/precos" }}
        />

      </div>

      <div ref={rootRef}>
        {/* O QUE FAZEMOS: abas com um card por serviço */}
        <ServicesShowcase
          id="servicos"
          label="O que fazemos"
          title={["Soluções que conectam", "gestão, tecnologia e marketing."]}
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
              label="NOSSO PROCESSO"
              title={[{ text: "Do desafio à solução funcionando." }]}
              lead="Um processo claro, com foco no que realmente faz diferença para a operação e o crescimento do seu negócio."
            />

            <div className={s.grid}>
              {steps.map((step, index) => (
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
              label="PERGUNTAS FREQUENTES"
              title={[{ text: "Ainda tem dúvidas?" }]}
              lead="Confira algumas respostas sobre nossos serviços e o desenvolvimento do seu projeto."
            />
            <FaqList faqs={faqs} />
          </section>

          {/* CONTATO */}
          <section id="contato" className={`${s.block} scroll-mt-20`} data-tone="black">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <BlockHead
                  label="VAMOS CONVERSAR"
                  title={[{ text: "Vamos transformar seu desafio em solução." }]}
                  lead="Conte um pouco sobre sua empresa e o que você precisa melhorar. Vamos conversar sobre as possibilidades."
                />

                <div
                  className={`${s.fade} mt-8 flex items-center gap-3 text-sm text-white/55`}
                  data-fade
                  style={d(0.15)}
                >
                  <MapPin size={18} className="text-[#c9b6ff]" />
                  Atendimento online em Guarulhos, São Paulo e região
                </div>

                <div className={`${s.fade} mt-8`} data-fade style={d(0.2)}>
                  <DotButton href={whatsappLink} large external>
                    Conversar pelo WhatsApp
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
                Tecnologia e soluções estratégicas que conectam gestão,
                automação, software e marketing digital.
                <strong>FORX Digital — Tecnologia, gestão e crescimento.</strong>
              </p>
            </div>

            <div className={s.footCols}>
              <div>
                <h3>NAVEGAÇÃO</h3>
                <ul>
                  {[
                    ["Serviços", "#servicos"],
                    ["Gestão", "#gestao-processos"],
                    ["Cases", "/cases"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <a href={href}>{label}</a>
                    </li>
                  ))}
                  <li>
                    <Link href="/criacao-de-sites">Criação de Sites</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3>CONTATO</h3>
                <ul>
                  <li>
                    <a href="#contato">Solicitar orçamento ↗</a>
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
                      aria-label="Instagram da FORX Digital"
                    >
                      Instagram ↗
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={s.footBottom}>
            <p>© 2026 FORX Digital. Todos os direitos reservados.</p>
            <p>
              <Link href="/privacidade">Política de Privacidade</Link> · Design &
              desenvolvimento digital.
            </p>
          </div>
        </footer>
      </div>

      {/* WHATSAPP FLUTUANTE */}
      <WhatsAppFloat phone="5511994880312" />
    </main>
  );
}
