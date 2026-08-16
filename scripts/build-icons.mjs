/**
 * Rasterises src/app/icon.svg into the two derived icon files beside it:
 * favicon.ico (16/32/48) and apple-icon.png (180). icon.svg is the source of
 * truth — run `node scripts/build-icons.mjs` after changing it, or the raster
 * copies quietly go stale.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const APP = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "app");
const SVG = readFileSync(join(APP, "icon.svg"), "utf8");

const ICO_SIZES = [16, 32, 48];
const APPLE_SIZE = 180;

/** Raw RGBA bytes of the mark drawn at `size`, straight off a canvas. */
function pixelsAt(page, size) {
  return page.evaluate(async ([svg, edge]) => {
    const image = new Image();
    image.src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    await image.decode();

    const canvas = document.createElement("canvas");
    canvas.width = edge;
    canvas.height = edge;
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, edge, edge);
    return Array.from(context.getImageData(0, 0, edge, edge).data);
  }, [SVG, size]);
}

/**
 * ICO entries are written as BMP/DIB rather than PNG on purpose. Chromium drops
 * the alpha channel whenever every pixel is opaque, and Next's ICO decoder
 * rejects a PNG entry that is not RGBA — which fails the whole build, not just
 * the icon. A DIB carries its alpha by construction.
 */
function encodeDib(size, rgba) {
  const header = Buffer.alloc(40);
  header.writeUInt32LE(40, 0); // biSize
  header.writeInt32LE(size, 4); // biWidth
  header.writeInt32LE(size * 2, 8); // biHeight: colour rows + mask rows
  header.writeUInt16LE(1, 12); // biPlanes
  header.writeUInt16LE(32, 14); // biBitCount
  header.writeUInt32LE(0, 16); // biCompression: BI_RGB

  // Colour rows are bottom-up and BGRA, the reverse of canvas order.
  const colour = Buffer.alloc(size * size * 4);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const from = (y * size + x) * 4;
      const to = ((size - 1 - y) * size + x) * 4;
      colour[to] = rgba[from + 2];
      colour[to + 1] = rgba[from + 1];
      colour[to + 2] = rgba[from];
      colour[to + 3] = rgba[from + 3];
    }
  }

  // 1bpp AND mask, rows padded to 4 bytes. Zeroed: the tile is fully opaque.
  const mask = Buffer.alloc((Math.ceil(size / 32) * 4) * size);
  return Buffer.concat([header, colour, mask]);
}

function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  let offset = header.length + images.length * 16;
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // 0 means 256
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });

  return Buffer.concat([header, ...entries, ...images.map((image) => image.data)]);
}

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });
await page.setContent("<body></body>");

const images = [];
for (const size of ICO_SIZES) {
  images.push({ size, data: encodeDib(size, await pixelsAt(page, size)) });
}
writeFileSync(join(APP, "favicon.ico"), buildIco(images));

await page.setViewportSize({ width: APPLE_SIZE, height: APPLE_SIZE });
await page.setContent(
  `<style>html,body{margin:0;padding:0}svg{display:block;width:${APPLE_SIZE}px;height:${APPLE_SIZE}px}</style>${SVG}`,
);
writeFileSync(
  join(APP, "apple-icon.png"),
  await page.screenshot({ clip: { x: 0, y: 0, width: APPLE_SIZE, height: APPLE_SIZE } }),
);

await browser.close();
console.log("wrote favicon.ico and apple-icon.png");
