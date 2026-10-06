/**
 * Two horizontal "reach" bars: how far each band carries a usable signal and
 * how much throughput it leaves. Drawn as SVG so the two bars share one scale.
 */
const bands = [
  { label: '2,4 GHz', reach: 0.95, speed: 0.3, reachText: 'Jangkauan jauh', speedText: 'Kecepatan rendah' },
  { label: '5 GHz', reach: 0.55, speed: 0.95, reachText: 'Jangkauan pendek', speedText: 'Kecepatan tinggi' },
] as const

export function BandRangeChart() {
  return (
    <figure className="my-6 rounded-md border border-border bg-bg-elev p-4 sm:p-5">
      <div className="space-y-5">
        {bands.map((band) => (
          <div key={band.label}>
            <p className="mb-2 text-sm font-semibold text-fg">{band.label}</p>
            <dl className="space-y-1.5">
              <Bar label={band.reachText} ratio={band.reach} tone="bg-accent" />
              <Bar label={band.speedText} ratio={band.speed} tone="bg-cable" />
            </dl>
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-xs leading-5 text-fg-faint">
        Panjang bar bersifat relatif, bukan ukuran terukur. Biru = seberapa jauh sinyal tetap berguna; kuning = throughput yang tersisa.
      </figcaption>
    </figure>
  )
}

function Bar({ label, ratio, tone }: { label: string; ratio: number; tone: string }) {
  return (
    <div className="grid grid-cols-[8.5rem_1fr] items-center gap-3 text-xs">
      <dt className="text-fg-muted">{label}</dt>
      <dd className="h-2 w-full overflow-hidden rounded-full bg-bg-sunken">
        <span className={`block h-full rounded-full ${tone}`} style={{ width: `${ratio * 100}%` }} />
      </dd>
    </div>
  )
}
