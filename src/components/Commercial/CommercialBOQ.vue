<template>
  <div class="flex flex-col gap-6">

    <!-- Hero / header -->
    <div
      class="ik-hero-card rounded-3xl border border-outline-blueprint-1 p-6 w-full flex items-start justify-between gap-4 flex-wrap"
      style="border-radius: 24px; background-image: linear-gradient(79.62deg, rgba(249,249,249,0.4) 63.76%, rgba(141,149,246,0.4) 98.33%); box-shadow: 0px 0px 1px rgba(0,0,0,0.12), 0px 0.5px 2px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.16);"
    >
      <div>
        <h1 class="text-[28px] font-medium leading-[1.2] text-ink-gray-8 m-0" style="font-family:var(--font-display)">Skyline Business Bay</h1>
        <p class="text-[13px] font-semibold text-ink-blueprint-4 m-0 mt-1" style="font-family:var(--font-body)">Packages</p>
        <p class="text-[14px] leading-[1.15] text-ink-gray-6 tracking-[0.28px] m-0 mt-1" style="font-family:var(--font-body); font-weight:350;">
          Define what work to procure and how each chunk gets delivered.
        </p>
        <div class="flex items-center gap-2 text-[12px] text-ink-gray-6 flex-wrap mt-3" style="font-family:var(--font-body)">
          <span>14 packages</span>
          <span class="text-ink-gray-3">·</span>
          <span class="text-ink-amber-3 font-semibold">4 need a mode</span>
          <span class="text-ink-gray-3">·</span>
          <span>405 of 412 BOQ lines allocated</span>
          <span class="text-ink-gray-3">·</span>
          <span class="text-ink-amber-3 font-semibold">7 unallocated</span>
          <span class="text-ink-gray-3">·</span>
          <span>AED 24.6M committed</span>
        </div>
      </div>
      <button
        type="button"
        class="px-3.5 py-2 rounded-md border border-outline-gray-3 text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 shrink-0"
        style="font-family:var(--font-body)"
        @click="toast.info('Export BOQ — not yet built in this prototype.')"
      >Export BOQ</button>
    </div>

    <!-- Status strip -->
    <div v-if="stripVisible" class="rounded-xl border border-outline-amber-3 bg-surface-amber-1 px-5 py-3 flex items-center gap-5 flex-wrap">
      <div class="flex items-center gap-3">
        <div class="size-[26px] rounded-full bg-surface-amber-2 text-ink-amber-3 flex items-center justify-center text-[14px] font-bold shrink-0">!</div>
        <div class="text-[12.5px] text-ink-gray-7" style="font-family:var(--font-body)"><strong class="text-ink-gray-8">7 BOQ lines unallocated</strong> <span class="text-ink-gray-5">· from variation V-019 (Piling)</span></div>
        <button type="button" class="text-[12px] font-semibold text-ink-blueprint-4 hover:underline focus:outline-none" @click="activeTab = 'unalloc'">Allocate →</button>
      </div>
      <div class="flex items-center gap-3">
        <div class="size-[26px] rounded-full bg-surface-amber-2 text-ink-amber-3 flex items-center justify-center text-[14px] shrink-0">✦</div>
        <div class="text-[12.5px] text-ink-gray-7" style="font-family:var(--font-body)"><strong class="text-ink-gray-8">2 packages need attention.</strong> <span class="text-ink-gray-5">PKG-005 + PKG-006 close tender Friday.</span></div>
      </div>
      <div class="flex-1" />
      <button type="button" class="text-ink-gray-5 hover:text-ink-gray-8 text-[14px] leading-none focus:outline-none" @click="stripVisible = false">✕</button>
    </div>

    <!-- Tabs -->
    <div class="flex items-center gap-1 border-b border-outline-gray-2 overflow-x-auto">
      <button
        type="button"
        class="px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors focus:outline-none"
        :class="activeTab === 'boq' ? 'text-ink-blueprint-4 border-outline-blueprint-3' : 'text-ink-gray-5 border-transparent hover:text-ink-blueprint-4'"
        style="font-family:var(--font-body)"
        @click="activeTab = 'boq'"
      >Approved BOQ <span class="ml-1 text-[10px] opacity-70">412</span></button>
      <button
        type="button"
        class="px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors focus:outline-none"
        :class="activeTab === 'summary' ? 'text-ink-blueprint-4 border-outline-blueprint-3' : 'text-ink-gray-5 border-transparent hover:text-ink-blueprint-4'"
        style="font-family:var(--font-body)"
        @click="activeTab = 'summary'"
      >Packages summary <span class="ml-1 text-[10px] opacity-70">14</span></button>
      <button
        type="button"
        class="px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors focus:outline-none"
        :class="activeTab === 'unalloc' ? 'text-ink-blueprint-4 border-outline-blueprint-3' : 'text-ink-amber-3 border-transparent hover:text-ink-blueprint-4'"
        style="font-family:var(--font-body)"
        @click="activeTab = 'unalloc'"
      >Unallocated BOQ <span class="ml-1 text-[10px] opacity-70">7</span></button>
    </div>

    <!-- Pane: BOQ -->
    <div v-show="activeTab === 'boq'" class="flex flex-col gap-4">
      <p class="text-[12.5px] text-ink-gray-5 m-0" style="font-family:var(--font-body)">The contract scope. Allocate every line to a package.</p>

      <div class="flex items-center gap-3 flex-wrap">
        <select class="ik-select" style="min-width:220px">
          <option selected>Filter by bill — All bills (412)</option>
          <option>Bill 1 — Preliminaries (28)</option>
          <option>Bill 2 — Substructure (98)</option>
          <option>Bill 3 — Superstructure (128)</option>
          <option>Bill 4 — Façade, Finishes &amp; MEP (158)</option>
        </select>
        <input class="ik-select flex-1 min-w-[220px]" placeholder="Search BOQ line, package or reference" />
        <div class="flex-1" />
        <button
          type="button"
          class="px-3.5 py-2 rounded-md bg-surface-blueprint-5 text-[12.5px] font-medium text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 shrink-0"
          style="font-family:var(--font-body)"
          @click="toast.info('New package — not yet built in this prototype.')"
        >+ New package</button>
      </div>

      <div class="flex flex-col lg:flex-row gap-6 items-start">
        <div class="flex-1 ik-card rounded-xl border border-outline-gray-2 bg-surface-white overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-outline-gray-2">
                <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Item</th>
                <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Description</th>
                <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Unit</th>
                <th class="text-right px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Qty</th>
                <th class="text-right px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Rate (AED)</th>
                <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Allocated package</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="bill in boqBills" :key="bill.title">
                <tr>
                  <td colspan="6" class="bg-surface-gray-1 font-semibold text-[12px] text-ink-gray-7 px-4 py-2.5" style="font-family:var(--font-body)">{{ bill.title }}</td>
                </tr>
                <template v-for="pkg in bill.packages" :key="pkg.code || pkg.title">
                  <tr>
                    <td colspan="6" class="px-4 py-2.5 font-semibold text-[12.5px]" :class="pkg.unalloc ? 'bg-surface-amber-1' : 'bg-surface-gray-1'" style="font-family:var(--font-body)">
                      <span v-if="pkg.code" class="pkg-badge">{{ pkg.code }}</span>
                      <span v-if="pkg.unalloc" class="pkg-badge warn">⚠</span>
                      <span :class="pkg.unalloc ? 'text-ink-amber-3' : 'text-ink-gray-8'">{{ pkg.title }}</span>
                      <span v-if="pkg.exec" class="exec-pill" :class="pkg.exec.mode">{{ pkg.exec.label }}</span>
                      <span v-if="pkg.meta" class="text-[11px] ml-2" :class="pkg.unalloc ? 'text-ink-amber-3' : 'text-ink-gray-5'">{{ pkg.meta }}</span>
                      <span v-if="pkg.lock" class="lock-pill">{{ pkg.lock }}</span>
                    </td>
                  </tr>
                  <tr v-for="line in pkg.lines" :key="line.code" class="ik-card-row border-b border-outline-gray-2">
                    <td class="px-4 py-2 text-[12.5px] whitespace-nowrap" :class="line.unalloc ? 'text-ink-amber-3 font-semibold' : 'text-ink-gray-7'" style="font-family:var(--font-body)">{{ line.code }}</td>
                    <td class="px-4 py-2 text-[12.5px]" :class="line.bold ? 'font-semibold text-ink-gray-8' : 'text-ink-gray-7'" style="font-family:var(--font-body)" v-html="line.desc" />
                    <td class="px-4 py-2 text-[12.5px] text-ink-gray-6 whitespace-nowrap" style="font-family:var(--font-body)">{{ line.unit }}</td>
                    <td class="px-4 py-2 text-[12.5px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.qty }}</td>
                    <td class="px-4 py-2 text-[12.5px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.rate }}</td>
                    <td class="px-4 py-2">
                      <select class="ik-select-sm" :class="{ untagged: line.unalloc }">
                        <option v-for="(opt, oi) in line.options" :key="oi">{{ opt }}</option>
                      </select>
                    </td>
                  </tr>
                </template>
              </template>
            </tbody>
          </table>
        </div>

        <aside class="w-full lg:w-[260px] shrink-0 ik-card rounded-xl border border-outline-gray-2 bg-surface-white p-4">
          <h4 class="text-[12px] font-bold text-ink-gray-8 m-0 mb-3" style="font-family:var(--font-body)">Packages used</h4>
          <div v-for="item in pkgRail" :key="item.label" class="flex items-center justify-between py-2 border-b border-outline-gray-2 text-[12px]" :class="item.warn ? 'text-ink-amber-3 font-semibold' : 'text-ink-gray-7'" style="font-family:var(--font-body)">
            <span>{{ item.label }}</span>
            <span :class="item.warn ? 'text-ink-amber-3 font-semibold' : 'text-ink-gray-5'">{{ item.count }}</span>
          </div>
          <div class="mt-3 pt-3 border-t-2 border-outline-gray-2 flex flex-col gap-1.5">
            <div class="flex items-center justify-between text-[11.5px] text-ink-gray-7" style="font-family:var(--font-body)"><span>Total lines</span><span>412</span></div>
            <div class="flex items-center justify-between text-[11.5px] text-ink-gray-7" style="font-family:var(--font-body)"><span>Allocated</span><span>405</span></div>
            <div class="flex items-center justify-between text-[11.5px] text-ink-gray-7" style="font-family:var(--font-body)"><span>Reconciliation</span><span class="text-ink-amber-3 font-semibold">98.3%</span></div>
          </div>
        </aside>
      </div>
    </div>

    <!-- Pane: Summary -->
    <div v-show="activeTab === 'summary'" class="flex flex-col gap-4">
      <p class="text-[12.5px] text-ink-gray-5 m-0" style="font-family:var(--font-body)">Define what to procure and how each chunk gets delivered. Doubles as your procurement log.</p>

      <div class="flex items-center gap-3 flex-wrap">
        <select class="ik-select" style="min-width:240px">
          <option selected>All execution modes (14)</option>
          <option>Subcontracted only (8)</option>
          <option>In-house only (2)</option>
          <option>Pending mode (4)</option>
        </select>
        <input class="ik-select flex-1 min-w-[220px]" placeholder="Search package name or executor" />
        <div class="flex-1" />
        <button
          type="button"
          class="px-3.5 py-2 rounded-md bg-surface-blueprint-5 text-[12.5px] font-medium text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 shrink-0"
          style="font-family:var(--font-body)"
          @click="toast.info('New package — not yet built in this prototype.')"
        >+ New package</button>
      </div>

      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-outline-gray-2">
              <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Package</th>
              <th class="text-right px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Lines</th>
              <th class="text-right px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Value (AED)</th>
              <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Execution mode</th>
              <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Executor</th>
              <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Target date</th>
              <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in pkgSummary" :key="row.code"
              class="ik-card-row border-b border-outline-gray-2 last:border-b-0 cursor-pointer"
              :class="row.rowClass === 'tender-row' ? 'bg-surface-amber-1/30' : ''"
              @click="openPkgRow(row.code)"
            >
              <td class="px-4 py-2.5">
                <p class="text-[13px] font-medium leading-[1.15] text-ink-gray-8 m-0" style="font-family:var(--font-body)">{{ row.code }} · {{ row.name }}</p>
                <p v-if="row.hint" class="text-[10.5px] text-ink-amber-3 m-0 mt-0.5" style="font-family:var(--font-body)">{{ row.hint }}</p>
              </td>
              <td class="px-4 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ row.lines }}</td>
              <td class="px-4 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ row.val }}</td>
              <td class="px-4 py-2.5 whitespace-nowrap">
                <span v-if="row.mode !== 'pending'" class="exec-pill" :class="row.mode">{{ row.mode === 'sc' ? '⊟ Subcontracted' : '⌂ In-house' }}</span>
                <select v-else class="ik-select-sm">
                  <option>Subcontracted</option>
                  <option>In-house</option>
                  <option>Hybrid</option>
                </select>
              </td>
              <td class="px-4 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">
                <select v-if="row.mode === 'pending'" class="ik-select-sm"><option>{{ row.exec }}</option></select>
                <span v-else>{{ row.exec }}</span>
              </td>
              <td class="px-4 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">
                <input v-if="row.mode === 'pending'" class="ik-select-sm" style="min-width:115px" :value="row.date" />
                <span v-else>{{ row.date }}</span>
              </td>
              <td class="px-4 py-2.5 whitespace-nowrap">
                <CommercialStatusPill
                  :label="row.statusLabel"
                  :tone="row.status === 'active' ? 'green' : row.status === 'tender' ? 'amber' : 'gray'"
                  :pulse="row.status === 'active'"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex items-center justify-between gap-3 flex-wrap px-4 py-3 text-[11.5px] bg-surface-green-1 text-ink-green-3" style="font-family:var(--font-body)">
          <span><strong>10 of 14 packages have execution mode set.</strong> <span class="text-ink-amber-3">4 pending mode</span> — set mode to enable downstream procurement.</span>
          <span>✦ Kore: 3 of 4 unset packages have recommended modes pre-filled.</span>
        </div>
      </div>
    </div>

    <!-- Pane: Unallocated -->
    <div v-show="activeTab === 'unalloc'" class="flex flex-col gap-4">
      <p class="text-[12.5px] text-ink-gray-5 m-0" style="font-family:var(--font-body)">BOQ lines not yet assigned to any package. Allocate before tender to keep procurement clean.</p>

      <div class="rounded-xl border border-outline-amber-3 bg-surface-amber-1 px-5 py-3 flex items-center gap-5 flex-wrap">
        <div class="flex items-center gap-3">
          <div class="size-[26px] rounded-full bg-surface-amber-2 text-ink-amber-3 flex items-center justify-center text-[14px] font-bold shrink-0">!</div>
          <div class="text-[12.5px] text-ink-gray-7" style="font-family:var(--font-body)"><strong class="text-ink-gray-8">7 BOQ lines unallocated</strong> <span class="text-ink-gray-5">· from variation V-019 (Piling) issued 22 Apr 2026</span></div>
        </div>
        <div class="flex items-center gap-3">
          <div class="size-[26px] rounded-full bg-surface-amber-2 text-ink-amber-3 flex items-center justify-center text-[14px] shrink-0">✦</div>
          <div class="text-[12.5px] text-ink-gray-5" style="font-family:var(--font-body)">Kore detected: 5 of these 7 lines match PKG-002 Piling scope pattern.</div>
        </div>
        <div class="flex-1" />
        <button
          type="button"
          class="px-3.5 py-2 rounded-md border border-outline-gray-3 bg-surface-white text-[12.5px] font-medium text-ink-gray-7 hover:border-outline-blueprint-3 hover:text-ink-blueprint-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          style="font-family:var(--font-body)"
          @click="toast.info('Bulk-assign — not yet built in this prototype.')"
        >Bulk-assign</button>
        <button
          type="button"
          class="px-3.5 py-2 rounded-md bg-surface-blueprint-5 text-[12.5px] font-medium text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-blueprint-2"
          style="font-family:var(--font-body)"
          @click="toast.info('One-click allocate — not yet built in this prototype.')"
        >✦ One-click allocate to PKG-002</button>
      </div>

      <div class="ik-card rounded-xl border border-outline-gray-2 bg-surface-white overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-outline-gray-2">
              <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Item</th>
              <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px]" style="font-family:var(--font-body)">Description</th>
              <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Bill</th>
              <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Unit</th>
              <th class="text-right px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Qty</th>
              <th class="text-right px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Rate (AED)</th>
              <th class="text-right px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Value</th>
              <th class="text-left px-4 py-3 text-[14px] font-medium leading-[1.15] text-ink-blueprint-4 tracking-[0.28px] whitespace-nowrap" style="font-family:var(--font-body)">Allocate to</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="line in unallocLines" :key="line.item" class="ik-card-row border-b border-outline-gray-2 last:border-b-0">
              <td class="px-4 py-2.5 text-[13px] text-ink-gray-7 whitespace-nowrap" style="font-family:var(--font-body)">{{ line.item }}</td>
              <td class="px-4 py-2.5 text-[13px] text-ink-gray-7" style="font-family:var(--font-body)" v-html="line.desc" />
              <td class="px-4 py-2.5 text-[13px] text-ink-gray-6 whitespace-nowrap" style="font-family:var(--font-body)">Bill 2 · Substructure</td>
              <td class="px-4 py-2.5 text-[13px] text-ink-gray-6 whitespace-nowrap" style="font-family:var(--font-body)">{{ line.unit }}</td>
              <td class="px-4 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.qty }}</td>
              <td class="px-4 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.rate }}</td>
              <td class="px-4 py-2.5 text-[13px] text-ink-gray-7 text-right whitespace-nowrap" style="font-family:var(--font-body)">{{ line.val }}</td>
              <td class="px-4 py-2.5">
                <select class="ik-select-sm" :class="{ untagged: !line.tagged }">
                  <option v-if="line.tagged" selected>✦ PKG-002 (Kore)</option>
                  <option v-if="line.tagged">PKG-001 Excavation</option>
                  <option v-if="!line.tagged" selected>— Select package —</option>
                  <option v-if="!line.tagged">PKG-002 Piling</option>
                  <option>+ New package</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex items-center justify-between gap-3 flex-wrap px-4 py-3 text-[11.5px] bg-surface-amber-1 text-ink-amber-3" style="font-family:var(--font-body)">
          <span><strong>7 lines · AED 407,916 value.</strong> 5 Kore-tagged to PKG-002 · 2 untagged need QS judgement.</span>
          <span>✦ Once allocated, scope updates flow into SC-002 as variation V-019 to Geotech FZE.</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CommercialStatusPill from './CommercialStatusPill.vue'
