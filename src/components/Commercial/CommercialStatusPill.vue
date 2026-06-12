<template>
  <span
    class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap"
    :class="toneClasses"
    style="font-family:var(--font-body)"
  >
    <span class="size-[7px] rounded-full shrink-0" :class="[dotClasses, { 'csp-pulse': pulse }]" />
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  label: string
  tone?: 'green' | 'amber' | 'red' | 'gray' | 'blueprint'
  dotTone?: 'green' | 'amber' | 'red' | 'gray' | 'blueprint'
  pulse?: boolean
}>(), {
  tone: 'gray',
  pulse: false,
})

const toneClasses = computed(() => ({
  green: 'bg-surface-green-1 text-ink-green-3',
  amber: 'bg-surface-amber-1 text-ink-amber-3',
  red: 'bg-surface-red-1 text-ink-red-3',
  gray: 'bg-surface-gray-2 text-ink-gray-6',
  blueprint: 'bg-surface-blueprint-1 text-ink-blueprint-4',
}[props.tone]))

const dotColorMap = {
  green: 'bg-ink-green-3',
  amber: 'bg-ink-amber-3',
  red: 'bg-ink-red-3',
  gray: 'bg-ink-gray-4',
  blueprint: 'bg-ink-blueprint-3',
}
const dotClasses = computed(() => dotColorMap[props.dotTone ?? props.tone])
</script>

<style scoped>
@keyframes csp-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
.csp-pulse { animation: csp-pulse 2s ease-in-out infinite; }
</style>
