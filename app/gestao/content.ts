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

export const gestaoPages: Record<GestaoSlug, GestaoContent> = {
  "processos-internos": {
    slug: "processos-internos",
    href: "/gestao/processos-internos",
    menuLabel: "Processos internos",
    menuDescription: "Rotinas, indicadores e organização",
    icon: BriefcaseBusiness,
    seo: {
      title: "Gestão de Processos Internos",
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
    mock: {
      url: "painel.suaempresa.com.br",
      label: "OPERAÇÃO DA SEMANA",
      title: "Cada etapa no lugar certo.",
      button: "Ver indicadores",
    },
    badge: "Operação sob controle",
    intro: {
      titleBefore: "Afinal, o que é",
      titleHighlight: "gestão de processos?",
      description:
        "É o trabalho de mapear como sua empresa realmente funciona hoje, identificar gargalos e redesenhar cada rotina para que ela seja simples, repetível e mensurável. O resultado é um passo a passo claro para vendas, atendimento, financeiro e operação, com responsáveis definidos e indicadores que mostram o que está funcionando.",
    },
    benefitsTitle: { before: "Por que organizar", highlight: "seus processos?" },
    benefits: [
      {
        icon: Clock,
        title: "Menos retrabalho",
        description: "Tarefas padronizadas evitam erros repetidos e decisões tomadas do zero toda vez.",
      },
      {
        icon: Users,
        title: "Equipe alinhada",
        description: "Todos sabem o que fazer, quando fazer e quem é o responsável por cada etapa.",
      },
      {
        icon: Gauge,
        title: "Decisões com dados",
        description: "Indicadores simples mostram onde a operação ganha ou perde tempo e dinheiro.",
      },
      {
        icon: TrendingUp,
        title: "Pronta para crescer",
        description: "Processos claros permitem contratar, delegar e escalar sem perder a qualidade.",
      },
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
      {
        icon: ClipboardCheck,
        tag: "DIAGNÓSTICO",
        title: "Mapeamento da operação",
        description: "Entendemos como sua empresa funciona hoje e onde estão os gargalos que travam o crescimento.",
      },
      {
        icon: ListChecks,
        tag: "PADRONIZAÇÃO",
        title: "Fluxos e rotinas",
        description: "Desenhamos o passo a passo de cada área, com responsáveis, prazos e checklists.",
      },
      {
        icon: BarChart3,
        tag: "INDICADORES",
        title: "Painel de acompanhamento",
        description: "Definimos os números certos para você acompanhar a saúde do negócio de forma simples.",
      },
      {
        icon: Workflow,
        tag: "EVOLUÇÃO",
        title: "Implantação e ajustes",
        description: "Acompanhamos a equipe na adoção dos novos processos e ajustamos o que for preciso.",
      },
    ],
    faqs: [
      {
        question: "Minha empresa é pequena. Preciso disso?",
        answer:
          "Sim, e esse é o melhor momento. Organizar os processos enquanto a empresa é pequena evita que a bagunça cresça junto com ela e facilita cada nova contratação.",
      },
      {
        question: "Como funciona o diagnóstico?",
        answer:
          "Conversamos com você e com as pessoas-chave da equipe, acompanhamos a rotina e mapeamos como o trabalho acontece hoje. Com isso, identificamos gargalos, retrabalho e tarefas que dependem de uma só pessoa.",
      },
      {
        question: "Vou precisar parar a operação ou mudar tudo de uma vez?",
        answer:
          "Não. Priorizamos os processos que mais impactam o resultado e implantamos as mudanças por etapas, sem interromper o dia a dia da empresa.",
      },
      {
        question: "E se a minha equipe resistir às mudanças?",
        answer:
          "É uma preocupação comum. Por isso envolvemos a equipe desde o início, explicamos o porquê de cada mudança e criamos rotinas simples de seguir. Quando as pessoas percebem que o trabalho fica mais fácil, a adesão vem naturalmente.",
      },
      {
        question: "Preciso comprar algum sistema?",
        answer:
          "Nem sempre. Primeiro organizamos o processo; depois indicamos se vale usar uma ferramenta, automatizar etapas ou desenvolver uma solução sob medida.",
      },
      {
        question: "Em quanto tempo vejo resultado?",
        answer:
          "As primeiras melhorias costumam aparecer logo após a padronização das rotinas principais. O prazo completo depende do tamanho da operação e é definido no diagnóstico.",
      },
    ],
    cta: {
      title: "Vamos organizar a sua operação?",
      description:
        "Conte como sua empresa funciona hoje. Nós mostramos por onde começar para ganhar tempo, controle e previsibilidade.",
      whatsappMessage: "Olá, FORX Digital! Quero organizar os processos internos da minha empresa.",
    },
  },

  crm: {
    slug: "crm",
    href: "/gestao/crm",
    menuLabel: "CRM e clientes",
    menuDescription: "Atendimento e funil comercial",
    icon: Users,
    seo: {
      title: "CRM e Relacionamento com Clientes",
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
    mock: {
      url: "crm.suaempresa.com.br",
      label: "FUNIL DE VENDAS",
      title: "Cada oportunidade acompanhada.",
      button: "Ver oportunidades",
    },
    badge: "Funil organizado",
    intro: {
      titleBefore: "Afinal, o que é",
      titleHighlight: "um CRM?",
      description:
        "CRM (gestão do relacionamento com o cliente) é o sistema que reúne todos os seus contatos, conversas, orçamentos e negociações em um só lugar. Ele mostra o caminho de cada cliente, do primeiro contato ao fechamento, e lembra sua equipe do próximo passo para que nenhuma oportunidade fique para trás.",
    },
    benefitsTitle: { before: "Por que usar", highlight: "um CRM?" },
    benefits: [
      {
        icon: Target,
        title: "Mais vendas fechadas",
        description: "Retornos no momento certo transformam orçamentos parados em clientes.",
      },
      {
        icon: History,
        title: "Histórico completo",
        description: "Toda conversa e negociação registrada, mesmo quando alguém sai da equipe.",
      },
      {
        icon: Filter,
        title: "Funil visível",
        description: "Veja quantas oportunidades há em cada etapa e onde as vendas estão travando.",
      },
      {
        icon: Handshake,
        title: "Clientes que voltam",
        description: "Pós-venda organizado aumenta a recompra e as indicações.",
      },
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
      {
        icon: Filter,
        tag: "FUNIL",
        title: "Funil de vendas sob medida",
        description: "Etapas desenhadas para o jeito que a sua empresa vende, do primeiro contato ao fechamento.",
      },
      {
        icon: FileSpreadsheet,
        tag: "ORGANIZAÇÃO",
        title: "Base de clientes unificada",
        description: "Organizamos contatos que hoje estão em planilhas, agendas e conversas em uma base única.",
      },
      {
        icon: MessageCircle,
        tag: "ATENDIMENTO",
        title: "Rotina de follow-up",
        description: "Definimos quando e como retornar a cada cliente, com lembretes para a equipe.",
      },
      {
        icon: BarChart3,
        tag: "RESULTADOS",
        title: "Relatórios comerciais",
        description: "Taxa de conversão, origem dos clientes e desempenho da equipe de forma clara.",
      },
    ],
    faqs: [
      {
        question: "CRM é só para empresas grandes?",
        answer:
          "Não. Pequenas empresas são as que mais sentem cada venda perdida. Um CRM simples e bem configurado já organiza o comercial desde o primeiro cliente.",
      },
      {
        question: "Hoje uso planilha. Qual a diferença?",
        answer:
          "A planilha guarda dados, mas não avisa quando é hora de retornar um cliente, não mostra em que etapa está cada negociação e se perde quando várias pessoas mexem nela. O CRM organiza o funil, registra o histórico e lembra a equipe dos próximos passos.",
      },
      {
        question: "Funciona com o WhatsApp?",
        answer:
          "Sim. Podemos organizar o atendimento que chega pelo WhatsApp dentro do funil, para que cada conversa vire uma oportunidade acompanhada.",
      },
      {
        question: "Consigo acompanhar o trabalho de cada vendedor?",
        answer:
          "Sim. Você vê quantas oportunidades cada pessoa tem, em que etapa estão e quais estão paradas, com relatórios que ajudam a tomar decisões e a orientar a equipe.",
      },
      {
        question: "Minha equipe vai conseguir usar?",
        answer:
          "Sim. Configuramos apenas o que faz sentido para sua rotina e orientamos a equipe no uso, para que o CRM ajude e não vire mais uma tarefa.",
      },
      {
        question: "Posso aproveitar minha lista de clientes atual?",
        answer:
          "Sim. Ajudamos a importar e organizar os contatos que você já tem em planilhas ou outras ferramentas.",
      },
      {
        question: "Os dados dos meus clientes ficam seguros?",
        answer:
          "Sim. Cada pessoa da equipe acessa com o próprio usuário e vê apenas o que precisa, e a organização dos dados segue boas práticas de privacidade e da LGPD.",
      },
    ],
    cta: {
      title: "Pare de perder clientes por falta de retorno.",
      description:
        "Vamos organizar seu comercial para que cada contato seja acompanhado até o fechamento.",
      whatsappMessage: "Olá, FORX Digital! Quero organizar meus clientes e vendas com um CRM.",
    },
  },

  automacao: {
    slug: "automacao",
    href: "/gestao/automacao",
    menuLabel: "Automação",
    menuDescription: "Menos tarefas manuais e retrabalho",
    icon: Workflow,
    seo: {
      title: "Automação de Processos",
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
    mock: {
      url: "fluxos.suaempresa.com.br",
      label: "AUTOMAÇÃO ATIVA",
      title: "Trabalho feito no piloto automático.",
      button: "Ver fluxos",
    },
    badge: "Horas economizadas",
    intro: {
      titleBefore: "Afinal, o que é",
      titleHighlight: "automação de processos?",
      description:
        "É usar a tecnologia para executar tarefas que seguem sempre a mesma regra: enviar uma confirmação de horário, avisar sobre um pagamento, cadastrar um novo cliente, gerar um relatório. Uma vez configurado, o fluxo roda sozinho, sem esquecimentos e no momento certo.",
    },
    benefitsTitle: { before: "Por que", highlight: "automatizar?" },
    benefits: [
      {
        icon: Clock,
        title: "Tempo de volta",
        description: "Horas de trabalho manual por semana liberadas para o que realmente importa.",
      },
      {
        icon: ClipboardCheck,
        title: "Menos erros",
        description: "Processos automáticos não esquecem, não digitam errado e não pulam etapas.",
      },
      {
        icon: BellRing,
        title: "Atendimento ágil",
        description: "Clientes recebem confirmações e respostas na hora, a qualquer momento.",
      },
      {
        icon: TrendingUp,
        title: "Cresce sem inchar",
        description: "Atenda mais clientes sem precisar aumentar a equipe na mesma proporção.",
      },
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
      {
        icon: CalendarClock,
        tag: "AGENDA",
        title: "Confirmações e lembretes",
        description: "Mensagens automáticas de confirmação e lembrete de horários para reduzir faltas.",
      },
      {
        icon: BellRing,
        tag: "FINANCEIRO",
        title: "Avisos de cobrança",
        description: "Lembretes de vencimento e confirmação de pagamento enviados sem intervenção manual.",
      },
      {
        icon: Repeat,
        tag: "INTEGRAÇÕES",
        title: "Sistemas conversando",
        description: "Formulários, planilhas, CRM e WhatsApp trocando dados automaticamente.",
      },
      {
        icon: BarChart3,
        tag: "RELATÓRIOS",
        title: "Relatórios automáticos",
        description: "Indicadores do negócio gerados e enviados periodicamente, prontos para leitura.",
      },
    ],
    faqs: [
      {
        question: "O que dá para automatizar na minha empresa?",
        answer:
          "Toda tarefa que se repete com a mesma regra é candidata: confirmações, lembretes, cobranças, cadastros, envio de relatórios e atualização de dados entre sistemas. No diagnóstico identificamos as que trazem mais retorno.",
      },
      {
        question: "A automação vai deixar o atendimento frio?",
        answer:
          "Não. Automatizamos o operacional para que a equipe tenha mais tempo para o atendimento humano, onde ele realmente faz diferença.",
      },
      {
        question: "Preciso trocar os sistemas que já uso?",
        answer:
          "Na maioria dos casos, não. Sempre que possível, integramos as ferramentas que sua empresa já utiliza.",
      },
      {
        question: "É possível automatizar mensagens no WhatsApp sem risco de bloqueio?",
        answer:
          "Sim, desde que dentro das regras da plataforma. Para envios automáticos recomendamos a API oficial do WhatsApp Business, que reduz o risco de bloqueio do número, e usamos mensagens que o cliente espera receber, como confirmações de horário e avisos de pagamento.",
      },
      {
        question: "E se a automação der erro?",
        answer:
          "Testamos cada fluxo antes de colocá-lo em funcionamento e configuramos avisos para que falhas sejam percebidas rapidamente. Se uma regra do negócio mudar, a automação é ajustada.",
      },
      {
        question: "Preciso ter alguém técnico na equipe?",
        answer:
          "Não. Cuidamos da configuração e da parte técnica e explicamos para a equipe o que cada automação faz, de forma simples.",
      },
    ],
    cta: {
      title: "Quanto tempo sua equipe perde com tarefas repetitivas?",
      description:
        "Vamos identificar o que pode ser automatizado na sua empresa e devolver esse tempo para o que gera resultado.",
      whatsappMessage: "Olá, FORX Digital! Quero automatizar tarefas e processos da minha empresa.",
    },
  },
};

export const gestaoList = Object.values(gestaoPages);
