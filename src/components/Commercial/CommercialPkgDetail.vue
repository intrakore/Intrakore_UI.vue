<template>
  <div class="flex flex-col gap-6">

    <!-- Hero / header -->
    <div
      class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full flex items-start justify-between gap-4 flex-wrap"
      style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
    >
      <div>
        <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:var(--font-display)">Skyline Business Bay</h1>
        <p class="text-[13px] font-semibold text-ink-blueprint-4 m-0 mt-1" style="font-family:var(--font-body)">PKG-005 · Façade — glazing</p>
        <p class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] m-0 mt-1" style="font-family:var(--font-body); font-weight:350;">
          Everything about one package — scope, execution, and full history in one place.
        </p>
        <div class="flex items-center gap-2 text-[12px] text-ink-gray-6 flex-wrap mt-3" style="font-family:var(--font-body)">
          <span>14 BOQ lines</span>
          <span class="text-ink-gray-3">·</span>
          <span>AED 2,450,000</span>
          <span class="text-ink-gray-3">·</span>
          <span>Bill 4 · Façade, Finishes &amp; MEP</span>
          <span class="text-ink-gray-3">·</span>
          <span>⊟ Subcontracted</span>
          <span class="text-ink-gray-3">·</span>
          <span class="text-ink-amber-3 font-semibold">In tender · closes Friday</span>
        </div>
      </div>
      <button
        type="button"
        class="px-3.5 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 shrink-0"
        style="font-family:var(--font-body)"
        @click="showScreen('a1b')"
      >← Back to Subcontracts</button>
    </div>

    <!-- Tabs -->
    <div class="flex items-center gap-1 border-b border-outline-gray-2 overflow-x-auto">
      <button
        v-for="tab in tabs" :key="tab.id"
        type="button"
        class="px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors focus:outline-none"
        :class="activeTab === tab.id ? 'text-ink-blueprint-4 border-outline-blueprint-3' : 'text-ink-gray-5 border-transparent hover:text-ink-blueprint-4'"
        style="font-family:var(--font-body)"
        @click="activeTab = tab.id"
      >{{ tab.label }} <span v-if="tab.count" class="ml-1 text-[10px] opacity-70">{{ tab.count }}</span></button>
    </div>

    <!-- ───────────────────────── Overview ───────────────────────── -->
    <template v-if="activeTab === 'overview'">

      <!-- Lifecycle -->
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-1" style="font-family:var(--font-body)">Lifecycle</p>
        <p class="text-[12.5px] text-ink-gray-5 m-0 mb-4" style="font-family:var(--font-body)">The full life of this package from definition to closeout.</p>
        <div class="flex items-start overflow-x-auto pb-1">
          <template v-for="(step, i) in timelineSteps" :key="step.label">
            <div class="flex flex-col items-center gap-1.5 shrink-0" style="width:110px">
              <div
                class="size-7 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0"
                :class="step.state === 'done' ? 'bg-ink-green-3 text-white' : step.state === 'active' ? 'bg-ink-blueprint-4 text-white' : 'bg-surface-gray-2 text-ink-gray-4 border border-outline-gray-3'"
              >{{ step.state === 'done' ? '✓' : step.state === 'active' ? '●' : '○' }}</div>
              <p class="text-[11px] font-semibold m-0 text-center" :class="step.state === 'pending' ? 'text-ink-gray-4' : 'text-ink-gray-8'" style="font-family:var(--font-body)">{{ step.label }}</p>
              <p class="text-[10px] text-ink-gray-5 m-0 text-center" style="font-family:var(--font-body)">{{ step.sub }}</p>
            </div>
            <div v-if="i < timelineSteps.length - 1" class="h-[2px] flex-1 mt-[13px] min-w-[16px]" :class="step.state === 'done' ? 'bg-ink-green-3' : 'bg-outline-gray-2'" />
          </template>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <!-- What it is -->
        <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
          <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-3.5" style="font-family:var(--font-body)">What it is</p>
          <div class="grid grid-cols-[140px_1fr] gap-y-2.5 gap-x-3 text-[12.5px]" style="font-family:var(--font-body)">
            <span class="text-ink-gray-5">Package code</span><span class="text-ink-gray-8 font-medium">PKG-005</span>
            <span class="text-ink-gray-5">Name</span><span class="text-ink-gray-8 font-medium">Façade — glazing</span>
            <span class="text-ink-gray-5">Bill</span><span class="text-ink-gray-8 font-medium">Bill 4 · Façade, Finishes &amp; MEP</span>
            <span class="text-ink-gray-5">BOQ lines</span><span class="text-ink-gray-8 font-medium">14</span>
            <span class="text-ink-gray-5">Budget value</span><span class="text-ink-gray-9 font-bold">AED 2,450,000</span>
          </div>
        </div>

        <!-- Execution at a glance -->
        <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
          <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-3.5" style="font-family:var(--font-body)">Execution at a glance</p>
          <div class="grid grid-cols-[140px_1fr] gap-y-2.5 gap-x-3 text-[12.5px]" style="font-family:var(--font-body)">
            <span class="text-ink-gray-5">Mode</span><span><span class="px-2 py-0.5 rounded-md bg-surface-blueprint-1 text-ink-blueprint-4 text-[11px] font-semibold">⊟ Subcontracted</span></span>
            <span class="text-ink-gray-5">Responsible</span><span class="text-ink-gray-8 font-medium">Rashid Hassan (QS)</span>
            <span class="text-ink-gray-5">Subcontract</span><span class="text-ink-gray-8 font-medium">INT-26-014-SC-005</span>
            <span class="text-ink-gray-5">Subcontractor</span><span class="text-ink-gray-5 italic">— to be awarded —</span>
            <span class="text-ink-gray-5">Target award</span><span class="text-ink-gray-8 font-medium">22 May 2026 · <span class="text-ink-amber-3 font-semibold">2 days</span></span>
          </div>
          <div class="mt-3.5">
            <button
              type="button"
              class="px-3.5 py-2 rounded-lg bg-ink-blueprint-4 text-white text-[12.5px] font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
              style="font-family:var(--font-body)"
              @click="activeTab = 'execution'"
            >Continue tender setup →</button>
          </div>
        </div>
      </div>
    </template>

    <!-- ───────────────────────── Scope ───────────────────────── -->
    <template v-if="activeTab === 'scope'">
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-1" style="font-family:var(--font-body)">Scope of the package</p>
        <p class="text-[12.5px] text-ink-gray-5 m-0 mb-3" style="font-family:var(--font-body)">14 BOQ lines from the approved estimation.</p>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-outline-gray-2">
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Item</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Description</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Unit</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Qty</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Rate (AED)</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="line in scopeLines" :key="line.item" class="border-b border-outline-gray-2 last:border-b-0">
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ line.item }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7" style="font-family:var(--font-body)">{{ line.desc }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ line.unit }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.qty }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.rate }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.value }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="border-t-2 border-outline-gray-2">
                <td colspan="5" class="px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.04em] text-ink-gray-5 text-right" style="font-family:var(--font-body)">14 lines · Bill 4 — Façade, Finishes &amp; MEP</td>
                <td class="px-3 py-2.5 text-[13px] font-bold text-ink-gray-8 text-right whitespace-nowrap" style="font-family:var(--font-body)">AED 2,450,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </template>

    <!-- ───────────────────────── Execution ───────────────────────── -->
    <template v-if="activeTab === 'execution'">

      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white px-4 py-3 flex items-center gap-2.5 text-[12.5px]" style="font-family:var(--font-body)">
        <span class="text-ink-amber-3 font-semibold">⊟ Tender in progress</span>
        <span class="text-ink-gray-3">·</span>
        <span class="text-ink-gray-5">Currently setting up the subcontract for tender.</span>
      </div>

      <!-- Stepper -->
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <div class="flex items-center">
          <template v-for="(step, i) in stepperSteps" :key="step.label">
            <button
              type="button"
              class="flex flex-col items-center gap-1.5 shrink-0 focus:outline-none"
              style="width:120px"
              @click="gotoStep(i)"
            >
              <div
                class="size-8 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0"
                :class="i < stepIdx ? 'bg-ink-green-3 text-white' : i === stepIdx ? 'bg-ink-blueprint-4 text-white' : 'bg-surface-gray-2 text-ink-gray-4 border border-outline-gray-3'"
              >{{ i < stepIdx ? '✓' : i + 1 }}</div>
              <p class="text-[11.5px] font-semibold m-0 text-center" :class="i === stepIdx ? 'text-ink-blueprint-4' : i < stepIdx ? 'text-ink-gray-8' : 'text-ink-gray-4'" style="font-family:var(--font-body)">{{ step.label }}</p>
            </button>
            <div v-if="i < stepperSteps.length - 1" class="h-[2px] flex-1 mb-5 min-w-[16px]" :class="i < stepIdx ? 'bg-ink-green-3' : 'bg-outline-gray-2'" />
          </template>
        </div>
      </div>

      <!-- Step 0: Details -->
      <div v-if="stepIdx === 0" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-1" style="font-family:var(--font-body)">Subcontract details</p>
        <p class="text-[12.5px] text-ink-gray-5 m-0 mb-4" style="font-family:var(--font-body)">Define the commercial instrument that will wrap this scope.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">Subcontract code</label>
            <input class="ik-select" value="INT-26-014-SC-005" readonly />
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">Title</label>
            <input class="ik-select" value="Façade — glazing" />
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">Package type</label>
            <select class="ik-select">
              <option selected>Supply &amp; install</option>
              <option>Supply only</option>
              <option>Labour only</option>
            </select>
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">Currency</label>
            <select class="ik-select">
              <option selected>AED</option>
              <option>USD</option>
            </select>
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">Estimated value</label>
            <input class="ik-select" value="2,450,000" />
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">Cost basis</label>
            <div class="flex gap-2 flex-wrap">
              <button
                v-for="opt in costBasisOptions" :key="opt"
                type="button"
                class="px-3 py-2 rounded-lg border text-[12px] font-medium"
                :class="costBasis === opt ? 'border-outline-blueprint-3 bg-surface-blueprint-1 text-ink-blueprint-4' : 'border-outline-gray-3 text-ink-gray-6 hover:border-outline-blueprint-3'"
                style="font-family:var(--font-body)"
                @click="costBasis = opt"
              >{{ opt }}</button>
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">Start date</label>
            <input class="ik-select" value="15 Jun 2026" />
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">Completion date</label>
            <input class="ik-select" value="28 Feb 2027" />
          </div>
        </div>
      </div>

      <!-- Step 1: Terms -->
      <div v-if="stepIdx === 1" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-1" style="font-family:var(--font-body)">Commercial terms — back-to-back</p>
        <p class="text-[12.5px] text-ink-gray-5 m-0 mb-4" style="font-family:var(--font-body)">Subcontract terms default from the main contract.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">Payment terms</label>
            <div class="flex items-center gap-2">
              <input class="ik-select max-w-[100px]" value="45" />
              <span class="text-[12px] text-ink-gray-5" style="font-family:var(--font-body)">days</span>
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">Retention %</label>
            <div class="flex items-center gap-2">
              <input class="ik-select max-w-[100px]" value="5" />
              <span class="text-[12px] text-ink-gray-5" style="font-family:var(--font-body)">%</span>
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">Advance payment %</label>
            <div class="flex items-center gap-2">
              <input class="ik-select max-w-[100px]" value="10" />
              <span class="text-[12px] text-ink-gray-5" style="font-family:var(--font-body)">%</span>
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">Performance bond %</label>
            <div class="flex items-center gap-2 flex-wrap">
              <input class="ik-select max-w-[100px]" value="12" />
              <span class="text-[12px] text-ink-gray-5" style="font-family:var(--font-body)">%</span>
              <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-surface-amber-1 text-ink-amber-3" style="font-family:var(--font-body)">Overridden</span>
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">Defects liability period</label>
            <div class="flex items-center gap-2">
              <input class="ik-select max-w-[100px]" value="12" />
              <span class="text-[12px] text-ink-gray-5" style="font-family:var(--font-body)">months</span>
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5" style="font-family:var(--font-body)">LD per day</label>
            <div class="flex items-center gap-2">
              <input class="ik-select max-w-[100px]" value="0.1" />
              <span class="text-[12px] text-ink-gray-5" style="font-family:var(--font-body)">% of contract</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2: Documents -->
      <div v-if="stepIdx === 2" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-1" style="font-family:var(--font-body)">Tender documents</p>
        <p class="text-[12.5px] text-ink-gray-5 m-0 mb-4" style="font-family:var(--font-body)">References to documents going to bidders.</p>
        <div class="flex flex-col gap-2.5">
          <div v-for="doc in docRows" :key="doc.name" class="rounded-lg bg-surface-gray-1 px-3.5 py-3 flex items-start gap-3">
            <span class="text-[16px] text-ink-gray-5 shrink-0">{{ doc.icon }}</span>
            <div class="flex-1 min-w-0">
              <p class="text-[13px] font-semibold text-ink-gray-8 m-0" style="font-family:var(--font-body)">{{ doc.name }}</p>
              <p class="text-[11px] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">{{ doc.meta }}</p>
              <p v-if="doc.url" class="text-[11px] text-ink-blueprint-4 m-0 mt-1 truncate" style="font-family:var(--ik-font-mono, monospace)">{{ doc.url }}</p>
            </div>
            <span
              class="text-[10.5px] font-semibold px-2.5 py-1 rounded-full shrink-0"
              :class="doc.status === 'attached' ? 'bg-surface-green-1 text-ink-green-3' : 'bg-surface-blueprint-1 text-ink-blueprint-4'"
              style="font-family:var(--font-body)"
            >{{ doc.status === 'attached' ? '✓ Linked' : '⚙ Template' }}</span>
          </div>
        </div>
      </div>

      <!-- Step 3: Bidders -->
      <div v-if="stepIdx === 3" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-1" style="font-family:var(--font-body)">Bidder shortlist</p>
        <p class="text-[12.5px] text-ink-gray-5 m-0 mb-4" style="font-family:var(--font-body)">Kore suggested 5 bidders. Minimum 3 selected to lock for tender.</p>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-outline-gray-2">
                <th class="px-3 py-2.5 w-[40px]" />
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Bidder</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Prequalification</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Performance</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Last similar project</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="b in bidders" :key="b.name" class="border-b border-outline-gray-2 last:border-b-0">
                <td class="px-3 py-2.5">
                  <span
                    class="inline-flex items-center justify-center size-[18px] rounded-md text-[11px] font-bold"
                    :class="b.checked ? 'bg-ink-blueprint-4 text-white' : 'border border-outline-gray-3'"
                  >{{ b.checked ? '✓' : '' }}</span>
                </td>
                <td class="px-3 py-2.5">
                  <p class="text-[13px] font-semibold text-ink-gray-8 m-0" style="font-family:var(--font-body)">
                    {{ b.name }}
                    <span v-if="b.kore" class="ml-1.5 text-[10px] font-bold uppercase tracking-[0.04em] px-2 py-0.5 rounded-md bg-surface-amber-1 text-ink-amber-3">✦ Suggested</span>
                  </p>
                  <p class="text-[11px] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">{{ b.meta }}</p>
                </td>
                <td class="px-3 py-2.5">
                  <span
                    class="text-[10.5px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                    :class="b.prequal === 'active' ? 'bg-surface-green-1 text-ink-green-3' : 'bg-surface-amber-1 text-ink-amber-3'"
                    style="font-family:var(--font-body)"
                  >{{ b.prequal === 'active' ? '● Active' : '⚠ Expires 22 Jul' }}</span>
                </td>
                <td class="px-3 py-2.5 text-[12px] text-ink-amber-3 whitespace-nowrap">
                  <span v-for="n in 5" :key="n">{{ n <= b.stars ? '★' : '☆' }}</span>
                </td>
                <td class="px-3 py-2.5 text-[11.5px] text-ink-gray-7" style="font-family:var(--font-body)">{{ b.last }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-3 rounded-lg bg-surface-green-1 px-3.5 py-2.5 flex items-center justify-between gap-3 flex-wrap text-[11.5px] text-ink-green-3" style="font-family:var(--font-body)">
          <span><strong>4 bidders selected.</strong> Minimum 3 required — ready.</span>
          <span>✦ Kore: shortlist diversity OK · 1 low-rated bidder dropped</span>
        </div>
      </div>

      <!-- Step actions bar -->
      <div class="ik-card sticky bottom-0 z-10 rounded-xl border border-outline-gray-2 bg-surface-white px-5 py-3.5 flex items-center justify-between gap-3 flex-wrap">
        <button
          type="button"
          class="px-3.5 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          style="font-family:var(--font-body)"
          @click="showScreen('a1b')"
        >← Back to Subcontracts</button>
        <div class="text-[12px] text-ink-gray-6" style="font-family:var(--font-body)">
          Step <strong class="text-ink-gray-8">{{ stepIdx + 1 }}</strong> of {{ stepperSteps.length }} ·
          <span :class="isLastStep ? 'text-ink-green-3 font-semibold' : 'text-ink-amber-3 font-semibold'">{{ isLastStep ? 'Ready for tender' : 'Defining' }}</span>
        </div>
        <div class="flex items-center gap-2.5">
          <button
            type="button"
            class="px-3.5 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 disabled:opacity-40 disabled:cursor-not-allowed"
            style="font-family:var(--font-body)"
            :disabled="stepIdx === 0"
            @click="prevStep"
          >← Back</button>
          <button
            type="button"
            class="px-3.5 py-2 rounded-lg bg-ink-blueprint-4 text-white text-[12.5px] font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
            style="font-family:var(--font-body)"
            @click="nextStep"
          >{{ isLastStep ? '✉ Lock for tender →' : 'Next →' }}</button>
        </div>
      </div>
    </template>

    <!-- ───────────────────────── Bid comparison ───────────────────────── -->
    <template v-if="activeTab === 'bid-compare'">

      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-1" style="font-family:var(--font-body)">Bid comparison — PKG-005 Façade glazing</p>
        <p class="text-[12.5px] text-ink-gray-5 m-0 mb-3.5" style="font-family:var(--font-body)">Tender closed Friday 17:00 GST. 3 of 4 bids received.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div v-for="b in bcSummary" :key="b.label" class="rounded-lg bg-surface-gray-1 p-3">
            <p class="text-[10px] font-bold uppercase tracking-[0.07em] text-ink-gray-5 m-0 mb-1.5" style="font-family:var(--font-body)">{{ b.label }}</p>
            <p class="text-[15px] font-bold text-ink-gray-9 m-0 mb-0.5" style="font-family:var(--font-body)">{{ b.val }}</p>
            <p class="text-[10.5px] text-ink-gray-5 m-0" style="font-family:var(--font-body)">{{ b.sub }}</p>
          </div>
        </div>
      </div>

      <!-- Bidder headers -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div v-for="b in bcBidders" :key="b.name" class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-4">
          <p class="text-[13px] font-bold text-ink-gray-8 m-0 mb-2" style="font-family:var(--font-body)">{{ b.name }}</p>
          <div class="flex items-center gap-1.5 flex-wrap mb-2.5">
            <span
              class="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              :class="b.prequal === 'ok' ? 'bg-surface-green-1 text-ink-green-3' : 'bg-surface-amber-1 text-ink-amber-3'"
              style="font-family:var(--font-body)"
            >{{ b.prequal === 'ok' ? '● Prequal current' : '⚠ Prequal expiring' }}</span>
            <span
              class="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              :class="bandClasses(b.band)"
              style="font-family:var(--font-body)"
            >{{ b.band }}</span>
          </div>
          <p class="text-[14px] font-bold text-ink-gray-9 m-0" style="font-family:var(--font-body)">{{ b.total }}</p>
          <p v-if="b.delta" class="text-[10.5px] font-semibold m-0 mt-0.5" :class="b.deltaTone === 'green' ? 'text-ink-green-3' : 'text-ink-amber-3'" style="font-family:var(--font-body)">{{ b.delta }}</p>
        </div>
      </div>

      <!-- Pricing table -->
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-3" style="font-family:var(--font-body)">Pricing — line by line (amount basis)</p>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-outline-gray-2">
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Item</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Description</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Unit</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Qty</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Budget rate</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Budget amt</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap bg-surface-blueprint-1" style="font-family:var(--font-body)">L0 BOQ</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Skyglaz</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Alumitech</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Façade Sol.</th>
                <th class="text-right px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Glazco</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="line in bcPricingLines" :key="line.item" class="border-b border-outline-gray-2 last:border-b-0">
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ line.item }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7" style="font-family:var(--font-body)">{{ line.desc }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ line.unit }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.qty }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-5 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.budgetRate }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-5 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.budgetAmt }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap bg-surface-blueprint-1" style="font-family:var(--font-body)">{{ line.l0 }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.skyglaz }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.alumitech }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.facadeSol }}</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-5 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.glazco }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="border-t-2 border-outline-gray-2">
                <td colspan="5" class="px-3 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.04em] text-ink-gray-5 text-right" style="font-family:var(--font-body)">Totals (raw)</td>
                <td class="px-3 py-2.5 text-[13px] font-bold text-ink-gray-8 text-right whitespace-nowrap" style="font-family:var(--font-body)">2,450,000</td>
                <td class="px-3 py-2.5 text-[13px] font-bold text-ink-gray-8 text-right whitespace-nowrap bg-surface-blueprint-1" style="font-family:var(--font-body)">2,351,920</td>
                <td class="px-3 py-2.5 text-[13px] font-bold text-ink-gray-8 text-right whitespace-nowrap" style="font-family:var(--font-body)">2,368,600</td>
                <td class="px-3 py-2.5 text-[13px] font-bold text-ink-gray-8 text-right whitespace-nowrap" style="font-family:var(--font-body)">2,374,490</td>
                <td class="px-3 py-2.5 text-[13px] font-bold text-ink-gray-8 text-right whitespace-nowrap" style="font-family:var(--font-body)">2,534,560</td>
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-5 text-right whitespace-nowrap" style="font-family:var(--font-body)">—</td>
              </tr>
              <tr>
                <td colspan="5" class="px-3 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.04em] text-ink-gray-5 text-right" style="font-family:var(--font-body)">Delta vs budget</td>
                <td class="px-3 py-2.5" />
                <td class="px-3 py-2.5 text-[13px] font-bold text-ink-green-3 text-right whitespace-nowrap bg-surface-blueprint-1" style="font-family:var(--font-body)">−4.0%</td>
                <td class="px-3 py-2.5 text-[13px] font-bold text-ink-green-3 text-right whitespace-nowrap" style="font-family:var(--font-body)">−3.3%</td>
                <td class="px-3 py-2.5 text-[13px] font-bold text-ink-green-3 text-right whitespace-nowrap" style="font-family:var(--font-body)">−3.1%</td>
                <td class="px-3 py-2.5 text-[13px] font-bold text-ink-amber-3 text-right whitespace-nowrap" style="font-family:var(--font-body)">+3.5%</td>
                <td class="px-3 py-2.5" />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <!-- Terms table -->
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-3" style="font-family:var(--font-body)">Terms — back-to-back compliance</p>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-outline-gray-2">
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Term</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Main contract</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Skyglaz</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Alumitech</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Façade Sol.</th>
                <th class="text-left px-3 py-2.5 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Glazco</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="t in bcTerms" :key="t.term" class="border-b border-outline-gray-2 last:border-b-0">
                <td class="px-3 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ t.term }}</td>
                <td class="px-3 py-2.5 text-[11.5px] text-ink-gray-5" style="font-family:var(--font-body)">{{ t.main }}</td>
                <td class="px-3 py-2.5"><span class="text-[11px] font-semibold px-2 py-0.5 rounded-md" :class="termClasses(t.skyglaz.tone)" style="font-family:var(--font-body)">{{ t.skyglaz.label }}</span></td>
                <td class="px-3 py-2.5"><span class="text-[11px] font-semibold px-2 py-0.5 rounded-md" :class="termClasses(t.alumitech.tone)" style="font-family:var(--font-body)">{{ t.alumitech.label }}</span></td>
                <td class="px-3 py-2.5"><span class="text-[11px] font-semibold px-2 py-0.5 rounded-md" :class="termClasses(t.facadeSol.tone)" style="font-family:var(--font-body)">{{ t.facadeSol.label }}</span></td>
                <td class="px-3 py-2.5 text-[12px] text-ink-gray-5" style="font-family:var(--font-body)">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Recommendation -->
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-3" style="font-family:var(--font-body)">Recommend a bidder</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          <label
            v-for="opt in bcPicks" :key="opt.name"
            class="rounded-lg border p-3 flex items-start gap-2.5 cursor-pointer"
            :class="opt.disabled ? 'border-outline-gray-2 opacity-50 cursor-not-allowed' : recommendation === opt.name ? 'border-outline-blueprint-3 bg-surface-blueprint-1' : 'border-outline-gray-2 hover:border-outline-blueprint-3'"
          >
            <input type="radio" name="bc-pick" class="mt-1" :disabled="opt.disabled" :checked="recommendation === opt.name" @change="recommendation = opt.name" />
            <div>
              <p class="text-[12.5px] font-semibold text-ink-gray-8 m-0" style="font-family:var(--font-body)">{{ opt.name }}</p>
              <p class="text-[11px] m-0 mt-0.5" :class="opt.disabled ? 'text-ink-gray-5' : 'text-ink-gray-5'" style="font-family:var(--font-body)">{{ opt.meta }}</p>
            </div>
          </label>
        </div>
        <div class="mt-3.5">
          <label class="block text-[11px] font-bold uppercase tracking-[0.06em] text-ink-gray-5 mb-1.5" style="font-family:var(--font-body)">Reasoning</label>
          <textarea class="ik-select w-full" rows="3" placeholder="Why this recommendation?" />
        </div>
        <div class="mt-3 flex items-center gap-2.5 flex-wrap">
          <button
            type="button"
            class="px-3.5 py-2 rounded-lg bg-ink-blueprint-4 text-white text-[12.5px] font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
            style="font-family:var(--font-body)"
            @click="toast.info('Submit recommendation — not yet built in this prototype.')"
          >Submit recommendation →</button>
          <span class="text-[11.5px] text-ink-gray-5" style="font-family:var(--font-body)">Routes to CM (James Chen) then PD (Tarek Al-Mansouri).</span>
        </div>
      </div>
    </template>

    <!-- ───────────────────────── Award & mobilisation ───────────────────────── -->
    <template v-if="activeTab === 'award-mob'">

      <!-- Approval row -->
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <div class="flex items-start gap-3.5">
          <div class="size-9 rounded-full bg-ink-green-3 text-white flex items-center justify-center text-[16px] font-bold shrink-0">✓</div>
          <div>
            <p class="text-[13.5px] font-semibold text-ink-gray-8 m-0" style="font-family:var(--font-body)">Award approved · Skyglaz Industries at AED 2,368,600</p>
            <p class="text-[11.5px] text-ink-gray-5 m-0 mt-1" style="font-family:var(--font-body)">Approved by Tarek Al-Mansouri (PD) · 21 May 2026 14:32</p>
            <p class="text-[11.5px] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">Reviewed by James Chen (CM) · 21 May 2026 09:14</p>
            <p class="text-[11.5px] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">Recommended by Rashid Hassan (QS) · 20 May 2026 17:48</p>
          </div>
        </div>
      </div>

      <!-- Checklist -->
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-3.5" style="font-family:var(--font-body)">Pre-execution checklist</p>
        <div class="flex items-center gap-3 mb-4 flex-wrap">
          <div class="rounded-lg bg-surface-gray-1 px-4 py-2.5 text-center">
            <p class="text-[20px] font-bold text-ink-gray-9 m-0" style="font-family:var(--font-body)">2</p>
            <p class="text-[10.5px] text-ink-gray-5 m-0" style="font-family:var(--font-body)">Complete</p>
          </div>
          <div class="rounded-lg bg-surface-blueprint-1 px-4 py-2.5 text-center">
            <p class="text-[20px] font-bold text-ink-blueprint-4 m-0" style="font-family:var(--font-body)">3</p>
            <p class="text-[10.5px] text-ink-blueprint-4 m-0" style="font-family:var(--font-body)">In progress</p>
          </div>
          <div class="rounded-lg bg-surface-gray-1 px-4 py-2.5 text-center">
            <p class="text-[20px] font-bold text-ink-gray-9 m-0" style="font-family:var(--font-body)">3</p>
            <p class="text-[10.5px] text-ink-gray-5 m-0" style="font-family:var(--font-body)">Not started</p>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div v-for="item in checklistItems" :key="item.name" class="rounded-lg bg-surface-gray-1 px-3.5 py-3 flex items-center gap-3.5 flex-wrap sm:flex-nowrap">
            <div
              class="size-7 rounded-full flex items-center justify-center text-[13px] shrink-0"
              :class="item.state === 'done' ? 'bg-ink-green-3 text-white' : item.state === 'progress' ? 'bg-surface-amber-1 text-ink-amber-3' : 'bg-surface-gray-2 text-ink-gray-4'"
            >{{ item.state === 'done' ? '✓' : item.state === 'progress' ? '⏳' : '○' }}</div>
            <div class="flex-1 min-w-[180px]">
              <p class="text-[12.5px] font-semibold text-ink-gray-8 m-0" style="font-family:var(--font-body)">{{ item.name }}</p>
              <p class="text-[11px] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">{{ item.meta }}</p>
            </div>
            <div class="text-[11px] text-ink-gray-5 min-w-[160px]" style="font-family:var(--font-body)">{{ item.actor }}</div>
            <span
              class="text-[10.5px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
              :class="item.state === 'done' ? 'bg-surface-green-1 text-ink-green-3' : item.state === 'progress' ? 'bg-surface-amber-1 text-ink-amber-3' : 'bg-surface-gray-2 text-ink-gray-5'"
              style="font-family:var(--font-body)"
            >{{ item.statusLabel }}</span>
          </div>
        </div>
      </div>

      <!-- Confirm mobilisation -->
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-1" style="font-family:var(--font-body)">Confirm mobilisation</p>
        <p class="text-[12.5px] text-ink-gray-5 m-0 mb-3.5" style="font-family:var(--font-body)">When all mandatory items are complete, confirming mobilisation transitions PKG-005 from "Awarded" to "Active".</p>
        <div class="rounded-lg bg-surface-gray-1 p-4 flex items-center gap-3.5 flex-wrap">
          <span class="text-[24px]">⏳</span>
          <div class="flex-1 min-w-[220px]">
            <p class="text-[13px] font-semibold text-ink-gray-8 m-0" style="font-family:var(--font-body)">Not ready — 3 of 8 items still open, 3 not started</p>
            <p class="text-[11px] text-ink-gray-5 m-0 mt-0.5" style="font-family:var(--font-body)">System will prompt confirmation when all 8 items reach Complete.</p>
          </div>
          <button
            type="button"
            class="px-3.5 py-2 rounded-lg border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-4 cursor-not-allowed"
            style="font-family:var(--font-body)"
            disabled
          >Confirm mobilisation →</button>
        </div>
      </div>
    </template>

    <!-- ───────────────────────── History ───────────────────────── -->
    <template v-if="activeTab === 'history'">
      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-5">
        <p class="text-[13px] font-semibold text-ink-gray-8 m-0 mb-1" style="font-family:var(--font-body)">Full activity log</p>
        <p class="text-[12.5px] text-ink-gray-5 m-0 mb-3.5" style="font-family:var(--font-body)">Every event on this package since estimation approval.</p>
        <div class="flex flex-col">
          <div
            v-for="(row, i) in activity" :key="i"
            class="grid grid-cols-[120px_14px_1fr_auto] gap-3.5 items-center py-2.5 border-b border-dashed border-outline-gray-2 last:border-b-0 text-[12.5px]"
            style="font-family:var(--font-body)"
          >
            <span class="text-[11px] text-ink-gray-5">{{ row.time }}</span>
            <span class="size-2 rounded-full" :class="dotClass(row.dot)" />
            <span class="text-ink-gray-7" v-html="row.text" />
            <span class="text-[11px] text-ink-gray-5 text-right">{{ row.actor }}</span>
          </div>
        </div>
      </div>
    </template>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { showScreen, tenderModalOpen } from './commercialNav'
