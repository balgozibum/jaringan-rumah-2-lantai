import { ChevronDown } from 'lucide-react'
import type { TroubleshootingCase } from '@/types/docs'

/** Native disclosure keeps keyboard and screen-reader behaviour for free. */
export function TroubleshootingItem({ item }: { item: TroubleshootingCase }) {
  return (
    <details id={item.id} className="group rounded-md border border-border bg-bg-elev open:border-border-strong">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-[0.95rem] font-medium text-fg marker:content-none hover:bg-bg-sunken/50 [&::-webkit-details-marker]:hidden">
        <span>{item.symptom}</span>
        <ChevronDown aria-hidden="true" className="size-4 shrink-0 text-fg-faint transition-transform group-open:rotate-180" />
      </summary>
      <div className="grid gap-4 border-t border-border px-4 py-4 text-sm leading-6 sm:grid-cols-2">
        <div>
          <h3 className="mb-1.5 text-xs font-semibold text-fg-muted">Kemungkinan penyebab</h3>
          <ul className="list-disc space-y-1 pl-5 text-fg-muted">
            {item.causes.map((cause) => (
              <li key={cause}>{cause}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-1.5 text-xs font-semibold text-fg-muted">Perbaikan</h3>
          <ol className="list-decimal space-y-1 pl-5 text-fg">
            {item.fixes.map((fix) => (
              <li key={fix}>{fix}</li>
            ))}
          </ol>
        </div>
      </div>
    </details>
  )
}
