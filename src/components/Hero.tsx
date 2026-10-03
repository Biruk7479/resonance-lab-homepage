import type { Lab } from "@/content/types";
import { ArrowRightIcon } from "./Icons";

// The current site's signature: the green aurora image and the lab's name in
// Playfair Display inside a white outlined box. The image is the lab's own,
// recompressed from a 1.7 MB PNG to 6-16 KB WebP. A radial overlay keeps every
// line of text above 4.5:1 contrast, which the original hero does not.
export function Hero({ lab, researchHref }: { lab: Lab; researchHref: string }) {
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
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgb(0_36_29/0.66)_0%,rgb(0_36_29/0.58)_55%,rgb(0_36_29/0.25)_100%)]"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold tracking-wide text-white">
          {lab.university} · {lab.college}
        </p>
        <h1
          id="hero-title"
          className="mt-6 border-[3px] border-white px-5 py-4 font-serif text-4xl leading-[1.05] text-white min-[400px]:px-6 min-[400px]:text-5xl sm:border-4 sm:px-14 sm:py-7 sm:text-6xl lg:text-7xl"
        >
          <span className="block">{lab.shortName}</span>
          <span className="block">AI4D Lab</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white sm:text-xl">
          {lab.expansion}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
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
    </section>
  );
}
