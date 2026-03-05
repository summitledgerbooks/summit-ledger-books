import sharp from 'sharp';
import { mkdirSync } from 'fs';

const src = 'public/images/mtn-logo.png';

async function makeRounded(size, outPath, padding = 0.08) {
  const pad = Math.round(size * padding);
  const inner = size - pad * 2;
  const radius = Math.round(size * 0.18);

  // Trim whitespace from source, then resize to inner size
  const icon = await sharp(src)
    .trim({ background: '#ffffff', threshold: 10 })
    .resize(inner, inner, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toBuffer();

  // Place on white square canvas with padding
  const canvas = await sharp({
    create: { width: size, height: size, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } }
  })
    .composite([{ input: icon, top: pad, left: pad }])
    .png()
    .toBuffer();

  // Apply rounded rectangle mask
  const mask = Buffer.from(
    `<svg><rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}"/></svg>`
  );

  await sharp(canvas)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile(outPath);

  console.log(`Generated ${outPath}`);
}

await makeRounded(16,  'public/images/favicon-16x16.png');
await makeRounded(32,  'public/images/favicon-32x32.png');
await makeRounded(180, 'public/images/apple-touch-icon.png');
await makeRounded(192, 'public/images/android-chrome-192x192.png');
await makeRounded(512, 'public/images/android-chrome-512x512.png');

console.log('Done.');
