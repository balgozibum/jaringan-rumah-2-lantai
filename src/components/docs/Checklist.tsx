import { useState } from 'react'
import { cn } from '@/lib/cn'

interface ChecklistProps {
  items: string[]
  label: string
}

/** Interactive checklist; state lives only in memory for the current visit. */
export function Checklist({ items, label }: ChecklistProps) {
  const [checked, setChecked] = useState<Set<number>>(() => new Set())

  function toggle(index: number) {
    setChecked((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <fieldset className="my-6 rounded-md border border-border bg-bg-elev">
      <legend className="sr-only">{label}</legend>
      <ul className="divide-y divide-border">
        {items.map((item, index) => {
          const id = `${label}-${index}`.replace(/\s+/g, '-').toLowerCase()
          const done = checked.has(index)
          return (
            <li key={item}>
              <label
                htmlFor={id}
                className="flex cursor-pointer items-start gap-3 px-4 py-3 text-[0.95rem] leading-6 transition-colors hover:bg-bg-sunken/50"
              >
                <input
                  id={id}
                  type="checkbox"
                  checked={done}
                  onChange={() => toggle(index)}
                  className="mt-1 size-4 shrink-0 accent-[var(--accent)]"
                />
                <span className={cn('transition-colors', done ? 'text-fg-faint line-through' : 'text-fg')}>{item}</span>
              </label>
            </li>
          )
        })}
      </ul>
      <p className="border-t border-border px-4 py-2 text-xs text-fg-faint">
        {checked.size} dari {items.length} selesai
      </p>
    </fieldset>
  )
}