import { toast } from '../Toast'

type PkgTab = 'overview' | 'scope' | 'execution' | 'bid-compare' | 'award-mob' | 'history'
const activeTab = ref<PkgTab>('overview')

const tabs: { id: PkgTab; label: string; count?: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'scope', label: 'Scope', count: '14' },
  { id: 'execution', label: 'Execution' },
  { id: 'bid-compare', label: 'Bid comparison', count: '3/4' },
  { id: 'award-mob', label: 'Award & mobilisation' },
  { id: 'history', label: 'History' },
]

// ── Overview: lifecycle ──
interface TimelineStep {
  label: string
  sub: string
  state: 'done' | 'active' | 'pending'
}
const timelineSteps: TimelineStep[] = [
  { label: 'Mode set', sub: '14 Jan 2026', state: 'done' },
  { label: 'Scope locked', sub: '18 Jan 2026', state: 'done' },
  { label: 'Defining', sub: '12 Apr 2026', state: 'done' },
  { label: 'In tender', sub: 'Closes Friday', state: 'active' },
  { label: 'Award pending', sub: '—', state: 'pending' },
  { label: 'Active', sub: 'Target 22 May', state: 'pending' },
  { label: 'Closed', sub: '—', state: 'pending' },
]

// ── Scope ──
interface ScopeLine {
  item: string
  desc: string
  unit: string
  qty: string
  rate: string
  value: string
}
const scopeLines: ScopeLine[] = [
  { item: '4.1.1', desc: 'Unitised curtain wall, IGU 6/16/6 low-e', unit: 'm²', qty: '2,840.00', rate: '480', value: '1,363,200' },
  { item: '4.1.2', desc: 'Spider-fitting glass to atrium', unit: 'm²', qty: '220.00', rate: '820', value: '180,400' },
  { item: '4.1.3', desc: 'Frameless glass to entrance lobby', unit: 'm²', qty: '96.00', rate: '940', value: '90,240' },
  { item: '4.1.4', desc: 'Sealants & weather sealing system', unit: 'm', qty: '1,840.00', rate: '42', value: '77,280' },
  { item: '4.1.5', desc: 'Hardware: handles, hinges, locks', unit: 'lot', qty: '1.00', rate: '68,400', value: '68,400' },
  { item: '4.1.6', desc: 'Performance testing & commissioning', unit: 'lot', qty: '1.00', rate: '42,000', value: '42,000' },
  { item: '4.1.7', desc: 'Aluminium framing system, thermally broken', unit: 'm', qty: '1,420.00', rate: '185', value: '262,700' },
  { item: '4.1.8', desc: 'Structural silicone glazing, premium grade', unit: 'm', qty: '980.00', rate: '52', value: '50,960' },
  { item: '4.1.9', desc: 'Brackets, anchors and fixings, stainless', unit: 'lot', qty: '1.00', rate: '84,200', value: '84,200' },
  { item: '4.1.10', desc: 'Insulation: mineral wool fire-rated', unit: 'm²', qty: '2,840.00', rate: '21', value: '59,640' },
  { item: '4.1.11', desc: 'Cleaning & final protective film', unit: 'm²', qty: '2,840.00', rate: '8', value: '22,720' },
  { item: '4.1.12', desc: 'Mock-up panel, full-scale visual', unit: 'nr', qty: '2.00', rate: '28,500', value: '57,000' },
  { item: '4.1.13', desc: 'Site management & coordination', unit: 'mo', qty: '9.00', rate: '8,140', value: '73,260' },
  { item: '4.1.14', desc: 'Warranty bond & post-handover support', unit: 'lot', qty: '1.00', rate: '18,000', value: '18,000' },
]

