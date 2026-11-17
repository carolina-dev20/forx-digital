"use client";

import { useRef } from "react";
import Link from "next/link";

import MegaMenu from "../components/MegaMenu";
import Portfolio from "../components/Portfolio";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Scenes from "../components/scenes/Scenes";
import { useSceneEffects } from "../components/scenes/blocks";
import s from "../components/scenes/scenes.module.css";

const WHATSAPP_URL =
  "https://wa.me/5511994880312?text=" +
  encodeURIComponent(
    "Olá! Conheci os cases da FORX Digital pelo site e gostaria de solicitar um orçamento."
  );

export default function CasesContent() {
  const rootRef = useRef<HTMLDivElement>(null);
  useSceneEffects(rootRef);

  return (
    <main className={s.main}>
      <MegaMenu />

      {/* TOPO: branco com brilho roxo e título revelado */}
      <Scenes
        compact
        eyebrow="CASES FORX"
        heroTitle={[
          { text: "Projetos que" },
          { br: true },
          { text: "ganham vida.", hl: true },
        ]}
        description="Experiências digitais desenvolvidas para valorizar marcas, fortalecer sua presença online e conectar negócios aos seus clientes."
      />

      {/* CASES NO PAINEL ROXO-ESCURO */}
      <div ref={rootRef}>
        <div className={`${s.scenes} ${s.rest}`}>
          <Portfolio showHeader={false} ctaHref={WHATSAPP_URL} ctaExternal />
        </div>

        <footer className={`${s.scenes} ${s.foot}`}>
          <Link href="/">FORX Digital.</Link>
          <span className={s.footLinks}>
            <span>© 2026 FORX Digital — Tecnologia, gestão e crescimento.</span>
            <Link href="/privacidade">Política de Privacidade</Link>
          </span>
        </footer>
      </div>

      <WhatsAppFloat />
    </main>
  );
}
