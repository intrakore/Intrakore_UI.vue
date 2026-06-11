<template>
  <!-- "kore insights" card (Figma node 227:550) -->
  <div class="csh-kore-card rounded-xl border border-outline-gray-2 bg-surface-white flex flex-col gap-6 px-5 pt-6 pb-8 w-full">

    <!-- SECTION HEADER -->
    <div class="flex items-start gap-4 w-full">
      <div class="size-8 rounded-md bg-surface-clearing-3 flex items-center justify-center shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
        </svg>
      </div>

      <div class="flex flex-col gap-0.5 flex-1 min-w-0 justify-center self-stretch">
        <p class="text-[16px] font-semibold leading-6 text-ink-gray-9 m-0" style="font-family:var(--font-body)">Kore Insights</p>
        <p class="text-[14px] leading-5 text-ink-gray-6 m-0" style="font-family:var(--font-body)">Pattern detection across your work</p>
      </div>

      <!-- Filter button -->
      <button
        class="csh-kore-filter-btn size-8 rounded-md border border-outline-gray-4 flex items-center justify-center shrink-0 text-ink-gray-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
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

    <!-- INSIGHT ROWS -->
    <div class="flex flex-col w-full">
      <div
        v-for="(item, i) in items" :key="i"
        class="csh-kore-row flex flex-col gap-1.5 py-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
        :class="{ 'border-b border-outline-gray-2': i < items.length - 1 }"
        tabindex="0" role="button"
      >
        <div class="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="text-ink-gray-5 shrink-0">
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
          </svg>
          <p class="text-[14px] font-semibold leading-[1.15] text-ink-gray-9 m-0" style="font-family:var(--font-body)">{{ item.company }}</p>
        </div>
        <p class="pl-5 text-[13px] leading-[1.15] text-ink-gray-6 m-0" style="font-family:var(--font-body)">{{ item.insight }}</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
interface InsightItem { company: string; insight: string }

withDefaults(defineProps<{ items?: InsightItem[] }>(), {
  items: () => [
    { company: 'Skyline',          insight: 'SC-007 valuation trend suggests early intervention' },
    { company: 'Marina Crest',     insight: 'RC substructure bids show ±18% spread — review benchmarks before award' },
    { company: 'Across portfolio', insight: 'Your forecast margin trended down 0.4pp this cycle — driven primarily by Skyline.' },
    { company: 'Palm Villa',       insight: 'Final account at +0.9% over baseline — within historical range for closing.' },
  ],
})
</script>

<style scoped>
.csh-kore-card {
  box-shadow:
    0px 0px 0.5px rgba(0, 0, 0, 0.12),
    0px 0.5px 1px rgba(0, 0, 0, 0.15);
}
.csh-kore-filter-btn { transition: border-color 0.15s ease, color 0.15s ease; }
.csh-kore-filter-btn:hover { border-color: var(--outline-blueprint-3); color: var(--ink-blueprint-4); }
.csh-kore-row { transition: background-color 0.1s ease; }
.csh-kore-row:hover { background-color: var(--surface-blueprint-1); }
[data-theme='dark'] .csh-kore-row:hover { background-color: var(--surface-blueprint-2); }
</style>