// ── Execution: stepper ──
const stepperSteps = [
  { label: 'Details' },
  { label: 'Terms' },
  { label: 'Documents' },
  { label: 'Bidders' },
]
const stepIdx = ref(0)
const isLastStep = computed(() => stepIdx.value === stepperSteps.length - 1)

function gotoStep(i: number) {
  if (i < 0 || i >= stepperSteps.length) return
  stepIdx.value = i
}
function nextStep() {
  if (stepIdx.value < stepperSteps.length - 1) {
    stepIdx.value += 1
  } else {
    tenderModalOpen.value = true
  }
}
function prevStep() {
  if (stepIdx.value > 0) stepIdx.value -= 1
}

const costBasisOptions = ['Lump sum', 'Schedule of rates', 'Cost plus']
const costBasis = ref('Lump sum')

interface DocRow {
  icon: string
  name: string
  meta: string
  status: 'attached' | 'template'
  url?: string
}
const docRows: DocRow[] = [
  { icon: '▤', name: 'Specifications · Façade — glazing', meta: 'SPEC-FAC-001 · Rev C · 28 pages', status: 'attached', url: 'https://intrakore.aconex.com/projects/sbb/specs/spec-fac-001-rc.pdf' },
  { icon: '▤', name: 'Drawing set · Architectural elevations', meta: 'AR-014 Rev B · 6 sheets · 19.2 MB', status: 'attached', url: 'https://designsmith.wetransfer.com/downloads/AR-014-revB-elevations' },
  { icon: '▤', name: 'Particular conditions of contract', meta: 'From main contract back-to-back · 14 pages', status: 'attached', url: 'https://intrakore.dropbox.com/projects/sbb/pcc-sc-005.pdf' },
  { icon: '⚙', name: 'Form of tender & pricing schedule', meta: 'Template auto-populated with 14 BOQ line items', status: 'template' },
  { icon: '⚙', name: 'Schedule of rates (Excel)', meta: 'Auto-populated with the 14 BOQ lines · empty rate column', status: 'template' },
]

