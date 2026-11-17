
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import { DotButton } from "./scenes/Scenes";
import { BlockHead, twoLines } from "./scenes/blocks";
import sc from "./scenes/scenes.module.css";

function ProjectTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/[0.12] px-4 py-2 text-xs text-white/70 transition-colors duration-300 hover:border-[#c9b6ff]/60 hover:text-white">
      {children}
    </span>
  );
}

export default function Portfolio() {
  return (
    <section
      id="projetos"
      className={sc.block}
    >
      <div className="max-w-[1180px]">

        {/* CABEÇALHO */}
        <BlockHead
          label="PORTFÓLIO FORX"
          title={twoLines("Projetos que", "ganham vida.")}
          lead="Experiências digitais desenvolvidas para valorizar marcas, fortalecer sua presença online e conectar negócios aos seus clientes."
        />

        {/* PROJETOS */}
        <div className="mt-[6vh] grid items-start gap-7 lg:grid-cols-2">

          {/* =====================================
              PROJETO CLEIDE BEAUTY
          ===================================== */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            whileHover={{ y: -5 }}
            className="group min-w-0 overflow-hidden rounded-[22px] border border-white/[0.12] bg-white/[0.02] transition-colors duration-300 hover:border-[#c9b6ff]/45"
          >
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c9b6ff]">
                LANDING PAGE · SEO LOCAL
              </p>

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
                 Desenvolvimento de uma landing page estratégica para o Cleide Beauty Salão, em Guarulhos, com foco em destacar 
                 os serviços, fortalecer
                  a presença digital e facilitar o acesso de
                   potenciais clientes às informações e canais de agendamento.
              </p>

              {/* OBJETIVO */}
              <div className="mt-6 rounded-[16px] border border-white/[0.12] bg-white/[0.03] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/45">
                  OBJETIVO ESTRATÉGICO
                </p>

                <p className="mt-3 text-sm leading-7 text-white/85">
                  Fortalecer a visibilidade local do salão, ampliar suas oportunidades de ser encontrado por clientes da região e 
                  transformar o interesse pelos serviços em contatos e agendamentos pelo WhatsApp.
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
          </motion.article>

          {/* =====================================
              PROJETO LARISSA BARBOSA
          ===================================== */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="group min-w-0 overflow-hidden rounded-[22px] border border-white/[0.12] bg-white/[0.02] transition-colors duration-300 hover:border-[#c9b6ff]/45"
          >
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c9b6ff]">
                SITE PROFISSIONAL · SEO 
              </p>

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
                Projeto de presença digital para profissional da beleza,
                reunindo desenvolvimento de site institucional para
                apresentação de serviços, otimização para mecanismos de
                busca (SEO), presença estratégica no Google e ações de
                tráfego para ampliar a visibilidade da marca.
              </p>

              {/* OBJETIVO */}
              <div className="mt-6 rounded-[16px] border border-white/[0.12] bg-white/[0.03] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/45">
                  OBJETIVO ESTRATÉGICO
                </p>

                <p className="mt-3 text-sm leading-7 text-white/85">
                  Desenvolvimento de uma estrutura digital estratégica para fortalecer a 
                  presença da Larissa no mercado da beleza, ampliar sua visibilidade nas
                  buscas do Google e criar novos pontos de contato com potenciais clientes.
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
          </motion.article>
        </div>

        {/* FECHAMENTO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col justify-between gap-5 border-t border-white/[0.12] pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-lg tracking-[-0.02em] text-white">
              Seu projeto pode ser o próximo.
            </p>

            <p className="mt-1 text-sm text-white/55">
              Vamos transformar sua ideia em uma experiência digital.
            </p>
          </div>

          <DotButton href="#contato" large>
            Solicitar orçamento
          </DotButton>
        </motion.div>

      </div>
    </section>
  );
}
