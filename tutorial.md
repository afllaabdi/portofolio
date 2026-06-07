# Tutorial: Mengisi Gambar Project Gallery

## Langkah 1 — Letakkan file screenshot di folder `public`

Buat folder `screenshots` di dalam folder `public`, lalu letakkan semua screenshot di dalamnya.

Contoh struktur folder:

```
porto/
└── public/
    └── screenshots/
        ├── face-recognition-dashboard.jpg
        ├── face-recognition-detection.jpg
        ├── face-recognition-registration.jpg
        └── face-recognition-records.jpg
```

## Langkah 2 — Edit file `src/data/portfolio.ts`

Cari bagian `gallery` di project **Face Recognition Attendance System** (baris ~174-179), lalu ubah nilai `src` sesuai nama file screenshot yang kamu simpan.

```ts
gallery: [
  { label: 'Main Dashboard',     src: '/screenshots/face-recognition-dashboard.jpg'     },
  { label: 'Face Detection',     src: '/screenshots/face-recognition-detection.jpg'     },
  { label: 'Face Registration',  src: '/screenshots/face-recognition-registration.jpg'  },
  { label: 'Attendance Records', src: '/screenshots/face-recognition-records.jpg'       },
],
```

## Catatan Penting

- **Format file** — Didukung: `.jpg`, `.jpeg`, `.png`, `.webp`
- **Path** — Selalu mulai dengan `/` dan relatif dari folder `public/` (tidak perlu tulis `public/` di path)
- **Ukuran disarankan** — 1280x720 atau 1920x1080 piksel agar tampilan lightbox tetap tajam
- **Nama file** — Bebas, yang penting sama dengan yang kamu tulis di `src`
- **Jika belum punya screenshot** — Biarkan `src` kosong (`''`), placeholder icon akan otomatis ditampilkan

## Cara Kerja Gallery

1. **Placeholder** — Jika `src` kosong, card menampilkan placeholder icon + label. Tidak error.
2. **Hover** — Jika `src` terisi, hover pada card akan menampilkan overlay transparan.
3. **Klik** — Klik card akan membuka **lightbox modal** untuk melihat gambar dalam ukuran penuh.
4. **Tutup lightbox** — Klik area luar modal atau tombol `X` di pojok kanan atas.

## Contoh Lain (Untuk Project Lain)

Kalau kamu ingin menambahkan gallery ke project lain (misal **BOICELL**), tambahkan array `gallery` di project tersebut di `portfolio.ts`:

```ts
{
  id: 2,
  title: 'BOICELL — Platform Reservasi Layanan',
  // ... existing fields ...
  gallery: [
    { label: 'Home Screen',       src: '/screenshots/boicell-home.jpg'       },
    { label: 'Booking Flow',      src: '/screenshots/boicell-booking.jpg'    },
    { label: 'Warranty History',   src: '/screenshots/boicell-warranty.jpg'  },
    { label: 'Customer Support',   src: '/screenshots/boicell-support.jpg'    },
  ],
},
```

Hanya project yang punya array `gallery` yang akan menampilkan section gallery di card-nya.