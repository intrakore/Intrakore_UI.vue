<template>
  <!-- Card wrapper with light gradient + blueprint border (Figma node 153:685) -->
  <div
    class="ik-csp-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full"
    style="
    border-radius: 24px;
      background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%);
      box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);
    "
  >
    <div class="flex flex-col gap-3 items-start w-full">

      <!-- ── DATE BADGE ── -->
      <div
        class="inline-flex items-center gap-2 bg-surface-blueprint-2 rounded-full px-2 py-[4.5px] text-[13px] text-ink-gray-7 tracking-[0.26px]"
        style="font-family: var(--font-body);"
      >
        <!-- icon/line/calender 12×12 -->
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <rect x="1" y="1.5" width="10" height="9.5" rx="1.5" stroke="currentColor" stroke-width="1.2"/>
          <line x1="1" y1="4.5" x2="11" y2="4.5" stroke="currentColor" stroke-width="1.2"/>
          <line x1="4" y1="0.75" x2="4" y2="2.75" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="8" y1="0.75" x2="8" y2="2.75" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
        <span>{{ formattedDate }}</span>
      </div>

      <!-- ── WELCOME ROW ── -->
      <div class="flex gap-5 items-end w-full">
        <div class="flex flex-col gap-0.5 flex-1 min-w-0">

          <!-- Title -->
          <h1
            class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0"
            style="font-family: var(--font-display);"
          >
            Welcome back, {{ userName }}
          </h1>

          <!-- Subtitle -->
          <p
            class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] h-6 m-0"
            style="font-family: var(--font-body); font-weight: 350;"
          >
            {{ subtitle }}
          </p>

          <!-- Status pills -->
          <div class="flex gap-2 items-center mt-0.5">
            <!-- overdue badge: amber -->
            <span
              v-if="actionCount > 0"
              class="inline-flex items-center gap-2 bg-surface-amber-1 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-amber-3 tracking-[0.24px]"
              style="font-family: var(--font-body);"
            >
              <!-- icon/line/alert-triangle 12×12 -->
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M5.134 1.93a1 1 0 0 1 1.732 0l4.33 7.5A1 1 0 0 1 10.33 11H1.67a1 1 0 0 1-.866-1.5l4.33-7.5Z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/>
                <line x1="6" y1="5" x2="6" y2="7.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
                <circle cx="6" cy="9.25" r="0.55" fill="currentColor"/>
              </svg>
              {{ actionCount }} items need action
            </span>

            <!-- team streak badge: blueprint -->
            <span
              class="inline-flex items-center gap-2 bg-surface-blueprint-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-blueprint-4 tracking-[0.24px]"
              style="font-family: var(--font-body);"
            >
              <!-- icon/line/play 12×12 -->
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3.5 2.5L9.5 6 3.5 9.5V2.5Z" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              </svg>
              {{ activeProjects }} active projects
            </span>
          </div>

        </div>
      </div>

      <!-- ── KPI METRIC GROUP ── -->
      <div class="flex gap-5 items-stretch py-4 w-full overflow-x-auto">

      

        <!-- Card 1: Today's Task -->
        <div
          class="csh-metric-card bg-surface-white border border-outline-gray-2 rounded-xl px-6 py-3 flex flex-col gap-3 shrink-0 w-[267px] cursor-pointer focus-visible:outline-none"
          tabindex="0"
          role="button"
          :aria-label="`Today's Task: ${kpis.tasks.count}`"
        >
          <div class="flex gap-2 h-7 items-center w-full">
            <!-- icon/solid/success-alt 24×24 blueprint -->
            <svg width="24" height="24" viewBox="0 0 24 24" class="text-ink-blueprint-3 shrink-0" fill="currentColor" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 12l3 3 5-5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
            <p
              class="flex-1 min-w-0 text-[16px] font-medium leading-[1.15] text-ink-gray-8 tracking-[0.32px]"
              style="font-family: var(--font-body);"
            >
              Today's Task
            </p>
          </div>
          <div class="flex flex-col gap-2 items-start w-full">
            <p
              class="text-[24px] leading-[1.15] text-ink-gray-9 tracking-[0.12px]"
              style="font-family: var(--font-body); font-weight: 800;"
            >
              {{ kpis.tasks.count }}
            </p>
            <p
              class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] truncate w-full"
              style="font-family: var(--font-body);"
            >
              {{ kpis.tasks.sub }}
            </p>
          </div>
        </div>
        
        <!-- Card 2: Needs Your Action -->
        <div
          class="csh-metric-card bg-surface-white border border-outline-gray-2 rounded-xl px-6 py-3 flex flex-col gap-3 shrink-0 w-[267px] cursor-pointer focus-visible:outline-none"
          tabindex="0"
          role="button"
          :aria-label="`Needs Your Action: ${kpis.action.count}`"
        >
          <div class="flex gap-2 h-7 items-center w-full">
            <!-- icon/solid/alert-triangle 24×24 amber -->
            <svg width="24" height="24" viewBox="0 0 24 24" class="text-ink-amber-3 shrink-0" fill="currentColor" aria-hidden="true">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="12" cy="17" r="0.9" fill="white"/>
            </svg>
            <p
              class="flex-1 min-w-0 text-[16px] font-medium leading-[1.15] text-ink-gray-8 tracking-[0.32px]"
              style="font-family: var(--font-body);"
            >
              Needs Your Action
            </p>
          </div>
          <div class="flex flex-col gap-2 items-start w-full">
            <p
              class="text-[24px] leading-[1.15] text-ink-gray-9 tracking-[0.12px]"
              style="font-family: var(--font-body); font-weight: 800;"
            >
              {{ kpis.action.count }}
            </p>
            <p
              class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] truncate w-full"
              style="font-family: var(--font-body);"
            >
              {{ kpis.action.sub }}
            </p>
          </div>
        </div>

        <!-- Card 3: Your Pipeline -->
        <div
          class="csh-metric-card bg-surface-white border border-outline-gray-2 rounded-xl px-6 py-3 flex flex-col gap-3 shrink-0 w-[267px] cursor-pointer focus-visible:outline-none"
          tabindex="0"
          role="button"
          :aria-label="`Your Pipeline: ${kpis.pipeline.count}`"
        >
          <div class="flex gap-2 h-7 items-center w-full">
            <!-- icon/solid/arrow-up rotated -90deg → arrow-right, dusk/purple -->
            <svg width="24" height="24" viewBox="0 0 24 24" class="text-ink-dusk-2 shrink-0" fill="currentColor" aria-hidden="true" style="transform: rotate(360deg)">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8l4 4-4 4M8 12h8" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
            <p
              class="flex-1 min-w-0 text-[16px] font-medium leading-[1.15] text-ink-gray-8 tracking-[0.32px]"
              style="font-family: var(--font-body);"
            >
              Your Pipeline
            </p>
          </div>
          <div class="flex flex-col gap-2 items-start w-full">
            <p
              class="text-[24px] leading-[1.15] text-ink-gray-9 tracking-[0.12px]"
              style="font-family: var(--font-body); font-weight: 800;"
            >
              {{ kpis.pipeline.count }}
            </p>
            <p
              class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] truncate w-full"
              style="font-family: var(--font-body);"
            >
              {{ kpis.pipeline.sub }}
            </p>
          </div>
        </div>

        <!-- Card 4: Closing Deadlines -->
        <div
          class="csh-metric-card bg-surface-white border border-outline-gray-2 rounded-xl px-6 py-3 flex flex-col gap-3 shrink-0 w-[267px] cursor-pointer focus-visible:outline-none"
          tabindex="0"
          role="button"
          :aria-label="`Closing Deadlines: ${kpis.deadlines.count}`"
        >
          <div class="flex gap-2 items-center w-full">
            <!-- icon wrapped in bg-surface-red-4 circle 24×24 -->
            <div class="bg-surface-red-4 rounded-full size-6 flex items-center justify-center shrink-0">
              <!-- icon/line/overdue (clock) 20×20, white -->
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="text-white" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p
              class="flex-1 min-w-0 text-[16px] font-medium leading-[1.15] text-ink-gray-8 tracking-[0.32px]"
              style="font-family: var(--font-body);"
            >
              Closing Deadlines
            </p>
          </div>
          <div class="flex flex-col gap-2 items-start w-full">
            <p
              class="text-[24px] leading-[1.15] text-ink-gray-9 tracking-[0.12px]"
              style="font-family: var(--font-body); font-weight: 800;"
            >
              {{ kpis.deadlines.count }}
            </p>
            <p
              class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] truncate w-full"
              style="font-family: var(--font-body);"
            >
              {{ kpis.deadlines.sub }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  userName?: string
  subtitle?: string
  actionCount?: number
  activeProjects?: number
  kpis?: {
    action:    { count: number; sub: string }
    tasks:     { count: number; sub: string }
    pipeline:  { count: number; sub: string }
    deadlines: { count: number; sub: string }
  }
}>(), {
  userName: 'Rashid',
  subtitle: 'Everything you need to start your day, in one place.',
  actionCount: 3,
  activeProjects: 4,
  kpis: () => ({
    action:    { count: 3,  sub: '2 Drafts to prepare | 1 Review' },
    tasks:     { count: 7,  sub: 'Across 4 projects' },
    pipeline:  { count: 12, sub: 'Pending with Others' },
    deadlines: { count: 2,  sub: 'IPC-007 draft  | PKG-005 close' },
  }),
})

const formattedDate = computed(() =>
  new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
)
</script>

<style scoped>
/* Metric card shadow + hover/focus states use CSS vars — cannot be expressed
   cleanly in Tailwind without hardcoding the var names as arbitrary values */
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
.csh-metric-card:focus-visible {
  box-shadow: 0 0 0 2px var(--outline-blueprint-2);
  border-color: var(--outline-blueprint-3);
}

/* Dark mode token overrides propagate automatically via CSS vars on [data-theme='dark'] */
[data-theme='dark'] .ik-csp-hero-card {
  background-image: linear-gradient(
    79.62deg,
    rgba(10, 10, 30, 0.95) 65.76%,
    rgba(0, 15, 204, 0.60) 98.33%
  ) !important;
}
</style>
