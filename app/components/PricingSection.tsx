"use client";

import Link from "next/link";
import { Check, Minus, ArrowUpRight, Info, Sparkles } from "lucide-react";

import { d } from "./scenes/blocks";
import sc from "./scenes/scenes.module.css";
import { useHref, useLang, useT } from "./LangProvider";
import { whatsappUrl, type Dict, type Locale } from "../i18n";

/** Marcadores das células: incluso / não incluso (iguais em todos os idiomas). */
const YES = "Sim";
const NO = "—";

type Plan = {
  /** Nome em português (identifica o plano; o nome exibido vem de PLAN_NAMES). */
  id: string;
  name: string;
  /** Valor mensal em reais. Sem valor, o plano aparece como "Sob proposta". */
  price?: string;
  description: string;
  featured?: boolean;
};

type ComparisonRow = {
  label: string;
  /** Link opcional no nome da linha (ex.: página do Sistema FORX). */
  href?: string;
  values: [string, string, string, string, string];
};

/** Partes fixas dos planos (preço e destaque); textos em PLAN_TEXT. */
const planBase: Omit<Plan, "name" | "description">[] = [
  { id: "Básico", price: "195" },
  { id: "Essencial", price: "397" },
  { id: "Growth", price: "797", featured: true },
  { id: "Premium", price: "1.197" },
  { id: "Enterprise" },
];

const PLAN_NAMES: Dict<Record<string, string>> = {
  pt: { Básico: "Básico", Essencial: "Essencial", Growth: "Growth", Premium: "Premium", Enterprise: "Enterprise" },
  en: { Básico: "Basic", Essencial: "Essential", Growth: "Growth", Premium: "Premium", Enterprise: "Enterprise" },
  es: { Básico: "Básico", Essencial: "Esencial", Growth: "Growth", Premium: "Premium", Enterprise: "Enterprise" },
};

/** Nome do plano no idioma (recebe o nome em português, como em data/cases.ts). */
export function planName(lang: Locale, ptName: string) {
  return PLAN_NAMES[lang][ptName] ?? ptName;
}

const PLAN_DESCRIPTIONS: Dict<string[]> = {
  pt: [
    "Uma página profissional para ser encontrado.",
    "Site completo e agenda organizada.",
    "Para atrair novos clientes com anúncios.",
    "Estratégia completa com acompanhamento.",
    "Para redes, franquias e várias unidades.",
  ],
  en: [
    "A professional page so customers can find you.",
    "Full website and an organized schedule.",
    "To attract new customers with ads.",
    "Complete strategy with ongoing support.",
    "For chains, franchises and multiple locations.",
  ],
  es: [
    "Una página profesional para que te encuentren.",
    "Sitio completo y agenda organizada.",
    "Para atraer nuevos clientes con anuncios.",
    "Estrategia completa con acompañamiento.",
    "Para redes, franquicias y varias sucursales.",
  ],
};

