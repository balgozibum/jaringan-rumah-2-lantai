import { SidebarNav } from './SidebarNav'

interface SidebarProps {
  activeHeadingId: string | null
}

export function Sidebar({ activeHeadingId }: SidebarProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pr-4">
        <SidebarNav activeHeadingId={activeHeadingId} />
      </div>
    </aside>
  )
}
