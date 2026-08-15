import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { Hero } from "@/components/home/Hero";
import { CourseExplorer, CourseExplorerSkeleton } from "@/components/home/CourseExplorer";
import { CampusSection } from "@/components/home/CampusSection";
import { Partners } from "@/components/home/Partners";
import { QuotePanel } from "@/components/home/QuotePanel";
import { Stories } from "@/components/home/Stories";
import { Testimonials } from "@/components/home/Testimonials";
import { admissionSteps, stats } from "@/data/site";
import { schools } from "@/data/courses";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section aria-label="At a glance" className="border-b border-border/60 bg-base">
        <Container>
          <dl className="grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4 lg:py-14">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-section tracking-[-0.03em]">{stat.value}</span>
                  <span className="mt-2 block text-default text-muted">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Suspense fallback={<CourseExplorerSkeleton />}>
        <CourseExplorer />
      </Suspense>

      <QuotePanel />

      <section id="about" className="bg-deep py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div>
              <span className="eyebrow text-accent">About VCAD</span>
              <h2 className="mt-5 text-section sm:text-page-title">
                A college built around studios, not lecture theatres.
              </h2>
            </div>
            <div className="space-y-5 text-body text-pale-blue/70">
              <p>
                Victoria College of Arts and Design has taught practical creative work in the centre
                of the city for thirty years. Part of PEN Group, we run eight diploma programmes
                across four schools, and every one of them is assessed on what you make.
              </p>
              <p>
                Our tutors are practitioners first. They bring live briefs, real constraints and the
                habits of a working studio into the room — including the crit, which is where most
                of the learning actually happens.
              </p>
              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                {schools.map((school) => (
                  <div key={school.id} className="border-t border-border pt-4">
                    <h3 className="text-default font-semibold">{school.name}</h3>
                    <p className="mt-2 text-default text-muted">{school.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CampusSection />

      <Testimonials />

      <Stories />

      <Partners />

      <section id="admissions" className="py-16 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <span className="eyebrow text-accent">Admissions</span>
            <h2 className="mt-5 text-section sm:text-page-title">Four steps, one named person, no silence.</h2>
          </div>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((item) => (
              <li key={item.step} className="rounded-card border border-border/60 p-7">
                <span className="text-card-title text-accent">{item.step}</span>
                <h3 className="mt-4 text-body font-semibold">{item.title}</h3>
                <p className="mt-3 text-default text-pale-blue/70">{item.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap gap-3">
            <ActionLink href="/courses" withArrow>
              Explore our courses
            </ActionLink>
            <ActionLink href="#contact" variant="secondary">
              Talk to admissions
            </ActionLink>
          </div>
        </Container>
      </section>
    </>
  );
}
