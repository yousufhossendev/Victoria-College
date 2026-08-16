import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GridRules } from "@/components/layout/GridRules";
import { LogoMark } from "@/components/layout/Logo";
import { accreditations, footerNav, footerSection, site, socials } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#020928]">
      {/* Supplied arc backdrop. Decorative, and the 12% opacity is baked into
          the asset, so it is dropped in as-is rather than re-drawn. */}
      <Image
        src="/icons/footer-bg.svg"
        alt=""
        aria-hidden="true"
        width={509}
        height={599}
        unoptimized
        className="pointer-events-none absolute right-0 top-0 w-127.25 max-w-[60%] select-none"
      />

      <Container>
        <div className="relative">
          <GridRules />

          <div className="relative pt-14 lg:pt-20">
            <LogoMark className="h-25 w-25" />

            <h2 className="mt-10 max-w-225 text-subheading sm:text-section lg:text-page-title">
              {footerSection.headline.map((part) => (
                <span key={part.text} className={part.highlight ? "text-magenta" : undefined}>
                  {part.text}
                </span>
              ))}
            </h2>
          </div>

          <div className="relative mt-14 grid gap-12 border-t border-[#384584] py-12 lg:grid-cols-2">
            <div>
              <ul className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block rounded-arrow transition-opacity hover:opacity-75"
                    >
                      <Image
                        src={social.icon}
                        alt={social.label}
                        width={40}
                        height={40}
                        unoptimized
                        className="h-10 w-10"
                      />
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
                  <li key={item.id}>
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={item.width}
                      height={item.height}
                      unoptimized
                      className="h-14 w-auto"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-3 border-t border-[#384584] py-7 text-meta text-pale-blue/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.fullName}.
          </p>
          <p>{footerSection.rights}</p>
        </div>
      </Container>
    </footer>
  );
}
