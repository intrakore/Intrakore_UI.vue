<template>
  <div class="flex flex-col gap-6">

    <!-- Hero / header -->
    <div
      class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full"
      style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
    >
      <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:var(--font-display)">Skyline Business Bay</h1>
      <p class="text-[13px] font-semibold text-ink-blueprint-4 m-0 mt-1" style="font-family:var(--font-body)">Subcontractor journey</p>
      <p class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] m-0 mt-1" style="font-family:var(--font-body); font-weight:350;">
        Everything you do with subcontractors — from tender to award, valuations, and variations.
      </p>
      <div class="flex gap-2 items-center mt-3 flex-wrap">
      <span class="inline-flex items-center gap-2 bg-surface-blueprint-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-blueprint-4 tracking-[0.24px]" style="font-family:var(--font-body)">
        7 active subcontracts
      </span>
      <span class="inline-flex items-center gap-2 bg-surface-gray-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-gray-6 tracking-[0.24px]" style="font-family:var(--font-body)">
        AED 18.7M committed | AED 8.6M certified to date
      </span>
      <span class="inline-flex items-center gap-2 bg-surface-amber-1 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-amber-3 tracking-[0.24px]" style="font-family:var(--font-body)">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M5.134 1.93a1 1 0 0 1 1.732 0l4.33 7.5A1 1 0 0 1 10.33 11H1.67a1 1 0 0 1-.866-1.5l4.33-7.5Z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/>
          <line x1="6" y1="5" x2="6" y2="7.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
          <circle cx="6" cy="9.25" r="0.55" fill="currentColor"/>
        </svg>
        2 claims awaiting QS review | 2 tenders close this week
      </span>
    </div>
    </div>

    <!-- Summary band -->
    <CommercialJourneySummary :items="summaryItems" />

    <!-- Kore banner -->
    <div class="rounded-lg border-outline-amber-3 bg-surface-amber-1 px-4 py-3 flex items-start gap-3 text-[12px] text-ink-gray-7" style="font-family:var(--font-body)">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="shrink-0 mt-0.5 text-ink-amber-3">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
      </svg>
      <span><strong class="text-ink-gray-8">Kore:</strong> Multitech MEP IPA-MEP-04 (AED 1.42M claim) tracking 14% above planned curve. Review on priority — likely overclaim on cable tray installation.</span>
    </div>

    <!-- Sub-journey cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CommercialJourneyCard
      title="Subcontracts"
      meta="7 awarded · 5 active · 2 in tender"
      sub="Manage active subcontracts, contracts, mobilisation status."
      @click="openSubcontracts"
    >
      <template #icon>
        <div class="size-10 rounded-xl bg-surface-blueprint-1 text-ink-blueprint-4 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
      </template>
    </CommercialJourneyCard>

    <CommercialJourneyCard
      title="Tenders in progress"
      meta="2 closing this week"
      meta-tone="amber"
      sub="PKG-005 Façade glazing · PKG-006 Façade aluminium — bids returning, comparison ready."
      @click="openTenders"
    >
      <template #icon>
        <div class="size-10 rounded-xl bg-surface-blueprint-1 text-ink-blueprint-4 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </div>
      </template>
    </CommercialJourneyCard>

    <CommercialJourneyCard
      title="Valuations"
      meta="5 claims this cycle · 2 awaiting QS"
      meta-tone="amber"
      sub="April cycle: AED 4.03M claimed. Review SC claims, certify, route for CM/PD approval."
      @click="showScreen('scvaluations')"
    >
      <template #icon>
        <div class="size-10 rounded-xl bg-surface-blueprint-1 text-ink-blueprint-4 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
      </template>
    </CommercialJourneyCard>

    <CommercialJourneyCard
      title="SC variations"
      meta="4 approved · 1 under review"
      sub="Variations to subcontracted scope — pricing, routing, approval tracking."
      @click="toast.inf0('SC variations — not yet built in this prototype.')"
    >
      <template #icon>
        <div class="size-10 rounded-xl bg-surface-blueprint-1 text-ink-blueprint-4 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </div>
      </template>
    </CommercialJourneyCard>
    </div>

  </div>
</template>

<script setup lang="ts">
import CommercialJourneySummary, { type JourneySummaryItem } from './CommercialJourneySummary.vue'
import CommercialJourneyCard from './CommercialJourneyCard.vue'
import { showScreen, a1bTab } from './commercialNav'
import { toast } from '../Toast'

const summaryItems: JourneySummaryItem[] = [
  { label: 'Subcontracts', value: '7', sub: '5 active · 2 in tender' },
  { label: 'Total committed', value: 'AED 18.7M', sub: 'across awarded subcontracts' },
  { label: 'Certified to date', value: 'AED 8.6M', sub: '46% of committed' },
  { label: 'Retention held', value: 'AED 860K', sub: '10% across all SCs' },
  { label: 'Approved SC variations', value: '+ AED 280K', sub: '4 variations across PKG-007' },
]

function openSubcontracts() {
  a1bTab.value = 'all'
  showScreen('a1b')
}

function openTenders() {
  a1bTab.value = 'tender'
  showScreen('a1b')
}
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
.ik-card-row:hover { background-color: var(--surface-blueprint-1); }
[data-theme='dark'] .ik-card-row:hover { background-color: var(--surface-blueprint-2); }
[data-theme='dark'] .ik-hero-card {
  background-image: linear-gradient(
    79.62deg,
    rgba(10, 10, 30, 0.95) 65.76%,
    rgba(0, 15, 204, 0.60) 98.33%
  ) !important;
}
</style>
