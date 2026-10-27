

"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Send,
} from "lucide-react";

// WhatsApp comercial FORX Digital
const WHATSAPP_NUMBER = "5511994880312";

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

const services = [
  "Criação de site institucional",
  "Landing page",
  "Presença no Google / SEO",
  "Identidade digital",
  "Solução personalizada",
  "Outro serviço",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [error, setError] = useState("");

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
      setError(
        "Preencha seu nome, WhatsApp e o serviço desejado."
      );
      return;
    }

    // Validação do número informado pelo cliente
    const telefoneLimpo = whatsapp.replace(/\D/g, "");

    if (
      telefoneLimpo.length < 10 ||
      telefoneLimpo.length > 13
    ) {
      setError(
        "Informe um número de WhatsApp válido com DDD."
      );
      return;
    }

    // Mensagem completa enviada ao WhatsApp da FORX
    const texto = [
      "Olá, FORX Digital! 👋",
      "",
      "Gostaria de solicitar um orçamento.",
      "",
      "📋 *DADOS DO PROJETO*",
      "",
      `*Nome:* ${nome}`,
      `*Empresa:* ${empresa || "Não informada"}`,
      `*WhatsApp:* ${whatsapp}`,
      `*Serviço:* ${servico}`,
      "",
      "*Detalhes do projeto:*",
      mensagem ||
        "Gostaria de saber mais sobre os serviços.",
      "",
      "Aguardo o contato. Obrigado!",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      texto
    )}`;

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
            Vamos tirar sua ideia do papel
          </span>
        </div>

        <h3 className="text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
          Conte sobre seu projeto.
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/45">
          Preencha os dados abaixo e envie sua solicitação
          diretamente para nosso WhatsApp.
        </p>
      </div>

      {/* NOME E EMPRESA */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="forx-nome"
            className={labelClass}
          >
            Seu nome *
          </label>

          <input
            id="forx-nome"
            type="text"
            name="nome"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Como podemos te chamar?"
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
            Empresa ou marca
          </label>

          <input
            id="forx-empresa"
            type="text"
            name="empresa"
            maxLength={120}
            placeholder="Nome da sua empresa"
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
          Seu WhatsApp *
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
          Qual serviço você procura? *
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
              Selecione um serviço
            </option>

            {services.map((service) => (
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
          Fale um pouco sobre seu projeto
        </label>

        <textarea
          id="forx-mensagem"
          name="mensagem"
          rows={5}
          maxLength={2000}
          placeholder="Conte sua ideia, objetivos e o que você gostaria de desenvolver..."
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
          Enviar solicitação
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
          Você será direcionado ao WhatsApp para revisar
          e confirmar o envio da mensagem.
        </p>
      </div>
    </motion.form>
  );
}
