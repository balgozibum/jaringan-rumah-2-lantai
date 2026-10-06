import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { cn } from '@/lib/cn'

interface LinkButtonProps {
  to: string
  variant?: 'primary' | 'secondary'
  children: ReactNode
  className?: string
}

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-strong dark:text-ink',
  secondary: 'border border-border bg-bg-elev text-fg hover:border-border-strong hover:bg-bg-sunken',
}

export function LinkButton({ to, variant = 'primary', children, className }: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex h-10 items-center gap-2 rounded-md px-4 text-sm font-medium transition-colors',
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  )
}
