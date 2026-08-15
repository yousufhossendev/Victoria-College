import Link from "next/link";
import { ActionLink } from "@/components/ui/ActionLink";
import { schools } from "@/data/courses";

/**
 * Empty state (not in the designs — see README).
 *
 * The decision: never leave the page as a dead end. Distinguish "your filter
 * matched nothing" from "there is no catalogue right now", and in the first
 * case give the visitor a way back — clear the filter, or jump straight to a
 * school. Prospective students bounce; a blank panel is a lost application.
 */
export function CoursesEmpty({
  query,
  schoolName,
}: {
  query?: string;
  schoolName?: string;
}) {
  const filtered = Boolean(query || schoolName);

  return (
    <div className="rounded-card border border-dashed border-border bg-card/40 px-6 py-16 text-center sm:px-12 sm:py-20">
      <div className="mx-auto max-w-xl">
        <span className="eyebrow text-pink">
          {filtered ? "No matches" : "Nothing published yet"}
        </span>

        <h2 className="mt-4 text-subheading">
          {filtered ? "No courses match that search" : "Our course list is being updated"}
        </h2>

        <p className="mt-5 text-body text-pale-blue/70">
          {filtered ? (
            <>
              Nothing in{" "}
              {schoolName ? <strong className="font-semibold text-text">{schoolName}</strong> : "the catalogue"}
              {query ? (
                <>
                  {" "}
                  matches <strong className="font-semibold text-text">“{query}”</strong>
                </>
              ) : null}
              . Try a broader search, or browse a different school.
            </>
          ) : (
            <>
              The full prospectus is being refreshed for the next intake. Admissions can talk you
              through every programme in the meantime — we answer within one working day.
            </>
          )}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {filtered ? (
            <ActionLink href="/courses" variant="primary">
              Clear filters
            </ActionLink>
          ) : null}
          <ActionLink href="/#contact" variant="secondary">
            Talk to admissions
          </ActionLink>
        </div>

        {filtered ? (
          <div className="mt-10 border-t border-border/60 pt-8">
            <p className="eyebrow text-sky">Browse by school</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {schools.map((school) => (
                <li key={school.id}>
                  <Link
                    href={`/courses?school=${school.id}`}
                    className="inline-flex rounded-pill border border-border px-4 py-2 text-default text-pale-blue/80 transition-colors hover:border-pink hover:text-text"
                  >
                    {school.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
