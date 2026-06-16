<template>
 <nav v-if="segments.length > 1" class="flex items-center gap-1.5 text-[16px] text-ink-gray-5 overflow-x-auto" style="font-family:var(--font-body)">
    <template v-for="(seg, i) in segments" :key="i">
      <button
        v-if="seg.screen"
        type="button"
        class="hover:text-ink-blueprint-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 rounded"
        @click="showScreen(seg.screen)"
      >{{ seg.label }}</button>
      <span v-else class="text-ink-gray-9 font-medium">{{ seg.label }}</span>
      <span v-if="i < segments.length - 1" class="text-ink-gray-3">›</span>
    </template>
  </nav>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { currentScreen, showScreen, breadcrumbFor } from './commercialNav'
const segments = computed(() => breadcrumbFor(currentScreen.value))
</script>