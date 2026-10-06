import { Code2, Globe, Laptop, MonitorPlay, Smartphone, Video } from 'lucide-react'
import type { UseCase } from '@/types/docs'

export const usageProfiles: UseCase[] = [
  { title: 'Bekerja remote', need: 'Koneksi yang tidak putus saat VPN dan tool kolaborasi aktif seharian.', icon: Laptop },
  { title: 'Video conference', need: 'Latency rendah dan jitter kecil; lebih penting daripada bandwidth besar.', icon: Video },
  { title: 'Streaming', need: 'Throughput 5 GHz yang konsisten ke Smart TV dan HP, 25 Mbps per stream 4K.', icon: MonitorPlay },
  { title: 'Browsing', need: 'Respons cepat untuk banyak koneksi kecil; 2,4 GHz pun cukup.', icon: Globe },
  { title: 'Coding & development', need: 'Unduh dependency besar dan SSH stabil; IP tetap untuk perangkat kerja.', icon: Code2 },
  { title: 'Banyak perangkat', need: 'HP, tablet, IoT, TV terhubung bersamaan tanpa saling menjatuhkan.', icon: Smartphone },
]
