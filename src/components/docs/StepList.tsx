import { CodeBlock } from '@/components/ui/CodeBlock'
import type { Step } from '@/types/docs'

interface StepListProps {
  steps: Step[]
  /** Accessible label for the ordered list. */
  label: string
}

/** Numbered procedure. The numbers encode a real sequence, so they are part of the content. */
export function StepList({ steps, label }: StepListProps) {
  return (
    <ol aria-label={label} className="my-6 list-none space-y-0 pl-0">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1
        return (
          <li key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
            {!isLast && <span aria-hidden="true" className="absolute top-8 left-[0.95rem] h-[calc(100%-1.75rem)] w-px bg-border" />}
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent-soft font-mono text-sm font-medium text-accent-strong"
            >
              {index + 1}
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <h3 className="text-base font-semibold text-fg">{step.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-7 text-fg-muted">{step.body}</p>
              {step.detail && (
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-fg-muted">
                  {step.detail.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-fg-faint" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {step.code && <CodeBlock code={step.code} label="contoh" className="my-3" />}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
