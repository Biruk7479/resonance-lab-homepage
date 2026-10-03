import type { ComponentType, SVGProps } from "react";
import type { Lab, VisionPillar } from "@/content/types";
import { LightbulbIcon, PeopleIcon, SproutIcon } from "./Icons";

// Same three pillars and order as the current site's "Our Vision" card
// (💡 🌱 🤝, now SVG), set beside the mission and motto instead of alone.
const pillarIcons: ComponentType<SVGProps<SVGSVGElement>>[] = [LightbulbIcon, SproutIcon, PeopleIcon];

export function Vision({ lab, vision }: { lab: Lab; vision: VisionPillar[] }) {
  return (
    <section aria-labelledby="vision-title" className="bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span aria-hidden="true" className="block h-1 w-12 rounded-full bg-brand-700" />
          <h2 id="vision-title" className="mt-4 text-3xl sm:text-4xl">
            Our Vision
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{lab.mission}</p>
          <figure className="mt-8 border-l-4 border-leaf-700 pl-5">
            <blockquote className="font-serif text-2xl leading-snug font-bold text-brand-800">
              &ldquo;{lab.motto}&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-sm text-muted">Our motto</figcaption>
          </figure>
        </div>

        <ul className="divide-y divide-line rounded-2xl bg-white px-6 shadow-[0_1px_3px_rgb(16_24_40/0.06),0_12px_32px_-12px_rgb(16_24_40/0.12)] sm:px-8">
          {vision.map((pillar, index) => {
            const Icon = pillarIcons[index % pillarIcons.length];
            return (
              <li key={pillar.title} className="flex gap-5 py-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg">{pillar.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{pillar.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
