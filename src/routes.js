import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import MaatwerkOnline from './views/MaatwerkOnline.vue'

export const routes = [
  { 
    path: '/',
    component: HomeView, 
    name: "Home",
    meta: {
      backgroundColor: "linear-gradient(123.45deg, #9138BC -4.12%, #5673C5 43.18%, #319EC4 85.66%)",
      activeColor: "#F37A24"
    }
  },
  { path: '/stekplek', 
    component: MaatwerkOnline, 
    name: "Maatwerk Obline",
    meta: {
      backgroundColor: "#166D72",
      activeColor: "#176E73"
    }
  },
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createMemoryHistory(),
    routes,
})
export {
  router
}