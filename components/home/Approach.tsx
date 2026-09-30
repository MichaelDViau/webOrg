import { TextLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";

/** Three squares that fill up as the engagement gets larger: a fix, a project, a full implementation. */
function Scale({ level }: { level: number }) {
  return (
    <span aria-hidden="true" className="flex items-end gap-1">
      {[1, 2, 3].map((step) => (
        <span
          key={step}
          className={`w-3 rounded-[1px] ${step <= level ? "bg-accent" : "bg-line-strong"}`}
          style={{ height: `${step * 0.5 + 0.5}rem` }}
        />
      ))}
    </span>
  );
}

/** Section 4: how we solve problems, in five flexible steps, and the three ways to work with us. */
export async function Approach() {
  const { home } = await getContent();
  const t = home.approach;

  return (
    <Section tone="canvas" aria-labelledby="approach">
      <Container>
        <SectionIntro id="approach" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {t.steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-ink pt-5" data-reveal>
              <span className="text-sm text-muted tabular-nums">{format(t.step, { number: index + 1 })}</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed">{step.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 border-t border-line pt-10 sm:mt-20">
          <h3 className="text-subheading" data-reveal>
            {t.engageTitle}
          </h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {t.engage.map((item, index) => (
              <li key={item.title} className="rounded-md border border-line bg-paper p-6" data-reveal>
                <Scale level={index + 1} />
                <h4 className="mt-4 text-lg font-semibold tracking-tight text-ink">{item.title}</h4>
                <p className="mt-2 text-base leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ul>
          <TextLink href="/how-we-work" className="mt-8">
            {t.link}
          </TextLink>
        </div>
      </Container>
    </Section>
  );
}
