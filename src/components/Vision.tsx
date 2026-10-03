import type { VisionPillar } from "@/content/types";

export function Vision({ vision }: { vision: VisionPillar[] }) {
  return (
    <section aria-labelledby="vision-title" className="border-b border-line bg-brand-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2
          id="vision-title"
          className="font-sans text-sm font-semibold tracking-wider text-brand-700 uppercase"
        >
          Our vision
        </h2>
        <ol className="mt-6 grid gap-8 md:grid-cols-3 md:gap-10">
          {vision.map((pillar, index) => (
            <li key={pillar.title} className="border-t-2 border-brand-700 pt-4">
              <span className="font-serif text-sm text-brand-600" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-xl">{pillar.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{pillar.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
