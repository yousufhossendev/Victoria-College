/**
 * Decorative concentric-arc backdrop. Placeholder for the exported background
 * icon — it is isolated here so swapping in the real SVG touches one file and
 * no section layout.
 */
export function ArcBackdrop({
  viewBox,
  cx,
  cy,
  radii,
  className = "text-sky/8",
}: {
  viewBox: string;
  cx: number;
  cy: number;
  radii: number[];
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      {radii.map((r) => (
        <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth="1.5" />
      ))}
    </svg>
  );
}
