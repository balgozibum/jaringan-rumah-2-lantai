import { Link } from 'react-router'

export function BrandMark() {
  return (
    <Link to="/" className="flex items-center gap-2.5 rounded-sm" aria-label="Ke halaman ringkasan">
      <svg aria-hidden="true" viewBox="0 0 32 32" className="size-7 shrink-0">
        <rect width="32" height="32" rx="7" className="fill-accent" />
        <rect x="7" y="19" width="18" height="6" rx="1.5" className="fill-none stroke-white dark:stroke-ink" strokeWidth="2" />
        <rect x="7" y="7" width="18" height="6" rx="1.5" className="fill-none stroke-white dark:stroke-ink" strokeWidth="2" />
        <path d="M16 13v6" className="stroke-cable" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-tight text-fg">Jaringan Rumah</span>
        <span className="text-xs text-fg-faint">Dokumentasi dua lantai</span>
      </span>
    </Link>
  )
}
