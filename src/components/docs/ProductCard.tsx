import { ExternalLink, Minus, Plus, Star } from 'lucide-react'
import { ScoreBar } from './ScoreBar'
import { Badge } from '@/components/ui/Badge'
import { VerificationBadge } from '@/components/ui/VerificationBadge'
import { formatPriceRange } from '@/lib/format'
import type { Product } from '@/types/product'

const scoreLabels: Record<keyof Product['scores'], string> = {
  stability: 'Stabilitas',
  coverage: 'Coverage',
  easeOfSetup: 'Kemudahan setup',
  value: 'Nilai per rupiah',
}

export function ProductCard({ product }: { product: Product }) {
  const scoreEntries = Object.entries(product.scores) as [keyof Product['scores'], number][]
  return (
    <article
      aria-labelledby={`${product.id}-title`}
      className={`relative rounded-lg border bg-bg-elev p-5 transition-colors sm:p-6 ${
        product.recommended ? 'border-accent/50 shadow-float' : 'border-border hover:border-border-strong'
      }`}
    >
      {product.recommended && (
        <Badge tone="accent" className="absolute -top-2.5 left-5">
          <Star aria-hidden="true" className="size-3.5" />
          Rekomendasi utama
        </Badge>
      )}
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs text-fg-faint">{product.brand}</p>
          <h3 id={`${product.id}-title`} className="text-lg font-semibold tracking-tight text-fg">
            {product.model}
          </h3>
        </div>
        <div className="text-right">
          <p className="font-mono text-sm font-medium text-fg">{formatPriceRange(product.price.min, product.price.max)}</p>
          <div className="mt-1">
            <VerificationBadge status={product.price.status} />
          </div>
        </div>
      </header>
      <p className="mt-3 text-[0.95rem] leading-7 text-fg-muted">{product.tagline}</p>

      <dl className="mt-5 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
        <SpecItem label="Standar" value={product.spec.wifiStandard} />
        <SpecItem label="Band" value={product.spec.bandConfig} />
        <SpecItem label="Antena" value={product.spec.antennas} />
        <SpecItem label="LAN / WAN" value={`${product.spec.lanPorts} · ${product.spec.wanPort}`} />
        <SpecItem label="Mode AP" value={product.spec.apMode} />
        <SpecItem label="Mesh" value={product.spec.mesh} />
        {product.spec.power && <SpecItem label="Daya" value={product.spec.power} />}
      </dl>

      <div className="mt-5 grid gap-1.5 rounded-md bg-bg-sunken/60 p-3 sm:grid-cols-2 sm:gap-x-6">
        {scoreEntries.map(([key, value]) => (
          <ScoreBar key={key} label={scoreLabels[key]} value={value} />
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <ProsConsList title="Kelebihan" items={product.pros} icon={Plus} tone="text-ok" />
        <ProsConsList title="Catatan" items={product.cons} icon={Minus} tone="text-warn" />
      </div>

      <footer className="mt-5 border-t border-border pt-4 text-xs text-fg-faint">
        <p>Harga: {product.price.sourceLabel}.</p>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {product.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                {source.label}
                <ExternalLink aria-hidden="true" className="size-3" />
                <span className="sr-only">(tab baru)</span>
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  )
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-border/60 pb-2 sm:border-b-0 sm:pb-0">
      <dt className="text-xs text-fg-faint">{label}</dt>
      <dd className="text-fg">{value}</dd>
    </div>
  )
}

interface ProsConsListProps {
  title: string
  items: string[]
  icon: typeof Plus
  tone: string
}

function ProsConsList({ title, items, icon: Icon, tone }: ProsConsListProps) {
  return (
    <div>
      <h4 className="mb-2 text-xs font-semibold text-fg-muted">{title}</h4>
      <ul className="space-y-1.5 text-sm leading-6 text-fg-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <Icon aria-hidden="true" className={`mt-1.5 size-3.5 shrink-0 ${tone}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
