import { CableLink } from './CableLink'
import { FloorPanel } from './FloorPanel'
import { internetSource, lanCable, topologyFloors } from '@/data/topology'

/**
 * The house in cross-section. Floor 2 is drawn above floor 1 (as in the real
 * building), while the connection story reads from the internet down into the
 * house and up the LAN cable.
 */
export function TopologyDiagram() {
  const [floor1, floor2] = topologyFloors
  const SourceIcon = internetSource.icon

  return (
    <figure className="my-8 rounded-lg border border-border bg-bg-elev p-4 sm:p-8">
      <div className="mx-auto max-w-2xl">
        <FloorPanel floor={floor2} />
        <CableLink label={lanCable.label} detail={lanCable.detail} variant="lan" />
        <FloorPanel floor={floor1} />
        <CableLink label="Fiber optik" detail="Dari tiang Telkom ke modem" variant="fiber" />
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-border bg-bg px-4 py-2">
          <SourceIcon aria-hidden="true" className="size-4 text-accent" />
          <span className="text-sm font-medium text-fg">{internetSource.label}</span>
          <span className="hidden text-xs text-fg-faint sm:inline">{internetSource.detail}</span>
        </div>
      </div>
      <figcaption className="mt-6 text-center text-xs leading-5 text-fg-faint">
        Internet IndiHome → Modem lantai 1 → Kabel LAN → Access Point lantai 2 → Laptop, PC, Smartphone, Smart TV.
        Satu subnet, satu server DHCP, dua pemancar Wi-Fi.
      </figcaption>
    </figure>
  )
}
