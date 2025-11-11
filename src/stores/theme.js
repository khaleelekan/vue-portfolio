import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)
  
  // Initialize theme from localStorage or system preference
  if (localStorage.getItem('dark-mode')) {
    isDark.value = localStorage.getItem('dark-mode') === 'true'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  // Toggle theme
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }
  
  // Watch for changes and update localStorage and DOM
  watch(isDark, (newVal) => {
    localStorage.setItem('dark-mode', newVal)
    if (newVal) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, { immediate: true })
  
  return { isDark, toggleTheme }
})