"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { profile } from "@/lib/data/profile";
import { EASE } from "@/lib/motion";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  /* Subtle parallax: content drifts up and dims as the fold leaves. */
  const y = useTransform(scrollYProgress, [0, 0.18], [0, reduce ? 0 : -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.14], [1, reduce ? 1 : 0.25]);

  const { hero } = profile;

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-24 sm:pt-28">
      {/* stage lighting */}
      <div aria-hidden className="spotlight pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="grid-floor mask-fade-b pointer-events-none absolute inset-x-0 top-0 h-[70vh] opacity-[0.35]"
      />

      <motion.div style={{ y, opacity }} className="shell relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          {/* ---- Left: the lockup ---- */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="eyebrow mb-5 flex flex-wrap items-center gap-2.5"
            >
              <span className="text-faint">Portfolio</span>
              <span aria-hidden className="text-faint">/</span>
              <span>{profile.name}</span>
            </motion.p>

            <MaskedHeading
              as="h1"
              lines={hero.lines}
              goldFrom={hero.goldFrom}
              className="t-hero"
              delay={0.15}
            />

            {/* role separators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.75 }}
              className="mt-7 flex flex-col items-start gap-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4"
            >
              {hero.roles.map((role, i) => (
                <span key={role} className="flex items-center gap-3 sm:gap-4">
                  {i > 0 && (
                    <span aria-hidden className="hidden h-1 w-1 rotate-45 bg-gold/70 sm:block" />
                  )}
                  <span className="label-mono text-[0.58rem] text-muted sm:text-[0.64rem]">
                    {role}
                  </span>
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
              className="mt-6 max-w-xl text-[0.92rem] leading-relaxed text-muted sm:text-base"
            >
              {hero.blurb}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.95 }}
              className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Button href="#triyara" variant="gold">
                Explore my work
              </Button>
              <Button href={profile.resume} external>
                <Download size={12} strokeWidth={1.7} />
                Download resume
              </Button>
            </motion.div>

            {/* credibility markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6"
            >
              {hero.markers.map((m) => (
                <span key={m} className="label-mono text-[0.56rem] text-gold">
                  {m}
                </span>
              ))}
              <span className="label-mono flex items-center gap-1.5 text-[0.56rem] text-faint">
                <MapPin size={11} strokeWidth={1.6} />
                {profile.location}
              </span>
            </motion.div>
          </div>

          {/* ---- Right: the stage ---- */}
          <div className="relative">
            <HeroVisual />

            {/*
              Reference places a small caption stack and the script signature to
              the RIGHT of the figure, vertically centred against its upper body.
            */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: EASE, delay: 1.25 }}
              className="mt-3 text-center lg:absolute lg:right-0 lg:top-[38%] lg:mt-0 lg:max-w-[9rem] lg:text-right"
            >
              <p className="label-mono text-[0.5rem] leading-[1.9] text-gold/85">
                {profile.title}
              </p>
              <p className="label-mono text-[0.5rem] leading-[1.9] text-gold/85">
                {profile.positioning}
              </p>
              <p className="script mt-1 text-3xl leading-tight text-gold sm:text-4xl">
                {profile.firstName}
              </p>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors hover:text-gold md:flex"
      >
        <span className="label-mono text-[0.5rem]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={13} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
