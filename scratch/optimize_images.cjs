const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'public', 'images');

async function processImages() {
  const files = fs.readdirSync(imgDir);

  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const filePath = path.join(imgDir, file);
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const webpPath = path.join(imgDir, `${base}.webp`);

      console.log(`Processing: ${file}`);
      const image = sharp(filePath);
      const metadata = await image.metadata();

      // Convert to WebP with high quality (85-88) for max visual fidelity & low size
      await image
        .webp({ quality: 86, effort: 6 })
        .toFile(webpPath);

      const oldSize = fs.statSync(filePath).size;
      const newSize = fs.statSync(webpPath).size;
      console.log(`  -> ${base}.webp (${(oldSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB, -${(100 - (newSize / oldSize) * 100).toFixed(1)}%)`);

      // If JPG, also optimize original JPG in-place
      if (ext === '.jpg') {
        const tempJpg = path.join(imgDir, `${base}_opt.jpg`);
        await sharp(filePath)
          .jpeg({ quality: 85, progressive: true, mozjpeg: true })
          .toFile(tempJpg);
        
        fs.renameSync(tempJpg, filePath);
      }
    }
  }
}

processImages().catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
