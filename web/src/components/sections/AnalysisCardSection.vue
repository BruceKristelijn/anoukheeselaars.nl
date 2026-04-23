<script setup>
import SimpleCard from '../SimpleCard.vue'
defineProps(['section'])
</script>

<template>
  <SimpleCard :title="section.title">
    <div class="flex flex-col gap-6">
      <div
        v-for="card in section.cards"
        :key="card.sectionName"
        class="border-l-2 border-slate-300 pl-4"
      >
        <h3 class="font-semibold text-sm">{{ card.sectionName }}</h3>
        <p v-if="card.observation" class="text-sm mt-1 opacity-80">{{ card.observation }}</p>
        <ul v-if="card.recommendations?.length" class="list-disc list-inside mt-2 text-sm opacity-70 space-y-1">
          <li v-for="rec in card.recommendations" :key="rec">{{ rec }}</li>
        </ul>
      </div>
    </div>
  </SimpleCard>
</template>
