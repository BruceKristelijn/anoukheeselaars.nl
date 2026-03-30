<script setup>
import { ref, inject, watch, onMounted, onUnmounted, defineProps } from 'vue'
const { title } = defineProps(['title'])

// PageWrapper provides this when its images are loaded; defaults to true for pages without PageWrapper
const pageReady = inject('pageReady', ref(true))

const cardRef = ref(null)
const isVisible = ref(false)
let observer = null

const setupObserver = () => {
    if (!cardRef.value) return
    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true
                observer.disconnect()
            }
        },
        { threshold: 0.08 }
    )
    observer.observe(cardRef.value)
}

onMounted(() => {
    if (pageReady.value) setupObserver()
})

watch(pageReady, (ready) => {
    if (ready) setupObserver()
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
    <div
        ref="cardRef"
        class="text-black bg-white p-10 md:p-15 rounded-xl card m-5 lg:m-0"
        :class="isVisible ? 'card-visible' : 'card-hidden'"
    >
        <h3 v-if="title" class="mb-5">{{ title }}</h3>
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    box-shadow: 0px 0px 7.75px 1.72px #00000033;
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.card-hidden {
    opacity: 0;
    transform: translateY(24px);
}

.card-visible {
    opacity: 1;
    transform: translateY(0);
}
</style>