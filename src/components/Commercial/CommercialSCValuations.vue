<template>
  <div class="flex flex-col gap-6">

    <!-- Hero / header -->
    <div
      class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full"
      style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
    >
      <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:var(--font-display)">Skyline Business Bay</h1>
      <p class="text-[13px] font-semibold text-ink-blueprint-4 m-0 mt-1" style="font-family:var(--font-body)">Subcontractor valuations</p>
      <p class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] m-0 mt-1" style="font-family:var(--font-body); font-weight:350;">
        Review and certify monthly claims from awarded subcontractors.
      </p>
      <div class="flex items-center gap-2 text-[12px] text-ink-gray-6 flex-wrap mt-3" style="font-family:var(--font-body)">
        <span>April 2026 cycle</span>
        <span class="text-ink-gray-3">·</span>
        <span>5 claims received</span>
        <span class="text-ink-gray-3">·</span>
        <span class="text-ink-amber-3 font-semibold">2 awaiting QS review</span>
        <span class="text-ink-gray-3">·</span>
        <span>2 certified, awaiting CM</span>
        <span class="text-ink-gray-3">·</span>
        <span class="text-ink-green-3 font-semibold">1 paid</span>
      </div>
    </div>

    <!-- Cycle strip -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      <CommercialKpiCard label="This cycle claimed" value="AED 4,032,000" sub="across 5 SCs" />
      <CommercialKpiCard label="Certified so far" value="AED 332,000" sub="of 5 claims · 3 still open" />
      <CommercialKpiCard label="Cumulative certified to date" value="AED 8.6M" sub="since contract start" />
      <CommercialKpiCard label="Retention held" value="AED 860K" sub="10% across all SCs" />
      <CommercialKpiCard label="Cycle SLA" value="14 days" sub="from submission to certified" />
    </div>

    <!-- Toolbar -->
    <div class="flex items-center gap-3 flex-wrap">
      <select class="ik-select min-w-[200px]">
        <option selected>All claims (5)</option>
        <option>Awaiting QS review (2)</option>
        <option>QS reviewing (1)</option>
        <option>Awaiting CM approval (2)</option>
      </select>
      <select class="ik-select min-w-[180px]">
        <option selected>All packages</option>
        <option>PKG-001 Excavation</option>
        <option>PKG-002 Piling</option>
        <option>PKG-003+004 RC</option>
        <option>PKG-007 MEP</option>
        <option>PKG-012 Lifts</option>
      </select>
      <input type="text" placeholder="Search SC name or claim ref" class="ik-select flex-1 min-w-[200px]" />
    </div>

    <!-- Claims table -->
    <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-outline-gray-2">
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Subcontractor</th>
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">SC number</th>
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Package</th>
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Claim ref</th>
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Submitted</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Claimed (AED)</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Previously certified (AED)</th>
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Status</th>
              <th class="px-3 py-2.5" />
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in claims" :key="row.claimRef" class="ik-card-row border-b border-outline-gray-2 last:border-b-0 cursor-pointer" @click="openClaim(row)">
              <td class="px-3 py-2.5 text-[13px] font-medium text-ink-gray-8 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.sc }}</td>
              <td class="px-3 py-2.5 text-[12.5px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.scNumber }}</td>
              <td class="px-3 py-2.5 text-[12.5px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.pkg }}</td>
              <td class="px-3 py-2.5 text-[12.5px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.claimRef }}</td>
              <td class="px-3 py-2.5 text-[12.5px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ row.submitted }}</td>
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ row.claimed }}</td>
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ row.prevCertified }}</td>
              <td class="px-3 py-2.5 whitespace-nowrap"><CommercialStatusPill :label="row.statusLabel" :tone="row.tone" :dot-tone="row.dotTone" :pulse="row.pulse" /></td>
              <td class="px-3 py-2.5 whitespace-nowrap">
                <button
                  type="button"
                  class="px-2.5 py-1 rounded-md border border-outline-gray-3 text-[11px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
                  style="font-family:var(--font-body)"
                  @click.stop="openClaim(row)"
                >{{ row.action }}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-between gap-3 flex-wrap px-4 py-3 text-[11.5px] bg-surface-amber-1 text-ink-amber-3" style="font-family:var(--font-body)">
        <span><strong class="text-ink-amber-4">5 claims this cycle · AED 4,032,000 claimed.</strong> 2 still awaiting QS review · 1 mid-review · 2 routed for CM approval.</span>
        <span>✦ Kore: Multitech IPA-MEP-04 — claim is 14% above planned curve. Review on priority.</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import CommercialKpiCard from './CommercialKpiCard.vue'
import CommercialStatusPill from './CommercialStatusPill.vue'
import { showScreen } from './commercialNav'
import { toast } from '../Toast'

interface ClaimRow {
  sc: string
  scNumber: string
  pkg: string
  claimRef: string
  submitted: string
  claimed: string
  prevCertified: string
  statusLabel: string
  tone: 'green' | 'amber' | 'red' | 'gray'
  dotTone?: 'green' | 'amber' | 'red' | 'gray'
  pulse?: boolean
  action: string
  detail?: boolean
}

const claims: ClaimRow[] = [
  { sc: 'Multitech MEP', scNumber: 'INT-26-014-SC-004', pkg: 'PKG-007 · MEP combined', claimRef: 'IPA-MEP-04', submitted: '28 Apr 2026', claimed: '1,420,000', prevCertified: '2,180,000', statusLabel: 'Awaiting QS review', tone: 'amber', dotTone: 'gray', action: 'Review →', detail: true },
  { sc: 'Pillar Construction', scNumber: 'INT-26-014-SC-003', pkg: 'PKG-003+004 · RC', claimRef: 'IPA-RC-06', submitted: '28 Apr 2026', claimed: '2,100,000', prevCertified: '4,840,000', statusLabel: 'Awaiting QS review', tone: 'amber', dotTone: 'gray', action: 'Review →' },
  { sc: 'Vertical Systems', scNumber: 'INT-26-014-SC-007', pkg: 'PKG-012 · Lifts', claimRef: 'IPA-LIFT-02', submitted: '26 Apr 2026', claimed: '92,000', prevCertified: '220,000', statusLabel: 'QS reviewing', tone: 'gray', dotTone: 'amber', action: 'Continue →' },
  { sc: 'Al Sahel Civils', scNumber: 'INT-26-014-SC-001', pkg: 'PKG-001 · Excavation', claimRef: 'IPA-EXC-07', submitted: '22 Apr 2026', claimed: '180,000', prevCertified: '1,540,000', statusLabel: 'Certified, awaiting CM', tone: 'green', dotTone: 'green', pulse: true, action: 'View →' },
  { sc: 'Geotech FZE', scNumber: 'INT-26-014-SC-002', pkg: 'PKG-002 · Piling', claimRef: 'IPA-PIL-07', submitted: '22 Apr 2026', claimed: '240,000', prevCertified: '1,720,000', statusLabel: 'Certified, awaiting CM', tone: 'green', dotTone: 'green', pulse: true, action: 'View →' },
]

function openClaim(row: ClaimRow) {
  if (row.detail) {
    showScreen('scval-detail')
  } else {
    toast.info(row.sc + ' — claim detail not available for this row in the prototype.')
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
