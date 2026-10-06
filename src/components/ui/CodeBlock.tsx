import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/cn'

interface CodeBlockProps {
  code: string
  label?: string
  className?: string
}

export function CodeBlock({ code, label, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable: button simply stays in its default state */
    }
  }

  return (
    <figure className={cn('my-4 overflow-hidden rounded-md border border-border bg-code-bg', className)}>
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-1.5">
        <figcaption className="font-mono text-xs text-code-fg/60">{label ?? 'terminal'}</figcaption>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-xs text-code-fg/70 transition-colors hover:bg-white/10 hover:text-code-fg"
          aria-label={copied ? 'Tersalin' : 'Salin perintah'}
        >
          {copied ? <Check aria-hidden="true" className="size-3.5" /> : <Copy aria-hidden="true" className="size-3.5" />}
          <span>{copied ? 'Tersalin' : 'Salin'}</span>
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3 font-mono text-[0.85rem] leading-6 text-code-fg">
        <code>{code}</code>
      </pre>
    </figure>
  )
}
