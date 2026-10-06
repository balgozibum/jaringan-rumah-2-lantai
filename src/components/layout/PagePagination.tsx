import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { adjacentPages } from '@/data/navigation'
import type { NavPage } from '@/types/docs'

function PaginationLink({ page, direction }: { page: NavPage; direction: 'previous' | 'next' }) {
  const isNext = direction === 'next'
  return (
    <Link
      to={page.path}
      className={`group flex flex-1 flex-col gap-1 rounded-md border border-border bg-bg-elev px-4 py-3 transition-colors hover:border-accent/50 hover:bg-accent-soft/40 ${isNext ? 'items-end text-right' : ''}`}
    >
      <span className="flex items-center gap-1 text-xs text-fg-faint">
        {!isNext && <ArrowLeft aria-hidden="true" className="size-3.5" />}
        {isNext ? 'Berikutnya' : 'Sebelumnya'}
        {isNext && <ArrowRight aria-hidden="true" className="size-3.5" />}
      </span>
      <span className="text-sm font-medium text-fg group-hover:text-accent-strong">{page.label}</span>
    </Link>
  )
}

export function PagePagination({ pathname }: { pathname: string }) {
  const { previous, next } = adjacentPages(pathname)
  if (!previous && !next) return null
  return (
    <nav aria-label="Halaman sebelumnya dan berikutnya" className="mt-14 flex gap-3 border-t border-border pt-6">
      {previous ? <PaginationLink page={previous} direction="previous" /> : <div className="flex-1" />}
      {next ? <PaginationLink page={next} direction="next" /> : <div className="flex-1" />}
    </nav>
  )
}
