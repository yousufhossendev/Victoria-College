"use client";

import { useId, useState, type ReactNode } from "react";

export interface AccordionItem {
  id: string;
  title: string;
  meta?: string;
  content: ReactNode;
}

/**
 * Disclosure list. `allowMultiple` keeps every open panel open (right for a
 * curriculum you are scanning); the default closes the others (right for FAQs).
 */
export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenId,
}: {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenId?: string;
}) {
  const baseId = useId();
  const [open, setOpen] = useState<string[]>(defaultOpenId ? [defaultOpenId] : []);

  const toggle = (id: string) =>
    setOpen((current) => {
      const isOpen = current.includes(id);
      if (allowMultiple) {
        return isOpen ? current.filter((value) => value !== id) : [...current, id];
      }
      return isOpen ? [] : [id];
    });

  return (
    <div className="divide-y divide-border/50 border-y border-border/50">
      {items.map((item) => {
        const isOpen = open.includes(item.id);
        const panelId = `${baseId}-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-pink"
              >
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="text-body font-semibold">{item.title}</span>
                  {item.meta ? <span className="text-meta text-sky">{item.meta}</span> : null}
                </span>
                <span
                  aria-hidden="true"
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-arrow border border-border transition-all duration-300 ${
                    isOpen ? "accent-gradient rotate-180 border-transparent text-white" : "text-sky"
                  }`}
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M4 6.5 8 10.5l4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </h3>

            {/* Animated with grid-template-rows so the panel can size to its
                content; `inert` keeps a closed panel out of the tab order. */}
            <div
              id={panelId}
              role="region"
              inert={!isOpen ? true : undefined}
              className={`grid transition-[grid-template-rows] duration-300 ease-out-soft ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="pb-7 pr-4 text-body text-pale-blue/70 sm:pr-12">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
