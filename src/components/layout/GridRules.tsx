/**
 * The design rules the page into four equal columns with hairline dividers,
 * with the outer two running down past the header into the hero. They are
 * decorative, so they sit behind the content and out of the a11y tree.
 */
export function GridRules({ columns = true }: { columns?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 grid grid-cols-1 border-x border-border/50 lg:grid-cols-4"
    >
      {columns
        ? Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="hidden border-r border-border/50 last:border-r-0 lg:block" />
          ))
        : null}
    </div>
  );
}
