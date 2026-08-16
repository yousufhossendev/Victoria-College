import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

/**
 * Full lockup — mark plus stacked wordmark — from the supplied asset.
 * `unoptimized` because the image optimizer refuses SVG without
 * `dangerouslyAllowSVG`, and an SVG gains nothing from it anyway.
 */
export function Logo({ className = "h-13 w-auto" }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${site.fullName} home`} className="shrink-0">
      <Image
        src="/icons/logo.svg"
        alt={site.fullName}
        width={134}
        height={50}
        priority
        unoptimized
        className={className}
      />
    </Link>
  );
}

/**
 * Mark only, for the footer. These are the mark's own paths lifted from
 * logo.svg, so it stays identical to the asset — the wordmark is simply not
 * part of the footer treatment.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" aria-hidden="true" className={className}>
      <path d="M49.8603 0.238417H0.54776V49.5861H49.8603V0.238417Z" fill="#061665" />
      <path d="M5.05472 6.47493L15.3053 23.0394L25.5529 6.47493H5.05472Z" fill="#FF379E" />
      <path d="M5.05466 43.1437H25.5529L15.3052 26.5793L5.05466 43.1437Z" fill="#8EC8EE" />
      <path
        d="M36.6616 23.0367H44.9008V6.47227H36.6616C25.8299 6.65797 25.8356 22.851 36.6616 23.0367Z"
        fill="#00FFD2"
      />
      <path
        d="M37.2342 43.3495H28.9951V26.785H37.2342C48.066 26.9707 48.0603 43.1638 37.2342 43.3495Z"
        fill="#E018E0"
      />
    </svg>
  );
}
