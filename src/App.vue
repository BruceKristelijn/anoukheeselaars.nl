<script setup>
  import { routes } from './routes.js'
  import { useRoute } from 'vue-router'
  import { watch, ref, onMounted } from "vue";

  const route = useRoute();

  const defaultBackgroundColor = "white";
  const backgroundColor = ref(defaultBackgroundColor)
  const isNavOpen = ref(false)

  watch(
    () => route.meta.backgroundColor,
    (newColor) => {
      const oldBg = getComputedStyle(document.documentElement).getPropertyValue('--body-bg');
      document.documentElement.style.setProperty('--body-bg-old', oldBg);

      if (newColor) {
        document.documentElement.style.setProperty('--body-bg', newColor);
      } else {
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

  watch(
    () => route.name,
    (newName) => {
      document.title = "Anouk Heeselaars | " + newName;
    },
    {
      immediate: true
    }
  );

  const images = ref({})
  const isLoaded = ref(false)

  onMounted(async () => {
    // Preload all images
    const imageModules = import.meta.glob('../assets/**/*.png', { eager: true })

    for (const path in imageModules) {
      const mod = imageModules[path]
      const imageName = path.split('/').pop().replace('.png', '')
      images.value[imageName] = mod.default
    }

    isLoaded.value = true
  })

</script>

<template>

  <div class="navblur w-full fixed">
  </div>

  <nav class="w-full p-5 bg-white fixed">
    <!-- Mobile hamburger button -->
    <div class="md:hidden flex justify-between items-center">
      <div class="font-semibold">{{ route.name }}</div>
      <button @click="isNavOpen = !isNavOpen" class="p-2 rounded-md hover:bg-gray-100 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path :class="{ 'hidden': isNavOpen, 'inline-flex': !isNavOpen }" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path :class="{ 'hidden': !isNavOpen, 'inline-flex': isNavOpen }" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Desktop menu -->
    <div class="hidden md:flex items-center justify-around">
      <RouterLink v-for="route in routes" :key="route.path" :to="route.path"
        class="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
        {{ route.name }}
      </RouterLink>
    </div>

    <!-- Mobile menu -->
    <div :class="{ 'block': isNavOpen, 'hidden': !isNavOpen }"
      class="md:hidden mt-4 space-y-2 bg-white w-full absolute left-0 right-0 mt-[-1px] pt-2">
      <RouterLink v-for="route in routes" :key="route.path" :to="route.path" @click="isNavOpen = false"
        class="block px-4 py-3 rounded-md hover:bg-gray-100 transition-colors">
        {{ route.name }}
      </RouterLink>
    </div>
  </nav>

  <main class="container mx-auto max-w-[1100px] text-white">
    <RouterView v-slot="{ Component }">
      <transition name="fade">
        <Suspense>
          <component :is="Component" :key="route.fullPath" />
        </Suspense>
      </transition>
    </RouterView>
  </main>
</template>

<style scoped>
  nav,
  .navblur {
    position: fixed;
    font-family: 'Poppins';
    top: 20px;
    font-weight: 400;
    font-size: 17px;
    line-height: 100%;
    z-index: 99;
    height: 71.5px;
  }

  .navblur {
    top: 0px;
    backdrop-filter: blur(10px)
  }

  nav a {
    transition: all 0.2s ease-out;
  }

  main {
    margin-top: 90px;
  }

  .active {
    color: var(--active-url);
    font-weight: 700;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>