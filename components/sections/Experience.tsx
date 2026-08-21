"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experience } from "@/lib/data/experience";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Experience() {
  const track = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start 75%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="section-pad relative">
      <div className="shell">
        <Reveal>
          <Eyebrow index="05">Experience</Eyebrow>
        </Reveal>

        <div className="mt-8">
          <MaskedHeading lines={["Experience &", "milestones."]} goldFrom={1} />
        </div>

        {/* ---- Timeline ---- */}
        <div ref={track} className="relative mt-14 lg:mt-20">
          {/* spine */}
          <div
            aria-hidden
            className="absolute bottom-0 left-[7px] top-2 w-px bg-line lg:left-[calc(13rem+7px)]"
          />
          <motion.div
            aria-hidden
            style={{ scaleY }}
            className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-gold-bright via-gold to-gold-deep lg:left-[calc(13rem+7px)]"
          />

          <div className="space-y-14 lg:space-y-20">
            {experience.map((role) => (
              <Reveal key={role.company}>
                <div className="grid gap-5 lg:grid-cols-[13rem_1fr] lg:gap-0">
                  {/* date rail */}
                  <div className="lg:pr-10 lg:text-right">
                    <p className="label-mono text-[0.55rem] text-gold">{role.period}</p>
                    <p className="label-mono mt-2 text-[0.5rem] text-faint">{role.kind}</p>
                  </div>

                  {/* node + body */}
                  <div className="relative pl-8 lg:pl-10">
                    <span
                      aria-hidden
                      className={`absolute left-0 top-[0.35rem] grid h-[15px] w-[15px] place-items-center rounded-full border lg:left-0 ${
                        role.current
                          ? "border-gold bg-gold/25"
                          : "border-line-strong bg-void"
                      }`}
                    >
                      <span
                        className={`h-[5px] w-[5px] rounded-full ${
                          role.current ? "bg-gold" : "bg-faint"
                        }`}
                      />
                      {role.current && (
                        <motion.span
                          className="absolute inset-0 rounded-full border border-gold"
                          animate={{ scale: [1, 1.9], opacity: [0.7, 0] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                    </span>

                    <h3 className="display text-[clamp(1.35rem,3.6vw,2.3rem)] leading-[0.95] text-bone">
                      {role.role}
                    </h3>
                    <p className="label-mono mt-2.5 text-[0.58rem] text-gold">
                      {role.company}
                    </p>

                    <p className="mt-4 max-w-2xl text-[0.88rem] leading-relaxed text-muted">
                      {role.summary}
                    </p>

                    <RevealGroup className="mt-6 grid max-w-3xl gap-2.5 md:grid-cols-2" gap={0.05}>
                      {role.points.map((pt) => (
                        <RevealItem key={pt}>
                          <p className="flex gap-3 text-[0.79rem] leading-snug text-muted">
                            <span
                              aria-hidden
                              className="mt-[0.4rem] h-1 w-1 shrink-0 rotate-45 bg-gold/70"
                            />
                            {pt}
                          </p>
                        </RevealItem>
                      ))}
                    </RevealGroup>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
