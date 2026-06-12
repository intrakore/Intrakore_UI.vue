<template>
  <div class="flex flex-col gap-6">

    <!-- Hero / header -->
    <div
      class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full flex items-start justify-between gap-4 flex-wrap"
      style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
    >
      <div>
        <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:var(--font-display)">Skyline Business Bay</h1>
        <p class="text-[13px] font-semibold text-ink-blueprint-4 m-0 mt-1" style="font-family:var(--font-body)">Client IPC-007 · Main contract application for payment · Mar 2026</p>
        <p class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] m-0 mt-1" style="font-family:var(--font-body); font-weight:350;">
          Compile this month's application to the client. Enter cumulative % complete per BOQ line, add approved variation orders, apply retention.
        </p>
        <div class="flex items-center gap-2 text-[12px] text-ink-gray-6 flex-wrap mt-3" style="font-family:var(--font-body)">
          <span>INT-26-014 · Main contract</span>
          <span class="text-ink-gray-3">·</span>
          <span>Revised contract AED 30.0M</span>
          <span class="text-ink-gray-3">·</span>
          <span>AED 9.4M certified to date (IPC-001→006)</span>
          <span class="text-ink-gray-3">·</span>
          <span class="text-ink-amber-3 font-semibold">Draft · due to client in 4 days</span>
        </div>
      </div>
      <button
        type="button"
        class="px-3.5 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 shrink-0"
        style="font-family:var(--font-body)"
        @click="showScreen('client-journey')"
      >← Back to client journey</button>
    </div>

    <!-- Kore banner -->
    <div class="rounded-lg border-l-[3px] border-outline-amber-3 bg-surface-amber-1 px-4 py-3 flex items-start gap-3 text-[12px] text-ink-gray-7" style="font-family:var(--font-body)">
      <span class="text-[16px] text-ink-amber-3 shrink-0">✦</span>
      <span><strong class="text-ink-gray-8">Kore:</strong> This draft takes cumulative certification to 38.2% against 31.3% last cycle — a 6.9% jump, the largest single-cycle movement on this contract. Superstructure (Bill 3) drives it, led by post-tensioned slabs line 3.2. Verify site progress supports the claim before submission.</span>
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
        <span class="text-[13px] font-semibold text-ink-gray-8" style="font-family:var(--font-body)">Main contract BOQ — cumulative valuation · 6 bills</span>
        <select class="ik-select min-w-[190px]">
          <option selected>All bills (6)</option>
          <option>Bill 1 — Preliminaries</option>
          <option>Bill 2 — Substructure</option>
          <option>Bill 3 — Superstructure</option>
        </select>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-outline-gray-2">
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Item</th>
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Description</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Contract value</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap bg-surface-gray-1" style="font-family:var(--font-body)">Prev %</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Current %</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Cumulative value</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Δ this cycle</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="bill in ipcBills" :key="bill.title">
              <tr class="bg-surface-gray-1">
                <td colspan="7" class="px-3 py-2 text-[11px] font-bold text-ink-gray-7" style="font-family:var(--font-body)">{{ bill.title }}</td>
              </tr>
              <tr v-for="line in bill.lines" :key="line.item" class="border-b border-outline-gray-2 last:border-b-0" :class="{ 'bg-surface-amber-1/40': line.flag }">
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ line.item }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7" style="font-family:var(--font-body)">
                  {{ line.desc }}
                  <div v-if="line.flag" class="text-[10px] text-ink-amber-3 mt-0.5">✦ +13% jump — verify vs site</div>
                </td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.contractValue }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap bg-surface-gray-1" style="font-family:var(--font-body)">{{ line.prevPct }}</td>
                <td class="px-3 py-2.5 text-[13px] text-right whitespace-nowrap font-semibold text-ink-blueprint-4" style="font-family:var(--font-body)">{{ line.currPct }}</td>
                <td class="px-3 py-2.5 text-[13px] text-right whitespace-nowrap font-semibold text-ink-blueprint-4" style="font-family:var(--font-body)">{{ line.cumValue }}</td>
                <td
                  class="px-3 py-2.5 text-[13px] text-right whitespace-nowrap font-semibold"
                  :class="line.delta === '0' ? 'text-ink-gray-4 font-normal' : 'text-ink-green-3'"
                  style="font-family:var(--font-body)"
                >{{ line.delta === '0' ? '0' : '+' + line.delta }}</td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr class="border-t-2 border-outline-gray-2">
              <td colspan="2" class="px-3 py-2.5 text-[10.5px] font-bold uppercase tracking-[0.04em] text-ink-gray-5 text-right" style="font-family:var(--font-body)">Totals</td>
              <td class="px-3 py-2.5 text-[13px] font-bold text-ink-gray-8 text-right whitespace-nowrap" style="font-family:var(--font-body)">30,000,000</td>
              <td class="px-3 py-2.5 text-[13px] font-bold text-ink-gray-7 text-right whitespace-nowrap bg-surface-gray-1" style="font-family:var(--font-body)">31.3%</td>
              <td class="px-3 py-2.5 text-[13px] font-bold text-ink-blueprint-4 text-right whitespace-nowrap" style="font-family:var(--font-body)">38.2%</td>
              <td class="px-3 py-2.5 text-[13px] font-bold text-ink-blueprint-4 text-right whitespace-nowrap" style="font-family:var(--font-body)">11,473,000</td>
              <td class="px-3 py-2.5 text-[13px] font-bold text-ink-green-3 text-right whitespace-nowrap" style="font-family:var(--font-body)">+2,073,000</td>
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
      <div class="flex items-center gap-2 mb-2">
        <span class="text-[13px] font-semibold text-ink-gray-8" style="font-family:var(--font-body)">Submit application</span>
        <CommercialStatusPill label="Draft" tone="gray" />
      </div>
      <p class="text-[12.5px] text-ink-gray-5 m-0 mb-3" style="font-family:var(--font-body)">Routes to James Chen (CM) for review, then Tarek Al-Mansouri (PD) for approval.</p>
      <div class="flex items-center gap-2.5 flex-wrap">
        <button
          type="button"
          class="px-4 py-2 rounded-lg bg-ink-blueprint-4 text-white text-[12.5px] font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          style="font-family:var(--font-body)"
          @click="toast.info('Submit for CM review — not yet built in this prototype.')"
        >Submit for CM review →</button>
        <button
          type="button"
          class="px-4 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          style="font-family:var(--font-body)"
          @click="toast.success('Draft saved.')"
        >Save draft</button>
        <span class="text-[11.5px] text-ink-gray-5" style="font-family:var(--font-body)">Last saved 1 min ago</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import CommercialStatusPill from './CommercialStatusPill.vue'
