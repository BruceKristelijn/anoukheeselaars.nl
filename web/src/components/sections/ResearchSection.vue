<script setup>
import SimpleCard from '../SimpleCard.vue'
defineProps(['section'])
</script>

<template>
  <SimpleCard :title="section.title">
    <p v-if="section.body" class="mb-5 opacity-80 text-sm">{{ section.body }}</p>
    <template v-if="section.methods?.length">
      <p v-if="section.methodsLabel" class="font-semibold mb-3 text-sm">{{ section.methodsLabel }}</p>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
        <span
          v-for="method in section.methods"
          :key="method"
          class="bg-black/10 rounded-lg px-3 py-2 text-sm text-center"
        >
          {{ method }}
        </span>
      </div>
    </template>
  </SimpleCard>
</template>
