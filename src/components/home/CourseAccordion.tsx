"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { ArrowRight } from "@/components/ui/ArrowRight";
import type { Course } from "@/lib/types";

/**
 * One course open at a time, matching the design. The open panel is a link
 * through to the course, so the summary is not a dead end.
 */
export function CourseAccordion({ courses }: { courses: Course[] }) {
  const baseId = useId();
  const [openSlug, setOpenSlug] = useState<string | undefined>(courses[0]?.slug);

  return (
    <div>
      {courses.map((course) => {
        const isOpen = course.slug === openSlug;
        const panelId = `${baseId}-${course.slug}`;

        return (
          <div key={course.slug} className="border-b border-white/70">
            <h3>
              <button
                type="button"
                onClick={() => setOpenSlug(isOpen ? undefined : course.slug)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full py-5 text-left text-card-title text-white transition-colors hover:text-pink"
              >
                {course.title}
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              inert={!isOpen ? true : undefined}
              className={`grid transition-[grid-template-rows] duration-300 ease-out-soft ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="flex gap-4 pb-6 pr-4">
                  <ArrowRight className="mt-0.5 h-5 w-5 text-pink" />
                  <p className="text-default text-pale-blue/70">
                    {course.overview[0]}{" "}
                    <Link
                      href={`/courses/${course.slug}`}
                      className="whitespace-nowrap text-cyan underline-offset-4 hover:underline"
                    >
                      Read more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
