<template>
  <!-- "today task" card (Figma node 197:320) -->
  <div class="csh-card rounded-xl border border-outline-gray-2 bg-surface-gray-1 flex flex-col gap-6 px-5 pt-6 pb-8 w-full"

    <!-- SECTION HEADER -->
    <div class="flex items-start gap-4 w-full">
      <div class="size-8 rounded-md bg-surface-blueprint-5 flex items-center justify-center shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12l3 3 5-5"/>
        </svg>
      </div>

      <div class="flex flex-col gap-0.5 flex-1 min-w-0 justify-center self-stretch">
        <p class="text-[16px] font-semibold leading-6 text-ink-gray-8 m-0" style="font-family:var(--font-body)">Today's Task</p>
        <p class="text-[14px] leading-5 text-ink-gray-6 m-0" style="font-family:var(--font-body)">Across all your projects</p>
      </div>

      <!-- Sort button -->
      <button
        class="csh-sort-btn size-8 inline-flex items-center justify-center rounded-md border border-outline-gray-4 text-ink-gray-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 shrink-0"
        :aria-label="`Sort by ${sortLabel}`"
        :title="`Sort by ${sortLabel}`"
        @click="cycleSortOrder"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 16V4m0 0L3 8m4-4l4 4"/>
        <path d="M17 8v12m0 0l4-4m-4 4l-4-4"/>
      </svg>
      </button>
    </div>

    <!-- TABLE -->
    <div class="flex flex-col w-full">

      <!-- COLUMN HEADERS -->
      <div class="flex items-center w-full">
        <p class="w-[35%] shrink-0 h-[30px] flex items-center px-3 text-[14px] font-semibold leading-[1.15] text-ink-gray-8 tracking-[0.28px] m-0" style="font-family:var(--font-body)">Company</p>
        <p class="flex-1 min-w-0 h-[30px] flex items-center px-3 text-[14px] font-semibold leading-[1.15] text-ink-gray-8 tracking-[0.28px] m-0" style="font-family:var(--font-body)">Subject</p>
      </div>

      <!-- TASK ROWS -->
      <ul class="flex flex-col w-full" role="list">
        <li
          v-for="(task, i) in sortedTasks" :key="i"
          class="csh-task-row flex items-center w-full border-b border-outline-gray-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          tabindex="0" role="button"
        >
          <div class="w-[35%] shrink-0 h-10 flex items-center gap-2 px-3">
            <span class="size-2 rounded-full shrink-0 bg-current" :class="ragDotClass(task.rag)" />
            <p class="text-[14px] font-semibold leading-[1.15] text-ink-gray-8 tracking-[0.28px] truncate m-0" style="font-family:var(--font-body)">{{ task.company }}</p>
          </div>
          <div class="flex-1 min-w-0 h-10 flex items-center px-3">
            <p class="text-[12px] font-medium leading-[1.15] text-ink-gray-6 tracking-[0.24px] truncate m-0" style="font-family:var(--font-body)">{{ task.subject }}</p>
          </div>
        </li>
      </ul>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type TaskRag = 'amber' | 'blueprint'
interface Task { rag: TaskRag; company: string; subject: string; priority: number }

const props = withDefaults(defineProps<{ tasks?: Task[] }>(), {
  tasks: () => [
    { rag: 'amber',    company: 'Skyline',      subject: 'Review SC-007 (MEP) claim - 14% above curve', priority: 1 },
    { rag: 'amber',    company: 'Skyline',      subject: 'Allocate 7 unallocated BOQ lines',             priority: 1 },
    { rag: 'blueprint', company: 'Marina Crest', subject: 'Compare bids for substructure RC package',    priority: 2 },
    { rag: 'blueprint', company: 'Address Res.', subject: 'Draft variation V-031 quotation',             priority: 2 },
    { rag: 'blueprint', company: 'Palm Villa',   subject: 'Reconcile final account line items',          priority: 3 },
  ],
})

type SortOrder = 'priority-asc' | 'priority-desc' | 'company-asc'
const sortOrders: SortOrder[] = ['priority-asc', 'priority-desc', 'company-asc']
const sortIndex = ref(0)
const sortOrder = computed<SortOrder>(() => sortOrders[sortIndex.value])
const sortLabel = computed(() => ({ 'priority-asc': 'Priority ↑', 'priority-desc': 'Priority ↓', 'company-asc': 'Company A–Z' }[sortOrder.value]))
function cycleSortOrder() { sortIndex.value = (sortIndex.value + 1) % sortOrders.length }

const sortedTasks = computed(() => {
  const list = [...props.tasks]
  if (sortOrder.value === 'priority-asc')  return list.sort((a, b) => a.priority - b.priority)
  if (sortOrder.value === 'priority-desc') return list.sort((a, b) => b.priority - a.priority)
  if (sortOrder.value === 'company-asc')   return list.sort((a, b) => a.company.localeCompare(b.company))
  return list
})

function ragDotClass(rag: TaskRag) {
  return { amber: 'text-ink-amber-3', blueprint: 'text-ink-blueprint-3' }[rag]
}
</script>

<style scoped>
.csh-card {
  box-shadow:
    0px 0px 0.5px rgba(0, 0, 0, 0.12),
    0px 0.5px 1px rgba(0, 0, 0, 0.15),
    0px 2px 1.5px rgba(0, 0, 0, 0.16);
}
.csh-sort-btn { transition: border-color 0.15s ease, color 0.15s ease; }
.csh-sort-btn:hover { border-color: var(--outline-blueprint-3); color: var(--ink-blueprint-4); }
.csh-task-row { transition: background-color 0.1s ease; }
.csh-task-row:hover { background-color: var(--surface-blueprint-1); }
[data-theme='dark'] .csh-task-row:hover { background-color: var(--surface-blueprint-2); }
</style>
