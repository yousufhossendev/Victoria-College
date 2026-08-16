import Image from "next/image";
import { Container } from "@/components/ui/Container";
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
            <QuoteMark className="h-8 w-11 lg:h-11 lg:w-14  rotate-180 " />
            <blockquote className="mt-4 text-subheading text-white sm:text-section lg:text-page-title">
              {quoteSection.parts.map((part) => (
                <span key={part.text} className={part.highlight ? "text-magenta" : undefined}>
                  {part.text}
                </span>
              ))}
              <QuoteMark className="ml-3 inline-block h-5 w-7 align-baseline lg:h-9 lg:w-12" />
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

/** Path lifted from public/icons/quote.svg; inlined so the opacity is a class. */
function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 67 51"
      aria-hidden="true"
      className={`text-white/20 ${className}`}
      fill="currentColor"
    >
      <path d="M67 0L67 16.1905C67 20.5979 66.0995 25.0278 64.2984 29.4802C62.4973 33.9325 60.2235 38.0476 57.4768 41.8254C54.7302 45.6032 51.961 48.6614 49.1694 51L33.7702 43.1746C36.1116 39.2619 37.9351 35.1693 39.2409 30.8968C40.5017 26.6243 41.1095 21.7222 41.0645 16.1905L41.0645 -2.26735e-06L67 0ZM33.2298 -2.95228e-06L33.2298 16.1905C33.2298 20.5979 32.3293 25.0278 30.5282 29.4802C28.7272 33.9325 26.4533 38.0476 23.7067 41.8254C20.96 45.6032 18.1909 48.6614 15.3992 51L6.84118e-07 43.1746C2.3414 39.2619 4.16499 35.1693 5.47077 30.8968C6.73152 26.6243 7.33938 21.7222 7.29436 16.1905L7.29436 -5.21963e-06L33.2298 -2.95228e-06Z" />
    </svg>
  );
}
