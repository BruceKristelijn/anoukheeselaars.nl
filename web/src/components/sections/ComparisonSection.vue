<script setup>
  import SimpleCard from '../SimpleCard.vue'
  import { sectionImgAttrs } from '../../sanity/imageUrl.js'
  defineProps(['section'])
</script>

<template>
  <div class="grid grid-cols-2 gap-10">
    <SimpleCard :title="section.beforeLabel">
      <div class="flex flex-col gap-3">
        <img v-for="img in section.beforeImages" :key="img._ref" v-bind="sectionImgAttrs(img)" class="w-full rounded-md"
          loading="lazy" />
      </div>
    </SimpleCard>

    <SimpleCard :title="section.afterLabel">
      <div class="flex flex-col gap-10">
        <img v-for="img in section.afterImages" :key="img._ref" v-bind="sectionImgAttrs(img)" class="w-full rounded-md"
          loading="lazy" />
      </div>
    </SimpleCard>
  </div>
</template>