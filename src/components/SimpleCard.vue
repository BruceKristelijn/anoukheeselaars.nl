<script setup>
import { ref, defineProps } from 'vue'
const { title } = defineProps(['title'])
</script>

<template>
    <div class="text-black bg-white p-10 md:p-15 rounded-xl card m-5 lg:m-0">
        <h3 v-if="title" class="mb-5">{{ title }}</h3>
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    box-shadow: 0px 0px 7.75px 1.72px #00000033;
}
</style>