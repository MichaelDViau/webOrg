import Link from "@/components/i18n/Link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import type { LegalKey } from "@/lib/legal";
import { legalAddress, site, workEnabled } from "@/lib/site";

const documentPaths: Record<LegalKey, string> = {
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  mexico: "/aviso-de-privacidad",
};

/** Renders a legal page from its content. Placeholders like {name} and {email} are filled in here. */
export async function LegalDocument({ document }: { document: LegalKey }) {
  const { legal, ui } = await getContent();
  const doc = legal[document];
  const fill = (text: string) =>
    format(text, { name: site.name, email: site.email, address: legalAddress, hours: ui.site.hours });

  return (
    <>
      <PageHeader
        eyebrow={legal.eyebrow}
        title={doc.title}
        lead={`${format(legal.updatedLabel, { date: doc.updated })} ${fill(doc.intro)}`}
      />
      <Section>
        <Container>
          <div className="max-w-2xl space-y-10 text-lg leading-relaxed">
            {doc.sections.filter((section) => workEnabled || !section.requiresWork).map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {fill(paragraph)}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-accent">
                    {section.list.map((item) => (
                      <li key={item}>{fill(item)}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">{legal.contactTitle}</h2>
              <p className="mt-4">
                {legal.contactBody}{" "}
                <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
            </section>
          </div>

          <nav aria-label={legal.otherDocuments} className="mt-14 max-w-2xl border-t border-line pt-8">
            <h2 className="text-base font-semibold text-ink">{legal.otherDocuments}</h2>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
              {(Object.keys(documentPaths) as LegalKey[])
                .filter((key) => key !== document)
                .map((key) => (
                  <li key={key}>
                    <Link href={documentPaths[key]} className="inline-block py-1 text-ink underline underline-offset-4">
                      {legal[key].metaTitle}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </Container>
      </Section>
    </>
  );
}
