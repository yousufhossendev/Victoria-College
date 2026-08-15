import { Container } from "@/components/ui/Container";
import { GridRules } from "@/components/layout/GridRules";
import { CourseGrid } from "@/components/course/CourseGrid";
import { CoursesEmpty } from "@/components/course/CoursesEmpty";
import { degreeCourses } from "@/data/site";
import { schoolsById } from "@/data/courses";
import { getCourses } from "@/lib/courses";
import type { SchoolId } from "@/lib/types";

export async function DegreeCourses({ school, query }: { school?: SchoolId; query?: string }) {
  const results = await getCourses({ school, q: query });

  return (
    <>
      {results.length === 0 ? (
        <CoursesEmpty query={query} schoolName={school ? schoolsById[school].name : undefined} />
      ) : (
        <CourseGrid courses={results} />
      )}
    </>
  );
}

/** Header row is outside the Suspense boundary so it paints immediately. */
export function DegreeCoursesHeader() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
      <div>
        <span className="eyebrow text-pink">
          <span aria-hidden="true" className="text-pale-blue/45">
            /{" "}
          </span>
          {degreeCourses.eyebrow}
        </span>
        <h2 className="mt-4 text-subheading sm:text-section">{degreeCourses.heading}</h2>
      </div>
      <p className="max-w-159 text-default text-pale-blue/80 lg:pt-2">{degreeCourses.body}</p>
    </div>
  );
}

export function DegreeCoursesSection({ children }: { children: React.ReactNode }) {
  return (
    <section data-section="degree-courses" className="relative bg-base">
      <Container>
        <div className="relative">
          <GridRules />

          <div className="relative py-16 lg:py-24">
            <DegreeCoursesHeader />
            <div className="mt-12">{children}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
