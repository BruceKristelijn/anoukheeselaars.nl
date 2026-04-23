<script setup>
  import SimpleCard from '../SimpleCard.vue'
  import { sectionImgAttrs } from '../../sanity/imageUrl.js'
  defineProps(['section'])
</script>

<template>
  <SimpleCard :title="section.title">
    <div class="flex flex-col gap-10">
      <div v-for="card in section.cards" :key="card.title ?? card._ref" class="grid grid-cols-1 md:grid-cols-2">
        <div class="md:pr-20">
          <img v-if="card._ref" v-bind="
              sectionImgAttrs(
                { _ref: card._ref, hotspot: card.imageHotspot, crop: card.imageCrop },
                [400, 800]
              )
            " :alt="card.title ?? ''" class="rounded-xl shadow" loading="lazy" />
        </div>
        <div class="flex flex-col justify-center mt-2 md:mt-0">
          <p v-if="card.title" class="text-[17px] mb-2">
            <strong>{{ card.title }}</strong>
          </p>
          <template v-if="Array.isArray(card.body)">
            <p v-for="(text, i) in card.body" :key="i" class="mb-3">
              {{ text }}
            </p>
          </template>
          <p v-else-if="card.body">
            {{ card.body }}
          </p>
        </div>
      </div>
    </div>
  </SimpleCard>
</template>