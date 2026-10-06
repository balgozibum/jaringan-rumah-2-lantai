import type { GlossaryTerm } from '@/types/docs'

export function GlossaryList({ terms }: { terms: GlossaryTerm[] }) {
  return (
    <dl className="my-6 divide-y divide-border rounded-md border border-border bg-bg-elev">
      {terms.map((item) => (
        <div key={item.term} className="grid gap-1 px-4 py-3 sm:grid-cols-[12rem_1fr] sm:gap-4">
          <dt className="font-medium text-fg">{item.term}</dt>
          <dd className="text-sm leading-6 text-fg-muted">{item.definition}</dd>
        </div>
      ))}
    </dl>
  )
}
