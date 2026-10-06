import type { ComponentPropsWithRef } from 'react'
import { cn } from '@/lib/cn'

interface IconButtonProps extends ComponentPropsWithRef<'button'> {
  /** Accessible name; icon-only buttons must describe their action. */
  label: string
}

export function IconButton({ label, className, children, type = 'button', ...rest }: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-md border border-transparent text-fg-muted transition-colors hover:border-border hover:bg-bg-sunken hover:text-fg',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
