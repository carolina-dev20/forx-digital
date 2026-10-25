
"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";

type FormData = {
  name: string;
  company: string;
  email: string;
  service: string;
  description: string;
};

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  service: "",
  description: "",
};

// Substitua pelo WhatsApp comercial da FORX.
// Exemplo: "5511999999999"
const WHATSAPP_NUMBER = "";

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#B994FF] focus:ring-1 focus:ring-[#B994FF]/40";

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

    if (error) setError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!WHATSAPP_NUMBER) {
      setError(
        "Configure o número comercial da FORX para ativar o envio."
      );
      return;
    }

    if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
      setError(
        "O número de WhatsApp deve conter apenas dígitos, com código do país e DDD."
      );
      return;
    }

    const message = [
      "*NOVA SOLICITAÇÃO — FORX DIGITAL*",
      "",
      `*Nome:* ${form.name.trim()}`,
      `*Empresa:* ${form.company.trim() || "Não informada"}`,
      `*E-mail:* ${form.email.trim()}`,
      `*Serviço:* ${form.service}`,
      "",
      "*Descrição do projeto:*",
      form.description.trim(),
      "",
      "Gostaria de conversar sobre um orçamento.",
    ].join("\n");

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    // Abre o WhatsApp. O cliente confirma o envio lá.
    window.location.href = url;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[30px] border border-white/10 bg-[#171220] p-6 shadow-2xl md:p-10"
    >
      <div className="mb-9">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B994FF]">
          Inicie seu projeto
        </p>

        <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
          Conte sua ideia para nós.
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/50">
          Preencha os campos e envie sua solicitação
          diretamente pelo WhatsApp.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-xs font-medium text-white/75"
          >
            Nome completo *
          </label>

          <input
            id="contact-name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            value={form.name}
            onChange={(event) =>
              updateField("name", event.target.value)
            }
            placeholder="Seu nome"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-company"
            className="mb-2 block text-xs font-medium text-white/75"
          >
            Empresa
          </label>

          <input
            id="contact-company"
            type="text"
            maxLength={120}
            autoComplete="organization"
            value={form.company}
            onChange={(event) =>
              updateField("company", event.target.value)
            }
            placeholder="Nome da empresa"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-xs font-medium text-white/75"
          >
            E-mail *
          </label>

          <input
            id="contact-email"
            type="email"
            required
            maxLength={150}
            autoComplete="email"
            value={form.email}
            onChange={(event) =>
              updateField("email", event.target.value)
            }
            placeholder="seuemail@empresa.com"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-service"
            className="mb-2 block text-xs font-medium text-white/75"
          >
            Serviço desejado *
          </label>

          <select
            id="contact-service"
            required
            value={form.service}
            onChange={(event) =>
              updateField("service", event.target.value)
            }
            className={`${inputClass} [&>option]:bg-[#171220]`}
          >
            <option value="" disabled>
              Selecione um serviço
            </option>
            <option value="Site institucional">
              Site institucional
            </option>
            <option value="Landing page">
              Landing page
            </option>
            <option value="SEO local">
              SEO local
            </option>
            <option value="Presença no Google">
              Presença no Google
            </option>
            <option value="Outro projeto">
              Outro projeto
            </option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-description"
            className="mb-2 block text-xs font-medium text-white/75"
          >
            Conte sobre seu projeto *
          </label>

          <textarea
            id="contact-description"
            required
            rows={5}
            minLength={10}
            maxLength={2000}
            value={form.description}
            onChange={(event) =>
              updateField("description", event.target.value)
            }
            placeholder="Conte sobre sua empresa, o que você precisa e quais são seus objetivos..."
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      {error && (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-200"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#7942E8] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#9562F5]"
      >
        Enviar solicitação
        <Send size={17} />
      </button>

      <p className="mt-5 text-center text-xs leading-6 text-white/40">
        Você será direcionado ao WhatsApp para
        revisar e confirmar o envio da mensagem.
      </p>

      <div className="mt-7 flex justify-center">
        <a
          href="#servicos"
          className="inline-flex items-center gap-2 text-xs text-white/50 transition hover:text-[#B994FF]"
        >
          Conhecer nossos serviços
          <ArrowUpRight size={14} />
        </a>
      </div>
    </form>
  );
}
