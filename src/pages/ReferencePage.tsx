import { DocPage } from '@/components/docs/DocPage'
import { DocSection } from '@/components/docs/DocSection'
import { ExternalLinkList } from '@/components/docs/ExternalLinkList'
import { GlossaryList } from '@/components/docs/GlossaryList'
import { faq } from '@/data/faq'
import { glossary } from '@/data/glossary'
import { sources } from '@/data/sources'

export function ReferencePage() {
  return (
    <DocPage title="Referensi" lead="Istilah yang dipakai di dokumentasi ini, pertanyaan yang sering muncul, dan sumber yang menjadi dasar rekomendasi.">
      <DocSection id="glosarium" title="Glosarium">
        <GlossaryList terms={glossary} />
      </DocSection>

      <DocSection id="faq" title="Pertanyaan umum">
        <dl className="not-prose my-6 space-y-6">
          {faq.map((item) => (
            <div key={item.id} id={item.id} className="scroll-mt-24">
              <dt className="text-base font-semibold text-fg">{item.question}</dt>
              <dd className="mt-1.5 text-[0.95rem] leading-7 text-fg-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </DocSection>

      <DocSection id="sumber" title="Sumber">
        <p>Semua tautan dibuka di tab baru. Harga dan ketersediaan dari sumber marketplace bersifat sementara.</p>
        {sources.map((group) => (
          <div key={group.title} className="mt-6">
            <h3 className="text-base font-semibold text-fg">{group.title}</h3>
            <ExternalLinkList links={group.links} />
          </div>
        ))}
      </DocSection>
    </DocPage>
  )
}
