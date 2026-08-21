"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

type Props = { children: ReactNode; className?: string; strength?: number };

/**
 * Pulls its child toward the cursor. Pointer-fine only — on touch the motion
 * values never update, so it renders as a plain wrapper.
 */
export function Magnetic({ children, className, strength = 0.32 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 220, damping: 18, mass: 0.5 };
  const x = useSpring(mx, spring);
  const y = useSpring(my, spring);

  function onMove(e: React.MouseEvent<HTMLSpanElement>) {
    if (reduce || !ref.current) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    my.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={`inline-block ${className ?? ""}`}
    >
      {children}
    </motion.span>
  );
}
