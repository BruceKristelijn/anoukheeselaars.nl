<script setup>
import SimpleCard from '../SimpleCard.vue'

defineProps(['section'])

function paragraphs(text) {
  if (!text) return []
  return text.split(/\r?\n\r?\n/).map(p => p.trim()).filter(Boolean)
}
</script>

<template>
  <SimpleCard :title="section.title">
    <div class="flex flex-col gap-4">
      <p v-for="(para, i) in paragraphs(section.body)" :key="i" class="text-sm opacity-80 leading-relaxed">
        {{ para }}
      </p>
    </div>
  </SimpleCard>
</template>
