<template>
  <Transition name="toast">
    <div
      v-if="visible"
      class="fixed bottom-7 left-1/2 -translate-x-1/2 bg-ink-gray-8 rounded-[10px] px-5 py-[11px] text-[13px] text-surface-white z-[9999] max-w-[480px] text-center whitespace-nowrap pointer-events-none"
      style="font-family:var(--font-body); box-shadow:0 10px 30px rgba(0,0,0,0.25)"
    >
      {{ message }}
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  message: { type: String, default: '' },
})

const visible = ref(false)
let timer = null

watch(() => props.message, (msg) => {
  if (!msg) return
  visible.value = true
  clearTimeout(timer)
  timer = setTimeout(() => { visible.value = false }, 3800)
})
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.2s cubic-bezier(0.4,0,0.2,1), transform 0.2s cubic-bezier(0.4,0,0.2,1);
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(16px);
}
.toast-enter-to,
.toast-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
</style>
