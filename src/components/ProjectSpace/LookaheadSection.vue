<template>
  <section class="mb-8">
    <!-- Zone header -->
    <div class="flex items-center justify-between mb-1.5 gap-3 flex-wrap">
      <div class="flex items-center gap-2.5">
        <div class="w-[3px] h-[18px] bg-ink-blueprint-4 rounded-sm shrink-0"></div>
        <span class="text-[13px] font-bold uppercase tracking-[0.08em] text-ink-blueprint-4" style="font-family:var(--font-body)">Lookahead</span>
      </div>

      <!-- Project dropdown -->
      <div class="relative" ref="ddWrap">
        <button
          class="flex items-center gap-2 px-3 py-[7px] bg-surface-white border border-outline-gray-2 rounded-lg text-[13px] text-ink-gray-8 cursor-pointer font-medium min-w-[200px] justify-between hover:border-outline-blueprint-2 transition-colors focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          style="font-family:var(--font-body); box-shadow:0px 0px 0.5px rgba(0,0,0,0.12),0px 0.5px 1px rgba(0,0,0,0.15)"
          @click.stop="menuOpen = !menuOpen"
        >
          <span class="flex items-center gap-2">
            <span class="size-[9px] rounded-full shrink-0" :class="currentDotClass"></span>
            <span>{{ currentProject?.name }}</span>
          </span>
          <span class="text-[10px] text-ink-gray-5">▾</span>
        </button>

        <Transition name="dd-menu">
          <div
            v-if="menuOpen"
            class="absolute top-[calc(100%+6px)] right-0 min-w-[240px] bg-surface-white border border-outline-gray-2 rounded-xl z-[100] overflow-hidden"
            style="box-shadow:0px 10px 25px rgba(0,15,206,0.10),0px 4px 10px rgba(0,0,0,0.06)"
            @click.stop
          >
            <div
              v-for="p in projects"
              :key="p.key"
              class="ik-card-row flex items-center gap-2.5 px-3 py-2.5 cursor-pointer transition-colors"
              :class="p.key === currentKey ? 'bg-surface-blueprint-1' : ''"
              @click="selectProject(p.key)"
            >
              <span class="size-[7px] rounded-full shrink-0" :class="dotClass(p.card)"></span>
              <div>
                <div class="text-[13px] font-medium text-ink-gray-8" :class="p.key === currentKey ? 'text-ink-blueprint-4 font-semibold' : ''" style="font-family:var(--font-body)">{{ p.name }}</div>
                <div class="text-[10.5px] text-ink-gray-5" style="font-family:var(--font-mono)">{{ p.code }}</div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <p class="text-[12px] text-ink-gray-5 mb-3 pl-[13px] m-0" style="font-family:var(--font-body)">
      What's behind · what's due this week
    </p>

    <!-- Two columns -->
    <div class="grid gap-4" style="grid-template-columns:1fr 1fr">
      <!-- Behind Schedule -->
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white overflow-hidden" style="box-shadow:0px 0px 0.5px rgba(0,0,0,0.12),0px 0.5px 1px rgba(0,0,0,0.15),0px 2px 1.5px rgba(0,0,0,0.16)">
        <div class="flex items-center justify-between px-4 py-3 border-b border-outline-gray-2 bg-surface-gray-1">
          <div class="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="text-ink-red-4">
              <circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/>
            </svg>
            <span class="text-[11.5px] font-bold uppercase tracking-[0.06em] text-ink-red-4" style="font-family:var(--font-body)">Behind Schedule</span>
          </div>
          <span class="text-[11px] text-ink-gray-5 bg-surface-gray-2 px-2 py-0.5 rounded-full" style="font-family:var(--font-mono)">
            {{ behindItems.length }} {{ behindItems.length === 1 ? 'activity' : 'activities' }}
          </span>
        </div>
        <div class="py-1">
          <div v-if="!behindItems.length" class="py-5 px-4 text-center text-[12px] text-ink-gray-5 italic" style="font-family:var(--font-body)">
            Nothing behind — this project is on plan.
          </div>
          <div
            v-for="(row, i) in behindItems"
            :key="i"
            class="grid gap-3 items-start px-4 py-2.5 border-b border-outline-gray-2 last:border-b-0 hover:bg-surface-blueprint-1 transition-colors"
            :class="row[1] === 'r' ? 'border-l-2 border-l-ink-red-4' : ''"
            style="grid-template-columns:90px 1fr"
          >
            <div class="text-[10.5px] whitespace-nowrap pt-px" :class="row[1] === 'r' ? 'text-ink-red-4 font-semibold' : row[1] === 'a' ? 'text-ink-amber-3 font-semibold' : 'text-ink-gray-5'" style="font-family:var(--font-mono)">
              {{ row[0] }}
            </div>
            <div>
              <div class="text-[12.5px] text-ink-gray-8 font-medium leading-[1.4]" style="font-family:var(--font-body)">{{ row[2] }}</div>
              <div class="text-[11px] text-ink-gray-5 mt-0.5" style="font-family:var(--font-body)">{{ row[3] }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Coming This Week -->
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white overflow-hidden" style="box-shadow:0px 0px 0.5px rgba(0,0,0,0.12),0px 0.5px 1px rgba(0,0,0,0.15),0px 2px 1.5px rgba(0,0,0,0.16)">
        <div class="flex items-center justify-between px-4 py-3 border-b border-outline-gray-2 bg-surface-gray-1">
          <div class="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="text-ink-blueprint-4">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span class="text-[11.5px] font-bold uppercase tracking-[0.06em] text-ink-blueprint-4" style="font-family:var(--font-body)">Coming This Week</span>
          </div>
          <span class="text-[11px] text-ink-gray-5 bg-surface-gray-2 px-2 py-0.5 rounded-full" style="font-family:var(--font-mono)">
            {{ upcomingItems.length }} activities
          </span>
        </div>
        <div class="py-1">
          <div v-if="!upcomingItems.length" class="py-5 px-4 text-center text-[12px] text-ink-gray-5 italic" style="font-family:var(--font-body)">
            No upcoming activities.
          </div>
          <div
            v-for="(row, i) in upcomingItems"
            :key="i"
            class="grid gap-3 items-start px-4 py-2.5 border-b border-outline-gray-2 last:border-b-0 hover:bg-surface-blueprint-1 transition-colors"
            style="grid-template-columns:90px 1fr"
          >
            <div class="text-[10.5px] text-ink-gray-5 whitespace-nowrap pt-px" style="font-family:var(--font-mono)">{{ row[0] }}</div>
            <div>
              <div class="text-[12.5px] text-ink-gray-8 font-medium leading-[1.4]" style="font-family:var(--font-body)">{{ row[2] }}</div>
              <div class="text-[11px] text-ink-gray-5 mt-0.5" style="font-family:var(--font-body)">{{ row[3] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  projects: { type: Array, required: true },
  lookahead: { type: Object, required: true },
  initialKey: { type: String, default: '' },
})

const currentKey = ref(props.initialKey || props.projects[0]?.key || '')
const menuOpen = ref(false)
const ddWrap = ref(null)

const currentProject = computed(() => props.projects.find(p => p.key === currentKey.value))
const currentData = computed(() => props.lookahead[currentKey.value] || { behind: [], upcoming: [] })
const behindItems = computed(() => currentData.value.behind)
const upcomingItems = computed(() => currentData.value.upcoming)

const dotClass = (card) => ({
  'bg-ink-red-4': card === 'red',
  'bg-ink-amber-3': card === 'amber',
  'bg-ink-green-3': card === 'green',
  'bg-ink-blueprint-4': !['red', 'amber', 'green'].includes(card),
})

const currentDotClass = computed(() => dotClass(currentProject.value?.card))

function selectProject(key) {
  currentKey.value = key
  menuOpen.value = false
}

function handleOutsideClick() {
  menuOpen.value = false
}

onMounted(() => document.addEventListener('click', handleOutsideClick))
onUnmounted(() => document.removeEventListener('click', handleOutsideClick))
</script>

<style scoped>
.dd-menu-enter-active,
.dd-menu-leave-active {
  transition: opacity 0.15s cubic-bezier(0.4,0,0.2,1), transform 0.15s cubic-bezier(0.4,0,0.2,1);
}
.dd-menu-enter-from,
.dd-menu-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}

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
