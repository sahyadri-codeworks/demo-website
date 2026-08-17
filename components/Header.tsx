"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Training Programs", href: "/courses" },
  { label: "Corporate Training", href: "/corporate" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/* Stylized wordmark matching the brand logo — crossbar-less A's. */
function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-label="ASAP"
      className={`font-display text-2xl font-extrabold tracking-tight ${className}`}
    >
      <span aria-hidden="true">ΛSΛP</span>
    </span>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on route change and lock body scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main"
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full bg-white px-6 transition-shadow duration-300 sm:px-8 ${
          scrolled
            ? "shadow-[0_2px_4px_rgb(14_15_20/0.06),0_16px_40px_-12px_rgb(14_15_20/0.18)]"
            : "shadow-[0_1px_2px_rgb(14_15_20/0.04),0_8px_28px_-10px_rgb(14_15_20/0.12)]"
        }`}
      >
        <Link href="/" className="shrink-0">
          <Wordmark className="text-brand-600" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-[15px] font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-brand-600"
                    : "text-navy-700 hover:text-brand-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded-full bg-brand-600 px-6 py-2.5 font-display text-[15px] font-semibold text-white shadow-md shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700 sm:inline-flex"
          >
            Book Training
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-800 ring-1 ring-navy-300 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-in drawer */}
      <div
        className={`fixed inset-x-0 bottom-0 top-24 z-40 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-navy-950/30" onClick={() => setOpen(false)} aria-hidden="true" />
        <div
          className={`absolute right-4 top-0 max-h-full w-80 max-w-[85%] overflow-y-auto rounded-3xl bg-white p-6 shadow-float transition-transform duration-300 ${
            open ? "translate-y-0" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-medium ${
                    isActive(link.href)
                      ? "bg-brand-50 text-brand-700"
                      : "text-navy-800 hover:bg-brand-50 hover:text-brand-700"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/contact"
                className="block rounded-full bg-brand-600 px-4 py-3 text-center font-display font-semibold text-white"
              >
                Book Training
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
