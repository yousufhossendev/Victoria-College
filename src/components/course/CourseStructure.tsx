"use client";

import { useId, useState } from "react";
import type { Course } from "@/lib/types";

/**
 * Year tabs over a module accordion. Years come straight from the course
 * record, so a course with three years renders three tabs and a course with
 * four renders four — nothing here assumes a fixed structure.
 */
export function CourseStructure({ course }: { course: Course }) {
  const baseId = useId();
  const years = course.modules;

  const [yearTerm, setYearTerm] = useState(years[0]?.term);
  const activeYear = years.find((year) => year.term === yearTerm) ?? years[0];
  const [openCode, setOpenCode] = useState<string | undefined>(activeYear?.units[0]?.code);

  const selectYear = (term: string) => {
    const next = years.find((year) => year.term === term);
    setYearTerm(term);
    // Open the first module of the year being switched to, so the panel is
    // never left in a state where nothing is expanded.
    setOpenCode(next?.units[0]?.code);
  };

  if (!activeYear) return null;

  return (
    <div>
      <div className="text-center">
        <h2 className="text-card-title sm:text-subheading">Course Structure &amp; Details</h2>
        <p className="mt-3 text-body text-pale-blue/70">
          Explore the modules for each year and find key admissions information.
        </p>
      </div>

      <div className="relative mt-10">
        <div className="relative z-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Year of study"
            className="flex max-w-full flex-wrap justify-center gap-1 rounded-pill border border-border bg-base p-1.5"
          >
            {years.map((year) => {
              const selected = year.term === activeYear.term;
              return (
                <button
                  key={year.term}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${baseId}-year`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectYear(year.term)}
                  className={`rounded-pill px-6 py-2.5 text-body transition-all ${
                    selected ? "accent-gradient text-white" : "text-white hover:text-pink"
                  }`}
                >
                  <span aria-hidden="true" className={selected ? "" : "text-pale-blue/45"}>
                    /{" "}
                  </span>
                  {year.term}
                </button>
              );
            })}
          </div>
        </div>

        {/* Card is pulled up so the tab group straddles its top edge. */}
        <div
          id={`${baseId}-year`}
          role="tabpanel"
          className="-mt-7 rounded-pill border border-border/60 bg-white/4 px-6 pb-8 pt-16 sm:px-8"
        >
          <p className="text-meta text-pale-blue/60">Modules may include</p>
          {/* Centred over its own two lines, as the frame sets it. */}
          <h3 className="mt-2 max-w-40 text-center text-card-title text-white sm:text-subheading">
            Core Modules
          </h3>

          <ul className="mt-8">
            {activeYear.units.map((unit, index) => {
              const open = unit.code === openCode;
              const panelId = `${baseId}-${unit.code}`;

              // Every row carries its top rule, including the first — that is
              // the line the frame draws under the "Core Modules" header.
              return (
                <li key={unit.code} className="border-t border-border/50">
                  <h4>
                    <button
                      type="button"
                      onClick={() => setOpenCode(open ? undefined : unit.code)}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="group flex w-full items-center gap-12 py-6 text-left"
                    >
                      <span className="shrink-0 text-body text-pale-blue/55">
                        /{String(index + 1).padStart(2, "0")}/
                      </span>

                      <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-body font-semibold text-white">{unit.title}</span>
                        <span className="text-meta text-pale-blue/45">
                          [ {unit.code} • {unit.credits} credits ]
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className={`ml-auto grid h-20 w-20 shrink-0 place-items-center rounded-arrow text-white transition-all duration-300 ${
                          open ? "accent-gradient" : "bg-blue group-hover:brightness-125"
                        }`}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          className={`h-4 w-4 transition-transform duration-300 ${
                            open ? "" : "-rotate-90"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m4 6.5 4 4 4-4" />
                        </svg>
                      </span>
                    </button>
                  </h4>

                  <div
                    id={panelId}
                    inert={!open ? true : undefined}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out-soft ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      {/* pl matches the number column plus its gap, so the copy
                          starts on the same edge as the module title. */}
                      <p className="max-w-4xl pb-7 pl-20 pr-20 text-meta text-pale-blue/65">
                        {unit.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
