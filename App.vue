<script setup>
import { ref } from 'vue'
import Commercial from './src/components/Commercial/index.vue'

const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <div>
    <div class="fixed top-4 right-4 z-50">
      <button
        @click="toggleTheme"
        class="px-3 py-1.5 text-sm rounded border border-outline-gray-3 bg-surface-white text-ink-gray-7"
      >
        {{ isDark ? 'Light mode' : 'Dark mode' }}
      </button>
    </div>
    <Commercial />
  </div>
</template>