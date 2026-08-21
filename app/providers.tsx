"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` lets Motion honour the OS setting globally: transform
 * and layout animations resolve instantly while opacity still fades. Handling
 * it here — rather than branching markup per component — keeps the server and
 * client trees identical, which is what a hydration-safe tree requires.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
