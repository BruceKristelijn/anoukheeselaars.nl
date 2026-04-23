<script setup>
import SimpleCard from '../SimpleCard.vue'
defineProps(['section'])
</script>

<template>
  <SimpleCard :title="section.title">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <p v-if="section.beforeLabel" class="font-semibold mb-3">{{ section.beforeLabel }}</p>
        <div class="flex flex-col gap-3">
          <img
            v-for="img in section.beforeImages"
            :key="img.url"
            :src="img.url + '?auto=format&w=800'"
            class="w-full rounded-md"
            loading="lazy"
          />
        </div>
      </div>
      <div>
        <p v-if="section.afterLabel" class="font-semibold mb-3">{{ section.afterLabel }}</p>
        <div class="flex flex-col gap-3">
          <img
            v-for="img in section.afterImages"
            :key="img.url"
            :src="img.url + '?auto=format&w=800'"
            class="w-full rounded-md"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </SimpleCard>
</template>
