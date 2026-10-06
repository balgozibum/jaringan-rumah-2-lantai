import type { ReactNode } from 'react'
import { AlertTriangle, Info, Lightbulb, OctagonAlert, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { CalloutTone } from '@/types/docs'

interface ToneStyle {
  icon: LucideIcon
  border: string
  iconColor: string
  defaultTitle: string
}

const tones: Record<CalloutTone, ToneStyle> = {
  info: { icon: Info, border: 'border-l-accent', iconColor: 'text-accent', defaultTitle: 'Catatan' },
  tip: { icon: Lightbulb, border: 'border-l-ok', iconColor: 'text-ok', defaultTitle: 'Tips' },
  warning: { icon: AlertTriangle, border: 'border-l-warn', iconColor: 'text-warn', defaultTitle: 'Perhatian' },
  danger: { icon: OctagonAlert, border: 'border-l-danger', iconColor: 'text-danger', defaultTitle: 'Hindari' },
}

interface CalloutProps {
  tone?: CalloutTone
  title?: string
  children: ReactNode
  className?: string
}

export function Callout({ tone = 'info', title, children, className }: CalloutProps) {
  const { icon: Icon, border, iconColor, defaultTitle } = tones[tone]
  return (
    <aside
      role="note"
      className={cn(
        'my-6 flex gap-3 rounded-md border border-border border-l-4 bg-bg-elev px-4 py-3.5 text-[0.95rem] leading-6',
        border,
        className,
      )}
    >
      <Icon aria-hidden="true" className={cn('mt-0.5 size-5 shrink-0', iconColor)} />
      <div className="min-w-0">
        <p className="mb-1 font-semibold text-fg">{title ?? defaultTitle}</p>
        <div className="text-fg-muted [&_code]:rounded-sm [&_code]:bg-bg-sunken [&_code]:px-1 [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-fg">
          {children}
        </div>
      </div>
    </aside>
  )
}
