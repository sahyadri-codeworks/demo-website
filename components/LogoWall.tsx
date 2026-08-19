import Reveal from "./Reveal";
import { CLIENTS } from "@/data/site";

/**
 * Client logo wall with a gentle CSS marquee.
 * PLACEHOLDER — currently renders client names as monochrome text chips.
 * Swap in real, permission-granted logo images before launch.
 */
export default function LogoWall() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section className="border-y border-navy-950/10 bg-cream py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-navy-500">
            Trusted by leading organizations
          </p>
        </Reveal>
      </div>
      <div className="relative mt-10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent"
        />
        <div className="animate-marquee flex w-max items-center gap-14 pr-14">
          {row.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="whitespace-nowrap font-serif text-xl font-semibold tracking-tight text-navy-400"
              aria-hidden={i >= CLIENTS.length}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
