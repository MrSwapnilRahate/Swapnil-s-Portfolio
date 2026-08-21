"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { profile, channels } from "@/lib/data/profile";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  /**
   * No server is wired up, so rather than fake a success state the form hands
   * off to the visitor's mail client with everything pre-filled. Swap in a
   * route handler + Resend when you want it captured server-side.
   */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry — ${form.name || "Hello"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-lg border border-line bg-white/[0.02] px-4 py-3 text-sm text-bone placeholder:text-faint transition-colors duration-500 focus:border-gold/55 focus:outline-none";

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div aria-hidden className="spotlight pointer-events-none absolute inset-0" />

      <div className="shell relative">
        <Reveal>
          <Eyebrow index="06">Contact</Eyebrow>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          {/* ---- Left ---- */}
          <div>
            <MaskedHeading lines={profile.contact.lines} goldFrom={1} />

            <Reveal delay={0.12}>
              <p className="mt-7 max-w-lg text-[0.92rem] leading-relaxed text-muted sm:text-base">
                {profile.contact.body}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-10 space-y-px overflow-hidden rounded-xl border border-line">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      {...(c.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center justify-between gap-4 border-b border-line bg-white/[0.015] px-5 py-4 transition-colors duration-500 last:border-0 hover:bg-gold/[0.07]"
                    >
                      <span className="label-mono text-[0.52rem] text-faint">
                        {c.label}
                      </span>
                      <span className="flex items-center gap-2 text-[0.85rem] text-bone transition-colors duration-500 group-hover:text-gold-bright">
                        {c.value}
                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.5}
                          className="text-faint transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="label-mono mt-6 flex items-center gap-2 text-[0.52rem] text-faint">
                <MapPin size={11} strokeWidth={1.6} />
                {profile.location}
              </p>
            </Reveal>
          </div>

          {/* ---- Right: form panel ---- */}
          <Reveal delay={0.18}>
            <div className="panel ticks relative rounded-xl p-6 sm:p-8">
              <p className="label-mono flex items-center gap-2 text-[0.52rem] text-gold">
                <Mail size={11} strokeWidth={1.7} />
                Compose message
                <span className="caret ml-0.5">_</span>
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <div>
                  <label htmlFor="name" className="label-mono text-[0.5rem] text-faint">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={`${field} mt-2`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="label-mono text-[0.5rem] text-faint">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className={`${field} mt-2`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label-mono text-[0.5rem] text-faint">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What are you building?"
                    className={`${field} mt-2 resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="group label-mono relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg border border-gold/60 bg-gold px-6 py-3.5 text-[0.62rem] text-void transition-colors duration-500 hover:bg-gold-bright"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Send transmission
                    <Send size={12} strokeWidth={1.8} />
                  </span>
                </button>

                <p className="text-[0.68rem] leading-relaxed text-faint">
                  Opens in your mail client, pre-filled — nothing is stored here.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
