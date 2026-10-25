
"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

import {
  ArrowUpRight,
  Check,
  Globe2,
  MapPin,
  MousePointer2,
  Search,
  Star,
} from "lucide-react";

// ==========================================
// ANIMAÇÃO DE DIGITAÇÃO
// ==========================================

function Typewriter({
  text,
  active,
  speed = 65,
}: {
  text: string;
  active: boolean;
  speed?: number;
}) {
  const [count, setCount] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!active || reduceMotion) return;

    setCount(0);

    const interval = window.setInterval(() => {
      setCount((current) => {
        if (current >= text.length) {
          window.clearInterval(interval);
          return current;
        }

        return current + 1;
      });
    }, speed);

    return () => window.clearInterval(interval);
  }, [active, text, speed, reduceMotion]);

  return (
    <span>
      {reduceMotion ? text : text.slice(0, count)}

      {!reduceMotion && active && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.85,
            repeat: Infinity,
          }}
          className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-[#7942E8]"
        />
      )}
    </span>
  );
}

// ==========================================
// TÍTULO PALAVRA POR PALAVRA
// ==========================================

function RevealWords({
  text,
}: {
  text: string;
}) {
  const words = text.split(" ");

  return (
    <h2 className="max-w-[1050px] text-[38px] font-medium leading-[1.1] tracking-[-0.06em] text-[#171717] sm:text-5xl lg:text-[68px]">
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: index * 0.055,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
          <span>&nbsp;</span>
        </span>
      ))}
    </h2>
  );
}

// ==========================================
// MOVIMENTO 3D COM O MOUSE
// ==========================================

