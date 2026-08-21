"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/lib/data/profile";
import { EASE } from "@/lib/motion";

/**
 * The reference frames its subject in a stage: overhead beam, rim light and a
 * reflective grid floor. That staging is the visual, so it renders with or
 * without a photograph — drop a cut-out at /public/portrait.png and set
 * `portrait` in profile.ts to light it.
 */
export function HeroVisual() {
  const portrait = (profile as { portrait?: string }).portrait;

  return (
    <div className="relative h-[clamp(15rem,38vw,20rem)] w-full select-none lg:h-[clamp(26rem,40vw,38rem)]">
      {/* overhead beam */}
      <div
        aria-hidden
        className={`absolute left-1/2 top-0 h-[62%] w-[78%] -translate-x-1/2 beam`}
        style={{
          background:
            "conic-gradient(from 180deg at 50% 0%, transparent 42%, rgba(233,180,76,0.20) 50%, transparent 58%)",
          filter: "blur(22px)",
        }}
      />

      {/* floor + reflection */}
      <div
        aria-hidden
        className="grid-floor mask-fade-b absolute inset-x-0 bottom-0 h-[42%] opacity-45"
        style={{ transform: "perspective(520px) rotateX(66deg)", transformOrigin: "bottom" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-[18%] bottom-[16%] h-24 rounded-[50%] blur-2xl"
        style={{ background: "radial-gradient(ellipse, rgba(233,180,76,0.26), transparent 70%)" }}
      />

      {/* subject */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.35 }}
        className="absolute inset-0 flex items-end justify-center"
      >
        {portrait ? (
          <Image
            src={portrait}
            alt={`${profile.name}, ${profile.title}`}
            width={620}
            height={900}
            priority
            sizes="(max-width: 1024px) 70vw, 34vw"
            className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_60px_rgba(233,180,76,0.18)]"
          />
        ) : (
          <Monogram />
        )}
      </motion.div>

      {/* vignette to sink the edges */}
      <div aria-hidden className="vignette pointer-events-none absolute -inset-16 opacity-60" />
    </div>
  );
}

/** Lit monolith fallback — reads as staged art, not a missing image. */
function Monogram() {

  return (
    <div className="relative mb-[14%] h-[74%] w-[min(19rem,62%)]">
      <div className="panel ticks relative h-full w-full overflow-hidden rounded-sm">
        <div aria-hidden className="spotlight absolute inset-0" />
        <div aria-hidden className="grid-floor absolute inset-0 opacity-25" />

        <div className="relative flex h-full flex-col items-center justify-center gap-5 px-6 text-center">
          <span className="display gold-text text-[clamp(4rem,13vw,7.5rem)] leading-none">
            SR
          </span>
          <span className="label-mono text-[0.55rem] text-muted">
            {profile.title}
          </span>
          <span aria-hidden className="h-px w-14 bg-gold/40" />
          <span className="label-mono text-[0.55rem] text-faint">
            {profile.positioning}
          </span>
        </div>

        {/* rim light sweeping the left edge */}
        <motion.div
          aria-hidden
          className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent"
          animate={{ opacity: [0.3, 0.85, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
