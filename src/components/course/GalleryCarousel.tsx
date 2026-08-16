"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { galleryCourses } from "@/data/site";

/** Pixels per second the strip creeps along at rest. */
const SPEED = 34;
const DRAG_THRESHOLD_PX = 6;

/**
 * The gallery strip from the frame: a full-bleed row of photos that runs past
 * both edges of the page and drifts continuously, so there is always a part-cut
 * card on either side rather than a hard start and end.
 *
 * The loop is done by rendering the set twice and wrapping `scrollLeft` by one
 * set's width — that keeps it a real scroll container, so drag, wheel, trackpad
 * and keyboard all still work, which a transform-based marquee would break.
 * Motion stops while the reader is hovering, dragging or tabbed into it, and
 * never starts at all if they have asked for reduced motion.
 */
export function GalleryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);

  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  /** Width of one copy of the set — scrolling by this lands on the same frame. */
  const period = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const items = track.children;
    const first = items[0] as HTMLElement | undefined;
    const wrap = items[galleryCourses.images.length] as HTMLElement | undefined;
    return first && wrap ? wrap.offsetLeft - first.offsetLeft : 0;
  }, []);

  /** Keep scrollLeft inside the first copy, so the strip never hits an end. */
  const wrap = useCallback(() => {
    const track = trackRef.current;
    const width = period();
    if (!track || width <= 0) return;
    if (track.scrollLeft >= width) track.scrollLeft -= width;
    else if (track.scrollLeft < 0) track.scrollLeft += width;
  }, [period]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || paused) return;

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;
      track.scrollLeft += SPEED * delta;
      wrap();
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, wrap]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return; // native touch scrolling is better
    const track = trackRef.current;
    if (!track) return;
    drag.current = { active: true, startX: event.clientX, startScroll: track.scrollLeft, moved: false };
    setDragging(true);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    const delta = event.clientX - drag.current.startX;
    if (Math.abs(delta) > DRAG_THRESHOLD_PX) {
      drag.current.moved = true;
      track.setPointerCapture(event.pointerId);
    }
    if (drag.current.moved) {
      track.scrollLeft = drag.current.startScroll - delta;
      wrap();
    }
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (track?.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
    drag.current = { ...drag.current, active: false, moved: false };
    setDragging(false);
  };

  // Rendered twice: the second copy is what the first scrolls into, so it is
  // decorative repetition rather than new content.
  const items = [
    ...galleryCourses.images.map((image) => ({ ...image, key: image.id, clone: false })),
    ...galleryCourses.images.map((image) => ({ ...image, key: `${image.id}-clone`, clone: true })),
  ];

  return (
    <div
      ref={trackRef}
      role="region"
      aria-label="Course gallery"
      tabIndex={0}
      className={`relative flex gap-4 overflow-x-auto ${dragging ? "cursor-grabbing select-none" : "cursor-grab"}`}
      style={{ scrollbarWidth: "none" }}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {items.map((image) => (
        <Image
          key={image.key}
          src={image.src}
          alt={image.clone ? "" : image.alt}
          aria-hidden={image.clone || undefined}
          width={311}
          height={323}
          sizes="311px"
          className="h-81 w-78 shrink-0 rounded-card object-cover"
        />
      ))}
    </div>
  );
}
