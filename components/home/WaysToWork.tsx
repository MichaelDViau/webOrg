import { TextLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { engagementModels } from "@/lib/company";

export function WaysToWork() {
  return (
    <Section aria-labelledby="ways-to-work">
      <Container>
        <SectionIntro
          id="ways-to-work"
          eyebrow="Ways to work with us"
          title="Start small. Grow when it makes sense."
          lead="Most clients begin with a free conversation. There's no pressure and no long contract to sign before you know us."
        />

        <div className="mt-14 grid border-y border-line sm:mt-16 lg:grid-cols-3">
          {engagementModels.map((model, index) => (
            <div
              key={model.title}
              className={
                index === 0
                  ? "flex flex-col py-10 lg:pr-10"
                  : "flex flex-col border-t border-line py-10 lg:border-t-0 lg:border-l lg:px-10"
              }
              data-reveal
            >
              <h3 className="text-2xl font-semibold tracking-tight">{model.title}</h3>
              <p className="mt-3 leading-relaxed">{model.summary}</p>
              <CheckList items={model.points} className="mt-6 mb-8" />
              <TextLink href={model.href} className="mt-auto">
                {model.cta}
              </TextLink>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
