export type Role = {
  period: string;
  start: string;
  company: string;
  role: string;
  kind: string;
  summary: string;
  points: string[];
  current?: boolean;
};

export const experience: Role[] = [
  {
    period: "2025 — Present",
    start: "2025",
    company: "TRIYARA Exports",
    role: "Founder / Product & Technology Lead",
    kind: "Product Ownership",
    summary:
      "B2B import-export technology platform — architected and built as an evolving product ecosystem rather than a single website.",
    points: [
      "Own product direction, architecture and delivery across every version of the platform.",
      "Architected the public export platform and the authenticated multi-tenant application.",
      "Designed a layered backend separating API routes, service logic, authorization and data access.",
      "Built the analytics, SEO and performance foundation the business runs on.",
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
      "Built and maintained production-grade frontend applications for enterprise clients across a 3.5+ year tenure.",
    points: [
      "Developed and maintained production-grade frontend applications using React.js, JavaScript, HTML and CSS.",
      "Built responsive, reusable UI components and integrated frontend applications with REST APIs and backend services.",
      "Implemented application state management, form workflows, validation and asynchronous API interactions.",
      "Collaborated with developers, QA, designers and business stakeholders across the software development lifecycle.",
      "Participated in code reviews, debugging, defect resolution and production issue analysis.",
      "Improved frontend performance through component optimization, efficient rendering patterns and asset optimization.",
      "Used Git, JIRA, Postman and CI/CD workflows for development, testing and delivery.",
      "Followed maintainable frontend architecture principles — separation of concerns, reusable components and modular organization.",
    ],
  },
];
