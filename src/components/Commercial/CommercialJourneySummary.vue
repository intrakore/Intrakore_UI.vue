<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
    <div v-for="item in items" :key="item.label" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-gray-1 px-4 py-4 text-left">
      <p class="text-[16px] font-medium tracking-[0.02em] text-ink-gray-8 m-0 mb-2" style="font-family:var(--font-body)">{{ item.label }}</p>
      <p class="text-[20px] font-bold text-ink-gray-9 m-0 mb-1" style="font-family:var(--font-body)">{{ item.value }}</p>
      <p
        class="text-[12px] m-0"
        :class="item.tone === 'green' ? 'text-ink-green-3 font-semibold' : item.tone === 'amber' ? 'text-ink-amber-3 font-semibold' : 'text-ink-gray-5'"
        style="font-family:var(--font-body)"
      >{{ item.sub }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface JourneySummaryItem {
  label: string
  value: string
  sub: string
  tone?: 'green' | 'amber' | ''
}

defineProps<{
  items: JourneySummaryItem[]
}>()
</script>

<style scoped>
.ik-card {
  box-shadow:
    0px 0px 0.5px rgba(0, 0, 0, 0.12),
    0px 0.5px 1px rgba(0, 0, 0, 0.15),
    0px 2px 1.5px rgba(0, 0, 0, 0.16);
}
[data-theme='dark'] .ik-card {
  background-color: var(--surface-gray-2);
  border-color: var(--outline-gray-3);
}
</style>