const ROWS: Dict<ComparisonRow[]> = {
  pt: [
    { label: "Site", values: ["Landing page (1 página)", "Site até 5 páginas", "Site até 5 páginas", "Site até 8 páginas + blog", "Sob medida"] },
    { label: "Hospedagem, domínio e SSL", values: [YES, YES, YES, YES, YES] },
    { label: "Alterações no site por mês", values: ["1", "2", "3", "Ilimitadas (pequenas)", "Sob medida"] },
    { label: "Sistema FORX (Pro ou Clínica)", href: "/sistema-forx", values: [NO, "Sim, até 3 usuários", "Sim, até 5 usuários", "Sim, até 10 usuários", "Usuários e unidades sob medida"] },
    { label: "Link de agendamento + lembretes WhatsApp", values: [NO, YES, YES, YES, YES] },
    { label: "Tráfego pago", values: [NO, NO, "1 plataforma (Google ou Meta)", "Google + Meta", "Multicanal"] },
    { label: "Relatório de resultados", values: [NO, NO, "Mensal", "Quinzenal", "Sob medida"] },
    { label: "Reunião de acompanhamento", values: [NO, NO, NO, "Mensal (online)", "Sob medida"] },
    { label: "Suporte", values: ["WhatsApp, horário comercial", "WhatsApp, horário comercial", "WhatsApp, prioridade", "WhatsApp, prioridade", "Dedicado"] },
  ],
  en: [
    { label: "Website", values: ["Landing page (1 page)", "Website up to 5 pages", "Website up to 5 pages", "Website up to 8 pages + blog", "Custom"] },
    { label: "Hosting, domain and SSL", values: [YES, YES, YES, YES, YES] },
    { label: "Website changes per month", values: ["1", "2", "3", "Unlimited (small)", "Custom"] },
    { label: "FORX System (Pro or Clinic)", href: "/sistema-forx", values: [NO, "Yes, up to 3 users", "Yes, up to 5 users", "Yes, up to 10 users", "Custom users and locations"] },
    { label: "Booking link + WhatsApp reminders", values: [NO, YES, YES, YES, YES] },
    { label: "Paid ads", values: [NO, NO, "1 platform (Google or Meta)", "Google + Meta", "Multichannel"] },
    { label: "Results report", values: [NO, NO, "Monthly", "Every two weeks", "Custom"] },
    { label: "Follow-up meeting", values: [NO, NO, NO, "Monthly (online)", "Custom"] },
    { label: "Support", values: ["WhatsApp, business hours", "WhatsApp, business hours", "WhatsApp, priority", "WhatsApp, priority", "Dedicated"] },
  ],
  es: [
    { label: "Sitio web", values: ["Landing page (1 página)", "Sitio de hasta 5 páginas", "Sitio de hasta 5 páginas", "Sitio de hasta 8 páginas + blog", "A medida"] },
    { label: "Alojamiento, dominio y SSL", values: [YES, YES, YES, YES, YES] },
    { label: "Cambios en el sitio por mes", values: ["1", "2", "3", "Ilimitados (pequeños)", "A medida"] },
    { label: "Sistema FORX (Pro o Clínica)", href: "/sistema-forx", values: [NO, "Sí, hasta 3 usuarios", "Sí, hasta 5 usuarios", "Sí, hasta 10 usuarios", "Usuarios y sucursales a medida"] },
    { label: "Enlace de agenda + recordatorios por WhatsApp", values: [NO, YES, YES, YES, YES] },
    { label: "Publicidad pagada", values: [NO, NO, "1 plataforma (Google o Meta)", "Google + Meta", "Multicanal"] },
    { label: "Informe de resultados", values: [NO, NO, "Mensual", "Quincenal", "A medida"] },
    { label: "Reunión de seguimiento", values: [NO, NO, NO, "Mensual (online)", "A medida"] },
    { label: "Soporte", values: ["WhatsApp, horario comercial", "WhatsApp, horario comercial", "WhatsApp, prioridad", "WhatsApp, prioridad", "Dedicado"] },
  ],
};

