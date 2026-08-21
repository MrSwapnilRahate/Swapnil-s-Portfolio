import { domains, capabilities, marqueeItems, tools } from "@/lib/data/stack";
import { coreStrengths } from "@/lib/data/profile";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

const spanClass = {
  wide: "lg:col-span-2",
  tall: "lg:row-span-2",
  normal: "",
} as const;

export function TechMatrix() {
  return (
    <section id="stack" className="section-pad relative">
      <div className="shell">
        <Reveal>
          <Eyebrow index="04">Tech Matrix</Eyebrow>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14">
          <MaskedHeading
            lines={["Architectural mastery.", "Precision applied."]}
            goldFrom={1}
          />
          <Reveal delay={0.12}>
            <p className="max-w-lg text-[0.92rem] leading-relaxed text-muted sm:text-base">
              The surface area I work across — grouped by the decisions each layer
              actually forces you to make.
            </p>
          </Reveal>
        </div>

        {/* ---- Core strengths ---- */}
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-line pt-8">
            <span className="label-mono mr-2 text-[0.52rem] text-faint">
              Core strengths
            </span>
            {coreStrengths.map((c) => (
              <Tag key={c}>{c}</Tag>
            ))}
          </div>
        </Reveal>

        {/* ---- Bento of domains ---- */}
        <RevealGroup className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3" gap={0.1}>
          {domains.map((d) => (
            <RevealItem key={d.id} className={spanClass[d.span]}>
              <article className="panel ticks group relative flex h-full flex-col overflow-hidden rounded-sm p-6 transition-colors duration-700 hover:border-gold/40 sm:p-8">
                <div
                  aria-hidden
                  className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />

                <div className="relative flex items-baseline gap-3">
                  <span className="label-mono text-[0.52rem] text-faint">{d.index}</span>
                  <h3 className="display gold-text text-[clamp(1.1rem,2.6vw,1.6rem)] leading-none">
                    {d.title}
                  </h3>
                </div>

                <p className="relative mt-4 max-w-md text-[0.83rem] leading-relaxed text-muted">
                  {d.blurb}
                </p>

                <div className="relative mt-7 space-y-5">
                  {d.groups.map((g) => (
                    <div key={g.label}>
                      <p className="label-mono text-[0.5rem] text-faint">{g.label}</p>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {g.items.map((item) => (
                          <Tag key={item}>{item}</Tag>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* ---- System design surface ---- */}
        <div className="mt-16 lg:mt-24">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-10">
              <h3 className="display text-[clamp(1.3rem,3.2vw,2rem)] leading-none text-bone">
                System design <span className="gold-text">surface.</span>
              </h3>
              <p className="label-mono text-[0.53rem] text-faint">
                Applied across TRIYARA V1 — V3
              </p>
            </div>
          </Reveal>

          <RevealGroup
            className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3 lg:grid-cols-4"
            gap={0.045}
          >
            {capabilities.map((c) => (
              <RevealItem key={c.label}>
                <div className="group h-full bg-void p-4 transition-colors duration-500 hover:bg-elev sm:p-5">
                  <p className="label-mono text-[0.55rem] text-bone transition-colors duration-500 group-hover:text-gold-bright">
                    {c.label}
                  </p>
                  <p className="mt-2 text-[0.72rem] leading-snug text-faint">{c.note}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* ---- Tools ---- */}
        <Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2.5 border-t border-line pt-8">
            <span className="label-mono mr-2 text-[0.52rem] text-faint">Daily tools</span>
            {tools.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ---- Marquee ---- */}
      <div
        aria-hidden
        className="relative mt-16 flex overflow-hidden border-y border-line py-5 lg:mt-24"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-10">
              <span className="label-mono text-[0.62rem] text-faint">{item}</span>
              <span className="h-1 w-1 rotate-45 bg-gold/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
