import { TextLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Seo() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 border-t border-line pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16">
          <div className="lg:col-span-6" data-reveal>
            <p className="text-sm font-medium text-muted">SEO & Digital Growth</p>
            <h2 className="mt-4 text-heading">
              Search visibility starts with how your site is built.
            </h2>
          </div>
          <div className="lg:col-span-6" data-reveal>
            <p className="text-lg leading-relaxed">
              We handle the technical foundation of search, including site structure, indexing, metadata and
              speed, and give your team clear guidance on content that brings in qualified visitors. No link
              schemes and no ranking guarantees.
            </p>
            <CheckList
              className="mt-8"
              columns={2}
              items={[
                "Technical SEO audits",
                "Site architecture and internal links",
                "Structured data and metadata",
                "Indexing and crawl budget",
                "Migration and redirect planning",
                "Search Console reporting",
              ]}
            />
            <TextLink href="/services/seo" className="mt-10">
              Technical SEO services
            </TextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
