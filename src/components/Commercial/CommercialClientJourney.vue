<template>
  <div class="flex flex-col gap-6">

    <!-- Hero / header -->
    <div
      class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full"
      style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
    >
      <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:var(--font-display)">Skyline Business Bay</h1>
      <p class="text-[13px] font-semibold text-ink-blueprint-4 m-0 mt-1" style="font-family:var(--font-body)">Client journey</p>
      <p class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] m-0 mt-1" style="font-family:var(--font-body); font-weight:350;">
        Outbound to client — main contract valuations, variation orders, contract value tracking.
      </p>
      <div class="flex gap-2 items-center mt-3 flex-wrap">
      <span class="inline-flex items-center gap-2 bg-surface-blueprint-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-blueprint-4 tracking-[0.24px]" style="font-family:var(--font-body)">
        Main contract AED 30.0M
      </span>
      <span class="inline-flex items-center gap-2 bg-surface-gray-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-gray-6 tracking-[0.24px]" style="font-family:var(--font-body)">
        AED 9.4M certified | AED 5.8M paid
      </span>
      <span class="inline-flex items-center gap-2 bg-surface-amber-1 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-amber-3 tracking-[0.24px]" style="font-family:var(--font-body)">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M5.134 1.93a1 1 0 0 1 1.732 0l4.33 7.5A1 1 0 0 1 10.33 11H1.67a1 1 0 0 1-.866-1.5l4.33-7.5Z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/>
          <line x1="6" y1="5" x2="6" y2="7.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
          <circle cx="6" cy="9.25" r="0.55" fill="currentColor"/>
        </svg>
        AED 3.6M outstanding | IPC-005 overdue | IPC-007 draft due in 4 days
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
      <span><strong class="text-ink-gray-8">Kore:</strong> IPC-006 paid 38 days after certification — beyond 30-day contract terms. Consider raising with client before IPC-007 to protect cash flow.</span>
    </div>

    <!-- Sub-journey cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CommercialJourneyCard
        title="Variation orders"
        meta="6 in progress | 3 approved | 1 rejected | 10 total"
        meta-tone="amber"
        sub="Changes to main contract scope or value. Price, route for CM/Director sign-off, submit to client."
        @click="showScreen('vo-register')"
      >
        <template #icon>
          <div class="size-10 rounded-xl bg-surface-blueprint-2 text-ink-blueprint-4 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </div>
        </template>
      </CommercialJourneyCard>
      <CommercialJourneyCard
      title="Main contract IPCs"
      meta="IPC-007 due in 4 days"
      meta-tone="amber"
      sub="Outbound monthly application for payment. Compile work done, variations, retention. Submit to client."
      @click="showScreen('client-ipc')"
    >
      <template #icon>
        <div class="size-10 rounded-xl bg-surface-blueprint-2 text-ink-blueprint-4 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
      </template>
    </CommercialJourneyCard>
    </div>

    <!-- Project SOA -->
    <div class="flex flex-col gap-3">
      <div class="flex items-baseline justify-between gap-3 flex-wrap">
        <span class="text-[15px] font-bold text-ink-gray-8" style="font-family:var(--font-display)">Project SOA — statement of account</span>
      </div>
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <div class="flex items-baseline justify-between gap-3 flex-wrap mb-3">
          <span class="text-[13px] font-semibold text-ink-gray-8" style="font-family:var(--font-body)">Variation orders register</span>
          <span class="text-[11px] text-ink-gray-5" style="font-family:var(--font-body)">Variations to original contract value</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-outline-gray-2">
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">VO ref &amp; description</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Origin</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Status</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Value (AED)</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Linked</th>
                <th class="px-3 py-2.5" />
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in voRows" :key="row.name" class="border-b border-outline-gray-2 last:border-b-0">
                <td class="px-3 py-2.5">
                  <p class="text-[13px] font-medium leading-[1.15] text-ink-gray-8 m-0" style="font-family:var(--font-body)">{{ row.name }}</p>
                  <p class="text-[12px] leading-[1.15] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">{{ row.code }}</p>
                </td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.origin || '—' }}</td>
                <td class="px-3 py-2.5 whitespace-nowrap"><CommercialStatusPill :label="row.statusLabel" :tone="row.tone" :pulse="row.pulse" /></td>
                <td class="px-3 py-2.5 text-[13px] text-right whitespace-nowrap font-semibold" :class="row.valTone === 'green' ? 'text-ink-green-3' : row.valTone === 'red' ? 'text-ink-red-3' : row.valTone === 'amber' ? 'text-ink-amber-3' : 'text-ink-gray-8'" style="font-family:var(--font-body)">{{ row.value }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.linked }}</td>
                <td class="px-3 py-2.5 whitespace-nowrap">
                  <button
                    v-if="row.viewable"
                    type="button"
                    class="px-2.5 py-1 rounded-md border border-outline-gray-3 text-[11px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
                    style="font-family:var(--font-body)"
                    @click="toast.info(row.name + ' — not yet built in this prototype.')"
                  >View →</button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="border-t border-outline-gray-2">
                <td colspan="3" class="px-3 py-2 text-[10.5px] font-semibold uppercase tracking-[0.04em] text-ink-gray-5" style="font-family:var(--font-body)">Original contract value</td>
                <td class="px-3 py-2 text-[13px] font-bold text-ink-gray-8 text-right whitespace-nowrap" style="font-family:var(--font-body)">29,600,000</td>
                <td colspan="2" />
              </tr>
              <tr>
                <td colspan="3" class="px-3 py-2 text-[10.5px] font-semibold uppercase tracking-[0.04em] text-ink-green-3" style="font-family:var(--font-body)">+ Approved variations (3)</td>
                <td class="px-3 py-2 text-[13px] font-bold text-ink-green-3 text-right whitespace-nowrap" style="font-family:var(--font-body)">+400,000</td>
                <td colspan="2" />
              </tr>
              <tr class="border-t-2 border-outline-blueprint-3 bg-surface-blueprint-1">
                <td colspan="3" class="px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.04em] text-ink-gray-8" style="font-family:var(--font-body)">Revised contract value</td>
                <td class="px-3 py-2.5 text-[15px] font-bold text-ink-gray-9 text-right whitespace-nowrap" style="font-family:var(--font-body)">30,000,000</td>
                <td colspan="2" />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <!-- IPC ageing -->
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <div class="flex items-baseline justify-between gap-3 flex-wrap mb-3">
          <span class="text-[13px] font-semibold text-ink-gray-8" style="font-family:var(--font-body)">IPC ageing &amp; payment flow</span>
          <span class="text-[11px] text-ink-gray-5" style="font-family:var(--font-body)">Monthly applications · earned → certified → paid</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-outline-gray-2">
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">IPC &amp; claim date</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Claimed</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Certified</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Due date</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Received date</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in ipcRows" :key="row.name" class="ik-card-row border-b border-outline-gray-2 last:border-b-0" :class="{ 'bg-surface-red-1': row.overdue, 'cursor-pointer': row.draft }" @click="row.draft && showScreen('client-ipc')">
                <td class="px-3 py-2.5">
                  <p class="text-[13px] font-medium leading-[1.15] m-0" :class="row.draft ? 'text-ink-blueprint-4' : 'text-ink-gray-8'" style="font-family:var(--font-body)">{{ row.name }}</p>
                  <p class="text-[12px] leading-[1.15] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">{{ row.date }}</p>
                </td>
                <template v-if="!row.draft">
                  <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">
                    {{ row.claimed }}
                    <div v-if="row.claimedSub" class="text-[10px] text-ink-gray-5">{{ row.claimedSub }}</div>
                  </td>
                  <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">
                    {{ row.certified }}
                    <div v-if="row.certifiedSub" class="text-[10px] text-ink-gray-5">{{ row.certifiedSub }}</div>
                  </td>
                  <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.due }}</td>
                  <td class="px-3 py-2.5 text-[13px] whitespace-nowrap" :class="row.received === '—' ? 'text-ink-gray-4' : 'text-ink-gray-7'" style="font-family:var(--font-body)">{{ row.received }}</td>
                </template>
                <td v-else colspan="4" class="px-3 py-2.5 text-[12.5px] text-ink-gray-5 italic whitespace-nowrap" style="font-family:var(--font-body)">
                  — Awaiting QS draft, due in 4 days ·
                  <button
                    type="button"
                    class="not-italic px-2.5 py-1 ml-1 rounded-md border border-outline-gray-3 text-[11px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
                    style="font-family:var(--font-body)"
                    @click.stop="showScreen('client-ipc')"
                  >Open draft →</button>
                </td>
                <td class="px-3 py-2.5 whitespace-nowrap"><CommercialStatusPill :label="row.statusLabel" :tone="row.tone" :dot-tone="row.dotTone" :pulse="row.pulse" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import CommercialJourneySummary, { type JourneySummaryItem } from './CommercialJourneySummary.vue'
