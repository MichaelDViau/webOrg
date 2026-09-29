import type { DemoSlug } from "./demos";
import type { ServiceSlug } from "./services";

export type IndustrySlug = "property" | "accounting" | "distribution";

export const industrySlugs: IndustrySlug[] = ["property", "accounting", "distribution"];

/** Industry details that are the same in every language. */
const industryBases: Record<IndustrySlug, { demo: DemoSlug; services: ServiceSlug[] }> = {
  property: { demo: "property-portal", services: ["client-portals", "integrations-and-data", "automation"] },
  accounting: { demo: "firm-intake-hub", services: ["operations-apps", "ai-with-judgment", "automation"] },
  distribution: { demo: "revenue-website", services: ["client-portals", "integrations-and-data", "automation"] },
};

/** One industry page: their daily problems in their own vocabulary, what we build, what we connect to. */
export interface IndustryText {
  name: string;
  /** Short label for cards and the footer. */
  short: string;
  seoTitle: string;
  metaDescription: string;
  headline: string;
  lead: string;
  /** Two or three problems, in the industry's own words, for the home page card. */
  homeProblems: string[];
  /** Daily problems, in the industry's vocabulary. */
  problems: { quote: string; detail: string }[];
  /** The systems we build for them. */
  systems: { title: string; detail: string }[];
  /** Software they use and we connect to. Product names are examples, not partnerships. */
  softwareIntro: string;
  software: string[];
  faqs: { question: string; answer: string }[];
}

export interface Industry extends IndustryText {
  slug: IndustrySlug;
  demo: DemoSlug;
  services: ServiceSlug[];
}

export function buildIndustries(text: Record<IndustrySlug, IndustryText>): Industry[] {
  return industrySlugs.map((slug) => ({ slug, ...industryBases[slug], ...text[slug] }));
}
