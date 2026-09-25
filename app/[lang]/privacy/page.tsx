import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { ui } = await getContent();
  return pageMetadata({
    title: ui.privacy.metaTitle,
    description: format(ui.privacy.metaDescription, { name: site.name }),
    path: "/privacy",
  });
}

export default async function PrivacyPage() {
  const t = (await getContent()).ui.privacy;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.updated} />
      <Section>
        <Container>
          <div className="max-w-2xl space-y-10 text-lg leading-relaxed">
            {t.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
                <p className="mt-4">{section.body}</p>
              </section>
            ))}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">{t.choicesTitle}</h2>
              <p className="mt-4">
                {t.choicesBody}{" "}
                <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
