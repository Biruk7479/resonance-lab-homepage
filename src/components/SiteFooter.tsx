import type { Contact, Lab, NavItem } from "@/content/types";
import { MailIcon, MapPinIcon } from "./Icons";

export function SiteFooter({ lab, nav, contact }: { lab: Lab; nav: NavItem[]; contact: Contact }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-xl font-semibold text-white">{lab.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed">{lab.expansion}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            {lab.college}, {lab.university}
          </p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wider text-white uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 size-5 shrink-0 text-leaf-300" />
              <a href={`mailto:${contact.email}`} className="text-white underline-offset-4 hover:underline">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 size-5 shrink-0 text-leaf-300" />
              <address className="leading-relaxed not-italic">
                {contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-sm font-semibold tracking-wider text-white uppercase">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:grid-cols-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white hover:underline underline-offset-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {lab.name}, {lab.university}
          </p>
          <p>Homepage prototype. Other pages link to the lab&rsquo;s current site.</p>
        </div>
      </div>
    </footer>
  );
}