import { toast } from '../Toast'
import { a1aTab as activeTab, showScreen } from './commercialNav'

const stripVisible = ref(true)

function openPkgRow(code: string) {
  if (code === 'PKG-005') {
    showScreen('pkg-detail')
  } else {
    toast.info(`${code} — detail page not yet built. Only PKG-005 has a full detail page in this prototype.`)
  }
}

interface BoqLine {
  code: string
  desc: string
  bold?: boolean
  unit: string
  qty: string
  rate: string
  options: string[]
  unalloc?: boolean
}
interface BoqPkg {
  code?: string
  title: string
  exec?: { label: string; mode: 'sc' | 'ih' }
  meta?: string
  lock?: string
  unalloc?: boolean
  lines: BoqLine[]
}
interface BoqBill {
  title: string
  packages: BoqPkg[]
}

const boqBills: BoqBill[] = [
  {
    title: 'Bill 1 — Preliminaries',
    packages: [
      {
        code: 'PKG-011', title: 'Site supervision & QA/QC', exec: { label: '⌂ In-house', mode: 'ih' }, meta: '8 lines · AED 540,000',
        lines: [
          { code: '1.1', desc: 'Site establishment &amp; hoarding', unit: 'lot', qty: '1.00', rate: '228,400', options: ['PKG-011 · Site supervision'] },
          { code: '1.2', desc: 'Project management &amp; supervision', unit: 'mo', qty: '18.00', rate: '58,500', options: ['PKG-011 · Site supervision'] },
        ],
      },
    ],
  },
  {
    title: 'Bill 2 — Substructure',
    packages: [
      {
        code: 'PKG-001', title: 'Excavation & earthworks', exec: { label: '⊟ SC-001 Al Sahel Civils', mode: 'sc' }, meta: '22 lines · AED 1.84M · −2.6% ✓', lock: '🔒 Locked · Active',
        lines: [
          { code: '2.1.1', desc: 'Excavation to reduced level, not exc. 2m depth', unit: 'm³', qty: '1,240.00', rate: '88', options: ['PKG-001 · Excavation'] },
          { code: '2.1.2', desc: 'Disposal of excavated material off-site', unit: 'm³', qty: '1,240.00', rate: '42', options: ['PKG-001 · Excavation'] },
        ],
      },
      {
        code: 'PKG-002', title: 'Piling & shoring', exec: { label: '⊟ SC-002 Geotech FZE', mode: 'sc' }, meta: '18 lines · AED 2.12M · V-019 pending',
        lines: [
          { code: '2.2.1', desc: 'Bored cast-in-place piles Ø600mm, depth 18m', unit: 'nr', qty: '82.00', rate: '8,420', options: ['PKG-002 · Piling'] },
        ],
      },
    ],
  },
  {
    title: 'Bill 3 — Superstructure',
    packages: [
      {
        code: 'PKG-004', title: 'RC superstructure', exec: { label: '⊟ SC-003 Pillar Construction', mode: 'sc' }, meta: '54 lines · AED 5.20M',
        lines: [
          { code: '3.1.1', desc: 'RC columns to superstructure, grade C40', unit: 'm³', qty: '186.00', rate: '2,118', options: ['PKG-004 · RC superstructure'] },
        ],
      },
    ],
  },
  {
    title: 'Bill 4 — Façade, Finishes & MEP',
    packages: [
      {
        code: 'PKG-007', title: 'MEP — combined', exec: { label: '⊟ SC-007 Multitech MEP', mode: 'sc' }, meta: '38 lines · AED 4.92M · 14% over curve ✦', lock: '🔒 Locked · Active',
        lines: [
          { code: '4.6.1', desc: 'Low voltage distribution boards, full apartment circuitry', unit: 'nr', qty: '84.00', rate: '14,200', options: ['PKG-007 · MEP'] },
        ],
      },
      {
        unalloc: true, title: 'Unallocated', meta: '7 lines · need package assignment',
        lines: [
          { code: '4.8.2', desc: '<strong>PS — Owner-supplied sanitary ware and accessories</strong>', bold: true, unit: 'lot', qty: '1.00', rate: '—', options: ['— Select package —', 'Provisional Sums', 'PKG-007 MEP'], unalloc: true },
          { code: '4.9.1', desc: 'Specialist acoustic treatment to lobby ceilings', unit: 'm²', qty: '280.00', rate: '420', options: ['— Select package —', 'PKG-009 Internal finishes'], unalloc: true },
          { code: '4.10.1', desc: 'Landscape planters, irrigation &amp; hardscape to podium level', unit: 'm²', qty: '840.00', rate: '280', options: ['— Select package —', 'PKG-013 External works'], unalloc: true },
        ],
      },
    ],
  },
]

