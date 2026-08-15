"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

/**
 * Tabs with the keyboard behaviour the WAI-ARIA pattern expects: arrow keys
 * move between tabs, Home/End jump to the ends, and only the active tab is in
 * the tab order.
 */
export function CourseTabs({ tabs }: { tabs: TabItem[] }) {
  const baseId = useId();
  const [active, setActive] = useState(tabs[0]?.id);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const focusTab = (id: string) => {
    setActive(id);
    refs.current[id]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: tabs.length - 1,
    };

    const next = keys[event.key];
    if (next === undefined) return;

    event.preventDefault();
    focusTab(tabs[(next + tabs.length) % tabs.length].id);
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Course information"
        className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-y-3 rounded-button border border-border bg-base px-6 py-5 sm:gap-x-13 sm:px-10 sm:py-7"
      >
        {tabs.map((tab, index) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(node) => {
                refs.current[tab.id] = node;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`px-3 text-body transition-colors sm:px-0 ${
                selected ? "text-pink" : "text-white hover:text-pink"
              }`}
            >
              <span aria-hidden="true" className={selected ? "text-pink" : "text-pale-blue/45"}>
                /{" "}
              </span>
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={tab.id !== active}
          tabIndex={0}
          className="pt-14"
        >
          {tab.id === active ? tab.content : null}
        </div>
      ))}
    </div>
  );
}
