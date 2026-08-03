<template>
  <div
    class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full"
    style="border-radius:24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
  >
    <div class="flex flex-col gap-3 items-start w-full">

      <!-- Date badge -->
      <div class="inline-flex items-center gap-2 bg-surface-blueprint-2 rounded-full px-2 py-[4.5px] text-[13px] text-ink-gray-7 tracking-[0.26px]" style="font-family:var(--font-body)">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <rect x="1" y="1.5" width="10" height="9.5" rx="1.5" stroke="currentColor" stroke-width="1.2"/>
          <line x1="1" y1="4.5" x2="11" y2="4.5" stroke="currentColor" stroke-width="1.2"/>
          <line x1="4" y1="0.75" x2="4" y2="2.75" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="8" y1="0.75" x2="8" y2="2.75" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
        <span>{{ formattedDate }}</span>
      </div>

      <!-- Title + pills row -->
      <div class="flex items-start justify-between gap-4 w-full">
        <div class="flex flex-col gap-0.5 flex-1 min-w-0">
          <p class="text-[12px] font-medium text-ink-gray-6 tracking-[0.24px] m-0 uppercase" style="font-family:var(--font-body)">
            Project Management Dashboard
          </p>
          <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:var(--font-display)">
            My Space
          </h1>
          <p class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] m-0 mt-1" style="font-family:var(--font-body); font-weight:350;">
            {{ greeting }}
          </p>

          <!-- Status pills -->
          <div class="flex gap-2 items-center mt-2 flex-wrap">
            <span class="inline-flex items-center gap-2 bg-surface-amber-1 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-amber-3 tracking-[0.24px]" style="font-family:var(--font-body)">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M5.134 1.93a1 1 0 0 1 1.732 0l4.33 7.5A1 1 0 0 1 10.33 11H1.67a1 1 0 0 1-.866-1.5l4.33-7.5Z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/>
                <line x1="6" y1="5" x2="6" y2="7.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
                <circle cx="6" cy="9.25" r="0.55" fill="currentColor"/>
              </svg>
              1 critical · 7 actions need attention
            </span>
            <span class="inline-flex items-center gap-2 bg-surface-blueprint-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-blueprint-4 tracking-[0.24px]" style="font-family:var(--font-body)">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3.5 2.5L9.5 6 3.5 9.5V2.5Z" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              </svg>
              {{ allProjectCount }} active projects
            </span>
            <span class="inline-flex items-center gap-2 bg-surface-green-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-green-3 tracking-[0.24px]" style="font-family:var(--font-body)">
              AED 94M runway
            </span>
            <span class="inline-flex items-center gap-2 bg-surface-amber-1 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-amber-3 tracking-[0.24px]" style="font-family:var(--font-body)">
              2 notices expiring
            </span>
          </div>
        </div>

        <!-- Bell button -->
        <button
          class="relative size-[42px] rounded-[10px] border border-outline-gray-2 bg-surface-white flex items-center justify-center cursor-pointer hover:bg-surface-blueprint-1 transition-colors focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 shrink-0 text-ink-gray-6"
          title="Snoozed actions"
          @click.stop="$emit('toggle-snooze')"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span
            v-if="snoozedCount > 0"
            class="absolute -top-1 -right-1 min-w-[16px] h-4 rounded-full bg-surface-amber-1 text-ink-amber-3 text-[9px] font-bold flex items-center justify-center px-1 border border-outline-gray-2"
          >{{ snoozedCount }}</span>
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  allProjectCount: { type: Number, default: 4 },
  snoozedCount: { type: Number, default: 0 },
})

defineEmits(['toggle-snooze', 'open-projects'])

const greeting = computed(() => {
  const now = new Date()
  const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const h = now.getHours()
  const g = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'
  return `${g} — ${DAYS[now.getDay()]}, ${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`
})

const formattedDate = computed(() =>
  new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
)
</script>

<style scoped>
[data-theme='dark'] .ik-hero-card {
  background-image: linear-gradient(79.62deg, rgba(10,10,30,0.95) 65.76%, rgba(0,15,204,0.60) 98.33%) !important;
}
</style>