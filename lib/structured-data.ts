import type { Content } from "./i18n/content";
import { localizePath, type Locale } from "./i18n/config";
import { format } from "./i18n/format";
import { site } from "./site";

type JsonLdObject = Record<string, unknown>;

const organizationId = `${site.url}/#organization`;

/** The company, described in the page language. */
export function organizationSchema({ ui, services }: Content): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": organizationId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/opengraph-image.png`,
    email: site.email,
    telephone: site.phone,
    description: format(ui.site.description, { name: site.name }),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "Country", name: ui.site.country },
    knowsAbout: services.map((service) => service.name),
  };
}

export function websiteSchema(locale: Locale): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: `${site.url}${localizePath("/", locale)}`,
    inLanguage: locale,
    publisher: { "@id": organizationId },
  };
}

/** `path` must already carry the language prefix, as must every path passed to the helpers below. */
export function serviceSchema(
  { ui }: Content,
  service: { name: string; description: string; path: string },
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: `${site.url}${service.path}`,
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: ui.site.country },
    audience: { "@type": "BusinessAudience", audienceType: ui.site.audienceType },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function caseStudySchema(project: {
  title: string;
  summary: string;
  path: string;
  image: string;
  year: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.summary,
    url: `${site.url}${project.path}`,
    image: `${site.url}${project.image}`,
    datePublished: project.year,
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
  };
}
