<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageWrapper from '../components/PageWrapper.vue'
import SimpleCard from '../components/SimpleCard.vue'
import { fetchProject } from '../sanity/queries.js'
import { responsiveImages, urlFor } from '../sanity/imageUrl.js'

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

// Reload whenever the slug changes (e.g. navigating between projects)
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
    <!-- Sections -->
    <template v-for="section in project.sections" :key="section._key">

      <!-- Image gallery -->
      <SimpleCard v-if="section._type === 'imageGallerySection'" :title="section.title">
        <p v-if="section.body" class="mb-4">{{ section.body }}</p>
        <div
          :class="{
            'grid grid-cols-1': section.layout === 'single',
            'grid grid-cols-2': section.layout === '2col',
            'grid grid-cols-3': section.layout === '3col',
            'grid grid-cols-5': section.layout === '5col',
            'grid grid-cols-2 md:grid-cols-3': section.layout === 'auto' || !section.layout,
          }"
          class="gap-4"
        >
          <figure v-for="img in section.images" :key="img.url">
            <img :src="img.url" :alt="img.caption ?? ''" class="w-full rounded" loading="lazy" />
            <figcaption v-if="img.caption" class="text-xs mt-1 opacity-60 text-center">
              {{ img.caption }}
            </figcaption>
          </figure>
        </div>
      </SimpleCard>

      <!-- Video showcase -->
      <SimpleCard v-else-if="section._type === 'videoShowcaseSection'" :title="section.title">
        <p v-if="section.body" class="mb-4">{{ section.body }}</p>
        <div class="flex flex-col gap-8">
          <div v-for="video in section.videos" :key="video.videoUrl">
            <h3 v-if="video.title" class="font-semibold mb-1">{{ video.title }}</h3>
            <p v-if="video.description" class="mb-3 text-sm opacity-70">{{ video.description }}</p>
            <video
              :src="video.videoUrl"
              :poster="video.posterUrl"
              autoplay loop muted playsinline
              class="w-full rounded"
            />
          </div>
        </div>
      </SimpleCard>

      <!-- Before / after comparison -->
      <SimpleCard v-else-if="section._type === 'comparisonSection'" :title="section.title">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p class="font-semibold mb-2">{{ section.beforeLabel }}</p>
            <img v-for="img in section.beforeImages" :key="img.url" :src="img.url" class="w-full rounded mb-2" loading="lazy" />
          </div>
          <div>
            <p class="font-semibold mb-2">{{ section.afterLabel }}</p>
            <img v-for="img in section.afterImages" :key="img.url" :src="img.url" class="w-full rounded mb-2" loading="lazy" />
          </div>
        </div>
      </SimpleCard>

      <!-- Showcase cards -->
      <SimpleCard v-else-if="section._type === 'showcaseCardSection'" :title="section.title">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="card in section.cards" :key="card.title" class="flex flex-col gap-2">
            <img :src="card.imageUrl" :alt="card.title ?? ''" class="w-full rounded" loading="lazy" />
            <h3 v-if="card.title" class="font-semibold text-sm">{{ card.title }}</h3>
            <p v-if="card.body" class="text-sm opacity-70">{{ card.body }}</p>
          </div>
        </div>
      </SimpleCard>

      <!-- Analysis cards -->
      <SimpleCard v-else-if="section._type === 'analysisCardSection'" :title="section.title">
        <div class="flex flex-col gap-5">
          <div v-for="card in section.cards" :key="card.sectionName" class="border-l-2 border-slate-400 pl-4">
            <h3 class="font-semibold">{{ card.sectionName }}</h3>
            <p v-if="card.observation" class="text-sm mt-1 opacity-80">{{ card.observation }}</p>
            <ul v-if="card.recommendations?.length" class="list-disc list-inside mt-2 text-sm opacity-70">
              <li v-for="rec in card.recommendations" :key="rec">{{ rec }}</li>
            </ul>
          </div>
        </div>
      </SimpleCard>

      <!-- Research / methods -->
      <SimpleCard v-else-if="section._type === 'researchSection'" :title="section.title">
        <p v-if="section.body" class="mb-4">{{ section.body }}</p>
        <p v-if="section.methodsLabel" class="font-semibold mb-2">{{ section.methodsLabel }}</p>
        <div v-if="section.methods?.length" class="grid grid-cols-2 md:grid-cols-3 gap-2">
          <span
            v-for="method in section.methods"
            :key="method"
            class="bg-black/10 rounded px-3 py-1 text-sm text-center"
          >
            {{ method }}
          </span>
        </div>
      </SimpleCard>

    </template>
  </PageWrapper>
</template>
