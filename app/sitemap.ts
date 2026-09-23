import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    "/work",
    "/about",
    "/contact",
    "/privacy",
    ...services.map((service) => `/services/${service.slug}`),
    ...projects.map((project) => `/work/${project.slug}`),
  ];

  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
