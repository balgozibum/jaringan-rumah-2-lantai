import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { TopologyDiagram } from '@/components/diagram/TopologyDiagram'
import { DocPage } from '@/components/docs/DocPage'
import { DocSection } from '@/components/docs/DocSection'
import { UseCaseGrid } from '@/components/docs/UseCaseGrid'
import { Callout } from '@/components/ui/Callout'
import { LinkButton } from '@/components/ui/LinkButton'
import { navigation } from '@/data/navigation'
import { recommendedProduct } from '@/data/products'
import { usageProfiles } from '@/data/usage-profiles'
import { formatPriceRange } from '@/lib/format'

const principles = [
  { title: 'Stabilitas di atas angka kecepatan', body: 'Label AX3000 atau AX5400 adalah jumlah teoretis semua band. Yang terasa sehari-hari adalah firmware yang tidak perlu di-restart dan sinyal yang tidak putus saat video call.' },
  { title: 'Mode Access Point, bukan router kedua', body: 'Modem IndiHome tetap menjadi satu-satunya router. Perangkat lantai 2 hanya memancarkan Wi-Fi, sehingga semua perangkat berada di satu jaringan tanpa double NAT.' },
  { title: 'Kabel LAN sebagai tulang punggung', body: 'Kabel tembaga membawa sinyal penuh ke lantai 2. Repeater nirkabel justru melipatgandakan masalah sinyal lemah.' },
  { title: 'Mudah dibeli dan digaransi di Indonesia', body: 'Prioritas pada produk yang dijual toko resmi merek di Tokopedia atau Shopee dan punya garansi lokal.' },
  { title: 'Port gigabit adalah syarat minimum', body: 'Paket IndiHome saat ini 100–300 Mbps; port 100 Mbps akan jenuh persis di batas paket.' },
]

export function OverviewPage() {
  const budgetPick = recommendedProduct('budget')
  const midPick = recommendedProduct('mid')

  return (
    <DocPage
      title="Wi-Fi stabil di lantai 2 dengan satu kabel LAN"
      lead="Dokumentasi memilih dan memasang access point untuk rumah dua lantai dengan internet IndiHome: dari rekomendasi perangkat sampai konfigurasi yang bebas double NAT."
      hero={<TopologyDiagram />}
    >
      <DocSection id="kondisi" title="Kondisi & tujuan">
        <p>
          Modem IndiHome berada di lantai 1 dan sinyal Wi-Fi-nya melemah di lantai 2. Solusinya adalah menarik satu kabel LAN dari modem ke lantai 2, lalu memasang perangkat yang dijalankan sebagai <strong>Access Point</strong> di sana. Perangkat ini tidak membuat jaringan baru; ia memperluas jaringan yang sudah ada.
        </p>
        <ul>
          <li>Internet utama: IndiHome, modem/ONT di lantai 1.</li>
          <li>Kabel LAN ditarik dari modem lantai 1 ke lantai 2.</li>
          <li>Perangkat lantai 2 bekerja sebagai AP, mudah dikonfigurasi dengan modem IndiHome.</li>
          <li>Prioritas: stabil, coverage baik, bukan fitur yang banyak.</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton to="/rekomendasi">
            Lihat rekomendasi perangkat
            <ArrowRight aria-hidden="true" className="size-4" />
          </LinkButton>
          <LinkButton to="/konfigurasi" variant="secondary">
            Langsung ke konfigurasi
          </LinkButton>
        </div>
      </DocSection>

      <DocSection id="topologi" title="Topologi jaringan">
        <p>
          Diagram di atas menunjukkan jalur sinyal: internet masuk lewat fiber ke modem di lantai 1, modem melakukan NAT dan membagikan alamat IP lewat DHCP, kabel LAN membawa jaringan yang sama ke lantai 2, dan access point memancarkannya ke laptop, PC, smartphone, dan Smart TV.
        </p>
        <p>
          Dua hal yang membuat topologi ini sederhana: hanya ada <strong>satu subnet</strong> (192.168.1.0/24) dan hanya ada <strong>satu server DHCP</strong> (modem). Access point memiliki alamat IP sendiri hanya untuk keperluan admin.
        </p>
      </DocSection>

      <DocSection id="kebutuhan" title="Kebutuhan penggunaan">
        <p>Perangkat dinilai terhadap pola pemakaian berikut, bukan terhadap angka kecepatan di kotak.</p>
        <UseCaseGrid items={usageProfiles} />
      </DocSection>

      <DocSection id="prinsip" title="Prinsip pemilihan">
        <ol>
          {principles.map((principle) => (
            <li key={principle.title}>
              <strong>{principle.title}.</strong> {principle.body}
            </li>
          ))}
        </ol>
        {budgetPick && midPick && (
          <Callout tone="tip" title="Ringkasan rekomendasi">
            <p>
              Sekitar Rp1 juta: <strong>{budgetPick.brand} {budgetPick.model}</strong> ({formatPriceRange(budgetPick.price.min, budgetPick.price.max)}). Rp1–2 juta: <strong>{midPick.brand} {midPick.model}</strong> ({formatPriceRange(midPick.price.min, midPick.price.max)}). Alasan dan alternatifnya ada di halaman <Link to="/rekomendasi">Rekomendasi perangkat</Link>.
            </p>
          </Callout>
        )}
      </DocSection>

      <DocSection id="alur-kerja" title="Alur pengerjaan">
        <p>Dokumentasi ini mengikuti urutan pengerjaan yang sebenarnya. Setiap halaman berdiri sendiri, tetapi paling mudah diikuti berurutan.</p>
        <ol className="not-prose my-6 grid gap-2 pl-0 sm:grid-cols-2">
          {navigation.slice(1).map((page, index) => {
            const Icon = page.icon
            return (
              <li key={page.path} className="list-none">
                <Link
                  to={page.path}
                  className="flex h-full items-start gap-3 rounded-md border border-border bg-bg-elev p-4 no-underline transition-colors hover:border-accent/50 hover:bg-accent-soft/40"
                >
                  <span className="font-mono text-sm text-accent">{index + 1}</span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 text-sm font-semibold text-fg">
                      <Icon aria-hidden="true" className="size-4 text-fg-faint" />
                      {page.label}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-fg-muted">{page.description}</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ol>
      </DocSection>
    </DocPage>
  )
}
