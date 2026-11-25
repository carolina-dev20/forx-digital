"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { whatsappUrl, type Dict } from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { useHref, useLang } from "./LangProvider";

type MenuKey = "servicos" | "gestao" | "cases" | "sistema";

type MenuLink = {
  label: string;
  href: string;
  description?: string;
};

type MenuSection = {
  title: string;
  subtitle: string;
  links: MenuLink[];
};

// LINK DE LOGIN DA PLATAFORMA (forx-platform)
const platformLoginLink = `${
  process.env.NEXT_PUBLIC_PLATFORM_URL ?? "https://app.forxdigital.com.br"
}/login`;

const UI: Dict<{
  whatsapp: string;
  nav: string;
  pricing: string;
  login: string;
  start: string;
  openMenu: string;
  closeMenu: string;
  see: (label: string) => string;
}> = {
  pt: {
    whatsapp: "Olá! Vim pela página da FORX Digital e gostaria de iniciar um projeto.",
    nav: "Navegação principal",
    pricing: "Preços e Planos",
    login: "Entrar",
    start: "Iniciar projeto",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    see: (label) => `Ver ${label.toLowerCase()}`,
  },
  en: {
    whatsapp: "Hi! I found the FORX Digital website and I would like to start a project.",
    nav: "Main navigation",
    pricing: "Pricing",
    login: "Log in",
    start: "Start a project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    see: (label) => `See ${label.toLowerCase()}`,
  },
  es: {
    whatsapp: "¡Hola! Vi el sitio de FORX Digital y me gustaría iniciar un proyecto.",
    nav: "Navegación principal",
    pricing: "Precios y Planes",
    login: "Entrar",
    start: "Iniciar proyecto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    see: (label) => `Ver ${label.toLowerCase()}`,
  },
};

