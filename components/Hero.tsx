import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { CONTACT } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-aqua-100 via-aqua-200 to-aqua-300 pb-16 pt-36 sm:pt-40 lg:pb-0">
      {/* Soft light wash top-left, deeper periwinkle bottom-right — matches the mockup's ambient gradient. */}
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
          <h1 className="font-display tracking-tight text-navy-950">
            <span className="block text-5xl font-medium sm:text-6xl xl:text-[4.2rem]">
              Train Today
            </span>
            <span className="mt-1 block text-5xl font-black uppercase leading-[1.02] sm:text-6xl xl:text-[4.2rem]">
              Respond
              <br />
              Tomorrow
            </span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-navy-600 sm:text-xl">
            We train your team to respond with confidence when every second counts.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-7 py-3 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Join the Program
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-white/60 px-7 py-3 font-display text-[15px] font-semibold text-brand-700 ring-1 ring-brand-300 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Talk to Us
            </a>
          </div>
        </Reveal>

        {/* Duotone hero visual — grayscale photo tinted into the lavender/indigo palette,
            fading into the section background like the mockup's 3D hand render. */}
        <Reveal delay={0.15} className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-[3rem] lg:aspect-[5/4.4] lg:rounded-none lg:[mask-image:linear-gradient(to_left,black_78%,transparent_100%)]">
            {/* PLACEHOLDER photo — replace with the client's approved hero image. */}
            <Image
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1100&q=80"
              alt="Hands practicing chest compressions on a CPR training mannequin"
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
