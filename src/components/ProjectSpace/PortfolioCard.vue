<template>
  <div
    class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white flex flex-col w-full cursor-pointer overflow-hidden relative"
    style="box-shadow:0px 0px 0.5px rgba(0,0,0,0.12),0px 0.5px 1px rgba(0,0,0,0.15),0px 2px 1.5px rgba(0,0,0,0.16); transition:all 0.2s cubic-bezier(0.4,0,0.2,1)"
    @click="$emit('open', project.key)"
  >
    <!-- RAG top stripe -->
    <div
      class="h-[3px] w-full shrink-0"
      :class="{
        'bg-surface-red-1': project.card === 'red',
        'bg-surface-amber-1': project.card === 'amber',
        'bg-surface-green-1': project.card === 'green',
      }"
      :style="project.card === 'red' ? 'background-color:var(--red-600,#dc2626)' : project.card === 'amber' ? 'background-color:var(--amber-500,#f59e0b)' : 'background-color:var(--green-500,#10b981)'"
    ></div>

    <!-- Top: name + badge -->
    <div class="flex items-start justify-between px-4 pt-4 pb-0 gap-2">
      <div>
        <div class="text-[14px] font-semibold text-ink-gray-8 leading-[1.35]" style="font-family:var(--font-body)">{{ project.name }}</div>
        <div class="text-[10.5px] text-ink-gray-5 mt-0.5" style="font-family:var(--font-mono)">{{ project.code }}</div>
      </div>
      <span
        class="inline-flex items-center gap-2 rounded-full px-2 py-[4.5px] text-[12px] font-medium tracking-[0.24px] whitespace-nowrap shrink-0"
        :class="statusPillClass"
      >
        {{ statusLabel }}
      </span>
    </div>

    <!-- Meta row -->
    <div class="grid grid-cols-3 gap-0 px-4 py-3 border-b border-outline-gray-2 mt-3">
      <div class="pr-2">
        <div class="text-[9px] uppercase tracking-[0.07em] text-ink-gray-4 font-bold mb-1" style="font-family:var(--font-body)">Progress</div>
        <div class="text-[15px] font-bold leading-[1.2]" :class="progressValClass" style="font-family:var(--font-mono)">{{ project.progress }}%</div>
        <div class="text-[10px] text-ink-gray-5 mt-0.5" style="font-family:var(--font-body)">{{ project.prog }}</div>
      </div>
      <div class="pr-2">
        <div class="text-[9px] uppercase tracking-[0.07em] text-ink-gray-4 font-bold mb-1" style="font-family:var(--font-body)">Contract Value</div>
        <div class="text-[15px] font-bold text-ink-gray-8 leading-[1.2]" style="font-family:var(--font-mono)">{{ project.val }}</div>
        <div class="text-[10px] text-ink-gray-5 mt-0.5" style="font-family:var(--font-body)">AED</div>
      </div>
      <div>
        <div class="text-[9px] uppercase tracking-[0.07em] text-ink-gray-4 font-bold mb-1" style="font-family:var(--font-body)">Receivables</div>
        <div class="text-[15px] font-bold leading-[1.2]" :class="receivablesValClass" style="font-family:var(--font-mono)">{{ receivablesPrimary }}</div>
        <div class="text-[10px] text-ink-gray-5 mt-0.5" style="font-family:var(--font-body)">{{ receivablesSecondary }}</div>
      </div>
    </div>

    <!-- Progress bar -->
    <div class="flex items-center gap-2 px-4 py-2">
      <div class="flex-1 h-[5px] bg-surface-gray-2 rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-[width] duration-500"
          :class="progressFillClass"
          :style="{ width: project.progress + '%' }"
        ></div>
      </div>
      <span class="text-[11px] font-bold text-ink-gray-5 whitespace-nowrap" style="font-family:var(--font-mono)">{{ project.progress }}%</span>
    </div>

    <!-- Actions -->
    <div class="border-t border-outline-gray-2 px-4 py-2 flex-1">
      <!-- No red actions / all snoozed -->
      <div v-if="visibleReds.length === 0">
        <div class="text-[10px] font-bold tracking-[0.04em] text-ink-green-3 mb-2 flex items-center gap-1.5" style="font-family:var(--font-body)">
          <span class="inline-block size-[7px] rounded-full bg-ink-green-3 shrink-0"></span>
          {{ project.redActions.length > 0 ? 'All snoozed' : 'No red actions' }}
        </div>
        <div class="text-[12px] text-ink-gray-5 italic" style="font-family:var(--font-body)">On plan · check Lookahead for upcoming items</div>
      </div>

      <!-- Red actions -->
      <div v-else>
        <div class="text-[10px] font-bold tracking-[0.04em] text-ink-red-4 mb-2 flex items-center gap-1.5" style="font-family:var(--font-body)">
          <span class="inline-block size-[7px] rounded-full bg-ink-red-4 shrink-0 animate-pulse"></span>
          {{ visibleReds.length }} Red {{ visibleReds.length === 1 ? 'Action' : 'Actions' }} requiring attention
        </div>
        <div
          v-for="(action, i) in visibleReds"
          :key="action.id"
          class="flex items-start gap-2 py-[5px] text-[12px] leading-[1.45]"
          :class="i > 0 ? 'border-t border-dashed border-outline-gray-2' : ''"
        >
          <span class="flex-1 text-ink-gray-7" style="font-family:var(--font-body)">{{ action.text }}</span>
          <span class="font-bold text-ink-red-4 text-[10.5px] whitespace-nowrap shrink-0" style="font-family:var(--font-mono)">{{ action.clock }}</span>
          <button
            class="text-[10px] text-ink-gray-5 bg-surface-gray-1 border border-outline-gray-2 rounded px-2 py-0.5 cursor-pointer shrink-0 hover:text-ink-amber-3 hover:border-outline-gray-3 transition-colors focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
            style="font-family:var(--font-body)"
            @click.stop="$emit('snooze', action.id, project.key)"
          >
            Snooze
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="px-4 py-2 bg-surface-gray-1 border-t border-outline-gray-2 text-[11.5px] text-ink-blueprint-4 font-semibold" style="font-family:var(--font-body)">
      Open command centre →
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
  snoozed: { type: Object, default: () => ({}) },
})

