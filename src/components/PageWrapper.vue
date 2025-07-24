<script setup>
// Page to wrap around the content of a page

import { ref, defineProps } from 'vue'

const { color, image } = defineProps(['color', 'image'])
</script>

<template>
  <div class="page-wrapper">
    <img class="w-[100vw] z-[0]" :src="image">
    <div class="relative flex flex-col gap-10 pt-[30vw] pb-20 z-[10]">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
img {
  position: absolute;
    left: 0;
    right: 0;
    min-width: 100vw;
    max-width: 100vw;
    z-index: 0;
}
</style>
