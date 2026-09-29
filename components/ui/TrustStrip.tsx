import Link from "@/components/i18n/Link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/i18n/server";

/** Why you can trust the work: ownership, fixed prices, weekly updates and published standards. */
export async function TrustStrip() {
  const { ui } = await getContent();
  const t = ui.trust;

  return (
    <Section tone="canvas" padding="compact" aria-labelledby="trust">
      <Container>
        <h2 id="trust" className="text-xl font-semibold text-ink">
          {t.title}
        </h2>
        <ul className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item) => (
            <li key={item.title}>
              <p className="text-lg font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-base leading-relaxed text-body">{item.detail}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-base">
          <Link href="/standards" className="text-ink underline underline-offset-4 hover:no-underline">
            {t.standardsLink}
          </Link>
          <Link href="/how-we-work" className="text-ink underline underline-offset-4 hover:no-underline">
            {t.processLink}
          </Link>
        </p>
      </Container>
    </Section>
  );
}
