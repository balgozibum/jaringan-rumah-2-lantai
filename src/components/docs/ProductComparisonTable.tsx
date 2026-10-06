import { Star } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { DataTable, type Column } from '@/components/ui/DataTable'
import { VerificationBadge } from '@/components/ui/VerificationBadge'
import { tierLabels } from '@/data/products'
import { formatPriceRange } from '@/lib/format'
import type { Product } from '@/types/product'

const columns: Column<Product>[] = [
  {
    key: 'model',
    header: 'Perangkat',
    render: (product) => (
      <div className="flex flex-col gap-1">
        <span className="font-medium text-fg">
          {product.brand} {product.model}
        </span>
        <span className="text-xs text-fg-faint">{tierLabels[product.tier].title}</span>
        {product.recommended && (
          <Badge tone="accent" className="w-fit">
            <Star aria-hidden="true" className="size-3" />
            Utama
          </Badge>
        )}
      </div>
    ),
  },
  { key: 'standard', header: 'Standar', render: (product) => product.spec.wifiStandard },
  { key: 'antennas', header: 'Antena', render: (product) => product.spec.antennas },
  { key: 'lan', header: 'Port LAN', render: (product) => product.spec.lanPorts },
  { key: 'mesh', header: 'Mesh', render: (product) => product.spec.mesh },
  {
    key: 'price',
    header: 'Harga (Okt 2026)',
    render: (product) => (
      <div className="flex flex-col gap-1">
        <span className="font-mono whitespace-nowrap">{formatPriceRange(product.price.min, product.price.max)}</span>
        <VerificationBadge status={product.price.status} />
      </div>
    ),
  },
  {
    key: 'scores',
    header: 'Stabilitas / Coverage',
    align: 'center',
    render: (product) => (
      <span className="font-mono text-sm">
        {product.scores.stability} / {product.scores.coverage}
      </span>
    ),
  },
]

export function ProductComparisonTable({ products }: { products: Product[] }) {
  return (
    <DataTable
      caption="Perbandingan ringkas seluruh kandidat. Skor stabilitas dan coverage dalam skala 1–5 relatif terhadap kebutuhan rumah ini."
      columns={columns}
      rows={products}
      rowKey={(product) => product.id}
    />
  )
}
