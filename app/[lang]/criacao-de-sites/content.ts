/** Textos e dados da página Criação de Sites (usados na página e no schema do Google), em cada idioma. */
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

import type { ServiceContent } from "@/app/components/scenes/ServicePage";
import type { Dict } from "@/app/i18n";

const BENEFIT_ICONS = [Globe2, Search, ShieldCheck, Smartphone];
const TYPE_ICONS = [Monitor, LayoutTemplate, PanelsTopLeft, Target];

type Text = { title: string; description: string };
type Faq = { question: string; answer: string };

/** Textos de cada idioma; ícones e números são acrescentados em build(). */
type CriacaoText = Omit<ServiceContent, "icon" | "benefits" | "deliverables" | "faqs"> & {
  benefits: Text[];
  siteTypes: (Text & { tag: string })[];
  faqs: Faq[];
};

const text: Dict<CriacaoText> = {
  pt: {
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
    benefits: [
      { title: "Sua empresa disponível online", description: "Apresente seus serviços, sua história e suas informações em um endereço digital próprio." },
      { title: "Mais oportunidades de ser encontrado", description: "Um site bem estruturado pode ajudar sua empresa a aparecer nos mecanismos de busca." },
      { title: "Mais credibilidade", description: "Uma apresentação profissional ajuda a transmitir confiança a novos clientes." },
      { title: "Experiência em qualquer dispositivo", description: "Seu conteúdo se adapta a celulares, tablets e computadores." },
    ],
    comparison: {
      withoutLabel: "Sem site",
      withLabel: "Com site profissional",
      without: {
        title: "Informações espalhadas.",
        description:
          "Sem um site, o cliente pode depender de diferentes redes e canais para encontrar seus serviços, horários e informações.",
        points: ["Informações em diferentes canais", "Apresentação menos centralizada", "Mais etapas para entrar em contato"],
      },
      with: {
        title: "Uma apresentação mais completa.",
        description:
          "Seus serviços, diferenciais, localização e formas de contato organizados em um único endereço digital.",
        points: ["Informações organizadas", "Identidade profissional", "Contato facilitado"],
      },
    },
    deliverablesTitle: { before: "Cada negócio tem", highlight: "uma necessidade diferente." },
    siteTypes: [
      { title: "Site institucional", description: "Ideal para empresas e profissionais que desejam apresentar sua marca, serviços e formas de contato.", tag: "PRESENÇA PROFISSIONAL" },
      { title: "Landing page", description: "Uma página estratégica para apresentar uma oferta, campanha ou serviço específico.", tag: "FOCO EM CONVERSÃO" },
      { title: "Portfólio profissional", description: "Apresente projetos, experiências e resultados de forma organizada e visualmente marcante.", tag: "AUTORIDADE DIGITAL" },
      { title: "Gestão de Tráfego Pago", description: "Campanhas no Google Ads e Meta Ads para alcançar públicos relevantes, aumentar a visibilidade e gerar oportunidades de negócio em Guarulhos e São Paulo.", tag: "ANÚNCIOS E PERFORMANCE" },
    ],
    faqs: [
      { question: "Preciso ter um site mesmo usando Instagram?", answer: "O Instagram é ótimo para relacionamento, mas o alcance depende do algoritmo e o perfil não é seu de fato. O site é um espaço próprio, aparece nas pesquisas do Google e passa mais credibilidade na hora de o cliente decidir. Os dois funcionam melhor juntos." },
      { question: "Qual a diferença entre site institucional e landing page?", answer: "O site institucional apresenta a empresa como um todo, com várias páginas sobre serviços, história e contato. A landing page é uma página única, focada em uma oferta ou campanha, ideal para receber o tráfego de anúncios. Ajudamos você a escolher o formato certo para o seu objetivo." },
      { question: "Preciso já ter textos e fotos prontos?", answer: "Não. Se você já tiver materiais, aproveitamos. Se não tiver, orientamos o que é necessário e ajudamos a organizar os textos para que fiquem claros e prontos para o Google." },
      { question: "Posso pedir ajustes durante o desenvolvimento?", answer: "Sim. Você acompanha o projeto e aprova cada etapa. As rodadas de ajustes previstas ficam definidas na proposta, para que o resultado final fique do jeito que o seu negócio precisa." },
      { question: "Consigo atualizar o site sozinho depois?", answer: "Depende do tipo de projeto. Podemos entregar áreas editáveis para você alterar textos e imagens com facilidade, ou cuidar das atualizações para você com um plano de manutenção." },
      { question: "Já tenho um site antigo. Dá para refazer sem perder o que já tenho?", answer: "Sim. Aproveitamos o domínio atual e o conteúdo que ainda faz sentido e configuramos o redirecionamento das páginas antigas, para não perder o que o site já conquistou nas pesquisas." },
      { question: "Meu site vai ser seguro e estar de acordo com a LGPD?", answer: "Sim. O site é publicado com certificado de segurança (o cadeado no navegador), e os formulários e o aviso de cookies são pensados para respeitar a privacidade dos visitantes." },
      { question: "Meu site pode aparecer no Google?", answer: "Sim. O site é construído com a estrutura técnica e as boas práticas de SEO para ser encontrado. A visibilidade depende de conteúdo, concorrência e otimização contínua, por isso não existe garantia de primeira posição." },
    ],
    cta: {
      title: "Sua próxima grande ideia começa aqui.",
      description: "Vamos transformar a presença digital do seu negócio em uma experiência profissional e memorável.",
      whatsappMessage: "Olá, FORX Digital! Gostaria de solicitar um orçamento para os serviços digitais.",
    },
  },
  en: {
    eyebrow: "FORX DIGITAL / WEB DEVELOPMENT",
    hero: {
      before: "Your brand deserves",
      highlight: "its own place",
      after: "online.",
      description:
        "Much more than a page on the internet. A professional website presents your business, strengthens your identity and creates new ways to connect you with your customers.",
    },
    mock: {
      url: "yourbusiness.com",
      label: "YOUR BUSINESS, YOUR IDENTITY",
      title: "An online presence that impresses.",
      button: "See services",
    },
    badge: "Professional design",
    intro: {
      titleBefore: "So, what is",
      titleHighlight: "a professional website?",
      description:
        "A website is the online space where your company can present its services, tell its story, show what makes it different and offer ways to get in touch. It works as the official reference for your business on the internet.",
    },
    benefitsTitle: { before: "Why invest", highlight: "in a website?" },
    benefits: [
      { title: "Your business available online", description: "Present your services, your story and your information at a web address of your own." },
      { title: "More chances to be found", description: "A well-structured website can help your business show up in search engines." },
      { title: "More credibility", description: "A professional presentation helps build trust with new customers." },
      { title: "A great experience on any device", description: "Your content adapts to phones, tablets and computers." },
    ],
    comparison: {
      withoutLabel: "No website",
      withLabel: "With a professional website",
      without: {
        title: "Scattered information.",
        description:
          "Without a website, customers may have to rely on different networks and channels to find your services, hours and information.",
        points: ["Information spread across channels", "A less centralized presentation", "More steps to get in touch"],
      },
      with: {
        title: "A more complete presentation.",
        description:
          "Your services, strengths, location and contact options organized at a single web address.",
        points: ["Organized information", "Professional identity", "Easy contact"],
      },
    },
    deliverablesTitle: { before: "Every business has", highlight: "different needs." },
    siteTypes: [
      { title: "Business website", description: "Ideal for companies and professionals who want to present their brand, services and contact options.", tag: "PROFESSIONAL PRESENCE" },
      { title: "Landing page", description: "A strategic page to present a specific offer, campaign or service.", tag: "CONVERSION-FOCUSED" },
      { title: "Professional portfolio", description: "Present projects, experience and results in an organized and visually striking way.", tag: "ONLINE AUTHORITY" },
      { title: "Paid Ads Management", description: "Google Ads and Meta Ads campaigns to reach relevant audiences, increase visibility and generate business opportunities in Guarulhos and São Paulo.", tag: "ADS AND PERFORMANCE" },
    ],
    faqs: [
      { question: "Do I need a website if I already use Instagram?", answer: "Instagram is great for building relationships, but reach depends on the algorithm and the profile is not really yours. A website is a space of your own, shows up in Google searches and builds more credibility when the customer is deciding. The two work best together." },
      { question: "What is the difference between a business website and a landing page?", answer: "A business website presents the company as a whole, with several pages about services, history and contact. A landing page is a single page focused on one offer or campaign, ideal for receiving traffic from ads. We help you choose the right format for your goal." },
      { question: "Do I need to have texts and photos ready?", answer: "No. If you already have materials, we use them. If not, we tell you what is needed and help organize the texts so they are clear and ready for Google." },
      { question: "Can I ask for changes during development?", answer: "Yes. You follow the project and approve every stage. The planned rounds of changes are set out in the proposal, so the final result is exactly what your business needs." },
      { question: "Can I update the website myself later?", answer: "It depends on the type of project. We can deliver editable areas so you can easily change texts and images, or take care of updates for you with a maintenance plan." },
      { question: "I already have an old website. Can you rebuild it without losing what I have?", answer: "Yes. We keep the current domain and the content that still makes sense, and set up redirects from the old pages so you don't lose what the website has already gained in search results." },
      { question: "Will my website be secure and comply with data protection law (LGPD)?", answer: "Yes. The website is published with a security certificate (the padlock in the browser), and the forms and cookie notice are designed to respect visitors' privacy." },
      { question: "Can my website show up on Google?", answer: "Yes. The website is built with the technical structure and SEO best practices to be found. Visibility depends on content, competition and ongoing optimization, so there is no guarantee of first place." },
    ],
    cta: {
      title: "Your next big idea starts here.",
      description: "Let's turn your business's online presence into a professional and memorable experience.",
      whatsappMessage: "Hi, FORX Digital! I would like to request a quote for your digital services.",
    },
  },
  es: {
    eyebrow: "FORX DIGITAL / DESARROLLO WEB",
    hero: {
      before: "Tu marca merece",
      highlight: "un espacio propio",
      after: "en digital.",
      description:
        "Mucho más que una página en internet. Un sitio web profesional presenta tu negocio, fortalece tu identidad y crea nuevos caminos para conectarte con tus clientes.",
    },
    mock: {
      url: "tunegocio.com",
      label: "TU NEGOCIO, TU IDENTIDAD",
      title: "Una presencia digital que impresiona.",
      button: "Conocer servicios",
    },
    badge: "Diseño profesional",
    intro: {
      titleBefore: "Al final, ¿qué es",
      titleHighlight: "un sitio web profesional?",
      description:
        "Un sitio web es el espacio digital donde tu empresa puede presentar sus servicios, contar su historia, mostrar sus diferenciales y ofrecer formas de contacto. Funciona como la referencia oficial de tu negocio en internet.",
    },
    benefitsTitle: { before: "¿Por qué invertir", highlight: "en un sitio web?" },
    benefits: [
      { title: "Tu empresa disponible online", description: "Presenta tus servicios, tu historia y tu información en una dirección digital propia." },
      { title: "Más oportunidades de ser encontrado", description: "Un sitio bien estructurado puede ayudar a tu empresa a aparecer en los buscadores." },
      { title: "Más credibilidad", description: "Una presentación profesional ayuda a transmitir confianza a nuevos clientes." },
      { title: "Experiencia en cualquier dispositivo", description: "Tu contenido se adapta a celulares, tablets y computadoras." },
    ],
    comparison: {
      withoutLabel: "Sin sitio web",
      withLabel: "Con sitio web profesional",
      without: {
        title: "Información dispersa.",
        description:
          "Sin un sitio web, el cliente puede depender de diferentes redes y canales para encontrar tus servicios, horarios e información.",
        points: ["Información en diferentes canales", "Presentación menos centralizada", "Más pasos para contactarte"],
      },
      with: {
        title: "Una presentación más completa.",
        description:
          "Tus servicios, diferenciales, ubicación y formas de contacto organizados en una única dirección digital.",
        points: ["Información organizada", "Identidad profesional", "Contacto más fácil"],
      },
    },
    deliverablesTitle: { before: "Cada negocio tiene", highlight: "una necesidad diferente." },
    siteTypes: [
      { title: "Sitio institucional", description: "Ideal para empresas y profesionales que quieren presentar su marca, servicios y formas de contacto.", tag: "PRESENCIA PROFESIONAL" },
      { title: "Landing page", description: "Una página estratégica para presentar una oferta, campaña o servicio específico.", tag: "ENFOQUE EN CONVERSIÓN" },
      { title: "Portafolio profesional", description: "Presenta proyectos, experiencias y resultados de forma organizada y visualmente impactante.", tag: "AUTORIDAD DIGITAL" },
      { title: "Gestión de Publicidad Pagada", description: "Campañas en Google Ads y Meta Ads para llegar a públicos relevantes, aumentar la visibilidad y generar oportunidades de negocio en Guarulhos y São Paulo.", tag: "ANUNCIOS Y RENDIMIENTO" },
    ],
    faqs: [
      { question: "¿Necesito un sitio web si ya uso Instagram?", answer: "Instagram es excelente para relacionarse, pero el alcance depende del algoritmo y el perfil no es realmente tuyo. El sitio web es un espacio propio, aparece en las búsquedas de Google y transmite más credibilidad cuando el cliente decide. Los dos funcionan mejor juntos." },
      { question: "¿Cuál es la diferencia entre un sitio institucional y una landing page?", answer: "El sitio institucional presenta la empresa en su conjunto, con varias páginas sobre servicios, historia y contacto. La landing page es una página única, enfocada en una oferta o campaña, ideal para recibir el tráfico de anuncios. Te ayudamos a elegir el formato adecuado para tu objetivo." },
      { question: "¿Necesito tener textos y fotos listos?", answer: "No. Si ya tienes materiales, los aprovechamos. Si no, te orientamos sobre lo necesario y ayudamos a organizar los textos para que sean claros y estén listos para Google." },
      { question: "¿Puedo pedir ajustes durante el desarrollo?", answer: "Sí. Acompañas el proyecto y apruebas cada etapa. Las rondas de ajustes previstas quedan definidas en la propuesta, para que el resultado final sea como tu negocio lo necesita." },
      { question: "¿Puedo actualizar el sitio por mi cuenta después?", answer: "Depende del tipo de proyecto. Podemos entregar áreas editables para que cambies textos e imágenes con facilidad, o encargarnos de las actualizaciones con un plan de mantenimiento." },
      { question: "Ya tengo un sitio antiguo. ¿Se puede rehacer sin perder lo que ya tengo?", answer: "Sí. Aprovechamos el dominio actual y el contenido que todavía tiene sentido, y configuramos la redirección de las páginas antiguas para no perder lo que el sitio ya logró en las búsquedas." },
      { question: "¿Mi sitio será seguro y cumplirá con la ley de protección de datos (LGPD)?", answer: "Sí. El sitio se publica con certificado de seguridad (el candado en el navegador), y los formularios y el aviso de cookies están pensados para respetar la privacidad de los visitantes." },
      { question: "¿Mi sitio puede aparecer en Google?", answer: "Sí. El sitio se construye con la estructura técnica y las buenas prácticas de SEO para ser encontrado. La visibilidad depende del contenido, la competencia y la optimización continua, por eso no existe garantía de primera posición." },
    ],
    cta: {
      title: "Tu próxima gran idea empieza aquí.",
      description: "Transformemos la presencia digital de tu negocio en una experiencia profesional y memorable.",
      whatsappMessage: "¡Hola, FORX Digital! Me gustaría solicitar un presupuesto para los servicios digitales.",
    },
  },
};

function build({ benefits, siteTypes, faqs, ...rest }: CriacaoText): ServiceContent {
  return {
    ...rest,
    icon: Monitor,
    benefits: benefits.map((item, i) => ({ ...item, icon: BENEFIT_ICONS[i] })),
    deliverables: siteTypes.map((item, i) => ({
      ...item,
      icon: TYPE_ICONS[i],
      number: String(i + 1).padStart(2, "0"),
    })),
    faqs,
  };
}

export const criacaoContent: Dict<ServiceContent> = {
  pt: build(text.pt),
  en: build(text.en),
  es: build(text.es),
};

export const criacaoFaqs: Dict<Faq[]> = {
  pt: text.pt.faqs,
  en: text.en.faqs,
  es: text.es.faqs,
};
