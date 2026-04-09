import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { RoomTypes } from "@/components/room-types"
import { Facilities } from "@/components/facilities"
import { Location } from "@/components/location"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adakost.my.id"

const faqItems = [
  {
    question: "Berapa harga kost putri di ADA Kost Tuban?",
    answer:
      "Harga sewa bulanan mulai dari Rp500.000 untuk kamar reguler dan Rp900.000 untuk kamar besar dengan AC.",
  },
  {
    question: "Apakah ADA Kost menerima mahasiswi dan karyawati?",
    answer:
      "Ya. ADA Kost merupakan kost khusus putri yang menerima mahasiswi dan karyawati dengan lingkungan yang aman dan nyaman.",
  },
  {
    question: "Di mana lokasi kost putri ini di Tuban?",
    answer:
      "Lokasi ADA Kost berada di Jl. Sunan Kudus III No.2A, Latsari, Kec. Tuban, Kabupaten Tuban, Jawa Timur 62314.",
  },
  {
    question: "Bagaimana cara cek ketersediaan kamar kost putri Tuban?",
    answer:
      "Anda bisa langsung hubungi admin melalui WhatsApp untuk menanyakan kamar tersedia, jadwal survei, dan detail fasilitas.",
  },
]

export const metadata: Metadata = {
  title: "Kost Putri Tuban | Harga Bulanan & Fasilitas Lengkap",
  description:
    "Cari kost putri Tuban yang nyaman, aman, dan strategis? ADA Kost Latsari menyediakan sewa bulanan dengan fasilitas lengkap. Cek kamar tersedia sekarang.",
  keywords: [
    "kost putri tuban",
    "kos putri tuban",
    "harga kost putri tuban",
    "kost putri latsari tuban",
    "sewa kost putri tuban",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kost Putri Tuban | Harga Bulanan & Fasilitas Lengkap",
    description:
      "ADA Kost Latsari adalah kost putri Tuban dengan lokasi strategis, fasilitas lengkap, dan harga sewa bulanan terjangkau.",
    url: "/",
    locale: "id_ID",
    type: "website",
  },
}

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "ADA Kost Latsari",
    image: `${siteUrl}/icon.svg`,
    url: siteUrl,
    telephone: "+6282231509025",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Sunan Kudus III No.2A, Latsari, Kec. Tuban",
      addressLocality: "Tuban",
      addressRegion: "Jawa Timur",
      postalCode: "62314",
      addressCountry: "ID",
    },
    areaServed: "Tuban",
    priceRange: "Rp500.000-Rp900.000 per bulan",
    sameAs: [
      "https://www.instagram.com/adakost.tuban",
      "https://maps.app.goo.gl/FEd6EyojYHw7KofLA",
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <RoomTypes />
        <Facilities />
        <Location />
        <CTABanner />
        <section id="faq" className="py-16 md:py-20 bg-[#F5F7FA]">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              FAQ Kost Putri Tuban
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Pertanyaan yang paling sering ditanyakan calon penghuni sebelum sewa
              kost putri di ADA Kost Latsari Tuban.
            </p>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <article
                  key={item.question}
                  className="bg-card border border-border rounded-xl p-5 md:p-6"
                >
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
