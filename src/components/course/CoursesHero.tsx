import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArcBackdrop } from "@/components/ui/ArcBackdrop";
import { GridRules } from "@/components/layout/GridRules";
import { Media } from "@/components/ui/Media";
import { coursesHero } from "@/data/site";

export function CoursesHero() {
  const [left, right] = coursesHero.photos;

  return (
    <section
      data-section="courses-hero"
      className="relative overflow-hidden border-b border-border/50 bg-base"
    >
      <ArcBackdrop viewBox="0 0 1440 580" cx={1300} cy={300} radii={[120, 200, 280, 360]} />

      <Container>
        <div className="relative">
          <GridRules />

          {/* Flanking photos are decorative flourishes — dropped below lg,
              where there is no room beside the centred text. */}
          <Media
            alt={left.alt}
            seed={left.id}
            sizes="212px"
            className="absolute left-[4%] top-0 hidden aspect-212/140 w-53 rounded-chip lg:block"
          />
          <Media
            alt={right.alt}
            seed={right.id}
            sizes="176px"
            className="absolute right-0 top-24 hidden aspect-176/193 w-44 rounded-chip lg:block"
          />

          <div className="relative mx-auto max-w-200 py-20 text-center lg:py-28">
            <nav aria-label="Breadcrumb" className="text-default text-pale-blue/70">
              <ol className="flex items-center justify-center gap-2">
                <li>
                  <Link href="/" className="underline underline-offset-4 hover:text-cyan">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  Courses
                </li>
              </ol>
            </nav>

            <h1 className="mt-8 text-subheading sm:text-section lg:text-page-title">
              {coursesHero.heading}
            </h1>

            <p className="mx-auto mt-6 max-w-180 text-default text-pale-blue/80">
              {coursesHero.body}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
