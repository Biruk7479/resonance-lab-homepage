import type { Benefit, Call } from "@/content/types";
import { formatDay, isOpen } from "@/lib/dates";
import { CallStatus } from "./CallStatus";
import { ArrowRightIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 size-5 shrink-0 text-brand-600"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.12" />
      <path
        d="m6 10.2 2.6 2.6L14 7.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Opportunities({
  call,
  benefits,
  collaboration,
  newsHref,
  email,
}: {
  call: Call;
  benefits: Benefit[];
  collaboration: { text: string; href: string };
  newsHref: string;
  email: string;
}) {
  return (
    <section
      id="opportunities"
      aria-labelledby="opportunities-title"
      className="scroll-mt-20 border-y border-line bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading id="opportunities-title" eyebrow="Get involved" title="Study and research with us">
          <p>
            We are building a robust and inclusive AI talent pipeline. Join our Masters or PhD
            research positions, or align your ongoing research with our core focus areas.
          </p>
        </SectionHeading>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <article
            aria-labelledby="call-title"
            className="flex flex-col rounded-xl border border-line bg-white p-6 sm:p-8 lg:col-span-3"
          >
            <h3 id="call-title" className="text-2xl">
              {call.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{call.summary}</p>

            <div className="mt-6">
              <CallStatus
                closesOn={call.closesOn}
                openAtBuild={isOpen(call.closesOn)}
                applyUrl={call.applyUrl}
                newsHref={newsHref}
              />
            </div>

            <h4 className="mt-8 text-sm font-semibold tracking-wider text-muted uppercase">
              Timeline
            </h4>
            <ol className="mt-3 divide-y divide-line border-y border-line">
              {call.milestones.map((milestone) => (
                <li
                  key={milestone.label}
                  className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4"
                >
                  <time
                    dateTime={milestone.start}
                    className="text-sm font-semibold text-brand-800 tabular-nums"
                  >
                    {formatDay(milestone.start, milestone.end)}
                  </time>
                  <span className="text-[0.9375rem]">{milestone.label}</span>
                </li>
              ))}
            </ol>

            <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 text-[0.9375rem]">
              <a
                href={call.detailsUrl}
                className="inline-flex items-center gap-2 font-semibold text-brand-700 underline-offset-4 hover:underline"
              >
                Full call details
                <ArrowRightIcon className="size-4" />
              </a>
              <span className="text-muted">
                Questions:{" "}
                <a href={`mailto:${email}`} className="font-semibold text-brand-700 underline underline-offset-2">
                  {email}
                </a>
              </span>
            </div>
          </article>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
              <h3 className="text-xl">What research students receive</h3>
              <ul className="mt-5 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit.title} className="flex gap-3">
                    <CheckIcon />
                    <span>
                      <span className="block font-semibold">{benefit.title}</span>
                      <span className="block text-[0.9375rem] text-muted">{benefit.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-l-2 border-brand-600 pl-4 text-[0.9375rem] text-muted">
                {call.inclusion}
              </p>
            </div>

            <div className="rounded-xl bg-brand-900 p-6 text-white sm:p-8">
              <h3 className="text-xl text-white">Collaborate and partner with us</h3>
              <p className="mt-3 leading-relaxed text-brand-100">{collaboration.text}</p>
              <a
                href={collaboration.href}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-leaf-300 underline-offset-4 hover:underline"
              >
                Ways to get involved
                <ArrowRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
