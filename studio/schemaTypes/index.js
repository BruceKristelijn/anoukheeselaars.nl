// Documents
import { project } from './documents/project.js'
import { homePage } from './documents/homePage.js'

// Section object types
import { imageGallerySection } from './objects/imageGallerySection.js'
import { videoShowcaseSection } from './objects/videoShowcaseSection.js'
import { comparisonSection } from './objects/comparisonSection.js'
import { showcaseCardSection } from './objects/showcaseCardSection.js'
import { analysisCardSection } from './objects/analysisCardSection.js'
import { researchSection } from './objects/researchSection.js'
import { textSection } from './objects/textSection.js'

export const schemaTypes = [
  // Documents
  project,
  homePage,

  // Objects (section types used inside project.sections)
  imageGallerySection,
  videoShowcaseSection,
  comparisonSection,
  showcaseCardSection,
  analysisCardSection,
  researchSection,
  textSection,
]
