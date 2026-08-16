import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { QuoteMark } from "@/components/ui/QuoteMark";
import { quoteSection } from "@/data/site";
import { GridRules } from "../layout/GridRules";

export function QuotePanel() {
  return (
    <section data-section="quote" className="bg-base">
      <Container>
        <div className="relative overflow-hidden  py-12  lg:aspect-1280/944 lg:p-0">
         <GridRules columns={true} />
          {/* Supplied backdrop. Decorative, so it stays out of the a11y tree and
              never intercepts pointer events over the photos. */}
          <Image
            src="/icons/QuotePanel-bg.svg"
            alt=""
            aria-hidden="true"
            width={1072}
            height={797}
            unoptimized
            className="pointer-events-none absolute -bottom-[0%] -right-[2%] w-[76%] select-none"
          />

          <figure className="relative z-10 lg:absolute lg:left-[5.9%] lg:top-[8%] lg:w-[56%]">
            <QuoteMark className="h-8 w-11 rotate-180 text-white/20 lg:h-11 lg:w-14" />
            <blockquote className="mt-4 text-subheading text-white sm:text-section lg:text-page-title">
              {quoteSection.parts.map((part) => (
                <span key={part.text} className={part.highlight ? "text-magenta" : undefined}>
                  {part.text}
                </span>
              ))}
              <QuoteMark className="ml-3 inline-block h-5 w-7 align-baseline text-white/20 lg:h-9 lg:w-12" />
            </blockquote>
          </figure>

          {/*
            One asset, not three: the supplied PNG is the whole composition with
            the rotations, white frames and overlaps already baked in, on a
            transparent background. Positioning three separate images would
            re-do work the export has already done — and duplicate it, since
            this file also contains the other two. See README.
          */}
          <Image
            src={quoteSection.photos.src}
            alt={quoteSection.photos.alt}
            width={1313}
            height={805}
            sizes="(min-width: 1024px) 92vw, 100vw"
            className="relative mt-10 h-auto w-full lg:absolute lg:left-[3.8%] lg:top-[9.2%] lg:mt-0 lg:w-[91.9%]"
          />
        </div>
      </Container>
    </section>
  );
}
