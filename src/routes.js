import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import Stekplek from './views/Stekplek.vue'
import MaatwerkOnline from './views/MaatwerkOnline.vue'
import NRV from './views/NRV.vue'
import SavannaDevelopments from './views/SavannaDevelopments.vue'
import ZAB from './views/ZAB.vue'
import BooksByAni from './views/BooksByAni.vue'

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
    component: Stekplek, 
    name: "Stekplek",
    meta: {
      backgroundColor: "linear-gradient(180deg, #5E46CA 0%, #7D60FF 100%)",
      activeColor: "#6047CC"
    }
  },
  { path: '/maatwerkonline', 
    component: MaatwerkOnline, 
    name: "Maatwerk Online",
    meta: {
      backgroundColor: "#166D72",
      activeColor: "#176E73"
    }
  },
  { path: '/nrv', 
    component: NRV, 
    name: "NRV",
    meta: {
      backgroundColor: "linear-gradient(180deg, #E34700 0%, #FF5000 100%)",
      activeColor: "#E34800"
    }
  },
  { path: '/savannadevelopments', 
    component: SavannaDevelopments, 
    name: "Savanna Developments",
    meta: {
      backgroundColor: "#B93056",
      activeColor: "#B93056"
    }
  },
  { path: '/zab', 
    component: ZAB, 
    name: "ZAB.",
    meta: {
      backgroundColor: "#872B8E",
      activeColor: "#882C8F"
    }
  },
  { path: '/booksbyani', 
    component: BooksByAni, 
    name: "Books by Ani",
    meta: {
      backgroundColor: "linear-gradient(103.01deg, #8EC9C8 9.39%, #8FCDCC 92.19%)",
      activeColor: "#8ECAC9"
    }
  }
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes,
})
export {
  router
}