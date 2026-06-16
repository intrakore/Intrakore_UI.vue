<template>
  <div
    class="ik-card rounded-xl border border-outline-gray-2 bg-surface-gray-1 flex items-start gap-4 px-5 py-4 cursor-pointer transition-colors hover:border-outline-blueprint-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
    tabindex="0"
    @click="emit('click')"
    @keydown.enter="emit('click')"
  >
    <slot name="icon">
  <div class="size-10 rounded-xl bg-surface-blueprint-1 text-ink-blueprint-4 flex items-center justify-center text-[20px] shrink-0">{{ icon }}</div>
  </slot>
    <div class="flex-1 min-w-0">
      <p class="text-[14px] font-bold text-ink-gray-8 m-0 mb-2" style="font-family:var(--font-body)">{{ title }}</p>
      <p
        class="text-[12px] m-0 mb-0.5"
        :class="metaTone === 'amber' ? 'text-ink-amber-3 font-medium' : metaTone === 'green' ? 'text-ink-green-3 font-semibold' : 'text-ink-gray-6'"
        style="font-family:var(--font-body)"
      >{{ meta }}</p>
      <p class="text-[14px] text-ink-gray-6 leading-[1.2] m-0" style="font-family:var(--font-body)">{{ sub }}</p>
    </div>
    <div class="text-[18px] text-ink-gray-7 shrink-0">→</div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  icon?: string
  title: string
  meta: string
  metaTone?: 'green' | 'amber' | ''
  sub: string
}>(), {
  icon: '',
  metaTone: '',
})

const emit = defineEmits<{
  (e: 'click'): void
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
  background-color: var(--surface-gray-1);
  border-color: var(--outline-gray-2);
}
</style>
