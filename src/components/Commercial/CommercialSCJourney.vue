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
      <div class="flex items-center gap-2 text-[12px] text-ink-gray-6 flex-wrap mt-3" style="font-family:var(--font-body)">
        <span>7 active subcontracts</span>
        <span class="text-ink-gray-3">·</span>
        <span>AED 18.7M committed</span>
        <span class="text-ink-gray-3">·</span>
        <span>AED 8.6M certified to date</span>
        <span class="text-ink-gray-3">·</span>
        <span class="text-ink-amber-3 font-semibold">2 claims awaiting QS review</span>
        <span class="text-ink-gray-3">·</span>
        <span class="text-ink-amber-3 font-semibold">2 tenders close this week</span>
      </div>
    </div>

    <!-- Summary band -->
    <CommercialJourneySummary :items="summaryItems" />

    <!-- Kore banner -->
    <div class="rounded-lg border-l-[3px] border-outline-amber-3 bg-surface-amber-1 px-4 py-3 flex items-start gap-3 text-[12px] text-ink-gray-7" style="font-family:var(--font-body)">
      <span class="text-[16px] text-ink-amber-3 shrink-0">✦</span>
      <span><strong class="text-ink-gray-8">Kore:</strong> Multitech MEP IPA-MEP-04 (AED 1.42M claim) tracking 14% above planned curve. Review on priority — likely overclaim on cable tray installation.</span>
    </div>

    <!-- Sub-journey cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CommercialJourneyCard
        icon="⊞"
        title="Subcontracts"
        meta="7 awarded · 5 active · 2 in tender"
        sub="Manage active subcontracts, contracts, mobilisation status."
        @click="openSubcontracts"
      />
      <CommercialJourneyCard
        icon="⌖"
        title="Tenders in progress"
        meta="2 closing this week"
        meta-tone="amber"
        sub="PKG-005 Façade glazing · PKG-006 Façade aluminium — bids returning, comparison ready."
        @click="openTenders"
      />
      <CommercialJourneyCard
        icon="↓"
        title="Valuations"
        meta="5 claims this cycle · 2 awaiting QS"
        meta-tone="amber"
        sub="April cycle: AED 4.03M claimed. Review SC claims, certify, route for CM/PD approval."
        @click="showScreen('scvaluations')"
      />
      <CommercialJourneyCard
        icon="⟲"
        title="SC variations"
        meta="4 approved · 1 under review"
        sub="Variations to subcontracted scope — pricing, routing, approval tracking."
        @click="toast.info('SC variations — not yet built in this prototype.')"
      />
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
