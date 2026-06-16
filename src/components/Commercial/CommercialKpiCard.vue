<template>
  <div class="csh-metric-card bg-surface-white border border-outline-gray-2 rounded-xl px-4 py-4 flex flex-col gap-4 shrink-0 cursor-pointer relative overflow-hidden">
    <span class="absolute top-0 left-0 right-0 h-[3px]" :class="barClass" />
    <p class="text-[14px] font-medium leading-[1.15] text-ink-gray-8 m-0" style="font-family:var(--font-body)">{{ label }}</p>
    <div class="flex flex-col gap-2">
      <p class="text-[20px] leading-[1.15] text-ink-gray-9 m-0" style="font-family:var(--font-body); font-weight:800;">{{ value }}</p>
      <p class="text-[12px] leading-[1.15] m-0" :class="subClass" style="font-family:var(--font-body)">{{ sub }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  label: string
  value: string
  sub: string
  tone?: 'green' | 'amber' | 'red' | ''
}>(), {
  tone: '',
})

const barClass = computed(() => ({
  green: 'bg-surface-green-3',
  amber: 'bg-surface-amber-2',
  red: 'bg-surface-red-3',
  '': 'bg-surface-blueprint-4',
}[props.tone]))

const subClass = computed(() => ({
  green: 'text-ink-green-3 font-semibold',
  amber: 'text-ink-amber-3 font-semibold',
  red: 'text-ink-red-3 font-semibold',
  '': 'text-ink-gray-6',
}[props.tone]))
</script>

<style scoped>
.csh-metric-card {
  box-shadow: 0px 1px 1.5px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.1);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.csh-metric-card:hover {
  border-color: var(--outline-blueprint-3);
  box-shadow:
    0px 1px 1.5px rgba(0, 0, 0, 0.1),
    0px 1px 1px rgba(0, 0, 0, 0.1),
    0 0 0 2px var(--outline-blueprint-1);
}
</style>
