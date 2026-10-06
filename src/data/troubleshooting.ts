import type { TroubleshootingCase } from '@/types/docs'

export interface DiagnosticStep {
  question: string
  ifYes: string
  ifNo: string
}

export const diagnosticFlow: DiagnosticStep[] = [
  {
    question: 'Apakah Wi-Fi lantai 1 (langsung dari modem) bisa internet?',
    ifYes: 'Masalah ada di jalur kabel atau AP. Lanjut ke pertanyaan berikutnya.',
    ifNo: 'Masalah di sisi IndiHome. Cek lampu LOS/PON di modem; jika LOS merah, hubungi 147.',
  },
  {
    question: 'Apakah lampu port LAN di modem yang terhubung ke AP menyala?',
    ifYes: 'Kabel secara fisik tersambung. Lanjut.',
    ifNo: 'Periksa kabel, konektor, dan coba port LAN lain (bukan LAN4). Uji kabel dengan laptop langsung.',
  },
  {
    question: 'Apakah HP yang terhubung ke Wi-Fi lantai 2 mendapat IP 192.168.1.x?',
    ifYes: 'DHCP dari modem sampai ke lantai 2. Lanjut.',
    ifNo: 'AP masih di mode router (IP 192.168.0.x) atau DHCP AP masih aktif. Cek Operation Mode.',
  },
  {
    question: 'Apakah ping ke 192.168.1.1 dari HP/laptop di lantai 2 berhasil?',
    ifYes: 'Jaringan lokal sehat. Jika internet tetap tidak bisa, periksa DNS.',
    ifNo: 'Kabel terhubung ke port yang di-VLAN untuk STB, atau AP memiliki IP di subnet berbeda.',
  },
]

export const troubleshootingCases: TroubleshootingCase[] = [
  {
    id: 'no-internet-but-connected',
    symptom: 'Terhubung ke Wi-Fi lantai 2, tetapi "No internet" atau tanda seru.',
    causes: ['AP masih mode Router sehingga klien dapat IP 192.168.0.x dari AP, bukan dari modem', 'Kabel masuk ke port LAN4 yang dialokasikan untuk IndiHome TV', 'Kabel rusak atau konektor longgar'],
    fixes: ['Buka halaman admin AP dan pastikan Operation Mode = Access Point', 'Pindahkan kabel di modem ke LAN1–LAN3', 'Uji kabel dengan laptop langsung ke ujung lantai 2'],
  },
  {
    id: 'ip-169',
    symptom: 'Perangkat mendapat IP 169.254.x.x atau "Obtaining IP address" terus-menerus.',
    causes: ['DHCP modem tidak sampai ke AP: kabel putus sebagian atau WAN AP salah port', 'Pool DHCP modem penuh', 'MAC filtering aktif di modem'],
    fixes: ['Cek lampu link di kedua ujung kabel', 'Restart modem lalu AP secara berurutan', 'Perlebar pool DHCP di modem atau hapus binding yang tidak dipakai'],
  },
  {
    id: 'cannot-open-ap-admin',
    symptom: 'Halaman admin AP tidak bisa dibuka setelah pindah ke mode AP.',
    causes: ['Alamat admin berubah dari 192.168.0.1 ke IP yang diberikan modem', 'AP belum diberi IP statis'],
    fixes: ['Lihat daftar klien DHCP di modem untuk menemukan IP AP', 'Coba alamat domain merek (tplinkwifi.net, router.asus.com)', 'Set IP statis 192.168.1.2 agar tidak berubah lagi'],
  },
  {
    id: 'slow-100mbps',
    symptom: 'Kecepatan di lantai 2 mentok sekitar 90–95 Mbps padahal paket lebih besar.',
    causes: ['Link kabel bernegosiasi 100 Mbps karena pin 4-5-7-8 bermasalah', 'Kabel CCA berkualitas rendah', 'Port modem FE (100 Mbps) pada unit lama'],
    fixes: ['Cek status link di halaman admin AP atau laptop (harus 1000 Mbps)', 'Crimp ulang konektor atau ganti kabel tembaga murni', 'Pindah ke port modem lain; jika semua FE, pertimbangkan minta penggantian modem'],
  },
  {
    id: 'sticky-client',
    symptom: 'Sudah di lantai 2 tetapi HP masih "nyangkut" di sinyal lemah lantai 1.',
    causes: ['Roaming antar AP tanpa mesh sepenuhnya diputuskan perangkat klien', 'Daya pancar modem terlalu tinggi menjangkau lantai 2'],
    fixes: ['Matikan-nyalakan Wi-Fi di HP sekali; perangkat modern biasanya pindah ke sinyal terkuat', 'Turunkan daya pancar modem jika menu tersedia', 'Jika mengganggu, gunakan SSID berbeda untuk lantai 2'],
  },
  {
    id: 'random-drops',
    symptom: 'Wi-Fi lantai 2 putus beberapa detik secara acak, lalu normal lagi.',
    causes: ['AP memakai channel DFS 5 GHz dan berpindah saat mendeteksi radar', 'Channel 2,4 GHz sama dengan modem atau tetangga', 'AP terlalu panas di ruang tertutup'],
    fixes: ['Pindahkan 5 GHz ke channel 36–48 atau 149–161', 'Set channel 2,4 GHz tetap (1/6/11) berbeda dari modem', 'Pindahkan AP ke tempat terbuka dan perbarui firmware'],
  },
  {
    id: 'two-gateways',
    symptom: 'Sebagian perangkat bisa internet, sebagian tidak, secara acak.',
    causes: ['Dua server DHCP aktif (modem dan AP) membagikan gateway berbeda'],
    fixes: ['Pastikan DHCP server di AP nonaktif', 'Reset AP ke pabrik dan ulangi langkah mode AP jika menu DHCP tidak bisa dimatikan'],
  },
]

export interface CommandExample {
  label: string
  description: string
  code: string
}

export const commandExamples: CommandExample[] = [
  {
    label: 'Cek IP dan gateway yang diterima (macOS/Linux)',
    description: 'Pastikan alamat 192.168.1.x dan gateway 192.168.1.1.',
    code: 'ipconfig getifaddr en0        # macOS: IP Wi-Fi\nnetstat -nr | grep default     # gateway\n# Linux\nip addr show && ip route show default',
  },
  {
    label: 'Cek IP dan gateway (Windows)',
    description: 'Lihat baris IPv4 Address dan Default Gateway di adapter Wi-Fi.',
    code: 'ipconfig /all',
  },
  {
    label: 'Ping bertingkat',
    description: 'Jika AP berhasil tetapi modem gagal, masalah ada di kabel/VLAN. Jika modem berhasil tetapi DNS gagal, masalah ada di DNS/ISP.',
    code: 'ping 192.168.1.2    # access point\nping 192.168.1.1    # modem IndiHome\nping 1.1.1.1        # internet tanpa DNS\nping google.com     # DNS',
  },
  {
    label: 'Lihat kecepatan link kabel (Linux/macOS)',
    description: 'Harus 1000Mb/s; jika 100Mb/s, periksa kabel.',
    code: '# Linux\nethtool eth0 | grep Speed\n# macOS\nifconfig en0 | grep media',
  },
  {
    label: 'Deteksi double NAT',
    description: 'Lebih dari satu hop dengan IP privat (192.168.x.x / 10.x.x.x) sebelum IP publik menandakan double NAT.',
    code: 'traceroute 1.1.1.1    # macOS/Linux\ntracert 1.1.1.1       # Windows',
  },
]
