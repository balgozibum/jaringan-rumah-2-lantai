import { Menu } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { IconButton } from '@/components/ui/IconButton'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface HeaderProps {
  onOpenNav: () => void
}

export function Header({ onOpenNav }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-3 px-4 sm:px-6">
        <IconButton label="Buka navigasi" onClick={onOpenNav} className="lg:hidden">
          <Menu aria-hidden="true" className="size-5" />
        </IconButton>
        <BrandMark />
        <div className="ml-auto flex items-center gap-1">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
