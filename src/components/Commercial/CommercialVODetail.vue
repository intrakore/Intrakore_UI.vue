<template>
  <div class="flex flex-col gap-6">

    <!-- Hero / header -->
    <div
      class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full flex items-start justify-between gap-4 flex-wrap"
      style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
    >
      <div>
        <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:var(--font-display)">VO-006-R2 · MEP shaft relocation L4–L8</h1>
        <p class="text-[13px] font-semibold text-ink-blueprint-4 m-0 mt-1" style="font-family:var(--font-body)">Variation order · Skyline Business Bay · INT-26-014</p>
        <div class="flex items-center gap-2 text-[12px] text-ink-gray-6 flex-wrap mt-3" style="font-family:var(--font-body)">
          <CommercialStatusPill label="Under negotiation" tone="amber" dot-tone="gray" />
          <span class="text-ink-gray-3">·</span>
          <span>Currently Rev 2 · AED 145,000 · margin 8.2% · EOT +3 days</span>
          <span class="text-ink-gray-3">·</span>
          <span>Holding with client (Engineer) · 7 days</span>
        </div>
      </div>
      <button
        type="button"
        class="px-3.5 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 shrink-0"
        style="font-family:var(--font-body)"
        @click="showScreen('vo-register')"
      >← Back to register</button>
    </div>

    <!-- Tabs -->
    <div class="flex items-center gap-1 border-b border-outline-gray-2 overflow-x-auto">
      <button
        type="button"
        class="px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors focus:outline-none"
        :class="activeTab === 'narrative' ? 'text-ink-blueprint-4 border-outline-blueprint-3' : 'text-ink-gray-5 border-transparent hover:text-ink-blueprint-4'"
        style="font-family:var(--font-body)"
        @click="activeTab = 'narrative'"
      >Narrative</button>
      <button
        type="button"
        class="px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors focus:outline-none"
        :class="activeTab === 'docs' ? 'text-ink-blueprint-4 border-outline-blueprint-3' : 'text-ink-gray-5 border-transparent hover:text-ink-blueprint-4'"
        style="font-family:var(--font-body)"
        @click="activeTab = 'docs'"
      >Supporting documents <span class="ml-1 text-[10px] opacity-70">4</span></button>
      <button
        type="button"
        class="px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors focus:outline-none"
        :class="activeTab === 'time' ? 'text-ink-blueprint-4 border-outline-blueprint-3' : 'text-ink-gray-5 border-transparent hover:text-ink-blueprint-4'"
        style="font-family:var(--font-body)"
        @click="activeTab = 'time'"
      >Time impact</button>
      <button
        type="button"
        class="px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors focus:outline-none"
        :class="activeTab === 'pricing' ? 'text-ink-blueprint-4 border-outline-blueprint-3' : 'text-ink-gray-5 border-transparent hover:text-ink-blueprint-4'"
        style="font-family:var(--font-body)"
        @click="activeTab = 'pricing'"
      >Pricing <span class="ml-1 text-[10px] opacity-70">R2</span></button>
      <button
        type="button"
        class="px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors focus:outline-none"
        :class="activeTab === 'activity' ? 'text-ink-blueprint-4 border-outline-blueprint-3' : 'text-ink-gray-5 border-transparent hover:text-ink-blueprint-4'"
        style="font-family:var(--font-body)"
        @click="activeTab = 'activity'"
      >Activity log <span class="ml-1 text-[10px] opacity-70">9</span></button>
    </div>

    <!-- Narrative pane -->
    <div v-show="activeTab === 'narrative'" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
      <div class="flex items-center gap-2 mb-3.5">
        <span class="text-[11px] font-bold uppercase tracking-[0.07em] text-ink-blueprint-4" style="font-family:var(--font-body)">Narrative</span>
        <span class="flex-1 h-px bg-outline-gray-2" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="rounded-lg bg-surface-gray-1 p-3">
          <p class="text-[10px] font-bold uppercase tracking-[0.07em] text-ink-gray-5 m-0 mb-1.5" style="font-family:var(--font-body)">Direction</p>
          <p class="text-[13px] text-ink-gray-7 m-0 flex items-center gap-2" style="font-family:var(--font-body)">
            <span class="inline-flex items-center justify-center size-[20px] rounded-full text-[11px] font-bold bg-surface-blueprint-1 text-ink-blueprint-4">≈</span>
            Substitution
          </p>
        </div>
        <div v-for="f in narrativeFields" :key="f.label" class="rounded-lg bg-surface-gray-1 p-3" :class="f.full ? 'sm:col-span-2' : ''">
          <p class="text-[10px] font-bold uppercase tracking-[0.07em] text-ink-gray-5 m-0 mb-1.5" style="font-family:var(--font-body)">{{ f.label }}</p>
          <p class="text-[13px] text-ink-gray-7 m-0" :class="f.full ? 'leading-[1.5]' : ''" style="font-family:var(--font-body)">{{ f.value }}</p>
        </div>
      </div>
    </div>

    <!-- Docs pane -->
    <div v-show="activeTab === 'docs'" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-[11px] font-bold uppercase tracking-[0.07em] text-ink-blueprint-4" style="font-family:var(--font-body)">Supporting documents</span>
        <span class="flex-1 h-px bg-outline-gray-2" />
      </div>
      <div class="flex flex-col gap-2.5">
        <div v-for="d in docs" :key="d.name" class="rounded-lg bg-surface-gray-1 px-3.5 py-2.5 flex items-center gap-2.5">
          <span class="text-ink-gray-5 text-[14px]">▢</span>
          <span class="text-[13px] text-ink-gray-7" style="font-family:var(--font-body)">{{ d.name }}</span>
          <span class="ml-auto text-[10px] text-ink-gray-5" style="font-family:var(--font-body)">{{ d.meta }}</span>
        </div>
      </div>
    </div>

    <!-- Time pane -->
    <div v-show="activeTab === 'time'" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
      <div class="flex items-center gap-2 mb-3.5">
        <span class="text-[11px] font-bold uppercase tracking-[0.07em] text-ink-blueprint-4" style="font-family:var(--font-body)">Time impact (EOT)</span>
        <span class="flex-1 h-px bg-outline-gray-2" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="f in timeFields" :key="f.label" class="rounded-lg bg-surface-gray-1 p-3" :class="f.full ? 'sm:col-span-2' : ''">
          <p class="text-[10px] font-bold uppercase tracking-[0.07em] text-ink-gray-5 m-0 mb-1.5" style="font-family:var(--font-body)">{{ f.label }}</p>
          <p class="text-[13px] m-0" :class="[f.full ? 'leading-[1.5]' : '', f.muted ? 'text-ink-gray-5' : 'text-ink-gray-7']" style="font-family:var(--font-body)">{{ f.value }}</p>
        </div>
      </div>
    </div>

    <!-- Pricing pane -->
    <div v-show="activeTab === 'pricing'" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
      <div class="flex items-center justify-between gap-3 flex-wrap mb-3">
        <div class="flex items-center gap-2">
          <span class="text-[11px] font-bold uppercase tracking-[0.07em] text-ink-blueprint-4" style="font-family:var(--font-body)">Pricing summary</span>
          <span class="text-[11px] text-ink-gray-5" style="font-family:var(--font-body)">Rev 2 (current) · read-only here</span>
        </div>
        <button
          type="button"
          class="px-3.5 py-2 rounded-lg bg-ink-blueprint-4 text-white text-[12px] font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          style="font-family:var(--font-body)"
          @click="toast.info('Open pricing — not yet built in this prototype.')"
        >Open pricing →</button>
      </div>
      <div class="flex items-center gap-2 mb-3.5 flex-wrap">
        <span class="px-3 py-1.5 rounded-lg border border-outline-gray-3 text-[11.5px] font-semibold text-ink-gray-6" style="font-family:var(--font-body)">Rev 0 · 168K</span>
        <span class="px-3 py-1.5 rounded-lg border border-outline-gray-3 text-[11.5px] font-semibold text-ink-gray-6" style="font-family:var(--font-body)">Rev 1 · 152K</span>
        <span class="px-3 py-1.5 rounded-lg border border-outline-blueprint-3 bg-surface-blueprint-1 text-[11.5px] font-semibold text-ink-blueprint-4" style="font-family:var(--font-body)">Rev 2 · 145K (current)</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-outline-gray-2">
              <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Cost line</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Cost (AED)</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Markup</th>
              <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Sell (AED)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in pricingRows" :key="row.label" class="border-b border-outline-gray-2 last:border-b-0">
              <td class="px-3 py-2.5 text-[13px]" :class="row.highlight ? 'text-ink-blueprint-4' : 'text-ink-gray-7'" style="font-family:var(--font-body)">{{ row.label }}</td>
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ row.cost }}</td>
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ row.markup }}</td>
              <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ row.sell }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="border-t-2 border-outline-gray-2">
              <td class="px-3 py-2.5 text-[13px] font-semibold text-ink-gray-8" style="font-family:var(--font-body)">Total cost</td>
              <td class="px-3 py-2.5 text-[13px] font-bold text-ink-gray-8 text-right whitespace-nowrap" style="font-family:var(--font-body)">129,700</td>
              <td colspan="2" />
            </tr>
            <tr>
              <td class="px-3 py-2.5 text-[13px] font-bold text-ink-gray-8" style="font-family:var(--font-body)">Total sell · Rev 2 value</td>
              <td colspan="2" />
              <td class="px-3 py-2.5 text-[13px] font-bold text-ink-green-3 text-right whitespace-nowrap" style="font-family:var(--font-body)">145,000</td>
            </tr>
            <tr>
              <td class="px-3 py-2.5 text-[12px] text-ink-gray-5" style="font-family:var(--font-body)">Gross margin</td>
              <td colspan="2" />
              <td class="px-3 py-2.5 text-[13px] font-semibold text-ink-amber-3 text-right whitespace-nowrap" style="font-family:var(--font-body)">8.2%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <!-- Activity pane -->
    <div v-show="activeTab === 'activity'" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-[11px] font-bold uppercase tracking-[0.07em] text-ink-blueprint-4" style="font-family:var(--font-body)">Activity log</span>
        <span class="flex-1 h-px bg-outline-gray-2" />
      </div>
      <div class="flex flex-col gap-4">
        <div v-for="(m, i) in activityMsgs" :key="i" class="flex gap-3" :class="m.side === 'approval' ? 'justify-end' : 'justify-start'">
          <div class="size-9 rounded-full bg-ink-blueprint-4 text-white flex items-center justify-center text-[12px] font-bold shrink-0" style="font-family:var(--font-body)">{{ m.init }}</div>
          <div class="max-w-[70%] rounded-lg p-3.5" :class="m.side === 'approval' ? 'bg-surface-green-1' : 'bg-surface-gray-1'">
            <div class="flex items-baseline justify-between gap-2 flex-wrap mb-2">
              <div>
                <span class="text-[12px] font-bold text-ink-gray-8" style="font-family:var(--font-body)">{{ m.author }}</span>
                <span class="text-[10px] text-ink-gray-5 ml-1.5" style="font-family:var(--font-body)">{{ m.role }}</span>
              </div>
              <span class="text-[10px] text-ink-gray-5" style="font-family:var(--font-body)">{{ m.time }}</span>
            </div>
            <div class="text-[12px] text-ink-gray-7 leading-[1.45]" style="font-family:var(--font-body)">
              <span
                class="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-[0.04em] mr-2"
                :class="{
                  'bg-surface-blueprint-1 text-ink-blueprint-4': m.tag === 'resp',
                  'bg-surface-green-1 text-ink-green-3': m.tag === 'approval',
                  'bg-surface-amber-1 text-ink-amber-3': m.tag === 'rev' || m.tag === 'created',
                }"
              >{{ m.tagLabel }}</span>
              <span v-html="m.text" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sticky action bar -->
    <div class="sticky bottom-0 z-10 ik-card rounded-xl border border-outline-gray-2 bg-surface-white px-5 py-3.5 flex items-center justify-between gap-3 flex-wrap">
      <div class="flex items-center gap-2.5">
        <CommercialStatusPill label="Under negotiation" tone="amber" dot-tone="gray" />
        <span class="text-[12px] text-ink-gray-5" style="font-family:var(--font-body)">Rev 2 with client · 7 days · within terms</span>
      </div>
      <div class="flex items-center gap-2.5 flex-wrap">
        <button type="button" class="px-3.5 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2" style="font-family:var(--font-body)" @click="toast.info('Mark withdrawn — not yet built in this prototype.')">Mark withdrawn</button>
        <button type="button" class="px-3.5 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2" style="font-family:var(--font-body)" @click="toast.info('Mark rejected — not yet built in this prototype.')">Mark rejected</button>
        <button type="button" class="px-3.5 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2" style="font-family:var(--font-body)" @click="toast.info('Mark approved — not yet built in this prototype.')">Mark approved</button>
        <button type="button" class="px-3.5 py-2 rounded-lg bg-ink-blueprint-4 text-white text-[12.5px] font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2" style="font-family:var(--font-body)" @click="toast.info('Create Rev 3 — not yet built in this prototype.')">+ Create Rev 3</button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CommercialStatusPill from './CommercialStatusPill.vue'
