import Link from "@/components/i18n/Link";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getContent } from "@/lib/i18n/server";

export async function Optimization() {
  const { ui } = await getContent();
  const t = ui.home.optimization;

  return (
    <Section tone="canvas">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionIntro
            eyebrow={t.eyebrow}
            title={t.title}
            lead={t.lead}
          />
          <div className="mt-10 flex flex-col items-start gap-5">
            <ButtonLink href="/website-check" variant="secondary" withArrow>
              {t.testCta}
            </ButtonLink>
            <TextLink href="/services/web-optimization">{t.serviceLink}</TextLink>
          </div>
        </div>

        <figure className="min-w-0 lg:col-span-7" data-reveal>
          <div className="overflow-x-auto rounded-lg border border-line bg-paper">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-line text-sm text-muted">
                  <th scope="col" className="px-4 py-4 font-medium sm:px-6">
                    {t.metricHeader}
                  </th>
                  <th scope="col" className="px-4 py-4 text-right font-medium sm:px-6">
                    {t.before}
                  </th>
                  <th scope="col" className="px-4 py-4 text-right font-medium sm:px-6">
                    {t.after}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {t.metrics.map((metric) => (
                  <tr key={metric.name}>
                    <th scope="row" className="px-4 py-4 font-normal sm:py-5 text-ink sm:px-6">
                      {metric.name}
                    </th>
                    <td className="px-4 py-4 text-right sm:py-5 text-sm whitespace-nowrap text-muted tabular-nums sm:px-6">
                      {metric.before}
                    </td>
                    <td className="px-4 py-4 text-right sm:py-5 text-sm font-medium whitespace-nowrap text-accent-strong tabular-nums sm:px-6">
                      {metric.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            {t.caption}{" "}
            <Link href="/work/fieldstone-commerce-performance" className="text-ink underline underline-offset-4">
              {t.captionLink}
            </Link>
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}
