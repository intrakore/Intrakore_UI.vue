<template>
  <div
    class="flex flex-col gap-4 p-6 min-h-screen bg-surface-white ik-page"
    @click="closeAll"
  >
    <ProjectSpaceHero
      :all-project-count="allProjectCount"
      :snoozed-count="snoozedCount"
      @toggle-snooze="snoozeOpen = !snoozeOpen"
      @open-projects="toast('Navigate to all projects')"
    />

    <SnoozePanel
      :open="snoozeOpen"
      :snoozed="snoozed"
      @unsnooze="unsnooze"
    />

    <div class="flex flex-col gap-0 max-w-[1400px] w-full mx-auto pt-4">
      <PortfolioSection
        :projects="projects"
        :all-project-count="allProjectCount"
        :snoozed="snoozed"
        @view-all="toast('Opening all projects')"
        @open-project="(key) => toast('Opening project: ' + key)"
        @snooze="snoozeAction"
      />

      <LookaheadSection
        :projects="projects"
        :lookahead="lookahead"
        :initial-key="projects[0]?.key"
      />

      <ApprovalsSection
        :approvals="approvals"
        @open-approval="toast('Opening module — wire up route to the relevant page')"
      />
    </div>

    <ToastNotification :message="toastMessage" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectSpaceHero from './ProjectSpaceHero.vue'
import SnoozePanel from './SnoozePanel.vue'
import PortfolioSection from './PortfolioSection.vue'
import LookaheadSection from './LookaheadSection.vue'
import ApprovalsSection from './ApprovalsSection.vue'
import ToastNotification from './ToastNotification.vue'
import { projects as projectData, allProjectCount, lookahead, approvals } from './data.js'

const projects = ref(projectData)
const snoozed = ref({})
const snoozeOpen = ref(false)
const toastMessage = ref('')
let toastTimer = null

const snoozedCount = computed(() => Object.keys(snoozed.value).length)

function snoozeAction(id, projKey) {
  const proj = projects.value.find(p => p.key === projKey)
  const action = proj?.redActions.find(a => a.id === id)
  if (!action) return
  snoozed.value = { ...snoozed.value, [id]: { projName: proj.name, text: action.text, clock: action.clock } }
  toast('Snoozed for 24 h · clock keeps running in background')
}

function unsnooze(id) {
  const next = { ...snoozed.value }
  delete next[id]
  snoozed.value = next
  toast('Restored to portfolio')
}

function toast(msg) {
  toastMessage.value = ''
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toastMessage.value = msg }, 10)
}

function closeAll() {
  snoozeOpen.value = false
}
</script>

<style>
[data-theme='dark'] .ik-page {
  background-color: var(--surface-gray-9);
}
</style>
