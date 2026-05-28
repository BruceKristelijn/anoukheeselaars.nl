import { ref } from 'vue'
import { fetchNavItems } from '../sanity/queries.js'

// Module-level singleton — loaded once in main.js before the app mounts,
// then readable anywhere without Pinia.
export const navItems = ref([])

export async function loadNavItems() {
  navItems.value = await fetchNavItems()
}
