"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { GridRules } from "@/components/layout/GridRules";
import { ArrowRight } from "@/components/ui/ArrowRight";
import { CircleArrow } from "@/components/ui/CircleArrow";
import { Media } from "@/components/ui/Media";
import { stories, storySection } from "@/data/site";

export function Stories() {
  const [index, setIndex] = useState(0);
  const count = stories.length;
  const active = stories[index];

  const go = (delta: number) => setIndex((current) => (current + delta + count) % count);

  return (
    <section id="stories" data-section="stories" className="relative  bg-base">
      <Container>
        <div className="relative">
          <GridRules />

          <div className="relative py-14 lg:py-28">
            <div className="flex items-start justify-between gap-8">
              <div>
                <span className="eyebrow text-pink">{storySection.eyebrow}</span>
                <h2 className="mt-4 text-subheading sm:text-section">{storySection.heading}</h2>
              </div>

              <div className="flex shrink-0 gap-2">
                <CircleArrow direction="prev" tone="navy" onClick={() => go(-1)} label="Previous story" />
                <CircleArrow direction="next" tone="magenta" onClick={() => go(1)} label="Next story" />
              </div>
            </div>

            <div
              className="mt-12 grid gap-10 lg:grid-cols-[638fr_603fr]"
              aria-live="polite"
              aria-atomic="true"
            >
              <Media
                key={active.id}
                src={active.src}
                alt={active.alt}
                seed={active.id}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="aspect-630/543 w-full animate-[fade-in_400ms_var(--ease-out-soft)] rounded-card"
              />

              <div className="flex flex-col">
                {/*
                  The frame sets this column a step larger than the token scale
                  allows: the title measures ~42px against the 36px subheading
                  and 48px section tokens, so it is pinned to the frame's size
                  at lg. The 42px is also what breaks the line after "Canary",
                  as the design does.
                */}
                <h3 className="text-card-title sm:text-subheading lg:text-[2.625rem] lg:leading-[1.14]">
                  {active.title}
                </h3>
                <p className="mt-8 max-w-142 text-lead text-pale-blue/75">{active.excerpt}</p>

                <Link
                  href={active.href}
                  className="group mt-10 inline-flex h-15 w-fit items-stretch overflow-hidden rounded-chip bg-navy text-white transition-colors hover:bg-card lg:mt-auto"
                >
                  <span className="flex items-center px-5 text-[0.875rem] font-medium">
                    {storySection.cta}
                  </span>
                  <span className="grid w-14 shrink-0 place-items-center bg-magenta">
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                  <span className="sr-only">: {active.title}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
