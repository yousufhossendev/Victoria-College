"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { GridRules } from "@/components/layout/GridRules";
import { Logo } from "@/components/layout/Logo";
import { Arrow } from "@/components/ui/ActionLink";
import { courseDetailNav, headerCta, mainNav } from "@/data/site";

interface NavItem {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
}

/** Only an individual course page uses the fuller header. */
const COURSE_DETAIL = /^\/courses\/[^/]+$/;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close everything on navigation. Adjusting state during render rather than
  // in an effect — this is derived from the route, so an effect would only add
  // a second render pass.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    if (!openMenu) return;

    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpenMenu(null);
    const onPointer = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [openMenu]);

  const detail = COURSE_DETAIL.test(pathname);
  const items: readonly NavItem[] = detail ? courseDetailNav : mainNav;

  const isActive = (href: string) =>
    href === "/courses" ? pathname.startsWith("/courses") : pathname === href;

  const linkClass = (href: string) =>
    `flex items-center gap-1.5 text-default uppercase tracking-[0.03em] transition-colors hover:text-pink ${
      isActive(href) ? "text-pink" : "text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-border/50 bg-[#040D3D] backdrop-blur-xl">
      <Container>
        <div className="relative">
          <GridRules />

          <div className="relative flex h-23.5 items-center justify-between gap-6">
            <Logo />

            <nav
              ref={navRef}
              aria-label="Primary"
              className={`ml-auto hidden items-center lg:flex ${detail ? "gap-9" : "gap-12"}`}
            >
              {items.map((item) =>
                item.children && item.children.length > 0 ? (
                  <div key={item.label} className="relative">
                    <button
                      type="button"
                      onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                      aria-expanded={openMenu === item.label}
                      className={linkClass(item.href)}
                    >
                      <Slash />
                      {item.label}
                      <Chevron open={openMenu === item.label} />
                    </button>

                    {openMenu === item.label ? (
                      <ul className="absolute left-0 top-full z-50 mt-3 min-w-56 rounded-chip border border-border bg-deep py-2 shadow-2xl">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-5 py-3 text-default text-pale-blue/85 transition-colors hover:bg-card hover:text-white"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={linkClass(item.href)}
                  >
                    {detail ? <Slash /> : null}
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            {/* The CTA belongs to the course detail treatment only. */}
            {detail ? (
              <Link
                href={headerCta.href}
                className="ml-8 hidden h-14 w-44 shrink-0 items-center justify-between rounded-chip border border-border px-5 text-default text-white transition-colors hover:border-pink hover:bg-card lg:inline-flex"
              >
                {headerCta.label}
                <Arrow />
              </Link>
            ) : null}

            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              aria-expanded={mobileOpen}
              aria-controls="site-menu"
              className={`flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.25 text-white transition-colors hover:text-pink ${
                detail ? "ml-auto lg:hidden" : "ml-auto lg:ml-6"
              }`}
            >
              <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
              <Bar className={mobileOpen ? "translate-y-1.75 rotate-45" : ""} />
              <Bar className={mobileOpen ? "opacity-0" : ""} />
              <Bar className={mobileOpen ? "-translate-y-1.75 -rotate-45" : ""} />
            </button>
          </div>
        </div>
      </Container>

      {mobileOpen ? (
        <div id="site-menu" className="border-t border-border/50 bg-deep">
          <Container>
            <nav aria-label="Site menu" className="flex flex-col py-4">
              {items.map((item) => (
                <div key={item.label} className="border-b border-border/40 last:border-0">
                  <Link
                    href={item.href}
                    className="block py-4 text-lead uppercase tracking-[0.03em] text-white"
                  >
                    {item.label}
                  </Link>
                  {item.children && item.children.length > 0 ? (
                    <ul className="-mt-1 pb-3 pl-4">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block py-2 text-default text-pale-blue/70"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}

              <Link
                href={headerCta.href}
                className="mb-2 mt-6 inline-flex h-14 w-full max-w-80 items-center justify-between rounded-chip border border-border px-5 text-default text-white"
              >
                {headerCta.label}
                <Arrow />
              </Link>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function Slash() {
  return (
    <span aria-hidden="true" className="text-pale-blue/45">
      /
    </span>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 6.5 4 4 4-4" />
    </svg>
  );
}

function Bar({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${className}`}
    />
  );
}
