<template>
  <div class="flex flex-col gap-6">

    <!-- Hero / header -->
    <div
      class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full flex items-start justify-between gap-4 flex-wrap"
      style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
    >
      <div>
        <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:var(--font-display)">Skyline Business Bay</h1>
        <p class="text-[13px] font-semibold text-ink-blueprint-4 m-0 mt-1" style="font-family:var(--font-body)">Subcontracts</p>
        <p class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] m-0 mt-1" style="font-family:var(--font-body); font-weight:350;">
          Track tender, award and pre-execution for every subcontracted package.
        </p>
        <div class="flex items-center gap-2 text-[12px] text-ink-gray-6 flex-wrap mt-3" style="font-family:var(--font-body)">
          <span>7 subcontracts</span>
          <span class="text-ink-gray-3">·</span>
          <span>5 awarded</span>
          <span class="text-ink-gray-3">·</span>
          <span>2 in tender</span>
          <span class="text-ink-gray-3">·</span>
          <span>AED 18.7M awarded</span>
          <span class="text-ink-gray-3">·</span>
          <span class="text-ink-amber-3 font-semibold">2 need action this week</span>
        </div>
      </div>
      <button
        type="button"
        class="px-3.5 py-2 rounded-md bg-surface-blueprint-5 text-[12.5px] font-medium text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 shrink-0"
        style="font-family:var(--font-body)"
        @click="procure"
      >+ Procure a package →</button>
    </div>

    <!-- Tabs -->
    <div class="flex items-center gap-1 border-b border-outline-gray-2 overflow-x-auto">
      <button
        type="button"
        class="px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors focus:outline-none"
        :class="a1bTab === 'action' ? 'text-ink-blueprint-4 border-outline-blueprint-3' : 'text-ink-amber-3 border-transparent hover:text-ink-blueprint-4'"
        style="font-family:var(--font-body)"
        @click="a1bTab = 'action'"
      >Action required <span class="ml-1 text-[10px] opacity-70">2</span></button>
      <button
        type="button"
        class="px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors focus:outline-none"
        :class="a1bTab === 'tender' ? 'text-ink-blueprint-4 border-outline-blueprint-3' : 'text-ink-gray-5 border-transparent hover:text-ink-blueprint-4'"
        style="font-family:var(--font-body)"
        @click="a1bTab = 'tender'"
      >In tender <span class="ml-1 text-[10px] opacity-70">2</span></button>
      <button
        type="button"
        class="px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors focus:outline-none"
        :class="a1bTab === 'all' ? 'text-ink-blueprint-4 border-outline-blueprint-3' : 'text-ink-gray-5 border-transparent hover:text-ink-blueprint-4'"
        style="font-family:var(--font-body)"
        @click="a1bTab = 'all'"
      >All subcontracts <span class="ml-1 text-[10px] opacity-70">7</span></button>
    </div>

    <!-- Pane: Action required -->
    <div v-show="a1bTab === 'action'" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="border-b border-outline-gray-2">
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Subcontract</th>
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Action</th>
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Age</th>
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Status</th>
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in actionRows" :key="row.id"
            class="ik-card-row border-b border-outline-gray-2 last:border-b-0"
            :class="row.id === 'INT-26-014-SC-005' ? 'cursor-pointer' : ''"
            @click="row.id === 'INT-26-014-SC-005' && showScreen('pkg-detail')"
          >
            <td class="px-4 py-2.5">
              <p class="text-[13px] font-medium leading-[1.15] text-ink-gray-8 m-0" style="font-family:var(--font-body)">{{ row.id }}</p>
              <p class="text-[12px] leading-[1.15] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">{{ row.pkg }}</p>
            </td>
            <td class="px-4 py-2.5 text-[13px] text-ink-gray-7" style="font-family:var(--font-body)">{{ row.action }}</td>
            <td class="px-4 py-2.5 text-[13px] font-semibold text-ink-amber-3 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.age }}</td>
            <td class="px-4 py-2.5 whitespace-nowrap"><CommercialStatusPill label="In tender" tone="amber" /></td>
            <td class="px-4 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.owner }}</td>
          </tr>
        </tbody>
      </table>
      <div class="flex items-center justify-between gap-3 flex-wrap px-4 py-3 text-[11.5px] bg-surface-amber-1 text-ink-amber-3" style="font-family:var(--font-body)">
        <span><strong>2 subcontracts in procurement need attention.</strong> Both are tenders closing this week.</span>
        <span>✦ Kore: front-load PKG-005 bid comparison — 3 of 4 bids in.</span>
      </div>
    </div>

    <!-- Pane: In tender -->
    <div v-show="a1bTab === 'tender'" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="border-b border-outline-gray-2">
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Subcontract</th>
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Package</th>
            <th class="text-right px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Target value (AED)</th>
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Bidders</th>
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Closes</th>
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in tenderRows" :key="row.id"
            class="ik-card-row border-b border-outline-gray-2 last:border-b-0"
            :class="row.id === 'INT-26-014-SC-005' ? 'cursor-pointer' : ''"
            @click="row.id === 'INT-26-014-SC-005' && showScreen('pkg-detail')"
          >
            <td class="px-4 py-2.5 text-[13px] font-medium text-ink-gray-8" style="font-family:var(--font-body)">{{ row.id }}</td>
            <td class="px-4 py-2.5 text-[13px] text-ink-gray-7" style="font-family:var(--font-body)">{{ row.pkg }}</td>
            <td class="px-4 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ row.value }}</td>
            <td class="px-4 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.bidders }}</td>
            <td class="px-4 py-2.5 text-[13px] font-semibold text-ink-amber-3 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.closes }}</td>
            <td class="px-4 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.owner }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pane: All subcontracts -->
    <div v-show="a1bTab === 'all'" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="border-b border-outline-gray-2">
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Subcontract</th>
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Subcontractor</th>
            <th class="text-right px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Value (AED)</th>
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Status</th>
            <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Context</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in allRows" :key="row.id"
            class="ik-card-row border-b border-outline-gray-2 last:border-b-0"
            :class="row.id === 'INT-26-014-SC-005' ? 'cursor-pointer' : ''"
            @click="row.id === 'INT-26-014-SC-005' && showScreen('pkg-detail')"
          >
            <td class="px-4 py-2.5">
              <p class="text-[13px] font-medium leading-[1.15] text-ink-gray-8 m-0" style="font-family:var(--font-body)">{{ row.id }}</p>
              <p class="text-[12px] leading-[1.15] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">{{ row.pkg }}</p>
            </td>
            <td class="px-4 py-2.5 text-[13px] whitespace-nowrap" :class="row.tba ? 'text-ink-gray-5 italic' : 'text-ink-gray-7'" style="font-family:var(--font-body)">{{ row.contractor }}</td>
            <td class="px-4 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ row.value }}</td>
            <td class="px-4 py-2.5 whitespace-nowrap">
              <CommercialStatusPill
                :label="row.status === 'active' ? 'Active' : 'In tender'"
                :tone="row.status === 'active' ? 'green' : 'amber'"
                :pulse="row.status === 'active'"
              />
            </td>
            <td class="px-4 py-2.5 text-[13px] whitespace-nowrap" :class="row.contextWarn ? 'text-ink-amber-3' : 'text-ink-gray-5'" style="font-family:var(--font-body)">{{ row.context || '—' }}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script setup lang="ts">
