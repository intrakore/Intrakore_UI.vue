<template>
  <div class="flex flex-col gap-6">

    <!-- Hero / header -->
    <div
      class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full flex items-start justify-between gap-4 flex-wrap"
      style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
    >
      <div>
        <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:var(--font-display)">Skyline Business Bay</h1>
        <p class="text-[13px] font-semibold text-ink-blueprint-4 m-0 mt-1" style="font-family:var(--font-body)">Variation orders · main contract change register</p>
        <p class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] m-0 mt-1" style="font-family:var(--font-body); font-weight:350;">
          Track every variation to the main contract from draft through to approval.
        </p>
        <div class="flex items-center gap-2 text-[12px] text-ink-gray-6 flex-wrap mt-3" style="font-family:var(--font-body)">
          <span>INT-26-014 · Main contract</span>
          <span class="text-ink-gray-3">·</span>
          <span>Revised contract AED 30.0M</span>
          <span class="text-ink-gray-3">·</span>
          <span>10 VOs raised · 3 approved (+AED 400K)</span>
          <span class="text-ink-gray-3">·</span>
          <span class="text-ink-amber-3 font-semibold">2 awaiting CM action</span>
        </div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button
          type="button"
          class="px-3.5 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          style="font-family:var(--font-body)"
          @click="showScreen('client-journey')"
        >← Back to client journey</button>
        <button
          type="button"
          class="px-3.5 py-2 rounded-lg bg-ink-blueprint-4 text-white text-[12.5px] font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          style="font-family:var(--font-body)"
          @click="toast.info('New variation order — not yet built in this prototype.')"
        >+ New variation order</button>
      </div>
    </div>

    <!-- Kore banner -->
    <div class="rounded-lg border-l-[3px] border-outline-amber-3 bg-surface-amber-1 px-4 py-3 flex items-start gap-3 text-[12px] text-ink-gray-7" style="font-family:var(--font-body)">
      <span class="text-[16px] text-ink-amber-3 shrink-0">✦</span>
      <span><strong class="text-ink-gray-8">Kore:</strong> 6 of 10 VOs originated from Engineer's Instructions in the last 60 days. VO-007 (generator capacity) has been at "Quote submitted" for 18 days against the contractual 14-day client response — chase warranted.</span>
    </div>

    <!-- KPI strip -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      <CommercialKpiCard label="Total VOs" value="10" sub="3 approved · 6 in progress · 1 rejected" />
      <CommercialKpiCard label="Approved value" value="+AED 400K" sub="added to contract" tone="green" />
      <CommercialKpiCard label="Open value at risk" value="+AED 680K" sub="pending client decision" tone="amber" />
      <CommercialKpiCard label="Avg client turnaround" value="22 days" sub="contract terms 14 days" tone="amber" />
      <CommercialKpiCard label="Needing action" value="2" sub="CM review · 1 overdue chase" tone="amber" />
    </div>

    <!-- Filter bar -->
    <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white px-5 py-3.5">
      <div class="flex items-center gap-3 flex-wrap">
        <div class="flex items-center gap-2">
          <span class="text-[11px] font-semibold uppercase tracking-[0.04em] text-ink-gray-5" style="font-family:var(--font-body)">Status</span>
          <select class="ik-select">
            <option>All statuses (10)</option>
            <option>Draft (1)</option>
            <option>Internal review (1)</option>
            <option>Notified to client (1)</option>
            <option>Quote submitted (2)</option>
            <option>Under negotiation (1)</option>
            <option>Approved (3)</option>
            <option>Rejected (1)</option>
          </select>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[11px] font-semibold uppercase tracking-[0.04em] text-ink-gray-5" style="font-family:var(--font-body)">Package</span>
          <select class="ik-select">
            <option>All packages</option>
            <option>Structure</option>
            <option>MEP</option>
            <option>Finishes</option>
            <option>External</option>
          </select>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[11px] font-semibold uppercase tracking-[0.04em] text-ink-gray-5" style="font-family:var(--font-body)">Direction</span>
          <select class="ik-select">
            <option>All directions</option>
            <option>Adds (7)</option>
            <option>Substitutions (2)</option>
            <option>Omissions (1)</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search by VO ref, title, or source doc…"
          class="ik-select flex-1 min-w-[200px]"
        />
      </div>
    </div>

    <!-- VO table -->
    <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
      <div class="flex items-baseline justify-between gap-3 flex-wrap mb-3">
        <span class="text-[13px] font-semibold text-ink-gray-8" style="font-family:var(--font-body)">Variation register · 10 VOs</span>
        <span class="text-[11px] text-ink-gray-5" style="font-family:var(--font-body)">Sorted by VO number · click any row to open detail</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-outline-gray-2">
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">VO ref &amp; title</th>
              <th class="px-2 py-2.5" />
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Type</th>
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Origin</th>
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Package</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Value (AED)</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Margin</th>
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">EOT</th>
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Holding with</th>
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in voRows" :key="row.ref" class="ik-card-row border-b border-outline-gray-2 last:border-b-0 cursor-pointer" @click="openVo(row)">
              <td class="px-3 py-2.5">
                <p class="text-[13px] font-medium leading-[1.15] text-ink-gray-8 m-0" style="font-family:var(--font-body)">{{ row.ref }}</p>
                <p class="text-[12px] leading-[1.15] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">{{ row.title }}</p>
              </td>
              <td class="px-2 py-2.5 whitespace-nowrap">
                <span
                  class="inline-flex items-center justify-center size-[22px] rounded-full text-[12px] font-bold"
                  :class="{
                    'bg-surface-green-1 text-ink-green-3': row.dir === 'add',
                    'bg-surface-blueprint-1 text-ink-blueprint-4': row.dir === 'sub',
                    'bg-surface-red-1 text-ink-red-3': row.dir === 'omit',
                  }"
                >{{ row.dir === 'add' ? '+' : row.dir === 'omit' ? '−' : '≈' }}</span>
              </td>
              <td class="px-3 py-2.5 text-[11.5px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.type }}</td>
              <td class="px-3 py-2.5 text-[11.5px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.origin }}</td>
              <td class="px-3 py-2.5 text-[11.5px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.pkg }}</td>
              <td
                class="px-3 py-2.5 text-[13px] text-right whitespace-nowrap font-semibold"
                :class="{
                  'text-ink-green-3': row.valTone === 'green',
                  'text-ink-red-3': row.valTone === 'red',
                  'text-ink-amber-3': row.valTone === 'amber',
                  'text-ink-gray-4 font-normal': row.valTone === 'muted',
                }"
                style="font-family:var(--font-body)"
              >{{ row.val }}</td>
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ row.margin }}</td>
              <td class="px-3 py-2.5 text-[11.5px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.eot }}</td>
              <td class="px-3 py-2.5 whitespace-nowrap">
                <p class="text-[11.5px] text-ink-gray-7 m-0" style="font-family:var(--font-body)">{{ row.holding }}</p>
                <p class="text-[10px] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">{{ row.holdMeta }}</p>
              </td>
              <td class="px-3 py-2.5 whitespace-nowrap">
                <CommercialStatusPill :label="row.statusLabel" :tone="row.tone" dot-tone="gray" />
                <p class="text-[10.5px] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">{{ row.aging }}</p>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="border-t-2 border-outline-gray-2">
              <td colspan="5" class="px-3 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.04em] text-ink-gray-5" style="font-family:var(--font-body)">10 VOs · 3 approved · 6 open · 1 rejected</td>
              <td class="px-3 py-2.5 text-[13px] font-bold text-ink-green-3 text-right whitespace-nowrap" style="font-family:var(--font-body)">+1,080,000</td>
              <td colspan="4" class="px-3 py-2.5 text-[11px] text-ink-gray-5 whitespace-nowrap" style="font-family:var(--font-body)">Approved +400K · Open +680K · Avg margin 10.4%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import CommercialKpiCard from './CommercialKpiCard.vue'