const pkgRail: { label: string; count: string; warn?: boolean }[] = [
  { label: 'PKG-001 Excavation', count: '22' },
  { label: 'PKG-002 Piling', count: '18' },
  { label: 'PKG-003 RC sub', count: '41' },
  { label: 'PKG-004 RC super', count: '54' },
  { label: 'PKG-005 Façade glazing', count: '14' },
  { label: 'PKG-006 Façade alu', count: '9' },
  { label: 'PKG-007 MEP', count: '38' },
  { label: 'PKG-008 Joinery (IH)', count: '24' },
  { label: 'PKG-009 Finishes (IH)', count: '31' },
  { label: 'PKG-010 Formwork (IH)', count: '12' },
  { label: 'PKG-011 Site sup. (IH)', count: '8' },
  { label: 'PKG-012 Lifts', count: '5' },
  { label: 'PKG-013 External', count: '19' },
  { label: 'PKG-014 Signage', count: '6' },
  { label: '⚠ Unallocated', count: '7', warn: true },
]

interface PkgSummaryRow {
  code: string
  name: string
  hint?: string
  lines: number
  val: string
  mode: 'sc' | 'ih' | 'pending'
  exec: string
  date: string
  status: 'active' | 'tender' | 'pending'
  statusLabel: string
  rowClass?: string
}

