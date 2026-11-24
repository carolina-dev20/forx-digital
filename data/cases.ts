/**
 * Cases da FORX exibidos em /cases.
 *
 * Regra: resultados (métricas, depoimento, prazo) só entram aqui depois que a
 * cliente confirmar. Campo vazio = bloco não aparece na página.
 */

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

export const cases: Case[] = [
  {
    slug: "cleide-beauty-salao",
    cliente: "Cleide Beauty Salão",
    segmento: "Salão de beleza",
    cidade: "Guarulhos/SP",
    tipoProjeto: "Landing page com SEO local",
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
    // prazoEntrega: "", // TODO: confirmar com a cliente
    depois:
      "O salão passou a ter uma presença digital própria, com os serviços apresentados com clareza, estrutura para ser encontrado por quem busca beleza em Guarulhos e um caminho simples entre conhecer o salão e chamar no WhatsApp.",
    // metricas: [], // TODO: pedir print do Perfil da Empresa no Google / Search Console
    // depoimento: undefined, // TODO: pedir depoimento (texto ou vídeo curto) com foto
    imagens: {
      desktop: {
        src: "/projetos/cleide-desktop.png",
        width: 1465,
        height: 676,
        alt: "Site do Cleide Beauty Salão na versão para computador",
      },
      mobile: {
        src: "/projetos/cleide-mobile.png",
        width: 290,
        height: 618,
        alt: "Site do Cleide Beauty Salão na versão para celular",
      },
    },
    url: "https://cleidebeautysalao.com.br/",
    // TODO: confirmar com a cliente — plano mais próximo do escopo (landing page + SEO local) na tabela de /precos
    planoRelacionado: { nome: "Básico", precoAPartirDe: "195", link: "/precos" },
    status: "concluído",
  },
  {
    slug: "larissa-barbosa",
    cliente: "Larissa Barbosa",
    // O site dela usa a marca "Larissa Barbosa · Beauty · Brows · Education" (não "Makeup Lab").
    segmento: "Maquiagem e design de sobrancelhas",
    cidade: "Guarulhos/SP",
    tipoProjeto: "Site institucional com SEO e tráfego pago",
    tags: ["Site institucional", "SEO", "Google", "Tráfego pago"],
    // TODO: confirmar com a cliente
    antes:
      "Não tinha site próprio e dependia só das redes sociais para ser encontrada.",
    oQueFizemos: [
      "Site institucional com os serviços de maquiagem",
      "SEO técnico e SEO local",
      "Perfil da Empresa no Google",
      "Campanhas de tráfego pago",
      "Contato direto pelo WhatsApp",
    ],
    // prazoEntrega: "", // TODO: confirmar com a cliente
    depois:
      "Os serviços ganharam uma vitrine profissional, e a otimização para buscas e o Perfil da Empresa no Google criaram um caminho direto da pesquisa no Google até o contato pelo site ou WhatsApp. O tráfego pago complementou a estratégia com novas oportunidades de alcançar o público.",
    // metricas: [], // TODO: pedir print do Perfil da Empresa no Google / Search Console
    // depoimento: undefined, // TODO: pedir depoimento (texto ou vídeo curto) com foto
    imagens: {
      desktop: {
        src: "/projetos/larissa-desktop.png",
        width: 1513,
        height: 646,
        alt: "Site da Larissa Barbosa na versão para computador",
      },
      mobile: {
        src: "/projetos/larissa-mobile.png",
        width: 290,
        height: 626,
        alt: "Site da Larissa Barbosa na versão para celular",
      },
    },
    url: "https://www.makeuplalab.com.br/",
    // TODO: confirmar com a cliente — plano mais próximo do escopo (site + SEO + tráfego pago) na tabela de /precos
    planoRelacionado: { nome: "Growth", precoAPartirDe: "797", link: "/precos" },
    status: "concluído",
  },
];
