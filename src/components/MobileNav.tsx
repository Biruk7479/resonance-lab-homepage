"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/content/types";
import { CloseIcon, MenuIcon } from "./Icons";

// Disclosure-style menu for small screens: a real <button> with
// aria-expanded, closes on Escape (returning focus) and on link click.
export function MobileNav({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-md border border-white/30 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
      >
        {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        <span className="max-[399px]:sr-only">Menu</span>
      </button>
      <nav
        id={panelId}
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full border-t border-white/10 bg-brand-900 shadow-lg"
      >
        <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
          {nav.map((item) => (
            <li key={item.href} className="border-b border-white/10 last:border-b-0">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base text-white hover:text-leaf-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
