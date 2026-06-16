<template>
  <!-- "need your action" card (Figma node 219:516) -->
  <div class="csh-card rounded-xl border border-outline-gray-2 bg-surface-gray-1 flex flex-col gap-6 px-5 py-6 w-full">

    <!-- SECTION HEADER -->
    <div class="flex items-start gap-4 w-full">
      <div class="size-8 rounded-md bg-surface-amber-2 flex items-center justify-center shrink-0">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <path d="M12 17h.01"/>
        </svg>
      </div>

      <div class="flex flex-col gap-0.5 flex-1 min-w-0 justify-center self-stretch">
        <p class="text-[16px] font-semibold leading-6 text-ink-gray-8 m-0" style="font-family:var(--font-body)">Needs Your Action</p>
        <p class="text-[14px] leading-5 text-ink-gray-6 m-0" style="font-family:var(--font-body)">To prepare, review or re-issue</p>
      </div>

      <!-- Filter button -->
      <button
        class="csh-filter-btn size-8 rounded-md border border-outline-gray-4 flex items-center justify-center shrink-0 text-ink-gray-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
        aria-label="Filter"
        title="Filter"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="4" y1="6" x2="20" y2="6"/>
          <line x1="7" y1="12" x2="17" y2="12"/>
          <line x1="10" y1="18" x2="14" y2="18"/>
        </svg>
      </button>
    </div>

    <!-- ITEM ROWS -->
    <div class="flex flex-col gap-3 w-full">
      <div
        v-for="(item, i) in items" :key="i"
        class="csh-action-row rounded-xl border border-outline-gray-2 bg-surface-gray-1 px-4 py-3 flex flex-col gap-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
        tabindex="0" role="button"
      >
        <div class="flex items-center gap-2">
          <span class="size-2 rounded-full shrink-0 bg-current" :class="ragDotClass(item.rag)" />
          <p class="text-[14px] font-semibold leading-[1.15] m-0" :class="ragTextClass(item.rag)" style="font-family:var(--font-body)">{{ item.company }}</p>
        </div>
        <p class="text-[13px] leading-[1.15] text-ink-gray-6 m-0 pl-4" style="font-family:var(--font-body)">{{ item.subject }}</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
type ActionRag = 'red' | 'amber' | 'blueprint' | 'dusk'
interface ActionItem { rag: ActionRag; company: string; subject: string }

const props = withDefaults(defineProps<{ items?: ActionItem[] }>(), {
  items: () => [
    { rag: 'red',       company: 'Skyline',      subject: 'Analyse and brief PD – IPC-007 cert variance review' },
    { rag: 'amber',     company: 'Marina Crest', subject: 'Draft for CM – PKG-003 RC substructure award' },
    { rag: 'blueprint', company: 'Address Res.', subject: 'V-029 cost quotation — CM signed, re-issue to client' },
    { rag: 'dusk',      company: 'Palm Villa',   subject: 'Reconcile final account line items' },
  ],
})

function ragDotClass(rag: ActionRag) {
  return {
    red: 'text-ink-red-3',
    amber: 'text-ink-amber-3',
    blueprint: 'text-ink-blueprint-3 bg-current',
    dusk: 'text-ink-dusk-3 bg-current',
  }[rag]
}

function ragTextClass(rag: ActionRag) {
  return 'text-ink-gray-8'
}
</script>

<style scoped>
.csh-card {
  box-shadow:
    0px 0px 0.5px rgba(0, 0, 0, 0.12),
    0px 0.5px 1px rgba(0, 0, 0, 0.15),
    0px 2px 1.5px rgba(0, 0, 0, 0.16);
}
.csh-filter-btn { transition: border-color 0.15s ease, color 0.15s ease; }
.csh-filter-btn:hover { border-color: var(--outline-blueprint-3); color: var(--ink-blueprint-4); }
.csh-action-row { transition: border-color 0.15s ease, box-shadow 0.15s ease; }
.csh-action-row:hover {
  border-color: var(--outline-blueprint-3);
  box-shadow: 0 0 0 2px var(--outline-blueprint-1);
}
</style>
