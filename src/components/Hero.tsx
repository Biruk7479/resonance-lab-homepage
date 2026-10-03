import type { Lab, ResearchTheme } from "@/content/types";
import { ArrowRightIcon } from "./Icons";
import { themeStyles } from "./theme";

// Keeps the current site's signature (its green aurora image and the lab's
// name in Playfair inside a white outlined box) but turns the hero into
// something informative: who the lab is, where, what it works on, and what to
// do next. The image is the lab's own, recompressed from a 1.7 MB PNG to WebP.
export function Hero({
  lab,
  themes,
  researchHref,
}: {
  lab: Lab;
  themes: ResearchTheme[];
  researchHref: string;
}) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-brand-900 text-white"
    >
      {/* Plain <img> so the static export can ship a srcset; next/image is unoptimised here. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-aurora-1536.webp"
        srcSet="/images/hero-aurora-768.webp 768w, /images/hero-aurora-1536.webp 1536w"
        sizes="100vw"
        alt=""
        width={1536}
        height={1024}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      {/* Darker on the text side so every line stays above 4.5:1 contrast. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-brand-950/80 via-brand-950/60 to-brand-950/35"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold tracking-wide text-white">
            {lab.university} · {lab.college}
          </p>
          <h1
            id="hero-title"
            className="mt-5 inline-block border-[3px] border-white px-5 py-3 font-serif text-4xl leading-[1.05] text-white min-[400px]:text-5xl sm:px-8 sm:py-5 lg:text-6xl"
          >
            <span className="block">{lab.shortName}</span>
            <span className="block">AI4D Lab</span>
          </h1>
          <p className="mt-6 max-w-xl font-serif text-xl font-bold text-white sm:text-2xl">
            {lab.expansion}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white">{lab.mission}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={researchHref}
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-brand-800 hover:bg-brand-50"
            >
              Explore our research
              <ArrowRightIcon className="size-4" />
            </a>
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-md border border-white/70 px-5 py-3 font-semibold text-white hover:bg-white/10"
            >
              Call for applications
            </a>
          </div>
        </div>

        {/* At a glance: the four themes, linking down to the focus areas. */}
        <nav
          aria-label="Focus areas"
          className="hidden rounded-2xl border border-white/25 bg-brand-950/60 p-6 backdrop-blur-sm lg:block"
        >
          <p className="text-sm font-semibold tracking-wider text-white uppercase">Key focus areas</p>
          <ul className="mt-4 space-y-2">
            {themes.map((theme) => {
              const style = themeStyles[theme.id];
              return (
                <li key={theme.id}>
                  <a
                    href={`#theme-${theme.id}`}
                    className="flex items-center gap-3 rounded-lg p-2 text-white hover:bg-white/10"
                  >
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-white ${style.text}`}
                    >
                      <style.Icon className="size-5" />
                    </span>
                    <span className="font-semibold">{theme.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