const MENU: Dict<Record<MenuKey, MenuSection>> = {
  pt: {
    servicos: {
      title: "O que podemos fazer pelo seu negócio",
      subtitle: "Tecnologia e estratégia para crescer no digital.",
      links: [
        { label: "Criação de sites", href: "/criacao-de-sites", description: "Sites institucionais e landing pages" },
        { label: "Desenvolvimento de software", href: "/#desenvolvimento-software", description: "Plataformas e sistemas sob medida" },
        { label: "Marketing e tráfego pago", href: "/#marketing-digital", description: "Google Ads, Meta Ads e SEO local" },
        { label: "Presença no Google", href: "/#presenca-google", description: "Mais visibilidade nas pesquisas" },
      ],
    },
    gestao: {
      title: "Gestão que organiza sua operação",
      subtitle: "Processos, clientes e automações trabalhando a seu favor.",
      links: [
        { label: "Processos internos", href: "/gestao/processos-internos", description: "Rotinas, indicadores e organização" },
        { label: "CRM e clientes", href: "/gestao/crm", description: "Atendimento e funil comercial" },
        { label: "Automação", href: "/gestao/automacao", description: "Menos tarefas manuais e retrabalho" },
        { label: "Fale com a FORX", href: "/#contato", description: "Vamos entender o seu desafio" },
      ],
    },
    cases: {
      title: "Projetos que ganham vida",
      subtitle: "Conheça alguns dos nossos trabalhos.",
      links: [
        { label: "Cleide Beauty Salão", href: "/cases#cleide-beauty-salao", description: "Site para salão de beleza" },
        { label: "Larissa Barbosa", href: "/cases#larissa-barbosa", description: "Presença digital para profissional da beleza" },
        { label: "Todos os cases", href: "/cases", description: "Explore nosso portfólio" },
      ],
    },
    sistema: {
      title: "Sistema FORX",
      subtitle: "Agenda online e lembretes automáticos no WhatsApp.",
      links: [
        { label: "Visão geral", href: "/sistema-forx", description: "Para negócios com horário marcado" },
        { label: "Como funciona", href: "/sistema-forx#como-funciona", description: "Agenda pelo link, aprovação e lembrete" },
        { label: "Fale com a FORX", href: "/#contato", description: "Peça uma demonstração do sistema" },
      ],
    },
  },
  en: {
    servicos: {
      title: "What we can do for your business",
      subtitle: "Technology and strategy to grow online.",
      links: [
        { label: "Website design", href: "/criacao-de-sites", description: "Business websites and landing pages" },
        { label: "Software development", href: "/#desenvolvimento-software", description: "Custom platforms and systems" },
        { label: "Marketing and paid ads", href: "/#marketing-digital", description: "Google Ads, Meta Ads and local SEO" },
        { label: "Google presence", href: "/#presenca-google", description: "More visibility in searches" },
      ],
    },
    gestao: {
      title: "Management that organizes your operation",
      subtitle: "Processes, customers and automations working for you.",
      links: [
        { label: "Internal processes", href: "/gestao/processos-internos", description: "Routines, metrics and organization" },
        { label: "CRM and customers", href: "/gestao/crm", description: "Customer service and sales pipeline" },
        { label: "Automation", href: "/gestao/automacao", description: "Fewer manual tasks and less rework" },
        { label: "Talk to FORX", href: "/#contato", description: "Tell us about your challenge" },
      ],
    },
    cases: {
      title: "Projects brought to life",
      subtitle: "See some of our work.",
      links: [
        { label: "Cleide Beauty Salão", href: "/cases#cleide-beauty-salao", description: "Website for a beauty salon" },
        { label: "Larissa Barbosa", href: "/cases#larissa-barbosa", description: "Online presence for a beauty professional" },
        { label: "All case studies", href: "/cases", description: "Explore our portfolio" },
      ],
    },
    sistema: {
      title: "FORX System",
      subtitle: "Online booking and automatic WhatsApp reminders.",
      links: [
        { label: "Overview", href: "/sistema-forx", description: "For appointment-based businesses" },
        { label: "How it works", href: "/sistema-forx#como-funciona", description: "Booking link, approval and reminder" },
        { label: "Talk to FORX", href: "/#contato", description: "Ask for a demo of the system" },
      ],
    },
  },
  es: {
    servicos: {
      title: "Lo que podemos hacer por tu negocio",
      subtitle: "Tecnología y estrategia para crecer en digital.",
      links: [
        { label: "Creación de sitios web", href: "/criacao-de-sites", description: "Sitios institucionales y landing pages" },
        { label: "Desarrollo de software", href: "/#desenvolvimento-software", description: "Plataformas y sistemas a medida" },
        { label: "Marketing y publicidad pagada", href: "/#marketing-digital", description: "Google Ads, Meta Ads y SEO local" },
        { label: "Presencia en Google", href: "/#presenca-google", description: "Más visibilidad en las búsquedas" },
      ],
    },
    gestao: {
      title: "Gestión que organiza tu operación",
      subtitle: "Procesos, clientes y automatizaciones trabajando a tu favor.",
      links: [
        { label: "Procesos internos", href: "/gestao/processos-internos", description: "Rutinas, indicadores y organización" },
        { label: "CRM y clientes", href: "/gestao/crm", description: "Atención y embudo comercial" },
        { label: "Automatización", href: "/gestao/automacao", description: "Menos tareas manuales y retrabajo" },
        { label: "Habla con FORX", href: "/#contato", description: "Cuéntanos tu desafío" },
      ],
    },
    cases: {
      title: "Proyectos que cobran vida",
      subtitle: "Conoce algunos de nuestros trabajos.",
      links: [
        { label: "Cleide Beauty Salão", href: "/cases#cleide-beauty-salao", description: "Sitio web para salón de belleza" },
        { label: "Larissa Barbosa", href: "/cases#larissa-barbosa", description: "Presencia digital para profesional de la belleza" },
        { label: "Todos los casos", href: "/cases", description: "Explora nuestro portafolio" },
      ],
    },
    sistema: {
      title: "Sistema FORX",
      subtitle: "Agenda online y recordatorios automáticos por WhatsApp.",
      links: [
        { label: "Visión general", href: "/sistema-forx", description: "Para negocios con cita previa" },
        { label: "Cómo funciona", href: "/sistema-forx#como-funciona", description: "Agenda por enlace, aprobación y recordatorio" },
        { label: "Habla con FORX", href: "/#contato", description: "Pide una demostración del sistema" },
      ],
    },
  },
};

