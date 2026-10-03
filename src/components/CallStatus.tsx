"use client";

import { useSyncExternalStore } from "react";
import { formatDay, isOpen } from "@/lib/dates";
import { ArrowRightIcon } from "./Icons";

// Today's date never changes while the page is open, so there is nothing to subscribe to.
const subscribe = () => () => {};

// The static HTML carries the status as of build time (`openAtBuild`).
// During hydration React compares it with today's date in the browser and
// re-renders if they differ, so an old build can never say a call is open.
export function CallStatus({
  closesOn,
  openAtBuild,
  applyUrl,
  detailsUrl,
  newsHref,
}: {
  closesOn: string;
  openAtBuild: boolean;
  applyUrl: string;
  detailsUrl: string;
  newsHref: string;
}) {
  const open = useSyncExternalStore(
    subscribe,
    () => isOpen(closesOn),
    () => openAtBuild,
  );
  const closingDay = formatDay(closesOn);

  const primary =
    "inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-brand-800 hover:bg-brand-50";
  const secondary =
    "inline-flex items-center gap-2 rounded-md border border-white/70 px-5 py-3 font-semibold text-white hover:bg-white/10";

  if (open) {
    return (
      <div>
        <p className="text-lg text-white">
          Applications for our MSc and PhD research positions are now open.{" "}
          <strong className="font-semibold">Apply by {closingDay}.</strong>
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={applyUrl} className={primary}>
            Apply now
            <ArrowRightIcon className="size-4" />
          </a>
          <a href={detailsUrl} className={secondary}>
            Full call details
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="flex flex-wrap items-center gap-3 text-lg text-white">
        <span className="rounded-full bg-white px-3 py-0.5 text-sm font-semibold text-ink">
          Closed
        </span>
        <span>
          Applications for the 2025/26 positions closed on{" "}
          <strong className="font-semibold">{closingDay}</strong>.
        </span>
      </p>
      <p className="mt-3 text-white">
        New calls and application deadlines are announced on News &amp; Events.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={newsHref} className={primary}>
          News &amp; Events
          <ArrowRightIcon className="size-4" />
        </a>
        <a href={detailsUrl} className={secondary}>
          View the 2025/26 call
        </a>
      </div>
    </div>
  );
}
