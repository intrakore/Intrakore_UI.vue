<template>
  <div class="flex flex-col gap-6">

    <!-- Hero / header -->
    <div
      class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full"
      style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
    >
    <div class="flex gap-5 items-end w-full">
        <div class="flex flex-col gap-0.5 flex-1 min-w-0">
      <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:'ITC Avant Garde Gothic Pro'">Your commercial portfolio</h1>
      <p class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] m-0 mt-1" style="font-family:var(--font-body); font-weight:350;">
        Every project you're managing — financials, risk and status at a glance.
      </p>
      <div class="flex gap-2 items-center mt-3 flex-wrap">
  <span class="inline-flex items-center gap-2 bg-surface-amber-1 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-amber-3 tracking-[0.24px]" style="font-family: var(--font-body);">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M5.134 1.93a1 1 0 0 1 1.732 0l4.33 7.5A1 1 0 0 1 10.33 11H1.67a1 1 0 0 1-.866-1.5l4.33-7.5Z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/>
      <line x1="6" y1="5" x2="6" y2="7.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
      <circle cx="6" cy="9.25" r="0.55" fill="currentColor"/>
    </svg>
    2 need attention
  </span>
  <span class="inline-flex items-center gap-2 bg-surface-blueprint-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-blueprint-4 tracking-[0.24px]" style="font-family: var(--font-body);">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M3.5 2.5L9.5 6 3.5 9.5V2.5Z" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
    </svg>
    4 active projects
  </span>
  <span class="inline-flex items-center gap-2 bg-surface-green-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-green-3 tracking-[0.24px]" style="font-family: var(--font-body);">
    AED 153.6M portfolio value
  </span>
  </div>
  </div>
  </div>
