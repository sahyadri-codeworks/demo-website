import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="mb-4 inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">
          {eyebrow}
        </span>
      )}
      <Tag className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
        {title}
      </Tag>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-navy-600">{subtitle}</p>}
    </Reveal>
  );
}
