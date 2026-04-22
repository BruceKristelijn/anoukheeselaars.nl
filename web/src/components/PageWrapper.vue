<script setup>
  // Page to wrap around the content of a page

  import { ref, watch, computed, onMounted, provide, defineProps } from 'vue'
  import SimpleCard from './SimpleCard.vue';
  import { useNavLoader } from '../composables/useNavLoader'

  const { color, images, logo, organisation, work, side_description, description } = defineProps(['color', 'images', 'logo', 'organisation', 'work', 'side_description', 'description'])

  const { complete } = useNavLoader()

  const headerImgRef = ref(null)
  const logoImgRef = ref(null)
  const headerLoaded = ref(false)
  const logoLoaded = ref(false)

  const allLoaded = computed(() => headerLoaded.value && logoLoaded.value)
  const srcset = computed(() =>
    `${images.sm} 400w, ${images.md} 800w, ${images.lg} 1200w, ${images.xl} 1800w`
  )

  provide('pageReady', allLoaded)

  watch(allLoaded, (loaded) => {
    if (loaded) complete()
  })

  const descriptionLines = computed(() => {
    const raw = Array.isArray(description) ? description : [description]
    return raw
      .flatMap((t) => String(t ?? '').split(/\r?\n/))
      .map((l) => l.trim())
      .filter(Boolean)
  })

  onMounted(() => {
    if (headerImgRef.value?.complete) headerLoaded.value = true
    if (logoImgRef.value?.complete) logoLoaded.value = true
  })
</script>

<template>
  <div class="page-wrapper overflow-x-hidden">
    <img ref="headerImgRef" class="header_img w-[100vw] z-[0]" :srcset="srcset" loading="eager"
      @load="headerLoaded = true"
      sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1800px">
    <div class="relative flex flex-col gap-10 pt-[30vw] pb-20 z-[10] page-content" :class="{ loaded: allLoaded }">
      <SimpleCard title="" class="flex flex-col gap-0">
        <div class="flex flex-row h-[50px] mb-5">
          <img ref="logoImgRef" class="mx-auto h-full" :src="logo" loading="lazy" @load="logoLoaded = true">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 justify-between gap-5 mt-7">
          <div
            class="col-span-2 md:col-span-1 border-r-0 md:border-r-1 border-b-1 md:border-b-0 border-slate-500 pb-3 md:pb-0">
            <p><strong>Bedrijf:</strong> {{ organisation }}</p>
            <p><strong>Werk:</strong> {{ work }}</p>
          </div>
          <div class="col-span-2">
            <p>
              {{ side_description }}
            </p>
          </div>
        </div>
        <p class="mt-10" v-for="(text, i) in descriptionLines" :key="i">
          {{ text }}
        </p>
      </SimpleCard>

      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .header_img {
    position: absolute;
    left: 0;
    right: 0;
    min-width: 100vw;
    max-width: 100vw;
    z-index: 0;
  }

  * {
    font-size: 13px;
  }

  img {
    width: auto;
    height: fit-content;
    max-height: 100%;
  }

  .page-content {
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .page-content.loaded {
    opacity: 1;
  }
</style>