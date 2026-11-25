"use client";

import { resetCookieConsent } from "@/app/components/CookieConsent";
import { useT } from "@/app/components/LangProvider";

const LABEL = { pt: "Gerenciar cookies", en: "Manage cookies", es: "Gestionar cookies" };

/** Reabre o aviso de cookies para o visitante rever ou retirar o consentimento. */
export default function ManageCookiesButton({ className }: { className?: string }) {
  const label = useT(LABEL);
  return (
    <button type="button" className={className} onClick={resetCookieConsent}>
      {label}
    </button>
  );
}
