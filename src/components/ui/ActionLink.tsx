import Link from "next/link";
import { ArrowRight } from "@/components/ui/ArrowRight";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

const VARIANTS: Record<Variant, string> = {
  primary: "accent-gradient text-white hover:brightness-110",
  secondary: "border border-border text-text hover:border-sky hover:bg-card-alt",
  ghost: "text-pink hover:text-cyan",
  // `text-deep`, never `text-base` — with --color-base defined, `text-base`
  // collides with Tailwind's default 16px font-size utility.
  light: "bg-white text-deep hover:bg-ice-blue",
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
}) {
  const base =
    variant === "ghost"
      ? "inline-flex items-center gap-2 text-default transition-colors"
      : "inline-flex items-center justify-center gap-2 rounded-button px-7 py-3.5 text-default transition-all";

  return (
    <Link href={href} className={`${base} ${VARIANTS[variant]} ${className}`}>
      {children}
      {withArrow ? <ArrowRight className="h-5 w-5" /> : null}
    </Link>
  );
}
