import type { ServiceSlug } from "./services";

export type ProjectSlug =
  | "harbor-line-customer-portal"
  | "meridian-health-website"
  | "cobalt-legal-document-assistant"
  | "fieldstone-commerce-performance";

export interface ProjectResult {
  value: string;
  label: string;
}

/** Project details that are the same in every language. */
interface ProjectBase {
  slug: ProjectSlug;
  year: string;
  services: ServiceSlug[];
  stack: string[];
  image: { src: string; width: number; height: number };
  /** Public URL of the live project, when the client allows linking to it. */
  liveUrl?: string;
}

/** Project copy in one language, keyed by slug so every language covers every project. */
export interface ProjectText {
  client: string;
  title: string;
  type: string;
  industry: string;
  summary: string;
  results: ProjectResult[];
  imageAlt: string;
  challenge: string;
  approach: string[];
  outcome: string;
  /** Text for links to the project page, so each project reads differently in lists. */
  linkLabel: string;
}

export interface Project extends ProjectBase, Omit<ProjectText, "imageAlt"> {
  image: { src: string; alt: string; width: number; height: number };
}

/** Projects in the order they appear on the Work page. */
const projectBases: ProjectBase[] = [
  {
    slug: "harbor-line-customer-portal",
    year: "2025",
    services: ["web-applications", "automation"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "NetSuite API"],
    image: { src: "/work/harbor-line-portal.webp", width: 1600, height: 1000 },
  },
  {
    slug: "meridian-health-website",
    year: "2025",
    services: ["website-development", "seo", "web-optimization"],
    stack: ["Next.js", "Sanity CMS", "Vercel", "Schema.org"],
    image: { src: "/work/meridian-website.webp", width: 1600, height: 1000 },
  },
  {
    slug: "cobalt-legal-document-assistant",
    year: "2024",
    services: ["ai-solutions"],
    stack: ["Python", "PostgreSQL + pgvector", "Azure OpenAI", "Microsoft Entra ID"],
    image: { src: "/work/cobalt-assistant.webp", width: 1600, height: 1000 },
  },
  {
    slug: "fieldstone-commerce-performance",
    year: "2024",
    services: ["web-optimization", "seo"],
    stack: ["Shopify Hydrogen", "Cloudflare", "SpeedCurve", "GitHub Actions"],
    image: { src: "/work/fieldstone-performance.webp", width: 1600, height: 1000 },
  },
];

export const projectSlugs = projectBases.map((project) => project.slug);

export function buildProjects(text: Record<ProjectSlug, ProjectText>): Project[] {
  return projectBases.map((base) => {
    const { imageAlt, ...copy } = text[base.slug];
    return { ...base, ...copy, image: { ...base.image, alt: imageAlt } };
  });
}

export function findProject(projects: Project[], slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
