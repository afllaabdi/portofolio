# Panduan Update Portfolio

Dokumen ini menjelaskan cara mengganti dan memperbarui isi portfolio tanpa perlu menyentuh kode program.

---

## Struktur File

```
porto/
├── public/
│   └── portofolio/
│       └── profile.jpg        ← Foto profil
├── src/
│   ├── data/
│   │   └── portfolio.ts        ← Semua data portfolio (teks, link, proyek, dll)
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── app/
│       ├── layout.tsx          ← SEO metadata
│       └── page.tsx
└── tutorial.md
```

**Yang perlu diedit manual hanya 2 file:**
1. `src/data/portfolio.ts` — untuk semua data teks dan link
2. `public/...` — untuk semua file gambar/foto

---

## 1. Mengganti Foto Profil

**Lokasi file:** `public/portofolio/profile.jpg`

**Langkah:**
1. Siapkan foto baru (format: `.jpg`, `.png`, `.webp`)
2. Ganti/overwrite file `public/portofolio/profile.jpg` dengan foto baru
3. Refresh browser — foto profil di Hero section akan otomatis berubah

**Catatan:**
- Nama file harus tetap `profile.jpg`
- Ukuran yang disarankan: **400x400** piksel atau lebih (square)
- Background transparan atau solid color lebih rapi

---

## 2. Mengganti / Menambah Foto Gallery Proyek

**Lokasi folder:** `public/screenshots/`

**Langkah:**
1. Buat folder `screenshots` di dalam `public` jika belum ada
2. Letakkan screenshot proyek ke folder tersebut
3. Edit `src/data/portfolio.ts`, cari bagian `gallery` di project yang diinginkan
4. Isi `src` sesuai nama file screenshot

**Contoh isi `gallery` di `portfolio.ts`:**

```ts
gallery: [
  { label: 'Main Dashboard',     src: '/screenshots/dashboard.jpg' },
  { label: 'Face Detection',     src: '/screenshots/detection.jpg' },
  { label: 'Face Registration',  src: '/screenshots/registration.jpg' },
  { label: 'Attendance Records', src: '/screenshots/records.jpg' },
],
```

**Catatan:**
- Path selalu mulai dengan `/` dan relatif dari folder `public`
- Jika `src` dibiarkan kosong (`''`), akan tampil placeholder
- Format yang didukung: `.jpg`, `.jpeg`, `.png`, `.webp`
- Ukuran disarankan: **1280x720** atau **1920x1080**

---

## 3. Mengupdate Informasi Profil & Bio

**File:** `src/data/portfolio.ts` — bagian `profile`

```ts
export const profile = {
  name: 'Afllah Abdi Pratomo',           // Nama lengkap
  title: 'Data Science Student & Software Developer',  // Judul di bawah nama
  tagline: 'Membangun solusi berbasis data dan teknologi modern',  // Tagline hero
  summary: 'Mahasiswa Teknik Informatika...',  // Paragraf ringkasan di About
  location: 'Malang, Jawa Timur, Indonesia',    // Lokasi
  email: 'afllaabdi1@gmail.com',              // Email
  github: 'https://github.com/afllaabdi',      // Link GitHub
  linkedin: 'https://www.linkedin.com/in/...', // Link LinkedIn
  instagram: 'https://www.instagram.com/...', // Link Instagram
  avatarUrl: '/portofolio/profile.jpg',       // Path foto profil
  avatarFallback: 'AAP',                       // Singkatan jika foto gagal load
  interests: [                                 // Tags fokus minat
    'Data Science',
    'Machine Learning',
    'Computer Vision',
    'Software Development',
  ],
}
```

---

## 4. Mengupdate About Section (Highlight Cards)

**File:** `src/components/About.tsx` — bagian `highlights`

Terdapat 4 kartu highlight yang bisa diedit:

```tsx
const highlights = [
  {
    icon: BrainCircuit,
    title: 'Data Science & AI',
    desc: 'Membangun model machine learning...',
  },
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Mengembangkan aplikasi web dan mobile...',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    desc: 'Berpengalaman dengan OpenCV dan face recognition...',
  },
  {
    icon: Layers,
    title: 'Technology Enthusiast',
    desc: 'Selalu mempelajari teknologi baru...',
  },
]
```

