import type { NextConfig } from "next";
import { workEnabled } from "./lib/site";

const isDev = process.env.NODE_ENV !== "production";

/** Optional privacy-friendly analytics (Plausible). Its script origin is allowed only when it's turned on. */
const analyticsOrigin = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  ? new URL(process.env.NEXT_PUBLIC_PLAUSIBLE_SRC || "https://plausible.io/js/script.js").origin
  : null;
const analyticsSource = analyticsOrigin ? ` ${analyticsOrigin}` : "";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${analyticsSource}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws:" : ""}${analyticsSource}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  // Scheduling embeds on /book
  "frame-src https://cal.com https://*.cal.com https://calendly.com https://*.calendly.com",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-site" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // English pages live at unprefixed URLs (/services) but are rendered from app/[lang], so those
  // requests are rewritten to /en/...; Spanish and French URLs carry their own prefix. Paths with a
  // dot (icons, images, robots.txt) and Next.js internals are left alone.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/en" },
        { source: "/:path((?!(?:en|es|fr|api|_next)(?:/|$))[^.]*)", destination: "/en/:path" },
      ],
    };
  },
  // Each page has a single English address, so /en/... redirects to the unprefixed URL.
  // Pages from the previous version of the site now point to their replacements, so old links and
  // search results keep working. The old sample case studies no longer exist, and the technology
  // catalog became the standards pages.
  async redirects() {
    // Old case-study addresses land on /work when that section is on, and on the home page while it is off.
    const workHome = workEnabled ? "/work" : "/";
    const moved: [string, string][] = [
      ["/technology", "/standards"],
      ["/services/website-development", "/services/revenue-websites"],
      ["/services/web-applications", "/services/client-portals"],
      ["/services/ai-solutions", "/services/ai-with-judgment"],
      ["/services/web-optimization", "/standards/performance"],
      ["/services/seo", "/services/revenue-websites"],
      ["/work/harbor-line-customer-portal", workHome],
      ["/work/meridian-health-website", workHome],
      ["/work/cobalt-legal-document-assistant", workHome],
      ["/work/fieldstone-commerce-performance", workHome],
    ];
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
      ...moved.flatMap(([from, to]) => [
        { source: from, destination: to, permanent: true },
        { source: `/:lang(es|fr)${from}`, destination: `/:lang${to}`, permanent: true },
      ]),
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
