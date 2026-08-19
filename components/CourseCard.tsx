import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Cross,
  HeartPulse,
  ShieldCheck,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Course } from "@/data/courses";

const ICONS: Record<Course["icon"], LucideIcon> = {
  cross: Cross,
  heart: HeartPulse,
  zap: Zap,
  wind: Wind,
  shield: ShieldCheck,
  building: Building2,
};

export default function CourseCard({ course }: { course: Course }) {
  const Icon = ICONS[course.icon];
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-navy-950/[0.08] bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover"
    >
      <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="font-serif text-xl font-semibold tracking-tight text-navy-950">{course.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-navy-600">{course.tagline}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-600">
        Learn More
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
