
"use client";

import { motion, useReducedMotion } from "motion/react";

// WhatsApp oficial da FORX Digital
const WHATSAPP_NUMBER = "5511994880312";

type WhatsAppFloatProps = {
  phone?: string;
};

export default function WhatsAppFloat({
  phone: _phone,
}: WhatsAppFloatProps) {
  const reduceMotion = useReducedMotion();

  const message =
    "Olá! Conheci a FORX Digital pelo site e gostaria de solicitar um orçamento.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a FORX Digital pelo WhatsApp"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={reduceMotion ? undefined : { scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#111111] text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(121,66,232,0.6)] md:bottom-8 md:right-8"
    >
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  fill="currentColor"
  className="h-8 w-8 shrink-0"
  aria-hidden="true"
>
  <path d="M16 .8A15.1 15.1 0 0 0 3 23.6L.9 31l7.6-2A15.2 15.2 0 1 0 16 .8Zm0 27.6a12.4 12.4 0 0 1-6.3-1.7l-.5-.3-4.5 1.2 1.2-4.4-.3-.5A12.5 12.5 0 1 1 16 28.4Zm6.9-9.4c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.4 3.5 1.6 3.7c.2.2 2.8 4.3 6.8 6 .9.4 1.6.6 2.1.7.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z" />
</svg>
      <span className="pointer-events-none absolute right-[70px] hidden whitespace-nowrap rounded-lg bg-[#111111] px-4 py-2 text-xs text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
        Fale com a FORX
      </span>
    </motion.a>
  );
}
