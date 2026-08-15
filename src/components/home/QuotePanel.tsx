import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { ArcBackdrop } from "@/components/ui/ArcBackdrop";
import { Media } from "@/components/ui/Media";
import { quoteSection } from "@/data/site";

export function QuotePanel() {
  return (
    <section data-section="quote" className="bg-base py-16 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-deep lg:aspect-1280/864">
          <ArcBackdrop viewBox="0 0 1280 864" cx={700} cy={880} radii={[180, 300, 420, 540, 660, 780]} />

          {/* h-full at lg so the panel's aspect-ratio height is what the
              photos' percentage top/height resolve against — without it this
              box collapses to zero and every percentage lands at 0. */}
          <div className="relative px-6 pb-6 pt-12 sm:px-10 lg:h-full lg:p-0">
            <figure className="lg:absolute lg:left-[7.3%] lg:top-[7.2%] lg:w-[53%]">
              <QuoteMark className="h-8 w-11 text-border lg:h-14 lg:w-20" />
              <blockquote className="mt-4 text-subheading text-white sm:text-section lg:text-page-title">
                {quoteSection.parts.map((part) => (
                  <span key={part.text} className={part.highlight ? "text-magenta" : undefined}>
                    {part.text}
                  </span>
                ))}
                <QuoteMark className="ml-2 inline-block h-4 w-6 align-baseline text-border lg:h-7 lg:w-10" />
              </blockquote>
            </figure>

            {/*
              One photo list, two layouts: a simple grid on small screens and the
              overlapping composition at lg. Positions ride in on custom
              properties so only the lg utilities consume them.
            */}
            <div className="mt-10 grid grid-cols-2 gap-4 lg:mt-0 lg:block">
              {quoteSection.photos.map((photo) => (
                <Media
                  key={photo.id}
                  alt={photo.alt}
                  seed={photo.id}
                  sizes="(min-width: 1024px) 32vw, 45vw"
                  style={
                    {
                      "--photo-l": photo.left,
                      "--photo-t": photo.top,
                      "--photo-w": photo.width,
                      "--photo-h": photo.height,
                      "--photo-r": `${photo.rotate}deg`,
                    } as CSSProperties
                  }
                  className="aspect-4/5 w-full rounded-chip border-4 border-white shadow-2xl last:col-span-2 lg:absolute lg:aspect-auto lg:left-[var(--photo-l)] lg:top-[var(--photo-t)] lg:h-[var(--photo-h)] lg:w-[var(--photo-w)] lg:rotate-[var(--photo-r)] lg:last:col-span-1"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 28" aria-hidden="true" className={className} fill="currentColor">
      <path d="M0 28 7 0h11l-5 28H0Zm22 0L29 0h11l-5 28H22Z" />
    </svg>
  );
}
