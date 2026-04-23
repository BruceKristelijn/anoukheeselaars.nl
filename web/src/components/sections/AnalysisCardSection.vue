<script setup>
  import SimpleCard from '../SimpleCard.vue'
  defineProps(['section'])
</script>

<template>
  <div class="grid grid-cols-2 gap-10">
    <SimpleCard v-for="card in section.cards" :key="card.sectionName" :title="section.title">
      <div class="border-slate-300 pl-4">
        <h3 class="font-semibold text-sm">{{ card.sectionName }}</h3>
        <p v-if="card.observation" class="text-sm mt-1 opacity-80">
          {{ card.observation }}
        </p>

        <p class="mt-4">
          <b>Aanbevelingen:</b>
        </p>

        <ul class="list-none pl-2 mt-0">
          <li v-for="rec in card.recommendations" class="flex before:content-['·'] before:mr-2 before:shrink-0">
            {{ rec }}
          </li>
        </ul>
      </div>
    </SimpleCard>
  </div>
</template>