const ITEMS: Dict<{ key: MenuKey; label: string; href: string }[]> = {
  pt: [
    { key: "servicos", label: "Serviços", href: "/#servicos" },
    { key: "gestao", label: "Gestão", href: "/#gestao-processos" },
    { key: "cases", label: "Cases", href: "/cases" },
    { key: "sistema", label: "Sistema FORX", href: "/sistema-forx" },
  ],
  en: [
    { key: "servicos", label: "Services", href: "/#servicos" },
    { key: "gestao", label: "Management", href: "/#gestao-processos" },
    { key: "cases", label: "Case studies", href: "/cases" },
    { key: "sistema", label: "FORX System", href: "/sistema-forx" },
  ],
  es: [
    { key: "servicos", label: "Servicios", href: "/#servicos" },
    { key: "gestao", label: "Gestión", href: "/#gestao-processos" },
    { key: "cases", label: "Casos", href: "/cases" },
    { key: "sistema", label: "Sistema FORX", href: "/sistema-forx" },
  ],
};

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);

  const headerRef = useRef<HTMLElement>(null);

  const lang = useLang();
  const href = useHref();
  const t = UI[lang];
  const menuData = MENU[lang];
  const menuItems = ITEMS[lang];
  const whatsappLink = whatsappUrl(t.whatsapp);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
        setMobileSection(null);
      }
    }

    function handleOutsideClick(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function closeMenus() {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setActiveMenu(null)}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#080808] text-white"
    >
      <div className="mx-auto flex h-[82px] max-w-[1400px] items-center justify-between px-6 md:px-10 lg:px-16">

        {/* LOGO */}
        <Link
          href={href("/#inicio")}
          onClick={closeMenus}
          className="shrink-0 text-[24px] font-bold tracking-[-0.07em]"
        >
          FORX
          <span className="ml-1 text-[15px] font-medium tracking-normal text-white/60">
            Digital
          </span>
          <span className="text-[#7942E8]">.</span>
        </Link>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav
          aria-label={t.nav}
          className="hidden items-center gap-9 lg:flex"
        >
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={href(item.href)}
              aria-expanded={activeMenu === item.key}
              aria-controls="forx-mega-menu"
              onMouseEnter={() => setActiveMenu(item.key)}
              onFocus={() => setActiveMenu(item.key)}
              onClick={closeMenus}
              className={`group relative flex items-center gap-1.5 py-7 text-sm font-medium transition-colors duration-200 ${
                activeMenu === item.key
                  ? "text-white"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {item.label}

              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  activeMenu === item.key
                    ? "rotate-180 text-[#B99AFF]"
                    : ""
                }`}
              />

              <span
                className={`absolute bottom-4 left-0 h-[2px] bg-[#7942E8] transition-all duration-300 ${
                  activeMenu === item.key
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* PREÇOS E PLANOS */}
          <Link
            href={href("/precos")}
            onMouseEnter={() => setActiveMenu(null)}
            onFocus={() => setActiveMenu(null)}
            onClick={closeMenus}
            className="py-7 text-sm font-medium text-white/55 transition-colors duration-200 hover:text-white"
          >
            {t.pricing}
          </Link>
        </nav>

        {/* AÇÕES DESKTOP - ENTRAR + WHATSAPP */}
        <div
          onMouseEnter={() => setActiveMenu(null)}
          className="hidden items-center gap-5 lg:flex"
        >
          <LanguageSwitcher />

          <a
            href={platformLoginLink}
            className="text-sm font-medium text-white/55 transition-colors duration-200 hover:text-white"
          >
            {t.login}
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium transition-all hover:border-[#7942E8] hover:bg-[#7942E8]"
          >
            {t.start}
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          aria-label={mobileOpen ? t.closeMenu : t.openMenu}
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((current) => !current);
            setActiveMenu(null);
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 lg:hidden"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* MEGA MENU DESKTOP */}
      <AnimatePresence mode="wait">
        {activeMenu && (
          <motion.div
            id="forx-mega-menu"
            key={activeMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="absolute left-0 right-0 top-full hidden border-b border-black/10 bg-white text-[#151515] shadow-[0_25px_55px_rgba(0,0,0,0.12)] lg:block"
          >
            <div className="mx-auto grid max-w-[1400px] gap-12 px-10 py-11 lg:grid-cols-[0.85fr_2fr] lg:px-16">

              {/* DESCRIÇÃO */}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3b0764]">
                  FORX DIGITAL / EXPLORE
                </span>

                <h3 className="mt-5 max-w-[300px] text-[24px] font-medium leading-[1.2] tracking-[-0.04em]">
                  {menuData[activeMenu].title}
                </h3>

                <p className="mt-4 max-w-[300px] text-sm leading-7 text-black/45">
                  {menuData[activeMenu].subtitle}
                </p>
              </div>

              {/* LINKS HORIZONTAIS */}
              <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
                {menuData[activeMenu].links.map((link, index) => (
                  <motion.div
                    key={`${activeMenu}-${link.label}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.045,
                    }}
                  >
                  <Link
                    href={href(link.href)}
                    onClick={closeMenus}
                    className="group flex h-full min-h-[150px] flex-col justify-between rounded-[20px] border border-black/10 bg-[#F7F7F7] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#3b0764]/35 hover:bg-[#3b0764]/[0.06]"
                  >
                    <ArrowUpRight
                      size={20}
                      className="ml-auto text-black/35 transition-colors group-hover:text-[#3b0764]"
                    />

                    <div>
                      <h4 className="text-[15px] font-semibold tracking-[-0.025em]">
                        {link.label}
                      </h4>

                      {link.description && (
                        <p className="mt-2 text-xs leading-5 text-black/45">
                          {link.description}
                        </p>
                      )}
                    </div>
                  </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="max-h-[calc(100dvh-82px)] overflow-y-auto border-t border-white/10 bg-[#101010] lg:hidden"
          >
            <div className="px-6 py-6">

              {menuItems.map((item) => {
                const isOpen = mobileSection === item.key;

                return (
                  <div
                    key={item.key}
                    className="border-b border-white/10"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setMobileSection(isOpen ? null : item.key)
                      }
                      className="flex w-full items-center justify-between py-5 text-left text-lg"
                    >
                      {item.label}

                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          isOpen
                            ? "rotate-180 text-[#B99AFF]"
                            : "text-white/50"
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-2 pb-5">
                            <Link
                              href={href(item.href)}
                              onClick={closeMenus}
                              className="flex items-center justify-between rounded-xl border border-[#7942E8]/40 px-4 py-4 text-sm font-medium text-white"
                            >
                              {t.see(item.label)}
                              <ArrowUpRight
                                size={15}
                                className="text-[#B99AFF]"
                              />
                            </Link>

                            {menuData[item.key].links.map((link) => (
                              <Link
                                key={link.label}
                                href={href(link.href)}
                                onClick={closeMenus}
                                className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-4 text-sm text-white/75"
                              >
                                {link.label}
                                <ArrowUpRight
                                  size={15}
                                  className="text-[#B99AFF]"
                                />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* PREÇOS E PLANOS MOBILE */}
              <Link
                href={href("/precos")}
                onClick={closeMenus}
                className="flex items-center justify-between border-b border-white/10 py-5 text-lg text-white"
              >
                {t.pricing}
                <ArrowUpRight
                  size={18}
                  className="text-[#B99AFF]"
                />
              </Link>

              {/* IDIOMA MOBILE */}
              <LanguageSwitcher
                variant="inline"
                onNavigate={closeMenus}
                className="border-b border-white/10 py-4 text-sm"
              />

              {/* ENTRAR MOBILE */}
              <a
                href={platformLoginLink}
                onClick={closeMenus}
                className="flex items-center justify-between border-b border-white/10 py-5 text-lg text-white"
              >
                {t.login}
                <ArrowUpRight
                  size={18}
                  className="text-[#B99AFF]"
                />
              </a>

              {/* CTA MOBILE - WHATSAPP */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenus}
                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-[#7942E8] px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-[#6934D4]"
              >
                {t.start}
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}