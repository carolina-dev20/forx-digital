"use client";

import Link from "next/link";
import { Check, Minus, ArrowUpRight, Info, Sparkles } from "lucide-react";

import { d } from "./scenes/blocks";
import sc from "./scenes/scenes.module.css";

const WHATSAPP_NUMBER = "5511994880312";

function getWhatsAppLink(plan: string) {
  const message = encodeURIComponent(
    `Olá! Tenho interesse no plano ${plan} da FORX Digital. Gostaria de receber mais informações.`
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

type Plan = {
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

const plans: Plan[] = [
  {
    name: "Básico",
    price: "195",
    description: "Uma página profissional para ser encontrado.",
  },
  {
    name: "Essencial",
    price: "397",
    description: "Site completo e agenda organizada.",
  },
  {
    name: "Growth",
    price: "797",
    description: "Para atrair novos clientes com anúncios.",
    featured: true,
  },
  {
    name: "Premium",
    price: "1.197",
    description: "Estratégia completa com acompanhamento.",
  },
  {
    name: "Enterprise",
    description: "Para redes, franquias e várias unidades.",
  },
];

const rows: ComparisonRow[] = [
  {
    label: "Site",
    values: [
      "Landing page (1 página)",
      "Site até 5 páginas",
      "Site até 5 páginas",
      "Site até 8 páginas + blog",
      "Sob medida",
    ],
  },
  {
    label: "Hospedagem, domínio e SSL",
    values: ["Sim", "Sim", "Sim", "Sim", "Sim"],
  },
  {
    label: "Alterações no site por mês",
    values: ["1", "2", "3", "Ilimitadas (pequenas)", "Sob medida"],
  },
  {
    label: "Sistema FORX (Pro ou Clínica)",
    href: "/sistema-forx",
    values: [
      "—",
      "Sim, até 3 usuários",
      "Sim, até 5 usuários",
      "Sim, até 10 usuários",
      "Usuários e unidades sob medida",
    ],
  },
  {
    label: "Link de agendamento + lembretes WhatsApp",
    values: ["—", "Sim", "Sim", "Sim", "Sim"],
  },
  {
    label: "Tráfego pago",
    values: [
      "—",
      "—",
      "1 plataforma (Google ou Meta)",
      "Google + Meta",
      "Multicanal",
    ],
  },
  {
    label: "Relatório de resultados",
    values: ["—", "—", "Mensal", "Quinzenal", "Sob medida"],
  },
  {
    label: "Reunião de acompanhamento",
    values: ["—", "—", "—", "Mensal (online)", "Sob medida"],
  },
  {
    label: "Suporte",
    values: [
      "WhatsApp, horário comercial",
      "WhatsApp, horário comercial",
      "WhatsApp, prioridade",
      "WhatsApp, prioridade",
      "Dedicado",
    ],
  },
];

const featuredIndex = plans.findIndex((plan) => plan.featured);

const gridCols =
  "grid grid-cols-[170px_repeat(5,minmax(150px,1fr))] lg:grid-cols-[200px_repeat(5,minmax(0,1fr))]";

/** Primeira coluna fica fixa ao rolar a tabela para o lado no celular. */
const stickyCol = "sticky left-0 z-10";

function ComparisonCell({ value }: { value: string }) {
  if (value === "Sim") {
    return (
      <div className="flex min-h-[54px] w-full items-center justify-center px-2 py-2.5">
        <Check size={17} className="text-[#3b0764]" aria-hidden />
        <span className="sr-only">Incluso</span>
      </div>
    );
  }

  if (value === "—") {
    return (
      <div className="flex min-h-[54px] w-full items-center justify-center px-2 py-2.5">
        <Minus size={15} className="text-[#1a1238]/25" aria-hidden />
        <span className="sr-only">Não incluso</span>
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
  if (!price) {
    return (
      <div className="mt-4 flex flex-col">
        <span className="text-xl font-medium tracking-tight text-[#1a1238] sm:text-2xl">
          Sob proposta
        </span>
        <span className="mt-1 text-xs text-[#5c5478]">Conforme sua operação</span>
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-wrap items-baseline gap-1.5">
      <span className="text-sm text-[#5c5478]">R$</span>
      <span className="text-2xl font-medium tracking-tight text-[#1a1238] sm:text-[28px]">
        {price}
      </span>
      <span className="text-xs text-[#5c5478]">/mês</span>
    </div>
  );
}

function PlanButton({ plan, label }: { plan: Plan; label: string }) {
  return (
    <a
      href={getWhatsAppLink(plan.name)}
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
  return (
    <section
      id="pricing"
      className="relative isolate w-full overflow-hidden text-[#1a1238]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 pb-16 pt-12 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">
        {/* TÍTULO */}
        <div data-fade className={`${sc.fade} mb-8 text-center`}>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#3b0764]">
            Comparativo dos planos
          </span>
          <h2 className="mt-2 text-2xl font-medium tracking-tight text-[#1a1238] sm:text-3xl">
            Site, sistema e tráfego em um só lugar.
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
                    Planos FORX
                  </span>
                  <h3 className="mt-2 text-base font-medium text-[#1a1238]">
                    O que está incluso
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
                          MAIS ESCOLHIDO
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
                        label={plan.price ? "Começar agora" : "Solicitar proposta"}
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
                          href={row.href}
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
                    Qual plano combina com você?
                  </span>
                </div>

                {plans.map((plan) => (
                  <div
                    key={`footer-${plan.name}`}
                    className={`min-w-0 border-l border-[#1a1238]/[0.08] p-3 ${
                      plan.featured ? "bg-[#3b0764]/[0.07]" : ""
                    }`}
                  >
                    <PlanButton plan={plan} label="Falar sobre o plano" />
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
              Importante sobre o tráfego pago:
            </strong>{" "}
            a verba de anúncios não está inclusa em nenhum plano. O investimento
            é pago separadamente, direto à plataforma (Google ou Meta), conforme
            o orçamento definido para as campanhas.
          </p>
        </div>

        {/* CHAMADA FINAL */}
        <div data-fade className={`${sc.fade} mt-8 text-center`}>
          <p className="text-sm text-[#5c5478]">
            Ainda tem dúvidas sobre qual plano escolher?
          </p>

          <a
            href={getWhatsAppLink("atendimento")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#59168b] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6e11b0] hover:shadow-[0_0_30px_rgba(89,22,139,0.3)]"
          >
            Converse com a FORX
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
