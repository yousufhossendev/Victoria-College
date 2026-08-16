import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/ArrowRight";
import { hero } from "@/data/site";

export function Hero() {
  return (
    <section className="relative  bg-base">
      <Container>
        <div className="relative">
          {/* <GridRules columns={false} /> */}

          {/*
            minmax(0, …) so the tracks are free to shrink: without it the 120px
            heading sets a min-content floor on the text column and squeezes the
            image column well below its designed width.
          */}
          <div className="relative grid items-center gap-14 py-16 lg:grid-cols-[minmax(0,609fr)_minmax(0,671fr)] lg:gap-0 lg:py-24">
            <div className="lg:pr-8">
              <h1 className="text-hero uppercase text-white">
                {hero.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p className="mt-8 max-w-148 text-body text-pale-blue/90">{hero.body}</p>

              <Link
                href={hero.cta.href}
                className="group mt-10 flex h-14 w-full max-w-80 items-center justify-between rounded-chip border border-border px-6 text-default text-white transition-colors hover:border-pink hover:bg-card"
              >
                {hero.cta.label}
                <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <HeroCollage />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Single supplied asset — the photo collage and its discipline labels are baked
 * into the PNG, so this is one image rather than positioned tiles and text.
 * Transparent background, so it sits directly on the section surface.
 */
function HeroCollage() {
  return (
    <Image
      src="/images/home-hero.png"
      alt="Student work across fashion, photography, graphic design, business, media, management and marketing"
      width={710}
      height={680}
      priority
      sizes="(min-width: 1024px) 48vw, 90vw"
      className="h-auto w-full"
    />
  );
}
