<script setup>
import SimpleCard from '../SimpleCard.vue'
defineProps(['section'])
</script>

<template>
  <SimpleCard :title="section.title">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="card in section.cards" :key="card.title ?? card.imageUrl" class="flex flex-col gap-2">
        <img
          v-if="card.imageUrl"
          :src="card.imageUrl + '?auto=format&w=600'"
          :alt="card.title ?? ''"
          class="w-full rounded-md"
          loading="lazy"
        />
        <h3 v-if="card.title" class="font-semibold text-sm">{{ card.title }}</h3>
        <p v-if="card.body" class="text-sm opacity-70">{{ card.body }}</p>
      </div>
    </div>
  </SimpleCard>
</template>
