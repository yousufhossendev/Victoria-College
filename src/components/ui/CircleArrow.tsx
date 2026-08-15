const TONES = {
  navy: "bg-navy hover:brightness-150",
  magenta: "bg-magenta hover:brightness-115",
} as const;

/**
 * The round carousel control used by the campus and testimonial sections.
 *
 * Note on size: the token frame lists 57px against "circular arrows", but that
 * table is radii — 57px is what makes these fully round, not their diameter.
 * Diameter is measured off the section frames (~64px) and lives on
 * `--spacing-arrow` so both call sites stay in step.
 */
export function CircleArrow({
  direction,
  tone = "navy",
  onClick,
  label,
  className = "",
}: {
  direction: "prev" | "next";
  tone?: keyof typeof TONES;
  onClick: () => void;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`grid size-arrow shrink-0 place-items-center rounded-arrow text-white transition-all ${TONES[tone]} ${className}`}
    >
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        className={`h-5 w-5 ${direction === "prev" ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </button>
  );
}
