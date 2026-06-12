<template>
  <div class="flex flex-col gap-4 p-6 min-h-screen bg-surface-white">

    <CommercialProjectList v-if="currentScreen === 'pl'" />
    <CommercialProjectOverview v-else-if="currentScreen === 'a0'" />
    <CommercialBOQ v-else-if="currentScreen === 'a1a'" />
    <CommercialActionList v-else-if="currentScreen === 'a1b'" />
    <CommercialSCJourney v-else-if="currentScreen === 'sc-journey'" />
    <CommercialInhouseJourney v-else-if="currentScreen === 'inhouse-journey'" />
    <CommercialClientJourney v-else-if="currentScreen === 'client-journey'" />
    <CommercialClientIPC v-else-if="currentScreen === 'client-ipc'" />
    <CommercialVORegister v-else-if="currentScreen === 'vo-register'" />
    <CommercialVODetail v-else-if="currentScreen === 'vo-detail'" />
    <CommercialSCValuations v-else-if="currentScreen === 'scvaluations'" />
    <CommercialSCValDetail v-else-if="currentScreen === 'scval-detail'" />
    <CommercialPkgDetail v-else-if="currentScreen === 'pkg-detail'" />

    <CommercialTenderModal v-model="tenderModalOpen" @send="handleTenderSend" />
  </div>
</template>

<script setup lang="ts">
import CommercialProjectList from './CommercialProjectList.vue'
import CommercialProjectOverview from './CommercialProjectOverview.vue'
import CommercialBOQ from './CommercialBOQ.vue'
import CommercialActionList from './CommercialActionList.vue'
import CommercialSCJourney from './CommercialSCJourney.vue'
import CommercialInhouseJourney from './CommercialInhouseJourney.vue'
import CommercialClientJourney from './CommercialClientJourney.vue'
import CommercialClientIPC from './CommercialClientIPC.vue'
import CommercialVORegister from './CommercialVORegister.vue'
import CommercialVODetail from './CommercialVODetail.vue'
import CommercialSCValuations from './CommercialSCValuations.vue'
import CommercialSCValDetail from './CommercialSCValDetail.vue'
import CommercialPkgDetail from './CommercialPkgDetail.vue'
import CommercialTenderModal from './CommercialTenderModal.vue'
import { currentScreen, tenderModalOpen } from './commercialNav'
import { toast } from '../Toast'

function handleTenderSend() {
  tenderModalOpen.value = false
  toast.success('Tender email sent to 4 bidders. INT-26-014-SC-005 status moves to "In tender".')
}
</script>
