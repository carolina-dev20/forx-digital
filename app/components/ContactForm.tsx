

"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Send,
} from "lucide-react";

import { whatsappUrl, type Dict } from "../i18n";
import { useT } from "./LangProvider";

type FormData = {
  nome: string;
  empresa: string;
  whatsapp: string;
  servico: string;
  mensagem: string;
};

const initialForm: FormData = {
  nome: "",
  empresa: "",
  whatsapp: "",
  servico: "",
  mensagem: "",
};



const TEXT: Dict<{
  services: string[];
  errRequired: string;
  errPhone: string;
  msg: {
    hello: string;
    request: string;
    data: string;
    name: string;
    company: string;
    noCompany: string;
    service: string;
    details: string;
    noDetails: string;
    thanks: string;
  };
  badge: string;
  title: string;
  lead: string;
  name: string;
  namePh: string;
  company: string;
  companyPh: string;
  phone: string;
  service: string;
  servicePh: string;
  details: string;
  detailsPh: string;
  submit: string;
  note: string;
}> = {
  pt: {
    services: [
      "Gestão e processos internos",
      "CRM e relacionamento com clientes",
      "Automação de processos",
      "Desenvolvimento de software / plataforma",
      "Criação de site institucional",
      "Landing page",
      "Marketing digital e tráfego pago",
      "Presença no Google / SEO",
      "Outro serviço",
    ],
    errRequired: "Preencha seu nome, WhatsApp e o serviço desejado.",
    errPhone: "Informe um número de WhatsApp válido com DDD.",
    msg: {
      hello: "Olá, FORX Digital! 👋",
      request: "Gostaria de solicitar um orçamento.",
      data: "📋 *DADOS DO PROJETO*",
      name: "Nome",
      company: "Empresa",
      noCompany: "Não informada",
      service: "Serviço",
      details: "Detalhes do projeto",
      noDetails: "Gostaria de saber mais sobre os serviços.",
      thanks: "Aguardo o contato. Obrigado!",
    },
    badge: "Vamos tirar sua ideia do papel",
    title: "Conte sobre seu projeto.",
    lead: "Preencha os dados abaixo e envie sua solicitação diretamente para nosso WhatsApp.",
    name: "Seu nome *",
    namePh: "Como podemos te chamar?",
    company: "Empresa ou marca",
    companyPh: "Nome da sua empresa",
    phone: "Seu WhatsApp *",
    service: "Qual serviço você procura? *",
    servicePh: "Selecione um serviço",
    details: "Fale um pouco sobre seu projeto",
    detailsPh: "Conte sua ideia, objetivos e o que você gostaria de desenvolver...",
    submit: "Enviar solicitação",
    note: "Você será direcionado ao WhatsApp para revisar e confirmar o envio da mensagem.",
  },
  en: {
    services: [
      "Management and internal processes",
      "CRM and customer relationships",
      "Process automation",
      "Software / platform development",
      "Business website",
      "Landing page",
      "Digital marketing and paid ads",
      "Google presence / SEO",
      "Other service",
    ],
    errRequired: "Please fill in your name, WhatsApp number and the service you need.",
    errPhone: "Please enter a valid WhatsApp number with area code.",
    msg: {
      hello: "Hi, FORX Digital! 👋",
      request: "I would like to request a quote.",
      data: "📋 *PROJECT DETAILS*",
      name: "Name",
      company: "Company",
      noCompany: "Not provided",
      service: "Service",
      details: "Project details",
      noDetails: "I would like to know more about your services.",
      thanks: "Looking forward to hearing from you. Thank you!",
    },
    badge: "Let's get your idea off the ground",
    title: "Tell us about your project.",
    lead: "Fill in the details below and send your request straight to our WhatsApp.",
    name: "Your name *",
    namePh: "What should we call you?",
    company: "Company or brand",
    companyPh: "Your company's name",
    phone: "Your WhatsApp *",
    service: "Which service are you looking for? *",
    servicePh: "Select a service",
    details: "Tell us a little about your project",
    detailsPh: "Share your idea, goals and what you would like to build...",
    submit: "Send request",
    note: "You will be taken to WhatsApp to review and confirm the message.",
  },
  es: {
    services: [
      "Gestión y procesos internos",
      "CRM y relación con clientes",
      "Automatización de procesos",
      "Desarrollo de software / plataforma",
      "Sitio web institucional",
      "Landing page",
      "Marketing digital y publicidad pagada",
      "Presencia en Google / SEO",
      "Otro servicio",
    ],
    errRequired: "Completa tu nombre, tu WhatsApp y el servicio que buscas.",
    errPhone: "Ingresa un número de WhatsApp válido con código de área.",
    msg: {
      hello: "¡Hola, FORX Digital! 👋",
      request: "Me gustaría solicitar un presupuesto.",
      data: "📋 *DATOS DEL PROYECTO*",
      name: "Nombre",
      company: "Empresa",
      noCompany: "No informada",
      service: "Servicio",
      details: "Detalles del proyecto",
      noDetails: "Me gustaría saber más sobre los servicios.",
      thanks: "Espero su contacto. ¡Gracias!",
    },
    badge: "Hagamos realidad tu idea",
    title: "Cuéntanos sobre tu proyecto.",
    lead: "Completa los datos y envía tu solicitud directamente a nuestro WhatsApp.",
    name: "Tu nombre *",
    namePh: "¿Cómo te llamamos?",
    company: "Empresa o marca",
    companyPh: "Nombre de tu empresa",
    phone: "Tu WhatsApp *",
    service: "¿Qué servicio buscas? *",
    servicePh: "Selecciona un servicio",
    details: "Cuéntanos un poco sobre tu proyecto",
    detailsPh: "Comparte tu idea, tus objetivos y lo que te gustaría desarrollar...",
    submit: "Enviar solicitud",
    note: "Serás dirigido a WhatsApp para revisar y confirmar el envío del mensaje.",
  },
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [error, setError] = useState("");
  const t = useT(TEXT);

  function updateField(
    field: keyof FormData,
    value: string
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setError("");

    const nome = form.nome.trim();
    const empresa = form.empresa.trim();
    const whatsapp = form.whatsapp.trim();
    const servico = form.servico.trim();
    const mensagem = form.mensagem.trim();

    // Validação dos campos obrigatórios
    if (!nome || !whatsapp || !servico) {
      setError(t.errRequired);
      return;
    }

    // Validação do número informado pelo cliente
    const telefoneLimpo = whatsapp.replace(/\D/g, "");

    if (
      telefoneLimpo.length < 10 ||
      telefoneLimpo.length > 13
    ) {
      setError(t.errPhone);
      return;
    }

    // Mensagem completa enviada ao WhatsApp da FORX
    const m = t.msg;
    const texto = [
      m.hello,
      "",
      m.request,
      "",
      m.data,
      "",
      `*${m.name}:* ${nome}`,
      `*${m.company}:* ${empresa || m.noCompany}`,
      `*WhatsApp:* ${whatsapp}`,
      `*${m.service}:* ${servico}`,
      "",
      `*${m.details}:*`,
      mensagem || m.noDetails,
      "",
      m.thanks,
    ].join("\n");

    const url = whatsappUrl(texto);

    // Abre o WhatsApp com os dados preenchidos
    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-[#A879F5] focus:bg-white/[0.08] focus:ring-1 focus:ring-[#A879F5]/30";

  const labelClass =
    "mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-white/55";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full space-y-6"
    >
      {/* CABEÇALHO DO FORMULÁRIO */}
      <div className="mb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#A879F5]/30 bg-[#7942E8]/10 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#A879F5]" />
          <span className="text-xs font-medium text-[#C8AAFF]">
            {t.badge}
          </span>
        </div>

        <h3 className="text-2xl font-medium tracking-[-0.04em] text-white sm:text-[28px]">
          {t.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/45">
          {t.lead}
        </p>
      </div>

      {/* NOME E EMPRESA */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="forx-nome"
            className={labelClass}
          >
            {t.name}
          </label>

          <input
            id="forx-nome"
            type="text"
            name="nome"
            autoComplete="name"
            required
            maxLength={100}
            placeholder={t.namePh}
            value={form.nome}
            onChange={(event) =>
              updateField("nome", event.target.value)
            }
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="forx-empresa"
            className={labelClass}
          >
            {t.company}
          </label>

          <input
            id="forx-empresa"
            type="text"
            name="empresa"
            maxLength={120}
            placeholder={t.companyPh}
            value={form.empresa}
            onChange={(event) =>
              updateField("empresa", event.target.value)
            }
            className={inputClass}
          />
        </div>
      </div>

      {/* WHATSAPP DO CLIENTE */}
      <div>
        <label
          htmlFor="forx-whatsapp"
          className={labelClass}
        >
          {t.phone}
        </label>

        <input
          id="forx-whatsapp"
          type="tel"
          name="whatsapp"
          autoComplete="tel"
          required
          maxLength={20}
          placeholder="(11) 99999-9999"
          value={form.whatsapp}
          onChange={(event) =>
            updateField("whatsapp", event.target.value)
          }
          className={inputClass}
        />
      </div>

      {/* SELEÇÃO DO SERVIÇO */}
      <div>
        <label
          htmlFor="forx-servico"
          className={labelClass}
        >
          {t.service}
        </label>

        <div className="relative">
          <select
            id="forx-servico"
            name="servico"
            required
            value={form.servico}
            onChange={(event) =>
              updateField("servico", event.target.value)
            }
            className={`${inputClass} cursor-pointer appearance-none pr-12`}
          >
            <option
              value=""
              disabled
              className="bg-[#17121F]"
            >
              {t.servicePh}
            </option>

            {t.services.map((service) => (
              <option
                key={service}
                value={service}
                className="bg-[#17121F] text-white"
              >
                {service}
              </option>
            ))}
          </select>

          <ArrowUpRight
            size={18}
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 rotate-45 text-[#A879F5]"
          />
        </div>
      </div>

      {/* DETALHES DO PROJETO */}
      <div>
        <label
          htmlFor="forx-mensagem"
          className={labelClass}
        >
          {t.details}
        </label>

        <textarea
          id="forx-mensagem"
          name="mensagem"
          rows={5}
          maxLength={2000}
          placeholder={t.detailsPh}
          value={form.mensagem}
          onChange={(event) =>
            updateField("mensagem", event.target.value)
          }
          className={`${inputClass} min-h-[150px] resize-y`}
        />
      </div>

      {/* MENSAGEM DE ERRO */}
      {error && (
        <motion.div
          role="alert"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 text-sm leading-6 text-red-200"
        >
          {error}
        </motion.div>
      )}

      {/* BOTÃO DE ENVIO */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.2 }}
        className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#7942E8] px-6 py-5 text-sm font-semibold text-white shadow-[0_0_0_2px_rgba(168,121,245,0.7)] outline-none ring-4 ring-transparent transition-all duration-300 hover:bg-[#8F57F5] hover:shadow-[0_0_25px_rgba(121,66,232,0.35)] focus-visible:ring-[#A879F5]/40 sm:text-base"
      >
        <span className="relative z-10">
          {t.submit}
        </span>

        <Send
          size={19}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </motion.button>

      {/* INFORMAÇÃO SOBRE O ENVIO */}
      <div className="flex items-start justify-center gap-2">
        <CheckCircle2
          size={16}
          className="mt-0.5 shrink-0 text-[#A879F5]"
        />

        <p className="max-w-md text-center text-xs leading-6 text-white/40">
          {t.note}
        </p>
      </div>
    </motion.form>
  );
}
