import { DecisionFlow } from '@/components/docs/DecisionFlow'
import { DocPage } from '@/components/docs/DocPage'
import { DocSection } from '@/components/docs/DocSection'
import { TroubleshootingItem } from '@/components/docs/TroubleshootingItem'
import { Callout } from '@/components/ui/Callout'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { commandExamples, diagnosticFlow, troubleshootingCases } from '@/data/troubleshooting'

export function TroubleshootingPage() {
  return (
    <DocPage
      title="Troubleshooting"
      lead="Jika Wi-Fi lantai 2 tidak mendapat internet, ikuti alur ini dari atas ke bawah. Setiap langkah memisahkan satu kemungkinan penyebab."
    >
      <DocSection id="alur-diagnosa" title="Alur diagnosa">
        <p>Prinsipnya: pastikan dulu internet sampai ke modem, lalu ke kabel, lalu ke access point, dan terakhir ke perangkat. Jangan mengubah pengaturan sebelum tahu di mana rantainya putus.</p>
        <DecisionFlow steps={diagnosticFlow} />
        <Callout tone="tip" title="Urutan restart yang benar">
          <p>Matikan access point dan modem. Nyalakan modem, tunggu sampai lampu internet stabil (±2 menit), lalu nyalakan access point. Menyalakan bersamaan membuat AP kadang tidak mendapat alamat dari modem.</p>
        </Callout>
      </DocSection>

      <DocSection id="kasus" title="Kasus umum">
        <p>Klik gejala yang paling mirip untuk melihat penyebab dan perbaikannya.</p>
        <div className="not-prose my-6 space-y-2">
          {troubleshootingCases.map((item) => (
            <TroubleshootingItem key={item.id} item={item} />
          ))}
        </div>
      </DocSection>

      <DocSection id="perintah" title="Perintah yang berguna">
        <p>Perintah berikut dijalankan dari laptop yang terhubung ke Wi-Fi lantai 2.</p>
        {commandExamples.map((example) => (
          <div key={example.label} className="mt-6">
            <h3 className="text-base font-semibold text-fg">{example.label}</h3>
            <p className="mt-1 text-sm text-fg-muted">{example.description}</p>
            <CodeBlock code={example.code} label="terminal" />
          </div>
        ))}
      </DocSection>
    </DocPage>
  )
}
