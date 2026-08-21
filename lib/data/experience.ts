export type Role = {
  period: string;
  start: string;
  company: string;
  role: string;
  kind: string;
  summary: string;
  points: string[];
  current?: boolean;
  education?: boolean;
};

export const experience: Role[] = [
  {
    period: "Jun 2025 — Present",
    start: "2025",
    company: "TRIYARA Exports",
    role: "Founder & Technology Lead",
    kind: "Product Ownership",
    summary:
      "Own the end-to-end technology and digital product development of a B2B import-export platform — requirements, technical planning, architecture, implementation, deployment and product evolution.",
    points: [
      "Architected and built a static-first, SEO-focused Next.js platform using React and TypeScript, implementing product and country landing pages, metadata, structured data, sitemap generation, robots configuration and RFQ/contact workflows.",
      "Improved web performance from a Lighthouse Performance score of 85 to 99 and reduced LCP from 4.2s to 1.0s through image optimization, performance analysis, rendering strategy improvements and Vercel CDN-based deployment.",
      "Built buyer and supplier onboarding and role-specific dashboards; implemented authentication, CASL-based authorization, organization-scoped multi-tenant access, PostgreSQL with Prisma, Zod validation and TanStack Query.",
      "Designed reusable layers for API routes, business logic, authorization and data access; integrated AWS S3 for document workflows, transactional email delivery and CI checks.",
      "Designed modular export costing and pricing utilities covering freight, insurance, costing and pricing, enabling new business tools without tightly coupling them to the core platform.",
      "Defined product and technical direction for a B2B marketplace — supplier discovery, listings, search and filtering, supplier profiles, buyer requirements, RFQs, lead management, dashboards and communication workflows.",
      "Evaluated scaling strategies around caching, database indexing, connection management, rate limiting, asynchronous processing, read replicas and load testing using a bottleneck-driven approach.",
    ],
    current: true,
  },
  {
    period: "Apr 2022 — Jun 2025",
    start: "2022",
    company: "Infosys",
    role: "Software Development Engineer — Frontend",
    kind: "Enterprise Engineering",
    summary:
      "Built and maintained production web applications for enterprise clients across a 3.5+ year tenure.",
    points: [
      "Developed and maintained production web applications using React.js, JavaScript, HTML5 and CSS3, following reusable component and modular architecture principles.",
      "Built responsive user interfaces and integrated applications with REST APIs and backend services, handling state, validation, asynchronous interactions and end-user workflows.",
      "Contributed across the software development lifecycle — requirement analysis, development, testing, debugging, code reviews, defect resolution and production issue analysis.",
      "Collaborated with developers, QA engineers, designers and business stakeholders to deliver maintainable, user-focused features and support reliable releases.",
      "Improved application quality and frontend performance through component optimization, efficient rendering, debugging, Git-based workflows, JIRA, Postman and CI/CD practices.",
    ],
  },
  {
    period: "2020",
    start: "2020",
    company: "Nagpur University",
    role: "Bachelor of Engineering (B.E.)",
    kind: "Education",
    summary: "Bachelor of Engineering, Nagpur University.",
    points: [],
    education: true,
  },
];
