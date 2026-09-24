import type { CompanyContent } from "@/lib/company";
import type { Ui } from "@/lib/content/en/ui";
import { buildPhotos, type Photo, type PhotoKey } from "@/lib/photos";
import { buildProjects, type Project, type ProjectSlug, type ProjectText } from "@/lib/projects";
import { buildServices, type Service, type ServiceSlug, type ServiceText } from "@/lib/services";
import type { TechnologyContent } from "@/lib/technology";
import type { Locale } from "./config";
import { en } from "@/lib/content/en";
import { es } from "@/lib/content/es";
import { fr } from "@/lib/content/fr";

/** Everything a language provides. Each lib/content/<locale>/index.ts exports one of these. */
export interface ContentSource {
  ui: Ui;
  company: CompanyContent;
  services: Record<ServiceSlug, ServiceText>;
  projects: Record<ProjectSlug, ProjectText>;
  technology: TechnologyContent;
  photoAlts: Record<PhotoKey, string>;
}

/** Site content for one language, combined with the data shared by every language. */
export interface Content {
  locale: Locale;
  ui: Ui;
  company: CompanyContent;
  services: Service[];
  projects: Project[];
  technology: TechnologyContent;
  photos: Record<PhotoKey, Photo>;
}

function build(locale: Locale, source: ContentSource): Content {
  return {
    locale,
    ui: source.ui,
    company: source.company,
    services: buildServices(source.services),
    projects: buildProjects(source.projects),
    technology: source.technology,
    photos: buildPhotos(source.photoAlts),
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
