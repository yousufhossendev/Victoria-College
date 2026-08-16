import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GridRules } from "@/components/layout/GridRules";
import { GalleryCarousel } from "@/components/course/GalleryCarousel";
import { galleryCourses } from "@/data/site";

export function CourseGallery() {
  return (
    <section
      data-section="course-gallery"
      className="relative overflow-hidden bg-[#040D3D]  "
    >
      {/* Supplied arc backdrop. Decorative, and the 10% opacity is baked into
          the asset, so it is dropped in as-is rather than re-drawn. */}
  {/* <GridRules/> */}
      <Image
        src="/icons/gallery-bg.svg"
        alt=""
        aria-hidden="true"
        width={374}
        height={541}
        unoptimized
        className="pointer-events-none absolute right-0 top-0 w-93.5 max-w-[45%] select-none"
      />

      <Container>
        <div className="relative pt-16 lg:pt-28 ">
          <GridRules />

          <div className="relative pb-12 text-center">
            <span className="eyebrow text-pink">
              <span aria-hidden="true" className="text-pale-blue/45">
                /{" "}
              </span>
              {galleryCourses.eyebrow}
            </span>
            <h2 className="mt-4 text-subheading sm:text-section">{galleryCourses.heading}</h2>
            <p className="mx-auto mt-5 max-w-215 text-body text-pale-blue/80">
              {galleryCourses.body}
            </p>
          </div>
        </div>
      </Container>

      {/*
        Full-bleed: the strip runs past the content box on both sides, so it sits
        outside Container and carries no gutter of its own. The design draws no
        arrows, so there are none.
      */}
      <GalleryCarousel />
       <Container>
        <div className="relative pt-16 lg:pt-28 ">
          <GridRules />
          </div>
          </Container>
    </section>
  );
}
