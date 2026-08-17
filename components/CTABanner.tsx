import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";
import Reveal from "./Reveal";

export default function CTABanner() {
  return (
    <section className="px-5 pb-24 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-700 to-aqua-600 px-8 py-20 text-center shadow-float sm:px-16">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 h-24 w-full -translate-y-1/2 text-white/10"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <path d="M0 50h300l30-40 30 80 30-60 30 20h780" stroke="currentColor" strokeWidth="3" />
          </svg>
          <div className="relative">
            <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
              <HeartPulse className="h-8 w-8 text-white" aria-hidden="true" />
            </span>
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Be Ready When Every Second Matters.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
              Equip yourself or your team with practical skills that can make a difference during
              an emergency.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-base font-semibold text-brand-700 shadow-lg shadow-navy-900/10 transition-all hover:-translate-y-0.5 hover:bg-brand-50"
              >
                Book a Training <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-base font-semibold text-white ring-2 ring-white/70 transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
