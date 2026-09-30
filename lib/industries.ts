import type { ServiceSlug } from "./services";

/**
 * Industries whose businesses often need the kinds of solutions we build. This is a list of where the
 * capabilities apply, not a list of past clients. Each has a card on /industries, not its own page.
 */
export type IndustrySlug =
  | "real-estate"
  | "hospitality"
  | "tourism"
  | "retail"
  | "professional-services"
  | "logistics"
  | "financial-services"
  | "healthcare"
  | "manufacturing"
  | "technology-companies";

export const industrySlugs: IndustrySlug[] = [
  "real-estate",
  "hospitality",
  "tourism",
  "retail",
  "professional-services",
  "logistics",
  "financial-services",
  "healthcare",
  "manufacturing",
  "technology-companies",
];

/** Industry details that are the same in every language: the capabilities that usually matter most. */
const industryBases: Record<IndustrySlug, { services: ServiceSlug[] }> = {
  "real-estate": { services: ["web-applications", "database-solutions", "custom-software"] },
  hospitality: { services: ["custom-software", "web-applications", "ai-solutions"] },
  tourism: { services: ["web-applications", "cloud-solutions", "database-solutions"] },
  retail: { services: ["web-applications", "database-solutions", "ai-solutions"] },
  "professional-services": { services: ["custom-software", "ai-solutions", "digital-transformation"] },
  logistics: { services: ["software-architecture", "database-solutions", "cloud-solutions"] },
  "financial-services": { services: ["application-modernization", "software-architecture", "database-solutions"] },
  healthcare: { services: ["software-architecture", "database-solutions", "application-modernization"] },
  manufacturing: { services: ["custom-software", "database-solutions", "digital-transformation"] },
  "technology-companies": { services: ["software-architecture", "cloud-solutions", "technology-consulting"] },
};

/** One industry card: what businesses there often need. */
export interface IndustryText {
  name: string;
  /** Short label for lists. */
  short: string;
  /** One sentence on the kind of business and its technology needs. */
  lead: string;
  /** Four solutions businesses in this industry often need. */
  needs: string[];
}

export interface Industry extends IndustryText {
  slug: IndustrySlug;
  services: ServiceSlug[];
}

export function buildIndustries(text: Record<IndustrySlug, IndustryText>): Industry[] {
  return industrySlugs.map((slug) => ({ slug, ...industryBases[slug], ...text[slug] }));
}
