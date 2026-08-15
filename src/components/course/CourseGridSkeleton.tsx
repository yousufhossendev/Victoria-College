/**
 * Loading state (not in the designs — see README).
 *
 * The decision: mirror the asymmetric grid exactly rather than show a spinner
 * or a generic row of boxes. The layout is distinctive enough that reserving
 * its real shape tells you what is arriving, and it removes the shift when it
 * does. Kept in step with the slot spans in CourseGrid.
 */
const SPANS = [
  "lg:col-start-1 lg:row-span-2",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-3 lg:row-span-2",
];

export function CourseGridSkeleton() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="grid grid-cols-1 gap-6 lg:auto-rows-86.5 lg:grid-cols-[416fr_408fr_408fr] lg:grid-rows-2"
    >
      <span className="sr-only">Loading courses…</span>
      {SPANS.map((span) => (
        <div key={span} aria-hidden="true" className={`skeleton min-h-88 rounded-card ${span}`} />
      ))}
    </div>
  );
}
