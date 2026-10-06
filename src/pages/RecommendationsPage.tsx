import { DocPage } from '@/components/docs/DocPage'
import { DocSection } from '@/components/docs/DocSection'
import { ProductCard } from '@/components/docs/ProductCard'
import { ProductComparisonTable } from '@/components/docs/ProductComparisonTable'
import { Callout } from '@/components/ui/Callout'
import { DataTable, type Column } from '@/components/ui/DataTable'
import { alsoConsidered, products, productsByTier, tierLabels, type ConsideredProduct } from '@/data/products'
import { siteMeta } from '@/data/site'
import { formatDate } from '@/lib/format'

const criteria = [
  { label: 'Stabilitas', weight: 'Paling berat', detail: 'Reputasi firmware, laporan putus koneksi, panas, dan apakah vendor masih merilis pembaruan.' },
  { label: 'Coverage', weight: 'Berat', detail: 'Jumlah dan jenis antena, konfigurasi radio (2×2 vs 4×4) untuk menembus satu lantai beton.' },
  { label: 'Mode AP resmi', weight: 'Wajib', detail: 'Tercantum di halaman spesifikasi atau FAQ resmi, bukan sekadar trik komunitas.' },
  { label: 'Port gigabit', weight: 'Wajib', detail: 'Semua port LAN/WAN 1 Gbps. Kandidat dengan port 100 Mbps langsung dicoret.' },
  { label: 'Ketersediaan di Indonesia', weight: 'Berat', detail: 'Dijual toko resmi merek atau distributor dengan garansi lokal.' },
  { label: 'Kecepatan maksimum', weight: 'Ringan', detail: 'Hanya pembeda jika dua kandidat setara di kriteria lain.' },
]

const consideredColumns: Column<ConsideredProduct>[] = [
  { key: 'name', header: 'Perangkat', render: (row) => <span className="font-medium text-fg">{row.name}</span>, className: 'w-56' },
  { key: 'reason', header: 'Alasan tidak masuk daftar utama', render: (row) => <span className="text-fg-muted">{row.reason}</span> },
]

export function RecommendationsPage() {
  const budget = productsByTier('budget')
  const mid = productsByTier('mid')

  return (
    <DocPage
      title="Rekomendasi perangkat"
      lead="Kandidat access point untuk lantai 2 dalam dua rentang harga, dinilai dari stabilitas, coverage, dan kemudahan dibeli di Indonesia."
    >
      <DocSection id="kriteria" title="Kriteria penilaian">
        <p>Setiap kandidat dicek terhadap kriteria berikut. Bobot menunjukkan seberapa besar pengaruhnya terhadap urutan rekomendasi.</p>
        <ul className="not-prose my-6 grid gap-2 pl-0 sm:grid-cols-2">
          {criteria.map((item) => (
            <li key={item.label} className="list-none rounded-md border border-border bg-bg-elev p-4">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-semibold text-fg">{item.label}</h3>
                <span className="text-xs text-fg-faint">{item.weight}</span>
              </div>
              <p className="mt-1 text-sm leading-6 text-fg-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
        <Callout tone="info" title="Semua kandidat berport gigabit">
          <p>Tidak ada kandidat di bawah yang memakai port 100 Mbps. Model murah yang perlu dihindari karena port 100 Mbps antara lain TP-Link Archer C54/C24, Tenda AC5/AC6, dan Xiaomi 4C/4A non-Gigabit.</p>
        </Callout>
      </DocSection>

      <DocSection id={tierLabels.budget.headingId} title={`${tierLabels.budget.title} (${tierLabels.budget.range})`}>
        <p>Di rentang ini pilihan terbaik adalah router Wi-Fi 6 konsumen yang dijalankan di mode AP. Urutan di bawah adalah urutan rekomendasi.</p>
        <div className="not-prose my-6 space-y-5">
          {budget.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </DocSection>

      <DocSection id={tierLabels.mid.headingId} title={`${tierLabels.mid.title} (${tierLabels.mid.range})`}>
        <p>Tambahan anggaran paling berguna untuk radio 4×4 dan antena lebih banyak (coverage), atau untuk access point plafon kelas bisnis jika kabel bisa sampai ke langit-langit.</p>
        <div className="not-prose my-6 space-y-5">
          {mid.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </DocSection>

      <DocSection id="perbandingan" title="Tabel perbandingan">
        <ProductComparisonTable products={products} />
        <h3 className="mt-8 mb-3 text-base font-semibold text-fg">Juga dipertimbangkan</h3>
        <DataTable
          caption="Perangkat yang dievaluasi tetapi tidak masuk daftar utama."
          hideCaption
          columns={consideredColumns}
          rows={alsoConsidered}
          rowKey={(row) => row.name}
        />
      </DocSection>

      <DocSection id="catatan-harga" title="Catatan harga & verifikasi">
        <p>
          Harga dikumpulkan pada {formatDate(siteMeta.pricesObservedAt)} dari listing Tokopedia dan situs resmi merek. Halaman produk marketplace tidak selalu bisa dibuka langsung, sehingga sebagian harga berasal dari tangkapan hasil pencarian pada tanggal tersebut.
        </p>
        <ul>
          <li><strong>Harga terverifikasi</strong>: terlihat di toko resmi merek (misalnya TP-Link Indonesia atau Cudy Indonesia di Tokopedia) pada tanggal pengamatan.</li>
          <li><strong>Perlu verifikasi</strong>: hanya terlihat di reseller, rentangnya lebar, atau harga toko resmi tidak tercatat. Cek ulang sebelum membeli.</li>
        </ul>
        <Callout tone="warning" title="Yang belum bisa diverifikasi">
          <ul className="list-disc space-y-1 pl-5">
            <li>Harga toko resmi Xiaomi Indonesia untuk AX3000T dan versi (RD03/RD23) yang dikirim penjual.</li>
            <li>Ketersediaan dan harga Tenda RX9 Pro, Tenda AX12, dan Huawei WiFi AX3 di Indonesia.</li>
            <li>Halaman resmi Cudy WR3000 tidak dapat dibuka; dukungan mode AP dikutip dari datasheet retailer.</li>
            <li>Chipset Archer AX23 versi V2 (V1 memakai MT7621/MT7915).</li>
            <li>Tidak ditemukan ulasan Jagat Review, Tek.id, atau thread Kaskus spesifik untuk model-model ini.</li>
          </ul>
        </Callout>
      </DocSection>
    </DocPage>
  )
}
