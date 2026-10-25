
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

type MenuKey = "servicos" | "projetos" | "processo" | "sobre";

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

const menuData: Record<MenuKey, MenuSection> = {
  servicos: {
    title: "O que podemos criar para você",
    subtitle: "Soluções digitais para transformar sua presença online.",
    links: [
      {
        label: "Criação de sites",
        href: "#servicos",
        description: "Sites institucionais modernos",
      },
      {
        label: "Landing pages",
        href: "#servicos",
        description: "Páginas focadas em conversão",
      },
      {
        label: "SEO & Google",
        href: "#presenca-google",
        description: "Mais visibilidade nas pesquisas",
      },
      {
        label: "Presença digital",
        href: "#presenca-google",
        description: "Sua empresa mais fácil de encontrar",
      },
    ],
  },

  projetos: {
    title: "Projetos que ganham vida",
    subtitle: "Conheça alguns dos nossos trabalhos.",
    links: [
      {
        label: "Cleide Beauty Salão",
        href: "#portfolio",
        description: "Site para salão de beleza",
      },
      {
        label: "Eliane Queiroz Nails",
        href: "#portfolio",
        description: "Experiência digital premium",
      },
      {
        label: "Todos os projetos",
        href: "#portfolio",
        description: "Explore nosso portfólio",
      },
    ],
  },

  processo: {
    title: "Da ideia ao lançamento",
    subtitle: "Um processo claro em cada etapa.",
    links: [
      {
        label: "01. Briefing",
        href: "#processo",
        description: "Entendemos seu negócio",
      },
      {
        label: "02. Design",
        href: "#processo",
        description: "Criamos a experiência visual",
      },
      {
        label: "03. Desenvolvimento",
        href: "#processo",
        description: "Transformamos o projeto em site",
      },
      {
        label: "04. Lançamento",
        href: "#processo",
        description: "Colocamos sua marca no ar",
      },
    ],
  },

  sobre: {
    title: "Conheça a FORX Digital",
    subtitle: "Criatividade, tecnologia e estratégia.",
    links: [
      {
        label: "Nossa agência",
        href: "#sobre",
        description: "Quem somos",
      },
      {
        label: "Nossos diferenciais",
        href: "#diferenciais",
        description: "O que torna cada projeto único",
      },
      {
        label: "Fale com a FORX",
        href: "#contato",
        description: "Vamos conversar sobre sua ideia",
      },
    ],
  },
};

const menuItems: { key: MenuKey; label: string }[] = [
  { key: "servicos", label: "Serviços" },
  { key: "projetos", label: "Projetos" },
  { key: "processo", label: "Processo" },
  { key: "sobre", label: "Sobre" },
];

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(
    null
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] =
    useState<MenuKey | null>(null);

  const headerRef = useRef<HTMLElement>(null);

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
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
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
        <a
          href="#inicio"
          onClick={closeMenus}
          className="shrink-0 text-[24px] font-bold tracking-[-0.07em]"
        >
          FORX
          <span className="ml-1 text-[15px] font-medium tracking-normal text-white/60">
            Digital
          </span>
          <span className="text-[#7942E8]">.</span>
        </a>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-9 lg:flex"
        >
          {menuItems.map((item) => (
            <button
              key={item.key}
              type="button"
              aria-expanded={activeMenu === item.key}
              aria-controls="forx-mega-menu"
              onMouseEnter={() => setActiveMenu(item.key)}
              onFocus={() => setActiveMenu(item.key)}
              onClick={() =>
                setActiveMenu((current) =>
                  current === item.key ? null : item.key
                )
              }
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
            </button>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <a
          href="#contato"
          onMouseEnter={() => setActiveMenu(null)}
          className="hidden items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium transition-all hover:border-[#7942E8] hover:bg-[#7942E8] lg:inline-flex"
        >
          Iniciar projeto
          <ArrowUpRight size={16} />
        </a>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
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
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7942E8]">
                  FORX DIGITAL / EXPLORE
                </span>

                <h3 className="mt-5 max-w-[300px] text-[30px] font-medium leading-[1.15] tracking-[-0.05em]">
                  {menuData[activeMenu].title}
                </h3>

                <p className="mt-4 max-w-[300px] text-sm leading-7 text-black/45">
                  {menuData[activeMenu].subtitle}
                </p>
              </div>

              {/* LINKS HORIZONTAIS */}
              <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
                {menuData[activeMenu].links.map((link, index) => (
                  <motion.a
                    key={`${activeMenu}-${link.label}`}
                    href={link.href}
                    onClick={closeMenus}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.045,
                    }}
                    className="group flex min-h-[150px] flex-col justify-between rounded-[20px] border border-black/10 bg-[#F7F7F7] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#7942E8]/35 hover:bg-[#F1ECFF]"
                  >
                    <ArrowUpRight
                      size={20}
                      className="ml-auto text-black/35 transition-colors group-hover:text-[#7942E8]"
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
                  </motion.a>
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
                        setMobileSection(
                          isOpen ? null : item.key
                        )
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
                            {menuData[item.key].links.map(
                              (link) => (
                                <a
                                  key={link.label}
                                  href={link.href}
                                  onClick={closeMenus}
                                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-4 text-sm text-white/75"
                                >
                                  {link.label}
                                  <ArrowUpRight
                                    size={15}
                                    className="text-[#B99AFF]"
                                  />
                                </a>
                              )
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <a
                href="#contato"
                onClick={closeMenus}
                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-[#7942E8] px-6 py-4 text-sm font-semibold text-white"
              >
                Iniciar projeto
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