import { showScreen } from './commercialNav'
import { toast } from '../Toast'

type Tab = 'narrative' | 'docs' | 'time' | 'pricing' | 'activity'
const activeTab = ref<Tab>('narrative')

interface Field {
  label: string
  value: string
  full?: boolean
  muted?: boolean
}

const narrativeFields: Field[] = [
  { label: 'Type', value: 'Amendment to existing scope' },
  { label: 'Origin', value: 'Drawing revision · client-initiated' },
  { label: 'Contract clause invoked', value: 'FIDIC Sub-Clause 13.3 (variation by request)' },
  { label: 'Linked packages', value: 'PKG-005 (MEP risers) · PKG-002 (Structure shaft openings)' },
  { label: 'Linked BOQ lines', value: '4.1, 4.2 (amended) · 3.1 (new opening)' },
  { label: 'Description', value: 'Relocation of MEP service shafts from the original north-perimeter location (L4–L8) to a central core position. Includes (a) new RC openings in central core walls L4–L8, (b) sealing of original north shaft penetrations, (c) re-routing of electrical risers, mechanical ducting and plumbing stacks through the new shaft, (d) revised access doors and fire-stopping per updated drawings.', full: true },
  { label: 'Contractual narrative', value: 'Pursuant to drawing revision DR-MEP-104 Rev C issued 26 Apr 2026, the contractor is instructed to relocate MEP service shafts L4–L8. This variation arises from a coordination conflict identified in the design between the structural primary frame and the original shaft routing. The contractor reserves rights under FIDIC 13.3 to claim cost and time impact, including productivity loss on works in progress at the time of instruction (RC works to L4 were 70% complete).', full: true },
]

