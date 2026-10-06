import { cn } from '@/lib/cn'
import type { NavHeading } from '@/types/docs'

interface TableOfContentsProps {
  headings: NavHeading[]
  activeHeadingId: string | null
}

export function TableOfContents({ headings, activeHeadingId }: TableOfContentsProps) {
  if (headings.length === 0) return null
  return (
    <aside className="hidden xl:block">
      <nav aria-label="Di halaman ini" className="sticky top-14 py-8 pl-6">
        <p className="mb-3 text-xs font-semibold text-fg-muted">Di halaman ini</p>
        <ul className="space-y-0.5 border-l border-border">
          {headings.map((heading) => {
            const active = heading.id === activeHeadingId
            return (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  aria-current={active ? 'location' : undefined}
                  className={cn(
                    '-ml-px block border-l-2 py-1 pl-3 text-[0.8rem] leading-5 transition-colors',
                    active
                      ? 'border-accent font-medium text-accent-strong'
                      : 'border-transparent text-fg-faint hover:border-border-strong hover:text-fg',
                  )}
                >
                  {heading.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
