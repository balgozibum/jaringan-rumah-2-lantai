interface CableLinkProps {
  label: string
  detail: string
  /** `fiber` is the thin dotted uplink; `lan` is the amber copper run between floors. */
  variant: 'fiber' | 'lan'
}

/** Vertical connector drawn with SVG so the dash animation is a single stroke. */
export function CableLink({ label, detail, variant }: CableLinkProps) {
  const isLan = variant === 'lan'
  return (
    <div className="relative mx-auto flex h-16 w-full items-center justify-center sm:h-20">
      <svg
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 h-full w-4 -translate-x-1/2"
        viewBox="0 0 16 80"
        preserveAspectRatio="none"
      >
        <line x1="8" y1="0" x2="8" y2="80" className={isLan ? 'stroke-cable' : 'stroke-border-strong'} strokeWidth={isLan ? 3 : 2} />
        {isLan && <line x1="8" y1="0" x2="8" y2="80" className="cable-flow stroke-cable-strong" strokeWidth={3} />}
        {!isLan && <line x1="8" y1="0" x2="8" y2="80" className="stroke-bg" strokeWidth={2} strokeDasharray="2 6" />}
      </svg>
      <div
        className={`relative ml-10 flex flex-col rounded-md border px-2.5 py-1.5 text-xs leading-5 sm:ml-14 ${
          isLan ? 'border-cable/50 bg-cable-soft text-cable-strong' : 'border-border bg-bg-elev text-fg-muted'
        }`}
      >
        <span className="font-medium">{label}</span>
        <span className={isLan ? 'text-cable-strong/80' : 'text-fg-faint'}>{detail}</span>
      </div>
    </div>
  )
}
