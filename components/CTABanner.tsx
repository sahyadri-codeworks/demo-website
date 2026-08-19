import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTABanner() {
  return (
    <section className="bg-navy-950">
      <Reveal className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_auto]">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-brand-300">
              <span aria-hidden="true" className="h-px w-8 bg-brand-400" />
              Get Started
            </p>
            <h2 className="max-w-2xl font-serif text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.12]">
              Be ready when every second matters.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-300">
              Equip yourself or your team with practical skills that can make a difference during
              an emergency.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:flex-col lg:items-stretch">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-display text-base font-semibold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-brand-50"
            >
              Book a Training <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 font-display text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
