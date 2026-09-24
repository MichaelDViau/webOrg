import Link from "next/link";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

const metrics = [
  { name: "Largest Contentful Paint", before: "3.8 s", after: "1.6 s" },
  { name: "Interaction to Next Paint", before: "410 ms", after: "140 ms" },
  { name: "Cumulative Layout Shift", before: "0.21", after: "0.02" },
  { name: "JavaScript transferred", before: "1.2 MB", after: "480 KB" },
];

export function Optimization() {
  return (
    <Section tone="canvas">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionIntro
            eyebrow="Web Optimization & Performance"
            title="Faster pages, measured with real visitor data."
            lead="We find what's actually slowing your site down, fix it in your codebase, and set up monitoring so it stays fast long after the project ends."
          />
          <div className="mt-10 flex flex-col items-start gap-5">
            <ButtonLink href="/website-check" variant="secondary" withArrow>
              Test your website for free
            </ButtonLink>
            <TextLink href="/services/web-optimization">Website performance optimization</TextLink>
          </div>
        </div>

        <figure className="min-w-0 lg:col-span-7" data-reveal>
          <div className="overflow-x-auto rounded-lg border border-line bg-paper">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-line text-sm text-muted">
                  <th scope="col" className="px-4 py-4 font-medium sm:px-6">
                    Metric (mobile, 75th percentile)
                  </th>
                  <th scope="col" className="px-4 py-4 text-right font-medium sm:px-6">
                    Before
                  </th>
                  <th scope="col" className="px-4 py-4 text-right font-medium sm:px-6">
                    After
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {metrics.map((metric) => (
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
            Fieldstone Outdoor product pages, before and after an eight-week performance program.{" "}
            <Link href="/work/fieldstone-commerce-performance" className="text-ink underline underline-offset-4">
              See how we did it
            </Link>
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}
