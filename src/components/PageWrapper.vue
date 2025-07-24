<script setup>
// Page to wrap around the content of a page

import { ref, defineProps } from 'vue'

const { color, image } = defineProps(['color', 'image'])
</script>

<template>
  <div class="page-wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
.page-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  min-height: 100vh;
  z-index: 0;
}
</style>
