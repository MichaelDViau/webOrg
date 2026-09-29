import type { About, Partners } from "@/lib/content/en/about";
import type { Audit, Snapshot } from "@/lib/content/en/audit";
import type { Home } from "@/lib/content/en/home";
import type { HowWeWork } from "@/lib/content/en/how-we-work";
import type { IndustriesPage } from "@/lib/content/en/industries";
import type { ArticlePage, InsightsPage } from "@/lib/content/en/insights";
import type { ServicesPage } from "@/lib/content/en/services";
import type { StandardPage, StandardsPage } from "@/lib/content/en/standards";
import type { Ui } from "@/lib/content/en/ui";
import type { DemoPage, WorkPage } from "@/lib/content/en/work";
import { buildDemos, type Demo, type DemoSlug, type DemoText } from "@/lib/demos";
import { buildIndustries, type Industry, type IndustrySlug, type IndustryText } from "@/lib/industries";
import { buildArticles, type Article, type ArticleSlug, type ArticleText } from "@/lib/insights";
import type { LegalContent } from "@/lib/legal";
import { buildServices, type Service, type ServiceSlug, type ServiceText } from "@/lib/services";
import { buildStandards, type Standard, type StandardSlug, type StandardText } from "@/lib/standards";
import type { Locale } from "./config";
import { en } from "@/lib/content/en";
import { es } from "@/lib/content/es";
import { fr } from "@/lib/content/fr";

/** Everything a language provides. Each lib/content/<locale>/index.ts exports one of these. */
export interface ContentSource {
  ui: Ui;
  home: Home;
  audit: Audit;
  snapshot: Snapshot;
  services: Record<ServiceSlug, ServiceText>;
  servicesPage: ServicesPage;
  industries: Record<IndustrySlug, IndustryText>;
  industriesPage: IndustriesPage;
  demos: Record<DemoSlug, DemoText>;
  workPage: WorkPage;
  demoPage: DemoPage;
  howWeWork: HowWeWork;
  standards: Record<StandardSlug, StandardText>;
  standardsPage: StandardsPage;
  standardPage: StandardPage;
  about: About;
  partners: Partners;
  articles: Record<ArticleSlug, ArticleText>;
  insightsPage: InsightsPage;
  articlePage: ArticlePage;
  legal: LegalContent;
}

/** Site content for one language, combined with the data shared by every language. */
export interface Content extends Omit<ContentSource, "services" | "industries" | "demos" | "standards" | "articles"> {
  locale: Locale;
  services: Service[];
  industries: Industry[];
  demos: Demo[];
  standards: Standard[];
  articles: Article[];
}

function build(locale: Locale, source: ContentSource): Content {
  return {
    ...source,
    locale,
    services: buildServices(source.services),
    industries: buildIndustries(source.industries),
    demos: buildDemos(source.demos),
    standards: buildStandards(source.standards),
    articles: buildArticles(source.articles),
  };
}

const content: Record<Locale, Content> = {
  en: build("en", en),
  es: build("es", es),
  fr: build("fr", fr),
};

export function getContentFor(locale: Locale): Content {
  return content[locale];
}
