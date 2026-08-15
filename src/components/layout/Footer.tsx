import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArcBackdrop } from "@/components/ui/ArcBackdrop";
import { GridRules } from "@/components/layout/GridRules";
import { Monogram } from "@/components/layout/Logo";
import { SocialIcon } from "@/components/layout/SocialIcon";
import { accreditations, footerNav, footerSection, site, socials } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border/50 bg-base">
      <ArcBackdrop viewBox="0 0 1440 860" cx={1290} cy={240} radii={[130, 200, 270, 340]} />

      <Container>
        <div className="relative">
          <GridRules />

          <div className="relative pt-14 lg:pt-20">
            <Monogram className="h-16 w-20" />

            <h2 className="mt-10 max-w-225 text-subheading sm:text-section lg:text-page-title">
              {footerSection.headline.map((part) => (
                <span key={part.text} className={part.highlight ? "text-magenta" : undefined}>
                  {part.text}
                </span>
              ))}
            </h2>
          </div>

          <div className="relative mt-14 grid gap-12 border-t border-border/50 py-12 lg:grid-cols-2">
            <div>
              <ul className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={social.label}
                      className="grid h-9 w-9 place-items-center rounded-arrow border border-border text-white transition-colors hover:border-pink hover:bg-pink"
                    >
                      <SocialIcon id={social.id} className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>

              <nav aria-label="Footer" className="mt-10">
                <ul className="flex max-w-145 flex-wrap gap-x-14 gap-y-5">
                  {footerNav.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-default uppercase tracking-[0.04em] text-pale-blue/85 transition-colors hover:text-pink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* w-fit so the phone and badges start on the same left edge as the
                email, while the block as a whole stays flush right. */}
            <div className="lg:ml-auto lg:w-fit">
              <a
                href={`mailto:${site.email}`}
                className="block text-card-title text-white transition-colors hover:text-cyan sm:text-subheading"
              >
                {site.email}
              </a>

              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-3 block text-body text-pale-blue/70 transition-colors hover:text-cyan"
              >
                {site.phone}
              </a>

              <ul className="mt-8 flex flex-wrap items-center gap-3">
                {accreditations.map((item) => (
                  <li
                    key={item.id}
                    title={item.name}
                    className="grid h-11 place-items-center rounded-chip bg-white px-3 text-micro font-bold uppercase tracking-[0.06em] text-deep"
                  >
                    <span className="sr-only">{item.name}</span>
                    <span aria-hidden="true">{item.short}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-3 border-t border-border/50 py-7 text-meta text-pale-blue/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.fullName}.
          </p>
          <p>{footerSection.rights}</p>
        </div>
      </Container>
    </footer>
  );
}
