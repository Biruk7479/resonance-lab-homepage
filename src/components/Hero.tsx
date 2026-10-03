import type { Lab } from "@/content/types";
import { ArrowRightIcon } from "./Icons";

// Concentric rings: a nod to "resonance", drawn in SVG instead of the
// 1.7 MB background image used on the current site.
function ResonanceRings({ className }: { className?: string }) {
  const radii = [60, 110, 160, 210, 260, 310, 360];
  return (
    <svg viewBox="0 0 800 800" aria-hidden="true" focusable="false" className={className}>
      {radii.map((r, i) => (
        <circle
          key={r}
          cx="400"
          cy="400"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity={1 - i * 0.12}
        />
      ))}
    </svg>
  );
}

export function Hero({ lab, researchHref }: { lab: Lab; researchHref: string }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-linear-to-br from-brand-950 via-brand-900 to-brand-700 text-white"
    >
      <ResonanceRings className="absolute top-1/2 -right-64 -z-10 size-[44rem] -translate-y-1/2 text-brand-200/25 sm:-right-48 lg:-right-24" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold tracking-wide text-leaf-300">
          {lab.university} · {lab.college}
        </p>
        <h1
          id="hero-title"
          className="mt-4 max-w-3xl text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        >
          {lab.motto}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100">
          <strong className="font-semibold text-white">{lab.shortName}</strong> ({lab.expansion}) is
          an AI4D lab at {lab.university}. {lab.mission}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={researchHref}
            className="inline-flex items-center gap-2 rounded-md bg-leaf-300 px-5 py-3 font-semibold text-brand-950 hover:bg-white"
          >
            Explore our research
            <ArrowRightIcon className="size-4" />
          </a>
          <a
            href="#opportunities"
            className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10"
          >
            Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}
