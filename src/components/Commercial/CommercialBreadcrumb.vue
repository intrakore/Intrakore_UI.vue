<template>
  <nav class="flex items-center gap-2 text-[12px] text-ink-gray-5 flex-wrap px-1" style="font-family:var(--font-body)">
    <template v-for="(seg, i) in segments" :key="i">
      <button
        v-if="seg.screen"
        type="button"
        class="hover:text-ink-blueprint-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 rounded"
        @click="showScreen(seg.screen)"
      >{{ seg.label }}</button>
      <span v-else class="text-ink-gray-8 font-medium">{{ seg.label }}</span>
      <span v-if="i < segments.length - 1" class="text-ink-gray-3">›</span>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { currentScreen, showScreen, breadcrumbFor } from './commercialNav'

const segments = computed(() => breadcrumbFor(currentScreen.value))
</script>
