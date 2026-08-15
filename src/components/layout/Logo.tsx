import Link from "next/link";
import { site } from "@/data/site";

/**
 * Monogram is a stand-in for the real logo asset — the Figma file is view-only
 * for this account, so the mark could not be exported. Geometry and colours are
 * taken from the accent tokens; swap in the SVG export when it is available.
 */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 28" aria-hidden="true" className={className}>
      <path d="M0 0h17L8.5 13Z" fill="var(--color-blue)" />
      <path d="M19 0h17l-8.5 13Z" fill="var(--color-pink)" />
      <path d="M8.5 15 17 28H0Z" fill="var(--color-cyan)" />
      <path d="M27.5 15 36 28H19Z" fill="var(--color-magenta)" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.fullName} home`}>
      <Monogram className="h-7 w-9 shrink-0" />
      <span className="leading-none">
        <span className="block text-default font-bold leading-[1.15] text-white">Victoria</span>
        <span className="block text-default font-bold leading-[1.15] text-white">College</span>
        <span className="mt-0.5 block text-micro text-pale-blue/70">of Arts and Design</span>
      </span>
    </Link>
  );
}