const UI: Dict<{
  planMsg: (plan: string) => string;
  generalMsg: string;
  included: string;
  notIncluded: string;
  onRequest: string;
  onRequestNote: string;
  perMonth: string;
  eyebrow: string;
  title: string;
  plansLabel: string;
  whatsIncluded: string;
  featured: string;
  start: string;
  requestProposal: string;
  whichPlan: string;
  talkPlan: string;
  adsTitle: string;
  adsText: string;
  doubts: string;
  talk: string;
}> = {
  pt: {
    planMsg: (plan) => `Olá! Tenho interesse no plano ${plan} da FORX Digital. Gostaria de receber mais informações.`,
    generalMsg: "Olá! Estou vendo os planos da FORX Digital e gostaria de ajuda para escolher o ideal.",
    included: "Incluso",
    notIncluded: "Não incluso",
    onRequest: "Sob proposta",
    onRequestNote: "Conforme sua operação",
    perMonth: "/mês",
    eyebrow: "Comparativo dos planos",
    title: "Site, sistema e tráfego em um só lugar.",
    plansLabel: "Planos FORX",
    whatsIncluded: "O que está incluso",
    featured: "MAIS ESCOLHIDO",
    start: "Começar agora",
    requestProposal: "Solicitar proposta",
    whichPlan: "Qual plano combina com você?",
    talkPlan: "Falar sobre o plano",
    adsTitle: "Importante sobre o tráfego pago:",
    adsText: "a verba de anúncios não está inclusa em nenhum plano. O investimento é pago separadamente, direto à plataforma (Google ou Meta), conforme o orçamento definido para as campanhas.",
    doubts: "Ainda tem dúvidas sobre qual plano escolher?",
    talk: "Converse com a FORX",
  },
  en: {
    planMsg: (plan) => `Hi! I am interested in FORX Digital's ${plan} plan. I would like to receive more information.`,
    generalMsg: "Hi! I am looking at FORX Digital's plans and would like help choosing the right one.",
    included: "Included",
    notIncluded: "Not included",
    onRequest: "Custom quote",
    onRequestNote: "Based on your operation",
    perMonth: "/month",
    eyebrow: "Plan comparison",
    title: "Website, system and ads in one place.",
    plansLabel: "FORX plans",
    whatsIncluded: "What's included",
    featured: "MOST POPULAR",
    start: "Get started",
    requestProposal: "Request a proposal",
    whichPlan: "Which plan suits you?",
    talkPlan: "Talk about this plan",
    adsTitle: "Important about paid ads:",
    adsText: "the ad budget is not included in any plan. It is paid separately, directly to the platform (Google or Meta), according to the budget set for the campaigns.",
    doubts: "Still not sure which plan to choose?",
    talk: "Talk to FORX",
  },
  es: {
    planMsg: (plan) => `¡Hola! Me interesa el plan ${plan} de FORX Digital. Me gustaría recibir más información.`,
    generalMsg: "¡Hola! Estoy viendo los planes de FORX Digital y me gustaría ayuda para elegir el ideal.",
    included: "Incluido",
    notIncluded: "No incluido",
    onRequest: "Bajo propuesta",
    onRequestNote: "Según tu operación",
    perMonth: "/mes",
    eyebrow: "Comparativo de planes",
    title: "Sitio web, sistema y publicidad en un solo lugar.",
    plansLabel: "Planes FORX",
    whatsIncluded: "Qué incluye",
    featured: "EL MÁS ELEGIDO",
    start: "Empezar ahora",
    requestProposal: "Solicitar propuesta",
    whichPlan: "¿Qué plan va contigo?",
    talkPlan: "Hablar sobre el plan",
    adsTitle: "Importante sobre la publicidad pagada:",
    adsText: "el presupuesto de anuncios no está incluido en ningún plan. La inversión se paga por separado, directamente a la plataforma (Google o Meta), según el presupuesto definido para las campañas.",
    doubts: "¿Todavía tienes dudas sobre qué plan elegir?",
    talk: "Habla con FORX",
  },
};

const featuredIndex = planBase.findIndex((plan) => plan.featured);

const gridCols =
  "grid grid-cols-[170px_repeat(5,minmax(150px,1fr))] lg:grid-cols-[200px_repeat(5,minmax(0,1fr))]";

/** Primeira coluna fica fixa ao rolar a tabela para o lado no celular. */
const stickyCol = "sticky left-0 z-10";

