import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CourseDetailHero } from "@/components/course/CourseDetailHero";
import { CourseSectionNav } from "@/components/course/CourseSectionNav";
import { CourseInformation } from "@/components/course/CourseInformation";
import { CourseStructure } from "@/components/course/CourseStructure";
import { CourseAdmissions } from "@/components/course/CourseAdmissions";
import { CourseSpecification } from "@/components/course/CourseSpecification";
import { ReadyToApply } from "@/components/course/ReadyToApply";
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

      <div
        data-section="course-body"
        className="relative overflow-hidden bg-base pb-20 pt-14 lg:pb-28"
      >
        {/* The lighter band behind the hero photos runs on a little further,
            and the tab pill is centred on where it stops. */}
        <div aria-hidden="true" className="absolute inset-x-0 z-1  top-0 h-24 bg-card" />

        {/* Supplied arc backdrop. Decorative, and the 10% opacity is baked into
            the asset, so it is dropped in as-is rather than re-drawn. The arc is
            taller than the area it belongs to, so it is clipped to a top band
            rather than left to trail down into the sections below. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-144 overflow-hidden select-none"
        >
          <Image
            src="/icons/course-info-bg.svg"
            alt=""
            width={481}
            height={642}
            unoptimized
            className="absolute left-0 top-0 w-120.25 max-w-[40%]"
          />
        </div>

        <Container>
          <div className="relative z-2">
            <CourseSectionNav sections={SECTIONS} />
          </div>

          {/*
            Sections run one after another rather than behind tabs, so every one
            is reachable by link, findable with in-page search and printable.
            scroll-mt clears the sticky header when an anchor is followed.
          */}
          <div className="relative mt-9 space-y-24 lg:space-y-32">
            <section id={SECTIONS[0].id} aria-label={SECTIONS[0].label} className="scroll-mt-28">
              <OverviewPanel course={course} />
            </section>

            <section id={SECTIONS[1].id} aria-label={SECTIONS[1].label} className="scroll-mt-28">
              <CourseStructure course={course} />
            </section>

            <section id={SECTIONS[2].id} aria-label={SECTIONS[2].label} className="scroll-mt-28">
              <CourseAdmissions course={course} />
              <div className="mt-6">
                <CourseSpecification course={course} />
              </div>
            </section>
          </div>

          <div className="relative mt-20">
            <ReadyToApply />
          </div>
        </Container>
      </div>
    </>
  );
}

/** The overview section is the information grid on its own for now. */
function OverviewPanel({ course }: { course: Course }) {
  return <CourseInformation course={course} />;
}