interface Bidder {
  name: string
  checked: boolean
  kore: boolean
  meta: string
  prequal: 'active' | 'expiring'
  stars: number
  last: string
}
const bidders: Bidder[] = [
  { name: 'Skyglaz Industries', checked: true, kore: true, meta: 'Trade licence active · Dubai-based · 14 yrs', prequal: 'active', stars: 4, last: 'The Address Residences · AED 2.8M · 2024' },
  { name: 'Alumitech Façades', checked: true, kore: true, meta: 'Trade licence active · Abu Dhabi · 22 yrs', prequal: 'active', stars: 5, last: 'Marina Crest Tower · AED 4.2M · 2023' },
  { name: 'Glazco Building Systems', checked: true, kore: true, meta: 'Trade licence active · Sharjah · 8 yrs', prequal: 'expiring', stars: 3, last: 'JBR Office Block · AED 1.6M · 2023' },
  { name: 'Façade Solutions FZE', checked: true, kore: true, meta: 'Trade licence active · JAFZA · 11 yrs', prequal: 'active', stars: 4, last: 'DIFC Pavilion · AED 3.4M · 2024' },
  { name: 'Crystal Cladding Co', checked: false, kore: true, meta: 'Trade licence active · Ajman · 5 yrs', prequal: 'active', stars: 2, last: 'Sharjah Mall Ext. · AED 0.9M · 2024' },
]

