<script setup>
    import { ref, onMounted, defineProps } from 'vue'

    const { image, logo, text, route_link } = defineProps({
        image: String,
        logo: String,
        text: String,
        route_link: String
    })

    const imgRef = ref(null)
    const imageLoaded = ref(false)

    onMounted(() => {
        if (imgRef.value?.complete) imageLoaded.value = true
    })
</script>

<template>
    <RouterLink :to="route_link">
        <div class="p-5 bg-white rounded-lg flex flex-col justify-around gap-5 root h-[320px] w-[310px]">
            <div class="relative rounded-md overflow-hidden min-h-[150px]">
                <div v-show="!imageLoaded" class="skeleton absolute inset-0"></div>
                <img
                    ref="imgRef"
                    class="rounded-md block w-full"
                    :class="{ 'opacity-0': !imageLoaded }"
                    :src="image"
                    loading="lazy"
                    @load="imageLoaded = true"
                >
            </div>
            <img class="h-[30px] w-auto object-contain mr-auto" :src="logo" loading="lazy">
            <h4 class="text-black font-bold">{{ text }}</h4>
        </div>
    </RouterLink>
</template>

<style scoped>
    .root {
        box-shadow: 0px 0px 7.3px 1.62px #00000033;
    }

    .skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
        0%   { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }

    img {
        transition: opacity 0.3s ease;
    }
</style>