import type { Metadata } from "next";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { workEnabled } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { partners } = await getContent();
  return pageMetadata({ title: partners.metaTitle, description: partners.metaDescription, path: "/partners" });
}

/** A short partner page for IT firms, accountants and fractional CTOs who refer clients. */
export default async function PartnersPage() {
  const { partners: t } = await getContent();

  // The demos item points at the Work section, which is off while `workEnabled` is false.
  const check = t.check.filter((item) => workEnabled || item.href !== "/work");

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section>
        <Container>
          <h2 className="text-heading" data-reveal>
            {t.checkTitle}
          </h2>
          <ul className={`mt-12 grid gap-x-8 gap-y-10 ${check.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
            {check.map((item) => (
              <li key={item.title} className="flex flex-col border-t-2 border-ink pt-6" data-reveal>
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed">{item.detail}</p>
                <TextLink href={item.href} className="mt-5 self-start">
                  {item.link}
                </TextLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading" data-reveal>
            {t.howTitle}
          </h2>
          <FeatureList items={t.how} />
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-subheading" data-reveal>
            {t.termsTitle}
          </h2>
          <div data-reveal>
            <p className="max-w-2xl text-lg leading-relaxed">{t.termsBody}</p>
            <ButtonLink href="/contact" withArrow className="mt-8">
              {t.cta}
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}