const timeFields: Field[] = [
  { label: 'Current EOT claimed', value: '+3 calendar days' },
  { label: 'Revised completion date', value: '15 Mar 2027 (was 12 Mar 2027)' },
  { label: 'Critical path impact', value: 'Yes — MEP first-fix L5' },
  { label: 'Programme module reference', value: 'to be linked when Programme module live', muted: true },
  { label: 'EOT narrative', value: 'Sequence impact: relocation of L4–L8 risers interrupts ongoing first-fix on L4. Recovery plan involves out-of-sequence first-fix at L5 with re-entry at L4 once new shaft openings are formed. Net programme impact +3 days after acceleration measures (overtime on L5 structural openings).', full: true },
]

const docs = [
  { name: 'DR-MEP-104 Rev C', meta: 'drawing · 26 Apr' },
  { name: 'EI-014 — shaft relocation instruction', meta: 'EI · 28 Apr' },
  { name: 'SC quote rev 0 — Emirates MEP Co.', meta: 'quote · AED 89K · 02 May' },
  { name: 'SC quote rev 2 — Emirates MEP Co.', meta: 'quote · AED 76K · 20 May' },
]

interface PricingRow {
  label: string
  cost: string
  markup: string
  sell: string
  highlight?: boolean
}

const pricingRows: PricingRow[] = [
  { label: 'Subcontracted MEP (Emirates MEP Co. rev 2)', cost: '76,000', markup: '12.0%', sell: '85,120' },
  { label: 'RC openings — labour & formwork', cost: '9,720', markup: '15.0%', sell: '11,178' },
  { label: 'RC openings — material (rebar & concrete)', cost: '7,560', markup: '10.0%', sell: '8,316' },
  { label: 'Sealing original shaft penetrations', cost: '5,320', markup: '15.0%', sell: '6,118' },
  { label: 'Coordination & supervision (prelims share)', cost: '13,800', markup: '10.0%', sell: '15,180' },
  { label: 'Acceleration overtime (EOT reduction rev 1→2)', cost: '17,300', markup: '10.0%', sell: '19,030', highlight: true },
]

