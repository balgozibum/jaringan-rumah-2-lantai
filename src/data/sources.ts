export interface SourceGroup {
  title: string
  links: { label: string; url: string }[]
}

export const sources: SourceGroup[] = [
  {
    title: 'Dokumentasi resmi mode Access Point',
    links: [
      { label: 'TP-Link: mengatur router sebagai Access Point', url: 'https://community.tp-link.com/en/home/kb/detail/390' },
      { label: 'TP-Link FAQ 4167: EasyMesh saat mode AP', url: 'https://www.tp-link.com/bd/support/faq/4167' },
      { label: 'Omada EAP: mode standalone tanpa controller', url: 'https://support.omadanetworks.com/us/document/13288/' },
    ],
  },
  {
    title: 'IndiHome dan modem',
    links: [
      { label: 'Telkomsel IndiHome: paket dan harga', url: 'https://www.telkomsel.com/indihome' },
      { label: 'Mengaktifkan port LAN modem Huawei HG8245H5 IndiHome', url: 'https://www.ataende.com/cara-mengaktifkan-lan-port-di-modem-huawei-hg8245h5-indihome/' },
      { label: 'Fungsi port LAN 1–4 modem IndiHome', url: 'https://indowifi.id/indihome/fungsi-port-lan-1-2-3-4-indihome/' },
      { label: 'Diskusi DHCP bawaan ZTE F670L', url: 'https://discourse.pi-hole.net/t/set-up-zte-f670l-to-work-with-raspberry-pi-4b-2gb-with-pi-hole/57293' },
    ],
  },
  {
    title: 'Review perangkat',
    links: [
      { label: 'Blacktubi: Mercusys MR80X', url: 'https://www.blacktubi.com/review/mercusys-mr80x' },
      { label: 'Blacktubi: TP-Link Archer AX55', url: 'https://www.blacktubi.com/review/tp-link-archer-ax55/' },
      { label: 'Dong Knows Tech: TP-Link Archer AX73', url: 'https://dongknows.com/tp-link-archer-ax73-ax5400-router-review/' },
      { label: 'DigitalCitizen: TP-Link Archer AX23', url: 'https://digitalcitizen.life/tp-link-archer-ax23-review' },
    ],
  },
  {
    title: 'Toko resmi di Indonesia',
    links: [
      { label: 'TP-Link Indonesia (Tokopedia)', url: 'https://www.tokopedia.com/tp-linkindonesia' },
      { label: 'Cudy Indonesia (Tokopedia)', url: 'https://www.tokopedia.com/cudy-indonesia' },
    ],
  },
]
