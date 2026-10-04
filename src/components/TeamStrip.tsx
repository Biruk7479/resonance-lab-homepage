"use client";

import { useState } from "react";
import type { Person } from "@/content/types";
import { initials } from "@/lib/people";
import { themeStyles } from "./theme";

function PersonCard({ person }: { person: Person }) {
  const style = person.theme ? themeStyles[person.theme] : null;
  return (
    <li className="flex w-60 shrink-0 flex-col items-center rounded-2xl border border-line bg-white px-5 py-6 text-center">
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
}

// The whole team scrolls slowly in a loop. The motion is pure CSS (it runs
// before hydration); this component only adds the Pause control that WCAG
// 2.2.2 requires for content that moves on its own. Hovering also pauses it,
// and with reduced motion it stays still and scrolls by hand instead.
export function TeamStrip({ people }: { people: Person[] }) {
  const [paused, setPaused] = useState(false);

  return (
    <div>
      <div className="flex justify-end motion-reduce:hidden">
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Play team carousel" : "Pause team carousel"}
          className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-1.5 text-sm font-semibold text-brand-800 hover:bg-brand-50"
        >
          <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" focusable="false">
            {paused ? (
              <path d="M4 2.5v11l9-5.5-9-5.5Z" fill="currentColor" />
            ) : (
              <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor" />
            )}
          </svg>
          {paused ? "Play" : "Pause"}
        </button>
      </div>

      <div
        data-paused={paused}
        className="group mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]"
      >
        <div className="flex w-max animate-marquee py-1 group-hover:[animation-play-state:paused] group-data-[paused=true]:[animation-play-state:paused] motion-reduce:animate-none">
          <ul className="flex gap-5 pr-5">
            {people.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </ul>
          {/* Second copy makes the loop seamless; hidden from assistive tech. */}
          <ul className="flex gap-5 pr-5 motion-reduce:hidden" aria-hidden="true">
            {people.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
