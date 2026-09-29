import type { DemoSlug } from "./demos";

export type ServiceSlug =
  | "revenue-websites"
  | "client-portals"
  | "operations-apps"
  | "automation"
  | "ai-with-judgment"
  | "integrations-and-data"
  | "managed-plans";

/** Services in the order they appear across the site. */
export const serviceSlugs: ServiceSlug[] = [
  "revenue-websites",
  "client-portals",
  "operations-apps",
  "automation",
  "ai-with-judgment",
  "integrations-and-data",
  "managed-plans",
];

/** Service details that are the same in every language. */
const serviceBases: Record<ServiceSlug, { demo: DemoSlug | null }> = {
  "revenue-websites": { demo: "revenue-website" },
  "client-portals": { demo: "property-portal" },
  "operations-apps": { demo: "firm-intake-hub" },
  automation: { demo: "revenue-website" },
  "ai-with-judgment": { demo: "firm-intake-hub" },
  "integrations-and-data": { demo: "property-portal" },
  "managed-plans": { demo: null },
};

/**
 * One service page. The structure follows the guideline: the problem in the client's words, what
 * changes, what's included, how it works in phases, a "from" price, a related demo and two buttons.
 */
export interface ServiceText {
  name: string;
  /** One line used on cards and in lists. */
  card: string;
  /** Page title for search results, without the site name. */
  seoTitle: string;
  /** Meta description for search results, roughly 150 characters. */
  metaDescription: string;
  /** H1: the outcome, not the technology. */
  headline: string;
  /** What it is, in one or two sentences. */
  lead: string;
  /** Who it is for, in one sentence. */
  forWhom: string;
  /** The problem in the client's own words. */
  problemQuotes: string[];
  problemDetail: string;
  changes: string[];
  included: { title: string; detail: string }[];
  phases: { title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
}

export interface Service extends ServiceText {
  slug: ServiceSlug;
  demo: DemoSlug | null;
}

export function buildServices(text: Record<ServiceSlug, ServiceText>): Service[] {
  return serviceSlugs.map((slug) => ({ slug, ...serviceBases[slug], ...text[slug] }));
}

export function isServiceSlug(value: string | null | undefined): value is ServiceSlug {
  return value != null && (serviceSlugs as string[]).includes(value);
}

/** The five services shown as cards on the home page, in order. Managed plans and integrations join their neighbors. */
export const homeBuildSlugs: ServiceSlug[] = [
  "revenue-websites",
  "client-portals",
  "operations-apps",
  "automation",
  "ai-with-judgment",
];