import CommercialStatusPill from './CommercialStatusPill.vue'
import { showScreen } from './commercialNav'
import { toast } from '../Toast'

interface VoRow {
  ref: string
  title: string
  dir: 'add' | 'sub' | 'omit'
  type: string
  origin: string
  pkg: string
  val: string
  valTone: 'green' | 'red' | 'amber' | 'muted'
  margin: string
  eot: string
  holding: string
  holdMeta: string
  statusLabel: string
  tone: 'green' | 'amber' | 'red' | 'gray'
  aging: string
  detail?: boolean
}

const voRows: VoRow[] = [
  { ref: 'VO-001', title: 'Additional fire-rated walls B2–B4', dir: 'add', type: 'New scope', origin: 'EI-008', pkg: 'Structure', val: '+280,000', valTone: 'green', margin: '10.4%', eot: '—', holding: '—', holdMeta: 'approved 12 Feb', statusLabel: 'Approved', tone: 'green', aging: 'linked PKG-003' },
  { ref: 'VO-002', title: 'Lobby finishes upgrade marble → granite', dir: 'sub', type: 'Amendment', origin: 'Client request', pkg: 'Finishes', val: '+200,000', valTone: 'green', margin: '12.0%', eot: '—', holding: '—', holdMeta: 'approved 04 Mar', statusLabel: 'Approved', tone: 'green', aging: 'linked PKG-008' },
  { ref: 'VO-003', title: 'Reduction of basement ramp width 6.0m → 5.4m', dir: 'omit', type: 'Omission', origin: 'VE proposal', pkg: 'Structure', val: '−80,000', valTone: 'red', margin: 'n/a', eot: '—', holding: '—', holdMeta: 'approved 22 Jan', statusLabel: 'Approved', tone: 'green', aging: 'linked PKG-001' },
  { ref: 'VO-004', title: 'Additional EV charging infrastructure', dir: 'add', type: 'New scope', origin: 'Client request', pkg: 'External · MEP', val: '+120,000', valTone: 'amber', margin: '11.2%', eot: '—', holding: 'Client (Engineer)', holdMeta: 'submitted 16 May', statusLabel: 'Quote submitted', tone: 'gray', aging: '12 days · within terms' },
  { ref: 'VO-005', title: 'Façade colour change request', dir: 'sub', type: 'Amendment', origin: 'RFI-018', pkg: 'Finishes', val: '+60,000', valTone: 'muted', margin: '—', eot: '—', holding: '—', holdMeta: 'rejected 04 May', statusLabel: 'Rejected', tone: 'red', aging: 'client withdrew request' },
  { ref: 'VO-006', title: 'MEP shaft relocation L4–L8', dir: 'sub', type: 'Amendment', origin: 'DR-Rev-C', pkg: 'MEP · Structure', val: '+145,000', valTone: 'green', margin: '8.2%', eot: '+3 days', holding: 'Mira Khalil (QS)', holdMeta: 'repricing rev 3', statusLabel: 'Under negotiation', tone: 'amber', aging: '12 days · 3rd cycle', detail: true },
  { ref: 'VO-007', title: 'Additional generator capacity 250kVA', dir: 'add', type: 'New scope', origin: 'EI-016', pkg: 'MEP', val: '+320,000', valTone: 'green', margin: '9.8%', eot: '+7 days', holding: 'Client (Engineer)', holdMeta: 'submitted 10 May', statusLabel: 'Quote submitted', tone: 'gray', aging: '18 days · overdue chase' },
  { ref: 'VO-008', title: 'External hardscape redesign — landscaping', dir: 'sub', type: 'Amendment', origin: 'EI-018', pkg: 'External', val: 'TBD', valTone: 'muted', margin: '—', eot: 'TBD', holding: 'Mira Khalil (QS)', holdMeta: 'pricing in progress', statusLabel: 'Notified to client', tone: 'gray', aging: '5 days · within terms' },
  { ref: 'VO-009', title: 'Roof waterproofing spec upgrade', dir: 'add', type: 'Amendment', origin: 'EI-019', pkg: 'Finishes', val: '+95,000', valTone: 'green', margin: '11.5%', eot: '—', holding: 'James Chen (CM)', holdMeta: 'since 26 May', statusLabel: 'Internal review', tone: 'gray', aging: '2 days · needs action' },
  { ref: 'VO-010', title: 'B4 mechanical room extension', dir: 'add', type: 'New scope', origin: 'Site condition', pkg: 'Structure · MEP', val: 'in progress', valTone: 'muted', margin: '—', eot: 'TBD', holding: 'Mira Khalil (QS)', holdMeta: 'drafting', statusLabel: 'Draft', tone: 'gray', aging: '1 day' },
]

function openVo(row: VoRow) {
  if (row.detail) {
    showScreen('vo-detail')
  } else {
    toast.info(row.ref + ' — detail not available for this VO in the prototype.')
  }
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
.ik-card-row:hover { background-color: var(--surface-blueprint-1); }
[data-theme='dark'] .ik-card-row:hover { background-color: var(--surface-blueprint-2); }
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
