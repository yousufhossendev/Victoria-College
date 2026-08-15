import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CourseDetailHero } from "@/components/course/CourseDetailHero";
import { CourseSectionNav } from "@/components/course/CourseSectionNav";
import { CourseInformation } from "@/components/course/CourseInformation";
import { CourseStructure } from "@/components/course/CourseStructure";
import { CourseAdmissions } from "@/components/course/CourseAdmissions";
import { getCourse, getCourseSlugs } from "@/lib/courses";
import type { Course } from "@/lib/types";

type Params = Promise<{ slug: string }>;

/** Section ids double as the in-page anchors, so they are defined once. */
const SECTIONS = [
  { id: "course-overview", label: "Course Overview" },
  { id: "course-structure-details", label: "Course Structure & Details" },
  { id: "admissions-key-details", label: "Admissions & Key Details" },
] as const;

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

      <div data-section="course-body" className="bg-card pb-20 pt-14 lg:pb-28 lg:pt-16">
        <Container>
          <CourseSectionNav sections={SECTIONS} />

          {/*
            Sections run one after another rather than behind tabs, so every one
            is reachable by link, findable with in-page search and printable.
            scroll-mt clears the sticky header when an anchor is followed.
          */}
          <div className="mt-16 space-y-24 lg:mt-20 lg:space-y-32">
            <section id={SECTIONS[0].id} aria-label={SECTIONS[0].label} className="scroll-mt-28">
              <OverviewPanel course={course} />
            </section>

            <section id={SECTIONS[1].id} aria-label={SECTIONS[1].label} className="scroll-mt-28">
              <CourseStructure course={course} />
            </section>

            <section id={SECTIONS[2].id} aria-label={SECTIONS[2].label} className="scroll-mt-28">
              <CourseAdmissions course={course} />
            </section>
          </div>
        </Container>
      </div>
    </>
  );
}

function OverviewPanel({ course }: { course: Course }) {
  return (
    <div className="space-y-16">
      {/* Each stacked section carries its own heading now that they are not
          behind tabs — otherwise the first one arrives unlabelled. */}
      <div className="text-center">
        <h2 className="text-card-title sm:text-subheading">Course Overview</h2>
        <p className="mt-3 text-default text-pale-blue/70">
          What the course covers and how it is taught.
        </p>
      </div>

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
