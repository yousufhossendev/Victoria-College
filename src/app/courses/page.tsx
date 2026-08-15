import type { Metadata } from "next";
import { Suspense } from "react";
import { CoursesHero } from "@/components/course/CoursesHero";
import { CourseGridSkeleton } from "@/components/course/CourseGridSkeleton";
import { DegreeCourses, DegreeCoursesSection } from "@/components/course/DegreeCourses";
import { CourseGallery } from "@/components/course/CourseGallery";
import { isSchoolId } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Explore our courses",
  description:
    "Degree courses across design, media and technology, fashion and creative business.",
};

type SearchParams = Promise<{ school?: string; q?: string }>;

/**
 * `school` and `q` are read from the URL but no filter UI is drawn — the design
 * does not include one. They stay supported so a filtered or deliberately
 * empty view (`/courses?q=zzz`) is reachable and linkable, which is how the
 * empty state can be reviewed. See README.
 */
export default async function CoursesPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const school = isSchoolId(params.school) ? params.school : undefined;
  const query = params.q?.trim() || undefined;

  return (
    <>
      <CoursesHero />

      <DegreeCoursesSection>
        {/* Keyed so a change of filter re-suspends and shows the skeleton again. */}
        <Suspense key={`${school ?? "all"}|${query ?? ""}`} fallback={<CourseGridSkeleton />}>
          <DegreeCourses school={school} query={query} />
        </Suspense>
      </DegreeCoursesSection>

      <CourseGallery />
    </>
  );
}
