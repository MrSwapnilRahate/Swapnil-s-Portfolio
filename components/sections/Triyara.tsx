"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { versions, triyaraIntro, type Version } from "@/lib/data/triyara";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

const statusTone: Record<Version["status"], string> = {
  "In Production": "border-gold/50 bg-gold/12 text-gold-bright",
  "In Development": "border-iris/45 bg-iris/12 text-iris",
  Shipped: "border-gold/50 bg-gold/12 text-gold-bright",
  Roadmap: "border-line-strong bg-white/5 text-muted",
};

export function Triyara() {
  const container = useRef<HTMLDivElement>(null);
  /* Stacking is a desktop enhancement; layout itself stays CSS-driven. */
  const stackable = useMediaQuery("(min-width: 1024px)");

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="triyara" className="section-pad relative">
      <div className="shell">
        <Reveal>
          <Eyebrow index="02">The TRIYARA Product Story</Eyebrow>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14">
          <MaskedHeading lines={["One platform.", "Four versions."]} goldFrom={1} />
          <Reveal delay={0.12}>
            <p className="max-w-lg text-[0.92rem] leading-relaxed text-muted sm:text-base">
              {triyaraIntro}
            </p>
          </Reveal>
        </div>
      </div>

      {/* ---- Card deck ---- */}
      <div ref={container} className="shell relative mt-14 lg:mt-20">
        <div className="space-y-6 lg:space-y-0">
          {versions.map((v, i) => (
            <StackCard
              key={v.id}
              version={v}
              index={i}
              total={versions.length}
              progress={scrollYProgress}
              stackable={stackable}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCard({
  version,
  index,
  total,
  progress,
  stackable,
}: {
  version: Version;
  index: number;
  total: number;
  progress: MotionValue<number>;
  stackable: boolean;
}) {
  /* Each card settles slightly smaller than the one that lands on top of it. */
  const targetScale = 1 - (total - index) * 0.035;
  const range: [number, number] = [index * (1 / total), 1];

  const scaleRaw = useTransform(progress, range, [1, targetScale]);
  const dimRaw = useTransform(progress, range, [0, 0.55]);

  const scale = stackable ? scaleRaw : 1;
  const dim = stackable ? dimRaw : 0;

  return (
    <div
      className={
        stackable
          ? "sticky top-0 flex h-screen items-center justify-center"
          : "relative"
      }
    >
      <motion.article
        style={{
          scale,
          top: stackable ? `calc(-14vh + ${index * 28}px)` : undefined,
        }}
        className="panel-solid ticks relative w-full origin-top overflow-hidden rounded-xl"
      >
        {/* dimming veil as the next card arrives */}
        <motion.div
          aria-hidden
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 z-20 bg-void"
        />

        <div aria-hidden className="spotlight pointer-events-none absolute inset-0" />

        <div className="relative grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12 lg:p-12">
          {/* left: the story */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="display gold-text text-2xl leading-none sm:text-3xl">
                {version.version}
              </span>
              <span aria-hidden className="h-4 w-px bg-line-strong" />
              <span
                className={`label-mono rounded-md border px-2.5 py-1 text-[0.5rem] ${statusTone[version.status]}`}
              >
                {version.status}
              </span>
            </div>

            <h3 className="display chisel-sm mt-5 text-[clamp(1.6rem,4.6vw,3.1rem)] leading-[0.92] text-bone">
              {version.name}
            </h3>
            <p className="label-mono mt-3 text-[0.55rem] text-gold">{version.tagline}</p>

            <p className="mt-5 max-w-xl text-[0.88rem] leading-relaxed text-muted">
              {version.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {version.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>

          {/* right: what shipped */}
          <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="label-mono text-[0.5rem] text-faint">
              {version.status === "Roadmap" ? "Planned capabilities" : "What shipped"}
            </p>
            <ul className="mt-4 space-y-2.5">
              {version.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[0.8rem] leading-snug text-muted">
                  <span
                    aria-hidden
                    className="mt-[0.42rem] h-1 w-1 shrink-0 rotate-45 bg-gold/70"
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
