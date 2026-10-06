import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type BadgeTone = 'neutral' | 'accent' | 'cable' | 'ok' | 'warn' | 'danger'

const toneClasses: Record<BadgeTone, string> = {
  neutral: 'bg-bg-sunken text-fg-muted border-border',
  accent: 'bg-accent-soft text-accent-strong border-accent/30',
  cable: 'bg-cable-soft text-cable-strong border-cable/40',
  ok: 'bg-ok-soft text-ok border-ok/30 dark:bg-ok/15',
  warn: 'bg-warn-soft text-warn border-warn/30 dark:bg-warn/15',
  danger: 'bg-danger-soft text-danger border-danger/30 dark:bg-danger/15',
}

interface BadgeProps {
  tone?: BadgeTone
  children: ReactNode
  className?: string
}

export function Badge({ tone = 'neutral', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-sm border px-2 py-0.5 text-xs font-medium leading-5',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
