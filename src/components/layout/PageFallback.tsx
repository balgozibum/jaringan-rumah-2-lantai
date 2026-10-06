/** Skeleton shown while a page chunk loads; mirrors the DocPage header shape. */
export function PageFallback() {
  return (
    <output aria-live="polite" aria-label="Memuat halaman" className="block max-w-[72ch] animate-pulse">
      <div className="h-9 w-3/4 rounded-md bg-bg-sunken" />
      <div className="mt-4 h-5 w-full rounded-md bg-bg-sunken" />
      <div className="mt-2 h-5 w-5/6 rounded-md bg-bg-sunken" />
      <div className="mt-10 h-64 w-full rounded-lg bg-bg-sunken" />
    </output>
  )
}
