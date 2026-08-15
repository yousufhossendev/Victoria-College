import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CourseDetailHero } from "@/components/course/CourseDetailHero";
import { CourseTabs } from "@/components/course/CourseTabs";
import { CourseInformation } from "@/components/course/CourseInformation";
import { CourseStructure } from "@/components/course/CourseStructure";
import { CourseAdmissions } from "@/components/course/CourseAdmissions";
import { getCourse, getCourseSlugs } from "@/lib/courses";
import type { Course } from "@/lib/types";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourse(slug);
  if (!course) return { title: "Course not found" };

  return { title: course.title, description: course.summary };
}

export default async function CourseDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const course = await getCourse(slug);
  if (!course) notFound();

  return (
    <>
      <CourseDetailHero course={course} />

      <section data-section="course-tabs" className="bg-card pb-20 pt-14 lg:pb-28 lg:pt-16">
        <Container>
          <CourseTabs
            tabs={[
              {
                id: "overview",
                label: "Course Overview",
                content: <OverviewPanel course={course} />,
              },
              {
                id: "structure",
                label: "Course Structure & Details",
                content: <CourseStructure course={course} />,
              },
              {
                id: "admissions",
                label: "Admissions & Key Details",
                content: <CourseAdmissions course={course} />,
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}

function OverviewPanel({ course }: { course: Course }) {
  return (
    <div className="space-y-16">
      <div className="mx-auto max-w-4xl space-y-5 text-body text-pale-blue/75">
        {course.overview.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}

        <h3 className="pt-4 text-card-title text-white">Course highlights</h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {course.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-chip border border-border/60 bg-white/4 px-4 py-3.5 text-default text-pale-blue/80"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <CourseInformation course={course} />
    </div>
  );
}
