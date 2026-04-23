<script setup>
  import SimpleCard from '../SimpleCard.vue'
  import { sectionImgAttrs } from '../../sanity/imageUrl.js'
  defineProps(['section'])
</script>

<template>
  <SimpleCard :title="section.title">
    <p v-if="section.body" class="mb-4 opacity-80 text-sm">{{ section.body }}</p>
    <div class="gap-10 p-5" :class="[
      'gap-10 p-5 grid',
      {
        'grid-cols-1': section.layout === 'single',
        'grid-cols-2': section.layout === '2col',
        'grid-cols-2 md:grid-cols-3': section.layout === '3col' || !section.layout || section.layout === 'auto',
        'grid-cols-3 md:grid-cols-5': section.layout === '5col',
      }
    ]">
      <figure v-for="img in section.images" :key="img._ref" class="m-0">
        <img v-bind="sectionImgAttrs(img, [600, 1000, 1600])" :alt="img.caption ?? ''" class="w-full block"
          :class="{ 'rounded-md': section.rounded === true }" loading="lazy" />
        <figcaption v-if="img.caption" class="text-xs mt-1 opacity-60 text-center">
          {{ img.caption }}
        </figcaption>
      </figure>
    </div>
  </SimpleCard>
</template>