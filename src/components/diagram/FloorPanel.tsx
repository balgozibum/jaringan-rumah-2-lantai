import { ClientRow } from './ClientRow'
import { DeviceNode } from './DeviceNode'
import { WifiWaves } from './WifiWaves'
import type { TopologyFloor } from '@/data/topology'

/**
 * A floor drawn as a cross-section: thin walls on the sides, a thick slab at
 * the bottom. The floor number sits on the slab like a stair sign.
 */
export function FloorPanel({ floor }: { floor: TopologyFloor }) {
  const accent = floor.number === 1 ? 'fiber' : 'cable'
  return (
    <section
      aria-label={floor.title}
      className="relative rounded-t-lg border-x-2 border-t-2 border-border-strong border-b-[10px] border-b-fg/80 bg-bg-sunken/50 px-4 pt-4 pb-5 sm:px-6 sm:pt-5 sm:pb-6 dark:border-b-fg/60"
    >
      <p className="absolute -top-3 left-4 rounded-sm border border-border-strong bg-bg px-2 py-0.5 text-xs font-semibold tracking-wide text-fg sm:left-6">
        {floor.title}
      </p>
      <div className="mt-2 space-y-3">
        <DeviceNode {...floor.device} accent={accent} />
        <div className="flex justify-center">
          <WifiWaves />
        </div>
        {floor.clients && <ClientRow clients={floor.clients} />}
        {!floor.clients && (
          <p className="text-center text-xs text-fg-faint">Wi-Fi lantai 1 untuk perangkat di lantai 1</p>
        )}
      </div>
    </section>
  )
}
