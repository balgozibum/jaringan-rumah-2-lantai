import type { UseCase } from '@/types/docs'

export function UseCaseGrid({ items }: { items: UseCase[] }) {
  return (
    <ul className="my-6 grid gap-3 sm:grid-cols-2">
      {items.map(({ title, need, icon: Icon }) => (
        <li key={title} className="flex gap-3 rounded-md border border-border bg-bg-elev p-4">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent-strong">
            <Icon aria-hidden="true" className="size-4.5" />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-fg">{title}</h3>
            <p className="mt-0.5 text-sm leading-6 text-fg-muted">{need}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
