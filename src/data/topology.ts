import { Globe, Laptop, Monitor, Router, Smartphone, Tv, Wifi, type LucideIcon } from 'lucide-react'

export interface TopologyEndpoint {
  id: string
  label: string
  icon: LucideIcon
}

export interface TopologyFloor {
  number: 1 | 2
  title: string
  device: {
    name: string
    role: string
    ip: string
    icon: LucideIcon
    tags: string[]
  }
  clients?: TopologyEndpoint[]
}

export const internetSource = {
  label: 'Internet IndiHome',
  detail: 'Fiber optik ke rumah',
  icon: Globe,
}

export const topologyFloors: TopologyFloor[] = [
  {
    number: 1,
    title: 'Lantai 1',
    device: {
      name: 'Modem / Router IndiHome',
      role: 'Router utama · NAT · DHCP · Wi-Fi lantai 1',
      ip: '192.168.1.1',
      icon: Router,
      tags: ['Mode Router', 'DHCP aktif'],
    },
  },
  {
    number: 2,
    title: 'Lantai 2',
    device: {
      name: 'Access Point',
      role: 'Hanya memancarkan Wi-Fi · tanpa NAT · tanpa DHCP',
      ip: '192.168.1.2',
      icon: Wifi,
      tags: ['Mode AP', 'IP statis'],
    },
    clients: [
      { id: 'laptop', label: 'Laptop', icon: Laptop },
      { id: 'pc', label: 'PC', icon: Monitor },
      { id: 'phone', label: 'Smartphone', icon: Smartphone },
      { id: 'tv', label: 'Smart TV', icon: Tv },
    ],
  },
]

export const lanCable = {
  label: 'Kabel LAN Cat6',
  detail: 'Lantai 1 → Lantai 2 · 1 Gbps',
}
