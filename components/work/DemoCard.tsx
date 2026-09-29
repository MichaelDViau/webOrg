import Link from "@/components/i18n/Link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { Demo } from "@/lib/demos";
import { getContent } from "@/lib/i18n/server";
import { DemoBadge } from "./DemoBadge";

/** A link to a concept demo, always carrying the "Concept demo" label. */
export async function DemoCard({ demo, headingLevel: Heading = "h3" }: { demo: Demo; headingLevel?: "h2" | "h3" }) {
  const { workPage } = await getContent();

  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-paper p-6 sm:p-8" data-reveal>
      <DemoBadge className="self-start" />
      <Heading className="mt-5 text-subheading">
        <Link href={`/work/${demo.slug}`} className="hover:underline hover:underline-offset-4">
          {demo.name}
        </Link>
      </Heading>
      <p className="mt-3 leading-relaxed">{demo.card}</p>
      <Link
        href={`/work/${demo.slug}`}
        className="group mt-6 inline-flex items-center gap-1.5 self-start font-medium text-ink hover:underline hover:underline-offset-4"
      >
        {workPage.seeDemo}
        <span className="sr-only">: {demo.name}</span>
        <ArrowIcon className="group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
