import { bgBlue } from "colorette";
import { promises as fsPromises } from "fs";
const { unlink, access, rmdir, mkdir } = fsPromises;

import sharp from "sharp";

async function processImage(imageBase64) {
  return await sharp(Buffer.from(imageBase64, "base64"))
    .rotate()
    .resize({
      width: 375,
      height: 250,
      fit: sharp.fit.cover,
      position: sharp.strategy.attention,
    })
    .normalize()
    .png({ quality: 0 });
}

export async function saveProcessedImage(imageBase64, path) {
  const png = await processImage(imageBase64);
  await png.toFile(path);
}

export async function saveUnprocessedImage(imageBase64, path) {
  await sharp(Buffer.from(imageBase64, "base64")).png().toFile(path);
}

export async function makeDirIfNone(path) {
  try {
    await access(path);
    return false;
  } catch {
    await mkdir(path);
    return true;
  }
}

export async function removeDirIfExists(path) {
  try {
    await access(path);
    await rmdir(path, { recursive: true });
    return true;
  } catch {
    return false;
  }
}
