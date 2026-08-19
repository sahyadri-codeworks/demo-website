import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { COURSES } from "@/data/courses";
import { CONTACT, SITE_NAME } from "@/data/site";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Training Programs", href: "/courses" },
  { label: "Corporate Training", href: "/corporate" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/* PLACEHOLDER — point these at the real social profiles. */
const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-baseline gap-2.5">
              <span aria-label="ASAP" className="font-display text-2xl font-extrabold tracking-tight text-white">
                <span aria-hidden="true">ΛSΛP</span>
              </span>
              <span className="font-display text-sm font-semibold text-brand-300">
                Health &amp; Safety
              </span>
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed">
              Professional First Aid, CPR, AED and Health &amp; Safety training — building
              confident lifesavers in workplaces, institutions and communities.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-navy-300 ring-1 ring-white/10 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="lg:col-span-2 lg:col-start-6" aria-label="Footer">
            <h3 className="font-display font-bold text-white">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Training programs">
            <h3 className="font-display font-bold text-white">Training</h3>
            <ul className="mt-5 space-y-3">
              {COURSES.map((course) => (
                <li key={course.slug}>
                  <Link href={`/courses/${course.slug}`} className="transition-colors hover:text-white">
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-white">Contact</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.location}</li>
              <li className="text-brand-300">{CONTACT.onlineNote}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>© 2026 {SITE_NAME}. All Rights Reserved.</p>
          <p className="flex gap-6">
            {/* PLACEHOLDER — create real Privacy Policy and Terms pages before launch. */}
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
