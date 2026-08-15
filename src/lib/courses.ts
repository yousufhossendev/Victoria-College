import { courses, schoolsById } from "@/data/courses";
import type { Course, CourseQuery, SchoolId } from "@/lib/types";

/**
 * Stands in for a CMS or API call. Everything that renders course content goes
 * through here, so replacing this module with a real fetch does not touch a
 * single component. The delay is what makes the loading state observable —
 * remove it, and the skeleton still works, it just flashes past.
 */
const SIMULATED_LATENCY_MS = Number(process.env.NEXT_PUBLIC_COURSE_LATENCY_MS ?? 700);

function delay(ms: number): Promise<void> {
  if (ms <= 0) return Promise.resolve();
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function matchesQuery(course: Course, query: CourseQuery): boolean {
  if (query.school && query.school !== "all" && course.schoolId !== query.school) {
    return false;
  }

  const term = query.q?.trim().toLowerCase();
  if (!term) return true;

  const haystack = [
    course.title,
    course.summary,
    course.credential,
    schoolsById[course.schoolId].name,
    ...course.careers,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(term);
}

export async function getCourses(query: CourseQuery = {}): Promise<Course[]> {
  await delay(SIMULATED_LATENCY_MS);
  return courses.filter((course) => matchesQuery(course, query));
}

/** Resolves an explicit, ordered list of slugs — used by the homepage explorer. */
export async function getCoursesBySlugs(slugs: readonly string[]): Promise<Course[]> {
  await delay(SIMULATED_LATENCY_MS);
  return slugs
    .map((slug) => courses.find((course) => course.slug === slug))
    .filter((course): course is Course => course !== undefined);
}

export async function getCourse(slug: string): Promise<Course | undefined> {
  await delay(SIMULATED_LATENCY_MS);
  return courses.find((course) => course.slug === slug);
}

/** Synchronous — used by generateStaticParams, which cannot wait on latency. */
export function getCourseSlugs(): string[] {
  return courses.map((course) => course.slug);
}

export function isSchoolId(value: string | undefined): value is SchoolId {
  return value !== undefined && value in schoolsById;
}
