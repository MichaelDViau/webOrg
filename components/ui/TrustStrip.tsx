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
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-baseline">
          <h2 id="trust" className="text-sm font-medium text-ink">
            {t.title}
          </h2>
          <p className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <Link href="/standards" className="text-ink underline underline-offset-4">
              {t.standardsLink}
            </Link>
            <Link href="/how-we-work" className="text-ink underline underline-offset-4">
              {t.processLink}
            </Link>
          </p>
        </div>
        <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item) => (
            <li key={item.title} className="border-t-2 border-ink pt-4">
              <p className="font-medium text-ink">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
