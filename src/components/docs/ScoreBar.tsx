import { cn } from '@/lib/cn'

interface ScoreBarProps {
  label: string
  value: number
  max?: number
}

/** Five-segment rating; segments, not a continuous bar, because the scale is ordinal. */
export function ScoreBar({ label, value, max = 5 }: ScoreBarProps) {
  return (
    <div className="flex items-center justify-between gap-3 text-xs">
      <span className="text-fg-muted">{label}</span>
      <span className="flex items-center gap-0.5">
        <span aria-hidden="true" className="flex gap-0.5">
          {Array.from({ length: max }, (_, index) => (
            <span key={index} className={cn('h-1.5 w-4 rounded-full', index < value ? 'bg-accent' : 'bg-border')} />
          ))}
        </span>
        <span className="sr-only">
          {value} dari {max}
        </span>
      </span>
    </div>
  )
}
