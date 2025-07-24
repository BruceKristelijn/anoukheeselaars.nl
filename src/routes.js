import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import SteklekView from './views/StekplekView.vue'

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
    component: SteklekView, 
    name: "Stekplek",
    meta: {
      backgroundColor: "#7D60FF",
      activeColor: "#6047CC"
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