// ── Bid comparison ──
const bcSummary = [
  { label: 'Budget', val: 'AED 2,450,000', sub: '' },
  { label: 'Theoretical L0', val: 'AED 2,351,920', sub: 'cherry-pick lowest per line' },
  { label: 'Bids received', val: '3 of 4', sub: 'Glazco awaiting' },
  { label: 'Recommended landing', val: '2.35M – 2.45M', sub: 'between L0 and budget' },
]

interface BcBidder {
  name: string
  prequal: 'ok' | 'warn'
  band: 'recommended' | 'acceptable' | 'review'
  total: string
  delta: string
  deltaTone: 'green' | 'amber'
}
const bcBidders: BcBidder[] = [
  { name: 'Skyglaz Industries', prequal: 'ok', band: 'recommended', total: 'AED 2,368,600', delta: '−3.3% vs budget', deltaTone: 'green' },
  { name: 'Alumitech Façades', prequal: 'ok', band: 'recommended', total: 'AED 2,374,490', delta: '−3.1% vs budget (normalised 2.40M)', deltaTone: 'green' },
  { name: 'Façade Solutions FZE', prequal: 'ok', band: 'acceptable', total: 'AED 2,534,560', delta: '+3.5% vs budget', deltaTone: 'amber' },
  { name: 'Glazco LLC', prequal: 'warn', band: 'review', total: '— Bid not received —', delta: '', deltaTone: 'amber' },
]

