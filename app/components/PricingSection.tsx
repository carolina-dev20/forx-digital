"use client";

import { useEffect, useState } from "react";
import {
  Check,
  X,
  ArrowUpRight,
  Info,
  Sparkles,
  Globe,
  Users,
} from "lucide-react";


const WHATSAPP_NUMBER = "5511994880312";

function getWhatsAppLink(plan: string) {
  const message = encodeURIComponent(
    `Olá! Tenho interesse no plano ${plan} da FORX Digital. Gostaria de receber mais informações.`
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

type Plan = {
  name: string;
  /** Valor mensal em reais. Sem valor, o plano aparece como "Sob consulta". */
  price?: string;
  description: string;
  featured?: boolean;
};

type ComparisonRow = {
  label: string;
  values: [string, string, string];
};

type Catalog = {
  key: "digital" | "crm";
  tab: string;
  icon: typeof Globe;
  plans: [Plan, Plan, Plan];
  rows: ComparisonRow[];
  footer: string;
  note: { title: string; text: string };
};

// ==========================================
// PRESENÇA DIGITAL
// ==========================================

const digitalCatalog: Catalog = {
  key: "digital",
  tab: "Presença digital",
  icon: Globe,
  plans: [
    {
      name: "Essencial",
      price: "200",
      description: "Para começar sua presença digital.",
    },
    {
      name: "Crescimento",
      price: "500",
      description: "Para ampliar sua visibilidade.",
      featured: true,
    },
    {
      name: "Performance",
      price: "899",
      description: "Para uma estratégia digital completa.",
    },
  ],
  rows: [
    {
      label: "Site institucional",
      values: ["Até 1 página", "Até 5 páginas", "Até 10 páginas"],
    },
    {
      label: "Landing page",
      values: [
        "Sob contratação",
        "Alternativa ao site",
        "Landing page avançada como alternativa",
      ],
    },
    {
      label: "Design responsivo",
      values: ["Incluído", "Incluído", "Incluído"],
    },
    {
      label: "SEO on-page",
      values: ["Básico", "Otimização", "Otimização"],
    },
    {
      label: "SEO local",
      values: ["Não incluído", "Incluído", "Incluído"],
    },
    {
      label: "Perfil da Empresa no Google",
      values: [
        "Configuração inicial ou orientação",
        "Configuração e otimização",
        "Configuração e otimização",
      ],
    },
    {
      label: "Hospedagem e domínio",
      values: ["Durante o plano", "Durante o plano", "Durante o plano"],
    },
    {
      label: "Manutenção",
      values: [
        "Conforme escopo contratado",
        "Conforme escopo contratado",
        "Conforme escopo contratado",
      ],
    },
    {
      label: "Gestão de Meta Ads",
      values: [
        "Sob contratação",
        "Se contratada",
        "Conforme limites do plano",
      ],
    },
    {
      label: "Gestão de Google Ads",
      values: [
        "Não incluída",
        "Não incluída",
        "Conforme limites do plano",
      ],
    },
    {
      label: "Relatórios mensais",
      values: [
        "Se contratados",
        "Se previstos no escopo",
        "Se previstos no escopo",
      ],
    },
    {
      label: "CRM e gestão de clientes",
      values: ["Sob contratação", "Sob contratação", "Sob contratação"],
    },
  ],
  footer: "Vamos construir sua presença digital?",
  note: {
    title: "Importante sobre o tráfego pago:",
    text: "a verba destinada aos anúncios não está incluída na mensalidade do plano. O investimento é pago separadamente, diretamente à plataforma de anúncios, como o Google Ads, conforme o orçamento definido para as campanhas.",
  },
};

// ==========================================
// CRM E GESTÃO
// ==========================================

const crmCatalog: Catalog = {
  key: "crm",
  tab: "CRM e Gestão",
  icon: Users,
  plans: [
    {
      name: "CRM Essencial",
      description: "Para organizar contatos e o funil de vendas.",
    },
    {
      name: "CRM Profissional",
      description: "Para equipes que vendem pelo WhatsApp e precisam de ritmo.",
      featured: true,
    },
    {
      name: "CRM Completo",
      description: "Para gerir comercial, agenda e financeiro em um só lugar.",
    },
  ],
  rows: [
    {
      label: "Indicado para",
      values: [
        "Uso individual ou equipe pequena",
        "Equipe comercial",
        "Várias equipes ou unidades",
      ],
    },
    {
      label: "Cadastro de clientes e histórico",
      values: ["Incluído", "Incluído", "Incluído"],
    },
    {
      label: "Importação de contatos e planilhas",
      values: ["Incluído", "Incluído", "Incluído"],
    },
    {
      label: "Funil de vendas",
      values: [
        "Funil padrão",
        "Funil personalizado",
        "Vários funis personalizados",
      ],
    },
    {
      label: "Agenda e lembretes de follow-up",
      values: ["Incluído", "Incluído", "Incluído"],
    },
    {
      label: "Atendimento pelo WhatsApp no CRM",
      values: ["Não incluído", "Incluído", "Incluído"],
    },
    {
      label: "Automações",
      values: [
        "Não incluído",
        "Automações essenciais",
        "Automações sob medida",
      ],
    },
    {
      label: "Controle financeiro",
      values: ["Não incluído", "Não incluído", "Incluído"],
    },
    {
      label: "Perfis de acesso por usuário",
      values: ["Incluído", "Incluído", "Incluído"],
    },
    {
      label: "Relatórios",
      values: [
        "Visão geral",
        "Relatórios comerciais",
        "Indicadores completos",
      ],
    },
    {
      label: "Implantação",
      values: [
        "Configuração inicial",
        "Implantação guiada",
        "Implantação completa",
      ],
    },
    {
      label: "Treinamento da equipe",
      values: [
        "Orientação de uso",
        "Treinamento da equipe",
        "Treinamento e acompanhamento",
      ],
    },
  ],
  footer: "Vamos organizar o seu comercial?",
  note: {
    title: "Como definimos o valor do CRM:",
    text: "o investimento depende do número de usuários, das integrações e do escopo da implantação. O CRM pode ser contratado sozinho ou junto com um plano de presença digital.",
  },
};

const catalogs = [digitalCatalog, crmCatalog];

const gridCols =
  "grid grid-cols-[150px_repeat(3,minmax(0,1fr))] lg:grid-cols-[200px_repeat(3,minmax(0,1fr))]";

function ComparisonCell({ value }: { value: string }) {
  const included = value === "Incluído";
  const excluded = value === "Não incluído";

  return (
    <div className="flex min-h-[50px] w-full items-center justify-center gap-2 px-2 py-2.5 text-center sm:px-3">
      {included && (
        <Check
          size={16}
          className="shrink-0 text-[#3b0764]"
        />
      )}

      {excluded && (
        <X
          size={15}
          className="shrink-0 text-[#1a1238]/25"
        />
      )}

      <span
        className={`break-words text-xs leading-5 sm:text-[13px] ${
          included
            ? "text-[#1a1238]"
            : excluded
              ? "text-[#1a1238]/35"
              : "text-[#1a1238]/70"
        }`}
      >
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
          Sob consulta
        </span>
        <span className="mt-1 text-xs text-[#5c5478]">
          Proposta conforme sua operação
        </span>
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

export default function PricingSection() {
  const [activeKey, setActiveKey] = useState<Catalog["key"]>("digital");

  // Permite abrir direto na aba de CRM com /precos#crm
  useEffect(() => {
    function syncWithHash() {
      if (window.location.hash === "#crm") setActiveKey("crm");
    }

    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, []);

  const catalog =
    catalogs.find((item) => item.key === activeKey) ?? digitalCatalog;
  const featuredIndex = catalog.plans.findIndex((plan) => plan.featured);

  return (
    <section
      id="pricing"
      className="relative isolate w-full overflow-hidden text-[#1a1238]"
    >
      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 pb-16 pt-12 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">
        {/* ABAS: PRESENÇA DIGITAL / CRM */}
        <div
          role="tablist"
          aria-label="Tipo de plano"
          className="mx-auto mb-7 flex w-fit max-w-full gap-1 rounded-full border border-[#3b0764]/15 bg-white/70 p-1 shadow-[0_8px_24px_-12px_rgba(59,7,100,0.25)]"
        >
          {catalogs.map((item) => {
            const active = item.key === activeKey;
            const Icon = item.icon;

            return (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="pricing-table"
                onClick={() => {
                  setActiveKey(item.key);
                  history.replaceState(
                    null,
                    "",
                    item.key === "crm" ? "#crm" : window.location.pathname
                  );
                }}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium transition-all duration-300 sm:px-6 sm:text-sm ${
                  active
                    ? "bg-[#3b0764] text-white shadow-[0_6px_18px_rgba(59,7,100,0.35)]"
                    : "text-[#1a1238]/60 hover:text-[#1a1238]"
                }`}
              >
                <Icon size={16} />
                {item.tab}
              </button>
            );
          })}
        </div>

        {/* TABELA COMPARATIVA */}
        <div
          id="pricing-table"
          role="tabpanel"
          className="w-full overflow-hidden rounded-[20px] border border-[#3b0764]/15 bg-white shadow-[0_30px_70px_-35px_rgba(59,7,100,0.45)]"
        >
          {/* ROLAGEM SOMENTE QUANDO NECESSÁRIA */}
          <div className="w-full overflow-x-auto">
            <div className="w-full min-w-[760px] lg:min-w-0">
              {/* CABEÇALHO DOS PLANOS */}
              <div className={gridCols}>
                {/* COLUNA DE SERVIÇOS */}
                <div className="flex flex-col justify-end border-b border-[#1a1238]/[0.08] p-4 sm:p-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#3b0764]">
                    {catalog.tab}
                  </span>

                  <h2 className="mt-2 text-base font-medium text-[#1a1238]">
                    O que está incluso
                  </h2>
                </div>

                {/* CARDS DOS PLANOS */}
                {catalog.plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`flex min-w-0 flex-col border-b border-l border-[#1a1238]/[0.08] p-4 sm:p-5 ${
                      plan.featured ? "bg-[#3b0764]/[0.07]" : ""
                    }`}
                  >
                    {/* SELO SEM CORTE */}
                    <div className="mb-3 flex min-h-6 items-center justify-center">
                      {plan.featured && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3b0764] px-3.5 py-1 text-[10px] font-semibold tracking-wide text-white shadow-[0_6px_18px_rgba(59,7,100,0.3)]">
                          <Sparkles size={12} />
                          {catalog.key === "crm" ? "RECOMENDADO" : "MAIS ESCOLHIDO"}
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

                    <a
                      href={getWhatsAppLink(plan.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-5 flex min-h-10 w-full items-center justify-center gap-1.5 rounded-full px-2 text-xs font-medium transition-all duration-300 sm:gap-2 sm:px-4 sm:text-[13px] ${
                        plan.featured
                          ? "bg-[#3b0764] text-white hover:bg-[#59168b] hover:shadow-[0_8px_22px_rgba(59,7,100,0.35)]"
                          : "border border-[#1a1238]/15 text-[#1a1238] hover:border-[#3b0764] hover:bg-[#3b0764]/[0.06]"
                      }`}
                    >
                      {plan.price ? "Começar agora" : "Solicitar proposta"}
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                ))}
              </div>

              {/* LINHAS COMPARATIVAS */}
              {catalog.rows.map((row, index) => (
                <div
                  key={row.label}
                  className={`${gridCols} ${
                    index % 2 === 0
                      ? "bg-[#3b0764]/[0.04]"
                      : "bg-white"
                  }`}
                >
                  {/* NOME DO SERVIÇO */}
                  <div className="flex min-h-[50px] min-w-0 items-center border-b border-[#1a1238]/[0.06] px-3 py-2.5 sm:px-5">
                    <span className="break-words text-xs font-medium leading-5 text-[#1a1238] sm:text-[13px]">
                      {row.label}
                    </span>
                  </div>

                  {/* VALORES DOS PLANOS */}
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
              ))}

              {/* BOTÕES FINAIS */}
              <div className={gridCols}>
                <div className="flex items-center p-3 sm:p-5">
                  <span className="text-xs leading-5 text-[#5c5478]">
                    {catalog.footer}
                  </span>
                </div>

                {catalog.plans.map((plan) => (
                  <div
                    key={`footer-${plan.name}`}
                    className={`min-w-0 border-l border-[#1a1238]/[0.08] p-3 sm:p-4 ${
                      plan.featured ? "bg-[#3b0764]/[0.07]" : ""
                    }`}
                  >
                    <a
                      href={getWhatsAppLink(plan.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex min-h-10 w-full items-center justify-center gap-1 rounded-full px-2 text-center text-xs font-medium transition-all sm:gap-2 sm:px-3 sm:text-[13px] ${
                        plan.featured
                          ? "bg-[#3b0764] text-white hover:bg-[#59168b]"
                          : "border border-[#1a1238]/15 text-[#1a1238] hover:border-[#3b0764] hover:bg-[#3b0764]/[0.06]"
                      }`}
                    >
                      Falar sobre o plano
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AVISO DO PLANO */}
        <div className="mx-auto mt-6 flex max-w-4xl items-start gap-3 rounded-xl border border-[#3b0764]/15 bg-white/70 px-5 py-4">
          <Info
            size={18}
            className="mt-0.5 shrink-0 text-[#3b0764]"
          />

          <p className="text-xs leading-6 text-[#5c5478] sm:text-sm">
            <strong className="font-medium text-[#1a1238]">
              {catalog.note.title}
            </strong>{" "}
            {catalog.note.text}
          </p>
        </div>

        {/* CHAMADA FINAL */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#5c5478]">
            Ainda tem dúvidas sobre qual plano escolher?
          </p>

          <a
            href={getWhatsAppLink("atendimento")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#3b0764] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(59,7,100,0.3)]"
          >
            Converse com a FORX
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
