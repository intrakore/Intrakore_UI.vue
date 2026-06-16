<template>
  <div class="flex flex-col gap-4">

    <!-- Hero / header -->
<div
  class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full flex flex-col gap-6"
  style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
>
  <!-- top row: title left + buttons right -->
  <div class="flex items-start justify-between gap-4 flex-wrap">
    <div>
      <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:var(--font-display)">Skyline Business Bay</h1>
      <p class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] m-0 mt-1" style="font-family:var(--font-body); font-weight:350;">
        Project commercial overview — money, work and risk across every workflow on this job.
      </p>
      <div class="flex items-center gap-2 flex-wrap mt-3">
        <span class="px-2.5 py-1 rounded-md bg-surface-gray-2 text-[11px] font-semibold text-ink-gray-7" style="font-family:var(--font-body)">INT-26-014</span>
        <CommercialStatusPill label="Live" tone="green" pulse dot-tone="green" />
        <span class="px-2.5 py-1 rounded-md bg-surface-gray-2 text-[11px] font-semibold text-ink-gray-7" style="font-family:var(--font-body)">Month 7 of 18</span>
        <span class="px-2.5 py-1 rounded-md bg-surface-gray-2 text-[11px] font-semibold text-ink-gray-7" style="font-family:var(--font-body)">38% complete</span>
        <span class="px-2.5 py-1 rounded-md bg-surface-gray-2 text-[11px] font-semibold text-ink-gray-7" style="font-family:var(--font-body)">Pro</span>
        <span class="px-2.5 py-1 rounded-md bg-surface-gray-2 text-[11px] font-semibold text-ink-gray-7" style="font-family:var(--font-body)">Generic contract</span>
      </div>
    </div>
    <div class="flex items-center gap-4 shrink-0">
      <button
        type="button"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-outline-gray-4 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
        style="font-family:var(--font-body)"
        @click="showScreen('a1a')"
      >
        ⊟ Packages
        <span class="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10.5px] font-semibold bg-surface-blueprint-1 text-ink-blueprint-4">7</span>
      </button>
      <button
        type="button"
        class="px-4 py-2 rounded-md border border-outline-gray-4 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
        style="font-family:var(--font-body)"
        @click="toast.info('Reports — not yet built in this prototype.')"
      >Reports</button>
    </div>
  </div>
</div>

  <!-- KPI strip inside hero -->
   <div class="grid grid-cols-6 gap-2">
  <CommercialKpiCard v-for="k in kpis" :key="k.label" :label="k.label" :value="k.value" :sub="k.sub" :tone="k.tone" />
