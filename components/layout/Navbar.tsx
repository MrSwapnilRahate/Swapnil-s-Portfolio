"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/lib/data/profile";
import { EASE } from "@/lib/motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight whichever section owns the upper third of the viewport. */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Lock the page behind the mobile overlay. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-line bg-void/72 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="shell flex items-center justify-between py-4 sm:py-5"
        >
          <a
            href="#top"
            className="label-mono text-[0.66rem] text-bone transition-colors hover:text-gold sm:text-[0.72rem]"
          >
            {profile.name}
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`label-mono relative text-[0.62rem] transition-colors duration-400 ${
                      isActive ? "text-gold" : "text-muted hover:text-bone"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1.5 left-0 h-px w-full bg-gold"
                        transition={{ duration: 0.5, ease: EASE }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="label-mono hidden items-center gap-1.5 rounded-lg border border-line-strong px-4 py-2.5 text-[0.6rem] text-bone transition-colors duration-500 hover:border-gold/55 hover:text-gold-bright sm:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight size={12} strokeWidth={1.6} />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-lg border border-line text-bone transition-colors hover:border-gold/50 hover:text-gold lg:hidden"
            >
              {open ? <X size={17} strokeWidth={1.5} /> : <Menu size={17} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay — a composition of its own, not a squeezed desktop nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-void px-6 pb-10 pt-28 lg:hidden"
          >
            <div aria-hidden className="spotlight pointer-events-none absolute inset-0" />

            <ul className="relative flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <li key={link.href} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.12 + i * 0.06 }}
                    className="display flex items-baseline gap-4 py-2.5 text-[2.4rem] leading-none text-bone transition-colors active:text-gold"
                  >
                    <span className="label-mono text-[0.55rem] text-gold/70">
                      0{i + 1}
                    </span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative space-y-3 border-t border-line pt-6"
            >
              <a
                href={`mailto:${profile.email}`}
                className="block text-sm text-bone transition-colors hover:text-gold"
              >
                {profile.email}
              </a>
              <p className="label-mono text-[0.55rem] text-faint">{profile.location}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
