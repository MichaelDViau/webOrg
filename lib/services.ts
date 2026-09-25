export type ServiceSlug =
  | "website-development"
  | "web-applications"
  | "ai-solutions"
  | "automation"
  | "web-optimization"
  | "seo";

export interface Service {
  slug: ServiceSlug;
  name: string;
  /** One line used in lists and navigation. */
  summary: string;
  /** Page title for search results, without the site name. */
  seoTitle: string;
  /** Meta description for search results, roughly 150 characters. */
  metaDescription: string;
  /** Lead heading at the top of the service page. */
  headline: string;
  /** Opening paragraph on the service page. */
  intro: string;
  /** Short, jargon-free explanation for readers who aren't technical. */
  plain: string;
  /** Technologies we typically use for this service. */
  stack: string[];
  included: { title: string; detail: string }[];
  approach: string[];
  engagement: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

/** Service content in one language, keyed by slug so every language covers every service. */
export type ServiceText = Omit<Service, "slug">;

/** Services in the order they appear across the site. */
export const serviceSlugs: ServiceSlug[] = [
  "website-development",
  "web-applications",
  "ai-solutions",
  "automation",
  "web-optimization",
  "seo",
];

export function buildServices(text: Record<ServiceSlug, ServiceText>): Service[] {
  return serviceSlugs.map((slug) => ({ slug, ...text[slug] }));
}

export function isServiceSlug(value: string | null | undefined): value is ServiceSlug {
  return value != null && (serviceSlugs as string[]).includes(value);
}
