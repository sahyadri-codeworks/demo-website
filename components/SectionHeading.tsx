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
  const centered = align === "center";
  return (
    <Reveal className={`max-w-2xl ${centered ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <p
          className={`mb-4 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-brand-700 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span aria-hidden="true" className="h-px w-8 bg-brand-400" />
          {eyebrow}
          {centered && <span aria-hidden="true" className="h-px w-8 bg-brand-400" />}
        </p>
      )}
      <Tag className="font-serif text-3xl font-semibold tracking-tight text-navy-950 sm:text-[2.6rem] sm:leading-[1.15]">
        {title}
      </Tag>
      {subtitle && <p className="mt-5 text-lg leading-relaxed text-navy-600">{subtitle}</p>}
    </Reveal>
  );
}
