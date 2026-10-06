import { BookOpen, Cable, Home, Router, Settings2, Wrench } from 'lucide-react'
import type { NavPage } from '@/types/docs'

export const navigation: NavPage[] = [
  {
    path: '/',
    label: 'Ringkasan',
    description: 'Kondisi rumah, topologi, dan prinsip pemilihan perangkat.',
    icon: Home,
    headings: [
      { id: 'kondisi', label: 'Kondisi & tujuan' },
      { id: 'topologi', label: 'Topologi jaringan' },
      { id: 'kebutuhan', label: 'Kebutuhan penggunaan' },
      { id: 'prinsip', label: 'Prinsip pemilihan' },
      { id: 'alur-kerja', label: 'Alur pengerjaan' },
    ],
  },
  {
    path: '/rekomendasi',
    label: 'Rekomendasi perangkat',
    shortLabel: 'Rekomendasi',
    description: 'Pilihan access point untuk lantai 2 di dua rentang harga.',
    icon: Router,
    headings: [
      { id: 'kriteria', label: 'Kriteria penilaian' },
      { id: 'tier-1-juta', label: 'Sekitar Rp1 juta' },
      { id: 'tier-1-2-juta', label: 'Rp1–2 juta' },
      { id: 'perbandingan', label: 'Tabel perbandingan' },
      { id: 'catatan-harga', label: 'Catatan harga & verifikasi' },
    ],
  },
  {
    path: '/instalasi',
    label: 'Pemasangan fisik',
    shortLabel: 'Pemasangan',
    description: 'Kabel LAN, posisi perangkat, dan cara menghubungkan.',
    icon: Cable,
    headings: [
      { id: 'kabel-lan', label: 'Memilih kabel LAN' },
      { id: 'posisi-perangkat', label: 'Posisi perangkat' },
      { id: 'menghubungkan-kabel', label: 'Menghubungkan kabel' },
      { id: 'checklist', label: 'Checklist sebelum konfigurasi' },
    ],
  },
  {
    path: '/konfigurasi',
    label: 'Konfigurasi',
    description: 'Mode AP, IP, DHCP, SSID, channel, dan menghindari double NAT.',
    icon: Settings2,
    headings: [
      { id: 'rencana-ip', label: 'Rencana alamat IP' },
      { id: 'mode-access-point', label: 'Mengaktifkan mode Access Point' },
      { id: 'dhcp', label: 'DHCP' },
      { id: 'ssid-password', label: 'SSID & password' },
      { id: 'band', label: '2,4 GHz vs 5 GHz' },
      { id: 'channel', label: 'Channel Wi-Fi' },
      { id: 'ssid-sama-atau-beda', label: 'SSID sama atau berbeda?' },
      { id: 'double-nat', label: 'Menghindari double NAT' },
      { id: 'konflik-dhcp', label: 'Menghindari konflik DHCP' },
    ],
  },
  {
    path: '/troubleshooting',
    label: 'Troubleshooting',
    description: 'Diagnosa cepat jika Wi-Fi lantai 2 tidak mendapat internet.',
    icon: Wrench,
    headings: [
      { id: 'alur-diagnosa', label: 'Alur diagnosa' },
      { id: 'kasus', label: 'Kasus umum' },
      { id: 'perintah', label: 'Perintah yang berguna' },
    ],
  },
  {
    path: '/referensi',
    label: 'Referensi',
    description: 'Glosarium, pertanyaan umum, dan sumber.',
    icon: BookOpen,
    headings: [
      { id: 'glosarium', label: 'Glosarium' },
      { id: 'faq', label: 'Pertanyaan umum' },
      { id: 'sumber', label: 'Sumber' },
    ],
  },
]

export function findPage(pathname: string): NavPage | undefined {
  return navigation.find((page) => page.path === pathname)
}

export function adjacentPages(pathname: string): { previous?: NavPage; next?: NavPage } {
  const index = navigation.findIndex((page) => page.path === pathname)
  if (index === -1) return {}
  return { previous: navigation[index - 1], next: navigation[index + 1] }
}
