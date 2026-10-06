import { LinkButton } from '@/components/ui/LinkButton'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('Halaman tidak ditemukan')
  return (
    <section className="py-16">
      <p className="font-mono text-sm text-fg-faint">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-fg">Halaman tidak ditemukan</h1>
      <p className="mt-3 max-w-[50ch] text-fg-muted">Alamat ini tidak ada di dokumentasi. Gunakan navigasi di samping atau kembali ke ringkasan.</p>
      <div className="mt-6">
        <LinkButton to="/">Ke halaman ringkasan</LinkButton>
      </div>
    </section>
  )
}
