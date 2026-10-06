export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faq: FaqItem[] = [
  {
    id: 'kenapa-bukan-repeater',
    question: 'Kenapa tidak pakai Wi-Fi repeater atau extender saja?',
    answer: 'Repeater menerima dan memancarkan ulang sinyal yang sudah lemah di lantai 2, sehingga kecepatan terpangkas setengah dan latency naik. Kabel LAN membawa sinyal penuh ke lantai 2, lalu AP memancarkannya dengan kekuatan utuh. Selisih biaya kabel kecil dibanding hasilnya.',
  },
  {
    id: 'perlu-akun-admin-modem',
    question: 'Apakah saya butuh akun admin/superadmin modem IndiHome?',
    answer: 'Tidak untuk skema mode AP. Semua perubahan ada di AP; modem dibiarkan apa adanya. Akun admin hanya diperlukan jika ingin mode bridge, DHCP binding, atau mengaktifkan port LAN yang nonaktif pada unit Huawei tertentu.',
  },
  {
    id: 'matikan-wifi-modem',
    question: 'Apakah Wi-Fi modem di lantai 1 perlu dimatikan?',
    answer: 'Tidak. Biarkan menyala untuk lantai 1. Yang penting channel keduanya berbeda. Jika Wi-Fi modem terlalu lemah dan ingin diganti, cara yang sama berlaku: tambah AP di lantai 1 juga.',
  },
  {
    id: 'gigabit-penting',
    question: 'Paket saya 100 Mbps. Apakah perangkat gigabit masih penting?',
    answer: 'Ya. Port 100 Mbps akan jenuh persis di batas paket dan transfer lokal antar perangkat (cast, backup ke NAS) juga terbatas. Semua perangkat yang direkomendasikan di sini berport gigabit.',
  },
  {
    id: 'mesh-nanti',
    question: 'Bisakah nanti ditambah mesh tanpa ganti perangkat?',
    answer: 'Perangkat TP-Link/Mercusys dengan EasyMesh dan ASUS dengan AiMesh bisa ditambah satelit. Catatannya: Archer AX73 hanya mendukung OneMesh saat mode Router, sedangkan Archer AX23 V1 mendukung EasyMesh meski dalam mode AP.',
  },
  {
    id: 'ap-plafon-vs-router',
    question: 'AP plafon (Omada/UniFi) atau router di mode AP?',
    answer: 'Untuk satu titik di rumah, router konsumen di mode AP lebih murah, punya antena eksternal, dan tidak perlu PoE. AP plafon unggul jika ingin tampilan rapi, pemasangan di langit-langit, atau rencana beberapa AP dengan controller.',
  },
]
