"use client";

import { useId, useState } from "react";
import {
  admissionGroups,
  admissionsSection,
  type AdmissionBlock,
  type AdmissionSection,
} from "@/data/admissions";
import type { Course } from "@/lib/types";

/** Points the active rail item into the panel, as the design draws it. */
const ACTIVE_TAB_SHAPE = {
  clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)",
};

export function CourseAdmissions({ course }: { course: Course }) {
  const baseId = useId();
  const [groupId, setGroupId] = useState(admissionGroups[0].id);
  const [openTitle, setOpenTitle] = useState(admissionGroups[0].sections[0].title);

  const group = admissionGroups.find((item) => item.id === groupId) ?? admissionGroups[0];

  const selectGroup = (id: string) => {
    const next = admissionGroups.find((item) => item.id === id);
    setGroupId(id);
    setOpenTitle(next?.sections[0].title ?? "");
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-card-title sm:text-subheading">{admissionsSection.heading}</h2>
        <p className="mt-3 text-default text-pale-blue/70">{admissionsSection.subheading}</p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[309fr_951fr]">
        <div role="tablist" aria-label="Admissions topics" className="flex flex-col">
          {admissionGroups.map((item) => {
            const selected = item.id === group.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectGroup(item.id)}
                style={selected ? ACTIVE_TAB_SHAPE : undefined}
                className={`px-5 py-4 text-left text-default transition-colors ${
                  selected
                    ? "accent-gradient text-white"
                    : "border-l border-border text-pale-blue/80 hover:text-white"
                }`}
              >
                <span aria-hidden="true" className={selected ? "" : "text-pale-blue/45"}>
                  /{" "}
                </span>
                {item.label}
              </button>
            );
          })}
        </div>

        <div id={`${baseId}-panel`} role="tabpanel" className="min-w-0">
          {group.sections.map((section, index) => (
            <SectionRow
              key={section.title}
              section={section}
              // Course-specific requirements belong with the course, so they are
              // injected into the first section rather than duplicated per course.
              extraItems={index === 0 && group.id === "entry-requirements" ? course.entryRequirements : undefined}
              open={section.title === openTitle}
              onToggle={() => setOpenTitle(section.title === openTitle ? "" : section.title)}
              baseId={baseId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionRow({
  section,
  extraItems,
  open,
  onToggle,
  baseId,
}: {
  section: AdmissionSection;
  extraItems?: string[];
  open: boolean;
  onToggle: () => void;
  baseId: string;
}) {
  const panelId = `${baseId}-${section.title.replace(/\W+/g, "-")}`;

  return (
    <div className="border-b border-border/50">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-body font-semibold text-white transition-colors hover:text-pink"
        >
          {section.title}
          <PlusMinus open={open} />
        </button>
      </h3>

      <div
        id={panelId}
        inert={!open ? true : undefined}
        className={`grid transition-[grid-template-rows] duration-300 ease-out-soft ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-4 bg-white/4 px-6 py-6 text-meta text-pale-blue/70">
            {extraItems ? <Block block={{ type: "list", items: extraItems }} /> : null}
            {section.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ block }: { block: AdmissionBlock }) {
  if (block.type === "list") {
    return (
      <ul className="ml-4 list-disc space-y-3 marker:text-pink">
        {block.items.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "lead") {
    return <p className="text-default font-semibold text-white">{block.text}</p>;
  }

  return <p>{block.text}</p>;
}

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative grid h-4 w-4 shrink-0 place-items-center">
      <span className="absolute h-px w-4 bg-current" />
      <span
        className={`absolute h-4 w-px bg-current transition-transform duration-300 ${
          open ? "scale-y-0" : ""
        }`}
      />
    </span>
  );
}
