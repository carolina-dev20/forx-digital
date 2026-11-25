/**
 * Cases da FORX exibidos em /cases (e no portfólio da home).
 *
 * Regra: resultados (métricas, depoimento, prazo) só entram aqui depois que a
 * cliente confirmar. Campo vazio = bloco não aparece na página.
 *
 * Textos em três idiomas: cada case tem uma parte fixa (imagens, link, plano)
 * e os textos em `texto.pt`, `texto.en` e `texto.es`. Ao mudar um texto em
 * português, atualize também as versões em inglês e espanhol.
 */

import type { Dict, Locale } from "@/app/i18n";

export type CaseStatus = "concluído" | "em andamento";

export type CaseImage = {
  /** Caminho em /public (ex.: "/projetos/cliente-desktop.png"). Sem src, aparece um placeholder. */
  src?: string;
  alt: string;
  /** Tamanho do print em pixels: a moldura usa essa proporção para não cortar a imagem. */
  width?: number;
  height?: number;
};

export type CaseMetric = {
  /** Número exatamente como a cliente confirmou (ex.: "12"). */
  valor: string;
  /** Ex.: "contatos pelo site no 1º mês". */
  legenda: string;
  /** De onde veio o número (ex.: "Perfil da Empresa no Google"). */
  fonte: string;
};

export type CaseTestimonial = {
  texto: string;
  nome: string;
  cargo: string;
  fotoUrl?: string;
  /**
   * Vídeo hospedado no próprio site (em /public). A política de segurança
   * (CSP em next.config.ts) só permite mídia do mesmo domínio.
   */
  videoUrl?: string;
};

export type CasePlan = {
  nome: string;
  /** Valor mensal em reais, como na página de planos (ex.: "500"). */
  precoAPartirDe: string;
  link: string;
};

export type Case = {
  slug: string;
  cliente: string;
  nomeComercial?: string;
  segmento: string;
  cidade?: string;
  tipoProjeto: string;
  tags: string[];
  /** Qual era o problema antes do projeto. */
  antes: string;
  oQueFizemos: string[];
  /** Ex.: "12 dias". */
  prazoEntrega?: string;
  /** O que mudou, em texto qualitativo e honesto (sem números não confirmados). */
  depois: string;
  metricas?: CaseMetric[];
  depoimento?: CaseTestimonial;
  imagens: { desktop: CaseImage; mobile: CaseImage };
  url: string;
  planoRelacionado?: CasePlan;
  status: CaseStatus;
};

/** Partes do case que mudam com o idioma. */
type CaseText = Pick<
  Case,
  "segmento" | "tipoProjeto" | "tags" | "antes" | "oQueFizemos" | "depois" | "prazoEntrega" | "metricas" | "depoimento"
> & {
  /** Frase curta do projeto no portfólio da home. */
  subtitulo: string;
  altDesktop: string;
  altMobile: string;
};

type CaseSource = Omit<Case, keyof CaseText | "imagens"> & {
  imagens: { desktop: Omit<CaseImage, "alt">; mobile: Omit<CaseImage, "alt"> };
  texto: Dict<CaseText>;
};

