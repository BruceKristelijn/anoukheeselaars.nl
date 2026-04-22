import { createWebHistory, createRouter } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProjectView from './views/ProjectView.vue'
import { navItems } from './stores/navItems.js'

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'Home',
    meta: {
      backgroundColor: "linear-gradient(123.45deg, #9138BC -4.12%, #5673C5 43.18%, #319EC4 85.66%)",
      activeLinkColor: "#F37A24"
    }
  },
  {
    path: '/:slug',
    component: ProjectView,
    name: 'Project',
    meta: {} // colours are injected per-navigation in beforeEach below
  }
]

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

// Inject per-project colours from the nav store into route meta before each navigation
router.beforeEach((to) => {
  if (to.params.slug) {
    const project = navItems.value.find(p => p.slug === to.params.slug)
    if (project) {
      to.meta.backgroundColor = project.bgColor
      to.meta.activeLinkColor = project.activeLinkColor
    }
  }
})

export { router }
