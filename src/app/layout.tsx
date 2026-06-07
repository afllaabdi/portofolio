import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Afllah Abdi Pratomo | Data Science Student & Software Developer',
  description:
    'Portfolio of Afllah Abdi Pratomo — Data Science Student & Software Developer at UMM. Focused on Data Science, Machine Learning, Computer Vision, and Software Development.',
  keywords: [
    'Afllah Abdi Pratomo',
    'Data Science',
    'Machine Learning',
    'Computer Vision',
    'Software Developer',
    'Software Engineer',
    'Portfolio',
    'UMM',
    'Universitas Muhammadiyah Malang',
  ],
  authors: [{ name: 'Afllah Abdi Pratomo' }],
  creator: 'Afllah Abdi Pratomo',
  openGraph: {
    title: 'Afllah Abdi Pratomo | Data Science Student & Software Developer',
    description:
      'Mahasiswa Teknik Informatika UMM yang berfokus pada Data Science, Machine Learning, Computer Vision, dan Software Development.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afllah Abdi Pratomo | Data Science Student & Software Developer',
    description:
      'Mahasiswa Teknik Informatika UMM yang berfokus pada Data Science, Machine Learning, Computer Vision, dan Software Development.',
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