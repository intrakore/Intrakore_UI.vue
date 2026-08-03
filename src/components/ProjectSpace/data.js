export const projects = [
  {
    key: 'marina', name: 'Marina Crest Tower', code: 'INT-26-046',
    prog: 'Month 9 of 14', val: 'AED 22M',
    card: 'amber', progress: 52, progressRag: 'amber',
    receivables: 'AED 0 · no ageing', receivablesRag: 'good',
    redActions: [
      { id: 'm-r1', text: 'Verbal instruction unconfirmed (FIDIC 3.3) — est. AED 180K entitlement', clock: '2d' },
      { id: 'm-r2', text: '3 daily diaries awaiting review · 1 quality flag', clock: 'today' },
    ],
  },
  {
    key: 'skyline', name: 'Skyline Business Bay', code: 'INT-26-014',
    prog: 'Month 7 of 18', val: 'AED 30M',
    card: 'red', progress: 38, progressRag: 'red',
    receivables: 'AED 3.6M · 38d', receivablesRag: 'bad',
    redActions: [
      { id: 's-r1', text: 'SUB-114 curtain wall with consultant 9d — blocks Fl 12 facade', clock: '−9d' },
      { id: 's-r2', text: 'Workforce 34 short — MEP subcon shortfall', clock: 'today' },
      { id: 's-r3', text: 'IPC-007 draft due in 4d — QS not started', clock: '4d' },
    ],
  },
  {
    key: 'address', name: 'Address Residences', code: 'INT-26-031',
    prog: 'Month 11 of 16', val: 'AED 24M',
    card: 'amber', progress: 71, progressRag: 'amber',
    receivables: 'AED 1.8M · 22d', receivablesRag: 'warn',
    redActions: [],
  },
]

export const allProjectCount = 4

export const lookahead = {
  marina: {
    behind: [
      ['Mon 11 May', 'r', 'Fl 11 column pour — north zone', '2 days behind · awaiting formwork rectification'],
      ['Wed 06 May', 'a', 'Blockwork B2 lift lobby', '6 days behind · manpower shortfall'],
      ['Sat 09 May', 'a', 'MEP first-fix Fl 9', '3 days behind · subcon trailing programme'],
    ],
    upcoming: [
      ['Thu 14 May', '', 'Fl 12 column pour — south zone', 'Concrete booked · 96 m³ · resourced'],
      ['Sat 16 May', '', 'Curtain wall sample delivery', 'Awaits SUB-114 approval'],
      ['Mon 18 May', '', 'Fl 12 slab rebar fixing', '14 fixers required · 11 confirmed · gap of 3'],
    ],
  },
  skyline: {
    behind: [
      ['Fri 02 May', 'r', 'Curtain wall installation Lvl 12', '9 days behind · critical path'],
      ['Tue 06 May', 'a', 'Lift shaft 3 walls', '5 days behind · workforce shortfall'],
      ['Sat 10 May', 'a', 'MEP coordination drawing rev D', '2 days behind'],
    ],
    upcoming: [
      ['Wed 13 May', '', 'IPC-007 draft submission', 'QS not started'],
      ['Mon 18 May', '', 'Facade mock-up review with client', 'Critical for production release'],
      ['Mon 25 May', '', 'Milestone 25% complete (contractual)', 'At risk · 6d slip baseline'],
    ],
  },
  address: {
    behind: [
      ['Thu 07 May', 'a', 'Block C podium waterproofing', '5 days behind · weather delays'],
    ],
    upcoming: [
      ['Wed 13 May', '', 'Block A internal finishes handover', 'On programme'],
      ['Mon 18 May', '', 'Facade RFI clarification due back', 'With consultant'],
      ['Wed 25 May', '', 'Monthly IPC cycle opens', 'Cadence'],
    ],
  },
}

export const approvals = [
  { count: 3, rag: 'a', title: 'Daily Diaries — awaiting your approval', sub: 'From Ravi K. (PE), Marina Crest · 9–11 May · 1 carries a quality flag', link: 'Open in Site Ops →' },
  { count: 2, rag: '',  title: 'Material Requisitions — QS prepared', sub: 'MR-046-08 (rebar Fl 12) · MR-014-22 (curtain wall sealants) — totalling AED 340K', link: 'Open in Commercial →' },
  { count: 1, rag: 'r', title: 'Variations — QS prepared, awaiting PM sign-off', sub: 'CV-014-09 lobby finishes change · AED 220K · linked to client RFI ageing 11d', link: 'Open in Commercial →' },
  { count: 1, rag: '',  title: 'Subcontractor Valuations — QS prepared', sub: 'SC-031-04 MEP subcon Apr valuation · AED 480K · ready for sign-off', link: 'Open in Commercial →' },
]
