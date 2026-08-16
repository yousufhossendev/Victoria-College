import { formatDuration, schoolsById } from "@/data/courses";
import type { Course } from "@/lib/types";

const ICONS = {
  calendar: "M6 3v2m8-2v2M3.5 8.5h13M4.5 5.5h11a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z",
  clock: "M10 5.5V10l2.8 1.7M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
  mode: "M3.5 6.5h13M3.5 10h13M3.5 13.5h7",
  pin: "M10 17s5.5-4.6 5.5-8.5a5.5 5.5 0 1 0-11 0C4.5 12.4 10 17 10 17Zm0-6.4a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2Z",
  fee: "M12.5 6.5a3 3 0 0 0-5 2.2c0 2.4-.8 3.6-1.5 4.3h7.5M6.5 10h4M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
  award: "M10 12.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-2.5 1L6.5 18l3.5-2 3.5 2-1-4.5",
} as const;

/**
 * "Everything you need to know at a glance." Rows are derived from the course
 * record rather than written per course, so a data change flows straight
 * through. Icons are per-field — the frame repeats one clock across five of the
 * six tiles, which reads as a placeholder rather than intent.
 */
export function CourseInformation({ course }: { course: Course }) {
  const items = [
    { icon: "calendar", label: "Start Date", value: course.intakes.join(", ") },
    { icon: "clock", label: "Duration", value: titleCase(formatDuration(course.durationMonths)) },
    { icon: "mode", label: "Study Mode", value: course.studyMode },
    { icon: "pin", label: "Locations", value: course.location },
    { icon: "fee", label: "Tuition Fee (UK)", value: course.tuition },
    { icon: "award", label: "Awarding Body", value: course.awardingBody },
  ] as const;

  return (
    <div>
      <div className="text-center">
        <h2 className="text-card-title sm:text-subheading">Course Information</h2>
        <p className="mt-3 text-body text-pale-blue/70">
          Everything you need to know about this course at a glance
        </p>
        <p className="sr-only">School: {schoolsById[course.schoolId].name}</p>
      </div>

      <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex h-60 flex-col items-center justify-center gap-3 rounded-card border border-border/60 bg-[#040D3D] px-6 text-center"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-7 w-7 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={ICONS[item.icon]} />
            </svg>
            <dt className="text-card-title text-white">{item.label}</dt>
            <dd className="text-default text-pale-blue/70">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function titleCase(value: string): string {
  return value.replace(/\b[a-z]/g, (character) => character.toUpperCase());
}
