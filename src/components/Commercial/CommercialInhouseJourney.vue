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
      <div class="flex gap-2 items-center mt-3 flex-wrap">
      <span class="inline-flex items-center gap-2 bg-surface-blueprint-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-blueprint-4 tracking-[0.24px]" style="font-family:var(--font-body)">
        2 in-house packages + prelims
      </span>
      <span class="inline-flex items-center gap-2 bg-surface-gray-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-gray-8 tracking-[0.24px]" style="font-family:var(--font-body)">
        AED 540K spent · of AED 1.52M budget
      </span>
      <span class="inline-flex items-center gap-2 bg-surface-green-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-green-3 tracking-[0.24px]" style="font-family:var(--font-body)">
        on track this cycle
      </span>
      </div>
     </div>
     <!-- Summary band -->
    <CommercialJourneySummary :items="summaryItems" />  
  

    <!-- Kore banner -->
    <div class="rounded-lg  border-outline-amber-3 bg-surface-amber-1 px-4 py-3 flex items-start gap-3 text-[12px] text-ink-gray-7" style="font-family:var(--font-body)">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="shrink-0 mt-0.5 text-ink-amber-3">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
      </svg>
      <span><strong class="text-ink-gray-8">Kore:</strong> Formwork crew running 4% under labour budget. PKG-010 trending favourable — consider redeploying spare capacity to PKG-008 joinery if approved as in-house.</span>
    </div>

    <!-- Package cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <CommercialJourneyCard
        title="PKG-010 · Formwork & falsework"
        meta="AED 220K of 980K · 22%"
        meta-tone="green"
        sub="Formwork Crew · 4% under labour budget this cycle."
        @click="toast.info('PKG-010 — detail page not yet built in this prototype.')"
      >
        <template #icon>
          <div class="size-[38px] rounded-[10px] flex items-center justify-center shrink-0 bg-surface-blueprint-2 text-ink-blueprint-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21V13.6C9 13.0399 9 12.7599 9.10899 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75992 12 10.0399 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z"/>
            </svg>
          </div>
        </template>
      </CommercialJourneyCard>

      <CommercialJourneyCard
        title="PKG-011 · Site supervision & QA/QC"
        meta="AED 320K of 540K · 59%"
        sub="Project Team · continuous through month 18."
        @click="toast.info('PKG-011 — detail page not yet built in this prototype.')"
      >
        <template #icon>
          <div class="size-[38px] rounded-[10px] flex items-center justify-center shrink-0 bg-surface-blueprint-2 text-ink-blueprint-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21V13.6C9 13.0399 9 12.7599 9.10899 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75992 12 10.0399 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z"/>
            </svg>
          </div>
        </template>
      </CommercialJourneyCard>

      <CommercialJourneyCard
        title="Project prelims"
        meta="AED 920K of 2.36M · 39%"
        sub="Site staff, supervision, plant, indirect — 7 of 18 months spent."
        @click="toast.info('Project prelims — detail page not yet built in this prototype.')"
      >
        <template #icon>
          <div class="size-[38px] rounded-[10px] flex items-center justify-center shrink-0 bg-surface-blueprint-2 text-ink-blueprint-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21V13.6C9 13.0399 9 12.7599 9.10899 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75992 12 10.0399 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z"/>
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
import { toast } from '../Toast'

const summaryItems: JourneySummaryItem[] = [
  { label: 'In-house packages', value: '2', sub: '+ prelims (project-wide)' },
  { label: 'Total budget', value: 'AED 1.52M', sub: 'PKG-010 + PKG-011' },
  { label: 'Spent to date', value: 'AED 540K', sub: '35% drawn' },
  { label: 'Forecast at completion', value: 'AED 1.48M', sub: '−AED 40K vs budget', tone: 'green' },
  { label: 'Prelims (project)', value: 'AED 920K', sub: '7 of 18 months spent' },
]
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
