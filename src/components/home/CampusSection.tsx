import { Container } from "@/components/ui/Container";
import { GridRules } from "@/components/layout/GridRules";
import { CampusCarousel } from "@/components/home/CampusCarousel";
import { campusSection } from "@/data/site";

export function CampusSection() {
  return (
    <section id="campus" data-section="campuses" className="relative  border-border/50 bg-base">
      <Container>
        <div className="relative">
          <GridRules />

          <div className="relative py-14 lg:py-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
              <div>
                <span className="eyebrow text-pink">{campusSection.eyebrow}</span>
                <h2 className="mt-4 text-subheading sm:text-section">{campusSection.heading}</h2>
              </div>
              <p className="max-w-91 text-default text-pale-blue/80">{campusSection.body}</p>
            </div>

            <CampusCarousel />
          </div>
        </div>
      </Container>
    </section>
  );
}
