import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routes'
import { loadNavItems } from './stores/navItems.js'

// Load project slugs + colours before mounting so the router's beforeEach
// guard and the nav links both have data on first render.
await loadNavItems()

createApp(App).use(router).mount('#app')