import CommercialStatusPill from './CommercialStatusPill.vue'
import { showScreen, a1bTab, a1aTab } from './commercialNav'

interface ActionRow {
  id: string
  pkg: string
  action: string
  age: string
  owner: string
}
const actionRows: ActionRow[] = [
  { id: 'INT-26-014-SC-005', pkg: 'PKG-005 Façade glazing', action: 'Tender closes Friday · 4 bidders, 3 returned', age: '2 days', owner: 'Rashid Hassan (QS)' },
  { id: 'INT-26-014-SC-006', pkg: 'PKG-006 Façade aluminium', action: 'Tender closes 22 Apr · 3 bidders', age: '5 days', owner: 'Rashid Hassan (QS)' },
]

interface TenderRow {
  id: string
  pkg: string
  value: string
  bidders: string
  closes: string
  owner: string
}
const tenderRows: TenderRow[] = [
  { id: 'INT-26-014-SC-005', pkg: 'PKG-005 Façade — glazing', value: '2,450,000', bidders: '4 invited · 3 returned', closes: 'Friday · 2d', owner: 'Rashid Hassan (QS)' },
  { id: 'INT-26-014-SC-006', pkg: 'PKG-006 Façade — aluminium', value: '1,180,000', bidders: '3 invited · 1 returned', closes: '22 Apr · 5d', owner: 'Rashid Hassan (QS)' },
]

interface AllRow {
  id: string
  pkg: string
  contractor: string
  tba?: boolean
  value: string
  status: 'active' | 'tender'
  context?: string
  contextWarn?: boolean
}
const allRows: AllRow[] = [
  { id: 'INT-26-014-SC-001', pkg: 'PKG-001 Excavation & earthworks', contractor: 'Al Sahel Civils', value: '1,790,000', status: 'active' },
  { id: 'INT-26-014-SC-002', pkg: 'PKG-002 Piling & shoring', contractor: 'Geotech FZE', value: '2,065,000', status: 'active', context: 'V-019 pending' },
  { id: 'INT-26-014-SC-003', pkg: 'PKG-003+004 RC sub+super (bundled)', contractor: 'Pillar Construction', value: '8,840,000', status: 'active' },
  { id: 'INT-26-014-SC-004', pkg: 'PKG-007 MEP — combined', contractor: 'Multitech MEP', value: '4,920,000', status: 'active', context: 'IPA-007-04 open in SC valuations' },
  { id: 'INT-26-014-SC-005', pkg: 'PKG-005 Façade — glazing', contractor: '— to be awarded —', tba: true, value: '2,450,000', status: 'tender', context: '⚠ Closes Friday', contextWarn: true },
  { id: 'INT-26-014-SC-006', pkg: 'PKG-006 Façade — aluminium', contractor: '— to be awarded —', tba: true, value: '1,180,000', status: 'tender', context: '⚠ Closes 22 Apr', contextWarn: true },
  { id: 'INT-26-014-SC-007', pkg: 'PKG-012 Lifts & vertical transport', contractor: 'Vertical Systems', value: '1,120,000', status: 'active' },
]

function procure() {
  a1aTab.value = 'summary'
  showScreen('a1a')
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
</style>
