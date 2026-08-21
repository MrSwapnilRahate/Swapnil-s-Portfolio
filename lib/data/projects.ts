export type Project = {
  index: string;
  title: string;
  category: string;
  description: string;
  focus: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Next.js E-Commerce Platform",
    category: "Commerce · Rendering Strategy",
    description:
      "A storefront built to exercise Next.js rendering strategies deliberately — choosing SSR, SSG or ISR per route based on how the data actually behaves.",
    focus: [
      "SSR, SSG and ISR applied per route",
      "Product listing and product detail pages",
      "Reusable component architecture",
      "Responsive UI and performance optimization",
    ],
    stack: ["Next.js", "React", "TypeScript"],
  },
  {
    index: "02",
    title: "AI Resume Analyzer",
    category: "Full Stack · Document Processing",
    description:
      "An application that accepts a resume upload, processes the PDF and returns structured analysis and feedback to the user.",
    focus: [
      "Resume upload and PDF processing",
      "Structured analysis and feedback output",
      "Frontend and backend integration",
    ],
    stack: ["Next.js", "React", "Node.js", "Express", "OpenAI"],
  },
];
