import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Arrow } from "@/components/ui/ActionLink";
import { GridRules } from "@/components/layout/GridRules";
import { Media } from "@/components/ui/Media";
import { hero, heroLabels, heroTiles } from "@/data/site";

export function Hero() {
  return (
    <section className="relative border-b border-border/50 bg-base">
      <Container>
        <div className="relative">
          <GridRules columns={false} />

          {/* fr, not %, so the columns account for the gap instead of overflowing. */}
          <div className="relative grid items-center gap-14 py-16 lg:grid-cols-[47fr_53fr] lg:gap-8 lg:py-24">
            <div className="px-0 lg:pr-10">
              <h1 className="text-page-title uppercase text-white sm:text-display lg:text-hero">
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
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <HeroCollage />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroCollage() {
  return (
    <div className="relative w-full lg:-mr-10 lg:w-[calc(100%+2.5rem)]" style={{ aspectRatio: "705 / 664" }}>
      {heroTiles.map((tile) => (
        <Media
          key={tile.id}
          alt={tile.alt}
          seed={tile.id}
          priority
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="absolute border border-white/10"
          style={{ left: tile.left, top: tile.top, width: tile.width, height: tile.height }}
        />
      ))}

      {heroLabels.map((label) => (
        <span
          key={label.text}
          className={`absolute whitespace-nowrap px-4 py-2 text-default font-bold uppercase tracking-[0.02em] shadow-lg sm:px-5 sm:py-2.5 sm:text-lead ${label.tone}`}
          style={{
            left: label.left,
            top: label.top,
            transform: `translate(-50%, -50%) rotate(${label.rotate}deg)`,
          }}
        >
          {label.text}
        </span>
      ))}
    </div>
  );
}
