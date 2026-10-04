import type { Person } from "@/content/types";
import { ArrowRightIcon } from "./Icons";
import { TeamStrip } from "./TeamStrip";

// Everyone named on the current Team page, as one slowly moving row. Initials
// stand in until the lab supplies real photos (with consent); each person keeps
// their theme colour, as on the Team page. The director gets the same card as
// everyone else.
export function Team({ intro, people, teamHref }: { intro: string; people: Person[]; teamHref: string }) {
  return (
    <section id="team" aria-labelledby="team-title" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span aria-hidden="true" className="block h-1 w-12 rounded-full bg-brand-700" />
            <h2 id="team-title" className="mt-4 text-3xl sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>
          </div>
          <a
            href={teamHref}
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            Meet the full team
            <ArrowRightIcon className="size-4" />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <TeamStrip people={people} />
      </div>
    </section>
  );
}
