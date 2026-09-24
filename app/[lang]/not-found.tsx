import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getContent } from "@/lib/i18n/server";
import { site } from "@/lib/site";

// not-found.tsx only supports static metadata reliably, so the translated title is rendered by the
// component below (React hoists it into <head>) rather than through generateMetadata.
export const metadata: Metadata = { robots: { index: false } };

export default async function NotFound() {
  const t = (await getContent()).ui.notFound;

  return (
    <section className="py-32 sm:py-40">
      <title>{`${t.metaTitle} | ${site.name}`}</title>
      <Container>
        <p className="text-sm text-muted tabular-nums">404</p>
        <h1 className="mt-4 text-title">{t.title}</h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed">{t.lead}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">{t.home}</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            {t.contact}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
