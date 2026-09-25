import type { Ui } from "./content/en/ui";
import { findProject, type Project } from "./projects";

export interface ShowcaseItem {
  label: string;
  image: { src: string; alt: string; width: number; height: number };
  caption: string;
  href: string;
  linkLabel: string;
}

/** Disciplines listed under the homepage headline, each paired with an example of the work. */
export function buildShowcase(projects: Project[], text: Ui["showcase"]): ShowcaseItem[] {
  const fromProject = (label: string, slug: string): ShowcaseItem => {
    const project = findProject(projects, slug);
    if (!project) throw new Error(`Unknown project "${slug}" in hero showcase`);
    return {
      label,
      image: project.image,
      caption: `${project.client} · ${project.type}`,
      href: `/work/${project.slug}`,
      linkLabel: project.linkLabel,
    };
  };
  const harborLine = findProject(projects, "harbor-line-customer-portal");

  return [
    fromProject(text.websites, "meridian-health-website"),
    fromProject(text.webApps, "harbor-line-customer-portal"),
    fromProject(text.ai, "cobalt-legal-document-assistant"),
    {
      label: text.automation,
      image: { src: "/work/harbor-line-workflow.webp", alt: text.automationAlt, width: 1600, height: 1000 },
      caption: `${harborLine?.client} · ${text.automationType}`,
      href: "/work/harbor-line-customer-portal",
      linkLabel: text.automationLink,
    },
    fromProject(text.optimization, "fieldstone-commerce-performance"),
  ];
}
