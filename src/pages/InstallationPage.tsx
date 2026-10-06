import { Checklist } from '@/components/docs/Checklist'
import { DocPage } from '@/components/docs/DocPage'
import { DocSection } from '@/components/docs/DocSection'
import { StepList } from '@/components/docs/StepList'
import { SubHeading } from '@/components/docs/SubHeading'
import { Badge } from '@/components/ui/Badge'
import { Callout } from '@/components/ui/Callout'
import { DataTable, type Column } from '@/components/ui/DataTable'
import { cableChecklist, cableOptions, type CableOption } from '@/data/cable-guide'
import { cablingSteps, placementGuidelines, preConfigChecklist } from '@/data/installation'

const recommendationTone: Record<CableOption['recommendation'], 'ok' | 'neutral' | 'danger'> = {
  disarankan: 'ok',
  cukup: 'neutral',
  hindari: 'danger',
}

const cableColumns: Column<CableOption>[] = [
  { key: 'category', header: 'Kategori', render: (row) => <span className="font-medium text-fg">{row.category}</span> },
  { key: 'speed', header: 'Kecepatan', render: (row) => row.speed },
  {
    key: 'recommendation',
    header: 'Saran',
    render: (row) => <Badge tone={recommendationTone[row.recommendation]}>{row.recommendation}</Badge>,
  },
  { key: 'note', header: 'Catatan', render: (row) => <span className="text-fg-muted">{row.note}</span> },
]

export function InstallationPage() {
  return (
    <DocPage
      title="Pemasangan fisik"
      lead="Memilih kabel LAN, menentukan posisi access point, dan menyambungkan semuanya sebelum menyentuh satu pun pengaturan."
    >
      <DocSection id="kabel-lan" title="Memilih kabel LAN">
        <p>
          Untuk jalur permanen di dalam rumah, <strong>Cat6 UTP inti tembaga murni</strong> adalah pilihan yang paling masuk akal. Cat5e secara teknis cukup untuk gigabit, tetapi selisih harganya kecil dan Cat6 memberi ruang jika paket internet naik.
        </p>
        <DataTable caption="Perbandingan kategori kabel untuk tarikan lantai 1 ke lantai 2." columns={cableColumns} rows={cableOptions} rowKey={(row) => row.category} />
        <SubHeading>Yang perlu dicek saat membeli</SubHeading>
        <ul>
          {cableChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Callout tone="danger" title="Kabel CCA adalah penyebab paling umum link 100 Mbps">
          <p>Kabel berlabel "Cat6" seharga sangat murah hampir selalu CCA. Cek deskripsi produk untuk kata <code>pure copper</code> atau <code>bare copper</code>; jika tidak ada, anggap CCA.</p>
        </Callout>
      </DocSection>

      <DocSection id="posisi-perangkat" title="Posisi perangkat">
        <p>Posisi access point berpengaruh lebih besar pada coverage daripada perbedaan spesifikasi antar kandidat. Prinsipnya: tinggi, terbuka, dan di tengah area pakai.</p>
        <ul className="not-prose my-6 grid gap-3 pl-0 sm:grid-cols-2">
          {placementGuidelines.map((item) => (
            <li key={item.title} className="list-none rounded-md border border-border bg-bg-elev p-4">
              <h3 className="text-sm font-semibold text-fg">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-fg-muted">{item.body}</p>
            </li>
          ))}
        </ul>
        <Callout tone="tip">
          <p>Sebelum melubangi dinding, uji posisi dengan kabel sementara dan cek kekuatan sinyal di kamar paling jauh menggunakan aplikasi WiFi Analyzer. Sinyal di atas −67 dBm cukup untuk video call.</p>
        </Callout>
      </DocSection>

      <DocSection id="menghubungkan-kabel" title="Menghubungkan kabel">
        <StepList steps={cablingSteps} label="Langkah pemasangan kabel" />
      </DocSection>

      <DocSection id="checklist" title="Checklist sebelum konfigurasi">
        <p>Semua poin di bawah harus terpenuhi sebelum masuk ke halaman konfigurasi. Jika ada yang gagal, masalahnya fisik, bukan pengaturan.</p>
        <Checklist items={preConfigChecklist} label="Checklist pemasangan" />
      </DocSection>
    </DocPage>
  )
}
