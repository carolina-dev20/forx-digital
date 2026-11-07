
"use client";

export default function AnimatedPurpleWaves() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* CURVA SUPERIOR */}
      <svg
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        className="absolute -right-[10%] top-0 h-[650px] w-[120%] purple-wave-top"
      >
        <defs>
          <linearGradient
            id="waveTop"
            x1="0"
            y1="0"
            x2="1440"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#7942E8" stopOpacity="0" />
            <stop offset="35%" stopColor="#7942E8" stopOpacity="0.35" />
            <stop offset="65%" stopColor="#B99AFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#7942E8" stopOpacity="0" />
          </linearGradient>

          <filter id="waveGlowTop" x="-30%" y="-100%" width="160%" height="300%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <path
          d="M-100 520 C220 170 480 650 790 390 S1200 80 1540 250"
          stroke="url(#waveTop)"
          strokeWidth="9"
          filter="url(#waveGlowTop)"
          opacity="0.7"
          fill="none"
        />

        <path
          d="M-100 520 C220 170 480 650 790 390 S1200 80 1540 250"
          stroke="url(#waveTop)"
          strokeWidth="1.8"
          fill="none"
        />
      </svg>

      {/* CURVA INFERIOR */}
      <svg
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        className="absolute -left-[10%] bottom-0 h-[430px] w-[120%] purple-wave-bottom"
      >
        <defs>
          <linearGradient
            id="waveBottom"
            x1="0"
            y1="0"
            x2="1440"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#7942E8" stopOpacity="0" />
            <stop offset="35%" stopColor="#7942E8" stopOpacity="0.5" />
            <stop offset="65%" stopColor="#B99AFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7942E8" stopOpacity="0" />
          </linearGradient>

          <filter id="waveGlowBottom" x="-30%" y="-100%" width="160%" height="300%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <path
          d="M-100 100 C240 430 470 80 790 260 S1200 450 1540 120"
          stroke="url(#waveBottom)"
          strokeWidth="9"
          filter="url(#waveGlowBottom)"
          opacity="0.7"
          fill="none"
        />

        <path
          d="M-100 100 C240 430 470 80 790 260 S1200 450 1540 120"
          stroke="url(#waveBottom)"
          strokeWidth="1.8"
          fill="none"
        />
      </svg>

      {/* ILUMINAÇÃO AMBIENTE */}
      <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#7942E8]/15 blur-[140px]" />

      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#7942E8]/10 blur-[140px]" />
    </div>
  );
}
