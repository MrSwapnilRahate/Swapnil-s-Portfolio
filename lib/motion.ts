import type { Variants, Transition } from "motion/react";

/** Reference uses long, decelerating moves — expo-out at ~0.9s. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const transition: Transition = { duration: 0.9, ease: EASE };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.1, ease: EASE } },
};

/** Lines rise out of an overflow-hidden mask. */
export const maskLine: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.05, ease: EASE } },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Shared viewport config so every section triggers consistently. */
export const inView = { once: true, amount: 0.25, margin: "0px 0px -8% 0px" } as const;
