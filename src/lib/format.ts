const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
})

export function formatRupiah(value: number): string {
  return rupiah.format(value)
}

/** "Rp 1.100.000 – Rp 1.300.000" */
export function formatPriceRange(min: number, max: number): string {
  if (min === max) return formatRupiah(min)
  return `${formatRupiah(min)} – ${formatRupiah(max)}`
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(new Date(iso))
}
