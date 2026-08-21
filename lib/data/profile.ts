export const profile = {
  name: "Swapnil Rahate",
  firstName: "Swapnil",
  title: "Software Engineer",
  positioning: "Frontend & Product Engineering",
  location: "Nagpur, Maharashtra, India",
  email: "swapnilrahate6598@gmail.com",
  linkedin: "https://www.linkedin.com/in/swapnil-rahate-b19009213/",
  github: "https://github.com/MrSwapnilRahate",
  githubHandle: "MrSwapnilRahate",
  resume: "/resume.pdf",

  /** Rendered as the three-line hero lockup. */
  hero: {
    lines: ["I build", "digital", "platforms."],
    /** Index of the first line that takes the gold gradient. */
    goldFrom: 1,
    roles: [
      "Software Engineer",
      "Frontend & Product Engineering",
      "System Design",
    ],
    blurb:
      "4.5+ years building production-grade web applications — from enterprise frontend at Infosys to architecting a B2B export platform end to end. React, Next.js and TypeScript, with the backend and infrastructure depth to own a product outright.",
    markers: ["4.5+ Years Experience", "Ex-Infosys"],
  },

  about: {
    lines: ["I don't just write code.", "I own the product."],
    body: [
      "I'm Swapnil Rahate, a Software Engineer with 4.5+ years of experience — 3.5+ of them at Infosys building and maintaining production frontend applications for enterprise teams.",
      "Today I lead product and technology at TRIYARA EXPORTS, a B2B import-export platform I architected from the first commit: public export site, authenticated multi-tenant dashboards, and the export tooling layered on top. The work spans frontend architecture, backend services, database design and delivery.",
    ],
  },

  contact: {
    lines: ["Initialize", "transmission."],
    body: "Open to Software Engineer and Frontend Engineer roles, and to conversations about product engineering and system design. The fastest route is email — I read everything.",
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "TRIYARA", href: "#triyara" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

/** Honest, verifiable figures only — no invented metrics. */
export const stats = [
  { value: "4.5+", unit: "yrs", label: "Software Engineering" },
  { value: "3.5+", unit: "yrs", label: "Enterprise at Infosys" },
  { value: "Founder", unit: "", label: "TRIYARA Exports" },
  { value: "V1→V4", unit: "", label: "Product Roadmap" },
] as const;
