import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adakost.my.id'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Kost Putri Tuban | ADA Kost Latsari',
  description:
    'Kost putri Tuban nyaman, aman, dan strategis di Latsari. Harga sewa bulanan terjangkau dengan fasilitas lengkap untuk mahasiswi dan karyawati.',
  keywords: [
    'kost putri tuban',
    'kos putri tuban',
    'kost putri latsari tuban',
    'sewa kost putri tuban',
    'kost putri dekat unirow',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kost Putri Tuban | ADA Kost Latsari',
    description:
      'Kost putri Tuban nyaman, aman, dan strategis di Latsari. Cek kamar tersedia dan survei lokasi sekarang.',
    url: '/',
    siteName: 'ADA Kost Latsari',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kost Putri Tuban | ADA Kost Latsari',
    description:
      'Kost putri Tuban nyaman, aman, dan strategis di Latsari dengan fasilitas lengkap.',
  },
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
