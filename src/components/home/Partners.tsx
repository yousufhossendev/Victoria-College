import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GridRules } from "@/components/layout/GridRules";
import { partners, partnerSection } from "@/data/site";

export function Partners() {
  return (
    <section
      data-section="partners"
      className="relative overflow-hidden  bg-[#020928]"
    >
      {/* Supplied arc backdrop. Decorative, and the 10% opacity is baked into
          the asset, so it is dropped in as-is rather than re-drawn. */}
      <Image
        src="/icons/partners-bg.svg"
        alt=""
        aria-hidden="true"
        width={665}
        height={584}
        unoptimized
        className="pointer-events-none absolute right-0 top-1/2 w-166.25 max-w-[70%] -translate-y-1/2 select-none"
      />

      <Container>
        <div className="relative">
          <GridRules />

          <div className="relative grid gap-14 py-16 lg:grid-cols-[57%_43%] lg:gap-0 lg:py-40">
            <div>
              <span className="eyebrow text-pink">{partnerSection.eyebrow}</span>
              <h2 className="mt-4 text-subheading sm:text-section">{partnerSection.heading}</h2>
              <p className="mt-10 max-w-183 text-lead text-pale-blue/80">{partnerSection.body}</p>
            </div>

            {/* Centred against the copy column, which is the taller of the two. */}
            <ul className="flex flex-col items-start gap-10 lg:justify-center lg:pl-24">
              {partners.map((partner) => (
                <li key={partner.id}>
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-block transition-opacity hover:opacity-75"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                      unoptimized
                      className="h-14 w-auto lg:h-21.5"
                    />
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