function bandClasses(band: BcBidder['band']) {
  if (band === 'recommended') return 'bg-surface-green-1 text-ink-green-3'
  if (band === 'acceptable') return 'bg-surface-amber-1 text-ink-amber-3'
  return 'bg-surface-gray-2 text-ink-gray-5'
}

interface BcPricingLine {
  item: string
  desc: string
  unit: string
  qty: string
  budgetRate: string
  budgetAmt: string
  l0: string
  skyglaz: string
  alumitech: string
  facadeSol: string
  glazco: string
}
const bcPricingLines: BcPricingLine[] = [
  { item: '4.1.1', desc: 'Unitised curtain wall, IGU 6/16/6', unit: 'm²', qty: '2,840', budgetRate: '480', budgetAmt: '1,363,200', l0: '1,329,120', skyglaz: '1,329,120', alumitech: '1,349,000', facadeSol: '1,405,800', glazco: '—' },
  { item: '4.1.2', desc: 'Spider-fitting glass to atrium', unit: 'm²', qty: '220', budgetRate: '820', budgetAmt: '180,400', l0: '174,900', skyglaz: '178,200', alumitech: '174,900', facadeSol: '185,900', glazco: '—' },
  { item: '4.1.3', desc: 'Frameless glass to entrance lobby', unit: 'm²', qty: '96', budgetRate: '940', budgetAmt: '90,240', l0: '88,320', skyglaz: '88,320', alumitech: '89,760', facadeSol: '93,120', glazco: '—' },
  { item: '4.1.7', desc: 'Aluminium framing system', unit: 'm', qty: '1,420', budgetRate: '185', budgetAmt: '262,700', l0: '252,760', skyglaz: '258,440', alumitech: '252,760', facadeSol: '272,640', glazco: '—' },
  { item: '4.1.12', desc: 'Mock-up panel, full-scale visual', unit: 'nr', qty: '2', budgetRate: '28,500', budgetAmt: '57,000', l0: '53,000', skyglaz: '55,600', alumitech: '53,000', facadeSol: '58,400', glazco: '—' },
  { item: '4.1.14', desc: 'Warranty bond & support', unit: 'lot', qty: '1', budgetRate: '18,000', budgetAmt: '18,000', l0: '12,400', skyglaz: '17,500', alumitech: '12,400', facadeSol: '19,200', glazco: '—' },
]

