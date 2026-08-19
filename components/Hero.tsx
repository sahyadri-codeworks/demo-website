import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-36 sm:pt-40 lg:pb-24">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <Reveal>
          <p className="mb-6 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Hands-on training by medical professionals
          </p>
          <h1 className="font-serif text-[2.6rem] font-semibold leading-[1.06] tracking-tight text-navy-950 sm:text-6xl xl:text-[4.1rem]">
            Learn the skills that can{" "}
            <em className="italic text-brand-600">save a life.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-600">
            Professional First Aid, CPR, AED and Health &amp; Safety Training designed to build
            confident lifesavers in workplaces, institutions and communities.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-display text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Book a Training <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-950/15 bg-white px-7 py-3.5 font-display text-base font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700"
            >
              Explore Training Programs
            </Link>
          </div>
          <p className="mt-9 border-t border-navy-950/10 pt-6 text-sm font-medium text-navy-500">
            Trusted by leading organizations across India and beyond
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[4/4.3] overflow-hidden rounded-2xl sm:aspect-[4/3.4] lg:aspect-[4/4.3]">
            {/* PLACEHOLDER photo — replace with a real training photo. */}
            <Image
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1100&q=80"
              alt="Certified trainer demonstrating CPR on a mannequin during a hands-on session"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-navy-950/0 to-navy-950/0"
            />
            <figcaption className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 rounded-xl bg-white/95 px-5 py-4 backdrop-blur-sm">
              <div>
                <p className="font-display text-sm font-bold text-navy-950">
                  Practice until response becomes reflex
                </p>
                <p className="mt-0.5 text-[13px] text-navy-500">
                  Live CPR, AED and first-aid drills in every session
                </p>
              </div>
              <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 sm:inline-flex">
                <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
            </figcaption>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
