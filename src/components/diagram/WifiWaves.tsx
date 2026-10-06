/** Three concentric arcs suggesting Wi-Fi coverage below a device. */
export function WifiWaves({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 40" className={`h-8 w-24 ${className}`} fill="none">
      <path d="M20 8a56 56 0 0 1 80 0" className="stroke-accent/30" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 20a36 36 0 0 1 52 0" className="stroke-accent/55" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 31a16 16 0 0 1 24 0" className="stroke-accent" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
