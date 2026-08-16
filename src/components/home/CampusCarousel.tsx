"use client";

import Link from "next/link";
import { useState } from "react";
import { CircleArrow } from "@/components/ui/CircleArrow";
import { Media } from "@/components/ui/Media";
import { campuses, campusSection } from "@/data/site";

/**
 * Three-up carousel: the active campus sits in a raised centre card, with the
 * previous and next campuses peeking out behind it on either side. The side
 * photos are buttons too, so the whole thing is navigable without hunting for
 * the arrows.
 */
export function CampusCarousel() {
  const [index, setIndex] = useState(0);
  const count = campuses.length;

  const go = (delta: number) => setIndex((current) => (current + delta + count) % count);

  const active = campuses[index];
  const previous = campuses[(index - 1 + count) % count];
  const next = campuses[(index + 1) % count];

  return (
    <div
      className="relative mt-12 aspect-[640/584] sm:aspect-[900/560] lg:aspect-[1280/632]"
      role="group"
      aria-roledescription="carousel"
      aria-label="Our campuses"
    >
      {/* Neighbours. Hidden on small screens, where there is no room to peek. */}
      <SidePhoto campus={previous} side="left" onClick={() => go(-1)} />
      <SidePhoto campus={next} side="right" onClick={() => go(1)} />

      {/* Active campus */}
      <div className="absolute inset-0 flex flex-col overflow-hidden lg:left-[25.1%] lg:top-0 lg:h-[92.4%] lg:w-1/2">
        <Media
          key={active.slug}
          src={active.src}
          alt={active.alt}
          seed={active.slug}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="min-h-0 flex-1 animate-[fade-in_400ms_var(--ease-out-soft)]"
        />
        <p
          aria-live="polite"
          className="flex h-20 shrink-0 items-center justify-center bg-indigo px-4 text-center text-body font-bold uppercase tracking-[0.06em] text-white sm:h-24 sm:text-card-title"
        >
          {active.name}
        </p>
      </div>

      {/* Discover badge, centred on the band like the design */}
      <Link
        href="/#campus-detail"
        className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-arrow border border-white/45 bg-white/25 text-meta uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:bg-white/35 lg:h-31 lg:w-31"
      >
        {campusSection.discoverLabel}
        <span className="sr-only"> {active.name}</span>
      </Link>

      <CircleArrow
        direction="prev"
        tone="navy"
        onClick={() => go(-1)}
        label="Previous campus"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 lg:left-[25.1%] lg:-translate-x-1/2"
      />
      <CircleArrow
        direction="next"
        tone="magenta"
        onClick={() => go(1)}
        label="Next campus"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 lg:left-[75.1%] lg:right-auto lg:-translate-x-1/2"
      />
    </div>
  );
}

function SidePhoto({
  campus,
  side,
  onClick,
}: {
  campus: (typeof campuses)[number];
  side: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      tabIndex={-1}
      aria-hidden="true"
      className={`absolute top-[29%] hidden h-[71%] w-[43.8%] overflow-hidden lg:block ${
        side === "left" ? "left-0" : "left-[56.25%]"
      }`}
    >
      <Media
        src={campus.src}
        alt=""
        seed={`${campus.slug}-peek`}
        sizes="44vw"
        className="h-full w-full"
      />
    </button>
  );
}
