
"use client";

import { motion, useReducedMotion } from "motion/react";

type WhatsAppFloatProps = {
  phone: string;
};

export default function WhatsAppFloat({
  phone,
}: WhatsAppFloatProps) {
  const reduceMotion = useReducedMotion();

  const message =
    "Olá! Conheci a FORX Digital pelo site e gostaria de solicitar um orçamento.";

  const cleanPhone = phone.replace(/\D/g, "");

  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={reduceMotion ? undefined : { scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#111111] text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(121,66,232,0.6)] md:bottom-8 md:right-8"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20.5l1.5-5.1a8.5 8.5 0 1 1 16-3.9Z" />
        <path d="M9 8.5c-.3 0-.7.5-.7 1.1 0 2.2 3.5 5.7 5.7 5.7.6 0 1.1-.4 1.1-.7l-1.5-1.1-.8.8c-1.3-.6-2.4-1.7-3-3l.8-.8L9 8.5Z" />
      </svg>

      <span className="pointer-events-none absolute right-[70px] hidden whitespace-nowrap rounded-lg bg-[#111111] px-4 py-2 text-xs text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
        Fale com a FORX
      </span>
    </motion.a>
  );
}
