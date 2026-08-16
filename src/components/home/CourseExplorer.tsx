import Link from "next/link";
import { Arrow } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { GridRules } from "@/components/layout/GridRules";
import { Media } from "@/components/ui/Media";
import { CourseAccordion } from "@/components/home/CourseAccordion";
import { exploreSection } from "@/data/site";
import { getCoursesBySlugs } from "@/lib/courses";

export async function CourseExplorer() {
  const courses = await getCoursesBySlugs(exploreSection.courseSlugs);

  return (
    <section className="relative  bg-base">
      <Container>
        <div className="relative">
          <GridRules columns={true} />

          <div className="relative py-16 lg:py-24">
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div>
                <span className="eyebrow text-pink">{exploreSection.eyebrow}</span>
                <h2 className="mt-4 text-subheading sm:text-section">{exploreSection.heading}</h2>
              </div>

              <Link
                href={exploreSection.cta.href}
                className="group flex h-14 w-full max-w-52 shrink-0 items-center justify-between rounded-chip border border-border px-5 text-default text-white transition-colors hover:border-pink hover:bg-card sm:w-52"
              >
                {exploreSection.cta.label}
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.12fr_1fr] lg:gap-16">
              <CourseAccordion courses={courses} />

              <Media
                src="/images/home-courses.png"
                alt={exploreSection.image.alt}
                seed="explore-lecture"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-full min-h-72 w-full rounded-card border border-white/15"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CourseExplorerSkeleton() {
  return (
    <section className="border-b border-border/50 bg-base">
      <Container>
        <div className="py-16 lg:py-24">
          <div className="skeleton h-3 w-24 rounded-chip" />
          <div className="skeleton mt-5 h-12 w-full max-w-lg rounded-chip" />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.12fr_1fr] lg:gap-16">
            <div>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="border-b border-border/70 py-5">
                  <div className="skeleton h-6 w-3/4 rounded-chip" />
                </div>
              ))}
            </div>
            <div className="skeleton min-h-72 rounded-card" />
          </div>
        </div>
      </Container>
    </section>
  );
}