</div>

    <!-- Journeys -->
    <div class=" p-4 flex flex-col gap-3">
    <div class="text-[14px] font-semibold uppercase tracking-[0.04em] text-ink-gray-9" style="font-family:var(--font-body)">Journeys</div>

     <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div
        class="ik-card rounded-md border border-outline-gray-2 bg-surface-gray-1 flex flex-col px-5 py-5 w-full cursor-pointer transition-colors hover:border-outline-blueprint-3"
        @click="showScreen('client-journey')"
      >
        <!-- Header -->
        <div class="flex items-center gap-3">
          <div class="size-[38px] rounded-[10px] flex items-center justify-center shrink-0 bg-surface-blueprint-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 19" fill="none" class="text-ink-blueprint-4">
            <path d="M20.5 18.5V16.5C20.5 14.6362 19.2252 13.0701 17.5 12.626M14 0.790759C15.4659 1.38415 16.5 2.82131 16.5 4.5C16.5 6.17869 15.4659 7.61585 14 8.20924M15.5 18.5C15.5 16.6362 15.5 15.7044 15.1955 14.9693C14.7895 13.9892 14.0108 13.2105 13.0307 12.8045C12.2956 12.5 11.3638 12.5 9.5 12.5H6.5C4.63623 12.5 3.70435 12.5 2.96927 12.8045C1.98915 13.2105 1.21046 13.9892 0.804482 14.9693C0.5 15.7044 0.5 16.6362 0.5 18.5M12 4.5C12 6.70914 10.2091 8.5 8 8.5C5.79086 8.5 4 6.70914 4 4.5C4 2.29086 5.79086 0.5 8 0.5C10.2091 0.5 12 2.29086 12 4.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div>
            <p class="text-[16px] font-semibold text-ink-gray-8 m-0" style="font-family:var(--font-body)">Client</p>
            <p class="text-[12px] text-ink-gray-6 m-0" style="font-family:var(--font-body)">Outbound · Main contract</p>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-outline-gray-2 my-4"></div>

        <!-- Primary value -->
        <div>
          <p class="text-[12px] font-semibold uppercase tracking-[0.07em] text-ink-gray-5 m-0 mb-1" style="font-family:var(--font-body)">Certified to client</p>
          <p class="text-[20px] font-semibold text-ink-gray-9 m-0" style="font-family:var(--font-body)">AED 9.4M</p>
          <p class="text-[12px] text-ink-gray-6 m-0 mt-0.5" style="font-family:var(--font-body)">of AED 30.0M revised contract</p>
        </div>

        <!-- Divider -->
        <div class="border-t border-outline-gray-2 my-4"></div>

        <!-- Action row -->
        <div class="flex items-start gap-2 text-[12px] leading-[1.4] text-ink-amber-3" style="font-family:var(--font-body)">
          <span class="size-[7px] rounded-full bg-surface-amber-2 mt-1 shrink-0" />
          <span>IPC-007 draft due in 4 days · 1 client variation awaiting QS pricing</span>
        </div>

        <!-- Footer -->
        <div class="flex justify-end text-[14px] font-medium text-ink-blueprint-4 mt-6" style="font-family:var(--font-body)">
          Open journey →
        </div>
      </div>

     <div
      class="ik-card rounded-md border border-outline-gray-2 bg-surface-gray-1 flex flex-col px-5 py-5 w-full cursor-pointer transition-colors hover:border-outline-blueprint-3"
      @click="showScreen('sc-journey')"
    >
      <!-- Header -->
      <div class="flex items-center gap-3">
        <div class="size-[38px] rounded-[8px] flex items-center justify-center shrink-0 bg-surface-blueprint-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M10 10V5C10 4.73478 10.1054 4.48043 10.2929 4.29289C10.4804 4.10536 10.7348 4 11 4H13C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5V10M14 6C15.5913 6 17.1174 6.63214 18.2426 7.75736C19.3679 8.88258 20 10.4087 20 12V15M4 15V12C4 10.4087 4.63214 8.88258 5.75736 7.75736C6.88258 6.63214 8.4087 6 10 6M3 15H21C21.5523 15 22 15.4477 22 16V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18V16C2 15.4477 2.44772 15 3 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="text-ink-blueprint-4"/>
          </svg>
        </div>
        <div>
          <p class="text-[15p6] font-semibold text-ink-gray-8 m-0" style="font-family:var(--font-body)">Subcontractor</p>
          <p class="text-[12px] text-ink-gray-6 m-0" style="font-family:var(--font-body)">Inbound · 7 active subcontracts</p>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-outline-gray-2 my-4"></div>

      <!-- Primary value -->
      <div>
        <p class="text-[12px] font-semibold uppercase tracking-[0.07em] text-ink-gray-5 m-0 mb-1" style="font-family:var(--font-body)">Committed to subcontractors</p>
        <p class="text-[20px] font-semibold text-ink-gray-9 m-0" style="font-family:var(--font-body)">AED 18.7M</p>
        <p class="text-[12px] text-ink-gray-6 m-0 mt-0.5" style="font-family:var(--font-body)">across 7 awarded SCs · AED 8.6M certified to date</p>
      </div>

      <!-- Divider -->
      <div class="border-t border-outline-gray-2 my-4"></div>

      <!-- Action row -->
      <div class="flex items-start gap-2 text-[12px] leading-[1.4] text-ink-amber-3" style="font-family:var(--font-body)">
        <span class="size-[7px] rounded-full bg-surface-amber-2 mt-1 shrink-0" />
        <span>2 claims awaiting QS review · 2 tenders close this week</span>
      </div>

      <!-- Footer -->
      <div class="flex justify-end text-[14px] font-medium text-ink-blueprint-4 mt-6" style="font-family:var(--font-body)">
        Open journey →
      </div>
    </div>

      <div
        class="ik-card rounded-md border border-outline-gray-2 bg-surface-gray-1 flex flex-col px-5 py-5 w-full cursor-pointer transition-colors hover:border-outline-blueprint-3"
        @click="showScreen('inhouse-journey')"
      >
        <!-- Header -->
        <div class="flex items-center gap-3">
          <div class="size-[38px] rounded-[10px] flex items-center justify-center shrink-0 bg-surface-blueprint-2 text-ink-blueprint-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21V13.6C9 13.0399 9 12.7599 9.10899 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75992 12 10.0399 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z"/>
          </svg>
          </div>
          <div>
            <p class="text-[16px] font-semibold text-ink-gray-8 m-0" style="font-family:var(--font-body)">In-house</p>
            <p class="text-[12px] text-ink-gray-6 m-0" style="font-family:var(--font-body)">Self-delivery · 2 packages + prelims</p>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-outline-gray-2 my-4"></div>

        <!-- Primary value -->
        <div>
          <p class="text-[12px] font-semibold uppercase tracking-[0.07em] text-ink-gray-5 m-0 mb-1" style="font-family:var(--font-body)">Spent in-house</p>
          <p class="text-[20px] font-semibold text-ink-gray-9 m-0" style="font-family:var(--font-body)">AED 540K</p>
          <p class="text-[12px] text-ink-gray-6 m-0 mt-0.5" style="font-family:var(--font-body)">of AED 1.52M budget · 35% drawn</p>
        </div>

        <!-- Divider -->
        <div class="border-t border-outline-gray-2 my-4"></div>

        <!-- Action row -->
        <div class="flex items-start gap-2 text-[12px] leading-[1.4] text-ink-green-3" style="font-family:var(--font-body)">
          <span class="size-[7px] rounded-full bg-surface-green-3 mt-1 shrink-0" />
          <span>On track this cycle · monthly cost review due 5 May</span>
        </div>

        <!-- Footer -->
        <div class="flex justify-end text-[14px] font-medium text-ink-blueprint-4 mt-6" style="font-family:var(--font-body)">
          Open journey →
        </div>
      </div>
    </div>
    </div>

    <!-- Recent activity -->
     <div class=" p-4 flex flex-col gap-3">
    <div class="text-[14px] font-semibold uppercase tracking-[0.04em] text-ink-gray-9" style="font-family:var(--font-body)">Recent activity</div>

    <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-gray-1 px-4 py-4 w-full">
      <div class="flex items-center justify-between mb-4">
        <span class="text-[14px] font-semibold text-ink-gray-8" style="font-family:var(--font-display)">Last 5 events</span>
        <button
          type="button"
          class="text-[14px] font-medium text-ink-blueprint-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 rounded"
          style="font-family:var(--font-body)"
          @click="toast.info('Audit trail — not yet built in this prototype.')"
        >View full audit trail →</button>
      </div>
      <div class="flex flex-col">
        <div
          v-for="(row, i) in activity" :key="i"
          class="grid grid-cols-[120px_14px_1fr_auto] gap-4 items-center py-2.5 border-b border-dashed border-outline-gray-2 last:border-b-0 text-[12.5px]"
          style="font-family:var(--font-body)"
        >
          <span class="text-[14px] text-ink-gray-6">{{ row.time }}</span>
          <span class="size-2 rounded-full" :class="dotClass(row.dot)" />
          <span class="text-ink-gray-7" v-html="row.text" />
          <span class="text-[14px] text-ink-gray-6 text-right">{{ row.actor }}</span>
        </div>
        </div>  
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import CommercialKpiCard from './CommercialKpiCard.vue'
import CommercialStatusPill from './CommercialStatusPill.vue'
import { showScreen } from './commercialNav'
import { toast } from '../Toast'

