import { Media } from "@/components/ui/Media";
import { Rail } from "@/components/ui/Rail";

interface GalleryStripProps {
  items: readonly { src?: string; caption: string }[];
  ariaLabel: string;
  heading?: React.ReactNode;
}

/** Draggable image strip used on the courses page and the course detail page. */
export function GalleryStrip({ items, ariaLabel, heading }: GalleryStripProps) {
  return (
    <Rail ariaLabel={ariaLabel} heading={heading} className="gap-4 pb-2">
      {items.map((item, index) => (
        <figure
          key={item.caption}
          className={`shrink-0 snap-start ${
            index % 3 === 0 ? "w-76 sm:w-112" : "w-60 sm:w-84"
          }`}
        >
          <Media
            src={item.src}
            alt={item.caption}
            seed={item.caption}
            sizes="(min-width: 640px) 28rem, 19rem"
            className="aspect-4/3 w-full rounded-card"
          />
          <figcaption className="mt-3 text-meta text-sky">{item.caption}</figcaption>
        </figure>
      ))}
    </Rail>
  );
}
