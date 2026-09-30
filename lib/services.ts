/**
 * The nine capability categories, in the order they appear across the site. Every capability the company
 * offers sits under one of them. Icons and diagrams are drawn in components/visuals, keyed by slug.
 */
export type ServiceSlug =
  | "custom-software"
  | "web-applications"
  | "ai-solutions"
  | "database-solutions"
  | "cloud-solutions"
  | "software-architecture"
  | "application-modernization"
  | "digital-transformation"
  | "technology-consulting";

export const serviceSlugs: ServiceSlug[] = [
  "custom-software",
  "web-applications",
  "ai-solutions",
  "database-solutions",
  "cloud-solutions",
  "software-architecture",
  "application-modernization",
  "digital-transformation",
  "technology-consulting",
];

/** Service details that are the same in every language. */
const serviceBases: Record<ServiceSlug, { related: ServiceSlug[] }> = {
  "custom-software": { related: ["web-applications", "software-architecture", "database-solutions"] },
  "web-applications": { related: ["custom-software", "database-solutions", "cloud-solutions"] },
  "ai-solutions": { related: ["custom-software", "database-solutions", "digital-transformation"] },
  "database-solutions": { related: ["software-architecture", "cloud-solutions", "application-modernization"] },
  "cloud-solutions": { related: ["software-architecture", "application-modernization", "database-solutions"] },
  "software-architecture": { related: ["custom-software", "cloud-solutions", "technology-consulting"] },
  "application-modernization": { related: ["software-architecture", "cloud-solutions", "digital-transformation"] },
  "digital-transformation": { related: ["custom-software", "ai-solutions", "technology-consulting"] },
  "technology-consulting": { related: ["software-architecture", "application-modernization", "digital-transformation"] },
};

/** One capability category: what it covers, the challenges it answers and how we approach it. */
export interface ServiceText {
  name: string;
  /** One or two sentences for cards. */
  card: string;
  /** Page title for search results, without the site name. */
  seoTitle: string;
  /** Meta description for search results, roughly 150 characters. */
  metaDescription: string;
  /** H1 of the category page. */
  headline: string;
  /** What the category is, in one or two sentences. */
  lead: string;
  /** A short paragraph on how the category connects to a business outcome. */
  overview: string;
  /** Every capability in the category, as short labels. */
  capabilities: string[];
  /** Situations a visitor may recognize, in plain language. */
  challenges: string[];
  /** How we approach work in this category: three short points. */
  approach: { title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
}

export interface Service extends ServiceText {
  slug: ServiceSlug;
  related: ServiceSlug[];
}

export function buildServices(text: Record<ServiceSlug, ServiceText>): Service[] {
  return serviceSlugs.map((slug) => ({ slug, ...serviceBases[slug], ...text[slug] }));
}

export function isServiceSlug(value: string | null | undefined): value is ServiceSlug {
  return value != null && (serviceSlugs as string[]).includes(value);
}
