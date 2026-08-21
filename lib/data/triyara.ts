export type Version = {
  id: string;
  version: string;
  name: string;
  status: "Shipped" | "In Production" | "In Development" | "Roadmap";
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const triyaraIntro =
  "TRIYARA is a B2B import-export technology platform — not a website project. It ships as versioned products, each one adding a layer of capability on top of the last.";

export const versions: Version[] = [
  {
    id: "v1",
    version: "V1",
    name: "Public Export Platform",
    status: "In Production",
    tagline: "Static-first, SEO-led acquisition surface",
    description:
      "The public-facing export platform: product and country landing pages built on a static-first architecture, engineered for search visibility and Core Web Vitals.",
    highlights: [
      "Architected and developed the public-facing export platform",
      "Built product and country landing pages",
      "SEO-focused architecture with metadata and structured data",
      "Sitemap and robots configuration",
      "RFQ and contact workflows",
      "GTM, GA4 and Microsoft Clarity integration",
      "Image and static asset optimization, improved Core Web Vitals",
      "Vercel CDN-based delivery",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "GTM", "GA4", "Clarity"],
  },
  {
    id: "v2",
    version: "V2",
    name: "TRIYARA BNP",
    status: "In Development",
    tagline: "Multi-tenant buyer & supplier application",
    description:
      "The authenticated product: buyer and supplier onboarding, role-specific dashboards, and organization-scoped multi-tenant access over a layered backend.",
    highlights: [
      "Buyer and supplier registration workflows",
      "Role-specific dashboards",
      "Authentication and authorization with CASL-based permissions",
      "Organization-scoped multi-tenant access",
      "Layered backend — API routes, service logic, authorization and data access separated",
      "PostgreSQL via Prisma with indexed queries and selective retrieval",
      "Zod validation across boundaries",
      "AWS S3 document workflows and Resend transactional email",
      "TanStack Query for server-state management",
      "CI workflows for linting, type checking, testing and database migrations",
    ],
    stack: [
      "Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth",
      "CASL", "TanStack Query", "Zod", "AWS S3", "Resend",
    ],
  },
  {
    id: "v3",
    version: "V3",
    name: "Export Calculation Tools",
    status: "In Development",
    tagline: "Decision-support utilities for exporters",
    description:
      "A modular suite of business utilities that turn export economics into answers — built as extensible calculators sharing one engine.",
    highlights: [
      "Freight calculation",
      "Insurance calculation",
      "Export costing",
      "Pricing calculations",
      "Export decision-support tooling",
    ],
    stack: ["Next.js", "TypeScript", "Modular Architecture"],
  },
  {
    id: "v4",
    version: "V4",
    name: "B2B Marketplace",
    status: "Roadmap",
    tagline: "Product direction — buyers, suppliers, exporters",
    description:
      "The planned direction for the platform: a marketplace connecting buyers, suppliers and exporters, built on the multi-tenant foundation already in place.",
    highlights: [
      "Supplier discovery and product listings",
      "Search, filtering and supplier profiles",
      "Buyer requirements and RFQs",
      "Lead management and dashboards",
      "Business communication",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Multi-Tenancy"],
  },
];