function ComparisonCell({ value }: { value: string }) {
  const t = useT(UI);
  if (value === YES) {
    return (
      <div className="flex min-h-[54px] w-full items-center justify-center px-2 py-2.5">
        <Check size={17} className="text-[#3b0764]" aria-hidden />
        <span className="sr-only">{t.included}</span>
      </div>
    );
  }

  if (value === NO) {
    return (
      <div className="flex min-h-[54px] w-full items-center justify-center px-2 py-2.5">
        <Minus size={15} className="text-[#1a1238]/25" aria-hidden />
        <span className="sr-only">{t.notIncluded}</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-[54px] w-full items-center justify-center px-2 py-2.5 text-center sm:px-3">
      <span className="break-words text-xs leading-5 text-[#1a1238]/75 sm:text-[13px]">
        {value}
      </span>
    </div>
  );
}

function PlanPrice({ price }: { price?: string }) {
  const t = useT(UI);
  if (!price) {
    return (
      <div className="mt-4 flex flex-col">
        <span className="text-xl font-medium tracking-tight text-[#1a1238] sm:text-2xl">
          {t.onRequest}
        </span>
        <span className="mt-1 text-xs text-[#5c5478]">{t.onRequestNote}</span>
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-wrap items-baseline gap-1.5">
      <span className="text-sm text-[#5c5478]">R$</span>
      <span className="text-2xl font-medium tracking-tight text-[#1a1238] sm:text-[28px]">
        {price}
      </span>
      <span className="text-xs text-[#5c5478]">{t.perMonth}</span>
    </div>
  );
}

function PlanButton({ plan, label }: { plan: Plan; label: string }) {
  const t = useT(UI);
  return (
    <a
      href={whatsappUrl(t.planMsg(plan.name))}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex min-h-10 w-full items-center justify-center gap-1.5 rounded-full px-2 text-center text-xs font-medium transition-all duration-300 sm:px-3 sm:text-[13px] ${
        plan.featured
          ? "bg-[#59168b] text-white hover:bg-[#6e11b0] hover:shadow-[0_8px_22px_rgba(89,22,139,0.35)]"
          : "border border-[#1a1238]/15 text-[#1a1238] hover:border-[#3b0764] hover:bg-[#3b0764]/[0.06]"
      }`}
    >
      {label}
      <ArrowUpRight size={14} />
    </a>
  );
}

export default function PricingSection() {
  const lang = useLang();
  const href = useHref();
  const t = UI[lang];
  const rows = ROWS[lang];
  const plans: Plan[] = planBase.map((plan, i) => ({
    ...plan,
    name: planName(lang, plan.id),
    description: PLAN_DESCRIPTIONS[lang][i],
  }));

  return (
    <section
      id="pricing"
      className="relative isolate w-full overflow-hidden text-[#1a1238]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 pb-16 pt-12 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">
        {/* TÍTULO */}
        <div data-fade className={`${sc.fade} mb-8 text-center`}>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#3b0764]">
            {t.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl font-medium tracking-tight text-[#1a1238] sm:text-3xl">
            {t.title}
          </h2>
        </div>

        {/* TABELA COMPARATIVA */}
        <div
          data-fade
          style={d(0.08)}
          className={`${sc.fade} w-full overflow-hidden rounded-[20px] border border-[#3b0764]/15 bg-white shadow-[0_30px_70px_-35px_rgba(59,7,100,0.45)]`}
        >
          {/* ROLAGEM SOMENTE QUANDO NECESSÁRIA */}
          <div className="w-full overflow-x-auto">
            <div className="w-full min-w-[920px] lg:min-w-0">
              {/* CABEÇALHO DOS PLANOS */}
              <div className={gridCols}>
                <div
                  className={`${stickyCol} flex flex-col justify-end border-b border-[#1a1238]/[0.08] bg-white p-4 sm:p-5`}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#3b0764]">
                    {t.plansLabel}
                  </span>
                  <h3 className="mt-2 text-base font-medium text-[#1a1238]">
                    {t.whatsIncluded}
                  </h3>
                </div>

                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`flex min-w-0 flex-col border-b border-l border-[#1a1238]/[0.08] p-4 ${
                      plan.featured ? "bg-[#3b0764]/[0.07]" : ""
                    }`}
                  >
                    <div className="mb-3 flex min-h-6 items-center justify-center">
                      {plan.featured && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#59168b] px-3 py-1 text-[10px] font-semibold tracking-wide text-white shadow-[0_6px_18px_rgba(89,22,139,0.3)]">
                          <Sparkles size={12} />
                          {t.featured}
                        </span>
                      )}
                    </div>

                    <h3 className="break-words text-base font-semibold tracking-tight text-[#1a1238] sm:text-lg">
                      {plan.name}
                    </h3>

                    <p className="mt-1.5 min-h-10 break-words text-xs leading-5 text-[#5c5478]">
                      {plan.description}
                    </p>

                    <PlanPrice price={plan.price} />

                    <div className="mt-5">
                      <PlanButton
                        plan={plan}
                        label={plan.price ? t.start : t.requestProposal}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* LINHAS COMPARATIVAS */}
              {rows.map((row, index) => {
                const rowBg = index % 2 === 0 ? "bg-[#f7f5f9]" : "bg-white";

                return (
                  <div key={row.label} className={`${gridCols} ${rowBg}`}>
                    <div
                      className={`${stickyCol} ${rowBg} flex min-h-[54px] min-w-0 items-center border-b border-[#1a1238]/[0.06] px-3 py-2.5 sm:px-5`}
                    >
                      {row.href ? (
                        <Link
                          href={href(row.href)}
                          className="break-words text-xs font-medium leading-5 text-[#1a1238] underline decoration-[#3b0764]/30 underline-offset-4 transition-colors hover:text-[#3b0764] hover:decoration-[#3b0764] sm:text-[13px]"
                        >
                          {row.label}
                        </Link>
                      ) : (
                        <span className="break-words text-xs font-medium leading-5 text-[#1a1238] sm:text-[13px]">
                          {row.label}
                        </span>
                      )}
                    </div>

                    {row.values.map((value, i) => (
                      <div
                        key={`${row.label}-${i}`}
                        className={`min-w-0 border-b border-l border-[#1a1238]/[0.06] ${
                          i === featuredIndex ? "bg-[#3b0764]/[0.05]" : ""
                        }`}
                      >
                        <ComparisonCell value={value} />
                      </div>
                    ))}
                  </div>
                );
              })}

              {/* BOTÕES FINAIS */}
              <div className={gridCols}>
                <div className={`${stickyCol} flex items-center bg-white p-3 sm:p-5`}>
                  <span className="text-xs leading-5 text-[#5c5478]">
                    {t.whichPlan}
                  </span>
                </div>

                {plans.map((plan) => (
                  <div
                    key={`footer-${plan.name}`}
                    className={`min-w-0 border-l border-[#1a1238]/[0.08] p-3 ${
                      plan.featured ? "bg-[#3b0764]/[0.07]" : ""
                    }`}
                  >
                    <PlanButton plan={plan} label={t.talkPlan} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AVISO */}
        <div
          data-fade
          className={`${sc.fade} mx-auto mt-6 flex max-w-4xl items-start gap-3 rounded-xl border border-[#3b0764]/15 bg-white/70 px-5 py-4`}
        >
          <Info size={18} className="mt-0.5 shrink-0 text-[#3b0764]" />

          <p className="text-xs leading-6 text-[#5c5478] sm:text-sm">
            <strong className="font-medium text-[#1a1238]">
              {t.adsTitle}
            </strong>{" "}
            {t.adsText}
          </p>
        </div>

        {/* CHAMADA FINAL */}
        <div data-fade className={`${sc.fade} mt-8 text-center`}>
          <p className="text-sm text-[#5c5478]">
            {t.doubts}
          </p>

          <a
            href={whatsappUrl(t.generalMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#59168b] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6e11b0] hover:shadow-[0_0_30px_rgba(89,22,139,0.3)]"
          >
            {t.talk}
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
