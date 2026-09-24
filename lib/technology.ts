export interface TechGroup {
  name: string;
  /** What this layer does, in plain language. */
  plain: string;
  tools: string[];
}

export interface TechnologyContent {
  /** Grouped summary shown on the homepage. */
  techStack: TechGroup[];
  /** Full catalog shown on the Technology page, split into web and AI. */
  webCatalog: TechGroup[];
  aiCatalog: TechGroup[];
}
