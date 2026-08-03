<template>
  <section class="mb-8">
    <!-- Zone header -->
    <div class="flex items-center justify-between mb-1.5 gap-3 flex-wrap">
      <div class="flex items-center gap-2.5">
        <div class="w-[3px] h-[18px] bg-ink-blueprint-4 rounded-sm shrink-0"></div>
        <span class="text-[13px] font-bold uppercase tracking-[0.08em] text-ink-blueprint-4" style="font-family:var(--font-body)">Approvals Queue</span>
        <span class="inline-flex items-center gap-2 bg-surface-amber-1 rounded-full px-2 py-[4.5px] text-[12px] font-medium text-ink-amber-3 tracking-[0.24px]">
          7 pending
        </span>
      </div>
    </div>
    <p class="text-[12px] text-ink-gray-5 mb-3 pl-[13px] m-0" style="font-family:var(--font-body)">
      Only you can approve these · click to open in the module
    </p>

    <!-- List -->
    <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white overflow-hidden" style="box-shadow:0px 0px 0.5px rgba(0,0,0,0.12),0px 0.5px 1px rgba(0,0,0,0.15),0px 2px 1.5px rgba(0,0,0,0.16)">
      <div
        v-for="(a, i) in approvals"
        :key="i"
        class="ik-card-row grid items-center border-b border-outline-gray-2 last:border-b-0 cursor-pointer transition-colors overflow-hidden"
        style="grid-template-columns:72px 1fr auto"
        @click="$emit('open-approval', a)"
      >
        <!-- Count badge -->
        <div class="flex flex-col items-center justify-center px-3 py-4 bg-surface-gray-1 border-r border-outline-gray-2 self-stretch">
          <span
            class="text-[24px] font-extrabold leading-none"
            :class="countClass(a.rag)"
            style="font-family:var(--font-mono)"
          >{{ a.count }}</span>
          <span class="text-[9px] font-bold uppercase tracking-[0.06em] text-ink-gray-5 mt-0.5" style="font-family:var(--font-body)">pending</span>
        </div>

        <!-- Body -->
        <div class="px-4 py-3 min-w-0">
          <div class="text-[13.5px] font-semibold text-ink-gray-8 mb-0.5" style="font-family:var(--font-body)">{{ a.title }}</div>
          <div class="text-[11.5px] text-ink-gray-5 leading-[1.5]" style="font-family:var(--font-body)">{{ a.sub }}</div>
        </div>

        <!-- CTA -->
        <div class="px-4 py-3 text-[12px] text-ink-blueprint-4 font-bold whitespace-nowrap border-l border-outline-gray-2 self-stretch flex items-center" style="font-family:var(--font-body)">
          {{ a.link }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  approvals: { type: Array, required: true },
})

defineEmits(['open-approval'])

function countClass(rag) {
  if (rag === 'r') return 'text-ink-red-4'
  if (rag === 'a') return 'text-ink-amber-3'
  return 'text-ink-blueprint-4'
}
</script>

<style scoped>
[data-theme='dark'] .ik-card {
  background-color: var(--surface-gray-2);
  border-color: var(--outline-gray-3);
}
.ik-card-row:hover {
  background-color: var(--surface-blueprint-1);
}
[data-theme='dark'] .ik-card-row:hover {
  background-color: var(--surface-blueprint-2);
}
</style>
