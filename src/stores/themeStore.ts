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
  }

  return { theme, isDark, toggleTheme }
})

export const useOverFlowStore = defineStore("overflow", () => {
  const overflow = ref("visible");
  const toggleOverflow = ():void => {
    overflow.value = overflow.value === "visible" ? "hidden" : "visible";
    document.getElementsByTagName("body")[0].style.overflow = overflow.value;
  }
  return { overflow, toggleOverflow };
})