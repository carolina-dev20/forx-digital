"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

type ConsentChoice = "accepted" | "rejected" | null;

const CONSENT_KEY = "forx-cookie-consent";

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (savedConsent === "accepted" || savedConsent === "rejected") {
      setConsent(savedConsent);
      setAnalyticsEnabled(savedConsent === "accepted");
    }

    setReady(true);
  }, []);

  function saveConsent(choice: "accepted" | "rejected") {
    localStorage.setItem(CONSENT_KEY, choice);
    setConsent(choice);
    setAnalyticsEnabled(choice === "accepted");
    setShowPreferences(false);
  }

  if (!ready) return null;

  return (
    <>
      {consent === "accepted" && (
        <GoogleAnalytics gaId="G-VZ6MLMPLTZ" />
      )}

      {consent === null && (
        <section
          aria-label="Preferências de cookies"
          aria-describedby="cookie-description"
          className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-3xl rounded-2xl border border-white/15 bg-[#111111] p-5 text-white shadow-2xl sm:bottom-6 sm:p-6"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-lg font-semibold tracking-tight">
                Sua privacidade importa.
              </p>

              <p
                id="cookie-description"
                className="text-sm leading-6 text-white/70"
              >
                Utilizamos cookies necessários para o funcionamento do site
                e, com sua permissão, cookies de análise para entender como
                você navega e melhorar nossos serviços.
              </p>

              <button
                type="button"
                onClick={() => setShowPreferences(!showPreferences)}
                className="mt-3 text-sm text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
              >
                {showPreferences ? "Ocultar preferências" : "Personalizar cookies"}
              </button>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:min-w-[160px]">
              <button
                type="button"
                onClick={() => saveConsent("accepted")}
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
              >
                Aceitar todos
              </button>

              <button
                type="button"
                onClick={() => saveConsent("rejected")}
                className="rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Recusar opcionais
              </button>
            </div>
          </div>

          {showPreferences && (
            <div className="mt-5 border-t border-white/15 pt-4">
              <p className="mb-4 text-sm text-white/80">
                Escolha quais cookies opcionais você permite.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium">Cookies necessários</p>
                  <p className="text-xs leading-5 text-white/50">
                    Essenciais para o funcionamento do site.
                  </p>
                  <span className="mt-1 inline-block text-xs text-white/50">
                    Sempre ativos
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
                  <span className="text-sm">Cookies de análise</span>
                </label>
              </div>

              <button
                type="button"
                onClick={() =>
                  saveConsent(analyticsEnabled ? "accepted" : "rejected")
                }
                className="mt-5 w-full rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Salvar preferências
              </button>
            </div>
          )}
        </section>
      )}
    </>
  );
}