import { showScreen } from './commercialNav'
import { toast } from '../Toast'

interface CtxBlock {
  label: string
  val: string
  sub: string
  tone?: 'amber' | ''
}

const ctxBlocks: CtxBlock[] = [
  { label: 'Claim period', val: 'Mar 2026', sub: 'cycle 7 · monthly' },
  { label: 'Revised contract', val: 'AED 30.0M', sub: 'orig 29.6M + 400K variations' },
  { label: 'Previously certified', val: 'AED 9.4M', sub: '6 IPCs · 31.3% of contract' },
  { label: 'This claim (gross)', val: 'AED 2.07M', sub: 'takes cumulative to 38.2%', tone: 'amber' },
  { label: 'Net payment claimed', val: 'AED 1.87M', sub: 'after 10% retention' },
]

interface IpcLine {
  item: string
  desc: string
  contractValue: string
  prevPct: string
  currPct: string
  cumValue: string
  delta: string
  flag?: boolean
}

interface IpcBill {
  title: string
  lines: IpcLine[]
}

const ipcBills: IpcBill[] = [
  {
    title: 'Bill 1 — Preliminaries',
    lines: [
      { item: '1.1', desc: 'Site establishment, supervision & general attendance', contractValue: '3,200,000', prevPct: '36%', currPct: '46%', cumValue: '1,472,000', delta: '316,800' },
    ],
  },
  {
    title: 'Bill 2 — Substructure',
    lines: [
      { item: '2.1', desc: 'Excavation, shoring & dewatering', contractValue: '2,400,000', prevPct: '100%', currPct: '100%', cumValue: '2,400,000', delta: '0' },
      { item: '2.2', desc: 'Piling & pile caps', contractValue: '2,100,000', prevPct: '100%', currPct: '100%', cumValue: '2,100,000', delta: '0' },
      { item: '2.3', desc: 'Raft & basement RC to ground slab', contractValue: '3,600,000', prevPct: '66%', currPct: '78%', cumValue: '2,808,000', delta: '432,000' },
    ],
  },
  {
    title: 'Bill 3 — Superstructure',
    lines: [
      { item: '3.1', desc: 'RC columns, cores & shear walls', contractValue: '4,400,000', prevPct: '18%', currPct: '30%', cumValue: '1,320,000', delta: '528,000' },
      { item: '3.2', desc: 'Post-tensioned floor slabs L1–L8', contractValue: '4,000,000', prevPct: '5%', currPct: '18%', cumValue: '720,000', delta: '520,000', flag: true },
    ],
  },
  {
    title: 'Bill 4 — MEP services',
    lines: [
      { item: '4.1', desc: 'Electrical — containment, distribution & primary risers', contractValue: '2,700,000', prevPct: '6%', currPct: '10%', cumValue: '270,000', delta: '108,000' },
    ],
  },
  {
    title: 'Approved variation orders',
    lines: [
      { item: 'VO-001', desc: 'Additional fire-rated walls B2–B4', contractValue: '280,000', prevPct: '45%', currPct: '70%', cumValue: '196,000', delta: '70,000' },
      { item: 'VO-002', desc: 'Lobby finishes upgrade', contractValue: '200,000', prevPct: '0%', currPct: '15%', cumValue: '30,000', delta: '30,000' },
    ],
  },
]

