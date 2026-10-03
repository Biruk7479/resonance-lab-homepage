import Image from "next/image";
import Link from "next/link";
import type { Lab, NavItem } from "@/content/types";
import { MobileNav } from "./MobileNav";

// Dark green bar like the current site's header, but with the pages as
// visible text links instead of a "Home" dropdown plus a row of buttons.
export function SiteHeader({ lab, nav }: { lab: Lab; nav: NavItem[] }) {
  return (
    <header className="sticky top-0 z-40 bg-brand-900 text-white shadow-[0_1px_0_rgb(255_255_255/0.08)]">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6 lg:px-8">
        <Link href="/" aria-current="page" className="flex items-center gap-3 rounded-sm">
          <Image
            src="/images/aau-seal.webp"
            alt=""
            width={40}
            height={40}
            priority
            className="size-10 shrink-0"
          />
          <span className="flex flex-col">
            <span className="font-serif text-base leading-none font-bold whitespace-nowrap sm:text-xl">{lab.name}</span>
            <span className="mt-1 text-xs leading-none text-brand-100">{lab.university}</span>
            <span className="sr-only">(home)</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-[0.9375rem] text-white/90 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav nav={nav} />
      </div>
    </header>
  );
}
