import { ref } from 'vue'

export type CommercialScreen =
  | 'pl'
  | 'a0'
  | 'a1a'
  | 'a1b'
  | 'sc-journey'
  | 'inhouse-journey'
  | 'client-journey'
  | 'client-ipc'
  | 'vo-register'
  | 'vo-detail'
  | 'scvaluations'
  | 'scval-detail'
  | 'pkg-detail'

export interface BreadcrumbSegment {
  label: string
  screen: CommercialScreen | null
}

export const currentScreen = ref<CommercialScreen>('pl')

export function showScreen(screen: CommercialScreen) {
  currentScreen.value = screen
  window.scrollTo({ top: 0, behavior: 'instant' })
}

export type A1aTab = 'boq' | 'summary' | 'unalloc'
export type A1bTab = 'action' | 'tender' | 'all'

export const a1aTab = ref<A1aTab>('boq')
export const a1bTab = ref<A1bTab>('action')

export const tenderModalOpen = ref(false)

const breadcrumbConfig: Record<CommercialScreen, BreadcrumbSegment[]> = {
  pl: [{ label: 'Projects · Commercial', screen: null }],
  a0: [
    { label: 'Projects · Commercial', screen: 'pl' },
    { label: 'Skyline Business Bay', screen: null },
  ],
  a1a: [
    { label: 'Projects · Commercial', screen: 'pl' },
    { label: 'Skyline Business Bay', screen: 'a0' },
    { label: 'Packages', screen: null },
  ],
  a1b: [
    { label: 'Projects · Commercial', screen: 'pl' },
    { label: 'Skyline Business Bay', screen: 'a0' },
    { label: 'Subcontractor', screen: 'sc-journey' },
    { label: 'Subcontracts', screen: null },
  ],
  'sc-journey': [
    { label: 'Projects · Commercial', screen: 'pl' },
    { label: 'Skyline Business Bay', screen: 'a0' },
    { label: 'Subcontractor', screen: null },
  ],
  'inhouse-journey': [
    { label: 'Projects · Commercial', screen: 'pl' },
    { label: 'Skyline Business Bay', screen: 'a0' },
    { label: 'In-house', screen: null },
  ],
  'client-journey': [
    { label: 'Projects · Commercial', screen: 'pl' },
    { label: 'Skyline Business Bay', screen: 'a0' },
    { label: 'Client', screen: null },
  ],
  'client-ipc': [
    { label: 'Projects · Commercial', screen: 'pl' },
    { label: 'Skyline Business Bay', screen: 'a0' },
    { label: 'Client', screen: 'client-journey' },
    { label: 'IPC-007 · Mar 2026', screen: null },
  ],
  'vo-register': [
    { label: 'Projects · Commercial', screen: 'pl' },
    { label: 'Skyline Business Bay', screen: 'a0' },
    { label: 'Client', screen: 'client-journey' },
    { label: 'Variation orders', screen: null },
  ],
  'vo-detail': [
    { label: 'Projects · Commercial', screen: 'pl' },
    { label: 'Skyline Business Bay', screen: 'a0' },
    { label: 'Client', screen: 'client-journey' },
    { label: 'Variation orders', screen: 'vo-register' },
    { label: 'VO-006-R2', screen: null },
  ],
  scvaluations: [
    { label: 'Projects · Commercial', screen: 'pl' },
    { label: 'Skyline Business Bay', screen: 'a0' },
    { label: 'Subcontractor', screen: 'sc-journey' },
    { label: 'Valuations', screen: null },
  ],
  'scval-detail': [
    { label: 'Projects · Commercial', screen: 'pl' },
    { label: 'Skyline Business Bay', screen: 'a0' },
    { label: 'Subcontractor', screen: 'sc-journey' },
    { label: 'Valuations', screen: 'scvaluations' },
    { label: 'Multitech MEP · IPA-MEP-04', screen: null },
  ],
  'pkg-detail': [
    { label: 'Projects · Commercial', screen: 'pl' },
    { label: 'Skyline Business Bay', screen: 'a0' },
    { label: 'Subcontractor', screen: 'sc-journey' },
    { label: 'Subcontracts', screen: 'a1b' },
    { label: 'PKG-005 · Façade glazing', screen: null },
  ],
}

export function breadcrumbFor(screen: CommercialScreen): BreadcrumbSegment[] {
  return breadcrumbConfig[screen]
}