const sources: CaseSource[] = [
  {
    slug: "cleide-beauty-salao",
    cliente: "Cleide Beauty Salão",
    cidade: "Guarulhos/SP",
    imagens: {
      desktop: { src: "/projetos/cleide-desktop.png", width: 1465, height: 676 },
      mobile: { src: "/projetos/cleide-mobile.png", width: 290, height: 618 },
    },
    url: "https://cleidebeautysalao.com.br/",
    // TODO: confirmar com a cliente — plano mais próximo do escopo (landing page + SEO local) na tabela de /precos
    planoRelacionado: { nome: "Básico", precoAPartirDe: "195", link: "/precos" },
    status: "concluído",
    // prazoEntrega, metricas, depoimento: TODO confirmar com a cliente (print do Perfil da Empresa no Google / Search Console, depoimento com foto)
    texto: {
      pt: {
        segmento: "Salão de beleza",
        tipoProjeto: "Landing page com SEO local",
        subtitulo: "Site para salão de beleza",
        tags: ["Landing page", "SEO local", "Agendamento", "WhatsApp"],
        // TODO: confirmar com a cliente
        antes:
          "Só tinha presença no Instagram e não aparecia quando alguém buscava salão em Guarulhos no Google.",
        oQueFizemos: [
          "Landing page com os serviços e informações do salão",
          "SEO local para buscas de beleza em Guarulhos",
          "Acesso direto ao agendamento",
          "Contato pelo WhatsApp em um toque",
        ],
        depois:
          "O salão passou a ter uma presença digital própria, com os serviços apresentados com clareza, estrutura para ser encontrado por quem busca beleza em Guarulhos e um caminho simples entre conhecer o salão e chamar no WhatsApp.",
        altDesktop: "Site do Cleide Beauty Salão na versão para computador",
        altMobile: "Site do Cleide Beauty Salão na versão para celular",
      },
      en: {
        segmento: "Beauty salon",
        tipoProjeto: "Landing page with local SEO",
        subtitulo: "Website for a beauty salon",
        tags: ["Landing page", "Local SEO", "Booking", "WhatsApp"],
        antes:
          "The salon was only on Instagram and did not show up when people searched Google for a salon in Guarulhos.",
        oQueFizemos: [
          "Landing page with the salon's services and information",
          "Local SEO for beauty searches in Guarulhos",
          "Direct access to booking",
          "One-tap WhatsApp contact",
        ],
        depois:
          "The salon now has its own online presence, with services presented clearly, a structure to be found by people looking for beauty services in Guarulhos and a simple path from discovering the salon to messaging on WhatsApp.",
        altDesktop: "Cleide Beauty Salão website on desktop",
        altMobile: "Cleide Beauty Salão website on mobile",
      },
      es: {
        segmento: "Salón de belleza",
        tipoProjeto: "Landing page con SEO local",
        subtitulo: "Sitio web para salón de belleza",
        tags: ["Landing page", "SEO local", "Reservas", "WhatsApp"],
        antes:
          "Solo tenía presencia en Instagram y no aparecía cuando alguien buscaba un salón en Guarulhos en Google.",
        oQueFizemos: [
          "Landing page con los servicios e información del salón",
          "SEO local para búsquedas de belleza en Guarulhos",
          "Acceso directo a la agenda",
          "Contacto por WhatsApp con un toque",
        ],
        depois:
          "El salón pasó a tener una presencia digital propia, con los servicios presentados con claridad, una estructura para ser encontrado por quien busca belleza en Guarulhos y un camino simple entre conocer el salón y escribir por WhatsApp.",
        altDesktop: "Sitio web de Cleide Beauty Salão en la versión para computadora",
        altMobile: "Sitio web de Cleide Beauty Salão en la versión para celular",
      },
    },
  },
  {
    slug: "larissa-barbosa",
    cliente: "Larissa Barbosa",
    // O site dela usa a marca "Larissa Barbosa · Beauty · Brows · Education" (não "Makeup Lab").
    cidade: "Guarulhos/SP",
    imagens: {
      desktop: { src: "/projetos/larissa-desktop.png", width: 1513, height: 646 },
      mobile: { src: "/projetos/larissa-mobile.png", width: 290, height: 626 },
    },
    url: "https://www.makeuplalab.com.br/",
    // TODO: confirmar com a cliente — plano mais próximo do escopo (site + SEO + tráfego pago) na tabela de /precos
    planoRelacionado: { nome: "Growth", precoAPartirDe: "797", link: "/precos" },
    status: "concluído",
    // prazoEntrega, metricas, depoimento: TODO confirmar com a cliente (print do Perfil da Empresa no Google / Search Console, depoimento com foto)
    texto: {
      pt: {
        segmento: "Maquiagem e design de sobrancelhas",
        tipoProjeto: "Site institucional com SEO e tráfego pago",
        subtitulo: "Presença digital para profissional da beleza",
        tags: ["Site institucional", "SEO", "Google", "Tráfego pago"],
        // TODO: confirmar com a cliente
        antes: "Não tinha site próprio e dependia só das redes sociais para ser encontrada.",
        oQueFizemos: [
          "Site institucional com os serviços de maquiagem",
          "SEO técnico e SEO local",
          "Perfil da Empresa no Google",
          "Campanhas de tráfego pago",
          "Contato direto pelo WhatsApp",
        ],
        depois:
          "Os serviços ganharam uma vitrine profissional, e a otimização para buscas e o Perfil da Empresa no Google criaram um caminho direto da pesquisa no Google até o contato pelo site ou WhatsApp. O tráfego pago complementou a estratégia com novas oportunidades de alcançar o público.",
        altDesktop: "Site da Larissa Barbosa na versão para computador",
        altMobile: "Site da Larissa Barbosa na versão para celular",
      },
      en: {
        segmento: "Makeup and eyebrow design",
        tipoProjeto: "Business website with SEO and paid ads",
        subtitulo: "Online presence for a beauty professional",
        tags: ["Business website", "SEO", "Google", "Paid ads"],
        antes: "She had no website of her own and relied only on social media to be found.",
        oQueFizemos: [
          "Business website with her makeup services",
          "Technical SEO and local SEO",
          "Google Business Profile",
          "Paid ad campaigns",
          "Direct WhatsApp contact",
        ],
        depois:
          "Her services gained a professional showcase, and search optimization plus the Google Business Profile created a direct path from a Google search to a contact through the website or WhatsApp. Paid ads complemented the strategy with new ways to reach her audience.",
        altDesktop: "Larissa Barbosa website on desktop",
        altMobile: "Larissa Barbosa website on mobile",
      },
      es: {
        segmento: "Maquillaje y diseño de cejas",
        tipoProjeto: "Sitio institucional con SEO y publicidad pagada",
        subtitulo: "Presencia digital para profesional de la belleza",
        tags: ["Sitio institucional", "SEO", "Google", "Publicidad pagada"],
        antes: "No tenía sitio web propio y dependía solo de las redes sociales para ser encontrada.",
        oQueFizemos: [
          "Sitio institucional con los servicios de maquillaje",
          "SEO técnico y SEO local",
          "Perfil de Empresa en Google",
          "Campañas de publicidad pagada",
          "Contacto directo por WhatsApp",
        ],
        depois:
          "Los servicios ganaron una vitrina profesional, y la optimización para búsquedas y el Perfil de Empresa en Google crearon un camino directo desde la búsqueda en Google hasta el contacto por el sitio o WhatsApp. La publicidad pagada complementó la estrategia con nuevas oportunidades de llegar al público.",
        altDesktop: "Sitio web de Larissa Barbosa en la versión para computadora",
        altMobile: "Sitio web de Larissa Barbosa en la versión para celular",
      },
    },
  },
];

/** Cases no idioma pedido, já com os textos no lugar. */
export function getCases(lang: Locale): (Case & { subtitulo: string })[] {
  return sources.map(({ texto, imagens, ...base }) => {
    const { altDesktop, altMobile, ...text } = texto[lang];
    return {
      ...base,
      ...text,
      imagens: {
        desktop: { ...imagens.desktop, alt: altDesktop },
        mobile: { ...imagens.mobile, alt: altMobile },
      },
    };
  });
}
