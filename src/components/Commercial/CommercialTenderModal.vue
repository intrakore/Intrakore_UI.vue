<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black-overlay-200 p-4"
    @click.self="close"
  >
    <div class="bg-surface-white rounded-2xl border border-outline-gray-2 w-full max-w-2xl max-h-[88vh] overflow-y-auto shadow-2xl">

      <!-- Head -->
      <div class="flex items-center justify-between gap-4 px-6 py-4 border-b border-outline-gray-2">
        <h3 class="text-[18px] font-medium text-ink-gray-9 m-0" style="font-family:var(--font-display)">
          Send tender — INT-26-014-SC-005 · Façade glazing
        </h3>
        <button
          type="button"
          class="size-8 inline-flex items-center justify-center rounded-md border border-outline-gray-4 text-ink-gray-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 shrink-0"
          @click="close"
        >✕</button>
      </div>

      <!-- Body -->
      <div class="flex flex-col gap-5 px-6 py-5">

        <div>
          <h4 class="text-[14px] font-medium text-ink-gray-8 m-0 mb-2" style="font-family:var(--font-body)">Recipients · 4 bidders selected</h4>
          <div class="flex flex-col gap-1.5">
            <div v-for="r in recipients" :key="r.name" class="flex items-center gap-2 text-[13px] text-ink-gray-7" style="font-family:var(--font-body)">
              <span>✉</span>
              <span><strong class="text-ink-gray-8">{{ r.name }}</strong> · {{ r.email }}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-[14px] font-medium text-ink-gray-8 m-0 mb-2" style="font-family:var(--font-body)">Tender details</h4>
          <div class="grid grid-cols-2 gap-x-4 gap-y-1 text-[13px]" style="font-family:var(--font-body)">
            <span class="text-ink-gray-5">Tender reference</span><span class="text-ink-gray-8 font-medium">INT-26-014-SC-005</span>
            <span class="text-ink-gray-5">Response deadline</span><span class="text-ink-gray-8 font-medium">21 May 2026 · 17:00 GST</span>
            <span class="text-ink-gray-5">Attachments</span><span class="text-ink-gray-8 font-medium">6 documents · 18.4 MB</span>
          </div>
        </div>

        <div>
          <h4 class="text-[14px] font-medium text-ink-gray-8 m-0 mb-2" style="font-family:var(--font-body)">Email preview</h4>
          <div class="rounded-xl border border-outline-gray-2 bg-surface-gray-1 p-4 flex flex-col gap-2 text-[13px] text-ink-gray-7" style="font-family:var(--font-body)">
            <p class="m-0 font-medium text-ink-gray-8">Tender invitation — Skyline Business Bay · Façade glazing (INT-26-014-SC-005)</p>
            <p class="m-0">Dear Sir / Madam,</p>
            <p class="m-0">You are invited to submit a bid for the Façade — glazing subcontract package on Skyline Business Bay, Business Bay, Dubai.</p>
            <p class="m-0">Please return your priced schedule of rates by <strong>17:00 GST on 21 May 2026</strong>.</p>
            <p class="m-0">Kind regards,<br />Rashid Hassan<br />Quantity Surveyor · Skyline Business Bay</p>
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between gap-4 px-6 py-4 border-t border-outline-gray-2 flex-wrap">
        <span class="text-[11.5px] text-ink-gray-5">Sends the email and locks SC-005 for tender.</span>
        <div class="flex gap-2">
          <button
            type="button"
            class="px-3.5 py-2 rounded-md border border-outline-gray-3 text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
            style="font-family:var(--font-body)"
            @click="close"
          >Cancel</button>
          <button
            type="button"
            class="px-3.5 py-2 rounded-md bg-surface-blueprint-5 text-[12.5px] font-medium text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
            style="font-family:var(--font-body)"
            @click="send"
          >✉ Send tender to 4 bidders</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'send'): void
}>()

const recipients = [
  { name: 'Skyglaz Industries', email: 'tenders@skyglaz.ae' },
  { name: 'Alumitech Façades', email: 'estimation@alumitech.ae' },
  { name: 'Glazco Building Systems', email: 'bids@glazco-bs.com' },
  { name: 'Façade Solutions FZE', email: 'commercial@facadesolutions.ae' },
]

function close() {
  emit('update:modelValue', false)
}

function send() {
  emit('send')
  emit('update:modelValue', false)
}
</script>
