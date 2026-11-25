import {
  BarChart3,
  BellRing,
  BriefcaseBusiness,
  CalendarClock,
  ClipboardCheck,
  Clock,
  FileSpreadsheet,
  Filter,
  Gauge,
  Handshake,
  History,
  ListChecks,
  MessageCircle,
  Repeat,
  Target,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { locales, type Dict } from "@/app/i18n";

export type GestaoSlug = "processos-internos" | "crm" | "automacao";

type Item = { icon: LucideIcon; title: string; description: string };

export type GestaoContent = {
  slug: GestaoSlug;
  href: string;
  menuLabel: string;
  menuDescription: string;
  icon: LucideIcon;
  seo: { title: string; description: string };
  eyebrow: string;
  hero: { before: string; highlight: string; after: string; description: string };
  mock: { url: string; label: string; title: string; button: string };
  badge: string;
  intro: { titleBefore: string; titleHighlight: string; description: string };
  benefitsTitle: { before: string; highlight: string };
  benefits: Item[];
  comparison: {
    withoutLabel: string;
    withLabel: string;
    without: { title: string; description: string; points: string[] };
    with: { title: string; description: string; points: string[] };
  };
  deliverablesTitle: { before: string; highlight: string };
  deliverables: (Item & { tag: string })[];
  faqs: { question: string; answer: string }[];
  cta: { title: string; description: string; whatsappMessage: string };
};

type Text = { title: string; description: string };

/** Textos de uma página em um idioma (sem ícones, slug e endereço). */
type PageText = Omit<GestaoContent, "slug" | "href" | "icon" | "benefits" | "deliverables"> & {
  benefits: Text[];
  deliverables: (Text & { tag: string })[];
};

/** Partes fixas de cada página: endereço e ícones (na ordem dos textos). */
const base: Record<GestaoSlug, { href: string; icon: LucideIcon; benefitIcons: LucideIcon[]; deliverableIcons: LucideIcon[] }> = {
  "processos-internos": {
    href: "/gestao/processos-internos",
    icon: BriefcaseBusiness,
    benefitIcons: [Clock, Users, Gauge, TrendingUp],
    deliverableIcons: [ClipboardCheck, ListChecks, BarChart3, Workflow],
  },
  crm: {
    href: "/gestao/crm",
    icon: Users,
    benefitIcons: [Target, History, Filter, Handshake],
    deliverableIcons: [Filter, FileSpreadsheet, MessageCircle, BarChart3],
  },
  automacao: {
    href: "/gestao/automacao",
    icon: Workflow,
    benefitIcons: [Clock, ClipboardCheck, BellRing, TrendingUp],
    deliverableIcons: [CalendarClock, BellRing, Repeat, BarChart3],
  },
};

const text: Dict<Record<GestaoSlug, PageText>> = {
  // ==========================================
  // PORTUGUÊS
  // ==========================================
  pt: {
    "processos-internos": {
      menuLabel: "Processos internos",
      menuDescription: "Rotinas, indicadores e organização",
      seo: {
        title: "Gestão de Processos Internos para Empresas",
        description:
          "Estruturação de processos internos, rotinas e indicadores para empresas que querem mais controle, menos retrabalho e uma operação preparada para crescer.",
      },
      eyebrow: "FORX DIGITAL / GESTÃO DE PROCESSOS",
      hero: {
        before: "Uma empresa organizada",
        highlight: "cresce com",
        after: "muito mais segurança.",
        description:
          "Quando cada tarefa tem dono, prazo e padrão, a equipe para de apagar incêndios e passa a trabalhar no que gera resultado. Estruturamos os processos da sua empresa para a operação funcionar com clareza, mesmo quando você não está olhando.",
      },
      mock: { url: "painel.suaempresa.com.br", label: "OPERAÇÃO DA SEMANA", title: "Cada etapa no lugar certo.", button: "Ver indicadores" },
      badge: "Operação sob controle",
      intro: {
        titleBefore: "Afinal, o que é",
        titleHighlight: "gestão de processos?",
        description:
          "É o trabalho de mapear como sua empresa realmente funciona hoje, identificar gargalos e redesenhar cada rotina para que ela seja simples, repetível e mensurável. O resultado é um passo a passo claro para vendas, atendimento, financeiro e operação, com responsáveis definidos e indicadores que mostram o que está funcionando.",
      },
      benefitsTitle: { before: "Por que organizar", highlight: "seus processos?" },
      benefits: [
        { title: "Menos retrabalho", description: "Tarefas padronizadas evitam erros repetidos e decisões tomadas do zero toda vez." },
        { title: "Equipe alinhada", description: "Todos sabem o que fazer, quando fazer e quem é o responsável por cada etapa." },
        { title: "Decisões com dados", description: "Indicadores simples mostram onde a operação ganha ou perde tempo e dinheiro." },
        { title: "Pronta para crescer", description: "Processos claros permitem contratar, delegar e escalar sem perder a qualidade." },
      ],
      comparison: {
        withoutLabel: "Sem processos definidos",
        withLabel: "Com processos estruturados",
        without: {
          title: "Tudo depende de alguém lembrar.",
          description:
            "Informações ficam na cabeça das pessoas, cada um faz de um jeito e os problemas só aparecem quando o cliente reclama.",
          points: ["Tarefas esquecidas", "Retrabalho constante", "Dono do negócio sobrecarregado"],
        },
        with: {
          title: "Uma operação que funciona sozinha.",
          description:
            "Cada rotina tem padrão, responsável e prazo. Você acompanha os números e atua no que realmente importa.",
          points: ["Rotinas padronizadas", "Responsáveis definidos", "Indicadores acompanhados"],
        },
      },
      deliverablesTitle: { before: "O que entregamos", highlight: "na prática." },
      deliverables: [
        { tag: "DIAGNÓSTICO", title: "Mapeamento da operação", description: "Entendemos como sua empresa funciona hoje e onde estão os gargalos que travam o crescimento." },
        { tag: "PADRONIZAÇÃO", title: "Fluxos e rotinas", description: "Desenhamos o passo a passo de cada área, com responsáveis, prazos e checklists." },
        { tag: "INDICADORES", title: "Painel de acompanhamento", description: "Definimos os números certos para você acompanhar a saúde do negócio de forma simples." },
        { tag: "EVOLUÇÃO", title: "Implantação e ajustes", description: "Acompanhamos a equipe na adoção dos novos processos e ajustamos o que for preciso." },
      ],
      faqs: [
        { question: "Minha empresa é pequena. Preciso disso?", answer: "Sim, e esse é o melhor momento. Organizar os processos enquanto a empresa é pequena evita que a bagunça cresça junto com ela e facilita cada nova contratação." },
        { question: "Como funciona o diagnóstico?", answer: "Conversamos com você e com as pessoas-chave da equipe, acompanhamos a rotina e mapeamos como o trabalho acontece hoje. Com isso, identificamos gargalos, retrabalho e tarefas que dependem de uma só pessoa." },
        { question: "Vou precisar parar a operação ou mudar tudo de uma vez?", answer: "Não. Priorizamos os processos que mais impactam o resultado e implantamos as mudanças por etapas, sem interromper o dia a dia da empresa." },
        { question: "E se a minha equipe resistir às mudanças?", answer: "É uma preocupação comum. Por isso envolvemos a equipe desde o início, explicamos o porquê de cada mudança e criamos rotinas simples de seguir. Quando as pessoas percebem que o trabalho fica mais fácil, a adesão vem naturalmente." },
        { question: "Preciso comprar algum sistema?", answer: "Nem sempre. Primeiro organizamos o processo; depois indicamos se vale usar uma ferramenta, automatizar etapas ou desenvolver uma solução sob medida." },
        { question: "Em quanto tempo vejo resultado?", answer: "As primeiras melhorias costumam aparecer logo após a padronização das rotinas principais. O prazo completo depende do tamanho da operação e é definido no diagnóstico." },
      ],
      cta: {
        title: "Vamos organizar a sua operação?",
        description: "Conte como sua empresa funciona hoje. Nós mostramos por onde começar para ganhar tempo, controle e previsibilidade.",
        whatsappMessage: "Olá, FORX Digital! Quero organizar os processos internos da minha empresa.",
      },
    },

    crm: {
      menuLabel: "CRM e clientes",
      menuDescription: "Atendimento e funil comercial",
      seo: {
        title: "CRM para Empresas: Funil de Vendas e Clientes",
        description:
          "Implantação de CRM e organização do funil comercial para acompanhar contatos, oportunidades e clientes, sem perder vendas por falta de retorno.",
      },
      eyebrow: "FORX DIGITAL / CRM E RELACIONAMENTO",
      hero: {
        before: "Nenhum cliente",
        highlight: "esquecido.",
        after: "Nenhuma venda perdida.",
        description:
          "Orçamentos sem retorno e contatos espalhados no WhatsApp custam caro. Com um CRM bem implantado, você sabe exatamente em que etapa cada cliente está, quem precisa de resposta hoje e de onde vêm suas melhores vendas.",
      },
      mock: { url: "crm.suaempresa.com.br", label: "FUNIL DE VENDAS", title: "Cada oportunidade acompanhada.", button: "Ver oportunidades" },
      badge: "Funil organizado",
      intro: {
        titleBefore: "Afinal, o que é",
        titleHighlight: "um CRM?",
        description:
          "CRM (gestão do relacionamento com o cliente) é o sistema que reúne todos os seus contatos, conversas, orçamentos e negociações em um só lugar. Ele mostra o caminho de cada cliente, do primeiro contato ao fechamento, e lembra sua equipe do próximo passo para que nenhuma oportunidade fique para trás.",
      },
      benefitsTitle: { before: "Por que usar", highlight: "um CRM?" },
      benefits: [
        { title: "Mais vendas fechadas", description: "Retornos no momento certo transformam orçamentos parados em clientes." },
        { title: "Histórico completo", description: "Toda conversa e negociação registrada, mesmo quando alguém sai da equipe." },
        { title: "Funil visível", description: "Veja quantas oportunidades há em cada etapa e onde as vendas estão travando." },
        { title: "Clientes que voltam", description: "Pós-venda organizado aumenta a recompra e as indicações." },
      ],
      comparison: {
        withoutLabel: "Sem CRM",
        withLabel: "Com CRM",
        without: {
          title: "Contatos perdidos no caminho.",
          description:
            "Clientes espalhados em conversas, planilhas e anotações. Ninguém sabe ao certo quem já foi atendido ou quem está esperando retorno.",
          points: ["Orçamentos sem follow-up", "Informações espalhadas", "Vendas que dependem da memória"],
        },
        with: {
          title: "Todo o comercial em uma tela.",
          description:
            "Cada contato com etapa, responsável e próxima ação definida. Você acompanha o funil e age antes de perder a venda.",
          points: ["Funil por etapas", "Lembretes de retorno", "Relatórios de vendas"],
        },
      },
      deliverablesTitle: { before: "O que entregamos", highlight: "na prática." },
      deliverables: [
        { tag: "FUNIL", title: "Funil de vendas sob medida", description: "Etapas desenhadas para o jeito que a sua empresa vende, do primeiro contato ao fechamento." },
        { tag: "ORGANIZAÇÃO", title: "Base de clientes unificada", description: "Organizamos contatos que hoje estão em planilhas, agendas e conversas em uma base única." },
        { tag: "ATENDIMENTO", title: "Rotina de follow-up", description: "Definimos quando e como retornar a cada cliente, com lembretes para a equipe." },
        { tag: "RESULTADOS", title: "Relatórios comerciais", description: "Taxa de conversão, origem dos clientes e desempenho da equipe de forma clara." },
      ],
      faqs: [
        { question: "CRM é só para empresas grandes?", answer: "Não. Pequenas empresas são as que mais sentem cada venda perdida. Um CRM simples e bem configurado já organiza o comercial desde o primeiro cliente." },
        { question: "Hoje uso planilha. Qual a diferença?", answer: "A planilha guarda dados, mas não avisa quando é hora de retornar um cliente, não mostra em que etapa está cada negociação e se perde quando várias pessoas mexem nela. O CRM organiza o funil, registra o histórico e lembra a equipe dos próximos passos." },
        { question: "Funciona com o WhatsApp?", answer: "Sim. Podemos organizar o atendimento que chega pelo WhatsApp dentro do funil, para que cada conversa vire uma oportunidade acompanhada." },
        { question: "Consigo acompanhar o trabalho de cada vendedor?", answer: "Sim. Você vê quantas oportunidades cada pessoa tem, em que etapa estão e quais estão paradas, com relatórios que ajudam a tomar decisões e a orientar a equipe." },
        { question: "Minha equipe vai conseguir usar?", answer: "Sim. Configuramos apenas o que faz sentido para sua rotina e orientamos a equipe no uso, para que o CRM ajude e não vire mais uma tarefa." },
        { question: "Posso aproveitar minha lista de clientes atual?", answer: "Sim. Ajudamos a importar e organizar os contatos que você já tem em planilhas ou outras ferramentas." },
        { question: "Os dados dos meus clientes ficam seguros?", answer: "Sim. Cada pessoa da equipe acessa com o próprio usuário e vê apenas o que precisa, e a organização dos dados segue boas práticas de privacidade e da LGPD." },
      ],
      cta: {
        title: "Pare de perder clientes por falta de retorno.",
        description: "Vamos organizar seu comercial para que cada contato seja acompanhado até o fechamento.",
        whatsappMessage: "Olá, FORX Digital! Quero organizar meus clientes e vendas com um CRM.",
      },
    },

    automacao: {
      menuLabel: "Automação",
      menuDescription: "Menos tarefas manuais e retrabalho",
      seo: {
        title: "Automação de Processos e Tarefas para Empresas",
        description:
          "Automação de tarefas, avisos e fluxos de trabalho para empresas que querem ganhar tempo, reduzir erros e atender clientes com mais agilidade.",
      },
      eyebrow: "FORX DIGITAL / AUTOMAÇÃO",
      hero: {
        before: "Deixe as tarefas",
        highlight: "repetitivas",
        after: "com a tecnologia.",
        description:
          "Lembretes, confirmações, cobranças, cadastros e relatórios não precisam tomar o tempo da sua equipe. Automatizamos o que se repete para que as pessoas foquem em atender bem, vender e decidir.",
      },
      mock: { url: "fluxos.suaempresa.com.br", label: "AUTOMAÇÃO ATIVA", title: "Trabalho feito no piloto automático.", button: "Ver fluxos" },
      badge: "Horas economizadas",
      intro: {
        titleBefore: "Afinal, o que é",
        titleHighlight: "automação de processos?",
        description:
          "É usar a tecnologia para executar tarefas que seguem sempre a mesma regra: enviar uma confirmação de horário, avisar sobre um pagamento, cadastrar um novo cliente, gerar um relatório. Uma vez configurado, o fluxo roda sozinho, sem esquecimentos e no momento certo.",
      },
      benefitsTitle: { before: "Por que", highlight: "automatizar?" },
      benefits: [
        { title: "Tempo de volta", description: "Horas de trabalho manual por semana liberadas para o que realmente importa." },
        { title: "Menos erros", description: "Processos automáticos não esquecem, não digitam errado e não pulam etapas." },
        { title: "Atendimento ágil", description: "Clientes recebem confirmações e respostas na hora, a qualquer momento." },
        { title: "Cresce sem inchar", description: "Atenda mais clientes sem precisar aumentar a equipe na mesma proporção." },
      ],
      comparison: {
        withoutLabel: "Tudo manual",
        withLabel: "Com automação",
        without: {
          title: "A equipe presa em tarefas repetitivas.",
          description:
            "Confirmar horários, cobrar pagamentos e copiar dados de um lugar para outro consome o dia e abre espaço para esquecimentos.",
          points: ["Lembretes esquecidos", "Dados digitados duas vezes", "Respostas demoradas"],
        },
        with: {
          title: "O operacional acontece sozinho.",
          description:
            "Avisos, confirmações e atualizações saem no momento certo, e a equipe só entra quando precisa de um toque humano.",
          points: ["Avisos automáticos", "Dados sincronizados", "Resposta imediata"],
        },
      },
      deliverablesTitle: { before: "O que podemos", highlight: "automatizar." },
      deliverables: [
        { tag: "AGENDA", title: "Confirmações e lembretes", description: "Mensagens automáticas de confirmação e lembrete de horários para reduzir faltas." },
        { tag: "FINANCEIRO", title: "Avisos de cobrança", description: "Lembretes de vencimento e confirmação de pagamento enviados sem intervenção manual." },
        { tag: "INTEGRAÇÕES", title: "Sistemas conversando", description: "Formulários, planilhas, CRM e WhatsApp trocando dados automaticamente." },
        { tag: "RELATÓRIOS", title: "Relatórios automáticos", description: "Indicadores do negócio gerados e enviados periodicamente, prontos para leitura." },
      ],
      faqs: [
        { question: "O que dá para automatizar na minha empresa?", answer: "Toda tarefa que se repete com a mesma regra é candidata: confirmações, lembretes, cobranças, cadastros, envio de relatórios e atualização de dados entre sistemas. No diagnóstico identificamos as que trazem mais retorno." },
        { question: "A automação vai deixar o atendimento frio?", answer: "Não. Automatizamos o operacional para que a equipe tenha mais tempo para o atendimento humano, onde ele realmente faz diferença." },
        { question: "Preciso trocar os sistemas que já uso?", answer: "Na maioria dos casos, não. Sempre que possível, integramos as ferramentas que sua empresa já utiliza." },
        { question: "É possível automatizar mensagens no WhatsApp sem risco de bloqueio?", answer: "Sim, desde que dentro das regras da plataforma. Para envios automáticos recomendamos a API oficial do WhatsApp Business, que reduz o risco de bloqueio do número, e usamos mensagens que o cliente espera receber, como confirmações de horário e avisos de pagamento." },
        { question: "E se a automação der erro?", answer: "Testamos cada fluxo antes de colocá-lo em funcionamento e configuramos avisos para que falhas sejam percebidas rapidamente. Se uma regra do negócio mudar, a automação é ajustada." },
        { question: "Preciso ter alguém técnico na equipe?", answer: "Não. Cuidamos da configuração e da parte técnica e explicamos para a equipe o que cada automação faz, de forma simples." },
      ],
      cta: {
        title: "Quanto tempo sua equipe perde com tarefas repetitivas?",
        description: "Vamos identificar o que pode ser automatizado na sua empresa e devolver esse tempo para o que gera resultado.",
        whatsappMessage: "Olá, FORX Digital! Quero automatizar tarefas e processos da minha empresa.",
      },
    },
  },

  // ==========================================
  // ENGLISH
  // ==========================================
  en: {
    "processos-internos": {
      menuLabel: "Internal processes",
      menuDescription: "Routines, metrics and organization",
      seo: {
        title: "Internal Process Management for Businesses",
        description:
          "We structure internal processes, routines and metrics for businesses that want more control, less rework and an operation ready to grow.",
      },
      eyebrow: "FORX DIGITAL / PROCESS MANAGEMENT",
      hero: {
        before: "An organized company",
        highlight: "grows with",
        after: "far more confidence.",
        description:
          "When every task has an owner, a deadline and a standard, the team stops putting out fires and starts working on what brings results. We structure your company's processes so the operation runs clearly, even when you are not watching.",
      },
      mock: { url: "dashboard.yourcompany.com", label: "THIS WEEK'S OPERATION", title: "Every step in the right place.", button: "See metrics" },
      badge: "Operation under control",
      intro: {
        titleBefore: "So, what is",
        titleHighlight: "process management?",
        description:
          "It is the work of mapping how your company really works today, finding bottlenecks and redesigning each routine so it is simple, repeatable and measurable. The result is a clear step-by-step for sales, customer service, finance and operations, with defined owners and metrics that show what is working.",
      },
      benefitsTitle: { before: "Why organize", highlight: "your processes?" },
      benefits: [
        { title: "Less rework", description: "Standardized tasks avoid repeated mistakes and decisions made from scratch every time." },
        { title: "An aligned team", description: "Everyone knows what to do, when to do it and who owns each step." },
        { title: "Data-driven decisions", description: "Simple metrics show where the operation gains or loses time and money." },
        { title: "Ready to grow", description: "Clear processes let you hire, delegate and scale without losing quality." },
      ],
      comparison: {
        withoutLabel: "No defined processes",
        withLabel: "With structured processes",
        without: {
          title: "Everything depends on someone remembering.",
          description:
            "Information lives in people's heads, everyone does things their own way and problems only show up when a customer complains.",
          points: ["Forgotten tasks", "Constant rework", "An overloaded business owner"],
        },
        with: {
          title: "An operation that runs on its own.",
          description:
            "Every routine has a standard, an owner and a deadline. You follow the numbers and act on what really matters.",
          points: ["Standardized routines", "Defined owners", "Tracked metrics"],
        },
      },
      deliverablesTitle: { before: "What we deliver", highlight: "in practice." },
      deliverables: [
        { tag: "ASSESSMENT", title: "Operation mapping", description: "We understand how your company works today and where the bottlenecks holding back growth are." },
        { tag: "STANDARDIZATION", title: "Workflows and routines", description: "We design the step-by-step for each area, with owners, deadlines and checklists." },
        { tag: "METRICS", title: "Tracking dashboard", description: "We define the right numbers so you can follow the health of the business simply." },
        { tag: "IMPROVEMENT", title: "Rollout and adjustments", description: "We support the team as it adopts the new processes and adjust whatever is needed." },
      ],
      faqs: [
        { question: "My company is small. Do I need this?", answer: "Yes, and this is the best time. Organizing processes while the company is small keeps the mess from growing with it and makes every new hire easier." },
        { question: "How does the assessment work?", answer: "We talk with you and the key people on your team, follow the routine and map how the work happens today. From that, we identify bottlenecks, rework and tasks that depend on a single person." },
        { question: "Will I need to stop the operation or change everything at once?", answer: "No. We prioritize the processes with the biggest impact on results and roll out the changes in stages, without interrupting the company's day-to-day." },
        { question: "What if my team resists the changes?", answer: "That is a common concern. That is why we involve the team from the start, explain the reason for each change and create routines that are easy to follow. When people see their work getting easier, buy-in comes naturally." },
        { question: "Do I need to buy a system?", answer: "Not always. First we organize the process; then we recommend whether it is worth using a tool, automating steps or building a custom solution." },
        { question: "How soon will I see results?", answer: "The first improvements usually appear right after the main routines are standardized. The full timeline depends on the size of the operation and is defined in the assessment." },
      ],
      cta: {
        title: "Shall we organize your operation?",
        description: "Tell us how your company works today. We will show you where to start to gain time, control and predictability.",
        whatsappMessage: "Hi, FORX Digital! I want to organize my company's internal processes.",
      },
    },

    crm: {
      menuLabel: "CRM and customers",
      menuDescription: "Customer service and sales pipeline",
      seo: {
        title: "CRM for Businesses: Sales Pipeline and Customers",
        description:
          "CRM implementation and sales pipeline organization to track contacts, opportunities and customers, without losing sales for lack of follow-up.",
      },
      eyebrow: "FORX DIGITAL / CRM AND RELATIONSHIPS",
      hero: {
        before: "No customer",
        highlight: "forgotten.",
        after: "No sale lost.",
        description:
          "Quotes without follow-up and contacts scattered across WhatsApp are expensive. With a well-implemented CRM, you know exactly what stage each customer is at, who needs an answer today and where your best sales come from.",
      },
      mock: { url: "crm.yourcompany.com", label: "SALES PIPELINE", title: "Every opportunity tracked.", button: "See opportunities" },
      badge: "Organized pipeline",
      intro: {
        titleBefore: "So, what is",
        titleHighlight: "a CRM?",
        description:
          "A CRM (customer relationship management) is the system that brings all your contacts, conversations, quotes and negotiations together in one place. It shows each customer's journey, from first contact to closing, and reminds your team of the next step so no opportunity falls behind.",
      },
      benefitsTitle: { before: "Why use", highlight: "a CRM?" },
      benefits: [
        { title: "More deals closed", description: "Follow-ups at the right time turn stalled quotes into customers." },
        { title: "Complete history", description: "Every conversation and negotiation recorded, even when someone leaves the team." },
        { title: "A visible pipeline", description: "See how many opportunities are at each stage and where sales are getting stuck." },
        { title: "Customers who come back", description: "Organized after-sales increases repeat purchases and referrals." },
      ],
      comparison: {
        withoutLabel: "No CRM",
        withLabel: "With a CRM",
        without: {
          title: "Contacts lost along the way.",
          description:
            "Customers scattered across chats, spreadsheets and notes. Nobody knows for sure who has been served or who is waiting for a reply.",
          points: ["Quotes without follow-up", "Scattered information", "Sales that depend on memory"],
        },
        with: {
          title: "Your whole sales process on one screen.",
          description:
            "Every contact with a stage, an owner and a defined next action. You follow the pipeline and act before losing the sale.",
          points: ["Stage-based pipeline", "Follow-up reminders", "Sales reports"],
        },
      },
      deliverablesTitle: { before: "What we deliver", highlight: "in practice." },
      deliverables: [
        { tag: "PIPELINE", title: "Custom sales pipeline", description: "Stages designed around the way your company sells, from first contact to closing." },
        { tag: "ORGANIZATION", title: "Unified customer base", description: "We bring contacts now spread across spreadsheets, calendars and chats into a single base." },
        { tag: "CUSTOMER SERVICE", title: "Follow-up routine", description: "We define when and how to get back to each customer, with reminders for the team." },
        { tag: "RESULTS", title: "Sales reports", description: "Conversion rate, customer sources and team performance, presented clearly." },
      ],
      faqs: [
        { question: "Is a CRM only for large companies?", answer: "No. Small businesses feel every lost sale the most. A simple, well-configured CRM organizes sales from the very first customer." },
        { question: "I use a spreadsheet today. What is the difference?", answer: "A spreadsheet stores data, but it does not tell you when to follow up with a customer, does not show what stage each deal is at and gets messy when several people edit it. A CRM organizes the pipeline, records the history and reminds the team of the next steps." },
        { question: "Does it work with WhatsApp?", answer: "Yes. We can organize the conversations that come in through WhatsApp inside the pipeline, so each chat becomes a tracked opportunity." },
        { question: "Can I follow each salesperson's work?", answer: "Yes. You see how many opportunities each person has, what stage they are at and which ones are stalled, with reports that help you make decisions and guide the team." },
        { question: "Will my team be able to use it?", answer: "Yes. We only set up what makes sense for your routine and train the team, so the CRM helps instead of becoming one more task." },
        { question: "Can I use my current customer list?", answer: "Yes. We help import and organize the contacts you already have in spreadsheets or other tools." },
        { question: "Is my customers' data safe?", answer: "Yes. Each team member logs in with their own user and only sees what they need, and the data is organized following privacy best practices and Brazil's data protection law (LGPD)." },
      ],
      cta: {
        title: "Stop losing customers for lack of follow-up.",
        description: "Let's organize your sales so every contact is followed through to closing.",
        whatsappMessage: "Hi, FORX Digital! I want to organize my customers and sales with a CRM.",
      },
    },

    automacao: {
      menuLabel: "Automation",
      menuDescription: "Fewer manual tasks and less rework",
      seo: {
        title: "Process and Task Automation for Businesses",
        description:
          "Automation of tasks, notifications and workflows for businesses that want to save time, reduce errors and serve customers faster.",
      },
      eyebrow: "FORX DIGITAL / AUTOMATION",
      hero: {
        before: "Leave the",
        highlight: "repetitive tasks",
        after: "to technology.",
        description:
          "Reminders, confirmations, payment notices, sign-ups and reports do not need to take up your team's time. We automate what repeats so people can focus on great service, selling and deciding.",
      },
      mock: { url: "flows.yourcompany.com", label: "AUTOMATION ON", title: "Work done on autopilot.", button: "See workflows" },
      badge: "Hours saved",
      intro: {
        titleBefore: "So, what is",
        titleHighlight: "process automation?",
        description:
          "It is using technology to carry out tasks that always follow the same rule: sending an appointment confirmation, notifying about a payment, registering a new customer, generating a report. Once set up, the workflow runs by itself, without anything forgotten and at the right moment.",
      },
      benefitsTitle: { before: "Why", highlight: "automate?" },
      benefits: [
        { title: "Time back", description: "Hours of manual work every week freed up for what really matters." },
        { title: "Fewer errors", description: "Automated processes do not forget, do not mistype and do not skip steps." },
        { title: "Faster service", description: "Customers get confirmations and answers right away, at any time." },
        { title: "Grow without bloating", description: "Serve more customers without growing the team at the same rate." },
      ],
      comparison: {
        withoutLabel: "All manual",
        withLabel: "With automation",
        without: {
          title: "A team stuck on repetitive tasks.",
          description:
            "Confirming appointments, chasing payments and copying data from one place to another takes up the day and leaves room for things to be forgotten.",
          points: ["Forgotten reminders", "Data typed twice", "Slow replies"],
        },
        with: {
          title: "Operations happen on their own.",
          description:
            "Notifications, confirmations and updates go out at the right time, and the team only steps in when a human touch is needed.",
          points: ["Automatic notifications", "Synced data", "Instant replies"],
        },
      },
      deliverablesTitle: { before: "What we can", highlight: "automate." },
      deliverables: [
        { tag: "SCHEDULE", title: "Confirmations and reminders", description: "Automatic appointment confirmations and reminders to reduce no-shows." },
        { tag: "FINANCE", title: "Payment notices", description: "Due-date reminders and payment confirmations sent without manual work." },
        { tag: "INTEGRATIONS", title: "Systems that talk", description: "Forms, spreadsheets, CRM and WhatsApp exchanging data automatically." },
        { tag: "REPORTS", title: "Automatic reports", description: "Business metrics generated and sent regularly, ready to read." },
      ],
      faqs: [
        { question: "What can be automated in my company?", answer: "Any task that repeats with the same rule is a candidate: confirmations, reminders, payment notices, sign-ups, sending reports and updating data between systems. In the assessment we identify the ones with the biggest return." },
        { question: "Will automation make customer service feel cold?", answer: "No. We automate the operational work so the team has more time for human service, where it really makes a difference." },
        { question: "Do I need to replace the systems I already use?", answer: "In most cases, no. Whenever possible, we integrate the tools your company already uses." },
        { question: "Can WhatsApp messages be automated without the risk of being blocked?", answer: "Yes, as long as the platform's rules are followed. For automated messages we recommend the official WhatsApp Business API, which reduces the risk of the number being blocked, and we use messages customers expect to receive, such as appointment confirmations and payment notices." },
        { question: "What if the automation fails?", answer: "We test every workflow before putting it live and set up alerts so failures are noticed quickly. If a business rule changes, the automation is adjusted." },
        { question: "Do I need someone technical on the team?", answer: "No. We handle the setup and the technical side and explain to the team, in simple terms, what each automation does." },
      ],
      cta: {
        title: "How much time does your team lose on repetitive tasks?",
        description: "Let's identify what can be automated in your company and give that time back to what brings results.",
        whatsappMessage: "Hi, FORX Digital! I want to automate tasks and processes in my company.",
      },
    },
  },

  // ==========================================
  // ESPAÑOL
  // ==========================================
  es: {
    "processos-internos": {
      menuLabel: "Procesos internos",
      menuDescription: "Rutinas, indicadores y organización",
      seo: {
        title: "Gestión de Procesos Internos para Empresas",
        description:
          "Estructuración de procesos internos, rutinas e indicadores para empresas que quieren más control, menos retrabajo y una operación preparada para crecer.",
      },
      eyebrow: "FORX DIGITAL / GESTIÓN DE PROCESOS",
      hero: {
        before: "Una empresa organizada",
        highlight: "crece con",
        after: "mucha más seguridad.",
        description:
          "Cuando cada tarea tiene responsable, plazo y estándar, el equipo deja de apagar incendios y pasa a trabajar en lo que da resultados. Estructuramos los procesos de tu empresa para que la operación funcione con claridad, incluso cuando no estás mirando.",
      },
      mock: { url: "panel.tuempresa.com", label: "OPERACIÓN DE LA SEMANA", title: "Cada etapa en su lugar.", button: "Ver indicadores" },
      badge: "Operación bajo control",
      intro: {
        titleBefore: "Al final, ¿qué es",
        titleHighlight: "la gestión de procesos?",
        description:
          "Es el trabajo de mapear cómo funciona realmente tu empresa hoy, identificar cuellos de botella y rediseñar cada rutina para que sea simple, repetible y medible. El resultado es un paso a paso claro para ventas, atención, finanzas y operación, con responsables definidos e indicadores que muestran lo que funciona.",
      },
      benefitsTitle: { before: "¿Por qué organizar", highlight: "tus procesos?" },
      benefits: [
        { title: "Menos retrabajo", description: "Las tareas estandarizadas evitan errores repetidos y decisiones tomadas desde cero cada vez." },
        { title: "Equipo alineado", description: "Todos saben qué hacer, cuándo hacerlo y quién es responsable de cada etapa." },
        { title: "Decisiones con datos", description: "Indicadores simples muestran dónde la operación gana o pierde tiempo y dinero." },
        { title: "Lista para crecer", description: "Los procesos claros permiten contratar, delegar y escalar sin perder calidad." },
      ],
      comparison: {
        withoutLabel: "Sin procesos definidos",
        withLabel: "Con procesos estructurados",
        without: {
          title: "Todo depende de que alguien se acuerde.",
          description:
            "La información queda en la cabeza de las personas, cada uno lo hace a su manera y los problemas solo aparecen cuando el cliente se queja.",
          points: ["Tareas olvidadas", "Retrabajo constante", "Dueño del negocio sobrecargado"],
        },
        with: {
          title: "Una operación que funciona sola.",
          description:
            "Cada rutina tiene estándar, responsable y plazo. Sigues los números y actúas en lo que realmente importa.",
          points: ["Rutinas estandarizadas", "Responsables definidos", "Indicadores con seguimiento"],
        },
      },
      deliverablesTitle: { before: "Lo que entregamos", highlight: "en la práctica." },
      deliverables: [
        { tag: "DIAGNÓSTICO", title: "Mapeo de la operación", description: "Entendemos cómo funciona tu empresa hoy y dónde están los cuellos de botella que frenan el crecimiento." },
        { tag: "ESTANDARIZACIÓN", title: "Flujos y rutinas", description: "Diseñamos el paso a paso de cada área, con responsables, plazos y listas de verificación." },
        { tag: "INDICADORES", title: "Panel de seguimiento", description: "Definimos los números correctos para que sigas la salud del negocio de forma simple." },
        { tag: "EVOLUCIÓN", title: "Implementación y ajustes", description: "Acompañamos al equipo en la adopción de los nuevos procesos y ajustamos lo que haga falta." },
      ],
      faqs: [
        { question: "Mi empresa es pequeña. ¿Lo necesito?", answer: "Sí, y este es el mejor momento. Organizar los procesos mientras la empresa es pequeña evita que el desorden crezca con ella y facilita cada nueva contratación." },
        { question: "¿Cómo funciona el diagnóstico?", answer: "Conversamos contigo y con las personas clave del equipo, acompañamos la rutina y mapeamos cómo se hace el trabajo hoy. Así identificamos cuellos de botella, retrabajo y tareas que dependen de una sola persona." },
        { question: "¿Tendré que parar la operación o cambiar todo de una vez?", answer: "No. Priorizamos los procesos que más impactan en el resultado e implementamos los cambios por etapas, sin interrumpir el día a día de la empresa." },
        { question: "¿Y si mi equipo se resiste a los cambios?", answer: "Es una preocupación común. Por eso involucramos al equipo desde el inicio, explicamos el porqué de cada cambio y creamos rutinas fáciles de seguir. Cuando las personas ven que el trabajo se vuelve más fácil, la adhesión llega de forma natural." },
        { question: "¿Necesito comprar algún sistema?", answer: "No siempre. Primero organizamos el proceso; después indicamos si conviene usar una herramienta, automatizar etapas o desarrollar una solución a medida." },
        { question: "¿En cuánto tiempo veo resultados?", answer: "Las primeras mejoras suelen aparecer poco después de estandarizar las rutinas principales. El plazo completo depende del tamaño de la operación y se define en el diagnóstico." },
      ],
      cta: {
        title: "¿Organizamos tu operación?",
        description: "Cuéntanos cómo funciona tu empresa hoy. Te mostramos por dónde empezar para ganar tiempo, control y previsibilidad.",
        whatsappMessage: "¡Hola, FORX Digital! Quiero organizar los procesos internos de mi empresa.",
      },
    },

    crm: {
      menuLabel: "CRM y clientes",
      menuDescription: "Atención y embudo comercial",
      seo: {
        title: "CRM para Empresas: Embudo de Ventas y Clientes",
        description:
          "Implementación de CRM y organización del embudo comercial para seguir contactos, oportunidades y clientes, sin perder ventas por falta de respuesta.",
      },
      eyebrow: "FORX DIGITAL / CRM Y RELACIÓN",
      hero: {
        before: "Ningún cliente",
        highlight: "olvidado.",
        after: "Ninguna venta perdida.",
        description:
          "Presupuestos sin respuesta y contactos dispersos en WhatsApp salen caros. Con un CRM bien implementado, sabes exactamente en qué etapa está cada cliente, quién necesita respuesta hoy y de dónde vienen tus mejores ventas.",
      },
      mock: { url: "crm.tuempresa.com", label: "EMBUDO DE VENTAS", title: "Cada oportunidad con seguimiento.", button: "Ver oportunidades" },
      badge: "Embudo organizado",
      intro: {
        titleBefore: "Al final, ¿qué es",
        titleHighlight: "un CRM?",
        description:
          "Un CRM (gestión de la relación con el cliente) es el sistema que reúne todos tus contactos, conversaciones, presupuestos y negociaciones en un solo lugar. Muestra el recorrido de cada cliente, del primer contacto al cierre, y le recuerda a tu equipo el próximo paso para que ninguna oportunidad se quede atrás.",
      },
      benefitsTitle: { before: "¿Por qué usar", highlight: "un CRM?" },
      benefits: [
        { title: "Más ventas cerradas", description: "Las respuestas en el momento justo convierten presupuestos parados en clientes." },
        { title: "Historial completo", description: "Cada conversación y negociación registrada, incluso cuando alguien deja el equipo." },
        { title: "Embudo visible", description: "Mira cuántas oportunidades hay en cada etapa y dónde se están trabando las ventas." },
        { title: "Clientes que vuelven", description: "Una posventa organizada aumenta la recompra y las recomendaciones." },
      ],
      comparison: {
        withoutLabel: "Sin CRM",
        withLabel: "Con CRM",
        without: {
          title: "Contactos perdidos en el camino.",
          description:
            "Clientes dispersos en conversaciones, hojas de cálculo y notas. Nadie sabe con certeza quién ya fue atendido o quién espera respuesta.",
          points: ["Presupuestos sin seguimiento", "Información dispersa", "Ventas que dependen de la memoria"],
        },
        with: {
          title: "Toda el área comercial en una pantalla.",
          description:
            "Cada contacto con etapa, responsable y próxima acción definida. Sigues el embudo y actúas antes de perder la venta.",
          points: ["Embudo por etapas", "Recordatorios de seguimiento", "Informes de ventas"],
        },
      },
      deliverablesTitle: { before: "Lo que entregamos", highlight: "en la práctica." },
      deliverables: [
        { tag: "EMBUDO", title: "Embudo de ventas a medida", description: "Etapas diseñadas según la forma en que vende tu empresa, del primer contacto al cierre." },
        { tag: "ORGANIZACIÓN", title: "Base de clientes unificada", description: "Organizamos en una sola base los contactos que hoy están en hojas de cálculo, agendas y conversaciones." },
        { tag: "ATENCIÓN", title: "Rutina de seguimiento", description: "Definimos cuándo y cómo responder a cada cliente, con recordatorios para el equipo." },
        { tag: "RESULTADOS", title: "Informes comerciales", description: "Tasa de conversión, origen de los clientes y desempeño del equipo de forma clara." },
      ],
      faqs: [
        { question: "¿El CRM es solo para empresas grandes?", answer: "No. Las pequeñas empresas son las que más sienten cada venta perdida. Un CRM simple y bien configurado ya organiza el área comercial desde el primer cliente." },
        { question: "Hoy uso una hoja de cálculo. ¿Cuál es la diferencia?", answer: "La hoja de cálculo guarda datos, pero no avisa cuándo responder a un cliente, no muestra en qué etapa está cada negociación y se desordena cuando varias personas la editan. El CRM organiza el embudo, registra el historial y le recuerda al equipo los próximos pasos." },
        { question: "¿Funciona con WhatsApp?", answer: "Sí. Podemos organizar la atención que llega por WhatsApp dentro del embudo, para que cada conversación se convierta en una oportunidad con seguimiento." },
        { question: "¿Puedo seguir el trabajo de cada vendedor?", answer: "Sí. Ves cuántas oportunidades tiene cada persona, en qué etapa están y cuáles están paradas, con informes que ayudan a tomar decisiones y a orientar al equipo." },
        { question: "¿Mi equipo podrá usarlo?", answer: "Sí. Configuramos solo lo que tiene sentido para tu rutina y orientamos al equipo en el uso, para que el CRM ayude y no se convierta en una tarea más." },
        { question: "¿Puedo aprovechar mi lista de clientes actual?", answer: "Sí. Ayudamos a importar y organizar los contactos que ya tienes en hojas de cálculo u otras herramientas." },
        { question: "¿Los datos de mis clientes están seguros?", answer: "Sí. Cada persona del equipo accede con su propio usuario y ve solo lo que necesita, y la organización de los datos sigue buenas prácticas de privacidad y la ley brasileña de protección de datos (LGPD)." },
      ],
      cta: {
        title: "Deja de perder clientes por falta de respuesta.",
        description: "Organicemos tu área comercial para que cada contacto tenga seguimiento hasta el cierre.",
        whatsappMessage: "¡Hola, FORX Digital! Quiero organizar mis clientes y ventas con un CRM.",
      },
    },

    automacao: {
      menuLabel: "Automatización",
      menuDescription: "Menos tareas manuales y retrabajo",
      seo: {
        title: "Automatización de Procesos y Tareas para Empresas",
        description:
          "Automatización de tareas, avisos y flujos de trabajo para empresas que quieren ganar tiempo, reducir errores y atender a los clientes con más agilidad.",
      },
      eyebrow: "FORX DIGITAL / AUTOMATIZACIÓN",
      hero: {
        before: "Deja las tareas",
        highlight: "repetitivas",
        after: "a la tecnología.",
        description:
          "Recordatorios, confirmaciones, cobros, registros e informes no tienen por qué ocupar el tiempo de tu equipo. Automatizamos lo que se repite para que las personas se enfoquen en atender bien, vender y decidir.",
      },
      mock: { url: "flujos.tuempresa.com", label: "AUTOMATIZACIÓN ACTIVA", title: "Trabajo hecho en piloto automático.", button: "Ver flujos" },
      badge: "Horas ahorradas",
      intro: {
        titleBefore: "Al final, ¿qué es",
        titleHighlight: "la automatización de procesos?",
        description:
          "Es usar la tecnología para ejecutar tareas que siempre siguen la misma regla: enviar una confirmación de cita, avisar sobre un pago, registrar un nuevo cliente, generar un informe. Una vez configurado, el flujo funciona solo, sin olvidos y en el momento justo.",
      },
      benefitsTitle: { before: "¿Por qué", highlight: "automatizar?" },
      benefits: [
        { title: "Tiempo recuperado", description: "Horas de trabajo manual por semana liberadas para lo que realmente importa." },
        { title: "Menos errores", description: "Los procesos automáticos no olvidan, no escriben mal y no se saltan etapas." },
        { title: "Atención ágil", description: "Los clientes reciben confirmaciones y respuestas al instante, en cualquier momento." },
        { title: "Crece sin inflarse", description: "Atiende a más clientes sin tener que aumentar el equipo en la misma proporción." },
      ],
      comparison: {
        withoutLabel: "Todo manual",
        withLabel: "Con automatización",
        without: {
          title: "El equipo atrapado en tareas repetitivas.",
          description:
            "Confirmar citas, cobrar pagos y copiar datos de un lugar a otro consume el día y abre espacio para olvidos.",
          points: ["Recordatorios olvidados", "Datos escritos dos veces", "Respuestas lentas"],
        },
        with: {
          title: "La operación sucede sola.",
          description:
            "Avisos, confirmaciones y actualizaciones salen en el momento justo, y el equipo solo interviene cuando hace falta un toque humano.",
          points: ["Avisos automáticos", "Datos sincronizados", "Respuesta inmediata"],
        },
      },
      deliverablesTitle: { before: "Lo que podemos", highlight: "automatizar." },
      deliverables: [
        { tag: "AGENDA", title: "Confirmaciones y recordatorios", description: "Mensajes automáticos de confirmación y recordatorio de citas para reducir las ausencias." },
        { tag: "FINANZAS", title: "Avisos de cobro", description: "Recordatorios de vencimiento y confirmación de pago enviados sin intervención manual." },
        { tag: "INTEGRACIONES", title: "Sistemas conectados", description: "Formularios, hojas de cálculo, CRM y WhatsApp intercambiando datos automáticamente." },
        { tag: "INFORMES", title: "Informes automáticos", description: "Indicadores del negocio generados y enviados periódicamente, listos para leer." },
      ],
      faqs: [
        { question: "¿Qué se puede automatizar en mi empresa?", answer: "Toda tarea que se repite con la misma regla es candidata: confirmaciones, recordatorios, cobros, registros, envío de informes y actualización de datos entre sistemas. En el diagnóstico identificamos las que dan más retorno." },
        { question: "¿La automatización va a enfriar la atención?", answer: "No. Automatizamos lo operativo para que el equipo tenga más tiempo para la atención humana, donde realmente marca la diferencia." },
        { question: "¿Tengo que cambiar los sistemas que ya uso?", answer: "En la mayoría de los casos, no. Siempre que es posible, integramos las herramientas que tu empresa ya utiliza." },
        { question: "¿Se pueden automatizar mensajes de WhatsApp sin riesgo de bloqueo?", answer: "Sí, siempre que se respeten las reglas de la plataforma. Para envíos automáticos recomendamos la API oficial de WhatsApp Business, que reduce el riesgo de bloqueo del número, y usamos mensajes que el cliente espera recibir, como confirmaciones de cita y avisos de pago." },
        { question: "¿Y si la automatización falla?", answer: "Probamos cada flujo antes de ponerlo en marcha y configuramos alertas para que los fallos se detecten rápido. Si cambia una regla del negocio, la automatización se ajusta." },
        { question: "¿Necesito a alguien técnico en el equipo?", answer: "No. Nos encargamos de la configuración y de la parte técnica, y le explicamos al equipo de forma sencilla qué hace cada automatización." },
      ],
      cta: {
        title: "¿Cuánto tiempo pierde tu equipo en tareas repetitivas?",
        description: "Identifiquemos qué se puede automatizar en tu empresa y devolvamos ese tiempo a lo que da resultados.",
        whatsappMessage: "¡Hola, FORX Digital! Quiero automatizar tareas y procesos de mi empresa.",
      },
    },
  },
};

const slugs: GestaoSlug[] = ["processos-internos", "crm", "automacao"];

function build(slug: GestaoSlug, page: PageText): GestaoContent {
  const b = base[slug];
  return {
    ...page,
    slug,
    href: b.href,
    icon: b.icon,
    benefits: page.benefits.map((item, i) => ({ ...item, icon: b.benefitIcons[i] })),
    deliverables: page.deliverables.map((item, i) => ({ ...item, icon: b.deliverableIcons[i] })),
  };
}

/** Páginas de gestão em cada idioma. */
export const gestaoPages = Object.fromEntries(
  locales.map((lang) => [
    lang,
    Object.fromEntries(slugs.map((slug) => [slug, build(slug, text[lang][slug])])),
  ])
) as Dict<Record<GestaoSlug, GestaoContent>>;

export const gestaoList = Object.fromEntries(
  locales.map((lang) => [lang, slugs.map((slug) => gestaoPages[lang][slug])])
) as Dict<GestaoContent[]>;
