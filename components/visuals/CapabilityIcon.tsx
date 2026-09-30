import type { ServiceSlug } from "@/lib/services";

/** One simple line icon per capability category, drawn on a 32-unit grid. Decorative: the label sits beside it. */
const paths: Record<ServiceSlug, string> = {
  // Code brackets
  "custom-software": "M11 9 4 16l7 7M21 9l7 7-7 7M18 6l-4 20",
  // Browser window with content blocks
  "web-applications": "M3 6.5h26v19H3zM3 12h26M7.5 16.5h7v5.5h-7zM18 16.5h6.5M18 20h6.5",
  // Network of nodes around a center node
  "ai-solutions":
    "M16 12.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM6 7.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM26 7.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM6 19.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM26 19.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM8 12l5 4.5M24 12l-5 4.5M8 20l5-3M24 20l-5-3",
  // Database cylinder
  "database-solutions":
    "M5 8.5c0-2 4.9-3.5 11-3.5s11 1.5 11 3.5-4.9 3.5-11 3.5S5 10.5 5 8.5zM5 8.5v15c0 2 4.9 3.5 11 3.5s11-1.5 11-3.5v-15M5 16c0 2 4.9 3.5 11 3.5s11-1.5 11-3.5",
  // Cloud
  "cloud-solutions": "M9 25a5.5 5.5 0 0 1-.5-11A8 8 0 0 1 23.8 12.5 6.3 6.3 0 0 1 23 25z",
  // Stacked layers
  "software-architecture": "M16 5 28 10.5 16 16 4 10.5zM4 16l12 5.5L28 16M4 21.5 16 27l12-5.5",
  // Circular arrows
  "application-modernization": "M27 13a11.5 11.5 0 0 0-20.5-4.5M6 4v5h5M5 19a11.5 11.5 0 0 0 20.5 4.5M26 28v-5h-5",
  // Steps that connect into a flow
  "digital-transformation": "M3 20h7v7H3zM12.5 13.5h7v7h-7zM22 6h7v7h-7zM10 23.5h4.5v-3M19.5 17h4.5v-4",
  // Magnifying glass with a check
  "technology-consulting": "M13.5 5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zM20 20l8 8M9.5 13.5l3 3 5-5.5",
};

export function CapabilityIcon({ slug, className }: { slug: ServiceSlug; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className ?? "size-8"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[slug]} />
    </svg>
  );
}
