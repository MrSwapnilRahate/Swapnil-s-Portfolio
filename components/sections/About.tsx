import { profile, stats } from "@/lib/data/profile";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const facts = [
  { k: "Current", v: "Founder / Product & Technology Lead" },
  { k: "Company", v: "TRIYARA Exports" },
  { k: "Previously", v: "Software Development Engineer — Frontend" },
  { k: "Enterprise", v: "Infosys · Apr 2022 — Jun 2025" },
  { k: "Focus", v: "Frontend Architecture · Product Engineering" },
  { k: "Based in", v: profile.location },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="shell">
        <Reveal>
          <Eyebrow index="01">About</Eyebrow>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.28fr_0.72fr] lg:gap-14">
          {/* ---- Narrative ---- */}
          <div>
            <MaskedHeading lines={profile.about.lines} goldFrom={1} className="t-h2" />

            <RevealGroup className="mt-8 max-w-xl space-y-5" gap={0.1}>
              {profile.about.body.map((p) => (
                <RevealItem key={p.slice(0, 24)} as="p">
                  <span className="block text-[0.92rem] leading-relaxed text-muted sm:text-base">
                    {p}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* ---- Framed fact panel (the reference's framed portrait slot) ---- */}
          <Reveal delay={0.15}>
            <div className="panel ticks relative rounded-sm p-6 sm:p-8">
              <div aria-hidden className="spotlight pointer-events-none absolute inset-0" />
              <p className="label-mono relative text-[0.55rem] text-gold">At a glance</p>

              <dl className="relative mt-6 space-y-4">
                {facts.map((f) => (
                  <div
                    key={f.k}
                    className="grid grid-cols-[5.5rem_1fr] items-baseline gap-3 border-b border-line pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="label-mono text-[0.53rem] text-faint">{f.k}</dt>
                    <dd className="text-[0.85rem] leading-snug text-bone">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* ---- Stats strip ---- */}
        <RevealGroup
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-9 border-t border-line pt-10 lg:mt-20 lg:grid-cols-4"
          gap={0.09}
        >
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <p className="display gold-text t-stat leading-none">
                {s.value}
                {s.unit && (
                  <span className="label-mono ml-1.5 align-super text-[0.5rem] tracking-[0.2em]">
                    {s.unit}
                  </span>
                )}
              </p>
              <p className="label-mono mt-3 text-[0.55rem] leading-relaxed text-muted">
                {s.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
