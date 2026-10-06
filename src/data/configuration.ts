import type { Step } from '@/types/docs'

export const apModeSteps: Step[] = [
  {
    title: 'Masuk ke halaman admin AP saat masih mode router',
    body: 'Sambungkan laptop langsung ke port LAN AP (belum ke kabel dari modem). Buka alamat admin bawaan, misalnya tplinkwifi.net atau 192.168.0.1 untuk TP-Link/Mercusys, router.asus.com untuk ASUS. Ikuti wizard singkat dan atur password admin yang kuat.',
  },
  {
    title: 'Perbarui firmware',
    body: 'Cek menu System atau Administration untuk pembaruan firmware dan pasang versi terbaru. Mode AP tidak menghilangkan bug firmware; lakukan ini sebelum berpindah mode.',
  },
  {
    title: 'Atur SSID, password, dan channel',
    body: 'Isi nama jaringan dan password untuk 2,4 GHz dan 5 GHz sesuai rencana di bagian SSID. Pengaturan ini tetap dipakai setelah berpindah ke mode AP.',
  },
  {
    title: 'Pindahkan ke mode Access Point',
    body: 'TP-Link/Mercusys: Advanced → System → Operation Mode → Access Point. ASUS: Administration → Operation Mode → Access Point (AP) mode. Cudy: Mode → Access Point. Xiaomi: Common settings → Internet settings → Working mode → Wired relay. Perangkat akan reboot.',
    detail: ['Di mode AP, fitur NAT, DHCP server, port forwarding, QoS, dan parental control otomatis dinonaktifkan.'],
  },
  {
    title: 'Tetapkan IP statis untuk AP',
    body: 'Setelah reboot, jika tersedia pilihan LAN IP di mode AP, pilih "Static" dan isi 192.168.1.2, mask 255.255.255.0, gateway 192.168.1.1, DNS 192.168.1.1. Jika hanya tersedia DHCP, buat DHCP binding/reservasi di modem untuk MAC address AP.',
    code: 'IP address : 192.168.1.2\nSubnet mask: 255.255.255.0\nGateway    : 192.168.1.1\nDNS        : 192.168.1.1',
  },
  {
    title: 'Sambungkan kabel dari modem dan uji',
    body: 'Colok kabel dari lantai 1 ke port WAN (TP-Link/Mercusys) atau port yang ditentukan panduan merek. Sambungkan HP ke Wi-Fi lantai 2 dan pastikan mendapat IP 192.168.1.x serta bisa membuka internet.',
  },
]

export interface SettingRow {
  setting: string
  ont: string
  ap: string
  reason: string
}

export const dhcpTable: SettingRow[] = [
  { setting: 'DHCP server', ont: 'Aktif (satu-satunya)', ap: 'Nonaktif (otomatis di mode AP)', reason: 'Dua server DHCP di satu segmen membuat klien kadang mendapat gateway yang salah.' },
  { setting: 'Rentang DHCP', ont: '192.168.1.100 – 254', ap: 'Tidak ada', reason: 'Menyisakan 192.168.1.2–99 untuk perangkat ber-IP tetap.' },
  { setting: 'Gateway yang dibagikan', ont: '192.168.1.1', ap: 'Tidak ada', reason: 'Semua klien, termasuk yang lewat Wi-Fi lantai 2, keluar lewat modem.' },
  { setting: 'IP manajemen', ont: '192.168.1.1', ap: '192.168.1.2 (statis)', reason: 'Alamat admin AP tidak berubah walau modem direstart.' },
  { setting: 'Lease time', ont: 'Bawaan (umumnya 24 jam)', ap: 'Tidak relevan', reason: 'Cukup untuk rumah; perubahan tidak perlu.' },
]

export interface ReservedIpRow {
  device: string
  ip: string
  reason: string
}

