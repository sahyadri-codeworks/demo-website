import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { STEPS } from "@/data/site";

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From First Click to First Responder"
          subtitle="Getting your team trained is simple — four steps from enquiry to certification."
        />
        <ol className="mt-16 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12} as="li" className="relative lg:pr-2">
              <div className="border-t-2 border-navy-950/10 pt-6">
                <span className="font-serif text-4xl font-semibold text-brand-600">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-navy-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
