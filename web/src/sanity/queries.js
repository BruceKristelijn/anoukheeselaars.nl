import { client } from './client.js'

// Resolves whichever bg field the editor chose into a single CSS string
const BG_COLOR_PROJECTION = `"bgColor": select(
  bgType == "gradient" => bgColorGradient,
  bgColorSolid.hex
)`

// Lightweight — used for nav links and route colour lookup.
// Only includes projects with showInNav == true, ordered by drag-and-drop rank.
const NAV_QUERY = `*[_type == "project" && showInNav == true] | order(orderRank asc) {
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
    rounded,
    "images": images[] { "_ref": asset._ref, hotspot, crop, caption },
    videos[] {
      title,
      description,
      "videoUrl": video.asset->url,
      "posterUrl": poster.asset->url
    },
    beforeLabel,
    "beforeImages": beforeImages[] { "_ref": asset._ref, hotspot, crop },
    afterLabel,
    "afterImages": afterImages[] { "_ref": asset._ref, hotspot, crop },
    cards[] {
      title,
      body,
      "_ref": image.asset._ref,
      "imageHotspot": image.hotspot,
      "imageCrop": image.crop,
      sectionName,
      observation,
      recommendations
    },
    methodsLabel,
    methods,
    // textSection
    body
  }
}`

// Home page singleton — hero, featured projects, contact info
const HOME_QUERY = `*[_type == "homePage"][0] {
  heroGreeting,
  heroName,
  heroImage,
  introParagraph,
  workSectionHeading,
  "featuredProjects": featuredProjects[] -> {
    "slug": slug.current,
    workType,
    "cardImageUrl": cardImage.asset->url,
    "logoUrl": logo.asset->url
  },
  contactSectionHeading,
  displayPhoneNumber,
  contactPhone,
  displayEmail,
  contactEmail
}`

export const fetchNavItems = () => client.fetch(NAV_QUERY)
export const fetchProject = (slug) => client.fetch(PROJECT_QUERY, { slug })
export const fetchHome = () => client.fetch(HOME_QUERY)
