import { Container } from "@/components/ui/Container";
import { GridRules } from "@/components/layout/GridRules";
import { ArcBackdrop } from "@/components/ui/ArcBackdrop";
import { partners, partnerSection } from "@/data/site";

export function Partners() {
  return (
    <section
      data-section="partners"
      className="relative overflow-hidden border-b border-border/50 bg-base"
    >
      <ArcBackdrop className="text-sky/10" viewBox="0 0 1440 669" cx={1262} cy={310} radii={[120, 200, 280, 360, 440]} />

      <Container>
        <div className="relative">
          <GridRules />

          <div className="relative grid gap-14 py-16 lg:grid-cols-[57%_43%] lg:gap-0 lg:py-40">
            <div>
              <span className="eyebrow text-pink">{partnerSection.eyebrow}</span>
              <h2 className="mt-4 text-subheading sm:text-section">{partnerSection.heading}</h2>
              <p className="mt-10 max-w-183 text-lead text-pale-blue/80">{partnerSection.body}</p>
            </div>

            <ul className="flex flex-col gap-10 lg:pl-24">
              {partners.map((partner) => (
                <li key={partner.id}>
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={partner.name}
                    className="inline-flex items-center gap-5 text-white transition-opacity hover:opacity-75"
                  >
                    <PartnerMark shape={partner.mark} />
                    <span aria-hidden="true">
                      {partner.lines.map((line) => (
                        <span
                          key={line.text}
                          className={`block text-card-title leading-[1.15] ${
                            line.bold ? "font-bold" : "font-normal"
                          }`}
                        >
                          {line.text}
                        </span>
                      ))}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Stand-in marks — replaced by the real logo exports when they land. */
function PartnerMark({ shape }: { shape: "circle" | "arch" }) {
  if (shape === "circle") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 shrink-0">
        <circle cx="24" cy="24" r="23" fill="currentColor" />
        <path d="M10 38 38 10" stroke="var(--color-base)" strokeWidth="3" />
        <circle cx="24" cy="24" r="6" fill="var(--color-sky)" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 52" aria-hidden="true" className="h-13 w-10 shrink-0">
      <path d="M0 0h18a22 22 0 0 1 0 44H0Z" fill="currentColor" />
      <path d="M12 12h6a10 10 0 0 1 0 20h-6Z" fill="var(--color-base)" />
    </svg>
  );
}
