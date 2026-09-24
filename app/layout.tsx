import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/JsonLd";
import { AssistantWidget } from "@/components/assistant/AssistantWidget";
import { services } from "@/lib/services";
import { organizationSchema } from "@/lib/structured-data";
import { bookingHref, contactNavItem, mainNav, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Website, Web App and AI Development`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  category: "technology",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

/** The assistant appears only when an Anthropic API key is configured. */
const assistantEnabled = Boolean(process.env.ANTHROPIC_API_KEY);

const assistantLinks = [
  ...mainNav.map((item) => item.href),
  contactNavItem.href,
  ...services.map((service) => `/services/${service.slug}`),
  "/website-check",
  bookingHref,
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {assistantEnabled && <AssistantWidget linkablePaths={assistantLinks} bookingHref={bookingHref} />}
        <JsonLd data={organizationSchema(services.map((service) => service.name))} />
      </body>
    </html>
  );
}
