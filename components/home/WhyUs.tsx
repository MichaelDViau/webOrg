import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { principles } from "@/lib/principles";

export function WhyUs() {
  return (
    <Section tone="night">
      <Container>
        <p className="text-sm font-medium" data-reveal>
          Why work with us
        </p>
        <h2
          className="mt-6 max-w-5xl text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:text-5xl"
          data-reveal
        >
          We don&apos;t build technology simply because we can. We build it because it solves a problem.
        </h2>

        <dl className="mt-16 grid gap-x-16 border-b border-night-line sm:grid-cols-2 lg:mt-20">
          {principles.map((principle) => (
            <div key={principle.title} className="border-t border-night-line py-8" data-reveal>
              <dt className="text-lg font-medium text-paper">{principle.title}</dt>
              <dd className="mt-2 max-w-md leading-relaxed">{principle.detail}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
