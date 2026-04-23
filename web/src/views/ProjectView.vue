<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageWrapper from '../components/PageWrapper.vue'
import ImageGallerySection from '../components/sections/ImageGallerySection.vue'
import VideoShowcaseSection from '../components/sections/VideoShowcaseSection.vue'
import ComparisonSection from '../components/sections/ComparisonSection.vue'
import ShowcaseCardSection from '../components/sections/ShowcaseCardSection.vue'
import AnalysisCardSection from '../components/sections/AnalysisCardSection.vue'
import ResearchSection from '../components/sections/ResearchSection.vue'
import TextSection from '../components/sections/TextSection.vue'
import { fetchProject } from '../sanity/queries.js'
import { responsiveImages } from '../sanity/imageUrl.js'

const route = useRoute()
const project = ref(null)
const notFound = ref(false)

async function load(slug) {
  project.value = null
  notFound.value = false
  const data = await fetchProject(slug)
  if (!data) {
    notFound.value = true
    return
  }
  project.value = data
}

watch(() => route.params.slug, load, { immediate: true })
</script>

<template>
  <div v-if="notFound" class="pt-40 text-center opacity-60">
    Project not found.
  </div>

  <div v-else-if="!project" class="pt-40 text-center opacity-40">
    Loading…
  </div>

  <PageWrapper
    v-else
    :images="responsiveImages(project.headerImage)"
    :logo="project.logo"
    :organisation="project.organisation"
    :work="project.workType"
    :side_description="project.sideDescription"
    :description="project.description"
  >
    <template v-for="section in project.sections" :key="section._key">
      <ImageGallerySection   v-if="section._type === 'imageGallerySection'"   :section="section" />
      <VideoShowcaseSection  v-else-if="section._type === 'videoShowcaseSection'"  :section="section" />
      <ComparisonSection     v-else-if="section._type === 'comparisonSection'"     :section="section" />
      <ShowcaseCardSection   v-else-if="section._type === 'showcaseCardSection'"   :section="section" />
      <AnalysisCardSection   v-else-if="section._type === 'analysisCardSection'"   :section="section" />
      <ResearchSection       v-else-if="section._type === 'researchSection'"       :section="section" />
      <TextSection           v-else-if="section._type === 'textSection'"           :section="section" />
    </template>
  </PageWrapper>
</template>
