import Link from "@/components/i18n/Link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CapabilityIcon } from "@/components/visuals/CapabilityIcon";
import { cn } from "@/lib/cn";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";

/**
 * How each of the nine cards sits in the grid. The first two are wide and list more; the middle three
 * are medium; the last four are compact. Card sizes differ on purpose: the first is dark, the rest light.
 */
const layout = [
  { span: "md:col-span-2 lg:col-span-7", show: 7, dark: true },
  { span: "md:col-span-2 lg:col-span-5", show: 4, dark: false },
  { span: "md:col-span-1 lg:col-span-4", show: 3, dark: false },
  { span: "md:col-span-1 lg:col-span-4", show: 3, dark: false },
  { span: "md:col-span-2 lg:col-span-4", show: 3, dark: false },
  { span: "md:col-span-1 lg:col-span-3", show: 0, dark: false },
  { span: "md:col-span-1 lg:col-span-3", show: 0, dark: false },
  { span: "md:col-span-1 lg:col-span-3", show: 0, dark: false },
  { span: "md:col-span-1 lg:col-span-3", show: 0, dark: false },
] as const;

/** Section 3: all nine capability categories, each with a title, a short explanation and its capabilities. */
export async function Capabilities() {
  const { home, services } = await getContent();
  const t = home.capabilities;

  return (
    <Section aria-labelledby="capabilities">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionIntro id="capabilities" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
          <ButtonLink href="/services" variant="secondary" withArrow className="self-start lg:self-auto">
            {t.viewAll}
          </ButtonLink>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => {
            const { span, show, dark } = layout[index];
            const hidden = service.capabilities.length - show;
            return (
              <li
                key={service.slug}
                data-reveal
                className={cn(
                  "group relative flex flex-col rounded-md border p-6 transition-colors duration-200 sm:p-8",
                  dark
                    ? "border-night-line bg-night text-night-muted hover:border-accent-light"
                    : "border-line bg-paper hover:border-ink",
                  span,
                )}
              >
                <CapabilityIcon slug={service.slug} className={cn("size-9", dark ? "text-accent-light" : "text-accent-strong")} />
                <h3 className={cn("mt-5 text-xl font-semibold tracking-tight", dark ? "text-paper" : "text-ink")}>
                  {/* The whole card is the link: the heading's link stretches over it. */}
                  <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 after:content-['']">
                    {service.name}
                  </Link>
                </h3>
                <p className="mt-2 leading-relaxed">{service.card}</p>

                {show > 0 && (
                  <ul className={cn("mt-5 grid gap-x-8 gap-y-1.5 text-base", dark && "sm:grid-cols-2")}>
                    {service.capabilities.slice(0, show).map((capability) => (
                      <li key={capability} className="flex gap-2.5">
                        <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-accent" />
                        <span className={dark ? "text-paper" : "text-ink"}>{capability}</span>
                      </li>
                    ))}
                    {hidden > 0 && (
                      <li className="text-sm text-muted">
                        <span className={dark ? "text-night-muted" : undefined}>{format(t.more, { count: hidden })}</span>
                      </li>
                    )}
                  </ul>
                )}

                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-auto inline-flex items-center gap-1.5 pt-6 font-medium group-hover:underline group-hover:underline-offset-4",
                    dark ? "text-paper" : "text-ink",
                  )}
                >
                  {t.explore}
                  <ArrowIcon className="group-hover:translate-x-0.5" />
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
