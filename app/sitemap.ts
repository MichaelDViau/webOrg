import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { bookingUrl, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    "/technology",
    "/work",
    "/about",
    "/contact",
    "/website-check",
    ...(bookingUrl ? ["/book"] : []),
    "/privacy",
    ...services.map((service) => `/services/${service.slug}`),
    ...projects.map((project) => `/work/${project.slug}`),
  ];

  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
