import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import type { ReactNode } from "react";
import { geistSans } from "@/app/fonts/geist";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { AssistantLoader } from "@/components/assistant/AssistantLoader";
import { isLocale, localizePath, locales, ogLocales } from "@/lib/i18n/config";
import { getContentFor } from "@/lib/i18n/content";
import { format } from "@/lib/i18n/format";
import { organizationSchema } from "@/lib/structured-data";
import { contactHref, footerNav, mainNav, site, workEnabled } from "@/lib/site";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await lang();
  if (!isLocale(locale)) return {};
  const { ui, home } = getContentFor(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: format(home.metaTitle, { name: site.name }),
      template: `%s | ${site.name}`,
    },
    description: format(ui.site.description, { name: site.name }),
    applicationName: site.name,
    category: "technology",
    // Google Search Console verification, from day one. Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to enable.
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
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
    ...footerNav.company.map((item) => item.href),
    ...content.services.map((service) => `/services/${service.slug}`),
    ...content.standards.map((standard) => `/standards/${standard.slug}`),
    ...(workEnabled ? content.demos.map((demo) => `/work/${demo.slug}`) : []),
  ].map((path) => localizePath(path, locale));

  return (
    <html lang={locale} className={geistSans.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          {ui.skipToContent}
        </a>
        <Header
          nav={mainNav.map((item) => ({ href: item.href, label: ui.nav[item.key] }))}
          labels={{
            ...ui.header,
            primary: ui.cta.discuss,
            secondary: ui.cta.explore,
            logo: format(ui.logoLabel, { name: site.name }),
          }}
        />
        <main id="main">{children}</main>
        <Footer />
        {assistantEnabled && (
          <AssistantLoader linkablePaths={assistantLinks} bookingHref={contactHref} labels={ui.assistant} />
        )}
        <JsonLd data={organizationSchema(content)} />
        <Analytics />
      </body>
    </html>
  );
}
