import { Container } from "@/components/ui/Container";
import { ArcBackdrop } from "@/components/ui/ArcBackdrop";
import { GridRules } from "@/components/layout/GridRules";
import { Media } from "@/components/ui/Media";
import { Rail } from "@/components/ui/Rail";
import { galleryCourses } from "@/data/site";

export function CourseGallery() {
  return (
    <section
      data-section="course-gallery"
      className="relative overflow-hidden bg-base py-16 lg:py-20"
    >
      <ArcBackdrop viewBox="0 0 1440 500" cx={1330} cy={140} radii={[90, 150, 210, 270]} />

      <Container>
        <div className="relative">
          <GridRules />

          <div className="relative pb-12 text-center">
            <span className="eyebrow text-pink">
              <span aria-hidden="true" className="text-pale-blue/45">
                /{" "}
              </span>
              {galleryCourses.eyebrow}
            </span>
            <h2 className="mt-4 text-subheading sm:text-section">{galleryCourses.heading}</h2>
            <p className="mx-auto mt-5 max-w-215 text-default text-pale-blue/80">
              {galleryCourses.body}
            </p>
          </div>
        </div>
      </Container>

      {/*
        Full-bleed: the strip runs past the content box on both sides, so it sits
        outside Container and carries the gutter as padding instead. Drag, wheel
        and keyboard all scroll it; the design draws no arrows, so there are none.
      */}
      <Rail
        ariaLabel="Course gallery"
        arrows="none"
        // scroll-pl must match the gutter, or snapping aligns the first item to
        // the scrollport edge and scrolls straight past the padding on load.
        className="relative gap-4.5 px-5 scroll-pl-5 sm:px-8 sm:scroll-pl-8 lg:px-20 lg:scroll-pl-20"
      >
        {galleryCourses.images.map((image) => (
          <Media
            key={image.id}
            alt={image.alt}
            seed={image.id}
            sizes="308px"
            className="h-80 w-77 shrink-0 snap-start rounded-card"
          />
        ))}
      </Rail>
    </section>
  );
}
