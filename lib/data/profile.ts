export const profile = {
  name: "Swapnil Rahate",
  firstName: "Swapnil",
  title: "Software Engineer",
  positioning: "Frontend & Product Engineering",
  location: "Nagpur, Maharashtra, India",
  email: "swapnilrahate6598@gmail.com",
  phone: "+91 90752 00380",
  phoneHref: "tel:+919075200380",
  linkedin: "https://www.linkedin.com/in/swapnil-rahate-b19009213",
  linkedinHandle: "swapnil-rahate-b19009213",
  github: "https://github.com/MrSwapnilRahate",
  githubHandle: "MrSwapnilRahate",
  resume: "/resume.pdf",
  /** Background-removed cut-out rendered on the hero stage. */
  portrait: "/swapnil-portrait.png",

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
      "Software Engineer with 4.5+ years building production web applications across enterprise and startup environments — 3.5+ years at Infosys, now owning product and technology end to end at TRIYARA, a B2B import-export platform.",
    markers: ["4.5+ Years Experience", "Ex-Infosys"],
  },

  about: {
    lines: ["I don't just write code.", "I own the product."],
    body: [
      "I'm Swapnil Rahate, a Software Engineer with 4.5+ years of experience building production web applications and digital products. 3.5+ of those years were at Infosys, delivering frontend applications for enterprise teams.",
      "Today I own the end-to-end technology and product development of TRIYARA, a B2B import-export platform — spanning requirements, technical planning, architecture, implementation, deployment and product evolution.",
      "The work runs from React, Next.js and TypeScript on the frontend through authentication, authorization, multi-tenancy and database-driven application design on the back — taking products from a blank page to something in production that people actually use.",
    ],
  },

  education: {
    degree: "Bachelor of Engineering (B.E.)",
    institution: "Nagpur University",
    year: "2020",
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

/**
 * Verifiable figures only. The Lighthouse and LCP numbers are the measured
 * TRIYARA V1 results carried over from the resume.
 */
export const stats = [
  { value: "4.5+", unit: "yrs", label: "Software Engineering" },
  { value: "3.5+", unit: "yrs", label: "Enterprise at Infosys" },
  { value: "85→99", unit: "", label: "Lighthouse Performance" },
  { value: "4.2s→1.0s", unit: "", label: "LCP Reduction" },
] as const;

/** From the resume's Core Strengths line. */
export const coreStrengths = [
  "Frontend Architecture",
  "Product Engineering",
  "Technical Planning",
  "API Integration",
  "Authentication & Authorization",
  "Multi-Tenant Applications",
  "Performance Optimization",
  "Technical SEO",
  "Scalable Application Design",
  "End-to-End Product Ownership",
] as const;

/** Social + direct channels, shared by Contact and Footer. */
export const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "LinkedIn", value: `in/${profile.linkedinHandle}`, href: profile.linkedin },
  { label: "GitHub", value: `@${profile.githubHandle}`, href: profile.github },
] as const;
