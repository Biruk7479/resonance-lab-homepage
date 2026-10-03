import type { ReactNode } from "react";

// Shared heading block: small uppercase label, serif title, optional intro.
export function SectionHeading({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold tracking-wider text-brand-700 uppercase">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-3xl leading-tight sm:text-4xl">
        {title}
      </h2>
      {children ? <div className="mt-4 text-lg leading-relaxed text-muted">{children}</div> : null}
    </div>
  );
}
