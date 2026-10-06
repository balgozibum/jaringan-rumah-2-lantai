import { Check, X } from 'lucide-react'
import type { DiagnosticStep } from '@/data/troubleshooting'

/** Vertical yes/no diagnostic ladder. */
export function DecisionFlow({ steps }: { steps: DiagnosticStep[] }) {
  return (
    <ol aria-label="Alur diagnosa" className="my-6 space-y-3 pl-0">
      {steps.map((step, index) => (
        <li key={step.question} className="rounded-md border border-border bg-bg-elev">
          <p className="flex gap-3 px-4 py-3 text-[0.95rem] font-medium text-fg">
            <span aria-hidden="true" className="font-mono text-accent">
              {index + 1}.
            </span>
            {step.question}
          </p>
          <div className="grid divide-y divide-border border-t border-border text-sm sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="flex gap-2 px-4 py-3 text-fg-muted">
              <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-ok" />
              <p>
                <span className="font-medium text-fg">Ya. </span>
                {step.ifYes}
              </p>
            </div>
            <div className="flex gap-2 px-4 py-3 text-fg-muted">
              <X aria-hidden="true" className="mt-1 size-4 shrink-0 text-danger" />
              <p>
                <span className="font-medium text-fg">Tidak. </span>
                {step.ifNo}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
