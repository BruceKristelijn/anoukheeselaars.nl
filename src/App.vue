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
  <nav>
    <RouterLink v-for="route in routes" :to="route.path">{{ route.name }}</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  position: relative;
  z-index: 99;
}
</style>