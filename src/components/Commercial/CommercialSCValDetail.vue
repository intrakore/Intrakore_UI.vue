<template>
  <div class="flex flex-col gap-6">

    <!-- Hero / header -->
    <div
      class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full flex items-start justify-between gap-4 flex-wrap"
      style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
    >
      <div>
        <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:var(--font-display)">Skyline Business Bay</h1>
        <p class="text-[13px] font-semibold text-ink-blueprint-4 m-0 mt-1" style="font-family:var(--font-body)">Multitech MEP · IPA-MEP-04 · PKG-007 MEP combined</p>
        <p class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] m-0 mt-1" style="font-family:var(--font-body); font-weight:350;">
          Review the claim line by line. Edit % complete where SC's claim doesn't match site reality.
        </p>
        <div class="flex gap-2 items-center mt-3 flex-wrap">
        <span class="inline-flex items-center gap-2 bg-surface-blueprint-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-blueprint-4 tracking-[0.24px]" style="font-family:var(--font-body)">
          SC-004 · Multitech MEP
        </span>
        <span class="inline-flex items-center gap-2 bg-surface-gray-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-gray-6 tracking-[0.24px]" style="font-family:var(--font-body)">
          Contract value AED 4,920,000 · 4 variations approved · +AED 280K · This claim: AED 1,420,000
        </span>
        <span class="inline-flex items-center gap-2 bg-surface-amber-1 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-amber-3 tracking-[0.24px]" style="font-family:var(--font-body)">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M5.134 1.93a1 1 0 0 1 1.732 0l4.33 7.5A1 1 0 0 1 10.33 11H1.67a1 1 0 0 1-.866-1.5l4.33-7.5Z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/>
            <line x1="6" y1="5" x2="6" y2="7.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
            <circle cx="6" cy="9.25" r="0.55" fill="currentColor"/>
          </svg>
          Awaiting QS review · day 3 of 14
        </span>
      </div>
      </div>
      <button
        type="button"
        class="px-3.5 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 shrink-0"
        style="font-family:var(--font-body)"
        @click="showScreen('scvaluations')"
      >← Back to claims</button>
    </div>

    <!-- Context band -->
    <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <div v-for="b in ctxBlocks" :key="b.label" class="rounded-lg bg-surface-gray-1 p-3">
          <p class="text-[10px] font-bold uppercase tracking-[0.07em] text-ink-gray-5 m-0 mb-1.5" style="font-family:var(--font-body)">{{ b.label }}</p>
          <p class="text-[15px] font-bold text-ink-gray-9 m-0 mb-0.5" style="font-family:var(--font-body)">{{ b.val }}</p>
          <p class="text-[10.5px] m-0" :class="b.tone === 'amber' ? 'text-ink-amber-3 font-semibold' : 'text-ink-gray-5'" style="font-family:var(--font-body)">{{ b.sub }}</p>
        </div>
      </div>
    </div>

    <!-- Line table -->
    <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
      <div class="flex items-center justify-between gap-3 flex-wrap mb-3">
        <span class="text-[13px] font-semibold text-ink-gray-8" style="font-family:var(--font-body)">Line-by-line valuation · 38 lines</span>
        <button
          type="button"
          class="px-3.5 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          style="font-family:var(--font-body)"
          @click="toast.info('Accept all unchanged — not yet built in this prototype.')"
        >Accept all unchanged (24 lines)</button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-outline-gray-2">
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Item</th>
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Description</th>
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Contract qty</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Rate</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap bg-surface-gray-1" style="font-family:var(--font-body)">Previous %</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">
                Current %
                <span class="block text-[9px] font-normal text-ink-gray-5 normal-case">QS edits</span>
              </th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Current qty</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Current value</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Δ this cycle</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="line in scvLines" :key="line.item"
              class="border-b border-outline-gray-2 last:border-b-0"
              :class="line.flag ? 'bg-surface-amber-1/40' : ''"
            >
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ line.item }}</td>
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-7" style="font-family:var(--font-body)">{{ line.desc }}</td>
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ line.contractQty }}</td>
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.rate }}</td>
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap bg-surface-gray-1" style="font-family:var(--font-body)">{{ line.prevPct }}</td>
              <td class="px-3 py-2.5 text-[13px] text-right whitespace-nowrap" style="font-family:var(--font-body)">
                <span class="font-bold text-ink-blueprint-4">{{ line.currPct }}</span>
                <span class="block text-[10px] mt-0.5" :class="line.flag ? 'text-ink-amber-3 font-semibold' : 'text-ink-gray-5'">{{ line.qsNote }}</span>
              </td>
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.currQty }}</td>
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.currValue }}</td>
              <td class="px-3 py-2.5 text-[13px] font-semibold text-ink-green-3 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.delta }}</td>
            </tr>
            <tr class="border-b border-outline-gray-2 last:border-b-0">
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-5" style="font-family:var(--font-body)">...</td>
              <td colspan="8" class="px-3 py-2.5 text-[13px] text-ink-gray-5" style="font-family:var(--font-body)">30 further lines visible on scroll</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="border-t-2 border-outline-gray-2">
              <td colspan="4" class="px-3 py-2.5 text-[10.5px] font-bold uppercase tracking-[0.04em] text-ink-gray-5 text-right" style="font-family:var(--font-body)">Totals</td>
              <td class="px-3 py-2.5 bg-surface-gray-1" />
              <td class="px-3 py-2.5 text-[13px] text-right whitespace-nowrap" style="font-family:var(--font-body)">
                <span class="font-bold text-ink-blueprint-4">QS: 66.2%</span>
                <span class="block text-[10px] text-ink-gray-5 mt-0.5">SC claim: 1,420,000</span>
              </td>
              <td class="px-3 py-2.5" />
              <td class="px-3 py-2.5 text-[13px] font-bold text-ink-gray-8 text-right whitespace-nowrap" style="font-family:var(--font-body)">3,440,000</td>
              <td class="px-3 py-2.5 text-[13px] font-bold text-ink-green-3 text-right whitespace-nowrap" style="font-family:var(--font-body)">+1,260,000</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <!-- Calc block -->
    <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
      <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-3.5" style="font-family:var(--font-body)">Payment certificate calculation</p>
      <div class="rounded-lg bg-surface-gray-1 p-4 flex flex-col">
        <div
          v-for="(row, i) in calcRows"
          :key="row.label"
          class="flex items-center justify-between gap-3 py-2 text-[12px]"
          :class="[
            i < calcRows.length - 1 ? 'border-b border-dashed border-outline-gray-3' : '',
            row.cls === 'final' ? 'border-t-2 border-outline-gray-3 mt-1.5 pt-3 font-bold text-[13px]' : '',
          ]"
          style="font-family:var(--font-body)"
        >
          <span class="text-ink-gray-7">{{ row.label }}</span>
          <span
            :class="[
              row.cls === 'strong' || row.cls === 'final' ? 'font-bold text-ink-gray-9' : '',
              row.cls === 'reduce' ? 'text-ink-red-3' : '',
              row.cls === 'zero' ? 'text-ink-gray-4' : '',
              !row.cls ? 'text-ink-gray-7' : '',
            ]"
          >{{ row.val }}</span>
        </div>
      </div>
    </div>

    <!-- Submit -->
    <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
      <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-2" style="font-family:var(--font-body)">Submit certification</p>
      <p class="text-[12.5px] text-ink-gray-5 m-0 mb-3" style="font-family:var(--font-body)">Routes to James Chen (CM) for review, then Tarek Al-Mansouri (PD) for approval.</p>
      <div class="flex items-center gap-2.5 flex-wrap">
        <button
        type="button"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-blueprint-5 text-white text-[12.5px] font-semibold hover:bg-surface-blueprint-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
        style="font-family:var(--font-body)"
        @click="toast.info('Submit for CM approval — not yet built in this prototype.')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 11 12 14 22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
        Submit for CM approval
      </button>
        <button
          type="button"
          class="px-4 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          style="font-family:var(--font-body)"
          @click="toast.success('Draft saved.')"
        >Save draft</button>
        <span class="text-[11.5px] text-ink-gray-5" style="font-family:var(--font-body)">Last saved 2 min ago</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { showScreen } from './commercialNav'
