import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/i18n/Link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/home/ClosingCta";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { localizePath } from "@/lib/i18n/config";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { findProject, projectSlugs } from "@/lib/projects";
import { breadcrumbSchema, caseStudySchema } from "@/lib/structured-data";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { ui, projects } = await getContent();
  const project = findProject(projects, (await params).slug);
  if (!project) return {};

  return pageMetadata({
    title: format(ui.caseStudy.metaTitle, { client: project.client, type: project.type }),
    description: project.summary,
    path: `/work/${project.slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { ui, locale, projects, services } = await getContent();
  const t = ui.caseStudy;
  const project = findProject(projects, (await params).slug);
  if (!project) notFound();

  const path = localizePath(`/work/${project.slug}`, locale);
  const projectServices = project.services.flatMap((slug) => services.find((service) => service.slug === slug) ?? []);
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <article>
        <header className="pt-16 sm:pt-24 lg:pt-28">
          <Container>
            <nav aria-label={t.breadcrumb}>
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
                <li>
                  <Link href="/work" className="inline-block py-1 hover:text-ink">
                    {ui.nav.work}
                  </Link>
                </li>
                <li aria-hidden="true" className="text-line-strong">
                  /
                </li>
                <li aria-current="page">{project.client}</li>
              </ol>
            </nav>

            <h1 className="mt-6 max-w-4xl text-title">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">{project.summary}</p>

            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm lg:grid-cols-4">
              <div>
                <dt className="text-muted">{t.client}</dt>
                <dd className="mt-1 text-ink">{project.client}</dd>
              </div>
              <div>
                <dt className="text-muted">{t.industry}</dt>
                <dd className="mt-1 text-ink">{project.industry}</dd>
              </div>
              <div>
                <dt className="text-muted">{t.services}</dt>
                <dd className="mt-1 text-ink">
                  {projectServices.map((service, i) => (
                    <span key={service.slug}>
                      {i > 0 && ", "}
                      <Link href={`/services/${service.slug}`} className="hover:underline hover:underline-offset-4">
                        {service.name}
                      </Link>
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-muted">{t.year}</dt>
                <dd className="mt-1 text-ink">{project.year}</dd>
              </div>
            </dl>

            <div className="mt-12 overflow-hidden rounded-lg border border-line bg-canvas">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(min-width: 1280px) 1216px, calc(100vw - 40px)"
                preload
                className="h-auto w-full"
              />
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-1.5 font-medium text-ink hover:underline hover:underline-offset-4"
              >
                {t.visitLive}
                <ArrowIcon className="-rotate-45" />
              </a>
            )}
          </Container>
        </header>

        <Section>
          <Container>
            <dl className="grid gap-10 border-y border-line py-10 sm:grid-cols-3">
              {project.results.map((result) => (
                <div key={result.label} data-reveal>
                  <dt className="text-sm text-muted">{result.label}</dt>
                  <dd className="mt-2 text-3xl font-semibold tracking-tight text-ink tabular-nums sm:text-4xl">
                    {result.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-20 grid gap-16 lg:grid-cols-12">
              <div className="space-y-16 lg:col-span-7">
                <section data-reveal>
                  <h2 className="text-subheading">{t.challenge}</h2>
                  <p className="mt-6 text-lg leading-relaxed">{project.challenge}</p>
                </section>
                <section data-reveal>
                  <h2 className="text-subheading">{t.whatWeDid}</h2>
                  <div className="mt-6 space-y-6 text-lg leading-relaxed">
                    {project.approach.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
                <section data-reveal>
                  <h2 className="text-subheading">{t.outcome}</h2>
                  <p className="mt-6 text-lg leading-relaxed">{project.outcome}</p>
                </section>
              </div>

              <aside className="lg:col-span-4 lg:col-start-9">
                <div className="lg:sticky lg:top-28">
                  <h2 className="text-sm font-medium text-ink">{t.technology}</h2>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {project.stack.map((item) => (
                      <li key={item} className="py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </Container>
        </Section>
      </article>

      <Section tone="canvas" padding="compact">
        <Container>
          <Link href={`/work/${next.slug}`} className="group flex items-center justify-between gap-6">
            <span>
              <span className="block text-sm text-muted">{t.nextProject}</span>
              <span className="mt-2 block text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {next.client}
              </span>
            </span>
            <ArrowIcon size="lg" className="text-ink group-hover:translate-x-1" />
          </Link>
        </Container>
      </Section>

      <ClosingCta />

      <JsonLd
        data={[
          caseStudySchema({
            title: project.title,
            summary: project.summary,
            path,
            image: project.image.src,
            year: project.year,
          }),
          breadcrumbSchema([
            { name: ui.breadcrumbHome, path: localizePath("/", locale) },
            { name: ui.nav.work, path: localizePath("/work", locale) },
            { name: project.client, path },
          ]),
        ]}
      />
    </>
  );
}
