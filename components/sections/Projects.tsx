import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { profile } from "@/lib/data/profile";

export function Projects() {
  return (
    <section id="work" className="section-pad relative">
      <div className="shell">
        <Reveal>
          <Eyebrow index="03">Selected Projects</Eyebrow>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14">
          <MaskedHeading lines={["Selected works.", "Engineered value."]} goldFrom={1} />
          <Reveal delay={0.12}>
            <p className="max-w-lg text-[0.92rem] leading-relaxed text-muted sm:text-base">
              Work outside TRIYARA — built to exercise specific engineering problems rather
              than to fill a grid.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20" gap={0.12}>
          {projects.map((p) => (
            <RevealItem key={p.index}>
              <article className="panel ticks group relative flex h-full flex-col overflow-hidden rounded-sm p-6 transition-colors duration-700 hover:border-gold/40 sm:p-8">
                <div
                  aria-hidden
                  className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <span className="label-mono text-[0.52rem] text-faint">{p.index}</span>
                    <p className="label-mono mt-2 text-[0.52rem] text-gold">{p.category}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    className="shrink-0 text-faint transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                  />
                </div>

                <h3 className="display relative mt-6 text-[clamp(1.35rem,3.4vw,2.1rem)] leading-[0.95] text-bone transition-colors duration-500 group-hover:text-gold-bright">
                  {p.title}
                </h3>

                <p className="relative mt-4 text-[0.86rem] leading-relaxed text-muted">
                  {p.description}
                </p>

                <ul className="relative mt-6 space-y-2">
                  {p.focus.map((f) => (
                    <li key={f} className="flex gap-3 text-[0.79rem] leading-snug text-muted">
                      <span
                        aria-hidden
                        className="mt-[0.4rem] h-1 w-1 shrink-0 rotate-45 bg-gold/70"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-auto flex flex-wrap gap-2 pt-7">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono mt-10 inline-flex items-center gap-2 border-b border-line pb-1 text-[0.6rem] text-muted transition-colors duration-500 hover:border-gold/60 hover:text-gold-bright"
          >
            More on GitHub — @{profile.githubHandle}
            <ArrowUpRight size={12} strokeWidth={1.6} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
