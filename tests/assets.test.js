import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

function assertMaxBytes (filePath, maxBytes) {
  const size = fs.statSync(filePath).size
  if (size > maxBytes) {
    throw new Error(`${path.basename(filePath)} is ${size} bytes; budget is ${maxBytes}`)
  }
}

// given the optimized image assets
const images = path.join(dirname, '../src/assets/images')

// when we inspect their file sizes
const bioJpg = path.join(images, 'bio.jpg')
const bioWebp = path.join(images, 'bio.webp')
const galaxyJpg = path.join(images, 'galaxy.jpg')
const galaxyWebp = path.join(images, 'galaxy.webp')
const galaxySmallJpg = path.join(images, 'galaxy-1280.jpg')
const galaxySmallWebp = path.join(images, 'galaxy-1280.webp')

// then they stay within the performance budget
assertMaxBytes(bioJpg, 50 * 1024)
assertMaxBytes(bioWebp, 25 * 1024)
assertMaxBytes(galaxyJpg, 200 * 1024)
assertMaxBytes(galaxyWebp, 110 * 1024)
assertMaxBytes(galaxySmallJpg, 100 * 1024)
assertMaxBytes(galaxySmallWebp, 55 * 1024)

console.log('Asset budgets passed')
