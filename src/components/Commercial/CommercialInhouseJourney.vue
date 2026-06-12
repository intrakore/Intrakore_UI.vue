<template>
  <div class="flex flex-col gap-6">

    <!-- Hero / header -->
    <div
      class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full"
      style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
    >
      <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:var(--font-display)">Skyline Business Bay</h1>
      <p class="text-[13px] font-semibold text-ink-blueprint-4 m-0 mt-1" style="font-family:var(--font-body)">In-house journey</p>
      <p class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] m-0 mt-1" style="font-family:var(--font-body); font-weight:350;">
        Self-delivery cost tracking — packages executed by your own teams, plus project prelims.
      </p>
      <div class="flex items-center gap-2 text-[12px] text-ink-gray-6 flex-wrap mt-3" style="font-family:var(--font-body)">
        <span>2 in-house packages + prelims</span>
        <span class="text-ink-gray-3">·</span>
        <span>AED 540K spent</span>
        <span class="text-ink-gray-3">·</span>
        <span>of AED 1.52M budget</span>
        <span class="text-ink-gray-3">·</span>
        <span class="text-ink-green-3 font-semibold">on track this cycle</span>
      </div>
    </div>

    <!-- Summary band -->
    <CommercialJourneySummary :items="summaryItems" />

    <!-- Kore banner -->
    <div class="rounded-lg border-l-[3px] border-outline-amber-3 bg-surface-amber-1 px-4 py-3 flex items-start gap-3 text-[12px] text-ink-gray-7" style="font-family:var(--font-body)">
      <span class="text-[16px] text-ink-amber-3 shrink-0">✦</span>
      <span><strong class="text-ink-gray-8">Kore:</strong> Formwork crew running 4% under labour budget. PKG-010 trending favourable — consider redeploying spare capacity to PKG-008 joinery if approved as in-house.</span>
    </div>

    <!-- Package cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <CommercialJourneyCard
        icon="⌂"
        title="PKG-010 · Formwork & falsework"
        meta="AED 220K of 980K · 22%"
        meta-tone="green"
        sub="Formwork Crew · 4% under labour budget this cycle."
        @click="toast.info('PKG-010 — detail page not yet built in this prototype.')"
      />
      <CommercialJourneyCard
        icon="⌂"
        title="PKG-011 · Site supervision & QA/QC"
        meta="AED 320K of 540K · 59%"
        sub="Project Team · continuous through month 18."
        @click="toast.info('PKG-011 — detail page not yet built in this prototype.')"
      />
      <CommercialJourneyCard
        icon="⌂"
        title="Project prelims"
        meta="AED 920K of 2.36M · 39%"
        sub="Site staff, supervision, plant, indirect — 7 of 18 months spent."
        @click="toast.info('Project prelims — detail page not yet built in this prototype.')"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import CommercialJourneySummary, { type JourneySummaryItem } from './CommercialJourneySummary.vue'
import CommercialJourneyCard from './CommercialJourneyCard.vue'
import { toast } from '../Toast'

const summaryItems: JourneySummaryItem[] = [
  { label: 'In-house packages', value: '2', sub: '+ prelims (project-wide)' },
  { label: 'Total budget', value: 'AED 1.52M', sub: 'PKG-010 + PKG-011' },
  { label: 'Spent to date', value: 'AED 540K', sub: '35% drawn' },
  { label: 'Forecast at completion', value: 'AED 1.48M', sub: '−AED 40K vs budget', tone: 'green' },
  { label: 'Prelims (project)', value: 'AED 920K', sub: '7 of 18 months spent' },
]
</script>
