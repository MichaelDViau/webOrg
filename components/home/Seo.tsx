import { TextLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/i18n/server";

export async function Seo() {
  const { ui } = await getContent();
  const t = ui.home.seo;

  return (
    <Section>
      <Container>
        <div className="grid gap-12 border-t border-line pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16">
          <div className="lg:col-span-6" data-reveal>
            <p className="text-sm font-medium text-accent-strong">{t.eyebrow}</p>
            <h2 className="mt-4 text-heading">
              {t.title}
            </h2>
          </div>
          <div className="lg:col-span-6" data-reveal>
            <p className="text-lg leading-relaxed">
              {t.body}
            </p>
            <CheckList
              className="mt-8"
              columns={2}
              items={t.points}
            />
            <TextLink href="/services/seo" className="mt-10">
              {t.link}
            </TextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
