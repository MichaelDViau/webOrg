import Link from "@/components/i18n/Link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CapabilityIcon } from "@/components/visuals/CapabilityIcon";
import { getContent } from "@/lib/i18n/server";
import { solutionServices } from "@/lib/site";

/** Section 5: the technical challenges businesses bring us, each pointing at the capability that answers it. */
export async function Solutions() {
  const { home } = await getContent();
  const t = home.solutions;

  return (
    <Section aria-labelledby="solutions">
      <Container>
        <SectionIntro id="solutions" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

        <ul className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, index) => (
            <li key={item.question} className="border-t border-line" data-reveal>
              <Link href={`/services/${solutionServices[index]}`} className="group flex h-full flex-col gap-2 py-6">
                <CapabilityIcon slug={solutionServices[index]} className="mb-2 size-7 text-accent-strong" />
                <span className="text-lg font-semibold tracking-tight text-ink group-hover:underline group-hover:underline-offset-4">
                  {item.question}
                </span>
                <span className="leading-relaxed">{item.answer}</span>
                <ArrowIcon className="mt-auto text-muted group-hover:translate-x-1 group-hover:text-ink" />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body" data-reveal>
          {t.note}
        </p>
      </Container>
    </Section>
  );
}
