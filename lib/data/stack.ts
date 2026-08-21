export type Domain = {
  id: string;
  index: string;
  title: string;
  blurb: string;
  groups: { label: string; items: string[] }[];
  span: "wide" | "tall" | "normal";
};

export const domains: Domain[] = [
  {
    id: "frontend",
    index: "01",
    title: "Frontend Architecture",
    blurb:
      "Component systems and rendering strategy for applications that stay maintainable past the first release.",
    groups: [
      { label: "Core", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
      { label: "UI & State", items: ["Tailwind CSS", "Material UI", "Redux", "TanStack Query", "Server-State Management"] },
      { label: "Rendering", items: ["SSR", "SSG", "ISR", "Server Components", "Client Components"] },
    ],
    span: "wide",
  },
  {
    id: "backend",
    index: "02",
    title: "Backend & Data",
    blurb:
      "Layered services with authorization and data access kept deliberately separate.",
    groups: [
      { label: "Services", items: ["Node.js", "Express.js", "REST APIs", "API Design", "Zod"] },
      { label: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Redis concepts"] },
    ],
    span: "normal",
  },
  {
    id: "platform",
    index: "03",
    title: "Platform & Delivery",
    blurb:
      "Shipping pipelines, cloud storage and the infrastructure that carries the product to users.",
    groups: [
      { label: "Cloud", items: ["Vercel", "AWS", "AWS S3", "Docker"] },
      { label: "CI/CD", items: ["GitHub Actions", "CI/CD", "Git", "GitHub"] },
    ],
    span: "normal",
  },
  {
    id: "quality",
    index: "04",
    title: "Quality & Performance",
    blurb:
      "Testing at the right level, plus the measurement loop that proves performance work landed.",
    groups: [
      { label: "Testing", items: ["Jest", "Vitest", "React Testing Library", "Playwright", "MSW"] },
      { label: "Analytics", items: ["Google Tag Manager", "GA4", "Microsoft Clarity"] },
      { label: "Performance", items: ["Lighthouse", "Core Web Vitals", "Web Performance Optimization"] },
    ],
    span: "wide",
  },
];

/** System-design surface area — rendered as a dense capability grid. */
export const capabilities = [
  { label: "Authentication", note: "Session & credential flows" },
  { label: "Authorization", note: "Policy-driven access" },
  { label: "RBAC", note: "Role-scoped permissions" },
  { label: "Multi-Tenancy", note: "Organization isolation" },
  { label: "Caching", note: "Response & data layers" },
  { label: "CDN", note: "Edge delivery" },
  { label: "Database Indexing", note: "Query planning" },
  { label: "Connection Pooling", note: "Throughput under load" },
  { label: "Rate Limiting", note: "Abuse & cost control" },
  { label: "Horizontal Scaling", note: "Stateless services" },
  { label: "Load Testing", note: "Capacity validation" },
  { label: "System Design", note: "Trade-off reasoning" },
] as const;

/** Marquee strip under the stack section. */
export const marqueeItems = [
  "React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma",
  "Tailwind CSS", "TanStack Query", "AWS", "Docker", "GitHub Actions",
  "Playwright", "Vitest", "Zod", "Redux", "Express.js", "Material UI", "Vercel",
] as const;

export const tools = [
  "Git", "GitHub", "Postman", "JIRA", "Figma", "VS Code",
] as const;
