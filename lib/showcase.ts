import { getProject } from "./projects";

export interface ShowcaseItem {
  label: string;
  image: { src: string; alt: string; width: number; height: number };
  caption: string;
  href: string;
  linkLabel: string;
}

function fromProject(label: string, slug: string, caption?: string): ShowcaseItem {
  const project = getProject(slug);
  if (!project) throw new Error(`Unknown project "${slug}" in hero showcase`);

  return {
    label,
    image: project.image,
    caption: caption ?? `${project.client} · ${project.type}`,
    href: `/work/${project.slug}`,
    linkLabel: project.linkLabel,
  };
}

/** Disciplines listed under the homepage headline, each paired with an example of the work. */
export const showcase: ShowcaseItem[] = [
  fromProject("Websites", "meridian-health-website"),
  fromProject("Web Apps", "harbor-line-customer-portal"),
  fromProject("AI Solutions", "cobalt-legal-document-assistant"),
  {
    label: "Automation",
    image: {
      src: "/work/harbor-line-workflow.webp",
      alt: "Harbor Line delivery-to-invoice workflow built from connected steps, with run history and automation rates",
      width: 1600,
      height: 1000,
    },
    caption: "Harbor Line Logistics · Automation",
    href: "/work/harbor-line-customer-portal",
    linkLabel: "Follow the workflow",
  },
  fromProject("Optimization", "fieldstone-commerce-performance"),
];
