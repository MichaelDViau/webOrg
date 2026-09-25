export interface ContentItem {
  title: string;
  detail: string;
}

export interface Belief extends ContentItem {
  topic: string;
}

export interface Audience extends ContentItem {
  examples: string;
}

export interface EngagementModel {
  title: string;
  summary: string;
  points: string[];
  cta: string;
  href: string;
}

export interface Faq {
  question: string;
  answer: string;
}

/** Company copy shown across the site, one object per language. */
export interface CompanyContent {
  approachSteps: ContentItem[];
  principles: ContentItem[];
  beliefs: Belief[];
  promises: string[];
  audiences: Audience[];
  engagementModels: EngagementModel[];
  homeFaqs: Faq[];
}
