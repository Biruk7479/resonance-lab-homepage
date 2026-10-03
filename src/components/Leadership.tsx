import type { Person } from "@/content/types";
import { ArrowRightIcon } from "./Icons";
import { themeStyles } from "./theme";

// Two-letter initials stand in until the lab supplies real photos (with consent).
// Each lead keeps the colour of their theme, as on the current Team page.
function initials(name: string): string {
  const parts = name.replace(/^(Dr|Prof)\.\s+/, "").split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function Avatar({ person, size }: { person: Person; size: "lg" | "md" }) {
  const colours = person.theme
    ? `${themeStyles[person.theme].tint} ${themeStyles[person.theme].text}`
    : "bg-brand-700 text-white";
  const dimensions = size === "lg" ? "size-20 text-2xl" : "size-14 text-lg";
  return (
    <span
      aria-hidden="true"
      className={`${dimensions} ${colours} inline-flex shrink-0 items-center justify-center rounded-full font-serif font-bold`}
    >
      {initials(person.name)}
    </span>
  );
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
  const [director, ...leads] = people;

  return (
    <section id="team" aria-labelledby="team-title" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
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

        <article className="mt-10 flex flex-col gap-5 rounded-2xl bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
          <Avatar person={director} size="lg" />
          <div>
            <p className="text-sm font-semibold text-brand-700">{director.role}</p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-brand-900">{director.name}</h3>
            <p className="mt-1 text-[0.9375rem] text-muted">{director.degree}</p>
            <p className="mt-2 max-w-2xl leading-relaxed">{director.expertise}</p>
          </div>
        </article>

        <h3 className="mt-10 text-sm font-semibold tracking-wider text-muted uppercase">
          Thematic Leads
        </h3>
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leads.map((person) => (
            <li key={person.name} className="flex flex-col rounded-2xl border border-line p-6">
              <Avatar person={person} size="md" />
              <p
                className={`mt-4 text-sm font-semibold ${person.theme ? themeStyles[person.theme].text : "text-brand-700"}`}
              >
                {person.role}
              </p>
              <h4 className="mt-1 font-serif text-lg font-bold text-brand-900">{person.name}</h4>
              <p className="mt-1 text-sm text-muted">{person.degree}</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed">{person.expertise}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
