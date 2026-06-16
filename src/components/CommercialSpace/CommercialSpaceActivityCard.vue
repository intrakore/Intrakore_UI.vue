<template>
  <!-- "recent activity" card (Figma node 227:497) -->
  <div class="csh-activity-card rounded-xl border border-outline-gray-2 bg-surface-gray-1 flex flex-col gap-6 px-5 pt-6 pb-8 w-full">

    <!-- SECTION HEADER -->
    <div class="flex items-start gap-4 w-full">
      <div class="size-8 rounded-md bg-surface-dusk-3 flex items-center justify-center shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
          <path d="M3 3v5h5"/>
          <path d="M12 7v5l4 2"/>
        </svg>
      </div>

      <div class="flex flex-col gap-0.5 flex-1 min-w-0 justify-center self-stretch">
        <p class="text-[16px] font-semibold leading-6 text-ink-gray-9 m-0" style="font-family:var(--font-body)">Recent activity</p>
        <p class="text-[14px] leading-5 text-ink-gray-6 m-0" style="font-family:var(--font-body)">Last 24 hours across your projects</p>
      </div>

      <!-- More button -->
      <button
        class="csh-more-btn size-8 rounded-md border border-outline-gray-4 flex items-center justify-center shrink-0 text-ink-gray-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
        aria-label="More"
        title="More"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="12" r="2"/>
          <circle cx="12" cy="12" r="2"/>
          <circle cx="19" cy="12" r="2"/>
        </svg>
      </button>
    </div>

    <!-- ACTIVITY ROWS -->
    <div class="flex flex-col w-full">
      <div
        v-for="(item, i) in items" :key="i"
        class="csh-activity-row flex flex-col gap-1.5 py-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
        :class="{ 'border-b border-outline-gray-2': i < items.length - 1 }"
        tabindex="0" role="button"
      >
        <div class="flex items-center">
          <p class="w-[70px] shrink-0 text-[13px] leading-[1.15] text-ink-gray-5 m-0" style="font-family:var(--font-body)">{{ item.time }}</p>
          <span class="text-ink-gray-3 mx-2" style="font-family:var(--font-body)">|</span>
          <p class="text-[14px] font-semibold leading-[1.15] text-ink-gray-9 m-0" style="font-family:var(--font-body)">{{ item.company }}</p>
        </div>
        <p class="pl-[calc(70px+20px)] text-[13px] leading-[1.15] text-ink-gray-6 m-0" style="font-family:var(--font-body)">{{ item.activity }}</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
interface ActivityItem { time: string; company: string; activity: string }

withDefaults(defineProps<{ items?: ActivityItem[] }>(), {
  items: () => [
    { time: '11:45am', company: 'Skyline',      activity: 'James Chen (CM) approved variation V-024 — AED 86K' },
    { time: '1:00pm',  company: 'Skyline',      activity: 'SC-007 claim IPA-007-04 received (AED 1.42M)' },
    { time: '3:30pm',  company: 'Marina Crest', activity: '3 bids returned on PKG-003 enquiry' },
    { time: '4:30pm',  company: 'Address Res.', activity: 'PC-019 issued to client — AED 1.86M' },
  ],
})
</script>

<style scoped>
.csh-activity-card {
  box-shadow:
    0px 0px 0.5px rgba(0, 0, 0, 0.12),
    0px 0.5px 1px rgba(0, 0, 0, 0.15);
}
.csh-more-btn { transition: border-color 0.15s ease, color 0.15s ease; }
.csh-more-btn:hover { border-color: var(--outline-blueprint-3); color: var(--ink-blueprint-4); }
.csh-activity-row { transition: background-color 0.1s ease; }
.csh-activity-row:hover { background-color: var(--surface-blueprint-1); }
[data-theme='dark'] .csh-activity-row:hover { background-color: var(--surface-blueprint-2); }
</style>
