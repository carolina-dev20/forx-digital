"use client";

import Link from "next/link";

import { useHref, useT } from "../LangProvider";
import s from "./scenes.module.css";

const TEXT = {
  pt: { tagline: "© 2026 FORX Digital — Tecnologia, gestão e crescimento.", privacy: "Política de Privacidade" },
  en: { tagline: "© 2026 FORX Digital — Technology, management and growth.", privacy: "Privacy Policy" },
  es: { tagline: "© 2026 FORX Digital — Tecnología, gestión y crecimiento.", privacy: "Política de Privacidad" },
};

/** Rodapé curto das páginas internas. */
export default function SmallFooter() {
  const t = useT(TEXT);
  const href = useHref();

  return (
    <footer className={`${s.scenes} ${s.foot}`}>
      <Link href={href("/")}>FORX Digital.</Link>
      <span className={s.footLinks}>
        <span>{t.tagline}</span>
        <Link href={href("/privacidade")}>{t.privacy}</Link>
      </span>
    </footer>
  );
}
