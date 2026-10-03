import Image from "next/image";
import type { Partner } from "@/content/types";

// Logos are stored at 2x and shown at half size, so they share one visual
// height instead of the full-width, uneven logo wall on the current site.
export function Partners({ partners }: { partners: Partner[] }) {
  return (
    <section aria-labelledby="partners-title" className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2
          id="partners-title"
          className="text-center font-sans text-sm font-semibold tracking-wider text-muted uppercase"
        >
          Our partners
        </h2>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {partners.map((partner) => (
            <li key={partner.name}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width / 2}
                height={partner.height / 2}
                className="h-auto max-w-[11rem] sm:max-w-none"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
