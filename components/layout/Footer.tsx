import { ArrowUp } from "lucide-react";
import { profile, navLinks } from "@/lib/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line">
      <div className="shell py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="display text-[clamp(1.6rem,5vw,2.6rem)] leading-none text-bone">
              {profile.name}
              <span className="text-gold">.</span>
            </p>
            <p className="label-mono mt-3 text-[0.53rem] text-faint">
              {profile.title} — {profile.positioning}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="label-mono text-[0.55rem] text-muted transition-colors duration-500 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono text-[0.5rem] text-faint">
            © {year} {profile.name} — All rights reserved
          </p>

          <div className="flex items-center gap-6">
            <p className="label-mono text-[0.5rem] text-faint">
              Built with Next.js &amp; TypeScript
            </p>
            <a
              href="#top"
              className="label-mono group flex items-center gap-1.5 text-[0.5rem] text-muted transition-colors duration-500 hover:text-gold"
            >
              Back to top
              <ArrowUp
                size={11}
                strokeWidth={1.6}
                className="transition-transform duration-500 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
