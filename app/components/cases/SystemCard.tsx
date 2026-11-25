"use client";

import Image from "next/image";
import { BellRing, CalendarCheck, CalendarPlus } from "lucide-react";

import { DotButton } from "../scenes/Scenes";
import { BlockLabel, CARD, ImagePlaceholder, whatsappLink } from "./CaseCard";
import { useT } from "../LangProvider";
import type { Dict } from "../../i18n";

const STEP_ICONS = [CalendarPlus, CalendarCheck, BellRing];

const TEXT: Dict<{
  label: string;
  title: string;
  lead: string;
  how: string;
  soon: string;
  shots: [string, string];
  steps: { title: string; text: string }[];
  cta: string;
  ctaMsg: string;
}> = {
  pt: {
    label: "Produto FORX",
    title: "Sistema FORX: agenda e lembretes automáticos",
    lead: "Sistema próprio da FORX para negócios que trabalham com horário marcado.",
    how: "Como funciona",
    soon: "imagem em breve",
    shots: ["Tela de agendamento do sistema FORX", "Lembrete automático enviado pelo WhatsApp"],
    steps: [
      { title: "Cliente agenda pelo link", text: "O pedido de horário é feito por um link do seu negócio." },
      { title: "Negócio aprova", text: "Você confirma o horário antes de ele entrar na agenda." },
      { title: "Lembrete no WhatsApp", text: "O cliente recebe um lembrete automático do horário." },
    ],
    cta: "Quero ver uma demonstração",
    ctaMsg: "Olá! Quero ver uma demonstração do sistema de agendamento da FORX.",
  },
  en: {
    label: "FORX product",
    title: "FORX System: automatic booking and reminders",
    lead: "FORX's own system for appointment-based businesses.",
    how: "How it works",
    soon: "image coming soon",
    shots: ["FORX System booking screen", "Automatic reminder sent via WhatsApp"],
    steps: [
      { title: "Customer books through the link", text: "The appointment request is made through your business's link." },
      { title: "Business approves", text: "You confirm the time before it goes into the schedule." },
      { title: "WhatsApp reminder", text: "The customer receives an automatic reminder of the appointment." },
    ],
    cta: "I want to see a demo",
    ctaMsg: "Hi! I would like to see a demo of the FORX booking system.",
  },
  es: {
    label: "Producto FORX",
    title: "Sistema FORX: agenda y recordatorios automáticos",
    lead: "Sistema propio de FORX para negocios que trabajan con cita previa.",
    how: "Cómo funciona",
    soon: "imagen próximamente",
    shots: ["Pantalla de agenda del sistema FORX", "Recordatorio automático enviado por WhatsApp"],
    steps: [
      { title: "El cliente agenda por el enlace", text: "La solicitud de cita se hace por un enlace de tu negocio." },
      { title: "El negocio aprueba", text: "Confirmas el horario antes de que entre en la agenda." },
      { title: "Recordatorio por WhatsApp", text: "El cliente recibe un recordatorio automático de la cita." },
    ],
    cta: "Quiero ver una demostración",
    ctaMsg: "¡Hola! Quiero ver una demostración del sistema de agenda de FORX.",
  },
};

/**
 * Prints/GIF do sistema. Sem src, aparece um placeholder.
 * TODO: adicionar prints ou GIF do sistema em /public/projetos/ (ex.: sistema-agenda.png, sistema-lembrete.png)
 */
const SHOT_SRC: (string | undefined)[] = [undefined, undefined];

/** Card do Sistema FORX. index: posição numa lista (mostra "03 ·"); sem index, só o rótulo. */
export default function SystemCard({ index }: { index?: number }) {
  const t = useT(TEXT);
  const shots = t.shots.map((alt, i) => ({ alt, src: SHOT_SRC[i] }));
  const steps = t.steps.map((step, i) => ({ ...step, icon: STEP_ICONS[i] }));
  return (
    <article id="como-funciona" aria-labelledby="sistema-forx-title" className={`${CARD} scroll-mt-24`}>
      <header>
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--hl)]">
          {index !== undefined && `${String(index + 1).padStart(2, "0")} · `}{t.label}
        </span>
        <h3
          id="sistema-forx-title"
          className="mt-4 text-[24px] font-normal tracking-[-0.03em] text-[var(--fg)] sm:text-[30px]"
        >
          {t.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--fg-2)]">{t.lead}</p>
      </header>

      <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10">
        <div className="grid gap-4 rounded-[16px] bg-gradient-to-br from-[#f4effe] to-[#e4d9ff] p-4 sm:grid-cols-2 sm:p-6">
          {shots.map((shot) => (
            <div
              key={shot.alt}
              className="relative aspect-[9/16] overflow-hidden rounded-[14px] border-[5px] border-[#242329] bg-[#16131f] sm:aspect-[3/4]"
            >
              {shot.src ? (
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 1024px) 220px, 45vw"
                  className="object-cover object-top"
                  unoptimized={shot.src.endsWith(".gif")}
                />
              ) : (
                <ImagePlaceholder label={`${shot.alt} (${t.soon})`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid content-start gap-7">
          <div>
            <BlockLabel>{t.how}</BlockLabel>
            <ol className="mt-4 grid gap-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--panel-line)] text-[var(--hl)]">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[15px] text-[var(--fg)]">
                        <span className="text-[var(--fg-3)]">{i + 1}. </span>
                        {step.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-[var(--fg-2)]">{step.text}</span>
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="border-t border-[var(--panel-line)] pt-6">
            <DotButton
              external
              href={whatsappLink(t.ctaMsg)}
            >
              {t.cta}
            </DotButton>
          </div>
        </div>
      </div>
    </article>
  );
}
