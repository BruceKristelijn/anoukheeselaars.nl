import { ref } from 'vue'

// Module-level singleton so App.vue and page components share the same state
const progress = ref(0)
const visible = ref(false)
const color = ref('white')
let timer = null
let fallbackTimer = null
let completed = false

export function useNavLoader() {
  const start = (targetColor) => {
    completed = false
    color.value = targetColor
    visible.value = true
    progress.value = 15
    clearInterval(timer)
    timer = setInterval(() => {
      if (progress.value < 75) progress.value += 2
    }, 80)
  }

  // Called by router.afterEach — pauses at current position and arms a fallback
  const waitForContent = () => {
    clearInterval(timer)
    clearTimeout(fallbackTimer)
    fallbackTimer = setTimeout(complete, 3000)
  }

  // Called by page components once their critical images are loaded
  const complete = () => {
    if (completed) return
    completed = true
    clearTimeout(fallbackTimer)
    progress.value = 100
    setTimeout(() => {
      visible.value = false
      setTimeout(() => { progress.value = 0 }, 300)
    }, 300)
  }

  return { progress, visible, color, start, waitForContent, complete }
}
