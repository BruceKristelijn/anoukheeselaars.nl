<script setup>
import SimpleCard from '../SimpleCard.vue'
defineProps(['section'])
</script>

<template>
  <SimpleCard :title="section.title">
    <p v-if="section.body" class="mb-4 opacity-80 text-sm">{{ section.body }}</p>
    <div
      class="gap-10 p-5"
      :class="{
        'grid grid-cols-1':                           section.layout === 'single',
        'grid grid-cols-2':                           section.layout === '2col',
        'grid grid-cols-2 md:grid-cols-3':            section.layout === '3col',
        'grid grid-cols-3 md:grid-cols-5':            section.layout === '5col',
        'grid grid-cols-2 md:grid-cols-3':            !section.layout || section.layout === 'auto',
      }"
    >
      <figure v-for="img in section.images" :key="img.url" class="m-0">
        <img
          :src="img.url + '?auto=format&w=800'"
          :alt="img.caption ?? ''"
          class="w-full rounded-md block"
          loading="lazy"
        />
        <figcaption v-if="img.caption" class="text-xs mt-1 opacity-60 text-center">
          {{ img.caption }}
        </figcaption>
      </figure>
    </div>
  </SimpleCard>
</template>
