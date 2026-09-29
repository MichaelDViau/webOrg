import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { ClosingCta } from "@/components/home/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { articleSlugs } from "@/lib/insights";
import { localizePath } from "@/lib/i18n/config";
import { format, formatDate } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = (await getContent()).articles.find((item) => item.slug === slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${article.slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const { ui, locale, insightsPage, articlePage: t, articles, services, industries } = await getContent();
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const path = localizePath(`/insights/${article.slug}`, locale);
  const service = services.find((item) => item.slug === article.service);
  const industry = industries.find((item) => item.slug === article.industry);

  return (
    <>
      <article>
        <header className="pt-16 sm:pt-24 lg:pt-28">
          <Container>
            <nav aria-label={ui.breadcrumb}>
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
                <li>
                  <Link href="/insights" className="inline-block py-1 hover:text-ink">
                    {ui.nav.insights}
                  </Link>
                </li>
                <li aria-hidden="true" className="text-line-strong">
                  /
                </li>
                <li aria-current="page">{article.topic}</li>
              </ol>
            </nav>
            <h1 className="mt-6 max-w-4xl text-title">{article.title}</h1>
            <p className="mt-6 text-sm text-muted">
              <time dateTime={article.published}>{formatDate(article.published, locale)}</time>
              {" · "}
              {format(insightsPage.minutes, { minutes: article.readMinutes })}
            </p>
          </Container>
        </header>

        <Section padding="no-top" className="pt-10 sm:pt-14">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="max-w-2xl text-lg leading-relaxed lg:col-span-8">
              {article.body.map((block, index) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={index} className="mt-12 mb-4 text-2xl font-semibold tracking-tight">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={index} className="my-5 list-disc space-y-2 pl-6 marker:text-accent">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="my-5">
                    {block.text}
                  </p>
                );
              })}
            </div>

            <aside className="lg:col-span-4">
              <div className="space-y-8 lg:sticky lg:top-28">
                {service && (
                  <div>
                    <h2 className="text-lg font-semibold text-ink">{t.relatedService}</h2>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-2 inline-block text-ink underline underline-offset-4 hover:no-underline"
                    >
                      {service.name}
                    </Link>
                  </div>
                )}
                {industry && (
                  <div>
                    <h2 className="text-lg font-semibold text-ink">{t.relatedIndustry}</h2>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="mt-2 inline-block text-ink underline underline-offset-4 hover:no-underline"
                    >
                      {industry.name}
                    </Link>
                  </div>
                )}
              </div>
            </aside>
          </Container>
        </Section>
      </article>

      {/* One short newsletter form at the bottom of every article, for visitors who aren't ready yet. */}
      <Section tone="canvas" padding="compact">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-subheading">{ui.newsletter.title}</h2>
            <p className="mt-4 leading-relaxed">{ui.newsletter.lead}</p>
          </div>
          <div className="lg:col-span-7">
            <NewsletterForm
              locale={locale}
              labels={ui.newsletter}
              privacyLabel={ui.leadForm.privacyLink}
              languageNames={ui.leadForm.languageNames}
            />
          </div>
        </Container>
      </Section>

      <ClosingCta title={t.ctaTitle} lead={t.ctaLead} />

      <JsonLd
        data={[
          articleSchema({
            title: article.title,
            description: article.description,
            path,
            published: article.published,
            locale,
          }),
          breadcrumbSchema([
            { name: ui.breadcrumbHome, path: localizePath("/", locale) },
            { name: ui.nav.insights, path: localizePath("/insights", locale) },
            { name: article.title, path },
          ]),
        ]}
      />
    </>
  );
}