import CommercialJourneyCard from './CommercialJourneyCard.vue'
import CommercialStatusPill from './CommercialStatusPill.vue'
import { showScreen } from './commercialNav'
import { toast } from '../Toast'

const summaryItems: JourneySummaryItem[] = [
  { label: 'Original contract', value: 'AED 29.6M', sub: 'awarded 14 Sep 2025' },
  { label: 'Approved variations', value: '+ AED 400K', sub: '3 variation orders approved' },
  { label: 'Revised contract', value: 'AED 30.0M', sub: 'current value' },
  { label: 'Certified to client', value: 'AED 9.4M', sub: '6 IPCs cumulative · 31% of contract' },
  { label: 'Cash received', value: 'AED 5.8M', sub: 'AED 3.6M outstanding · IPC-005 overdue 38d', tone: 'amber' },
]

interface VoRow {
  name: string
  code: string
  origin?: string
  statusLabel: string
  tone: 'green' | 'amber' | 'gray' | 'red' | 'blueprint'
  pulse?: boolean
  value: string
  valTone?: 'green' | 'red' | 'amber'
  linked: string
  viewable?: boolean
}

const voRows: VoRow[] = [
  { name: 'Original contract', code: 'Awarded 14 Sep 2025', statusLabel: 'Executed', tone: 'green', pulse: true, value: '29,600,000', linked: 'Base contract' },
  { name: 'VO-001', code: 'Additional fire-rated walls B2 to B4', origin: 'Design change', statusLabel: 'Approved', tone: 'green', pulse: true, value: '+280,000', valTone: 'green', linked: 'PKG-003 · 1 SCV linked', viewable: true },
  { name: 'VO-002', code: 'Lobby finishes upgrade marble → granite', origin: 'Client request', statusLabel: 'Approved', tone: 'green', pulse: true, value: '+200,000', valTone: 'green', linked: 'PKG-009 · in-house', viewable: true },
  { name: 'VO-003', code: 'Reduction of basement ramp width', origin: 'Client request', statusLabel: 'Approved', tone: 'green', pulse: true, value: '−80,000', valTone: 'red', linked: 'PKG-001 · 1 SCV linked', viewable: true },
  { name: 'VO-004', code: 'Additional EV charging infrastructure', origin: 'Client request', statusLabel: 'With client', tone: 'amber', value: '+120,000', valTone: 'amber', linked: 'PKG-007 · SCV pending', viewable: true },
]