interface BcTerm {
  term: string
  main: string
  skyglaz: { label: string; tone: 'ok' | 'warn' }
  alumitech: { label: string; tone: 'ok' | 'warn' }
  facadeSol: { label: string; tone: 'ok' | 'warn' }
}
const bcTerms: BcTerm[] = [
  { term: 'Contract type', main: 'Lumpsum', skyglaz: { label: 'Lumpsum', tone: 'ok' }, alumitech: { label: 'Lumpsum', tone: 'ok' }, facadeSol: { label: 'Remeasured proposed', tone: 'warn' } },
  { term: 'Retention', main: '10% (5% at PC, 5% at FAC)', skyglaz: { label: '10%', tone: 'ok' }, alumitech: { label: '10%', tone: 'ok' }, facadeSol: { label: '10%', tone: 'ok' } },
  { term: 'Payment terms', main: '45 days from cert', skyglaz: { label: '45 days', tone: 'ok' }, alumitech: { label: '30 days requested', tone: 'warn' }, facadeSol: { label: '45 days', tone: 'ok' } },
  { term: 'Performance bond', main: '10% of contract value', skyglaz: { label: '10%', tone: 'ok' }, alumitech: { label: '10%', tone: 'ok' }, facadeSol: { label: '10%', tone: 'ok' } },
  { term: 'Defects liability', main: '12 months from PC', skyglaz: { label: '12 months', tone: 'ok' }, alumitech: { label: '12 months', tone: 'ok' }, facadeSol: { label: '6 months proposed', tone: 'warn' } },
  { term: 'LD rate', main: 'AED 8,500 / day, capped 5%', skyglaz: { label: 'Accepted', tone: 'ok' }, alumitech: { label: 'Accepted', tone: 'ok' }, facadeSol: { label: 'Accepted', tone: 'ok' } },
  { term: 'Variations basis', main: 'Cost + 12% O&P', skyglaz: { label: 'Accepted', tone: 'ok' }, alumitech: { label: 'Accepted', tone: 'ok' }, facadeSol: { label: '15% O&P requested', tone: 'warn' } },
]

