import type { LucideIcon } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

interface DeviceNodeProps {
  name: string
  role: string
  ip: string
  icon: LucideIcon
  tags: string[]
  accent: 'fiber' | 'cable'
}

export function DeviceNode({ name, role, ip, icon: Icon, tags, accent }: DeviceNodeProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-bg-elev p-3 shadow-float sm:gap-4 sm:p-4">
      <span
        className={`flex size-11 shrink-0 items-center justify-center rounded-md ${
          accent === 'fiber' ? 'bg-accent-soft text-accent-strong' : 'bg-cable-soft text-cable-strong'
        }`}
      >
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-fg sm:text-base">{name}</p>
        <p className="text-xs leading-5 text-fg-muted sm:text-sm">{role}</p>
      </div>
      <div className="flex w-full flex-wrap items-center gap-1.5 sm:w-auto sm:flex-col sm:items-end">
        <code className="rounded-sm bg-bg-sunken px-1.5 py-0.5 font-mono text-xs text-fg">{ip}</code>
        <span className="flex gap-1">
          {tags.map((tag) => (
            <Badge key={tag} tone={accent === 'fiber' ? 'accent' : 'cable'}>
              {tag}
            </Badge>
          ))}
        </span>
      </div>
    </div>
  )
}
