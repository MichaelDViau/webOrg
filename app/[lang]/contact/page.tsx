import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { ButtonLink } from "@/components/ui/Button";
import { bookingUrl, phoneHref, site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { ui } = await getContent();
  return pageMetadata({
    title: ui.contactPage.metaTitle,
    description: ui.contactPage.metaDescription,
    path: "/contact",
  });
}

export default async function ContactPage() {
  const { ui, locale } = await getContent();
  const t = ui.contactPage;

  return (
    <section className="pt-14 pb-16 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
      {/* On phones the form follows the introduction; on large screens it sits in its own column. */}
      <Container className="grid gap-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-accent-strong">{t.eyebrow}</p>
          <h1 className="mt-4 text-title">{t.title}</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            {t.lead}
          </p>
        </div>

        <div className="lg:col-span-7 lg:row-span-2">
          <div className="sm:rounded-lg sm:border sm:border-line sm:p-10">
            <ContactForm
              locale={locale}
              labels={ui.contactForm}
              errorText={ui.contactErrors}
              projectTypeLabels={ui.projectTypes}
              budgetLabels={ui.budgetRanges}
            />
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="text-sm font-medium text-ink">{t.nextTitle}</h2>
          <ol className="mt-4 divide-y divide-line border-y border-line">
            {t.nextSteps.map((step, index) => (
              <li key={step} className="flex gap-4 py-4 leading-relaxed">
                <span className="text-sm text-muted tabular-nums">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          {bookingUrl && (
            <>
              <h2 className="mt-12 text-sm font-medium text-ink">{t.pickTime}</h2>
              <ButtonLink href="/book" variant="secondary" withArrow className="mt-4">
                {t.bookCall}
              </ButtonLink>
            </>
          )}

          <h2 className="mt-12 text-sm font-medium text-ink">{t.reachDirectly}</h2>
          <address className="mt-4 space-y-2 not-italic">
            <p>
              <a href={`mailto:${site.email}`} className="inline-block py-1 text-ink underline underline-offset-4">
                {site.email}
              </a>
            </p>
            <p>
              <a href={phoneHref} className="inline-block py-1 text-ink underline underline-offset-4">
                {site.phone}
              </a>
            </p>
            <p className="text-muted">{ui.site.hours}</p>
          </address>
        </div>
      </Container>
    </section>
  );
}
