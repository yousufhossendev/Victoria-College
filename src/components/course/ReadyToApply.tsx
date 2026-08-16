import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/ArrowRight";
import { readyToApply } from "@/data/site";

/**
 * Closing call to action. The two supplied artworks sit flush in the left and
 * right ends of the panel at their own size — each is 340px tall, which is what
 * sets the panel's height, and their shapes deliberately run past the edges, so
 * the panel clips them.
 */
export function ReadyToApply() {
  return (
    <div className="relative overflow-hidden bg-card px-6 py-14 text-center lg:py-22">
      <Image
        src="/icons/ready-to-apply-left-bg.svg"
        alt=""
        aria-hidden="true"
        width={418}
        height={340}
        unoptimized
        className="pointer-events-none absolute left-0 top-0 h-full w-104.5 select-none"
      />
      <Image
        src="/icons/ready-to-apply-right-bg.svg"
        alt=""
        aria-hidden="true"
        width={403}
        height={340}
        unoptimized
        className="pointer-events-none absolute right-0 top-0 h-full w-100.75 select-none"
      />

      <div className="relative">
        <h2 className="text-card-title text-white sm:text-subheading">{readyToApply.heading}</h2>
        <p className="mx-auto mt-4 max-w-190 text-body text-pale-blue/80">
          {readyToApply.body}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <Link
            href={readyToApply.outlineCta.href}
            className="group inline-flex h-14 items-center gap-5 rounded-chip border border-border px-6 text-default text-white transition-colors hover:border-pink hover:text-pink"
          >
            {readyToApply.outlineCta.label}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href={readyToApply.solidCta.href}
            className="group inline-flex h-14 items-center gap-5 rounded-chip bg-plum px-6 text-default text-white transition-colors hover:bg-magenta"
          >
            {readyToApply.solidCta.label}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
