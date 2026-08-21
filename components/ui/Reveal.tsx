"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, inView, stagger } from "@/lib/motion";

/**
 * Static map rather than `motion.create(as)` — creating the component during
 * render produces a new type every pass, which remounts the whole subtree and
 * restarts its animation.
 */
const TAGS = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  section: motion.section,
  article: motion.article,
  ul: motion.ul,
  li: motion.li,
} as const;

type TagName = keyof typeof TAGS;

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: TagName;
};

/** Single element that fades and rises once on scroll. */
export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const MotionTag = TAGS[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Parent that staggers its RevealItem children. */
export function RevealGroup({
  children,
  className,
  gap = 0.08,
  delay = 0,
  as = "div",
}: Props & { gap?: number }) {
  const MotionTag = TAGS[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={stagger(gap, delay)}
    >
      {children}
    </MotionTag>
  );
}

/** Child of RevealGroup. */
export function RevealItem({ children, className, as = "div" }: Props) {
  const MotionTag = TAGS[as];

  return (
    <MotionTag className={className} variants={fadeUp}>
      {children}
    </MotionTag>
  );
}
