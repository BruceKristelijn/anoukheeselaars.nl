<script setup>
import SimpleCard from '../SimpleCard.vue'

defineProps(['section'])

function paragraphs(text) {
  if (!text) return []
  return text.split(/\r?\n/).map(l => l.trim()).filter(Boolean)
}
</script>

<template>
  <SimpleCard :title="section.title">
    <p v-if="section.body" class="mb-6 opacity-80 text-sm">{{ section.body }}</p>
    <div class="flex flex-col gap-10">
      <div
        v-for="video in section.videos"
        :key="video.videoUrl"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        <div class="lg:pr-10">
          <video
            :src="video.videoUrl"
            :poster="video.posterUrl || undefined"
            autoplay
            loop
            muted
            playsinline
            class="rounded-xl shadow w-full"
          />
        </div>
        <div class="flex flex-col justify-center mt-6 lg:mt-0">
          <p v-if="video.title" class="text-[17px] mb-2">
            <strong>{{ video.title }}</strong>
          </p>
          <p
            v-for="(line, i) in paragraphs(video.description)"
            :key="i"
            class="mb-3 text-sm opacity-80"
          >
            {{ line }}
          </p>
        </div>
      </div>
    </div>
  </SimpleCard>
</template>

<style scoped>
.shadow {
  box-shadow: 0px 3.45px 3.45px 0px #0000000D;
}
</style>
