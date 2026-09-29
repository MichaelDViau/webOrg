import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { PageHeader } from "@/components/layout/PageHeader";
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
      <PageHeader title={t.title} lead={t.lead} />

      <Section padding="no-top">
        <Container>
          <ul className="divide-y divide-line border-b border-line">
            {articles.map((article) => (
              <li key={article.slug} data-reveal>
                <Link href={`/insights/${article.slug}`} className="group grid gap-x-8 gap-y-2 py-7 lg:grid-cols-12">
                  <span className="text-base text-body lg:col-span-3">
                    <span className="block font-semibold text-ink">{article.topic}</span>
                    <time dateTime={article.published}>{formatDate(article.published, locale)}</time>
                    {" · "}
                    {format(t.minutes, { minutes: article.readMinutes })}
                  </span>
                  <span className="lg:col-span-9">
                    <h2 className="text-xl font-semibold tracking-tight text-ink underline-offset-4 group-hover:underline">
                      {article.title}
                    </h2>
                    <span className="mt-2 block text-lg leading-relaxed text-body">{article.description}</span>
                    <span className="sr-only">{t.readArticle}</span>
                  </span>
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
