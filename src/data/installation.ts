import type { Step } from '@/types/docs'

export const placementGuidelines: { title: string; body: string }[] = [
  { title: 'Tengah area pakai, bukan pojok rumah', body: 'Letakkan AP di titik tengah ruangan yang paling sering dipakai di lantai 2 sehingga sinyal menyebar merata, bukan di ujung lorong.' },
  { title: 'Posisi tinggi dan terbuka', body: 'Di atas lemari, rak tinggi, atau dinding setinggi 1,8–2,2 m. Jangan di dalam lemari tertutup, di belakang TV, atau di lantai.' },
  { title: 'Jauh dari sumber interferensi', body: 'Beri jarak minimal 1 m dari microwave, kulkas, speaker Bluetooth besar, dan cermin lebar yang memantulkan sinyal.' },
  { title: 'Antena tegak dan sedikit menyebar', body: 'Untuk router dengan antena eksternal, antena luar dimiringkan ±45° dan antena tengah tegak agar menjangkau bidang horizontal dan vertikal.' },
  { title: 'Ventilasi cukup', body: 'Perangkat yang hangat lebih sering reboot sendiri. Sisakan ruang udara 5 cm di sekelilingnya.' },
  { title: 'Dekat jalur kabel yang realistis', body: 'Titik ideal percuma jika kabel tidak bisa sampai rapi. Rencanakan jalur kabel dulu, lalu pilih titik terbaik di sepanjang jalur itu.' },
]

export const cablingSteps: Step[] = [
  {
    title: 'Rencanakan jalur kabel lantai 1 ke lantai 2',
    body: 'Cari jalur terpendek yang tersembunyi: lubang pipa listrik yang kosong, sudut tangga, atau shaft plumbing. Ukur panjangnya dan tambahkan 20% cadangan.',
    detail: ['Jika memakai pipa yang sudah berisi kabel listrik, gunakan pipa terpisah untuk kabel data.', 'Untuk tarikan di luar dinding, gunakan kabel UTP outdoor atau duct pelindung.'],
  },
  {
    title: 'Pilih port LAN di modem IndiHome',
    body: 'Gunakan port LAN1, LAN2, atau LAN3 di modem. Port LAN4 pada banyak unit IndiHome dialokasikan untuk STB IndiHome TV (UseeTV) dan bisa saja berada di VLAN berbeda.',
    detail: ['Pada Huawei HG8245H5, port LAN1–3 kadang nonaktif dari pabrik dan perlu diaktifkan di menu admin.', 'Jika koneksi di port tertentu tidak dapat internet, coba port lain sebelum menyimpulkan ada masalah lain.'],
  },
  {
    title: 'Tarik kabel dan pasang konektor',
    body: 'Tarik kabel dari lantai 2 ke lantai 1 (dari posisi AP menuju modem). Pasang RJ45 dengan standar T568B di kedua ujung, atau pasang modular jack di dinding dan gunakan patch cord pendek ke perangkat.',
    code: 'Urutan T568B (kiri ke kanan, klip di bawah):\n1 putih-oranye  2 oranye  3 putih-hijau  4 biru\n5 putih-biru    6 hijau   7 putih-cokelat 8 cokelat',
  },
  {
    title: 'Uji kabel sebelum merapikan',
    body: 'Colok ujung lantai 1 ke modem dan ujung lantai 2 langsung ke laptop. Pastikan laptop mendapat IP 192.168.1.x dan negosiasi link 1000 Mbps (1 Gbps) sebelum kabel ditutup rapi.',
    detail: ['Jika link hanya 100 Mbps, periksa kembali crimping pin 4, 5, 7, 8; gigabit memakai keempat pasang kabel.'],
  },
  {
    title: 'Sambungkan kabel ke access point',
    body: 'Untuk router TP-Link atau Mercusys yang dijalankan di mode AP, kabel dari modem masuk ke port WAN (sering diberi warna biru). Untuk ASUS, Cudy, dan Xiaomi, ikuti panduan mode AP masing-masing; umumnya port apa pun bisa dipakai setelah mode AP aktif.',
    detail: ['Untuk AP plafon seperti EAP610, kabel masuk ke satu-satunya port Ethernet; daya dari adaptor DC yang disertakan atau PoE injector.'],
  },
  {
    title: 'Hidupkan perangkat secara berurutan',
    body: 'Nyalakan modem dahulu dan tunggu lampu internet stabil (±2 menit), baru nyalakan AP. Lampu port LAN di modem yang terhubung ke AP harus menyala atau berkedip.',
  },
]

export const preConfigChecklist: string[] = [
  'Laptop berkabel di ujung lantai 2 mendapat IP dari modem dan bisa membuka internet.',
  'Negosiasi link di laptop menunjukkan 1 Gbps, bukan 100 Mbps.',
  'Modem terhubung ke port LAN1–LAN3, bukan LAN4.',
  'Alamat gateway modem diketahui (192.168.1.1 atau 192.168.100.1).',
  'Rentang DHCP modem dicatat dari menu LAN modem.',
  'Nama SSID dan password Wi-Fi lantai 1 dicatat untuk diselaraskan.',
  'Firmware AP sudah diperbarui ke versi terbaru saat masih di mode router bawaan.',
]
