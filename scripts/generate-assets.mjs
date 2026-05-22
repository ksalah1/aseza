// Generates placeholder brand assets (icons, logo, OG image) into public/.
// Run with: node scripts/generate-assets.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");

const NAVY = "#0F2A4A";
const GOLD = "#C9A84C";
const WARM = "#FAFAF8";

// Square app icon: navy rounded square with a gold "A" and gold dot.
function iconSvg(size) {
  const r = Math.round(size * 0.18);
  const fontSize = Math.round(size * 0.56);
  const dotR = Math.round(size * 0.06);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${r}" ry="${r}" fill="${NAVY}"/>
  <text x="50%" y="52%" text-anchor="middle" dominant-baseline="central"
    font-family="Arial, Helvetica, sans-serif" font-weight="700"
    font-size="${fontSize}" fill="${WARM}">A</text>
  <circle cx="${size * 0.72}" cy="${size * 0.72}" r="${dotR}" fill="${GOLD}"/>
</svg>`;
}

// 1200×630 Open Graph / Twitter card.
function ogSvg() {
  const w = 1200;
  const h = 630;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${NAVY}"/>
  <rect x="0" y="0" width="${w}" height="10" fill="${GOLD}"/>
  <text x="80" y="300" font-family="Arial, Helvetica, sans-serif" font-weight="800"
    font-size="84" fill="${WARM}">ASEZA<tspan fill="${GOLD}">.</tspan>co</text>
  <text x="82" y="376" font-family="Arial, Helvetica, sans-serif" font-weight="500"
    font-size="33" fill="#C9D6E4">Company Registration in the Aqaba Special Economic Zone</text>
  <text x="82" y="442" font-family="Arial, Helvetica, sans-serif" font-weight="600"
    font-size="33" fill="${GOLD}">تأسيس الشركات في منطقة العقبة الاقتصادية الخاصة</text>
  <circle cx="1080" cy="120" r="180" fill="${GOLD}" opacity="0.12"/>
</svg>`;
}

async function render(svg, file) {
  const out = path.join(PUBLIC, file);
  await sharp(Buffer.from(svg)).png().toFile(out);
  console.log("wrote", file);
}

await render(iconSvg(192), "icon-192.png");
await render(iconSvg(512), "icon-512.png");
await render(iconSvg(512), "logo.png"); // square logo used in JSON-LD
await render(ogSvg(), "og-image.png");
console.log("done");
