import type { IndustrySlug } from "./industries";
import type { ServiceSlug } from "./services";

export type ArticleSlug =
  | "client-portal-for-property-managers"
  | "document-intake-for-accounting-firms"
  | "measure-your-inquiry-response-time";

export const articleSlugs: ArticleSlug[] = [
  "client-portal-for-property-managers",
  "document-intake-for-accounting-firms",
  "measure-your-inquiry-response-time",
];

/** Article details that are the same in every language. Dates are ISO dates. */
const articleBases: Record<ArticleSlug, { published: string; industry: IndustrySlug | null; service: ServiceSlug }> = {
  "client-portal-for-property-managers": {
    published: "2026-09-29",
    industry: "real-estate",
    service: "web-applications",
  },
  "document-intake-for-accounting-firms": {
    published: "2026-09-29",
    industry: "professional-services",
    service: "custom-software",
  },
  "measure-your-inquiry-response-time": {
    published: "2026-09-29",
    industry: null,
    service: "web-applications",
  },
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface ArticleText {
  title: string;
  description: string;
  /** Short label such as "Property" or "Lead flow". */
  topic: string;
  /** Minutes to read, written as a number. */
  readMinutes: number;
  body: ArticleBlock[];
}

export interface Article extends ArticleText {
  slug: ArticleSlug;
  published: string;
  industry: IndustrySlug | null;
  service: ServiceSlug;
}

export function buildArticles(text: Record<ArticleSlug, ArticleText>): Article[] {
  return articleSlugs.map((slug) => ({ slug, ...articleBases[slug], ...text[slug] }));
}
