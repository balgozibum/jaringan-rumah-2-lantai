import type { LucideIcon } from 'lucide-react'

export interface NavHeading {
  id: string
  label: string
}

export interface NavPage {
  path: string
  label: string
  shortLabel?: string
  description: string
  icon: LucideIcon
  headings: NavHeading[]
}

export type CalloutTone = 'info' | 'tip' | 'warning' | 'danger'

export interface Step {
  title: string
  body: string
  detail?: string[]
  code?: string
}

export interface TroubleshootingCase {
  id: string
  symptom: string
  causes: string[]
  fixes: string[]
}

export interface GlossaryTerm {
  term: string
  definition: string
}

export interface UseCase {
  title: string
  need: string
  icon: LucideIcon
}
