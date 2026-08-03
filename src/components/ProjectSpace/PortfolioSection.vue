<template>
  <section class="mb-8">
    <!-- Zone header -->
    <div class="flex items-center justify-between mb-1.5 gap-3 flex-wrap">
      <div class="flex items-center gap-2.5">
        <div class="w-[3px] h-[18px] bg-ink-blueprint-4 rounded-sm shrink-0"></div>
        <span class="text-[13px] font-bold uppercase tracking-[0.08em] text-ink-blueprint-4" style="font-family:var(--font-body)">Portfolio</span>
        <span class="inline-flex items-center gap-2 bg-surface-blueprint-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-blueprint-4 tracking-[0.24px]">
          Showing critical · {{ projects.length }} of {{ allProjectCount }}
        </span>
      </div>
      <button
        class="bg-transparent border-none text-ink-blueprint-4 text-[12.5px] font-semibold cursor-pointer hover:underline hover:text-ink-blueprint-3 transition-colors focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
        style="font-family:var(--font-body)"
        @click="$emit('view-all')"
      >
        View all projects →
      </button>
    </div>
    <p class="text-[12px] text-ink-gray-5 mb-3 pl-[13px] m-0" style="font-family:var(--font-body)">
      Projects requiring your attention · red actions surface here · click to open the dashboard
    </p>

    <!-- Grid -->
    <div class="grid gap-4" style="grid-template-columns:repeat(3,1fr)">
      <PortfolioCard
        v-for="p in projects"
        :key="p.key"
        :project="p"
        :snoozed="snoozed"
        @open="$emit('open-project', $event)"
        @snooze="(id, key) => $emit('snooze', id, key)"
      />
    </div>
  </section>
</template>

<script setup>
import PortfolioCard from './PortfolioCard.vue'

defineProps({
  projects: { type: Array, required: true },
  allProjectCount: { type: Number, default: 4 },
  snoozed: { type: Object, default: () => ({}) },
})

defineEmits(['view-all', 'open-project', 'snooze'])
</script>
