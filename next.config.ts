import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Política de segurança de conteúdo (CSP): o navegador só carrega e executa
 * recursos do próprio site, do Google Analytics (após o aceite de cookies) e
 * da barra de comentários da Vercel nas prévias.
 *
 * Sem "nonce" de propósito: o site é estático, e nonces obrigariam cada página a
 * ser gerada no servidor a cada visita. 'unsafe-inline' em scripts é necessário
 * para os scripts embutidos do Next nesse modo (veja o guia de CSP do Next.js).
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://vercel.live`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: https://*.google-analytics.com https://*.googletagmanager.com https://vercel.live https://vercel.com",
  "font-src 'self' https://vercel.live",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://vercel.live wss://ws-us3.pusher.com",
  "frame-src https://vercel.live",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Em desenvolvimento a CSP fica de fora para não atrapalhar as ferramentas do Next.
  ...(isDev ? [] : [{ key: "Content-Security-Policy", value: csp }]),
  // Impede que o site seja exibido dentro de outro site (golpes de "clickjacking").
  { key: "X-Frame-Options", value: "DENY" },
  // O navegador não "adivinha" o tipo de um arquivo (evita executar o que não é script).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Outros sites só recebem o domínio de origem, não o endereço completo da página.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Recursos do aparelho que o site não usa ficam bloqueados.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
  // Isola a janela do site de abas abertas por outros sites.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,

  // Não anuncia a tecnologia do servidor (cabeçalho X-Powered-By).
  poweredByHeader: false,

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  async redirects() {
    return [
      {
        // O endereço padrão da Vercel leva ao domínio oficial (evita cópia do site
        // indexada no Google e links "parecidos" circulando).
        source: "/:path*",
        has: [{ type: "host", value: "forx-digital.vercel.app" }],
        destination: "https://www.forxdigital.com.br/:path*",
        permanent: true,
      },
    ];
  },

  turbopack: {
    rules: {
      // Só o CSS global passa pelo Tailwind. Não usar "*.css": isso faz
      // os arquivos *.module.css perderem o escopo de CSS Modules.
      "globals.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
