import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/JsonLd";
import { AssistantWidget } from "@/components/assistant/AssistantWidget";
import { isLocale, localizePath, locales, ogLocales } from "@/lib/i18n/config";
import { getContentFor } from "@/lib/i18n/content";
import { format } from "@/lib/i18n/format";
import { organizationSchema } from "@/lib/structured-data";
import { themeScript } from "@/lib/theme";
import { bookingHref, contactNavItem, mainNav, site } from "@/lib/site";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await lang();
  if (!isLocale(locale)) return {};
  const { ui } = getContentFor(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: format(ui.home.metaTitle, { name: site.name }),
      template: `%s | ${site.name}`,
    },
    description: format(ui.site.description, { name: site.name }),
    applicationName: site.name,
    category: "technology",
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocales[locale],
    },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

/** The assistant appears only when an Anthropic API key is configured. */
const assistantEnabled = Boolean(process.env.ANTHROPIC_API_KEY);

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await lang();
  if (!isLocale(locale)) notFound();
  const content = getContentFor(locale);
  const { ui } = content;

  const assistantLinks = [
    ...mainNav.map((item) => item.href),
    contactNavItem.href,
    ...content.services.map((service) => `/services/${service.slug}`),
    "/website-check",
    bookingHref,
  ].map((path) => localizePath(path, locale));

  return (
    // The theme script may set data-theme before hydration, hence suppressHydrationWarning.
    <html lang={locale} className={GeistSans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          {ui.skipToContent}
        </a>
        <Header
          nav={mainNav.map((item) => ({ href: item.href, label: ui.nav[item.key] }))}
          labels={{ ...ui.header, contactUs: ui.contactUs, logo: format(ui.logoLabel, { name: site.name }) }}
        />
        <main id="main">{children}</main>
        <Footer />
        {assistantEnabled && (
          <AssistantWidget linkablePaths={assistantLinks} bookingHref={bookingHref} labels={ui.assistant} />
        )}
        <JsonLd data={organizationSchema(content)} />
      </body>
    </html>
  );
}
