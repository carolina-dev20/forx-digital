/** Textos e dados da página Criação de Sites (usados na página e no schema do Google). */
import {
  Globe2,
  LayoutTemplate,
  Monitor,
  PanelsTopLeft,
  Search,
  ShieldCheck,
  Smartphone,
  Target,
} from "lucide-react";

import type { ServiceContent } from "../components/scenes/ServicePage";

const benefits = [
  {
    icon: Globe2,
    title: "Sua empresa disponível online",
    description:
      "Apresente seus serviços, sua história e suas informações em um endereço digital próprio.",
  },
  {
    icon: Search,
    title: "Mais oportunidades de ser encontrado",
    description:
      "Um site bem estruturado pode ajudar sua empresa a aparecer nos mecanismos de busca.",
  },
  {
    icon: ShieldCheck,
    title: "Mais credibilidade",
    description:
      "Uma apresentação profissional ajuda a transmitir confiança a novos clientes.",
  },
  {
    icon: Smartphone,
    title: "Experiência em qualquer dispositivo",
    description:
      "Seu conteúdo se adapta a celulares, tablets e computadores.",
  },
];

const siteTypes = [
  {
    icon: Monitor,
    number: "01",
    title: "Site institucional",
    description:
      "Ideal para empresas e profissionais que desejam apresentar sua marca, serviços e formas de contato.",
    tag: "PRESENÇA PROFISSIONAL",
  },
  {
    icon: LayoutTemplate,
    number: "02",
    title: "Landing page",
    description:
      "Uma página estratégica para apresentar uma oferta, campanha ou serviço específico.",
    tag: "FOCO EM CONVERSÃO",
  },
  {
    icon: PanelsTopLeft,
    number: "03",
    title: "Portfólio profissional",
    description:
      "Apresente projetos, experiências e resultados de forma organizada e visualmente marcante.",
    tag: "AUTORIDADE DIGITAL",
  },
  {
    icon: Target,
    number: "04",
    title: "Gestão de Tráfego Pago",
    description:
      "Campanhas no Google Ads e Meta Ads para alcançar públicos relevantes, aumentar a visibilidade e gerar oportunidades de negócio em Guarulhos e São Paulo.",
    tag: "ANÚNCIOS E PERFORMANCE",
  },
];

export const criacaoFaqs = [
  {
    question: "Preciso ter um site mesmo usando Instagram?",
    answer:
      "O Instagram é ótimo para relacionamento, mas o alcance depende do algoritmo e o perfil não é seu de fato. O site é um espaço próprio, aparece nas pesquisas do Google e passa mais credibilidade na hora de o cliente decidir. Os dois funcionam melhor juntos.",
  },
  {
    question: "Qual a diferença entre site institucional e landing page?",
    answer:
      "O site institucional apresenta a empresa como um todo, com várias páginas sobre serviços, história e contato. A landing page é uma página única, focada em uma oferta ou campanha, ideal para receber o tráfego de anúncios. Ajudamos você a escolher o formato certo para o seu objetivo.",
  },
  {
    question: "Preciso já ter textos e fotos prontos?",
    answer:
      "Não. Se você já tiver materiais, aproveitamos. Se não tiver, orientamos o que é necessário e ajudamos a organizar os textos para que fiquem claros e prontos para o Google.",
  },
  {
    question: "Posso pedir ajustes durante o desenvolvimento?",
    answer:
      "Sim. Você acompanha o projeto e aprova cada etapa. As rodadas de ajustes previstas ficam definidas na proposta, para que o resultado final fique do jeito que o seu negócio precisa.",
  },
  {
    question: "Consigo atualizar o site sozinho depois?",
    answer:
      "Depende do tipo de projeto. Podemos entregar áreas editáveis para você alterar textos e imagens com facilidade, ou cuidar das atualizações para você com um plano de manutenção.",
  },
  {
    question: "Já tenho um site antigo. Dá para refazer sem perder o que já tenho?",
    answer:
      "Sim. Aproveitamos o domínio atual e o conteúdo que ainda faz sentido e configuramos o redirecionamento das páginas antigas, para não perder o que o site já conquistou nas pesquisas.",
  },
  {
    question: "Meu site vai ser seguro e estar de acordo com a LGPD?",
    answer:
      "Sim. O site é publicado com certificado de segurança (o cadeado no navegador), e os formulários e o aviso de cookies são pensados para respeitar a privacidade dos visitantes.",
  },
  {
    question: "Meu site pode aparecer no Google?",
    answer:
      "Sim. O site é construído com a estrutura técnica e as boas práticas de SEO para ser encontrado. A visibilidade depende de conteúdo, concorrência e otimização contínua, por isso não existe garantia de primeira posição.",
  },
];

export const criacaoContent: ServiceContent = {
  icon: Monitor,
  eyebrow: "FORX DIGITAL / DESENVOLVIMENTO WEB",
  hero: {
    before: "Sua marca merece",
    highlight: "um espaço próprio",
    after: "no digital.",
    description:
      "Muito mais que uma página na internet. Um site profissional apresenta seu negócio, fortalece sua identidade e cria novos caminhos para conectar você aos seus clientes.",
  },
  mock: {
    url: "seunegocio.com.br",
    label: "SEU NEGÓCIO, SUA IDENTIDADE",
    title: "Uma presença digital que impressiona.",
    button: "Conhecer serviços",
  },
  badge: "Design profissional",
  intro: {
    titleBefore: "Afinal, o que é",
    titleHighlight: "um site profissional?",
    description:
      "Um site é o espaço digital onde sua empresa pode apresentar seus serviços, contar sua história, mostrar seus diferenciais e disponibilizar formas de contato. Ele funciona como uma referência oficial do seu negócio na internet.",
  },
  benefitsTitle: { before: "Por que investir", highlight: "em um site?" },
  benefits,
  comparison: {
    withoutLabel: "Sem site",
    withLabel: "Com site profissional",
    without: {
      title: "Informações espalhadas.",
      description:
        "Sem um site, o cliente pode depender de diferentes redes e canais para encontrar seus serviços, horários e informações.",
      points: [
        "Informações em diferentes canais",
        "Apresentação menos centralizada",
        "Mais etapas para entrar em contato",
      ],
    },
    with: {
      title: "Uma apresentação mais completa.",
      description:
        "Seus serviços, diferenciais, localização e formas de contato organizados em um único endereço digital.",
      points: [
        "Informações organizadas",
        "Identidade profissional",
        "Contato facilitado",
      ],
    },
  },
  deliverablesTitle: {
    before: "Cada negócio tem",
    highlight: "uma necessidade diferente.",
  },
  deliverables: siteTypes,
  faqs: criacaoFaqs,
  cta: {
    title: "Sua próxima grande ideia começa aqui.",
    description:
      "Vamos transformar a presença digital do seu negócio em uma experiência profissional e memorável.",
    whatsappMessage:
      "Olá, FORX Digital! Gostaria de solicitar um orçamento para os serviços digitais.",
  },
};

