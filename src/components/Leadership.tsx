import type { Person } from "@/content/types";
import { ArrowRightIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

// Two-letter initials stand in until the lab supplies real photos (with consent).
function initials(name: string): string {
  const parts = name.replace(/^(Dr|Prof)\.\s+/, "").split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function Avatar({ name, size }: { name: string; size: "lg" | "md" }) {
  const classes = size === "lg" ? "size-20 text-2xl" : "size-14 text-lg";
  return (
    <span
      aria-hidden="true"
      className={`${classes} inline-flex shrink-0 items-center justify-center rounded-full bg-brand-100 font-serif font-semibold text-brand-800 ring-1 ring-brand-200`}
    >
      {initials(name)}
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
    <section id="team" aria-labelledby="team-title" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading id="team-title" eyebrow="People" title="Lab leadership">
          <p>{intro}</p>
        </SectionHeading>

        <article className="mt-10 flex flex-col gap-5 rounded-xl border border-line bg-white p-6 sm:flex-row sm:items-center sm:p-8">
          <Avatar name={director.name} size="lg" />
          <div>
            <p className="text-sm font-semibold text-brand-700">{director.role}</p>
            <h3 className="mt-1 text-2xl">{director.name}</h3>
            <p className="mt-1 text-[0.9375rem] text-muted">{director.degree}</p>
            <p className="mt-2 max-w-2xl leading-relaxed">{director.expertise}</p>
          </div>
        </article>

        <h3 className="mt-10 font-sans text-sm font-semibold tracking-wider text-muted uppercase">
          Thematic leads
        </h3>
        <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leads.map((person) => (
            <li key={person.name} className="flex flex-col rounded-xl border border-line bg-white p-6">
              <Avatar name={person.name} size="md" />
              <p className="mt-4 text-sm font-semibold text-brand-700">{person.role}</p>
              <h4 className="mt-1 font-serif text-lg font-semibold text-brand-900">{person.name}</h4>
              <p className="mt-1 text-sm text-muted">{person.degree}</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed">{person.expertise}</p>
            </li>
          ))}
        </ul>

        <a
          href={teamHref}
          className="mt-10 inline-flex items-center gap-2 font-semibold text-brand-700 underline-offset-4 hover:underline"
        >
          Meet the full team
          <ArrowRightIcon className="size-4" />
        </a>
      </div>
    </section>
  );
}
