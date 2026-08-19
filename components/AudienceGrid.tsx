import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { AUDIENCES } from "@/data/site";

const ICONS: Record<string, LucideIcon> = {
  building: Building2,
  school: GraduationCap,
  stethoscope: Stethoscope,
  users: Users,
};

/** "Who We Train" — audience-segmented cards mapping programs to each segment. */
export default function AudienceGrid() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Who We Train"
          title="Training Built for the People In Front of Us"
          subtitle="An office floor, a classroom, a hospital corridor and a family home face very different emergencies. Every program is shaped around who is in the room."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {AUDIENCES.map((audience, i) => {
            const Icon = ICONS[audience.icon] ?? Users;
            return (
              <Reveal key={audience.title} delay={(i % 2) * 0.1}>
                <div className="group flex h-full flex-col rounded-2xl border border-navy-950/[0.08] bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover sm:p-10">
                  <div className="flex items-start gap-5">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold tracking-tight text-navy-950">
                        {audience.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-navy-600">{audience.description}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2.5 border-t border-navy-950/10 pt-6">
                    {audience.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 font-medium text-navy-800">
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={audience.href}
                    className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    {audience.linkLabel}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
