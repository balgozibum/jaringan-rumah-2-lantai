import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { SidebarNav } from './SidebarNav'
import { IconButton } from '@/components/ui/IconButton'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

interface MobileNavDrawerProps {
  open: boolean
  onClose: () => void
  activeHeadingId: string | null
}

export function MobileNavDrawer({ open, onClose, activeHeadingId }: MobileNavDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return
    closeButtonRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <button
        type="button"
        aria-label="Tutup navigasi"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
      />
      <dialog
        open
        aria-modal="true"
        aria-label="Navigasi dokumentasi"
        className="absolute inset-y-0 left-0 m-0 flex h-full max-h-none w-[min(20rem,85vw)] max-w-none flex-col border-0 border-r border-border bg-bg p-0 text-fg shadow-float"
      >
        <div className="flex h-14 items-center justify-between border-b border-border px-4">
          <BrandMark />
          <IconButton ref={closeButtonRef} label="Tutup navigasi" onClick={onClose}>
            <X aria-hidden="true" className="size-5" />
          </IconButton>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <SidebarNav activeHeadingId={activeHeadingId} onNavigate={onClose} />
        </div>
      </dialog>
    </div>
  )
}
