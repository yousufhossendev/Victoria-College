import Image from "next/image";
import { ArrowRight } from "@/components/ui/ArrowRight";
import { specificationHref, specificationPanel } from "@/data/admissions";
import type { Course } from "@/lib/types";

/**
 * Download strip under the admissions block. The mark is a supplied asset that
 * carries its own disc, so nothing here draws a ring around it.
 */
export function CourseSpecification({ course }: { course: Course }) {
  const href = course.specificationUrl ?? specificationHref(course.slug);

  return (
    <div className="flex flex-col gap-8 bg-white/4 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-6">
        <Image
          src="/icons/specification.svg"
          alt=""
          aria-hidden="true"
          width={90}
          height={90}
          unoptimized
          className="h-18 w-18 shrink-0 sm:h-22.5 sm:w-22.5"
        />

        <div className="min-w-0">
          <h3 className="text-card-title text-white">{specificationPanel.heading}</h3>
          <p className="mt-2 text-default text-pale-blue/70">{specificationPanel.body}</p>
        </div>
      </div>

      <a
        href={href}
        download
        className="group inline-flex h-14 w-fit shrink-0 items-center gap-5 rounded-chip border border-border px-6 text-default text-white transition-colors hover:border-pink hover:text-pink"
      >
        {specificationPanel.cta}
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