const pkgSummary: PkgSummaryRow[] = [
  { code: 'PKG-001', name: 'Excavation & earthworks', lines: 22, val: '1,840,000', mode: 'sc', exec: 'Al Sahel Civils', date: 'Awarded 18 Jan 2026', status: 'active', statusLabel: 'Active' },
  { code: 'PKG-002', name: 'Piling & shoring', lines: 18, val: '2,120,000', mode: 'sc', exec: 'Geotech FZE', date: 'Awarded 28 Jan 2026', status: 'active', statusLabel: 'Active' },
  { code: 'PKG-003', name: 'RC substructure (Bundled with PKG-004)', lines: 41, val: '3,860,000', mode: 'sc', exec: 'Pillar Construction', date: 'Awarded 14 Feb 2026', status: 'active', statusLabel: 'Active' },
  { code: 'PKG-004', name: 'RC superstructure (Bundled with PKG-003)', lines: 54, val: '5,200,000', mode: 'sc', exec: 'Pillar Construction', date: 'Awarded 14 Feb 2026', status: 'active', statusLabel: 'Active' },
  { code: 'PKG-005', name: 'Façade — glazing', lines: 14, val: '2,450,000', mode: 'sc', exec: '— TBA —', date: 'Target award 22 May 2026', status: 'tender', statusLabel: 'In tender', rowClass: 'tender-row' },
  { code: 'PKG-006', name: 'Façade — aluminium', lines: 9, val: '1,180,000', mode: 'sc', exec: '— TBA —', date: 'Target award 29 May 2026', status: 'tender', statusLabel: 'In tender', rowClass: 'tender-row' },
  { code: 'PKG-007', name: 'MEP — combined', lines: 38, val: '4,920,000', mode: 'sc', exec: 'Multitech MEP', date: 'Awarded 04 Mar 2026', status: 'active', statusLabel: 'Active' },
  { code: 'PKG-008', name: 'Internal joinery', hint: 'In-house recommended · Joinery Workshop has capacity.', lines: 24, val: '1,960,000', mode: 'pending', exec: 'Joinery Workshop', date: '15 Jul 2026', status: 'pending', statusLabel: 'Pending mode', rowClass: 'pending-row' },
  { code: 'PKG-009', name: 'Internal finishes', hint: 'In-house recommended · 7% lower than SC benchmark.', lines: 31, val: '1,520,000', mode: 'pending', exec: 'Finishes Team A', date: '12 Aug 2026', status: 'pending', statusLabel: 'Pending mode', rowClass: 'pending-row' },
  { code: 'PKG-010', name: 'Formwork & falsework', lines: 12, val: '980,000', mode: 'ih', exec: 'Formwork Crew', date: 'Started 14 Feb 2026', status: 'active', statusLabel: 'Active' },
  { code: 'PKG-011', name: 'Site supervision & QA/QC', lines: 8, val: '540,000', mode: 'ih', exec: 'Project Team', date: 'Continuous', status: 'active', statusLabel: 'Active' },
  { code: 'PKG-012', name: 'Lifts & vertical transport', lines: 5, val: '1,140,000', mode: 'sc', exec: 'Vertical Systems', date: 'Awarded 29 Apr 2026', status: 'active', statusLabel: 'Active' },
  { code: 'PKG-013', name: 'External works & landscaping', hint: 'Subcontract recommended · specialist trade.', lines: 19, val: '820,000', mode: 'pending', exec: '— TBA —', date: '04 Sep 2026', status: 'pending', statusLabel: 'Pending mode', rowClass: 'pending-row' },
  { code: 'PKG-014', name: 'Specialist signage & wayfinding', hint: 'Either viable · low complexity.', lines: 6, val: '140,000', mode: 'pending', exec: '— Not assigned —', date: '22 Oct 2026', status: 'pending', statusLabel: 'Pending mode', rowClass: 'pending-row' },
]

