"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronDown, Globe } from "lucide-react";

import { htmlLang, localeName, localizePath, locales, stripLocale } from "../i18n";
import { useLang } from "./LangProvider";

const LABEL = { pt: "Idioma", en: "Language", es: "Idioma" };

/**
 * Troca o idioma mantendo a mesma página.
 * - "dropdown": botão com globo que abre a lista (topo do site no computador);
 * - "inline": PT · EN · ES lado a lado (dentro do menu do celular).
 *
 * Usa <a> e não <Link>: cada idioma tem o próprio layout raiz (lang do <html>).
 */
export default function LanguageSwitcher({
  variant = "dropdown",
  className = "",
  onNavigate,
}: {
  variant?: "dropdown" | "inline";
  className?: string;
  onNavigate?: () => void;
}) {
  const current = useLang();
  const pathname = stripLocale(usePathname() || "/");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora ou apertar Esc.
  useEffect(() => {
    if (!open) return;
    function onPointer(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "inline") {
    return (
      <nav aria-label={LABEL[current]} className={`flex items-center gap-1 text-xs font-semibold ${className}`}>
        {locales.map((lang, index) => {
          const active = lang === current;
          return (
            <span key={lang} className="flex items-center gap-1">
              {index > 0 && <span className="text-white/25" aria-hidden="true">·</span>}
              <a
                href={localizePath(lang, pathname)}
                hrefLang={htmlLang[lang]}
                lang={htmlLang[lang]}
                aria-current={active ? "true" : undefined}
                aria-label={localeName[lang]}
                title={localeName[lang]}
                onClick={onNavigate}
                className={`rounded px-1.5 py-1 uppercase tracking-[0.08em] transition-colors ${
                  active ? "text-white" : "text-white/45 hover:text-white"
                }`}
              >
                {lang}
              </a>
            </span>
          );
        })}
      </nav>
    );
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="forx-language-menu"
        aria-label={`${LABEL[current]}: ${localeName[current]}`}
        onClick={() => setOpen((value) => !value)}
        className={`flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
          open ? "border-white/40 text-white" : "border-white/15 text-white/70 hover:border-white/35 hover:text-white"
        }`}
      >
        <Globe size={15} aria-hidden="true" />
        {current}
        <ChevronDown
          size={13}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180 text-[#B99AFF]" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="forx-language-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 top-full z-[60] mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-1.5 shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
          >
            {locales.map((lang) => {
              const active = lang === current;
              return (
                <li key={lang}>
                  <a
                    href={localizePath(lang, pathname)}
                    hrefLang={htmlLang[lang]}
                    lang={htmlLang[lang]}
                    aria-current={active ? "true" : undefined}
                    onClick={() => {
                      setOpen(false);
                      onNavigate?.();
                    }}
                    className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      active ? "bg-white/[0.07] text-white" : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="w-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/40">
                        {lang}
                      </span>
                      {localeName[lang]}
                    </span>
                    {active && <Check size={15} className="text-[#B99AFF]" aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
