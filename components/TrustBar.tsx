import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import { STATS } from "@/data/site";

/**
 * Statistics strip below the hero.
 * ⚠ CLIENT TO CONFIRM — figures in data/site.ts are taken from the existing
 * business website and must be verified before launch.
 */
export default function TrustBar() {
  return (
    <section className="border-b border-navy-950/10 bg-cream pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 divide-navy-950/10 border-t border-navy-950/10 pt-10 sm:grid-cols-4 sm:divide-x">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className="px-2 py-4 text-center sm:px-6"
            >
              <p className="font-serif text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-navy-500">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
