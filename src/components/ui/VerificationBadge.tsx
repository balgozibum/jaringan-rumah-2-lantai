import { CircleCheck, CircleHelp } from 'lucide-react'
import { Badge } from './Badge'
import type { Verification } from '@/types/product'

const labels: Record<Verification, { text: string; tone: 'ok' | 'warn' }> = {
  verified: { text: 'Harga terverifikasi', tone: 'ok' },
  'needs-verification': { text: 'Perlu verifikasi', tone: 'warn' },
}

export function VerificationBadge({ status }: { status: Verification }) {
  const { text, tone } = labels[status]
  const Icon = status === 'verified' ? CircleCheck : CircleHelp
  return (
    <Badge tone={tone}>
      <Icon aria-hidden="true" className="size-3.5" />
      {text}
    </Badge>
  )
}
