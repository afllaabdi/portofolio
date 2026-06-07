# Afllah Abdi Pratomo — Portfolio Website

Portfolio profesional untuk Data Scientist & Software Engineer, dibangun dengan **Next.js 15**, **TypeScript**, **Tailwind CSS**, dan **Framer Motion**.

![Portfolio Preview](https://via.placeholder.com/1200x630/0d1117/7c3aed?text=Afllah+Portfolio)

## Fitur

- **Dark Mode Modern** — Desain profesional dengan tema gelap yang nyaman di mata
- **Responsive** — Tampil sempurna di mobile, tablet, dan desktop
- **Animasi Halus** — Framer Motion untuk transisi dan micro-interactions
- **Hero Section** — Introduction menarik dengan avatar dan CTA
- **About Me** — Bio lengkap dengan minat, bahasa, dan highlight
- **Skills** — Progress bar interaktif dengan filter kategori
- **Projects Showcase** — Card modern untuk setiap proyek
- **Education Timeline** — Visual timeline pendidikan
- **Contact Form** — Form interaktif dengan status pengiriman
- **SEO Friendly** — Meta tags, OpenGraph, dan structured markup
- **Clean Architecture** — Komponen terpisah dengan rapi

## Tech Stack

| Teknologi     | Kegunaan                    |
|---------------|-----------------------------|
| Next.js 15    | React Framework             |
| TypeScript    | Type Safety                 |
| Tailwind CSS  | Styling                     |
| Framer Motion | Animasi                     |
| Lucide React  | Icons                       |

## Cara Menjalankan

### Prasyarat
- Node.js 18.17 atau lebih baru
- npm atau yarn atau pnpm

### Instalasi

```bash
# Clone / extract project
cd portfolio

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka http://localhost:3000
```

### Build untuk Production

```bash
npm run build
npm run start
```

## Struktur Folder

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout & metadata SEO
│   └── page.tsx         # Main page
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About me section
│   ├── Skills.tsx       # Skills with progress bars
│   ├── Projects.tsx     # Project showcase cards
│   ├── Education.tsx    # Education timeline
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx       # Footer
├── data/
│   └── portfolio.ts     # Data terpusat (profile, skills, projects)
└── lib/
    ├── types.ts         # TypeScript interfaces
    └── utils.ts         # Helper utilities (cn, etc.)
```

## Deployment ke Vercel

### Opsi 1: Via Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

### Opsi 2: Via GitHub + Vercel Dashboard
1. Push project ke GitHub repository
2. Buka [vercel.com](https://vercel.com)
3. Klik "Import Project"
4. Pilih repository GitHub
5. Klik "Deploy" — Vercel otomatis detect Next.js

### Opsi 3: Via Drag & Drop
1. Jalankan `npm run build`
2. Buka [vercel.com/new](https://vercel.com/new)
3. Drag folder `.next` ke dashboard

## Kustomisasi

### Mengubah Data Profile
Edit file `src/data/portfolio.ts`:

```typescript
export const profile = {
  name: 'Nama Anda',
  email: 'email@domain.com',
  github: 'https://github.com/afllaabdi',
  linkedin: 'https://www.linkedin.com/in/afllah-abdi-pratomo-42298a288/',
  // ...
}
```

### Menambah Projects
Tambahkan object baru ke array `projects` di `src/data/portfolio.ts`.

### Mengubah Avatar
Ganti `avatarUrl` di `profile` dengan URL gambar Anda. Gunakan layanan seperti:
- [DiceBear](https://dicebear.com) — Avatar generatif
- [Unsplash](https://unsplash.com) — Foto profesional
- [UI Avatars](https://ui-avatars.com) — Avatar dari inisial

## Rekomendasi Fitur Tambahan (Level Profesional)

### 1. Analytics & Tracking
```bash
npm install @vercel/analytics
```
Tambahkan di `layout.tsx` untuk tracking visitor.

### 2. Blog Section
Tambahkan `/blog` route dengan MDX untuk menulis artikel teknis yang meningkatkan SEO dan menarik recruiter.

### 3. Testimonial Carousel
Tambahkan section testimonial dari mentor, teman tim, atau klien untuk membangun trust.

### 4. PDF Resume Download
Generate PDF resume profesional yang bisa di-download recruiter.

### 5. Dark/Light Mode Toggle
Tambahkan toggle untuk kenyamanan user.

### 6. Open Source Stats
Integrasikan GitHub Stats card dari [github-readme-stats](https://github.com/anuraghazra/github-readme-stats).

### 7. Contact Form dengan Email Service
Integrasikan dengan:
- [EmailJS](https://emailjs.com) — Form ke email langsung
- [Formspree](https://formspree.io) — Form backend gratis
- [Resend](https://resend.com) — Email API modern

### 8. Lazy Loading Images
Gunakan Next.js `Image` dengan `blur` placeholder untuk performa optimal.

### 9. Structured Data (JSON-LD)
Tambahkan JSON-LD schema untuk Rich Snippets di Google.

### 10. Sitemap & robots.txt
Tambahkan untuk SEO optimal.

## Tips untuk Recruiter

1. **Update secara rutin** — Tambahkan proyek dan pencapaian terbaru
2. **Custom domain** — Gunakan domain kustom (vercel.com menyediakan subdomain gratis)
3. **Update LinkedIn** — Link portfolio ke LinkedIn profile
4. **Gist/GitHub pinned repos** — Pin repository terbaik di GitHub
5. **Cover letter template** — Sediakan template yang bisa di-customize

## Lisensi

MIT License — Bebas digunakan untuk pembelajaran dan pengembangan.
