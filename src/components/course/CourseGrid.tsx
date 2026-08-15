import { CourseCard, type CardVariant } from "@/components/course/CourseCard";
import type { Course } from "@/lib/types";

/**
 * The asymmetric grid from the design: a tall feature card, two stacked cards
 * beside it, and one expanded card carrying school and duration badges.
 *
 * It is expressed as a repeating four-course group rather than fixed positions,
 * so it survives a changing dataset. Groups that do not fill to four get a
 * layout that still closes the row — no holes, whatever the data returns.
 */
interface Slot {
  variant: CardVariant;
  span: string;
}

interface GroupLayout {
  grid: string;
  slots: Slot[];
}

const FULL_GROUP: GroupLayout = {
  grid: "lg:grid-cols-[416fr_408fr_408fr] lg:grid-rows-2 lg:auto-rows-86.5",
  slots: [
    { variant: "overlay", span: "lg:col-start-1 lg:row-span-2" },
    { variant: "overlay", span: "lg:col-start-2 lg:row-start-1" },
    { variant: "overlay", span: "lg:col-start-2 lg:row-start-2" },
    { variant: "detail", span: "lg:col-start-3 lg:row-span-2" },
  ],
};

const PARTIAL_GROUPS: Record<number, GroupLayout> = {
  3: {
    grid: "lg:grid-cols-[416fr_408fr] lg:grid-rows-2 lg:auto-rows-86.5",
    slots: [
      { variant: "overlay", span: "lg:col-start-1 lg:row-span-2" },
      { variant: "overlay", span: "lg:col-start-2 lg:row-start-1" },
      { variant: "overlay", span: "lg:col-start-2 lg:row-start-2" },
    ],
  },
  2: {
    grid: "lg:grid-cols-2 lg:auto-rows-179",
    slots: [
      { variant: "overlay", span: "" },
      { variant: "detail", span: "" },
    ],
  },
  // A lone remaining course gets the overlay treatment at single-row height —
  // a full-width detail card at 716px reads as a mistake rather than a feature.
  1: {
    grid: "lg:grid-cols-1 lg:auto-rows-86.5",
    slots: [{ variant: "overlay", span: "" }],
  },
};

function layoutFor(size: number): GroupLayout {
  return size >= 4 ? FULL_GROUP : (PARTIAL_GROUPS[size] ?? PARTIAL_GROUPS[1]);
}

function chunk<T>(items: T[], size: number): T[][] {
  const groups: T[][] = [];
  for (let i = 0; i < items.length; i += size) groups.push(items.slice(i, i + size));
  return groups;
}

/**
 * Courses flagged `featured` are pulled to the front of each group so they land
 * in the tall slot; the original order is otherwise preserved.
 */
function orderForLayout(courses: Course[]): Course[] {
  const featured = courses.filter((course) => course.featured);
  const rest = courses.filter((course) => !course.featured);

  const ordered: Course[] = [];
  const groups = Math.ceil(courses.length / 4);

  for (let i = 0; i < groups; i += 1) {
    const lead = featured.shift() ?? rest.shift();
    if (lead) ordered.push(lead);
    for (let j = 0; j < 3; j += 1) {
      const next = rest.shift() ?? featured.shift();
      if (next) ordered.push(next);
    }
  }

  return ordered;
}

export function CourseGrid({ courses }: { courses: Course[] }) {
  const groups = chunk(orderForLayout(courses), 4);

  return (
    <div className="flex flex-col gap-6">
      {groups.map((group, groupIndex) => {
        const layout = layoutFor(group.length);

        return (
          <div key={group[0].slug} className={`grid grid-cols-1 gap-6 ${layout.grid}`}>
            {group.map((course, index) => {
              const slot = layout.slots[index];
              return (
                <CourseCard
                  key={course.slug}
                  course={course}
                  variant={slot.variant}
                  priority={groupIndex === 0 && index === 0}
                  className={`min-h-88 ${slot.span}`}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