</div>

    <!-- Toolbar -->
    <div class="flex items-center gap-3 flex-wrap">
      <div class="flex items-center gap-3">
        <button
          v-for="chip in chips" :key="chip.key"
          type="button"
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12.5px] font-semibold border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          :class="filter === chip.key
            ? 'bg-surface-blueprint-5 border-surface-blueprint-5 text-white'
            : 'bg-surface-white border-outline-gray-2 text-ink-gray-7 hover:border-outline-blueprint-3'"
          style="font-family:var(--font-body)"
          @click="filter = chip.key"
        >
        <span
            v-if="chip.key === 'live'"
            class="size-2 rounded-full bg-surface-green-3 shrink-0"
          />
          <span
          v-else-if="chip.key === 'closing'"
          class="size-2 rounded-full bg-surface-blueprint-4 shrink-0"
        />
          {{ chip.label }}
          <span
            class="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10.5px] font-semibold"
            :class="filter === chip.key ? 'bg-white/20 text-white' : 'bg-surface-gray-2 text-ink-gray-6'"
          >{{ chip.count }}</span>
        </button>
      </div>

      <div class="flex-1" />

      <div class="flex items-center gap-1 rounded-md border border-outline-gray-2 bg-surface-white p-0.5">
        <button
          type="button"
          class="px-3 py-1.5 rounded text-[12.5px] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          :class="view === 'cards' ? 'bg-surface-blueprint-2 text-ink-blueprint-4' : 'text-ink-gray-6 hover:text-ink-blueprint-4'"
          style="font-family:var(--font-body)"
          @click="view = 'cards'"
        >⊞ Cards</button>
        <button
          type="button"
          class="px-3 py-1.5 rounded text-[12.5px] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          :class="view === 'table' ? 'bg-surface-blueprint-2 text-ink-blueprint-4' : 'text-ink-gray-6 hover:text-ink-blueprint-4'"
          style="font-family:var(--font-body)"
          @click="view = 'table'"
        >▤ Table</button>
      </div>
    </div>

    <!-- Card grid -->
    <div v-if="view === 'cards'" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div
        v-for="p in filteredProjects" :key="p.id"
        class="ik-card rounded-xl border border-outline-gray-2 bg-surface-gray-1 flex flex-col gap-4 px-5 pt-6 pb-6 w-full cursor-pointer transition-colors hover:border-outline-blueprint-3"
        @click="openProject(p)"
      >
        <!-- head -->
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-[16px] font-semibold leading-6 text-ink-gray-8 m-0" style="font-family:var(--font-body)">{{ p.name }}</p>
            <p class="text-[12px] leading-5 text-ink-gray-6 m-0" style="font-family:var(--font-body)">{{ p.id }}</p>
          </div>
          <CommercialStatusPill 
          :label="p.statusLabel" 
          :tone="p.status === 'live' ? 'green' : 'blueprint'" 
          :pulse="p.status === 'live'" 
          :dot-tone="p.status === 'live' ? 'green' : 'blueprint'" 
        />
        </div>

        <!-- meta chips -->
        <div class="flex items-center gap-2 flex-wrap">
          <span class="px-2.5 py-1 rounded-md bg-surface-gray-2 text-[11px] font-medium text-ink-gray-7" style="font-family:var(--font-body)">Month {{ p.month }} of {{ p.totalMonths }}</span>
          <span class="px-2.5 py-1 rounded-md bg-surface-gray-2 text-[11px] font-medium text-ink-gray-7" style="font-family:var(--font-body)">{{ p.tier }}</span>
          <span
            class="px-2.5 py-1 rounded-md text-[12px] font-medium"
            :class="p.marginClass === 'green' ? 'bg-surface-green-2 text-ink-green-3' : 'bg-surface-amber-1 text-ink-amber-3'"
            style="font-family:var(--font-body)"
          >Margin {{ p.marginPct }}%</span>
        </div>

        <!-- progress -->
        <div class="flex flex-col gap-1.5">
          <div class="h-1.5 rounded-full bg-surface-gray-2 overflow-hidden">
            <div
              class="h-full rounded-full"
              :class="p.progressClass === 'green' ? 'bg-surface-green-3' : p.progressClass === 'amber' ? 'bg-surface-amber-2' : 'bg-surface-blueprint-5'"
              :style="{ width: p.progressPct + '%' }"
            />
          </div>
          <div class="flex items-center justify-between text-[12px] text-ink-gray-6" style="font-family:var(--font-body)">
            <span>{{ p.progressPct }}% complete</span>
            <span>{{ p.status === 'closing' ? 'Final account in progress' : (p.totalMonths - p.month) + ' months remaining' }}</span>
          </div>
        </div>

        <!-- kpi pair -->
       <div class="flex gap-8">
          <!-- Contract Value -->
          <div class="flex-1 flex-col items-center justify-center p-6 rounded-lg border border-outline-gray-2 bg-surface-gray-2 text-center">
            <p class="text-[14px] font-semibold uppercase tracking-[0.04em] text-ink-gray-8 m-0 mb-1.5" style="font-family:var(--font-body)">Contract value</p>
            <p class="text-[16px] font-semibold text-ink-gray-9 m-0" style="font-family:var(--font-body)">{{ p.contractValue }}</p>
            <p class="text-[12px] text-ink-gray-6 m-0 mt-0.5" style="font-family:var(--font-body)">Certified {{ p.certified }}</p>
          </div>

          <!-- Forecasted Cost -->
          <div class="flex-1 flex-col items-center justify-center p-6 rounded-lg border border-outline-gray-2 bg-surface-gray-2 text-center">
            <p class="text-[14px] font-semibold uppercase tracking-[0.04em] text-ink-gray-8 m-0 mb-1.5" style="font-family:var(--font-body)">Forecasted cost</p>
            <p class="text-[16px] font-semibold text-ink-gray-9 m-0" style="font-family:var(--font-body)">{{ p.fcc }}</p>
            <p
              class="text-[12px] m-0 mt-0.5 font-semibold"
              :class="p.fccSubClass === 'green' ? 'text-ink-green-3' : 'text-ink-amber-3'"
              style="font-family:var(--font-body)"
            >{{ p.fccSub }}</p>
            
          </div>
        </div>

        <!-- kore footer -->
        <div
          class="flex items-start gap-2 pt-3 border-t border-outline-gray-2 text-[12px] leading-[1.4]"
          :class="p.koreClass === 'warn' ? 'text-ink-amber-3' : 'text-ink-gray-6'"
          style="font-family:var(--font-body)"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="shrink-0 mt-0.5">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
        </svg>
          <span>{{ p.kore }}</span>
        </div>
      </div>
    </div>

    <!-- Table view -->
    <div v-else class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white flex flex-col w-full overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="border-b border-outline-gray-2">
            <th v-for="h in tableHeaders" :key="h.label" class="text-left px-5 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" :class="h.num ? 'text-right' : ''" style="font-family:var(--font-body)">{{ h.label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="p in filteredProjects" :key="p.id"
            class="ik-card-row border-b border-outline-gray-2 last:border-b-0 cursor-pointer"
            @click="openProject(p)"
          >
            <td class="px-5 py-3">
              <p class="text-[14px] font-medium leading-[1.15] text-ink-gray-8 tracking-[0.28px] truncate m-0" style="font-family:var(--font-body)">{{ p.name }}</p>
              <p class="text-[12px] font-medium leading-[1.15] text-ink-gray-6 tracking-[0.24px] truncate m-0" style="font-family:var(--font-body)">{{ p.id }}</p>
            </td>
            <td class="px-5 py-3">
             <CommercialStatusPill 
              :label="p.statusLabel" 
              :tone="p.status === 'live' ? 'green' : 'blueprint'" 
              :pulse="p.status === 'live'" 
              :dot-tone="p.status === 'live' ? 'green' : 'blueprint'" 
            />
            </td>
            <td class="px-5 py-3 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">Month {{ p.month }} of {{ p.totalMonths }} · {{ p.progressPct }}%</td>
            <td class="px-5 py-3 text-right text-[13px] text-ink-gray-8 whitespace-nowrap" style="font-family:var(--font-body)">{{ p.contractValue }}</td>
            <td class="px-5 py-3 text-right text-[13px] text-ink-gray-8 whitespace-nowrap" style="font-family:var(--font-body)">{{ p.certified }}</td>
            <td class="px-5 py-3 text-right text-[13px] text-ink-gray-8 whitespace-nowrap" style="font-family:var(--font-body)">{{ p.fcc }}</td>
            <td class="px-5 py-3 text-right text-[13px] font-semibold whitespace-nowrap" :class="p.marginClass === 'green' ? 'text-ink-green-3' : 'text-ink-amber-3'" style="font-family:var(--font-body)">{{ p.marginPct }}%</td>
            <td class="px-5 py-3 text-[12px] whitespace-nowrap" :class="p.koreClass === 'warn' ? 'text-ink-amber-3' : 'text-ink-gray-4'" style="font-family:var(--font-body)">
              <span v-if="p.koreClass === 'warn'">✦ 3 items</span>
              <span v-else>—</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CommercialStatusPill from './CommercialStatusPill.vue'
import { showScreen } from './commercialNav'
import { toast } from '../Toast'

interface Project {
  id: string
  name: string
  status: 'live' | 'closing'
  statusLabel: string
  month: number
  totalMonths: number
  tier: string
  marginPct: number
  marginClass: 'green' | 'amber'
  progressPct: number
  progressClass: 'green' | 'amber' | ''
  contractValue: string
  certified: string
  fcc: string
  fccSub: string
  fccSubClass: 'green' | 'amber'
  kore: string
  koreClass: 'warn' | 'muted'
  hasDetail: boolean
}

const projects: Project[] = [
  {
    id: 'INT-26-014', name: 'Skyline Business Bay',
    status: 'live', statusLabel: 'Live',
    month: 7, totalMonths: 18, tier: 'Pro',
    marginPct: 8.3, marginClass: 'amber',
    progressPct: 38, progressClass: 'amber',
    contractValue: 'AED 30.0M', certified: '11.4M',
    fcc: 'AED 27.5M', fccSub: '+0.3M vs base', fccSubClass: 'amber',
    kore: 'SC-007 (MEP) running 14% above curve · IPA-007 awaiting client cert · 7 BOQ lines unallocated',
    koreClass: 'warn', hasDetail: true,
  },
  {
    id: 'INT-26-018', name: 'Marina Crest Tower',
    status: 'live', statusLabel: 'Live',
    month: 3, totalMonths: 22, tier: 'Pro',
    marginPct: 11.2, marginClass: 'green',
    progressPct: 14, progressClass: '',
    contractValue: 'AED 62.4M', certified: '4.8M',
    fcc: 'AED 55.4M', fccSub: 'On base', fccSubClass: 'green',
    kore: 'Substructure phase · 3 packages out for tender · no flags this cycle',
    koreClass: 'muted', hasDetail: false,
  },
  {
    id: 'INT-26-009', name: 'The Address Residences',
    status: 'live', statusLabel: 'Live',
    month: 11, totalMonths: 14, tier: 'Lite',
    marginPct: 9.4, marginClass: 'green',
    progressPct: 78, progressClass: 'green',
    contractValue: 'AED 24.8M', certified: '19.2M',
    fcc: 'AED 22.5M', fccSub: '−0.1M vs base', fccSubClass: 'green',
    kore: 'Approaching close-out · 2 variations pending final cert · final account opens next month',
    koreClass: 'muted', hasDetail: false,
  },
  {
    id: 'INT-25-091', name: 'Palm Jumeirah Villa V-118',
    status: 'closing', statusLabel: 'Closing',
    month: 17, totalMonths: 17, tier: 'Lite',
    marginPct: 12.8, marginClass: 'green',
    progressPct: 96, progressClass: 'green',
    contractValue: 'AED 36.4M', certified: '34.9M',
    fcc: 'AED 31.7M', fccSub: '−1.2M vs base', fccSubClass: 'green',
    kore: 'Final account submitted to client · awaiting agreement · retention release in 6 months',
    koreClass: 'muted', hasDetail: false,
  },
]

const view = ref<'cards' | 'table'>('cards')
const filter = ref<'all' | 'live' | 'closing'>('all')

const chips = [
  { key: 'all' as const, label: 'All', count: 4 },
  { key: 'live' as const, label: 'Live', count: 3 },
  { key: 'closing' as const, label: 'Closing', count: 1 },
]

const tableHeaders = [
  { label: 'Project' },
  { label: 'Status' },
  { label: 'Stage' },
  { label: 'Contract value', num: true },
  { label: 'Certified', num: true },
  { label: 'FCC', num: true },
  { label: 'Margin', num: true },
  { label: 'Flags' },
]

const filteredProjects = computed(() =>
  filter.value === 'all' ? projects : projects.filter((p) => p.status === filter.value)
)

function openProject(p: Project) {
  if (p.hasDetail) {
    showScreen('a0')
  } else {
    toast.info(`${p.name} — project home not yet built in this prototype.`)
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