function MouseScene({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, {
    stiffness: 85,
    damping: 24,
  });

  const smoothY = useSpring(rotateY, {
    stiffness: 85,
    damping: 24,
  });

  function handlePointerMove(
    event: PointerEvent<HTMLDivElement>
  ) {
    if (reduceMotion || event.pointerType !== "mouse") {
      return;
    }

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    rotateX.set(-y * 7);
    rotateY.set(x * 7);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      className={`relative w-full ${className}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={
          reduceMotion
            ? undefined
            : {
                rotateX: smoothX,
                rotateY: smoothY,
                transformStyle: "preserve-3d",
              }
        }
        className="relative h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

// ==========================================
// BARRA DE PESQUISA ANIMADA
// ==========================================

function AnimatedSearchBar({
  active,
}: {
  active: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-9 flex w-full max-w-[570px] items-center gap-4 rounded-full border border-black/10 bg-white px-5 py-4 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:px-6 sm:py-5"
    >
      <Search
        size={21}
        className="shrink-0 text-[#7942E8]"
      />

      <span className="min-w-0 flex-1 truncate text-sm text-black/55 sm:text-base">
        <Typewriter
          text="Alguém pesquisando sobre você..."
          active={active}
          speed={70}
        />
      </span>

      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3F3F3]">
        <ArrowUpRight
          size={16}
          className="text-black/65"
        />
      </span>
    </motion.div>
  );
}

// ==========================================
// ILUSTRAÇÃO: PESQUISA NO GOOGLE
// ==========================================

function SearchScene() {
  const ref = useRef<HTMLDivElement>(null);

  const visible = useInView(ref, {
    once: true,
    amount: 0.25,
  });

  const reduceMotion = useReducedMotion();

  return (
    <MouseScene className="h-[270px] sm:h-[300px]">
      <div
        ref={ref}
        className="relative flex h-full w-full items-end justify-center"
      >
        {/* BRILHO ROXO */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-44 w-64 -translate-x-1/2 rounded-full bg-[#7942E8]/10 blur-[65px]" />

        {/* JANELA DE PESQUISA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="relative w-full max-w-[540px] overflow-hidden rounded-t-[24px] border border-[#E5E5E5] bg-[#FAFAFA] p-4 shadow-[0_15px_45px_rgba(0,0,0,0.07)] sm:p-5"
        >
          {/* BARRA DE BUSCA */}
          <div className="flex h-[52px] items-center gap-3 rounded-full border border-[#E5E5E5] bg-white px-4">
            <Search
              size={19}
              className="shrink-0 text-[#7942E8]"
            />

            <span className="truncate text-xs text-[#777777] sm:text-sm">
              <Typewriter
                text="serviços perto de mim"
                active={visible}
                speed={85}
              />
            </span>
          </div>

          {/* RESULTADO DESTACADO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
            className="mt-4 flex items-center gap-4 rounded-[16px] border border-[#7942E8]/30 bg-[#151515] p-4 shadow-[0_12px_25px_rgba(0,0,0,0.12)]"
          >
            <Globe2
              size={27}
              className="shrink-0 text-[#B994FF]"
            />

            <div className="flex-1 space-y-2">
              <div className="h-2.5 w-[85%] rounded-full bg-white/80" />
              <div className="h-2 w-[55%] rounded-full bg-white/30" />
            </div>

            <Check
              size={18}
              className="text-[#B994FF]"
            />
          </motion.div>

          {/* RESULTADOS SECUNDÁRIOS */}
          {[0, 1].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.6 + item * 0.12,
              }}
              className="mt-3 rounded-[14px] border border-[#E9E9E9] bg-white px-5 py-4"
            >
              <div className="h-2.5 w-[75%] rounded-full bg-[#D6D6D6]" />
              <div className="mt-3 h-2 w-[45%] rounded-full bg-[#EEEEEE]" />
            </motion.div>
          ))}
        </motion.div>

        {/* CURSOR ROXO FLUTUANTE */}
        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 18, 3, 0],
                  y: [0, -15, -6, 0],
                  rotate: [0, -8, 5, 0],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute bottom-[55px] right-[24%] z-20 flex h-14 w-14 items-center justify-center rounded-[16px] border border-[#7942E8]/20 bg-white shadow-[0_10px_30px_rgba(121,66,232,0.2)]"
        >
          <MousePointer2
            size={27}
            className="text-[#7942E8]"
          />
        </motion.div>
      </div>
    </MouseScene>
  );
}

// ==========================================
// ILUSTRAÇÃO: MAPA E PERFIL
// ==========================================

function MapScene() {
  const reduceMotion = useReducedMotion();

  return (
    <MouseScene className="h-[270px] sm:h-[300px]">
      <div className="relative h-full w-full overflow-hidden rounded-t-[24px] border border-[#E5E5E5] bg-[#F8F8F8] shadow-[0_15px_45px_rgba(0,0,0,0.06)]">
        {/* QUADRAS */}
        <div className="absolute inset-5 grid grid-cols-3 grid-rows-3 gap-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[15px] border border-[#E2E2E2] bg-[#EAEAEA]"
            />
          ))}
        </div>

        {/* RUAS */}
        <div className="pointer-events-none absolute left-1/2 top-[-15%] h-[140%] w-[13px] -translate-x-1/2 rotate-[12deg] rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.08)]" />

        <div className="pointer-events-none absolute left-[-10%] top-[57%] h-[13px] w-[120%] -rotate-[15deg] rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.08)]" />

        {/* LOCALIZAÇÃO ANIMADA */}
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.08, 1],
                }
          }
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[45%] flex h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#7942E8]/20 bg-[#7942E8]/10"
        >
          <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
            <MapPin
              size={38}
              strokeWidth={2}
              className="text-[#7942E8]"
            />
          </div>
        </motion.div>

        {/* ESTRELAS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            delay: 0.3,
          }}
          className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-[16px] border border-black/5 bg-white px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={15}
                fill="#7942E8"
                stroke="#7942E8"
              />
            ))}
          </div>

          <Check
            size={17}
            className="ml-1 text-[#7942E8]"
          />
        </motion.div>
      </div>
    </MouseScene>
  );
}

// ==========================================
// CARD REUTILIZÁVEL
// ==========================================

function PresenceCard({
  number,
  label,
  title,
  description,
  children,
  delay = 0,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay,
      }}
      className="flex min-h-[590px] min-w-0 flex-col overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_8px_35px_rgba(0,0,0,0.025)] sm:min-h-[620px]"
    >
      {/* TEXTO NO TOPO */}
      <div className="relative z-10 shrink-0 px-7 pb-6 pt-8 sm:px-10 sm:pt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7942E8]">
          {number} / {label}
        </p>

        <h3 className="mt-6 max-w-[480px] text-[30px] font-medium leading-[1.14] tracking-[-0.055em] text-[#171717] sm:text-[36px]">
          {title}
        </h3>

        <p className="mt-4 max-w-[440px] text-sm leading-7 text-[#858585] sm:text-base">
          {description}
        </p>
      </div>

      {/* ANIMAÇÃO NA PARTE INFERIOR */}
      <div className="relative mt-auto min-h-[270px] px-5 sm:min-h-[300px] sm:px-8">
        {children}
      </div>
    </motion.article>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function GooglePresence() {
  const sectionRef = useRef<HTMLElement>(null);

  const isVisible = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  return (
    <section
      ref={sectionRef}
      id="presenca-google"
      className="overflow-hidden bg-[#F3F3F3] px-6 py-16 md:px-12 md:py-20 lg:px-20"
    >
      <div className="mx-auto max-w-[1280px]">

        {/* BARRA COM LETRAS SENDO DIGITADAS */}
        <AnimatedSearchBar active={isVisible} />

        {/* CABEÇALHO */}
        <div className="mb-11">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-7 bg-[#7942E8]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              PRESENÇA DIGITAL
            </span>
          </motion.div>

          <RevealWords text="Quando alguém procura sua empresa, o que encontra?" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.15,
            }}
            className="mt-6 max-w-2xl text-base leading-8 text-black/50"
          >
            A jornada de um cliente pode começar com uma
            simples pesquisa. Sua empresa precisa estar
            preparada para ser encontrada e transmitir confiança.
          </motion.p>
        </div>

        {/* CARDS */}
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <PresenceCard
            number="01"
            label="PESQUISA"
            title="Uma pessoa precisa exatamente do serviço que você oferece."
            description="Ela pesquisa no Google. Sua empresa aparece?"
          >
            <SearchScene />
          </PresenceCard>

          <PresenceCard
            number="02"
            label="DESCOBERTA"
            title="Depois encontra seu Perfil da Empresa."
            description="As informações estão completas e passam confiança?"
            delay={0.1}
          >
            <MapScene />
          </PresenceCard>
        </div>

        {/* CHAMADA PARA CONTATO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-10 flex flex-col justify-between gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-base leading-7 text-black/60">
            Não deixe que seu próximo cliente encontre
            apenas seus concorrentes.
          </p>

          <a
            href="#contato"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#151515] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(121,66,232,0.25)]"
          >
            Quero melhorar minha presença digital

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
