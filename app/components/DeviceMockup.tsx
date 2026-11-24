import type { CSSProperties } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

import type { CaseImage } from "@/data/cases";

/** Espaço neutro quando ainda não há print: mantém a proporção, nunca quebra o layout. */
export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[var(--card-2,#f1ecfc)] text-center text-[var(--fg-3,#77708f)]"
    >
      <ImageOff size={22} aria-hidden="true" />
      <span className="px-2 text-[11px] leading-4">Imagem em breve</span>
    </div>
  );
}

const DESKTOP_RATIO = 16 / 10;
const MOBILE_RATIO = 9 / 19;

/** Proporção real do print (largura / altura), para a moldura não cortar a imagem. */
const ratioOf = (image: CaseImage, fallback: number) =>
  image.width && image.height ? image.width / image.height : fallback;

function Shot({ image, sizes }: { image: CaseImage; sizes: string }) {
  if (!image.src) return <ImagePlaceholder label={`${image.alt} (imagem em breve)`} />;
  return (
    <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover object-top" />
  );
}

/**
 * Notebook + celular com os prints de um site (empilhados em telas pequenas).
 * As colunas seguem a proporção real dos prints: alturas parecidas e nada cortado.
 */
export default function DeviceMockup({
  desktop,
  mobile,
  sizes = { desktop: "(min-width: 1024px) 420px, 90vw", mobile: "(min-width: 640px) 140px, 40vw" },
}: {
  desktop: CaseImage;
  mobile: CaseImage;
  sizes?: { desktop: string; mobile: string };
}) {
  const dr = ratioOf(desktop, DESKTOP_RATIO);
  const mr = ratioOf(mobile, MOBILE_RATIO);
  const cols = `minmax(0,${dr.toFixed(3)}fr) minmax(0,${(mr * 1.2).toFixed(3)}fr)`;

  return (
    <div
      className="grid items-end gap-4 rounded-[16px] bg-gradient-to-br from-[#f4effe] to-[#e4d9ff] p-4 sm:grid-cols-[var(--cols)] sm:p-6"
      style={{ "--cols": cols } as CSSProperties}
    >
      <div className="overflow-hidden rounded-[10px] border-[5px] border-[#242329] bg-[#242329] shadow-2xl">
        <div className="relative overflow-hidden rounded-[4px] bg-[#16131f]" style={{ aspectRatio: dr }}>
          <Shot image={desktop} sizes={sizes.desktop} />
        </div>
      </div>
      <div className="mx-auto w-[42%] max-w-[170px] sm:w-full">
        <div
          className="relative overflow-hidden rounded-[18px] border-[5px] border-[#242329] bg-[#16131f] shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          style={{ aspectRatio: mr }}
        >
          <Shot image={mobile} sizes={sizes.mobile} />
        </div>
      </div>
    </div>
  );
}
