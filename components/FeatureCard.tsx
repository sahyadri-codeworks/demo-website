import {
  Award,
  BadgeCheck,
  Hand,
  Laptop,
  Siren,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  award: Award,
  hand: Hand,
  sliders: SlidersHorizontal,
  laptop: Laptop,
  siren: Siren,
  badge: BadgeCheck,
};

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const Icon = ICONS[icon] ?? Award;
  return (
    <div className="group flex h-full gap-5 rounded-2xl border border-navy-950/[0.08] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua-50 text-aqua-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-display text-lg font-bold text-navy-950">{title}</h3>
        <p className="mt-2 leading-relaxed text-navy-600">{description}</p>
      </div>
    </div>
  );
}
