import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Hand, Laptop, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const chips = [
  { icon: BadgeCheck, label: "Certified Trainers", className: "-left-4 top-10 lg:-left-10", delay: 0.5 },
  { icon: Hand, label: "Hands-On Training", className: "-right-3 top-1/2 lg:-right-8", delay: 0.7 },
  { icon: Laptop, label: "Online & Onsite", className: "-left-4 bottom-10 lg:-left-12", delay: 0.9 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-brand-50/60 to-white pb-20 pt-32 sm:pt-36 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-aqua-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-8%] h-[380px] w-[380px] rounded-full bg-brand-100/70 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <Reveal>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-100">
            <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            Hands-on training by medical professionals
          </span>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-950 sm:text-5xl xl:text-[3.4rem]">
            Learn the Skills That Can{" "}
            <span className="relative whitespace-nowrap text-brand-600">
              Save a Life.
              <svg
                aria-hidden="true"
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 h-3 w-full text-aqua-400"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 9c60-6 180-8 294-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600">
            Professional First Aid, CPR, AED and Health &amp; Safety Training designed to build
            confident lifesavers in workplaces, institutions and communities.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-display text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Book a Training <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-base font-semibold text-navy-800 ring-1 ring-navy-300 transition-all hover:-translate-y-0.5 hover:text-brand-700 hover:ring-brand-400"
            >
              Explore Training Programs
            </Link>
          </div>
          <p className="mt-8 text-sm font-medium text-navy-500">
            Trusted by leading organizations across India and beyond
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-float ring-1 ring-navy-300/30">
            {/* PLACEHOLDER photo — replace with a real training photo. */}
            <Image
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1100&q=80"
              alt="Certified trainer demonstrating CPR on a mannequin while participants practice hands-on"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 576px"
              className="object-cover"
            />
          </div>
          {chips.map(({ icon: Icon, label, className, delay }) => (
            <Reveal
              key={label}
              delay={delay}
              className={`absolute ${className} flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-float ring-1 ring-navy-300/20`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50">
                <Icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
              </span>
              <span className="whitespace-nowrap text-sm font-semibold text-navy-800">{label}</span>
            </Reveal>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