**Icon yang tersedia** (dari `lucide-react`):
- `BrainCircuit` — untuk AI / Data Science
- `Code2` — untuk Software Development
- `Eye` — untuk Computer Vision
- `Layers` — untuk umum / teknologi
- `Database`, `Server`, `Globe`, `Zap`, dll — lihat di [lucide-react](https://lucide.dev)

---

## 5. Mengupdate Skills / Tech Stack

**File:** `src/data/portfolio.ts` — bagian `skills`

Format satu skill:

```ts
{
  name: 'Python',          // Nama yang ditampilkan
  category: 'language' as const,  // Kategori: language | framework | tool | soft
  color: '#3776AB',        // Warna background badge (hex color)
  textColor: '#FFFFFF',    // Warna teks di badge
  label: 'PY',             // Singkatan 2-4 karakter di dalam badge
}
```

**Kategori yang tersedia:**
- `language` — Bahasa pemrograman
- `framework` — Framework / library
- `tool` — Tools / software
- `soft` — Soft skill / spesialisasi

**Untuk menambahkan skill baru**, tambahkan objek baru di dalam array `skills`.

---

## 6. Mengupdate Projects

**File:** `src/data/portfolio.ts` — bagian `projects`

Format satu project:

```ts
{
  id: 1,
  title: 'Face Recognition Attendance System',   // Judul proyek
  description: 'Sistem absensi otomatis...',      // Deskripsi pendek
  technologies: ['Python', 'OpenCV', 'dlib'],     // Tech stack tags
  highlights: [                                   // Poin-poin fitur utama
    'Real-time face detection...',
    'Pencatatan kehadiran otomatis...',
  ],
  icon: 'scan-face',         // Icon name (scan-face | smartphone | dumbbell)
  gradient: 'from-orange-600 to-amber-600',  // Warna gradient header
  status: 'completed' as const,   // Status: completed | ongoing | planned
  github: 'https://github.com/...',   // Link repository GitHub
  link: 'https://...',          // Link demo/live site
  gallery: [                    // Gallery screenshot (optional)
    { label: 'Main Dashboard', src: '/screenshots/dashboard.jpg' },
  ],
}
```

**Icon yang tersedia untuk project:**
- `scan-face` — untuk project Face Recognition / AI
- `smartphone` — untuk project Mobile
- `dumbbell` — untuk project Gym / Olahraga

**Gradient yang tersedia:**
- `from-orange-600 to-amber-600`
- `from-orange-500 to-amber-500`
- `from-orange-400 to-yellow-500`
- `from-amber-500 to-yellow-400`
- `from-rose-500 to-orange-400`
- `from-violet-600 to-purple-500`

**Status project:**
- `completed` — hijau (Selesai)
- `ongoing` — biru (Sedang berjalan)
- `planned` — abu-abu (Direncanakan)

---

## 7. Mengupdate Education

**File:** `src/data/portfolio.ts` — bagian `education`

```ts
export const education = {
  institution: 'Universitas Muhammadiyah Malang',  // Nama institusi
  degree: 'S1 Teknik Informatika',                 // Jenjang & jurusan
  period: '2023 — Sekarang',                       // Periode studi
  gpa: 'IPK tersedia atas permintaan',             // IPK (atau sembunyikan)
  description: 'Saat ini menempuh pendidikan...',    // Deskripsi pendidikan
  courses: [                                        // Mata kuliah relevan
    'Struktur Data & Algoritma',
    'Basis Data',
    'Machine Learning',
  ],
  achievements: [                                   // Prestasi & aktivitas
    'Mahasiswa aktif di bidang Data Science dan AI',
    'Berpengalaman dalam berbagai proyek...',
  ],
}
```

---

## 8. Mengupdate Bahasa / Language

**File:** `src/data/portfolio.ts` — bagian `languages`

Format:

```ts
export const languages = [
  { name: 'English', level: 'Able to read technical documentation', flag: '🇬🇧' },
  { name: 'Indonesia', level: 'Native', flag: '🇮🇩' },
]
```

- `name` — Nama bahasa
- `level` — Tingkat kemampuan
- `flag` — Emoji flag (opsional, bisa dihapus)

---

## 9. Mengupdate SEO Metadata

**File:** `src/app/layout.tsx`

Yang bisa diedit:

```tsx
export const metadata: Metadata = {
  title: 'Afllah Abdi Pratomo | Data Science Student & Software Developer',
  description: 'Portfolio of Afllah Abdi Pratomo — Data Science Student...',
  keywords: [
    'Afllah Abdi Pratomo',
    'Data Science',
    'Machine Learning',
    'Computer Vision',
    // ... tambahkan keyword baru di sini
  ],
  authors: [{ name: 'Afllah Abdi Pratomo' }],
  openGraph: {
    title: 'Afllah Abdi Pratomo | Data Science Student & Software Developer',
    description: 'Mahasiswa Teknik Informatika UMM yang berfokus pada...',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afllah Abdi Pratomo | Data Science Student & Software Developer',
    description: 'Mahasiswa Teknik Informatika UMM...',
  },
}
```

**Tips SEO:**
- `title` sebaiknya tidak lebih dari 60 karakter
- `description` sebaiknya 120-160 karakter
- `keywords` pisahkan dengan koma, urut dari yang paling penting

---

## 10. Mengupdate Footer

**File:** `src/components/Footer.tsx`

Bagian yang bisa diedit:

- **Subtitle** (baris 21): `Data Science Student | AI Enthusiast | Software Developer`
- **Social links** (di `profile` object): GitHub, LinkedIn, Instagram, WhatsApp
- **Footer credit** (baris 99): teks "Made with Next.js, Tailwind CSS & Framer Motion"

---

## 11. Mengupdate Contact Section

**File:** `src/components/Contact.tsx`

Bagian yang bisa diedit:
- Alamat email
- Link WhatsApp (nomor telepon)
- Teks pesan / CTA

---

## Checklist Sebelum Deploy

- [ ] Foto profil sudah diganti dan ukuran sesuai
- [ ] Semua link (GitHub, LinkedIn, Instagram, WhatsApp) sudah benar
- [ ] Deskripsi About dan Education sudah sesuai
- [ ] Gallery project sudah terisi screenshot (atau placeholder)
- [ ] SEO metadata (title, description) sudah sesuai
- [ ] Tidak ada teks placeholder / TODO yang belum dihandle
- [ ] Tidak ada typo atau karakter asing
- [ ] Semua project card tombol Source mengarah ke repo yang benar

---

## Cara Menjalankan Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build untuk production
npm run build

# Preview build production
npm run preview
```

Website bisa diakses di `http://localhost:3000` saat development server berjalan.