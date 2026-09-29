export type StandardSlug = "security" | "performance" | "accessibility" | "ai-policy" | "privacy";

export const standardSlugs: StandardSlug[] = ["security", "performance", "accessibility", "ai-policy", "privacy"];

/** One standards page: what we do by default, in plain language, for buyers and their IT reviewers. */
export interface StandardText {
  name: string;
  card: string;
  seoTitle: string;
  metaDescription: string;
  headline: string;
  lead: string;
  /** What we do by default on every project. */
  defaults: { title: string; detail: string }[];
  /** Optional table of targets, such as the Core Web Vitals thresholds. */
  targets?: { title: string; intro: string; rows: { label: string; value: string }[]; note: string };
  /** What we deliberately don't promise, so the page is honest. */
  wontPromiseTitle: string;
  wontPromise: string[];
  /** How the client can check our work. */
  verifyTitle: string;
  verify: string[];
}

export interface Standard extends StandardText {
  slug: StandardSlug;
}

export function buildStandards(text: Record<StandardSlug, StandardText>): Standard[] {
  return standardSlugs.map((slug) => ({ slug, ...text[slug] }));
}