interface UnallocLine {
  item: string
  desc: string
  unit: string
  qty: string
  rate: string
  val: string
  tagged: boolean
}

const unallocLines: UnallocLine[] = [
  { item: 'V19.1', desc: 'Additional bored piles ø600mm, depth 18m — rock conditions', unit: 'nr', qty: '14.00', rate: '9,840', val: '137,760', tagged: true },
  { item: 'V19.2', desc: 'Pile load testing, dynamic, additional 4 nr', unit: 'nr', qty: '4.00', rate: '8,400', val: '33,600', tagged: true },
  { item: 'V19.3', desc: 'Reinforcement supply &amp; install — additional piles', unit: 't', qty: '18.40', rate: '3,240', val: '59,616', tagged: true },
  { item: 'V19.4', desc: 'Concrete C40/50 supply &amp; pour — additional piles', unit: 'm³', qty: '42.00', rate: '820', val: '34,440', tagged: true },
  { item: 'V19.5', desc: 'Rock breaking &amp; disposal — encountered conditions', unit: 'm³', qty: '68.00', rate: '540', val: '36,720', tagged: true },
  { item: 'V19.6', desc: 'Geotechnical re-survey &amp; soil retest after rock find', unit: 'lot', qty: '1.00', rate: '28,500', val: '28,500', tagged: false },
  { item: 'V19.7', desc: 'Site dewatering, extended duration — variation', unit: 'day', qty: '42.00', rate: '1,840', val: '77,280', tagged: false },
]
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
.ik-card-row:hover { background-color: var(--surface-blueprint-1); }
[data-theme='dark'] .ik-card-row:hover { background-color: var(--surface-blueprint-2); }

