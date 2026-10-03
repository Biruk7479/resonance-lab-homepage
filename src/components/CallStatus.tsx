"use client";

import { useEffect, useState } from "react";
import { formatDay, isOpen } from "@/lib/dates";
import { ArrowRightIcon } from "./Icons";

// The static build renders the status as of build time; the browser then
// re-checks against today's date, so a stale build never says "open".
export function CallStatus({
  closesOn,
  applyUrl,
  newsHref,
}: {
  closesOn: string;
  applyUrl: string;
  newsHref: string;
}) {
  const [open, setOpen] = useState(() => isOpen(closesOn));

  useEffect(() => {
    setOpen(isOpen(closesOn));
  }, [closesOn]);

  const closingDay = formatDay(closesOn);

  if (open) {
    return (
      <div className="rounded-lg bg-brand-50 p-4">
        <p className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-brand-700 px-3 py-1 text-sm font-semibold text-white">
            Open
          </span>
          <span className="font-semibold text-brand-900">Apply by {closingDay}</span>
        </p>
        <a
          href={applyUrl}
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-700 px-5 py-3 font-semibold text-white hover:bg-brand-800"
        >
          Apply now
          <ArrowRightIcon className="size-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-line bg-surface p-4">
      <p className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-ink px-3 py-1 text-sm font-semibold text-white">
          Closed
        </span>
        <span className="font-semibold text-ink">Applications closed on {closingDay}</span>
      </p>
      <p className="mt-2 text-[0.9375rem] text-muted">
        New calls and application deadlines are announced on{" "}
        <a href={newsHref} className="font-semibold text-brand-700 underline underline-offset-2">
          News &amp; Events
        </a>
        .
      </p>
    </div>
  );
}
