import Image from "next/image";
import { BellRing, CalendarCheck, CalendarPlus } from "lucide-react";

import { DotButton } from "../scenes/Scenes";
import { BlockLabel, CARD, ImagePlaceholder, whatsappLink } from "./CaseCard";

const STEPS = [
  { icon: CalendarPlus, title: "Cliente agenda pelo link", text: "O pedido de horário é feito por um link do seu negócio." },
  { icon: CalendarCheck, title: "Negócio aprova", text: "Você confirma o horário antes de ele entrar na agenda." },
  { icon: BellRing, title: "Lembrete no WhatsApp", text: "O cliente recebe um lembrete automático do horário." },
];

/**
 * Prints/GIF do sistema. Sem src, aparece um placeholder.
 * TODO: adicionar prints ou GIF do sistema em /public/projetos/ (ex.: sistema-agenda.png, sistema-lembrete.png)
 */
const SHOTS: { src?: string; alt: string }[] = [
  { alt: "Tela de agendamento do sistema FORX" },
  { alt: "Lembrete automático enviado pelo WhatsApp" },
];

export default function SystemCard({ index }: { index: number }) {
  return (
    <article id="sistema-forx" aria-labelledby="sistema-forx-title" className={`${CARD} scroll-mt-24`}>
      <header>
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--hl)]">
          {String(index + 1).padStart(2, "0")} · Produto FORX
        </span>
        <h3
          id="sistema-forx-title"
          className="mt-4 text-[24px] font-normal tracking-[-0.03em] text-[var(--fg)] sm:text-[30px]"
        >
          Sistema FORX: agenda e lembretes automáticos
        </h3>
        <p className="mt-1 text-sm text-[var(--fg-2)]">
          Sistema próprio da FORX para negócios que trabalham com horário marcado.
        </p>
      </header>

      <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10">
        <div className="grid gap-4 rounded-[16px] bg-gradient-to-br from-[#f4effe] to-[#e4d9ff] p-4 sm:grid-cols-2 sm:p-6">
          {SHOTS.map((shot) => (
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
                <ImagePlaceholder label={`${shot.alt} (imagem em breve)`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid content-start gap-7">
          <div>
            <BlockLabel>Como funciona</BlockLabel>
            <ol className="mt-4 grid gap-4">
              {STEPS.map((step, i) => {
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
              href={whatsappLink(
                "Olá! Quero ver uma demonstração do sistema de agendamento da FORX."
              )}
            >
              Quero ver uma demonstração
            </DotButton>
          </div>
        </div>
      </div>
    </article>
  );
}
