import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { TechList } from "@/components/ui/TechList";
import { techStack } from "@/lib/technology";

export function TechStack() {
  return (
    <Section tone="night" aria-labelledby="technology">
      <Container>
        <SectionIntro
          tone="dark"
          id="technology"
          eyebrow="Technology"
          title="Modern, proven technology, explained in plain English."
          lead="You don't need to know what any of these names mean. We choose established, well-supported tools so your project is fast, secure and easy to maintain, and any good developer can work on it later. For technical teams, here is exactly what we use."
        />

        <div className="mt-14 border-b border-night-line sm:mt-16">
          {techStack.map((group) => (
            <div
              key={group.name}
              className="grid gap-4 border-t border-night-line py-7 lg:grid-cols-12 lg:gap-12 lg:py-8"
              data-reveal
            >
              <div className="lg:col-span-4">
                <h3 className="text-lg font-medium text-paper">{group.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed">{group.plain}</p>
              </div>
              <TechList
                tools={group.tools}
                label={`${group.name} technologies`}
                tone="dark"
                className="lg:col-span-8"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
