export type PriceTier = 'budget' | 'mid'

export type ProductKind = 'router' | 'ceiling-ap'

export type Verification = 'verified' | 'needs-verification'

export interface PriceInfo {
  min: number
  max: number
  /** ISO date when the price was observed. */
  observedAt: string
  sourceLabel: string
  sourceUrl?: string
  status: Verification
}

export interface ProductSpec {
  wifiStandard: string
  bandConfig: string
  antennas: string
  lanPorts: string
  wanPort: string
  apMode: string
  mesh: string
  power?: string
}

export interface Product {
  id: string
  brand: string
  model: string
  kind: ProductKind
  tier: PriceTier
  /** One-line verdict used in cards. */
  tagline: string
  spec: ProductSpec
  price: PriceInfo
  /** 1–5 relative rating for the user's priorities, not raw speed. */
  scores: {
    stability: number
    coverage: number
    easeOfSetup: number
    value: number
  }
  pros: string[]
  cons: string[]
  /** Shown when the product is the recommended pick for a tier. */
  recommended?: boolean
  sources: { label: string; url: string }[]
}
