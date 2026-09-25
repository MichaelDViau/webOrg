import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";

export async function Approach() {
  const { ui, company, photos } = await getContent();
  const t = ui.home.approach;

  return (
    <Section tone="canvas">
      <Container>
        <SectionIntro
          eyebrow={t.eyebrow}
          title={t.title}
          lead={t.lead}
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
          {company.approachSteps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-ink pt-6" data-reveal>
              <span className="text-sm text-muted tabular-nums">{format(t.step, { number: index + 1 })}</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 leading-relaxed">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
