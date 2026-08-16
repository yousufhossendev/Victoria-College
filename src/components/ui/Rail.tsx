"use client";

import { ArrowRight } from "@/components/ui/ArrowRight";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

interface RailProps {
  ariaLabel: string;
  children: ReactNode;
  /** Extra classes for the scrolling track (gap, padding, snap alignment). */
  className?: string;
  arrows?: "top" | "overlay" | "none";
  heading?: ReactNode;
}

const DRAG_THRESHOLD_PX = 6;

/**
 * Horizontal scroller used by the homepage course carousel, the courses gallery
 * strip and the testimonial rail. Supports pointer drag, arrow buttons, native
 * wheel/trackpad scrolling and keyboard focus — arrows are hidden from assistive
 * tech because the track itself is focusable and scrollable.
 */
export function Rail({
  ariaLabel,
  children,
  className = "",
  arrows = "top",
  heading,
}: RailProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [dragging, setDragging] = useState(false);

  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const syncEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    syncEdges();
    track.addEventListener("scroll", syncEdges, { passive: true });

    const observer = new ResizeObserver(syncEdges);
    observer.observe(track);
    for (const child of Array.from(track.children)) observer.observe(child);

    return () => {
      track.removeEventListener("scroll", syncEdges);
      observer.disconnect();
    };
  }, [syncEdges, children]);

  const step = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const amount = first ? first.offsetWidth + gap : track.clientWidth * 0.9;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return; // native touch scrolling is better
    const track = trackRef.current;
    if (!track) return;
    drag.current = {
      active: true,
      startX: event.clientX,
      startScroll: track.scrollLeft,
      moved: false,
    };
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
    if (drag.current.moved) track.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (track?.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
    drag.current.active = false;
    setDragging(false);
  };

  // A drag that ends on top of a card must not also follow that card's link.
  const onClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!drag.current.moved) return;
    event.preventDefault();
    event.stopPropagation();
    drag.current.moved = false;
  };

  const controls = arrows === "none" ? null : (
    <RailArrows
      atStart={atStart}
      atEnd={atEnd}
      onPrev={() => step(-1)}
      onNext={() => step(1)}
      variant={arrows}
    />
  );

  return (
    <div className="relative">
      {arrows === "top" || heading ? (
        <div className="mb-6 flex items-end justify-between gap-6">
          <div className="min-w-0">{heading}</div>
          {arrows === "top" ? controls : null}
        </div>
      ) : null}

      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        className={`rail ${dragging ? "cursor-grabbing select-none" : "cursor-grab"} ${className}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
      >
        {children}
      </div>

      {arrows === "overlay" ? controls : null}
    </div>
  );
}

function RailArrows({
  atStart,
  atEnd,
  onPrev,
  onNext,
  variant,
}: {
  atStart: boolean;
  atEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
  variant: "top" | "overlay";
}) {
  if (variant === "overlay") {
    return (
      <>
        <ArrowButton
          direction="prev"
          disabled={atStart}
          onClick={onPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 shadow-xl"
        />
        <ArrowButton
          direction="next"
          disabled={atEnd}
          onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 shadow-xl"
        />
      </>
    );
  }

  return (
    <div className="flex shrink-0 gap-3">
      <ArrowButton direction="prev" disabled={atStart} onClick={onPrev} />
      <ArrowButton direction="next" disabled={atEnd} onClick={onNext} />
    </div>
  );
}

export function ArrowButton({
  direction,
  disabled,
  onClick,
  className = "",
}: {
  direction: "prev" | "next";
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-hidden="true"
      tabIndex={-1}
      className={`grid size-arrow place-items-center rounded-arrow border border-border bg-card-alt/70 text-text backdrop-blur-sm transition
        hover:border-pink hover:bg-pink hover:text-white
        disabled:pointer-events-none disabled:opacity-25 ${className}`}
    >
      <ArrowRight className={`h-6 w-6 ${direction === "prev" ? "rotate-180" : ""}`} />
    </button>
  );
}
