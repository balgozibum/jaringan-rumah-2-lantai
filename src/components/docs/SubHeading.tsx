import type { ReactNode } from 'react'

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 mb-3 text-base font-semibold text-fg">{children}</h3>
}
