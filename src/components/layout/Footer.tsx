import { siteMeta } from '@/data/site'
import { formatDate } from '@/lib/format'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border py-6 text-xs text-fg-faint">
      <p>
        Dokumentasi jaringan rumah pribadi. Harga dan ketersediaan produk diperiksa pada{' '}
        {formatDate(siteMeta.pricesObservedAt)} dan dapat berubah.
      </p>
    </footer>
  )
}
