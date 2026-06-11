<template>
  <div class="flex flex-col gap-4 p-6 min-h-screen bg-surface-gray-1">
    <CommercialSpaceHeader />
    <div class="grid grid-cols-2 gap-4">
      <CommercialSpaceTaskCard />
      <CommercialSpaceActionCard />
      <CommercialSpaceActivityCard />
      <CommercialSpaceKoreCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import CommercialSpaceHeader from './CommercialSpaceHeader.vue'
import CommercialSpaceTaskCard from './CommercialSpaceTaskCard.vue'
import CommercialSpaceActionCard from './CommercialSpaceActionCard.vue'
import CommercialSpaceActivityCard from './CommercialSpaceActivityCard.vue'
import CommercialSpaceKoreCard from './CommercialSpaceKoreCard.vue'
</script>