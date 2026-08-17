import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-aqua-100 via-aqua-200 to-aqua-300 pb-16 pt-36 sm:pt-40 lg:pb-0">
      {/* Soft light wash top-left, deeper periwinkle bottom-right — ambient gradient. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-white/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-[-10%] h-[480px] w-[480px] rounded-full bg-brand-300/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:px-8">
        <Reveal className="pb-4 lg:pb-24">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-white/80 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            Hands-on training by medical professionals
          </span>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-950 sm:text-5xl xl:text-[3.6rem]">
            Learn the Skills That Can{" "}
            <span className="text-brand-600">Save a Life.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600">
            Professional First Aid, CPR, AED and Health &amp; Safety Training designed to build
            confident lifesavers in workplaces, institutions and communities.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-display text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Book a Training <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/60 px-7 py-3.5 font-display text-base font-semibold text-brand-700 ring-1 ring-brand-300 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Explore Training Programs
            </Link>
          </div>
          <p className="mt-8 text-sm font-medium text-navy-500">
            Trusted by leading organizations across India and beyond
          </p>
        </Reveal>

        {/* Duotone hero visual — grayscale photo tinted into the lavender/indigo palette,
            fading into the section background. */}
        <Reveal delay={0.15} className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-[3rem] lg:aspect-[5/4.4] lg:rounded-none lg:[mask-image:linear-gradient(to_left,black_78%,transparent_100%)]">
            {/* PLACEHOLDER photo — replace with the client's approved hero image. */}
            <Image
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1100&q=80"
              alt="Certified trainer demonstrating CPR on a mannequin during a hands-on session"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover grayscale"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-brand-600/50 mix-blend-multiply"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-aqua-200/60 mix-blend-screen"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-aqua-300/40 via-transparent to-transparent"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
