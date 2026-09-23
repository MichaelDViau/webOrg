import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/projects";
import { getService } from "@/lib/services";

interface ProjectFeatureProps {
  project: Project;
  reverse?: boolean;
  headingLevel?: "h2" | "h3";
}

export function ProjectFeature({ project, reverse = false, headingLevel: Heading = "h3" }: ProjectFeatureProps) {
  const href = `/work/${project.slug}`;

  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16" data-reveal>
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        className={cn(
          "group block overflow-hidden rounded-lg border border-line bg-canvas lg:col-span-7",
          reverse && "lg:order-2",
        )}
      >
        <Image
          src={project.image.src}
          alt=""
          width={project.image.width}
          height={project.image.height}
          sizes="(min-width: 1280px) 700px, (min-width: 1024px) 56vw, calc(100vw - 40px)"
          className="h-auto w-full transition-transform duration-500 ease-out-soft group-hover:scale-101"
        />
      </Link>

      <div className="lg:col-span-5">
        <p className="text-sm text-muted">
          {project.client} · {project.type}
        </p>
        <Heading className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          <Link href={href} className="hover:underline hover:underline-offset-4">
            {project.title}
          </Link>
        </Heading>
        <p className="mt-4 leading-relaxed">{project.summary}</p>

        <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-6">
          {project.results.map((result) => (
            <div key={result.label}>
              <dt className="sr-only">{result.label}</dt>
              <dd className="text-xl font-semibold tracking-tight text-ink tabular-nums sm:text-2xl">
                {result.value}
              </dd>
              <dd aria-hidden="true" className="mt-1 text-sm leading-snug text-muted">{result.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-sm text-muted">
          <span className="sr-only">Services: </span>
          {project.services.map((slug) => getService(slug)?.name).join(" · ")}
        </p>
        <p className="mt-2 text-sm text-muted">
          <span className="sr-only">Technologies: </span>
          {project.stack.join(", ")}
        </p>

        <Link href={href} className="group mt-8 inline-flex items-center gap-1.5 font-medium text-ink hover:underline hover:underline-offset-4">
          View case study<span className="sr-only">: {project.client}</span>
          <ArrowIcon className="group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
