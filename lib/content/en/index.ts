import type { ContentSource } from "@/lib/i18n/content";
import { about, partners } from "./about";
import { audit, snapshot } from "./audit";
import { home } from "./home";
import { howWeWork } from "./how-we-work";
import { industries, industriesPage } from "./industries";
import { articlePage, articles, insightsPage } from "./insights";
import { legal } from "./legal";
import { services, servicesPage } from "./services";
import { standardPage, standards, standardsPage } from "./standards";
import { ui } from "./ui";
import { demoPage, demos, workPage } from "./work";

export const en: ContentSource = {
  ui,
  home,
  audit,
  snapshot,
  services,
  servicesPage,
  industries,
  industriesPage,
  demos,
  workPage,
  demoPage,
  howWeWork,
  standards,
  standardsPage,
  standardPage,
  about,
  partners,
  articles,
  insightsPage,
  articlePage,
  legal,
};
