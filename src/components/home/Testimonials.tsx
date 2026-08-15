"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { GridRules } from "@/components/layout/GridRules";
import { CircleArrow } from "@/components/ui/CircleArrow";
import { Media } from "@/components/ui/Media";
import { testimonialSection, testimonials } from "@/data/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const active = testimonials[index];

  const go = (delta: number) => setIndex((current) => (current + delta + count) % count);

  return (
    <section
      id="work"
      data-section="testimonials"
      className="relative border-b border-border/50 bg-base"
    >
      <Container>
        <div className="relative">
          <GridRules />

          <div className="relative py-14 lg:py-20">
            <div className="flex items-start justify-between gap-8">
              <div>
                <span className="eyebrow text-pink">{testimonialSection.eyebrow}</span>
                <h2 className="mt-4 text-subheading sm:text-section">
                  {testimonialSection.heading}
                </h2>
              </div>

              <div className="flex shrink-0 gap-2">
                <CircleArrow direction="prev" tone="navy" onClick={() => go(-1)} label="Previous testimonial" />
                <CircleArrow direction="next" tone="magenta" onClick={() => go(1)} label="Next testimonial" />
              </div>
            </div>

            <div
              className="mt-12 grid gap-5 lg:grid-cols-[412fr_832fr]"
              aria-live="polite"
              aria-atomic="true"
            >
              <Media
                key={active.id}
                alt={`${active.name}, ${active.role}`}
                seed={active.id}
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="aspect-412/430 w-full animate-[fade-in_400ms_var(--ease-out-soft)] rounded-chip lg:aspect-auto lg:h-full"
              />

              <figure className="flex flex-col justify-center rounded-chip border border-border p-8 lg:px-11 lg:py-10">
                <QuoteMark className="h-8 w-11 text-border" />

                <blockquote className="mt-6 text-lead text-pale-blue/85">{active.quote}</blockquote>

                <figcaption className="mt-8">
                  <div className="text-default font-semibold text-white">{active.name}</div>
                  <div className="mt-1.5 text-meta text-sky">{active.role}</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 28" aria-hidden="true" className={className} fill="currentColor">
      <path d="M0 28 7 0h11l-5 28H0Zm22 0L29 0h11l-5 28H22Z" />
    </svg>
  );
}
