import type { Metadata } from "next"
import { headers } from "next/headers"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { RoomTypes } from "@/components/room-types"
import { Facilities } from "@/components/facilities"
import { Location } from "@/components/location"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers()
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000"
  const protocol =
    requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https")

  return {
    title: "Kos Putri Tuban Murah & Nyaman | Sewa Bulanan",
    description:
      "Cari Kos Putri Tuban yang nyaman dan aman? Tersedia sewa kos bulanan dengan fasilitas lengkap di Latsari. Cek kamar yang tersedia sekarang.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: new URL("/", `${protocol}://${host}`).toString(),
    },
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <RoomTypes />
        <Facilities />
        <Location />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
