import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GridRules } from "@/components/layout/GridRules";
import { Media } from "@/components/ui/Media";
import { coursesHero } from "@/data/site";

export function CoursesHero() {
  const [left, right] = coursesHero.photos;

  return (
    <section
      data-section="courses-hero"
      className="relative overflow-hidden bg-base"
    >
      {/* Supplied arc backdrop. Decorative, and the 10% opacity is baked into
          the asset, so it is dropped in as-is rather than re-drawn. */}
      <Image
        src="/icons/course-hero-bg.svg"
        alt=""
        aria-hidden="true"
        width={527}
        height={452}
        unoptimized
        className="pointer-events-none absolute right-0 top-0 w-131.75 max-w-[60%] select-none"
      />

      <Container>
        <div className="relative">
          <GridRules />

          {/* Flanking photos are decorative flourishes — dropped below lg,
              where there is no room beside the centred text. */}
          <Media
            src={left.src}
            alt={left.alt}
            seed={left.id}
            sizes="208px"
            className="absolute left-[4%] top-3 hidden aspect-208/195 w-52 rounded-chip lg:block"
          />
          <Media
            src={right.src}
            alt={right.alt}
            seed={right.id}
            sizes="194px"
            className="absolute right-0 top-24 hidden aspect-194/195 w-48.5 rounded-chip lg:block"
          />

          <div className="relative mx-auto max-w-200 py-20 text-center lg:py-40">
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

            <p className="mx-auto mt-6 max-w-200 text-body text-pale-blue/80">
              {coursesHero.body}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