export const reservedIps: ReservedIpRow[] = [
  { device: 'Access Point lantai 2', ip: '192.168.1.2', reason: 'Akses admin konsisten' },
  { device: 'PC/laptop kerja (opsional)', ip: '192.168.1.10', reason: 'SSH, port forwarding, atau dev server lokal' },
  { device: 'Printer / NAS (opsional)', ip: '192.168.1.20 – 29', reason: 'Alamat tidak berubah untuk perangkat lain' },
  { device: 'Smart TV, HP, tamu', ip: 'Otomatis dari pool', reason: 'Tidak butuh alamat tetap' },
]

export interface SsidPlan {
  band: string
  ssid: string
  security: string
  note: string
}

export const ssidPlan: SsidPlan[] = [
  { band: 'Lantai 1 · 2,4 GHz', ssid: 'Rumah', security: 'WPA2/WPA3-Personal', note: 'Dipancarkan modem. Untuk IoT dan perangkat lama.' },
  { band: 'Lantai 1 · 5 GHz', ssid: 'Rumah', security: 'WPA2/WPA3-Personal', note: 'Sama persis dengan 2,4 GHz jika ingin satu nama (band steering).' },
  { band: 'Lantai 2 · 2,4 GHz', ssid: 'Rumah', security: 'WPA2/WPA3-Personal, password sama', note: 'Nama dan password sama dengan lantai 1 agar perangkat berpindah otomatis.' },
  { band: 'Lantai 2 · 5 GHz', ssid: 'Rumah', security: 'WPA2/WPA3-Personal, password sama', note: 'Jika ingin memaksa laptop kerja selalu di 5 GHz, beri nama terpisah seperti "Rumah-5G".' },
]

export const passwordRules: string[] = [
  'Minimal 12 karakter, gabungan huruf besar, kecil, angka; frasa yang mudah diingat lebih baik dari karakter acak pendek.',
  'WPA2-Personal (AES) sebagai minimum; pilih WPA2/WPA3 campuran jika tersedia, hindari WPA/TKIP dan WEP.',
  'Password Wi-Fi dan password admin AP harus berbeda.',
  'Nonaktifkan WPS karena rentan brute force PIN.',
  'Ganti password admin bawaan modem IndiHome jika akun user Anda mengizinkan.',
]

export interface BandComparisonRow {
  aspect: string
  band24: string
  band5: string
}

export const bandComparison: BandComparisonRow[] = [
  { aspect: 'Jangkauan & tembus tembok', band24: 'Lebih jauh, lebih baik menembus beton', band5: 'Lebih pendek, mudah terhalang dinding' },
  { aspect: 'Kecepatan maksimum', band24: 'Rendah (praktis 50–150 Mbps)', band5: 'Tinggi (praktis 300–900 Mbps)' },
  { aspect: 'Gangguan dari tetangga', band24: 'Tinggi; hanya 3 channel tidak tumpang tindih', band5: 'Rendah; banyak channel lebar' },
  { aspect: 'Latency untuk video call', band24: 'Fluktuatif saat ramai', band5: 'Lebih stabil' },
  { aspect: 'Cocok untuk', band24: 'IoT, smart plug, printer, perangkat lama', band5: 'Laptop kerja, HP, Smart TV, konsol' },
  { aspect: 'Lebar channel yang disarankan', band24: '20 MHz', band5: '80 MHz (40 MHz jika banyak AP tetangga)' },
]

export interface ChannelPlanRow {
  device: string
  band24: string
  band5: string
}

export const channelPlan: ChannelPlanRow[] = [
  { device: 'Modem IndiHome (lantai 1)', band24: 'Channel 1, lebar 20 MHz', band5: 'Channel 36 (36–48), lebar 80 MHz' },
  { device: 'Access Point (lantai 2)', band24: 'Channel 11, lebar 20 MHz', band5: 'Channel 149 (149–161), lebar 80 MHz' },
]

