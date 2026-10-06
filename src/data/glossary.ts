import type { GlossaryTerm } from '@/types/docs'

export const glossary: GlossaryTerm[] = [
  { term: 'ONT / modem IndiHome', definition: 'Optical Network Terminal, perangkat yang mengubah sinyal fiber menjadi Ethernet dan Wi-Fi. Pengguna Indonesia biasanya menyebutnya "modem IndiHome".' },
  { term: 'Access Point (AP)', definition: 'Perangkat yang memancarkan Wi-Fi dan meneruskan lalu lintas ke jaringan kabel tanpa membuat subnet baru. Router rumahan bisa dijalankan sebagai AP lewat "mode AP".' },
  { term: 'Mode AP / Mode Bridge', definition: 'Mode operasi router yang menonaktifkan NAT dan DHCP sehingga hanya berfungsi sebagai switch plus pemancar Wi-Fi.' },
  { term: 'NAT', definition: 'Network Address Translation, menerjemahkan banyak IP privat menjadi satu IP publik. Dilakukan modem IndiHome.' },
  { term: 'Double NAT', definition: 'Dua perangkat melakukan NAT berurutan; terjadi jika router lantai 2 dibiarkan di mode Router.' },
  { term: 'DHCP', definition: 'Dynamic Host Configuration Protocol, membagikan IP, gateway, dan DNS otomatis ke perangkat. Hanya boleh ada satu server DHCP per jaringan rumah.' },
  { term: 'DHCP binding / reservasi', definition: 'Mengikat IP tertentu ke MAC address perangkat sehingga selalu mendapat alamat yang sama.' },
  { term: 'Gateway', definition: 'Alamat perangkat yang menjadi pintu keluar ke internet, di sini 192.168.1.1 (modem).' },
  { term: 'SSID', definition: 'Nama jaringan Wi-Fi yang tampil di daftar jaringan.' },
  { term: 'BSSID', definition: 'MAC address pemancar Wi-Fi; membedakan AP lantai 1 dan lantai 2 saat SSID sama.' },
  { term: 'Channel', definition: 'Frekuensi spesifik yang dipakai Wi-Fi. Channel yang sama antar perangkat berdekatan saling mengganggu.' },
  { term: 'DFS', definition: 'Dynamic Frequency Selection, channel 5 GHz (52–144) yang berbagi dengan radar; AP wajib berpindah jika mendeteksi radar.' },
  { term: 'Band steering', definition: 'Fitur yang mengarahkan perangkat ke 5 GHz atau 2,4 GHz secara otomatis saat SSID keduanya sama.' },
  { term: 'EasyMesh / OneMesh / AiMesh', definition: 'Standar atau sistem mesh untuk menambah satelit Wi-Fi dengan roaming terkoordinasi. EasyMesh terbuka; OneMesh (TP-Link) dan AiMesh (ASUS) khusus merek.' },
  { term: 'PoE', definition: 'Power over Ethernet, mengalirkan daya lewat kabel LAN; dipakai AP plafon seperti Omada EAP dan UniFi.' },
  { term: 'VLAN', definition: 'Pemisahan jaringan logis di satu kabel. Port LAN4 modem IndiHome sering dipisah VLAN untuk STB IndiHome TV.' },
  { term: 'CCA', definition: 'Copper Clad Aluminium, kabel inti aluminium berlapis tembaga. Murah tetapi tidak andal untuk gigabit.' },
  { term: 'Wi-Fi 5 / 6 / 7', definition: '802.11ac / 802.11ax / 802.11be. Angka AX3000 atau AX5400 adalah total kecepatan teoretis semua band, bukan kecepatan yang akan diterima satu perangkat.' },
]