interface ActivityMsg {
  init: string
  author: string
  role: string
  time: string
  side: 'internal' | 'approval'
  tag: 'resp' | 'approval' | 'rev' | 'created'
  tagLabel: string
  text: string
}

const activityMsgs: ActivityMsg[] = [
  { init: 'MK', author: 'Mira Khalil', role: 'QS · Designsmith', time: '22 May, 14:38', side: 'internal', tag: 'resp', tagLabel: 'Rev 2 submitted', text: 'Rev 2 quote submitted to client at AED 145,000 · margin 8.2%. EOT reduced from +4 to +3 days via additional acceleration of L5 structural openings.' },
  { init: 'JC', author: 'James Chen', role: 'CM · Designsmith', time: '22 May, 11:14', side: 'approval', tag: 'approval', tagLabel: 'Internal review · Rev 2', text: '<strong>Approved.</strong> Reason: Within margin floor (8.2% above 6.8% threshold). Comment: "Accept the floor for this rev. Any further client push triggers Director escalation per DD-030."' },
  { init: 'MK', author: 'Mira Khalil', role: 'QS · Designsmith', time: '21 May, 16:30', side: 'internal', tag: 'rev', tagLabel: 'Rev 2 created', text: 'Reason: <strong>Client comments — margin pressure</strong>. Client comments: "Rev 1 at AED 152K still 8% above our internal estimate. Prelims allocation seems high. Request rev 2."' },
  { init: 'MK', author: 'Mira Khalil', role: 'QS · Designsmith', time: '14 May, 16:05', side: 'internal', tag: 'resp', tagLabel: 'Rev 1 submitted', text: 'Rev 1 quote submitted to client at AED 152,000 · margin 9.8%.' },
  { init: 'JC', author: 'James Chen', role: 'CM · Designsmith', time: '14 May, 14:48', side: 'approval', tag: 'approval', tagLabel: 'Internal review · Rev 1', text: '<strong>Approved.</strong> Margin 9.8% within threshold. No comments.' },
  { init: 'MK', author: 'Mira Khalil', role: 'QS · Designsmith', time: '02 May, 10:22', side: 'internal', tag: 'resp', tagLabel: 'Rev 0 submitted · Notified', text: 'Initial quote submitted to client at AED 168,000 · margin 12.5% · EOT +5 days.' },
  { init: 'MK', author: 'Mira Khalil', role: 'QS · Designsmith', time: '28 Apr, 14:15', side: 'internal', tag: 'created', tagLabel: 'VO-006 created', text: "Variation order created · Draft status · Linked to PKG-005, PKG-002 · Origin: drawing revision DR-MEP-104 Rev C / EI-014." },
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
</style>
