
"use client";

import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

import type { Segment } from "./scenes/Scenes";
import { BlockHead, d } from "./scenes/blocks";
import sc from "./scenes/scenes.module.css";

function ProjectTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/[0.12] px-4 py-2 text-xs text-white/70 transition-colors duration-300 hover:border-[#c9b6ff]/60 hover:text-white">
      {children}
    </span>
  );
}

/** Cartão do case: sobe ao entrar na tela e reage ao passar o mouse (como na página de CRM). */
const CARD =
  "group h-full min-w-0 overflow-hidden rounded-[20px] border border-[var(--panel-line)] bg-white/[0.02] transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#c9b6ff]/45 hover:bg-white/[0.04]";

export default function Portfolio({
  label,
  title,
  lead,
}: {
  label: string;
  title: Segment[];
  lead?: string;
}) {
  return (
    <section
      id="cases"
      className={sc.block}
    >
      <div className="max-w-[1180px]">

        {/* CABEÇALHO */}
        <BlockHead label={label} title={title} lead={lead} />

        {/* PROJETOS */}
        <div className="mt-[6vh] grid items-start gap-4 lg:grid-cols-2">

          {/* =====================================
              PROJETO CLEIDE BEAUTY
          ===================================== */}
          <div id="cleide-beauty-salao" className={`${sc.fade} h-full`} data-fade style={d(0)}>
          <article className={CARD}>
            {/* MOCKUP ORIGINAL */}
            <div className="relative flex aspect-[1.35] items-center justify-center overflow-hidden bg-gradient-to-br from-[#E8D9CC] to-[#BCA79A] p-5 sm:p-9">

              {/* NOTEBOOK */}
              <div className="relative z-10 w-[82%] -translate-x-[7%] transition-transform duration-700 group-hover:scale-[1.025]">
                <div className="overflow-hidden rounded-t-[14px] border-[5px] border-[#242329] bg-[#242329] shadow-2xl sm:border-[7px]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F3EBE3]">
                    <Image
                      src="/projetos/cleide-desktop.png"
                      alt="Site Cleide Beauty Salão na versão computador"
                      fill
                      sizes="(min-width: 1024px) 480px, 80vw"
                      className="object-contain object-top"
                    />
                  </div>
                </div>

                <div className="relative -mx-[4%] h-3 rounded-b-[50%] bg-gradient-to-b from-[#CAC9CC] to-[#737379] shadow-xl sm:h-4">
                  <div className="mx-auto h-1 w-1/5 rounded-b-md bg-[#8D8C92]" />
                </div>
              </div>

              {/* CELULAR */}
              <div className="absolute bottom-[10%] right-[7%] z-20 w-[23%] rotate-[2deg] transition-transform duration-700 group-hover:-translate-y-2">
                <div className="relative aspect-[9/19] overflow-hidden rounded-[17px] border-[5px] border-[#242329] bg-[#F3EBE3] shadow-[0_20px_40px_rgba(0,0,0,0.3)] sm:rounded-[25px] sm:border-[7px]">
                  <Image
                    src="/projetos/cleide-mobile.png"
                    alt="Site Cleide Beauty Salão na versão celular"
                    fill
                    sizes="(min-width: 1024px) 140px, 25vw"
                    className="object-contain object-top"
                  />
                  <div className="absolute left-1/2 top-1 h-[5px] w-[32%] -translate-x-1/2 rounded-full bg-[#242329]" />
                </div>
              </div>
            </div>

            {/* INFORMAÇÕES */}
            <div className="p-6 sm:p-8">
              <div className={sc.cellTop}>
                <span>01</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c9b6ff]">
                  LANDING PAGE · SEO LOCAL
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <h3 className="text-[23px] font-normal tracking-[-0.03em] text-white sm:text-[26px]">
                  Cleide Beauty Salão
                </h3>

                <a
                  href="https://cleidebeautysalao.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar o site Cleide Beauty Salão"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#b994ff] text-[#1a1238] transition-all duration-300 hover:rotate-45 hover:bg-white"
                >
                  <ArrowUpRight size={21} />
                </a>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/55">
                A landing page passou a reunir os serviços e informações do Cleide Beauty Salão em um só lugar, com acesso direto ao agendamento. A estrutura também prepara o negócio para ser encontrado por quem busca serviços de beleza em Guarulhos.
              </p>

              {/* OBJETIVO */}
              <div className="mt-6 rounded-[16px] border border-[var(--panel-line)] bg-white/[0.03] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/45">
                  RESULTADOS PARA O NEGÓCIO
                </p>

                <p className="mt-3 text-sm leading-7 text-white/85">
                  Mais clareza para apresentar os serviços, presença digital própria para apoiar a descoberta local no Google e um caminho simples entre conhecer o salão e entrar em contato pelo WhatsApp.
                </p>
              </div>

              {/* O QUE FOI DESENVOLVIDO */}
              <div className="mt-7">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/45">
                  O QUE FOI DESENVOLVIDO
                </p>

                <div className="flex flex-wrap gap-2">
                  <ProjectTag>Landing Page</ProjectTag>
                  <ProjectTag>SEO local</ProjectTag>
                  <ProjectTag>Agendamento</ProjectTag>
                  <ProjectTag>Google</ProjectTag>
                </div>
              </div>

              {/* LINK */}
              <a
                href="https://cleidebeautysalao.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#c9b6ff] transition-colors hover:text-white"
              >
                Conhecer projeto
                <ArrowUpRight size={19} />
              </a>
            </div>
          </article>
          </div>

          {/* =====================================
              PROJETO LARISSA BARBOSA
          ===================================== */}
          <div id="larissa-barbosa" className={`${sc.fade} h-full`} data-fade style={d(0.08)}>
          <article className={CARD}>
            {/* CAPA DO PROJETO */}
            <div className="relative flex aspect-[1.35] items-center justify-center overflow-hidden bg-gradient-to-br from-[#171313] via-[#332522] to-[#A78980] p-8 text-center text-white">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/15 transition-transform duration-700 group-hover:scale-125" />

              <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />

              <div className="relative z-10 flex flex-col items-center gap-5 transition-transform duration-700 group-hover:scale-105">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                    FORX DIGITAL
                  </p>

                  <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Larissa Barbosa  
                  </p>
                </div>
              </div>
            </div>

            {/* INFORMAÇÕES */}
            <div className="p-6 sm:p-8">
              <div className={sc.cellTop}>
                <span>02</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c9b6ff]">
                  SITE PROFISSIONAL · SEO
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <h3 className="text-[23px] font-normal tracking-[-0.03em] text-white sm:text-[26px]">
                  Larissa Barbosa 
                </h3>

                <a
                  href="https://www.makeuplalab.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar o site Larissa Barbosa Maquiadora"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#b994ff] text-[#1a1238] transition-all duration-300 hover:rotate-45 hover:bg-white"
                >
                  <ArrowUpRight size={21} />
                </a>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/55">
                O site e o trabalho de SEO organizaram a presença digital da Larissa: os serviços ganharam uma vitrine profissional, enquanto a otimização para buscas e o Perfil da Empresa no Google criaram mais caminhos para potenciais clientes encontrarem a maquiadora e iniciarem uma conversa.
              </p>

              {/* OBJETIVO */}
              <div className="mt-6 rounded-[16px] border border-[var(--panel-line)] bg-white/[0.03] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/45">
                  RESULTADOS PARA O NEGÓCIO
                </p>

                <p className="mt-3 text-sm leading-7 text-white/85">
                  Uma apresentação mais profissional dos serviços, maior presença nas buscas relacionadas à beleza e um percurso mais direto da pesquisa no Google até o contato pelo site ou WhatsApp. O tráfego pago complementou a estratégia com novas oportunidades de alcançar o público.
                </p>
              </div>

              {/* ESCOPO DO PROJETO */}
              <div className="mt-7">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/45">
                  O QUE FOI DESENVOLVIDO
                </p>

                <div className="flex flex-wrap gap-2">
                  <ProjectTag>Site institucional</ProjectTag>
                  <ProjectTag>SEO técnico</ProjectTag>
                  <ProjectTag>SEO local</ProjectTag>
                  <ProjectTag>Perfil da Empresa no Google</ProjectTag>
                  <ProjectTag>Tráfego pago</ProjectTag>
                  <ProjectTag>WhatsApp</ProjectTag>
                </div>
              </div>

              {/* STATUS */}
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-4 py-2 text-xs text-white/70">
                <Check size={14} className="text-[#c9b6ff]" />
                Projeto concluído
              </div>

              {/* LINK */}
              <a
                href="https://www.makeuplalab.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-[#c9b6ff] transition-colors hover:text-white"
              >
                Conhecer projeto
                <ArrowUpRight size={19} />
              </a>
            </div>
          </article>
          </div>
        </div>

      </div>
    </section>
  );
}
