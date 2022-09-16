import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(1)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++

  }

  return { count, doubleCount, increment }
})

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('default')
  const isDark = computed(() => theme.value === '')

  const toggleTheme = (color:string):void => {
      theme.value = color;
      console.log("The new theme is: ", theme.value);
  }

  return { theme, isDark, toggleTheme }
})
