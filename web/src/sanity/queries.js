import { client } from './client.js'

// Resolves whichever bg field the editor chose into a single CSS string
const BG_COLOR_PROJECTION = `"bgColor": select(
  bgType == "gradient" => bgColorGradient,
  bgColorSolid.hex
)`

// Lightweight — used for nav links and route colour lookup
const NAV_QUERY = `*[_type == "project"] | order(orderRank asc) {
  "slug": slug.current,
  organisation,
  ${BG_COLOR_PROJECTION},
  "activeLinkColor": activeLinkColor.hex
}`

// Full project — used by ProjectView
const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  organisation,
  "slug": slug.current,
  workType,
  ${BG_COLOR_PROJECTION},
  "activeLinkColor": activeLinkColor.hex,
  "logo": logo.asset->url,
  "headerImage": headerImage { asset->, hotspot, crop },
  sideDescription,
  description,
  sections[] {
    _type,
    title,
    body,
    layout,
    "images": images[] { "url": asset->url, caption },
    videos[] {
      title,
      description,
      "videoUrl": video.asset->url,
      "posterUrl": poster.asset->url
    },
    beforeLabel,
    "beforeImages": beforeImages[] { "url": asset->url },
    afterLabel,
    "afterImages": afterImages[] { "url": asset->url },
    cards[] {
      title,
      body,
      "imageUrl": image.asset->url,
      sectionName,
      observation,
      recommendations
    },
    methodsLabel,
    methods
  }
}`

export const fetchNavItems = () => client.fetch(NAV_QUERY)
export const fetchProject = (slug) => client.fetch(PROJECT_QUERY, { slug })
