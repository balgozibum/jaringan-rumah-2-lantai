import { NavLink, useLocation } from 'react-router'
import { navigation } from '@/data/navigation'
import { cn } from '@/lib/cn'

interface SidebarNavProps {
  activeHeadingId?: string | null
  onNavigate?: () => void
}

/**
 * Page list with the current page's headings expanded underneath it.
 * Rendered inside both the desktop sidebar and the mobile drawer.
 */
export function SidebarNav({ activeHeadingId, onNavigate }: SidebarNavProps) {
  const { pathname } = useLocation()

  return (
    <nav aria-label="Navigasi dokumentasi">
      <ul className="space-y-1">
        {navigation.map((page) => {
          const isCurrent = pathname === page.path
          const Icon = page.icon
          return (
            <li key={page.path}>
              <NavLink
                to={page.path}
                end
                onClick={onNavigate}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors',
                    isActive
                      ? 'bg-accent-soft font-medium text-accent-strong'
                      : 'text-fg-muted hover:bg-bg-sunken hover:text-fg',
                  )
                }
              >
                <Icon aria-hidden="true" className="size-4 shrink-0" />
                <span>{page.label}</span>
              </NavLink>
              {isCurrent && page.headings.length > 0 && (
                <ul className="mt-1 mb-2 ml-[1.15rem] space-y-0.5 border-l border-border pl-3">
                  {page.headings.map((heading) => {
                    const active = heading.id === activeHeadingId
                    return (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          onClick={onNavigate}
                          aria-current={active ? 'location' : undefined}
                          className={cn(
                            'relative block rounded-sm px-2 py-1 text-[0.8rem] leading-5 transition-colors',
                            active ? 'font-medium text-accent-strong' : 'text-fg-faint hover:text-fg',
                            active &&
                              'before:absolute before:-left-[13px] before:top-1 before:h-3.5 before:w-0.5 before:rounded-full before:bg-accent',
                          )}
                        >
                          {heading.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
