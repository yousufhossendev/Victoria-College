# VCAD — Victoria College of Arts and Design

Marketing site built from the supplied Figma frames: homepage, course listing, and course detail.

**Stack:** Next.js 16 (App Router, RSC) · React 19 · TypeScript · Tailwind CSS v4

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production build
npm run lint
```

No environment variables are required. One optional knob: `NEXT_PUBLIC_COURSE_LATENCY_MS`
(default `700`) sets the simulated data latency — set it to `0` to remove the loading states.

Routes: `/` · `/courses` · `/courses/[slug]` (9 courses, statically generated).

## How far I got, and what I prioritised

All three designed pages are built and responsive, from a 1440px frame down to mobile. Every
colour, type size and radius in the app resolves through the design tokens in
[globals.css](src/app/globals.css), named verbatim from the token frame so any value can be
traced back to its source.

I prioritised **the data layer first, pixel-chasing second**. Course content lives in
[src/data/courses.ts](src/data/courses.ts) behind an async accessor module,
[src/lib/courses.ts](src/lib/courses.ts), that stands in for a CMS. Nothing renders content
without going through it, so swapping in a real API touches one file and no components. That is
what makes the nine courses real rather than one design duplicated — the year tabs, module
accordions and info grid all derive from the record, so a four-year course renders four tabs.

Interactive behaviour was next: the course section nav, year tabs, module accordion, gallery
carousel and mobile menu all work, with keyboard support and correct ARIA. Then the finish pass —
the arc/gradient backdrops, hover states, and the Suspense loading skeletons.

**Not done:** `faqs` is modelled and populated in the course data but has no UI — the designs had
no FAQ block, and I would rather leave a clean seam than invent a component. Course specification
PDFs are linked by convention (`/downloads/<slug>-specification.pdf`) but the files are not in the
repo. There is no test suite.

## A decision the designs did not specify

**Loading and empty states.** The frames show only the populated, happy path. Since course data
is fetched, both gaps are reachable in practice, so I designed them rather than let the layout
collapse:

- [CourseGridSkeleton](src/components/course/CourseGridSkeleton.tsx) mirrors the real grid's
  asymmetric shape, so the page does not reflow when data lands.
- [CoursesEmpty](src/components/course/CoursesEmpty.tsx) distinguishes "your filter matched
  nothing" from "there is no catalogue right now", and always offers a route onward — clear the
  filter, jump to a school, or contact admissions. A prospective student who hits a dead end
  bounces, and that is a lost application; a blank panel is the one outcome worth designing for
  even when it is not in the file.

Related: `/courses` reads `school` and `q` from the URL although the designs include no filter UI.
The states above are reachable and linkable (`/courses?q=zzz`, `/courses?school=design`), and the
filter UI can be added later without touching the query layer.

## What I would do next

1. **Tests.** Playwright is installed but unused. Smoke coverage first — every route renders, nav
   anchors resolve, accordion and tabs are keyboard-operable — then visual regression against the
   frames.
2. **Real content pipeline.** Replace `src/lib/courses.ts` with a CMS fetch and lift the course
   data into it. The interface is already the boundary; this is the reason it exists.
3. **Images.** Media currently goes through [Media](src/components/ui/Media.tsx), which renders a
   deterministic branded gradient wherever a real export is missing, so the composition holds
   instead of showing a broken image. Swap in the real photography and add `blurDataURL`
   placeholders.
4. **Accessibility and performance audit.** Axe pass, focus-order check on the carousel and mobile
   menu, prefers-reduced-motion for the carousels, plus a Lighthouse run — the hero and quote
   panel PNGs are the obvious weight to attack.
5. **The FAQ section**, and a real forms/admissions flow behind the "Apply" CTAs, which currently
   anchor to the footer.

## Notes on assets

The quote-panel photo collage is a single supplied PNG with the rotations, white frames and
overlaps already baked in on a transparent background — it is placed as one asset rather than
reconstructed from three, which would redo work the export already did. Decorative SVG backdrops
(arcs, gradient washes) are dropped in as supplied, with opacity baked into the asset.
