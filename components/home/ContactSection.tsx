import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { getContent } from "@/lib/i18n/server";
import { bookingUrl, site } from "@/lib/site";

/** Section 8: the project inquiry. The form sits on a light card inside a dark section. */
export async function ContactSection() {
  const { home, ui, locale } = await getContent();
  const t = home.contact;

  return (
    <Section tone="night" id="contact" aria-labelledby="contact-heading">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5" data-reveal>
          <p className="text-sm font-medium text-accent-light">{t.eyebrow}</p>
          <h2 id="contact-heading" className="mt-4 text-heading text-paper">
            {t.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-night-muted">{t.lead}</p>
          <CheckList items={t.points} className="mt-8 text-lg text-night-muted" iconClassName="text-accent-light" />
          <p className="mt-8 text-base text-night-muted">
            {t.emailLabel}{" "}
            <a href={`mailto:${site.email}`} className="text-paper underline underline-offset-4">
              {site.email}
            </a>
          </p>
        </div>

        <div className="lg:col-span-7" data-reveal>
          <div className="rounded-lg bg-paper p-6 text-body sm:p-10">
            <LeadForm
              locale={locale}
              intent="contact"
              labels={ui.leadForm}
              errorText={ui.leadErrors}
              hours={ui.site.hours}
              canBook={Boolean(bookingUrl)}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
