import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const disciplines = ["Websites", "Web Apps", "AI Solutions", "Automation", "Optimization"];

export function Hero() {
  const featured = projects[0];

  return (
    <section className="overflow-hidden pt-16 sm:pt-24 lg:pt-28">
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-7xl">
            We build the software your business runs on.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">
            {site.name} is a design and engineering team for companies that need their website, applications and
            internal systems to work properly — and keep working as they grow.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" withArrow>
              Start a Project
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore Our Services
            </ButtonLink>
          </div>
        </div>

        <ul
          aria-label="What we build"
          className="mt-16 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6 text-sm text-muted sm:gap-x-10"
        >
          {disciplines.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <figure className="mt-10 sm:mt-14">
          <div className="overflow-hidden rounded-lg border border-line bg-canvas">
            <Image
              src={featured.image.src}
              alt={featured.image.alt}
              width={featured.image.width}
              height={featured.image.height}
              sizes="(min-width: 1280px) 1216px, calc(100vw - 40px)"
              priority
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            {featured.client} — {featured.type.toLowerCase()} built by {site.name}.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