function termClasses(tone: 'ok' | 'warn') {
  return tone === 'ok' ? 'bg-surface-green-1 text-ink-green-3' : 'bg-surface-amber-1 text-ink-amber-3'
}

const bcPicks: { name: string; meta: string; disabled?: boolean }[] = [
  { name: 'Skyglaz Industries', meta: 'AED 2,368,600 · Recommended' },
  { name: 'Alumitech Façades', meta: 'AED 2,374,490 · Recommended' },
  { name: 'Façade Solutions FZE', meta: 'AED 2,534,560 · Acceptable' },
  { name: 'Glazco LLC', meta: 'Bid not received', disabled: true },
  { name: 'Reject all & re-tender', meta: 'Restart procurement' },
]
const recommendation = ref('')

// ── Award & mobilisation ──
interface ChecklistItem {
  name: string
  meta: string
  actor: string
  state: 'done' | 'progress' | 'notstarted'
  statusLabel: string
}
const checklistItems: ChecklistItem[] = [
  { name: 'Performance bond', meta: '10% · AED 236,860 · bank guarantee', actor: 'Skyglaz · QS verifies', state: 'progress', statusLabel: 'In progress' },
  { name: 'Insurance certificates', meta: 'Works AED 30M · PI AED 10M', actor: 'Skyglaz · QS verifies', state: 'progress', statusLabel: 'In progress' },
  { name: 'Subcontract agreement', meta: 'Full back-to-back instrument', actor: 'Contracts team · drafts', state: 'notstarted', statusLabel: 'Not started' },
  { name: 'HSE pack', meta: 'Method statements · risk assessments · fall-protection plan', actor: 'Skyglaz · HSE Manager approves', state: 'progress', statusLabel: 'In progress' },
  { name: 'Programme acceptance', meta: 'Detailed installation programme reviewed · no clashes', actor: 'QS + Planning', state: 'done', statusLabel: 'Complete' },
  { name: 'Drawings & specifications transfer', meta: 'IFC drawings pack AR-014 Rev B · receipt acknowledged', actor: 'QS · Skyglaz acknowledges', state: 'done', statusLabel: 'Complete' },
  { name: 'Site induction booking', meta: 'Skyglaz site team scheduled for HSE induction', actor: 'HSE Manager schedules', state: 'notstarted', statusLabel: 'Not started' },
  { name: 'Kick-off meeting', meta: 'Internal team + Skyglaz key personnel', actor: 'QS chairs', state: 'notstarted', statusLabel: 'Not started' },
]

// ── History ──
interface ActivityRow {
  time: string
  dot: 'info' | 'active' | ''
  text: string
  actor: string
}
const activity: ActivityRow[] = [
  { time: 'Yesterday 14:08', dot: 'info', text: '<strong>Bid received</strong> from Skyglaz Industries · AED 2.41M', actor: 'Skyglaz · automated' },
  { time: 'Mon 11:20', dot: 'info', text: '<strong>Bid received</strong> from Alumitech Façades · AED 2.38M', actor: 'Alumitech · automated' },
  { time: 'Mon 09:15', dot: 'info', text: '<strong>Bid received</strong> from Façade Solutions FZE · AED 2.52M', actor: 'Façade Solutions · automated' },
  { time: '12 Apr 2026 16:42', dot: 'active', text: '<strong>Tender issued</strong> to 4 bidders · response deadline 21 May 17:00 GST', actor: 'Rashid Hassan · QS' },
  { time: '12 Apr 2026 16:38', dot: '', text: '<strong>Drawing pack updated</strong> AR-014 Rev A → Rev B before issue', actor: 'Rashid Hassan · QS' },
  { time: '12 Apr 2026 14:10', dot: '', text: '<strong>Bidder shortlist confirmed</strong> 4 of 5 Kore-suggested bidders selected', actor: 'Rashid Hassan · QS' },
  { time: '8 Apr 2026 11:24', dot: '', text: '<strong>Back-to-back terms drafted</strong> 6 of 7 match main contract', actor: 'Rashid Hassan · QS' },
  { time: '18 Jan 2026 09:00', dot: 'active', text: '<strong>Scope locked</strong> 14 BOQ lines from EST-2025-031', actor: 'Rashid Hassan · QS' },
  { time: '14 Jan 2026 10:30', dot: 'active', text: '<strong>Execution mode set</strong> Subcontracted · QS responsible', actor: 'Rashid Hassan · QS' },
]

function dotClass(dot: ActivityRow['dot']) {
  if (dot === 'active') return 'bg-ink-green-3'
  if (dot === 'info') return 'bg-ink-blueprint-4'
  return 'bg-ink-gray-4'
}
</script>

<style scoped>
.ik-card {
  box-shadow:
    0px 0px 0.5px rgba(0, 0, 0, 0.12),
    0px 0.5px 1px rgba(0, 0, 0, 0.15),
    0px 2px 1.5px rgba(0, 0, 0, 0.16);
}
[data-theme='dark'] .ik-card {
  background-color: var(--surface-gray-2);
  border-color: var(--outline-gray-3);
}
.ik-select {
  font-family: var(--font-body);
  font-size: 12.5px;
  color: var(--ink-gray-7);
  background-color: var(--surface-white);
  border: 1px solid var(--outline-gray-3);
  border-radius: 8px;
  padding: 6px 10px;
}
.ik-select:hover {
  border-color: var(--outline-blueprint-3);
}
.ik-select:focus-visible {
  outline: 2px solid var(--outline-blueprint-2);
  outline-offset: 1px;
}
[data-theme='dark'] .ik-select {
  background-color: var(--surface-gray-3);
  border-color: var(--outline-gray-4);
  color: var(--ink-gray-7);
}
</style>
