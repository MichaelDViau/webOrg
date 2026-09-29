import type { IndustrySlug } from "./industries";
import type { ServiceSlug } from "./services";

export type DemoSlug = "property-portal" | "firm-intake-hub" | "revenue-website";

export const demoSlugs: DemoSlug[] = ["property-portal", "firm-intake-hub", "revenue-website"];

/** Demo details that are the same in every language. */
const demoBases: Record<DemoSlug, { industry: IndustrySlug | null; services: ServiceSlug[]; stack: string[] }> = {
  "property-portal": {
    industry: "property",
    services: ["client-portals", "integrations-and-data"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Role-based access", "Email notifications"],
  },
  "firm-intake-hub": {
    industry: "accounting",
    services: ["operations-apps", "ai-with-judgment"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Encrypted file storage", "Human-in-the-loop AI"],
  },
  "revenue-website": {
    industry: null,
    services: ["revenue-websites", "automation"],
    stack: ["Next.js", "TypeScript", "CRM integration", "Transactional email", "Privacy-friendly analytics"],
  },
};

export type Tone = "neutral" | "good" | "warn" | "info";

/** A screen of a concept demo, drawn from sample data. Three layouts cover every demo. */
export type DemoScreen =
  | {
      kind: "list";
      title: string;
      caption: string;
      /** Name shown in the demo's title bar. */
      app: string;
      tabs: string[];
      kpis: { label: string; value: string }[];
      listTitle: string;
      rows: { primary: string; secondary: string; badge: string; tone: Tone }[];
    }
  | {
      kind: "flow";
      title: string;
      caption: string;
      app: string;
      steps: { when: string; title: string; detail: string; state: "done" | "active" | "todo" }[];
    }
  | {
      kind: "form";
      title: string;
      caption: string;
      app: string;
      heading: string;
      fields: { label: string; value: string; tall?: boolean }[];
      submit: string;
      note: string;
    };

/** One concept demo page: problem, what it does, screens, technology and what we'd measure. */
export interface DemoText {
  name: string;
  /** One line for cards. */
  card: string;
  seoTitle: string;
  metaDescription: string;
  headline: string;
  lead: string;
  problem: string;
  does: { title: string; detail: string }[];
  screens: DemoScreen[];
  measure: string[];
  /** Honest note about what the demo is and isn't. */
  honestNote: string;
}

export interface Demo extends DemoText {
  slug: DemoSlug;
  industry: IndustrySlug | null;
  services: ServiceSlug[];
  stack: string[];
}

export function buildDemos(text: Record<DemoSlug, DemoText>): Demo[] {
  return demoSlugs.map((slug) => ({ slug, ...demoBases[slug], ...text[slug] }));
}

export function findDemo(demos: Demo[], slug: string | null | undefined): Demo | undefined {
  return demos.find((demo) => demo.slug === slug);
}
