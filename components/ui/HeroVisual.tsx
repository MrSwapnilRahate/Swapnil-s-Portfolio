"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { profile } from "@/lib/data/profile";
import { EASE } from "@/lib/motion";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

/**
 * The reference frames its subject in a stage: overhead beam, rim light and a
 * reflective grid floor. The figure is a still cut-out, so the motion is
 * cinematic rather than a walk cycle — entrance, a slow breathing float,
 * scroll parallax and a subtle tilt toward the cursor. All GPU transforms.
 */
export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const finePointer = useMediaQuery("(pointer: fine)");
  const tiltEnabled = finePointer && !reduce;

  const { portrait } = profile;

  /* Scroll parallax: the figure drifts slower than the page. */
  const { scrollYProgress } = useScroll();
  const parallax = useTransform(scrollYProgress, [0, 0.2], [0, reduce ? 0 : 46]);

  /* Pointer tilt — springed so it never snaps. */
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 90, damping: 20, mass: 0.7 };
  const rotateY = useSpring(px, spring);
  const rotateX = useSpring(py, spring);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!tiltEnabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    px.set(dx * 5);
    py.set(-dy * 3.5);
  }

  function reset() {
    px.set(0);
    py.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="relative h-[clamp(19rem,46vw,24rem)] w-full select-none lg:h-[clamp(28rem,44vw,40rem)]"
      style={{ perspective: 1200 }}
    >
      {/* overhead beam */}
      <div
        aria-hidden
        className="beam absolute left-1/2 top-0 h-[62%] w-[78%] -translate-x-1/2"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 0%, transparent 42%, rgba(233,180,76,0.20) 50%, transparent 58%)",
          filter: "blur(22px)",
        }}
      />

      {/* floor + contact shadow */}
      <div
        aria-hidden
        className="grid-floor mask-fade-b absolute inset-x-0 bottom-0 h-[38%] opacity-40"
        style={{ transform: "perspective(520px) rotateX(66deg)", transformOrigin: "bottom" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-[20%] bottom-[6%] h-20 rounded-[50%] blur-2xl"
        style={{ background: "radial-gradient(ellipse, rgba(233,180,76,0.22), transparent 70%)" }}
      />

      {/* subject */}
      <motion.div
        style={{ y: parallax, rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="absolute inset-0 flex items-end justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.35 }}
          className="relative flex h-full w-full items-end justify-center"
        >
          {/* rim glow — the navy shirt would otherwise vanish into the background */}
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 h-[86%] w-[62%] -translate-x-1/2 rounded-[46%] blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, rgba(233,180,76,0.22), rgba(99,102,241,0.10) 55%, transparent 75%)",
            }}
          />

          {portrait ? (
            <motion.div
              animate={reduce ? undefined : { y: [0, -9, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-auto"
            >
              <Image
                src={portrait}
                alt={`${profile.name}, ${profile.title}`}
                width={571}
                height={1232}
                priority
                sizes="(max-width: 1024px) 60vw, 34vw"
                className="h-full w-auto object-contain object-bottom drop-shadow-[0_18px_60px_rgba(0,0,0,0.65)]"
                style={{
                  // blends the mid-thigh crop into the stage floor
                  maskImage:
                    "linear-gradient(180deg, #000 0%, #000 82%, rgba(0,0,0,0.45) 93%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(180deg, #000 0%, #000 82%, rgba(0,0,0,0.45) 93%, transparent 100%)",
                }}
              />
            </motion.div>
          ) : (
            <Monogram />
          )}
        </motion.div>
      </motion.div>

      <div aria-hidden className="vignette pointer-events-none absolute -inset-16 opacity-60" />
    </div>
  );
}

/** Lit monolith fallback — used when no portrait is set. */
function Monogram() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mb-[14%] h-[74%] w-[min(19rem,62%)]">
      <div className="panel ticks relative h-full w-full overflow-hidden rounded-xl">
        <div aria-hidden className="spotlight absolute inset-0" />
        <div aria-hidden className="grid-floor absolute inset-0 opacity-25" />

        <div className="relative flex h-full flex-col items-center justify-center gap-5 px-6 text-center">
          <span className="display gold-text text-[clamp(4rem,13vw,7.5rem)] leading-none">SR</span>
          <span className="label-mono text-[0.55rem] text-muted">{profile.title}</span>
          <span aria-hidden className="h-px w-14 bg-gold/40" />
          <span className="label-mono text-[0.55rem] text-faint">{profile.positioning}</span>
        </div>

        <motion.div
          aria-hidden
          className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent"
          animate={reduce ? undefined : { opacity: [0.3, 0.85, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
