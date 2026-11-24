import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";

import { cases } from "@/data/cases";
import { founder } from "@/data/founder";
import DeviceMockup from "./DeviceMockup";
import { BlockHead, d } from "./scenes/blocks";
import s from "./scenes/scenes.module.css";

/** Frase curta de cada projeto na home. */
const SUBTITLES: Record<string, string> = {
  "cleide-beauty-salao": "Site para salão de beleza",
  "larissa-barbosa": "Presença digital para profissional da beleza",
};

/** Portfólio da home: os projetos no ar + "Quem cuida do seu projeto". */
export default function HomePortfolio() {
  return (
    <section id="portfolio" className={`${s.block} scroll-mt-20`} data-tone="black">
      <BlockHead
        label="PORTFÓLIO"
        title={[{ text: "Projetos que já " }, { text: "colocamos no ar.", hl: true }]}
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {cases.map((item, index) => (
          <article
            key={item.slug}
            className={`${s.fade} flex flex-col rounded-[20px] border border-[var(--panel-line)] bg-[var(--card)] p-4 sm:p-6`}
            data-fade
            style={d(0.08 * index)}
          >
            <DeviceMockup
              desktop={item.imagens.desktop}
              mobile={item.imagens.mobile}
              sizes={{ desktop: "(min-width: 1024px) 400px, 85vw", mobile: "(min-width: 640px) 120px, 40vw" }}
            />

            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="text-[22px] font-medium tracking-[-0.02em] text-[var(--fg)]">
                  {item.cliente}
                </h3>
                <p className="mt-1 text-[15px] text-[var(--fg-2)]">
                  {SUBTITLES[item.slug] ?? item.tipoProjeto}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1a1238]! transition-colors hover:bg-[#e4d9ff]"
                >
                  Ver site
                  <ArrowUpRight size={16} aria-hidden="true" />
                  <span className="sr-only"> de {item.cliente} (abre em nova aba)</span>
                </a>
                <Link
                  href={`/cases#${item.slug}`}
                  className="text-sm font-medium text-[var(--fg-2)]! underline-offset-4 hover:text-[var(--fg)]! hover:underline"
                >
                  Ver o case<span className="sr-only"> de {item.cliente}</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* QUEM CUIDA DO SEU PROJETO */}
      <div
        className={`${s.fade} mt-6 flex flex-col gap-5 rounded-[20px] border border-[var(--panel-line)] p-6 sm:flex-row sm:items-center sm:p-7`}
        data-fade
      >
        {founder.photo ? (
          <Image
            src={founder.photo}
            alt={founder.name ? `Foto de ${founder.name}` : "Foto de quem cuida dos projetos da FORX"}
            width={88}
            height={88}
            className="h-[88px] w-[88px] shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full bg-[var(--card-2)] text-[var(--fg-3)]"
            aria-hidden="true"
          >
            <UserRound size={34} />
          </span>
        )}

        <div>
          <h3 className="text-[22px] font-medium tracking-[-0.02em] text-[var(--fg)]">
            Quem cuida do seu projeto sou eu
          </h3>
          {(founder.name || founder.role) && (
            <p className="mt-1 text-[15px] font-medium text-[var(--hl)]">
              {[founder.name, founder.role].filter(Boolean).join(" · ")}
            </p>
          )}
          {founder.quote && (
            <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--fg-2)]">
              “{founder.quote}”
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
