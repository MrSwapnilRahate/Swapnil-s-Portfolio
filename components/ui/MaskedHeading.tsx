"use client";

import { motion } from "motion/react";
import { inView, maskLine, stagger } from "@/lib/motion";

type Props = {
  lines: readonly string[];
  /** Index of the first line rendered in the gold gradient. */
  goldFrom?: number;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
};

/**
 * The reference's signature headline: stacked uppercase lines that rise out of
 * a mask, with the trailing line(s) filled by the metallic gold gradient.
 */
export function MaskedHeading({
  lines,
  goldFrom = 1,
  className = "t-h2",
  as: Tag = "h2",
  delay = 0,
}: Props) {
  return (
    <Tag className={`display ${className}`}>
      <motion.span
        className="block"
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger(0.09, delay)}
      >
        {lines.map((line, i) => (
          // pb/-mb keeps descenders and the gradient from being clipped by the mask
          <span key={line} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
            <motion.span
              className={`block ${i >= goldFrom ? "gold-text" : ""}`}
              variants={maskLine}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
