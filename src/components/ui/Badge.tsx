import type { ReactNode } from "react";

type Tone = "accent" | "glass" | "outline" | "cyan" | "chip" | "school";

const TONES: Record<Tone, string> = {
  accent: "accent-gradient text-white rounded-button",
  glass: "bg-base/60 text-pale-blue backdrop-blur-sm rounded-button",
  outline: "border border-border text-pale-blue rounded-button",
  cyan: "bg-cyan/12 text-cyan border border-cyan/30 rounded-button",
  chip: "bg-card-alt text-sky rounded-chip",
  // School / duration chips on the expanded grid card.
  school: "bg-blue text-white rounded-chip uppercase tracking-[0.04em]",
};

export function Badge({
  children,
  tone = "accent",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-micro leading-none ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
