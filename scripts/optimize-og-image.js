// Run: node scripts/optimize-og-image.js
// Requires sharp: npm install sharp --save-dev
/* eslint-disable @typescript-eslint/no-require-imports */

const path = require("path");

let sharp;
try {
  sharp = require("sharp");
} catch {
  console.error(
    "sharp is not installed. Run: npm install sharp --save-dev\n" +
      "Then re-run this script."
  );
  process.exit(1);
}

const input = path.join(__dirname, "../public/og-image.png");
const output = path.join(__dirname, "../public/og-image.webp");

sharp(input)
  .resize(1200, 630)
  .webp({ quality: 85 })
  .toFile(output)
  .then(() => console.log("✓ og-image.webp written to public/"))
  .catch((err) => {
    console.error("Conversion failed:", err.message);
    process.exit(1);
  });
