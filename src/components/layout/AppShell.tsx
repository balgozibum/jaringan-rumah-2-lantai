import { useCallback, useMemo, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileNavDrawer } from './MobileNavDrawer'
import { PagePagination } from './PagePagination'
import { Sidebar } from './Sidebar'
import { TableOfContents } from './TableOfContents'
import { findPage } from '@/data/navigation'
import { useActiveHeading } from '@/hooks/useActiveHeading'
import { useScrollToHash } from '@/hooks/useScrollToHash'

export function AppShell() {
  const { pathname } = useLocation()
  const [navOpen, setNavOpen] = useState(false)
  const page = findPage(pathname)
  const headings = useMemo(() => page?.headings ?? [], [page])
  const headingIds = useMemo(() => headings.map((heading) => heading.id), [headings])
  const activeHeadingId = useActiveHeading(headingIds)
  const closeNav = useCallback(() => setNavOpen(false), [])

  useScrollToHash()

  return (
    <div className="min-h-screen">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Lompat ke konten
      </a>
      <Header onOpenNav={() => setNavOpen(true)} />
      <MobileNavDrawer open={navOpen} onClose={closeNav} activeHeadingId={activeHeadingId} />
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-4 sm:px-6 lg:grid-cols-[15.5rem_minmax(0,1fr)] xl:grid-cols-[15.5rem_minmax(0,1fr)_13rem]">
        <Sidebar activeHeadingId={activeHeadingId} />
        <main id="konten" tabIndex={-1} className="min-w-0 py-8 lg:px-10 lg:py-10">
          <Outlet />
          <PagePagination pathname={pathname} />
          <Footer />
        </main>
        <TableOfContents headings={headings} activeHeadingId={activeHeadingId} />
      </div>
    </div>
  )
}
