<template>
  <div class="flex flex-col gap-6">

    <!-- Hero / header -->
    <div
      class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full flex items-start justify-between gap-4 flex-wrap"
      style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
    >
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
      <div class="flex items-center gap-2 shrink-0">
        <button
          type="button"
          class="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-outline-gray-3 text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          style="font-family:var(--font-body)"
          @click="showScreen('a1a')"
        >
          ⊟ Packages
          <span class="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10.5px] font-semibold bg-surface-blueprint-1 text-ink-blueprint-4">7</span>
        </button>
        <button
          type="button"
          class="px-3.5 py-2 rounded-md border border-outline-gray-3 text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          style="font-family:var(--font-body)"
          @click="toast.info('Reports — not yet built in this prototype.')"
        >Reports</button>
      </div>
    </div>

    <!-- KPI strip -->
    <div class="flex items-stretch gap-3 overflow-x-auto pb-1">
      <CommercialKpiCard v-for="k in kpis" :key="k.label" class="min-w-[200px]" :label="k.label" :value="k.value" :sub="k.sub" :tone="k.tone" />
    </div>

    <!-- Journeys -->
    <div class="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-gray-5" style="font-family:var(--font-body)">Journeys</div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div
        class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white flex flex-col gap-3.5 px-5 py-5 w-full cursor-pointer transition-colors hover:border-outline-blueprint-3"
        @click="showScreen('client-journey')"
      >
        <div class="flex items-center gap-3">
          <div class="size-[38px] rounded-[10px] flex items-center justify-center text-[18px] shrink-0 bg-surface-violet-1 text-ink-violet-4">◴</div>
          <div>
            <p class="text-[14px] font-medium text-ink-gray-8 m-0" style="font-family:var(--font-body)">Client</p>
            <p class="text-[12px] text-ink-gray-5 m-0" style="font-family:var(--font-body)">Outbound · Main contract</p>
          </div>
        </div>
        <div>
          <p class="text-[11px] font-semibold uppercase tracking-[0.07em] text-ink-gray-5 m-0 mb-1" style="font-family:var(--font-body)">Certified to client</p>
          <p class="text-[20px] font-semibold text-ink-gray-9 m-0" style="font-family:var(--font-body)">AED 9.4M</p>
          <p class="text-[12px] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">of AED 30.0M revised contract</p>
        </div>
        <div class="flex items-start gap-2 text-[12px] leading-[1.4] text-ink-amber-3" style="font-family:var(--font-body)">
          <span class="size-[7px] rounded-full bg-ink-amber-3 mt-1 shrink-0" />
          <span>IPC-007 draft due in 4 days · 1 client variation awaiting QS pricing</span>
        </div>
        <div class="text-[12px] font-medium text-ink-blueprint-4 mt-auto pt-1" style="font-family:var(--font-body)">Open journey →</div>
      </div>

      <div
        class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white flex flex-col gap-3.5 px-5 py-5 w-full cursor-pointer transition-colors hover:border-outline-blueprint-3"
        @click="showScreen('sc-journey')"
      >
        <div class="flex items-center gap-3">
          <div class="size-[38px] rounded-[10px] flex items-center justify-center text-[18px] shrink-0 bg-surface-blueprint-1 text-ink-blueprint-4">⊟</div>
          <div>
            <p class="text-[14px] font-medium text-ink-gray-8 m-0" style="font-family:var(--font-body)">Subcontractor</p>
            <p class="text-[12px] text-ink-gray-5 m-0" style="font-family:var(--font-body)">Inbound · 7 active subcontracts</p>
          </div>
        </div>
        <div>
          <p class="text-[11px] font-semibold uppercase tracking-[0.07em] text-ink-gray-5 m-0 mb-1" style="font-family:var(--font-body)">Committed to subcontractors</p>
          <p class="text-[20px] font-semibold text-ink-gray-9 m-0" style="font-family:var(--font-body)">AED 18.7M</p>
          <p class="text-[12px] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">across 7 awarded SCs · AED 8.6M certified to date</p>
        </div>
        <div class="flex items-start gap-2 text-[12px] leading-[1.4] text-ink-amber-3" style="font-family:var(--font-body)">
          <span class="size-[7px] rounded-full bg-ink-amber-3 mt-1 shrink-0" />
          <span>2 claims awaiting QS review · 2 tenders close this week</span>
        </div>
        <div class="text-[12px] font-medium text-ink-blueprint-4 mt-auto pt-1" style="font-family:var(--font-body)">Open journey →</div>
      </div>

      <div
        class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white flex flex-col gap-3.5 px-5 py-5 w-full cursor-pointer transition-colors hover:border-outline-blueprint-3"
        @click="showScreen('inhouse-journey')"
      >
        <div class="flex items-center gap-3">
          <div class="size-[38px] rounded-[10px] flex items-center justify-center text-[18px] shrink-0 bg-surface-green-1 text-ink-green-3">⌂</div>
          <div>
            <p class="text-[14px] font-medium text-ink-gray-8 m-0" style="font-family:var(--font-body)">In-house</p>
            <p class="text-[12px] text-ink-gray-5 m-0" style="font-family:var(--font-body)">Self-delivery · 2 packages + prelims</p>
          </div>
        </div>
        <div>
          <p class="text-[11px] font-semibold uppercase tracking-[0.07em] text-ink-gray-5 m-0 mb-1" style="font-family:var(--font-body)">Spent in-house</p>
          <p class="text-[20px] font-semibold text-ink-gray-9 m-0" style="font-family:var(--font-body)">AED 540K</p>
          <p class="text-[12px] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">of AED 1.52M budget · 35% drawn</p>
        </div>
        <div class="flex items-start gap-2 text-[12px] leading-[1.4] text-ink-green-3" style="font-family:var(--font-body)">
          <span class="size-[7px] rounded-full bg-ink-green-3 mt-1 shrink-0" />
          <span>On track this cycle · monthly cost review due 5 May</span>
        </div>
        <div class="text-[12px] font-medium text-ink-blueprint-4 mt-auto pt-1" style="font-family:var(--font-body)">Open journey →</div>
      </div>
    </div>

    <!-- Recent activity -->
    <div class="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-gray-5" style="font-family:var(--font-body)">Recent activity</div>

    <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white px-5 py-4 w-full">
      <div class="flex items-center justify-between mb-2">
        <span class="text-[13px] font-semibold text-ink-gray-8" style="font-family:var(--font-display)">Last 5 events</span>
        <button
          type="button"
          class="text-[11.5px] text-ink-blueprint-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 rounded"
          style="font-family:var(--font-body)"
          @click="toast.info('Audit trail — not yet built in this prototype.')"
        >View full audit trail →</button>
      </div>
      <div class="flex flex-col">
        <div
          v-for="(row, i) in activity" :key="i"
          class="grid grid-cols-[120px_14px_1fr_auto] gap-3.5 items-center py-2.5 border-b border-dashed border-outline-gray-2 last:border-b-0 text-[12.5px]"
          style="font-family:var(--font-body)"
        >
          <span class="text-[11px] text-ink-gray-5">{{ row.time }}</span>
          <span class="size-2 rounded-full" :class="dotClass(row.dot)" />
          <span class="text-ink-gray-7" v-html="row.text" />
          <span class="text-[11px] text-ink-gray-5 text-right">{{ row.actor }}</span>
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
  if (dot === 'green') return 'bg-ink-green-3'
  if (dot === 'purple') return 'bg-ink-violet-3'
  return 'bg-ink-blueprint-3'
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
  background-color: var(--surface-gray-2);
  border-color: var(--outline-gray-3);
}
</style>
