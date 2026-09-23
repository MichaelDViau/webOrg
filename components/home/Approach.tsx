import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { approachSteps } from "@/lib/company";
import { photos } from "@/lib/photos";

export function Approach() {
  return (
    <Section tone="canvas">
      <Container>
        <SectionIntro
          eyebrow="Our approach"
          title="A clear process, run by the people doing the work."
          lead="You work directly with the designers and engineers on your project. There are no account managers relaying messages and no handoffs to junior staff after the pitch."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-12 lg:gap-6" data-reveal>
          <Image
            src={photos.planningSession.src}
            alt={photos.planningSession.alt}
            width={photos.planningSession.width}
            height={photos.planningSession.height}
            sizes="(min-width: 1280px) 810px, (min-width: 640px) 66vw, calc(100vw - 40px)"
            className="h-auto w-full rounded-lg sm:col-span-8"
          />
          <div className="relative hidden overflow-hidden rounded-lg sm:col-span-4 sm:block">
            <Image
              src={photos.openOffice.src}
              alt={photos.openOffice.alt}
              fill
              sizes="(min-width: 1280px) 400px, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {approachSteps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-ink pt-6" data-reveal>
              <span className="text-sm text-muted tabular-nums">Step {index + 1}</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 leading-relaxed">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