defineEmits(['open', 'snooze'])

const visibleReds = computed(() =>
  props.project.redActions.filter(a => !props.snoozed[a.id])
)

const statusLabel = computed(() =>
  props.project.card === 'red' ? 'Critical' : props.project.card === 'amber' ? 'At Risk' : 'On Track'
)

const statusPillClass = computed(() => ({
  'bg-surface-red-1 text-ink-red-4': props.project.card === 'red',
  'bg-surface-amber-1 text-ink-amber-3': props.project.card === 'amber',
  'bg-surface-green-2 text-ink-green-3': props.project.card === 'green',
}))

const progressValClass = computed(() => ({
  'text-ink-red-4': props.project.progressRag === 'red',
  'text-ink-amber-3': props.project.progressRag === 'amber',
  'text-ink-gray-8': !['red', 'amber'].includes(props.project.progressRag),
}))

const progressFillClass = computed(() => ({
  'bg-ink-red-4': props.project.progressRag === 'red',
  'bg-ink-amber-3': props.project.progressRag === 'amber',
  'bg-ink-green-3': props.project.progressRag === 'green',
  'bg-ink-blueprint-4': !['red', 'amber', 'green'].includes(props.project.progressRag),
}))

const receivablesValClass = computed(() => ({
  'text-ink-red-4': props.project.receivablesRag === 'bad',
  'text-ink-amber-3': props.project.receivablesRag === 'warn',
  'text-ink-green-3': props.project.receivablesRag === 'good',
}))

const receivablesPrimary = computed(() => props.project.receivables.split('·')[0].trim())
const receivablesSecondary = computed(() => (props.project.receivables.split('·')[1] || 'no ageing').trim())
</script>

<style scoped>
[data-theme='dark'] .ik-card {
  background-color: var(--surface-gray-2);
  border-color: var(--outline-gray-3);
}
</style>
