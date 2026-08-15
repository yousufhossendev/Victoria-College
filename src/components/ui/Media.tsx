import Image from "next/image";
import type { CSSProperties } from "react";

// Built from the accent tokens so placeholders sit inside the palette.
const GRADIENTS = [
  "linear-gradient(135deg, #061051 0%, #912491 55%, #ff3798 100%)",
  "linear-gradient(140deg, #020928 0%, #2262eb 60%, #00ffd2 100%)",
  "linear-gradient(135deg, #0a1d3d 0%, #061665 50%, #88c9ee 100%)",
  "linear-gradient(150deg, #061051 0%, #e018b0 60%, #e948b6 100%)",
  "linear-gradient(135deg, #0a0a1e 0%, #912491 55%, #2262eb 100%)",
  "linear-gradient(145deg, #061665 0%, #ff3798 55%, #c1f2fd 100%)",
];

function gradientFor(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return GRADIENTS[hash % GRADIENTS.length];
}

interface MediaProps {
  /** Omit to render the branded placeholder. See README on image exports. */
  src?: string;
  alt: string;
  /** Seeds the placeholder gradient so a given subject always looks the same. */
  seed: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Small caption burnt into the placeholder so the layout still reads. */
  label?: string;
  /** For absolutely-positioned collage tiles. */
  style?: CSSProperties;
}

/**
 * Every image in the app goes through this. Where a real export exists it is
 * rendered with next/image; where one does not, a deterministic gradient keeps
 * the composition intact instead of showing a broken image.
 */
export function Media({
  src,
  alt,
  seed,
  className = "",
  sizes = "100vw",
  priority = false,
  label,
  style,
}: MediaProps) {
  // `fill` images need a positioned ancestor, so default to relative — but do
  // not force it. Tailwind emits `.absolute` before `.relative`, so hardcoding
  // `relative` here silently beats an `absolute` passed in by the caller.
  const position = /\b(absolute|fixed|sticky|relative)\b/.test(className) ? "" : "relative";
  const base = `${position} overflow-hidden ${className}`;

  if (src) {
    return (
      <div className={base} style={style}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={base}
      style={{ ...style, backgroundImage: gradientFor(seed) }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
      {label ? (
        <span className="absolute inset-x-4 bottom-4 text-micro uppercase tracking-[0.14em] text-white/70">
          {label}
        </span>
      ) : null}
    </div>
  );
}
