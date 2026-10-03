import type { ComponentType, SVGProps } from "react";
import type { ResearchTheme, ThemeId } from "@/content/types";
import { AgricultureIcon, ArrowRightIcon, EnergyIcon, GovernanceIcon, HealthIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export const themeIcons: Record<ThemeId, ComponentType<SVGProps<SVGSVGElement>>> = {
  health: HealthIcon,
  agriculture: AgricultureIcon,
  governance: GovernanceIcon,
  energy: EnergyIcon,
};

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
    <section id="research" aria-labelledby="research-title" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading id="research-title" eyebrow="Research" title="Four thematic areas">
          <p>{intro}</p>
        </SectionHeading>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {themes.map((theme) => {
            const Icon = themeIcons[theme.id];
            return (
              <li
                key={theme.id}
                className="flex flex-col rounded-xl border border-line bg-white p-6 sm:p-8"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-2xl leading-snug">{theme.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{theme.summary}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5 text-[0.9375rem]">
                  {theme.focus.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-600"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 text-sm">
                  <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-800">
                    SDG {theme.sdg.number} · {theme.sdg.name}
                  </span>
                </p>
              </li>
            );
          })}
        </ul>

        <a
          href={researchHref}
          className="mt-10 inline-flex items-center gap-2 font-semibold text-brand-700 underline-offset-4 hover:underline"
        >
          Read about our research
          <ArrowRightIcon className="size-4" />
        </a>
      </div>
    </section>
  );
}
