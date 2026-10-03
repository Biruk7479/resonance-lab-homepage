import type { Call } from "@/content/types";
import { formatDay, isOpen } from "@/lib/dates";
import { CallStatus } from "./CallStatus";

// The current site's "Ready to Join Our Team?" banner, kept in its green
// gradient but ending on a deeper green so white text stays above 4.5:1
// (the original lime end is 2.05:1), and saying honestly whether a call is open.
export function JoinBanner({ call, newsHref }: { call: Call; newsHref: string }) {
  return (
    <section id="join" aria-labelledby="join-title" className="scroll-mt-20 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 rounded-2xl bg-linear-to-br from-brand-700 to-leaf-700 p-6 text-white shadow-lg sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <div>
            <p className="text-sm font-semibold tracking-wider text-white uppercase">{call.title}</p>
            <h2 id="join-title" className="mt-3 text-3xl text-white sm:text-4xl">
              Ready to Join Our Team?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white">{call.summary}</p>
            <div className="mt-6">
              <CallStatus
                closesOn={call.closesOn}
                openAtBuild={isOpen(call.closesOn)}
                applyUrl={call.applyUrl}
                detailsUrl={call.detailsUrl}
                newsHref={newsHref}
              />
            </div>
          </div>

          <div className="self-start rounded-xl bg-brand-950/40 p-5 sm:p-6">
            <h3 className="text-base text-white">2025/26 timeline</h3>
            <ol className="mt-3 divide-y divide-white/15">
              {call.milestones.map((milestone) => (
                <li key={milestone.label} className="grid gap-0.5 py-3 sm:grid-cols-[10.5rem_1fr] sm:gap-4">
                  <time dateTime={milestone.start} className="text-sm font-semibold text-leaf-300 tabular-nums">
                    {formatDay(milestone.start, milestone.end)}
                  </time>
                  <span className="text-[0.9375rem] text-white">{milestone.label}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
