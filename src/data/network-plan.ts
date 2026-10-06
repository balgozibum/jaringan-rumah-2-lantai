/**
 * Example addressing plan for the house. The ONT keeps its factory LAN
 * settings; only the access point gets a reserved address outside the pool.
 */
export interface NetworkDevice {
  id: string
  name: string
  floor: 1 | 2
  role: string
  ip: string
  ipNote: string
}

export const subnet = {
  cidr: '192.168.1.0/24',
  mask: '255.255.255.0',
  gateway: '192.168.1.1',
  dhcpStart: '192.168.1.100',
  dhcpEnd: '192.168.1.254',
  dns: '192.168.1.1 (diteruskan ke DNS Telkom) atau 1.1.1.1 / 8.8.8.8',
} as const

export const networkDevices: NetworkDevice[] = [
  {
    id: 'ont',
    name: 'Modem/ONT IndiHome',
    floor: 1,
    role: 'Router utama, NAT, server DHCP, Wi-Fi lantai 1',
    ip: '192.168.1.1',
    ipNote: 'Bawaan ZTE/Fiberhome. Modem Huawei biasanya 192.168.100.1; sesuaikan seluruh contoh jika demikian.',
  },
  {
    id: 'ap',
    name: 'Access Point lantai 2',
    floor: 2,
    role: 'Hanya memancarkan Wi-Fi; tidak NAT, tidak DHCP',
    ip: '192.168.1.2',
    ipNote: 'IP statis di luar rentang DHCP agar halaman admin AP selalu mudah dibuka.',
  },
  {
    id: 'clients',
    name: 'Laptop, PC, HP, Smart TV',
    floor: 2,
    role: 'Klien Wi-Fi atau kabel di lantai 2',
    ip: '192.168.1.100 – 254',
    ipNote: 'Diberikan otomatis oleh DHCP modem, baik lewat Wi-Fi lantai 1 maupun lantai 2.',
  },
]

export interface OntModel {
  model: string
  vendor: string
  lan: string
  wifi: string
  gateway: string
  note?: string
}

/** Common IndiHome ONT units. Rows marked with a note need checking against the actual unit. */
export const ontModels: OntModel[] = [
  { model: 'ZXHN F670L', vendor: 'ZTE', lan: '4 × Gigabit', wifi: 'Dual-band AC1200 (2,4 + 5 GHz)', gateway: '192.168.1.1', note: 'Unit arus utama saat ini.' },
  { model: 'ZXHN F609', vendor: 'ZTE', lan: '4 × Gigabit (spesifikasi ZTE)', wifi: '2,4 GHz saja, N300', gateway: '192.168.1.1', note: 'Klaim "LAN hanya 100 Mbps" tidak terverifikasi; Wi-Fi-nya memang lambat.' },
  { model: 'HG8245H / H5', vendor: 'Huawei', lan: '4 × GE/FE auto', wifi: '2,4 GHz saja, N300', gateway: '192.168.100.1', note: 'Port LAN1–3 sering nonaktif dari pabrik; perlu akun admin untuk mengaktifkan.' },
  { model: 'HG8145V5', vendor: 'Huawei', lan: '4 × Gigabit', wifi: 'Dual-band Wi-Fi 5', gateway: '192.168.100.1' },
  { model: 'HG6243C', vendor: 'Fiberhome', lan: 'Perlu verifikasi', wifi: 'Perlu verifikasi', gateway: '192.168.1.1', note: 'Datasheet tidak ditemukan; model saudara HG6244C adalah 4 × GE dual-band.' },
]
