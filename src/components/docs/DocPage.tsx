import type { ReactNode } from 'react'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

interface DocPageProps {
  title: string
  lead: string
  /** Optional element rendered between the lead and the body, e.g. a hero diagram. */
  hero?: ReactNode
  children: ReactNode
}

export function DocPage({ title, lead, hero, children }: DocPageProps) {
  useDocumentTitle(title)
  return (
    <article className="max-w-[72ch] xl:max-w-none">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-[60ch] text-lg leading-8 text-fg-muted">{lead}</p>
      </header>
      {hero}
      <div className="space-y-14">{children}</div>
    </article>
  )
}
