import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { format, formatDate } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { insightsPage } = await getContent();
  return pageMetadata({ title: insightsPage.metaTitle, description: insightsPage.metaDescription, path: "/insights" });
}

export default async function InsightsPage() {
  const { ui, locale, insightsPage: t, articles } = await getContent();

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section padding="no-top">
        <Container>
          <ul>
            {articles.map((article) => (
              <li key={article.slug} className="border-b border-line" data-reveal>
                <Link
                  href={`/insights/${article.slug}`}
                  className="group grid gap-4 py-10 sm:py-12 lg:grid-cols-12 lg:gap-12"
                >
                  <span className="text-sm text-muted lg:col-span-3 lg:pt-2">
                    <span className="block font-medium text-accent-strong">{article.topic}</span>
                    <time dateTime={article.published}>{formatDate(article.published, locale)}</time>
                    {" · "}
                    {format(t.minutes, { minutes: article.readMinutes })}
                  </span>
                  <span className="lg:col-span-8">
                    <h2 className="text-subheading">{article.title}</h2>
                    <span className="mt-3 block text-lg leading-relaxed">{article.description}</span>
                    <span className="sr-only">{t.readArticle}</span>
                  </span>
                  <ArrowIcon
                    size="md"
                    className="hidden text-muted group-hover:translate-x-1 group-hover:text-ink lg:col-span-1 lg:block lg:justify-self-end"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <h2 className="text-subheading">{ui.newsletter.title}</h2>
            <p className="mt-4 leading-relaxed">{ui.newsletter.lead}</p>
          </div>
          <div className="lg:col-span-7" data-reveal>
            <NewsletterForm
              locale={locale}
              labels={ui.newsletter}
              privacyLabel={ui.leadForm.privacyLink}
              languageNames={ui.leadForm.languageNames}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