const kpis = [
  { label: 'Contract Value', value: 'AED 30.0M', sub: 'Base 29.6M · variations +0.4M', tone: '' as const },
  { label: 'Certified to Date', value: 'AED 11.4M', sub: '38% — matches progress', tone: 'green' as const },
  { label: 'Committed Cost', value: 'AED 24.6M', sub: '82% of contract value', tone: '' as const },
  { label: 'Forecasted Cost at Completion', value: 'AED 27.5M', sub: '+0.3M vs base estimate', tone: 'amber' as const },
  { label: 'Forecasted Margin', value: '8.3%', sub: '↓ 0.6pp this month', tone: 'amber' as const },
  { label: 'Cost Incurred this Month', value: 'AED 1.62M', sub: 'Apr cycle · cumulative 10.8M', tone: '' as const },
]

const activity = [
  { time: '09:42', dot: 'green', text: '<strong>CTC refresh</strong> — March cycle locked, April cycle opened', actor: 'James Chen · CM' },
  { time: '08:15', dot: '', text: '<strong>Variation V-024 quoted</strong> — AED 86K, awaiting CM approval', actor: 'Rashid Hassan · QS' },
  { time: 'Yesterday 17:30', dot: 'purple', text: '<strong>Award AW-012 signed</strong> — Façade glazing package, AED 2.41M', actor: 'Sarah Khan · PD' },
  { time: 'Yesterday 14:08', dot: '', text: '<strong>SC-007 claim received</strong> — IPA-MEP-04, AED 1.42M claimed', actor: 'SC submission' },
  { time: 'Mon 11:20', dot: '', text: '<strong>SC-005 bid returned</strong> — Alumitech Façades · AED 2.38M · 3 of 4 bids in', actor: 'System' },
]

function dotClass(dot: string) {
  if (dot === 'green') return 'bg-surface-green-3'
  if (dot === 'purple') return 'bg-surface-dusk-3'
  return 'bg-surface-blueprint-5'
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
