export interface CableOption {
  category: string
  speed: string
  recommendation: 'disarankan' | 'cukup' | 'hindari'
  note: string
}

export const cableOptions: CableOption[] = [
  { category: 'Cat5e', speed: '1 Gbps hingga 100 m', recommendation: 'cukup', note: 'Memadai untuk paket IndiHome saat ini (100–300 Mbps). Pilih hanya jika sudah tersedia.' },
  { category: 'Cat6', speed: '1 Gbps hingga 100 m, 10 Gbps hingga 55 m', recommendation: 'disarankan', note: 'Selisih harga kecil, isolasi crosstalk lebih baik, aman untuk upgrade paket gigabit.' },
  { category: 'Cat6a', speed: '10 Gbps hingga 100 m', recommendation: 'cukup', note: 'Lebih tebal dan kaku, lebih sulit ditarik lewat pipa; tidak diperlukan untuk rumah.' },
  { category: 'Kabel CCA (Copper Clad Aluminium)', speed: 'Tidak stabil', recommendation: 'hindari', note: 'Inti aluminium berlapis tembaga, sering dijual murah sebagai "Cat6". Rentan negosiasi 100 Mbps dan putus-putus.' },
]

export const cableChecklist: string[] = [
  'Inti tembaga murni (pure copper / bare copper), bukan CCA.',
  'Tipe UTP solid untuk tarikan permanen di dinding; stranded hanya untuk patch cord pendek.',
  'Panjang total jalur di bawah 90 m; untuk rumah dua lantai biasanya 15–30 m.',
  'Konektor RJ45 dan modular jack sesuai kategori kabel (Cat6 untuk Cat6).',
  'Sisakan 1–2 m cadangan di tiap ujung sebelum dipotong.',
  'Jauhkan dari kabel listrik sejajar; jika harus menyilang, buat tegak lurus.',
  'Hindari tekukan tajam dan staples yang menjepit kabel.',
]