export const channelNotes: string[] = [
  'Pada 2,4 GHz hanya channel 1, 6, dan 11 yang tidak saling tumpang tindih. Kedua lantai saling menjangkau, sehingga wajib memakai channel berbeda.',
  'Pada 5 GHz, pilih channel non-DFS (36–48 dan 149–161) agar AP tidak berpindah channel mendadak saat mendeteksi radar.',
  'Hindari "Auto" di kedua perangkat sekaligus; keduanya bisa memilih channel yang sama saat boot.',
  'Gunakan aplikasi seperti WiFiman atau WiFi Analyzer di HP untuk melihat channel tetangga, lalu pilih yang paling kosong.',
]

export interface SsidDecisionRow {
  criterion: string
  same: string
  different: string
}

export const ssidDecision: SsidDecisionRow[] = [
  { criterion: 'Perpindahan antar lantai', same: 'Otomatis; perangkat pindah sendiri saat sinyal lama melemah', different: 'Manual; harus memilih jaringan lain' },
  { criterion: 'Perangkat "lengket" di sinyal lemah', same: 'Bisa terjadi, tergantung perangkat (tidak ada roaming terkoordinasi tanpa mesh)', different: 'Tidak terjadi, karena pengguna memilih sendiri' },
  { criterion: 'Troubleshooting', same: 'Sulit tahu terhubung ke AP mana tanpa cek BSSID', different: 'Jelas dari nama jaringan' },
  { criterion: 'Kemudahan untuk keluarga/tamu', same: 'Satu nama, satu password', different: 'Perlu menjelaskan dua jaringan' },
  { criterion: 'Rekomendasi', same: 'Pilihan default untuk rumah ini', different: 'Jika sering kerja di satu titik dan ingin memaksa AP tertentu' },
]

export interface NatComparisonRow {
  aspect: string
  apMode: string
  routerMode: string
}

export const natComparison: NatComparisonRow[] = [
  { aspect: 'Jumlah NAT', apMode: 'Satu (di modem)', routerMode: 'Dua (modem + router lantai 2)' },
  { aspect: 'Subnet', apMode: 'Satu: 192.168.1.0/24', routerMode: 'Dua: 192.168.1.0/24 dan 192.168.0.0/24' },
  { aspect: 'Cast ke TV / printer antar lantai', apMode: 'Berfungsi', routerMode: 'Tidak saling melihat' },
  { aspect: 'Port forwarding, game online, VPN', apMode: 'Hanya atur di modem', routerMode: 'Harus diatur di dua perangkat, NAT type sering "strict"' },
  { aspect: 'Butuh akun admin modem', apMode: 'Tidak', routerMode: 'Tidak, tetapi masalahnya tetap ada' },
  { aspect: 'Alternatif mode bridge modem', apMode: 'Tidak perlu', routerMode: 'Menghilangkan double NAT, tetapi perlu akun superadmin yang jarang diberikan Telkom' },
]

export const doubleNatSigns: string[] = [
  'IP WAN di halaman admin router lantai 2 berupa 192.168.x.x atau 10.x.x.x, bukan IP publik.',
  'Perangkat di lantai 2 tidak bisa cast ke Chromecast/TV yang terhubung ke Wi-Fi lantai 1.',
  'Konsol game melaporkan NAT Type Strict atau Moderate.',
  'Traceroute menunjukkan dua hop privat sebelum keluar ke internet.',
]

export const dhcpConflictChecks: string[] = [
  'Pastikan hanya modem yang menjalankan DHCP. Di mode AP, DHCP server AP otomatis mati; verifikasi di menu Network → DHCP Server jika menu masih tampil.',
  'IP statis AP (192.168.1.2) berada di luar pool 192.168.1.100–254 sehingga tidak akan diberikan ke klien lain.',
  'Jika ada perangkat lain dengan IP manual (printer, PC), catat semuanya di satu daftar supaya tidak ganda.',
  'Jangan pernah memberi AP alamat 192.168.1.1; itu alamat modem.',
  'Setelah mengubah pengaturan, lepas-pasang Wi-Fi di HP untuk mendapatkan lease baru.',
]
