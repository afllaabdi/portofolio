import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Afllah Abdi Pratomo — Data Scientist & Software Engineer',
  description:
    'Portfolio of Afllah Abdi Pratomo — S1 Teknik Informatika UMM. Spesialis Data Science, Machine Learning, AI, dan Software Development. Mengembangkan solusi berbasis data dan teknologi modern.',
  keywords: [
    'Afllah Abdi Pratomo',
    'Data Scientist',
    'Machine Learning',
    'Data Analytics',
    'Software Engineer',
    'Computer Vision',
    'Portfolio',
    'UMM',
    'Universitas Muhammadiyah Malang',
  ],
  authors: [{ name: 'Afllah Abdi Pratomo' }],
  creator: 'Afllah Abdi Pratomo',
  openGraph: {
    title: 'Afllah Abdi Pratomo — Data Scientist & Software Engineer',
    description:
      'Mahasiswa S1 Teknik Informatika UMM dengan minat di Data Science, ML, AI, dan Software Development.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afllah Abdi Pratomo — Data Scientist & Software Engineer',
    description:
      'Mahasiswa S1 Teknik Informatika UMM dengan minat di Data Science, ML, AI, dan Software Development.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}