interface IpcRow {
  name: string
  date: string
  claimed?: string
  claimedSub?: string
  certified?: string
  certifiedSub?: string
  due?: string
  received?: string
  statusLabel: string
  tone: 'green' | 'amber' | 'gray' | 'red' | 'blueprint'
  dotTone?: 'green' | 'amber' | 'gray' | 'red' | 'blueprint'
  pulse?: boolean
  overdue?: boolean
  draft?: boolean
}

const ipcRows: IpcRow[] = [
  { name: 'IPC-001', date: 'claimed 02 Oct 2025', claimed: '1,920,000', claimedSub: '6.4%', certified: '1,840,000', certifiedSub: '6.1%', due: '01 Nov 2025', received: '03 Nov 2025', statusLabel: 'Received · on time', tone: 'green', pulse: true },
  { name: 'IPC-002', date: 'claimed 03 Nov 2025', claimed: '1,180,000', claimedSub: '10.4%', certified: '1,180,000', certifiedSub: '10.1%', due: '03 Dec 2025', received: '01 Dec 2025', statusLabel: 'Received · on time', tone: 'green', pulse: true },
  { name: 'IPC-003', date: 'claimed 02 Dec 2025', claimed: '1,580,000', claimedSub: '15.7%', certified: '1,520,000', certifiedSub: '15.2%', due: '01 Jan 2026', received: '02 Jan 2026', statusLabel: 'Received · on time', tone: 'green', pulse: true },
  { name: 'IPC-004', date: 'claimed 02 Jan 2026', claimed: '1,300,000', certified: '1,260,000', due: '01 Feb 2026', received: '07 Feb 2026', statusLabel: 'Received · delayed 6d', tone: 'gray', dotTone: 'amber' },
  { name: 'IPC-005', date: 'claimed 02 Feb 2026', claimed: '1,860,000', certified: '1,840,000', due: '04 Mar 2026', received: '—', statusLabel: 'Pending · 38d overdue', tone: 'red', dotTone: 'red', overdue: true },
  { name: 'IPC-006', date: 'claimed 02 Mar 2026', claimed: '1,800,000', certified: '1,760,000', due: '01 Apr 2026', received: '—', statusLabel: 'Pending · expected 01 Apr', tone: 'amber', dotTone: 'gray' },
  { name: 'IPC-007', date: 'Mar 2026 · draft in progress', statusLabel: 'Draft', tone: 'gray', draft: true },
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
