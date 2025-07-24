<script setup>
// Page to wrap around the content of a page

import { ref, defineProps } from 'vue'
import SimpleCard from './SimpleCard.vue';

const { color, image, logo, organisation, work, side_description, description } = defineProps(['color', 'image', 'logo', 'organisation', 'work', 'side_description', 'description'])
</script>

<template>
  <div class="page-wrapper">
    <img class="header_img w-[100vw] z-[0]" :src="image">
    <div class="relative flex flex-col gap-10 pt-[30vw] pb-20 z-[10]">
      <SimpleCard title="" class="flex flex-col gap-0">
        <div class="flex flex-row h-[40px] mb-5">
          <img class="h-full mx-auto" :src="logo">
        </div>
        <div class="grid grid-cols-3 justify-between gap-5 mt-7">
          <div class="col-span-1 border-r-1	border-slate-500">
            <p><strong>Bedrijf:</strong> {{ organisation }}</p>
            <p><strong>Werk:</strong> {{ work }}</p>
          </div>
          <div class="col-span-2">
            <p>
              {{ side_description }}
            </p>
          </div>
        </div>
          <p class="mt-10">
            {{ description }}
          </p>
      </SimpleCard>

      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.header_img {
  position: absolute;
  left: 0;
  right: 0;
  min-width: 100vw;
  max-width: 100vw;
  z-index: 0;
}

* {
  font-size: 13px;
}
</style>
