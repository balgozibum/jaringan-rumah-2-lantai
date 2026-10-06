import type { ReactNode } from 'react'
import { Link2 } from 'lucide-react'

interface DocSectionProps {
  id: string
  title: string
  children: ReactNode
}

/** A linkable `<section>` with an `h2`; the id is what the sidebar and TOC track. */
export function DocSection({ id, title, children }: DocSectionProps) {
  return (
    <section id={id} data-doc-section tabIndex={-1} className="scroll-mt-24 outline-none">
      <h2 className="group mb-4 flex items-center gap-2 text-xl font-semibold tracking-tight text-fg sm:text-2xl">
        <a href={`#${id}`} className="rounded-sm text-fg no-underline hover:text-accent-strong">
          {title}
        </a>
        <Link2
          aria-hidden="true"
          className="size-4 text-fg-faint opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
        />
      </h2>
      <div className="prose-doc max-w-[72ch]">{children}</div>
    </section>
  )
}
