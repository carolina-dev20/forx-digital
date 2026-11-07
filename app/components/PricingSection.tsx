
"use client";

import dynamic from "next/dynamic";
import {
  Check,
  X,
  ArrowUpRight,
  Info,
  Sparkles,
} from "lucide-react";

const Waves3D = dynamic(() => import("./Waves3d"), {
  ssr: false,
});

const WHATSAPP_NUMBER = "5511994880312";

function getWhatsAppLink(plan: string) {
  const message = encodeURIComponent(
    `Olá! Tenho interesse no plano ${plan} da FORX Digital. Gostaria de receber mais informações.`
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

type Plan = {
  name: string;
  price: string;
  description: string;
  featured?: boolean;
};

const plans: Plan[] = [
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
];

type ComparisonRow = {
  label: string;
  values: [string, string, string];
};

const comparisonRows: ComparisonRow[] = [
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
    values: [
      "Durante o plano",
      "Durante o plano",
      "Durante o plano",
    ],
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
];

function ComparisonCell({ value }: { value: string }) {
  const included = value === "Incluído";
  const excluded = value === "Não incluído";

  return (
    <div className="flex min-h-[64px] w-full items-center justify-center gap-2 px-2 py-3 text-center sm:px-3">
      {included && (
        <Check
          size={16}
          className="shrink-0 text-[#B77AFF]"
        />
      )}

      {excluded && (
        <X
          size={15}
          className="shrink-0 text-white/30"
        />
      )}

      <span
        className={`break-words text-xs leading-5 sm:text-sm ${
          included
            ? "text-white/90"
            : excluded
              ? "text-white/35"
              : "text-white/65"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative isolate min-h-screen w-full overflow-hidden bg-[#08070D] text-white"
    >
      {/* FUNDO ANIMADO ORIGINAL DA FORX */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Waves3D />
      </div>

      {/* CAMADA DE CONTRASTE */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-black/10 to-black/70" />

      {/* CONTEÚDO */}
<div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 pb-20 pt-24 sm:px-8 sm:pt-12 lg:px-14 lg:pt-16">
        {/* INTRODUÇÃO */}
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[#C49AFF] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B77AFF]" />
            PLANOS FORX DIGITAL
          </span>

          <h1 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Escolha o plano ideal
            <span className="block bg-gradient-to-r from-white via-[#D7C0FF] to-[#A66BFF] bg-clip-text text-transparent">
              para o seu negócio.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Compare os planos e descubra quais soluções digitais
            fazem sentido para o momento da sua empresa.
          </p>
        </header>

        {/* TABELA COMPARATIVA */}
        <div className="w-full rounded-2xl border border-white/10 bg-[#100D18]/85 shadow-[0_25px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">

          {/* ROLAGEM SOMENTE QUANDO NECESSÁRIA */}
          <div className="w-full overflow-x-auto">
            <div className="w-full min-w-[760px] lg:min-w-0">

              {/* CABEÇALHO DOS PLANOS */}
              <div className="grid grid-cols-[160px_repeat(3,minmax(0,1fr))] lg:grid-cols-[220px_repeat(3,minmax(0,1fr))]">

                {/* COLUNA DE SERVIÇOS */}
                <div className="flex flex-col justify-end border-b border-white/10 p-4 sm:p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    FORX DIGITAL
                  </span>

                  <h2 className="mt-2 text-base font-medium text-white sm:text-lg">
                    O que está incluso
                  </h2>
                </div>

                {/* CARDS DOS PLANOS */}
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`flex min-w-0 flex-col border-b border-l border-white/10 p-4 sm:p-6 ${
                      plan.featured
                        ? "bg-[#7942E8]/15"
                        : "bg-white/[0.015]"
                    }`}
                  >
                    {/* SELO SEM CORTE */}
                   <div className="mb-4 flex min-h-7 items-center justify-center">
  {plan.featured && (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B77AFF]/50 bg-[#7942E8] px-4 py-1.5 text-[10px] font-semibold tracking-wide text-white shadow-[0_0_20px_rgba(121,66,232,0.3)]">
      <Sparkles size={12} />
      MAIS ESCOLHIDO
    </span>
  )}
</div>

                    <h3 className="break-words text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {plan.name}
                    </h3>

                    <p className="mt-2 min-h-10 break-words text-xs leading-5 text-white/50">
                      {plan.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-baseline gap-1.5">
                      <span className="text-sm text-white/65">
                        R$
                      </span>

                      <span className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                        {plan.price}
                      </span>

                      <span className="text-xs text-white/50">
                        /mês
                      </span>
                    </div>

                    <a
                      href={getWhatsAppLink(plan.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 flex min-h-11 w-full items-center justify-center gap-1.5 rounded-full px-2 text-xs font-medium transition-all duration-300 sm:gap-2 sm:px-4 sm:text-sm ${
                        plan.featured
                          ? "bg-[#7942E8] text-white hover:bg-[#9257F2] hover:shadow-[0_0_25px_rgba(121,66,232,0.3)]"
                          : "border border-white/25 bg-white/[0.04] text-white hover:border-[#B77AFF] hover:bg-[#7942E8]/15"
                      }`}
                    >
                      Começar agora
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                ))}
              </div>

              {/* LINHAS COMPARATIVAS */}
              {comparisonRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[160px_repeat(3,minmax(0,1fr))] lg:grid-cols-[220px_repeat(3,minmax(0,1fr))] ${
                    index % 2 === 0
                      ? "bg-white/[0.025]"
                      : "bg-transparent"
                  }`}
                >
                  {/* NOME DO SERVIÇO */}
                  <div className="flex min-h-[64px] min-w-0 items-center border-b border-white/[0.07] px-3 py-3 sm:px-6">
                    <span className="break-words text-xs font-medium leading-5 text-white/80 sm:text-sm">
                      {row.label}
                    </span>
                  </div>

                  {/* VALORES DOS PLANOS */}
                  {row.values.map((value, i) => (
                    <div
                      key={`${row.label}-${i}`}
                      className={`min-w-0 border-b border-l border-white/[0.07] ${
                        i === 1 ? "bg-[#7942E8]/[0.08]" : ""
                      }`}
                    >
                      <ComparisonCell value={value} />
                    </div>
                  ))}
                </div>
              ))}

              {/* BOTÕES FINAIS */}
              <div className="grid grid-cols-[160px_repeat(3,minmax(0,1fr))] lg:grid-cols-[220px_repeat(3,minmax(0,1fr))]">
                <div className="flex items-center p-3 sm:p-6">
                  <span className="text-xs leading-5 text-white/40">
                    Vamos construir sua presença digital?
                  </span>
                </div>

                {plans.map((plan) => (
                  <div
                    key={`footer-${plan.name}`}
                    className={`min-w-0 border-l border-white/10 p-3 sm:p-5 ${
                      plan.featured ? "bg-[#7942E8]/10" : ""
                    }`}
                  >
                    <a
                      href={getWhatsAppLink(plan.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex min-h-11 w-full items-center justify-center gap-1 rounded-full px-2 text-center text-xs font-medium transition-all sm:gap-2 sm:px-3 sm:text-sm ${
                        plan.featured
                          ? "bg-[#7942E8] text-white hover:bg-[#9257F2]"
                          : "border border-white/25 text-white hover:border-[#B77AFF] hover:bg-[#7942E8]/15"
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

        {/* AVISO SOBRE TRÁFEGO PAGO */}
        <div className="mx-auto mt-6 flex max-w-4xl items-start gap-3 rounded-xl border border-white/[0.08] bg-black/30 px-5 py-4 backdrop-blur-sm">
          <Info
            size={18}
            className="mt-0.5 shrink-0 text-[#B77AFF]"
          />

          <p className="text-xs leading-6 text-white/55 sm:text-sm">
            <strong className="font-medium text-white/80">
              Importante sobre o tráfego pago:
            </strong>{" "}
            a verba destinada aos anúncios não está incluída na
            mensalidade do plano. O investimento é pago separadamente,
            diretamente à plataforma de anúncios, como o Google Ads,
            conforme o orçamento definido para as campanhas.
          </p>
        </div>

        {/* CHAMADA FINAL */}
       <div className="mt-8 text-center">
          <p className="text-sm text-white/55">
            Ainda tem dúvidas sobre qual plano escolher?
          </p>

          <a
            href={getWhatsAppLink("atendimento")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7942E8] to-[#963FF0] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(121,66,232,0.3)]"
          >
            Converse com a FORX
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}
