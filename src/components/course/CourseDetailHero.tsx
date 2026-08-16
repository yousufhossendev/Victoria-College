import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GridRules } from "@/components/layout/GridRules";
import { Media } from "@/components/ui/Media";
import { courseDetailPhotos } from "@/data/site";
import type { Course } from "@/lib/types";

/**
 * Hero text sits on the base surface; the three images hang below it and cross
 * into the lighter band that carries the tabs. The overlap is a negative margin
 * on the image row rather than absolute positioning, so the row still pushes
 * the band down as it grows.
 */
export function CourseDetailHero({ course }: { course: Course }) {
  return (
    <section data-section="course-hero" className="relative overflow-hidden bg-base">
      {/* Supplied arc backdrop. Decorative, and the 10% opacity is baked into
          the asset, so it is dropped in as-is rather than re-drawn. */}
      <Image
        src="/icons/details-hero-bg.svg"
        alt=""
        aria-hidden="true"
        width={615}
        height={752}
        unoptimized
        className="pointer-events-none absolute right-0 top-0 w-153.75 max-w-[50%] select-none"
      />

      <Container>
        <div className="relative">
          <GridRules />

          <div className="relative pb-8 pt-14 text-center lg:pt-16">
            <nav aria-label="Breadcrumb" className="text-default text-pale-blue/70">
              <ol className="flex flex-wrap items-center justify-center gap-2">
                <li>
                  <Link href="/" className="underline underline-offset-4 hover:text-cyan">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/courses" className="underline underline-offset-4 hover:text-cyan">
                    Courses
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  {course.title}
                </li>
              </ol>
            </nav>

            <h1 className="mt-6 text-subheading sm:text-section lg:text-page-title">
              {course.title}
            </h1>

            <p className="mx-auto mt-6 max-w-248 text-body text-pale-blue/80">
              {course.overview[0]}
            </p>
          </div>
        </div>
      </Container>

      {/*
        The lighter band is painted behind the lower part of the image row
        rather than being a wrapper around it. A negative margin here collapses
        and drags the whole band upwards instead of letting the images hang
        over it, which is not what the design shows.
      */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 hidden bg-card lg:block lg:h-49" />

      <Container>
        <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-[322fr_596fr_323fr]">
          {courseDetailPhotos.map((image, index) => (
            <Media
              key={image.id}
              src={image.src}
              alt={image.alt}
              seed={`${course.slug}-hero-${image.id}`}
              priority={index === 1}
              sizes="(min-width: 640px) 42vw, 100vw"
              className="h-56 w-full rounded-card lg:h-80"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
