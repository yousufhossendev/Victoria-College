import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "@/components/ui/ArrowRight";
import { Media } from "@/components/ui/Media";
import { formatDuration, schoolsById } from "@/data/courses";
import type { Course } from "@/lib/types";

export type CardVariant = "overlay" | "detail" | "carousel";

interface CourseCardProps {
  course: Course;
  variant?: CardVariant;
  className?: string;
  priority?: boolean;
}

export function CourseCard({
  course,
  variant = "overlay",
  className = "",
  priority = false,
}: CourseCardProps) {
  const school = schoolsById[course.schoolId];
  const href = `/courses/${course.slug}`;

  if (variant === "detail") {
    return (
      <Link href={href} className={`group relative flex flex-col ${className}`}>
        <div className="flex h-full flex-col overflow-hidden rounded-card bg-card">
          <Media
            src={course.cardImage}
            alt={course.title}
            seed={`${course.slug}-detail`}
            priority={priority}
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="h-52 w-full shrink-0 lg:h-[52%]"
          />

          <div className="flex min-h-0 flex-1 flex-col gap-4 p-6">
            <div className="flex flex-wrap gap-2">
              <Badge tone="school">{school.name}</Badge>
              <Badge tone="school">{formatDuration(course.durationMonths)}</Badge>
            </div>

            <h3 className="text-card-title text-white">{course.title}</h3>

            <p className="line-clamp-5 text-meta text-pale-blue/70">{course.overview[0]}</p>

            <div className="pt-2">
              <div className="text-meta font-bold text-white">School:</div>
              <div className="mt-1 text-meta text-pale-blue/70">{school.name}</div>
            </div>
          </div>
        </div>

        <CardArrow tone="magenta" className="-bottom-1 -right-5" />
      </Link>
    );
  }

  if (variant === "carousel") {
    return (
      <Link href={href} className={`group relative block h-full ${className}`}>
        <div className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-card-alt transition-colors group-hover:border-pink">
          <Media
            src={course.cardImage}
            alt={course.title}
            seed={`${course.slug}-carousel`}
            sizes="(min-width: 1024px) 33vw, 80vw"
            className="aspect-16/10 w-full shrink-0"
          />
          <div className="flex flex-1 flex-col gap-2.5 p-6">
            <span className="eyebrow text-sky">{school.shortName}</span>
            <h3 className="line-clamp-2 text-card-title">{course.title}</h3>
            <p className="line-clamp-2 text-meta text-pale-blue/60">{course.summary}</p>
            <div className="mt-auto pt-3 text-meta text-sky">
              {formatDuration(course.durationMonths)}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Overlay card — the feature and stacked slots of the grid share this design
  // and differ only in the height the grid gives them.
  return (
    <Link href={href} className={`group relative block ${className}`}>
      <div className="relative h-full overflow-hidden rounded-card bg-card">
        <Media
          src={course.cardImage}
          alt={course.title}
          seed={course.slug}
          priority={priority}
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-base via-base/75 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-8 pr-24">
          <h3 className="text-card-title text-white">{course.title}</h3>
          <p className="line-clamp-3 text-meta text-pale-blue/75">{course.summary}</p>
        </div>
      </div>

      <CardArrow tone="navy" className="bottom-6 -right-3" />
    </Link>
  );
}

/**
 * Decorative — the whole card is the link, so this must not be another control.
 * It sits outside the clipped surface because the design lets it hang over the
 * card edge.
 */
function CardArrow({
  tone,
  className = "",
}: {
  tone: "navy" | "magenta";
  className?: string;
}) {
  const size = tone === "magenta" ? "h-20 w-20" : "h-17 w-17";

  return (
    <span
      aria-hidden="true"
      className={`absolute grid place-items-center rounded-arrow text-white transition-all duration-300 ${size} ${
        tone === "magenta" ? "accent-gradient group-hover:brightness-115" : "bg-navy group-hover:bg-pink"
      } ${className}`}
    >
      <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5" />
    </span>
  );
}
