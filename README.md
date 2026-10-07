# Jaringan Rumah 2 Lantai

Website dokumentasi jaringan rumah dua lantai dengan internet IndiHome: rekomendasi access point untuk lantai 2, panduan pemasangan kabel LAN, konfigurasi mode AP, dan troubleshooting.

Dibangun dengan Vite, React 19, TypeScript, Tailwind CSS v4, React Router, dan lucide-react. Font IBM Plex di-host sendiri lewat `@fontsource`.

## Menjalankan

```bash
npm install
npm run dev       # server pengembangan
npm run build     # type-check (tsc -b) lalu build produksi ke dist/
npm run preview   # melayani hasil build
npm run lint      # oxlint dengan plugin react, typescript, jsx-a11y, import
```

## Struktur

```
src/
  data/         konten dokumentasi sebagai data (produk, langkah, tabel, glosarium, navigasi)
  types/        tipe untuk data dokumentasi dan produk
  components/
    layout/     AppShell, Header, Sidebar, MobileNavDrawer, TableOfContents, PagePagination
    ui/         Badge, Callout, CodeBlock, DataTable, IconButton, ThemeToggle, LinkButton
    docs/       DocPage, DocSection, StepList, Checklist, ProductCard, ProductComparisonTable, ...
    diagram/    TopologyDiagram (potongan rumah dua lantai), BandRangeChart
  hooks/        useTheme, useActiveHeading, useScrollToHash, useDocumentTitle, useLockBodyScroll
  pages/        satu komponen per rute
  lib/          cn (class join) dan format (Rupiah, tanggal)
```

Seluruh teks rekomendasi, harga, dan langkah konfigurasi berada di `src/data/`, sehingga memperbarui harga atau menambah produk tidak menyentuh komponen UI.

## Data harga

Harga di `src/data/products.ts` diamati pada tanggal yang tercatat di `src/data/site.ts`. Status `verified` berarti harga terlihat di toko resmi merek pada tanggal itu; `needs-verification` berarti hanya terlihat di reseller atau tidak bisa dikonfirmasi. Perbarui kedua file tersebut saat mengecek ulang harga.

## Pengecekan yang dilakukan

- `npm run build` dan `npm run lint` bersih.
- Audit browser otomatis (Chrome headless) untuk tujuh rute pada lebar 390, 768, 1024, dan 1440 px: tidak ada overflow horizontal, tidak ada console error, semua tautan internal dan anchor `#id` valid, satu `h1` per halaman tanpa lompatan level heading, semua tombol memiliki nama aksesibel.
- Drawer navigasi mobile: fokus pindah ke tombol tutup saat dibuka dan tertutup dengan Escape.
- Mode gelap mengikuti preferensi sistem dan hanya disimpan ke `localStorage` saat pengguna menekan tombol tema.

## Deploy

Situs memakai `BrowserRouter`, sehingga host harus mengarahkan semua path ke `index.html`:

- Vercel: `vercel.json` sudah berisi rewrite.
- Netlify: `public/_redirects` sudah berisi aturan `/* /index.html 200`.
- GitHub Pages: jalankan `npm run deploy`. Skrip membangun dengan `VITE_BASE=/<nama-repo>/`, menyalin `index.html` menjadi `404.html`, dan mendorong `dist/` ke branch `gh-pages`.
