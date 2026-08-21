import type { ReactNode } from "react";
import { Magnetic } from "./Magnetic";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "ghost",
  external = false,
  className = "",
}: Props) {
  const base =
    "group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-sm px-6 py-3.5 label-mono text-[0.62rem] transition-colors duration-500 sm:inline-flex sm:w-auto sm:px-8";

  const styles =
    variant === "gold"
      ? "border border-gold/60 text-void bg-gold hover:bg-gold-bright"
      : "border border-line-strong text-bone hover:border-gold/55 hover:text-gold-bright";

  return (
    <Magnetic className={`block w-full sm:inline-block sm:w-auto ${className}`}>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`${base} ${styles}`}
      >
        {/* sheen sweep on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/22 to-transparent transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full"
        />
        <span className="relative z-10 flex items-center gap-2.5">{children}</span>
      </a>
    </Magnetic>
  );
}