.ik-select {
  font-family: var(--font-body);
  font-size: 12.5px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--outline-gray-2);
  background-color: var(--surface-white);
  color: var(--ink-gray-7);
}
.ik-select:focus-visible { outline: 2px solid var(--outline-blueprint-2); }

.ik-select-sm {
  font-family: var(--font-body);
  font-size: 11px;
  padding: 3px 6px;
  border-radius: 6px;
  border: 1px solid var(--outline-gray-2);
  background-color: var(--surface-white);
  color: var(--ink-gray-7);
  max-width: 100%;
}
.ik-select-sm.untagged {
  border-color: var(--outline-amber-3);
  color: var(--ink-amber-3);
}

.pkg-badge {
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  border-radius: 4px;
  background-color: var(--surface-gray-2);
  color: var(--ink-gray-7);
  font-size: 10px;
  font-weight: 700;
  margin-right: 6px;
}
.pkg-badge.warn {
  background-color: var(--surface-amber-2);
  color: var(--ink-amber-3);
}

.exec-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  margin-left: 8px;
}
.exec-pill.sc {
  background-color: var(--surface-blueprint-1);
  color: var(--ink-blueprint-4);
}
.exec-pill.ih {
  background-color: var(--surface-green-1);
  color: var(--ink-green-3);
}
.exec-pill.pending {
  background-color: var(--surface-amber-1);
  color: var(--ink-amber-3);
}

.lock-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 12px;
  background-color: var(--surface-gray-2);
  font-size: 9px;
  font-weight: 600;
  color: var(--ink-gray-5);
  margin-left: 6px;
}
</style>
