import type { TopologyEndpoint } from '@/data/topology'

export function ClientRow({ clients }: { clients: TopologyEndpoint[] }) {
  return (
    <ul aria-label="Perangkat yang terhubung ke Wi-Fi lantai 2" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {clients.map(({ id, label, icon: Icon }) => (
        <li
          key={id}
          className="flex items-center gap-2 rounded-md border border-dashed border-border-strong bg-bg px-3 py-2 text-sm text-fg-muted"
        >
          <Icon aria-hidden="true" className="size-4 shrink-0 text-fg-faint" />
          {label}
        </li>
      ))}
    </ul>
  )
}
