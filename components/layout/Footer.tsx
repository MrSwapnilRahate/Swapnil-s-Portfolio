import { ArrowUp, ArrowUpRight, Download } from "lucide-react";
import { profile, navLinks, channels } from "@/lib/data/profile";

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

            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono mt-6 inline-flex items-center gap-2 border-b border-line pb-1 text-[0.55rem] text-muted transition-colors duration-500 hover:border-gold/60 hover:text-gold-bright"
            >
              <Download size={11} strokeWidth={1.7} />
              Download resume
            </a>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <p className="label-mono mb-4 text-[0.5rem] text-faint">Sections</p>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="label-mono inline-flex text-[0.55rem] leading-none text-muted transition-colors duration-500 hover:text-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="label-mono mb-4 text-[0.5rem] text-faint">Elsewhere</p>
              <ul className="flex flex-col gap-2.5">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      {...(c.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group label-mono inline-flex items-center gap-1.5 text-[0.55rem] leading-none text-muted transition-colors duration-500 hover:text-gold"
                    >
                      {c.label}
                      <ArrowUpRight
                        size={10}
                        strokeWidth={1.6}
                        className="text-faint transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
