import type { Person } from "@/content/types";
import { ArrowRightIcon } from "./Icons";
import { themeStyles } from "./theme";

// Two-letter initials stand in until the lab supplies real photos (with consent).
// Each lead keeps the colour of their theme, as on the current Team page.
function initials(name: string): string {
  const parts = name.replace(/^(Dr|Prof)\.\s+/, "").split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Leadership({
  intro,
  people,
  teamHref,
}: {
  intro: string;
  people: Person[];
  teamHref: string;
}) {
  return (
    <section id="team" aria-labelledby="team-title" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span aria-hidden="true" className="block h-1 w-12 rounded-full bg-brand-700" />
            <h2 id="team-title" className="mt-4 text-3xl sm:text-4xl">
              Lab Leadership
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

        {/* The director sits in the same row as the thematic leads, at the same size. */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {people.map((person) => {
            const style = person.theme ? themeStyles[person.theme] : null;
            return (
              <li
                key={person.name}
                className="flex flex-col items-center rounded-2xl border border-line px-5 py-7 text-center"
              >
                <span
                  aria-hidden="true"
                  className={`flex size-16 items-center justify-center rounded-full font-serif text-xl font-bold ${
                    style ? `${style.tint} ${style.text}` : "bg-brand-700 text-white"
                  }`}
                >
                  {initials(person.name)}
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-brand-900">{person.name}</h3>
                <p className={`mt-1 text-sm font-semibold ${style ? style.text : "text-brand-700"}`}>
                  {person.role}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
