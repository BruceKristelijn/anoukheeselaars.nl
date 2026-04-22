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
    sm: base.width(400).auto('format').url(),
    md: base.width(800).auto('format').url(),
    lg: base.width(1200).auto('format').url(),
    xl: base.width(1800).auto('format').url(),
  }
}