interface CalcRow {
  label: string
  val: string
  cls?: 'strong' | 'reduce' | 'zero' | 'final'
}

const calcRows: CalcRow[] = [
  { label: 'Gross cumulative value certified this application', val: 'AED 11,473,000' },
  { label: 'Less: previously certified (IPC-001 → IPC-006)', val: '− AED 9,400,000' },
  { label: 'Gross claimed this cycle', val: 'AED 2,073,000', cls: 'strong' },
  { label: 'Less: retention (10%)', val: '− AED 207,300', cls: 'reduce' },
  { label: 'Net certified, subject to release', val: 'AED 1,865,700', cls: 'strong' },
  { label: 'Less: advance recovery (no advance on this contract)', val: 'AED 0', cls: 'zero' },
  { label: 'Less: contra-charges', val: 'AED 0', cls: 'zero' },
  { label: 'Net payment claimed this cycle', val: 'AED 1,865,700', cls: 'final' },
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
.ik-select {
  font-family: var(--font-body);
  font-size: 12.5px;
  color: var(--ink-gray-7);
  background-color: var(--surface-white);
  border: 1px solid var(--outline-gray-3);
  border-radius: 8px;
  padding: 6px 10px;
}
.ik-select:hover {
  border-color: var(--outline-blueprint-3);
}
.ik-select:focus-visible {
  outline: 2px solid var(--outline-blueprint-2);
  outline-offset: 1px;
}
[data-theme='dark'] .ik-select {
  background-color: var(--surface-gray-3);
  border-color: var(--outline-gray-4);
  color: var(--ink-gray-7);
}
</style>
