import imageUrlBuilder from '@sanity/image-url'
import { client } from './client.js'

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Returns the { sm, md, lg, xl } object PageWrapper expects
export function responsiveImages(source) {
  const base = urlFor(source)
  return {
    sm: base.width(800).auto('format').url(),
    md: base.width(1200).auto('format').url(),
    lg: base.width(1800).auto('format').url(),
    xl: base.width(2400).auto('format').url(),
  }
}

// Converts a GROQ image object { _ref, hotspot, crop } into srcset + src for use in <img>
// widths: array of pixel widths to generate, e.g. [800, 1600]
export function sectionImgAttrs(img, widths = [800, 1200, 1800, 2400]) {
  if (!img?._ref) return { src: '', srcset: '' }
  const source = { asset: { _ref: img._ref }, hotspot: img.hotspot, crop: img.crop }
  const base = urlFor(source)
  const srcset = widths
    .map(w => `${base.width(w).quality(90).auto('format').url()} ${w}w`)
    .join(', ')
  const src = base.width(widths[widths.length - 1]).quality(90).auto('format').url()
  return { src, srcset, sizes: '(max-width: 768px) 100vw, 50vw' }
}