import { toast } from '../Toast'

interface CtxBlock {
  label: string
  val: string
  sub: string
  tone?: 'amber' | ''
}

const ctxBlocks: CtxBlock[] = [
  { label: 'Claim period', val: 'April 2026', sub: 'submitted 28 Apr · cycle SLA 14 days' },
  { label: 'Contract value', val: 'AED 4,920,000', sub: 'base · awarded 04 Mar 2026' },
  { label: 'Approved variations', val: '+ AED 280,000', sub: '4 variations · revised contract 5.20M' },
  { label: 'Previously certified', val: 'AED 2,180,000', sub: '3 cycles · 42% of revised contract' },
  { label: 'Claimed this cycle', val: 'AED 1,420,000', sub: 'would take cumulative to 69%', tone: 'amber' },
]

interface ScvLine {
  item: string
  desc: string
  contractQty: string
  rate: string
  prevPct: string
  currPct: string
  qsNote: string
  currQty: string
  currValue: string
  delta: string
  flag?: boolean
}

const scvLines: ScvLine[] = [
  { item: '7.1.1', desc: 'HV switchgear 11kV main panels', contractQty: '8 nr', rate: '180,000', prevPct: '50%', currPct: '62.5%', qsNote: 'SC claimed 62.5% · matches', currQty: '5.00 nr', currValue: '900,000', delta: '+180,000' },
  { item: '7.1.2', desc: 'LV distribution boards floor-level', contractQty: '36 nr', rate: '14,200', prevPct: '61%', currPct: '75%', qsNote: 'SC claimed 75% · matches', currQty: '27.00 nr', currValue: '383,400', delta: '+71,000' },
  { item: '7.1.3', desc: 'Cable trays galvanised, primary risers', contractQty: '2,840 m', rate: '220', prevPct: '38%', currPct: '52%', qsNote: 'SC claimed 68% · −16%', currQty: '1,476.80 m', currValue: '324,896', delta: '+87,472', flag: true },
  { item: '7.2.1', desc: 'Chillers, water-cooled centrifugal 800TR', contractQty: '2 nr', rate: '480,000', prevPct: '30%', currPct: '55%', qsNote: 'SC claimed 55% · matches', currQty: '1.10 nr', currValue: '528,000', delta: '+240,000' },
  { item: '7.2.2', desc: 'AHUs, 8,000 cfm', contractQty: '14 nr', rate: '42,000', prevPct: '43%', currPct: '71%', qsNote: 'SC claimed 71% · matches', currQty: '10.00 nr', currValue: '420,000', delta: '+168,000' },
]

