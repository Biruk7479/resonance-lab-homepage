import type { ResearchTheme } from "@/content/types";
import { ArrowRightIcon } from "./Icons";
import { themeStyles } from "./theme";

// "Key Focus Areas" from the current homepage. The theme colour survives only in
// the small icon, so the section stays calm; each card says what the theme
// covers and which SDG it serves. Research directions stay on the Research page.
export function ResearchThemes({
  intro,
  themes,
  researchHref,
}: {
  intro: string;
  themes: ResearchTheme[];
  researchHref: string;
}) {
  return (
    <section id="focus-areas" aria-labelledby="focus-title" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span aria-hidden="true" className="block h-1 w-12 rounded-full bg-brand-700" />
            <h2 id="focus-title" className="mt-4 text-3xl sm:text-4xl">
              Key Focus Areas
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>
          </div>
          <a
            href={researchHref}
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            Read about our research
            <ArrowRightIcon className="size-4" />
          </a>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {themes.map((theme) => {
            const style = themeStyles[theme.id];
            return (
              <li
                key={theme.id}
                id={`theme-${theme.id}`}
                className="flex scroll-mt-24 flex-col rounded-2xl border border-line bg-white p-6 sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex size-12 shrink-0 items-center justify-center rounded-full bg-surface ${style.text}`}
                  >
                    <style.Icon className="size-6" />
                  </span>
                  <h3 className="text-xl leading-snug">{theme.title}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted">{theme.summary}</p>
                <p className="mt-auto pt-6 text-sm">
                  <span
                    className="inline-flex rounded-full border border-line bg-surface px-3 py-1 font-semibold text-muted"
                  >
                    SDG {theme.sdg.number} · {theme.sdg.name}
                  </span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
