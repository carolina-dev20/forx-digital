"use client";

import { resetCookieConsent } from "../components/CookieConsent";

/** Reabre o aviso de cookies para o visitante rever ou retirar o consentimento. */
export default function ManageCookiesButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={resetCookieConsent}>
      Gerenciar cookies
    </button>
  );
}
