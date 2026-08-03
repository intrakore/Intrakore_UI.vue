<template>
  <Transition name="snooze-panel">
    <div
      v-if="open"
      class="fixed top-[72px] right-6 w-[370px] z-[9999] rounded-xl border border-outline-gray-2 bg-surface-white"
      style="box-shadow:0px 10px 25px rgba(0,15,206,0.10),0px 4px 10px rgba(0,0,0,0.06)"
      @click.stop
    >
      <!-- Header -->
      <div class="px-[18px] py-[14px] border-b border-outline-gray-2 bg-surface-gray-1 rounded-t-xl">
        <div class="text-[13px] font-bold text-ink-blueprint-4" style="font-family:var(--font-body)">Snoozed actions</div>
        <div class="text-[11px] text-ink-gray-5 mt-0.5" style="font-family:var(--font-body)">Auto-resurface in 24 h or when state changes</div>
      </div>

      <!-- Body -->
      <div class="max-h-[320px] overflow-y-auto py-1">
        <div v-if="!items.length" class="py-6 px-[18px] text-center text-[12px] text-ink-gray-5 italic" style="font-family:var(--font-body)">
          No snoozed actions.
        </div>
        <div
          v-for="([id, s]) in items"
          :key="id"
          class="px-[18px] py-3 border-b border-outline-gray-2 last:border-b-0 grid gap-3 items-center"
          style="grid-template-columns:1fr auto"
        >
          <div>
            <div class="text-[9.5px] uppercase tracking-[0.06em] text-ink-gray-5 font-bold mb-0.5" style="font-family:var(--font-body)">{{ s.projName }}</div>
            <div class="text-[12.5px] text-ink-gray-7 leading-[1.45] mb-0.5" style="font-family:var(--font-body)">{{ s.text }}</div>
            <div class="text-[10.5px] text-ink-gray-5" style="font-family:var(--font-body)">Timer: {{ s.clock }} · resurfaces in 23 h</div>
          </div>
          <button
            class="text-[11px] px-[10px] py-[5px] rounded-md border border-outline-gray-2 text-ink-blueprint-4 bg-transparent cursor-pointer font-semibold hover:bg-surface-blueprint-1 hover:border-outline-blueprint-2 transition-colors focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 whitespace-nowrap"
            style="font-family:var(--font-body)"
            @click="$emit('unsnooze', id)"
          >
            Restore
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  snoozed: { type: Object, default: () => ({}) },
})

defineEmits(['unsnooze'])

const items = computed(() => Object.entries(props.snoozed))
</script>

<style scoped>
.snooze-panel-enter-active,
.snooze-panel-leave-active {
  transition: opacity 0.18s cubic-bezier(0.4,0,0.2,1), transform 0.18s cubic-bezier(0.4,0,0.2,1);
}
.snooze-panel-enter-from,
.snooze-panel-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}

[data-theme='dark'] div {
  background-color: var(--surface-gray-2);
  border-color: var(--outline-gray-3);
}
</style>
