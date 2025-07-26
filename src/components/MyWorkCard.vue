<script setup>
    import { ref, defineProps } from 'vue'

    const { image, logo, text, route_link } = defineProps({
        image: String,
        logo: String,
        text: String,
        route_link: String
    })
</script>

<template>
    <RouterLink :to="route_link">
        <div class="p-5 bg-white rounded-lg flex flex-col justify-around gap-5 root h-[320px] w-[310px]">
            <img class="rounded-md" :src="image">
            <img class="w-1/8" :src="logo">
            <h4 class="text-black font-bold">{{ text }}</h4>
        </div>
    </RouterLink>
</template>

<style scoped>
    .root {
        box-shadow: 0px 0px 7.3px 1.62px #00000033;
    }
</style>