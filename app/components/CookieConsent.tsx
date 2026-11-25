"use client";

import { useState, useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

import { useHref, useT } from "./LangProvider";

const TEXT = {
  pt: {
    region: "Preferências de cookies",
    title: "Sua privacidade importa.",
    body: "Utilizamos cookies necessários para o funcionamento do site e, com sua permissão, cookies de análise para entender como você navega e melhorar nossos serviços.",
    policy: "Política de Privacidade",
    hide: "Ocultar preferências",
    customize: "Personalizar cookies",
    acceptAll: "Aceitar todos",
    reject: "Recusar opcionais",
    choose: "Escolha quais cookies opcionais você permite.",
    necessary: "Cookies necessários",
    necessaryText: "Essenciais para o funcionamento do site.",
    always: "Sempre ativos",
    analytics: "Cookies de análise",
    save: "Salvar preferências",
  },
  en: {
    region: "Cookie preferences",
    title: "Your privacy matters.",
    body: "We use cookies that are necessary for the website to work and, with your permission, analytics cookies to understand how you browse and improve our services.",
    policy: "Privacy Policy",
    hide: "Hide preferences",
    customize: "Customize cookies",
    acceptAll: "Accept all",
    reject: "Reject optional",
    choose: "Choose which optional cookies you allow.",
    necessary: "Necessary cookies",
    necessaryText: "Essential for the website to work.",
    always: "Always on",
    analytics: "Analytics cookies",
    save: "Save preferences",
  },
  es: {
    region: "Preferencias de cookies",
    title: "Tu privacidad importa.",
    body: "Utilizamos cookies necesarias para el funcionamiento del sitio y, con tu permiso, cookies de análisis para entender cómo navegas y mejorar nuestros servicios.",
    policy: "Política de Privacidad",
    hide: "Ocultar preferencias",
    customize: "Personalizar cookies",
    acceptAll: "Aceptar todas",
    reject: "Rechazar opcionales",
    choose: "Elige qué cookies opcionales permites.",
    necessary: "Cookies necesarias",
    necessaryText: "Esenciales para el funcionamiento del sitio.",
    always: "Siempre activas",
    analytics: "Cookies de análisis",
    save: "Guardar preferencias",
  },
};

type ConsentChoice = "accepted" | "rejected" | null;

const CONSENT_KEY = "forx-cookie-consent";

// A escolha fica no navegador (localStorage); estes ouvintes avisam o componente quando ela muda.
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * Apaga a escolha de cookies e os cookies do Google Analytics, e recarrega a página
 * para o aviso aparecer de novo (usado em "Gerenciar cookies" na Política de Privacidade).
 */
export function resetCookieConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    // Armazenamento bloqueado: não há escolha salva para apagar.
  }

  const host = window.location.hostname.replace(/^www\./, "");
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (name.startsWith("_ga")) {
      for (const domain of ["", `; domain=.${host}`, `; domain=${window.location.hostname}`]) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
      }
    }
  }

  // Recarrega para descarregar o Google Analytics, se estava ativo.
  window.location.reload();
}

function readConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY) ?? "";
  } catch {
    return "";
  }
}

export default function CookieConsent() {
  // No servidor ainda não há escolha conhecida (null): nada é exibido até o navegador carregar.
  const saved = useSyncExternalStore(subscribe, readConsent, () => null);
  const [showPreferences, setShowPreferences] = useState(false);
  const t = useT(TEXT);
  const href = useHref();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  // Escolha feita nesta visita (vale mesmo se o armazenamento estiver bloqueado).
  const [sessionChoice, setSessionChoice] = useState<ConsentChoice>(null);

  function saveConsent(choice: "accepted" | "rejected") {
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // Navegação privada ou armazenamento bloqueado: a escolha vale só para esta visita.
    }
    setSessionChoice(choice);
    setAnalyticsEnabled(choice === "accepted");
    setShowPreferences(false);
    listeners.forEach((notify) => notify());
  }

  if (saved === null) return null;

  const consent: ConsentChoice =
    saved === "accepted" || saved === "rejected" ? saved : sessionChoice;

  return (
    <>
      {consent === "accepted" && (
        <GoogleAnalytics gaId="G-VZ6MLMPLTZ" />
      )}

      {consent === null && (
        <section
          aria-label={t.region}
          aria-describedby="cookie-description"
          className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-3xl rounded-2xl border border-white/15 bg-[#111111] p-5 text-white shadow-2xl sm:bottom-6 sm:p-6"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-lg font-semibold tracking-tight">
                {t.title}
              </p>

              <p
                id="cookie-description"
                className="text-sm leading-6 text-white/70"
              >
                {t.body}{" "}
                <a
                  href={href("/privacidade")}
                  className="text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
                >
                  {t.policy}
                </a>
                .
              </p>

              <button
                type="button"
                onClick={() => setShowPreferences(!showPreferences)}
                className="mt-3 text-sm text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
              >
                {showPreferences ? t.hide : t.customize}
              </button>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:min-w-[160px]">
              <button
                type="button"
                onClick={() => saveConsent("accepted")}
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
              >
                {t.acceptAll}
              </button>

              <button
                type="button"
                onClick={() => saveConsent("rejected")}
                className="rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t.reject}
              </button>
            </div>
          </div>

          {showPreferences && (
            <div className="mt-5 border-t border-white/15 pt-4">
              <p className="mb-4 text-sm text-white/80">
                {t.choose}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium">{t.necessary}</p>
                  <p className="text-xs leading-5 text-white/50">
                    {t.necessaryText}
                  </p>
                  <span className="mt-1 inline-block text-xs text-white/50">
                    {t.always}
                  </span>
                </div>

                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(event) =>
                      setAnalyticsEnabled(event.target.checked)
                    }
                    className="h-4 w-4 accent-white"
                  />
                  <span className="text-sm">{t.analytics}</span>
                </label>
              </div>

              <button
                type="button"
                onClick={() =>
                  saveConsent(analyticsEnabled ? "accepted" : "rejected")
                }
                className="mt-5 w-full rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                {t.save}
              </button>
            </div>
          )}
        </section>
      )}
    </>
  );
}