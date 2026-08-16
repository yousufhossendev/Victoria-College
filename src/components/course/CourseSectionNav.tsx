"use client";

import { useEffect, useState } from "react";

export interface CourseSection {
  id: string;
  label: string;
}

/**
 * In-page navigation for the course detail sections. These are real anchors, so
 * every section is linkable and shareable and the page works with JavaScript
 * off. The highlight is a scroll-spy on top of that, not the mechanism.
 */
export function CourseSectionNav({ sections }: { sections: readonly CourseSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    // Band across the middle of the viewport: whichever section occupies it is
    // the one being read.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    for (const element of elements) observer.observe(element);
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="On this page" className="flex justify-center">
      <ul className="flex max-w-full flex-wrap items-center justify-center gap-y-3 rounded-arrow border border-border bg-base px-6 py-5 sm:gap-x-16 sm:px-10 sm:py-7">
        {sections.map((section) => {
          const current = section.id === active;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={current ? "true" : undefined}
                className={`px-3 text-lead transition-colors sm:px-0 ${
                  current ? "text-pink" : "text-white hover:text-pink"
                }`}
              >
                <span aria-hidden="true" className={current ? "text-pink" : "text-pale-blue/45"}>
                  /{" "}
                </span>
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