interface CalcRow {
  label: string
  val: string
  cls?: 'strong' | 'reduce' | 'zero' | 'final'
}

const calcRows: CalcRow[] = [
  { label: "Gross claimed this cycle (SC's submission)", val: 'AED 1,420,000' },
  { label: 'Less: QS reductions (1 line reduced — 7.1.3 cable trays)', val: '− AED 35,000', cls: 'reduce' },
  { label: 'Gross certified this cycle', val: 'AED 1,385,000', cls: 'strong' },
  { label: 'Less: Retention (10%)', val: '− AED 138,500' },
  { label: 'Net certified, subject to release', val: 'AED 1,246,500', cls: 'strong' },
  { label: 'Less: Back-charges', val: 'AED 0', cls: 'zero' },
  { label: 'Less: Advance recovery (no advance paid)', val: 'AED 0', cls: 'zero' },
  { label: 'Net payment this cycle', val: 'AED 1,246,500', cls: 'final' },
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
  background-color: var(--surface-gray-2);
  border-color: var(--outline-gray-3);
}
[data-theme='dark'] .ik-hero-card {
  background-image: linear-gradient(
    79.62deg,
    rgba(10, 10, 30, 0.95) 65.76%,
    rgba(0, 15, 204, 0.60) 98.33%
  ) !important;
}
</style>
