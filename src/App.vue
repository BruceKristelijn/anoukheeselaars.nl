<script setup>
import { routes } from './routes.js'
import { useRoute } from 'vue-router'
import { watch, ref } from "vue";

const route = useRoute();

const defaultBackgroundColor = "white";
const backgroundColor = ref(defaultBackgroundColor)

watch(
  () => route.meta.backgroundColor,
  (newColor) => {
    const oldBg = document.documentElement.style.getPropertyValue('--body-bg');
    document.documentElement.style.setProperty('--body-bg-old', oldBg);

    if (newColor) {
      document.documentElement.style.background = newColor;
      document.documentElement.style.setProperty('--body-bg', newColor);
    } else {
      document.documentElement.style.background = defaultBackgroundColor;
      document.documentElement.style.setProperty('--body-bg', defaultBackgroundColor);
    }
  },
  {
    immediate: true
  }
);

watch(
  () => route.meta.activeColor,
  (newColor) => {
    if (newColor) {
      document.documentElement.style.setProperty('--active-url', newColor);
    } else {
    }
  },
  {
    immediate: true
  }
);

</script>

<template>
  <nav class="w-full p-5 mt-10 items-center bg-white flex content-center justify-around">
    <RouterLink v-for="route in routes" :to="route.path">{{ route.name }}</RouterLink>
  </nav>
  <main class="container mx-auto max-w-[1100px] text-white">
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  position: relative;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 17px;
  line-height: 100%;
  z-index: 99;
  height: 71.5px;
}

nav a {
  transition: all 0.2s ease-out;
}

.active {
  color: var(--active-url);
  font-weight: 700;
}
</style>