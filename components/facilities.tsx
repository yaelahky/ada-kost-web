"use client"

import { Shield, Zap, Wifi, Wind, Bath, Car, Sun, UtensilsCrossed, Sofa, Home } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const roomFacilities = [
  {
    icon: Zap,
    title: "Listrik Gratis",
    description: "Termasuk dalam harga sewa",
  },
  {
    icon: Wifi,
    title: "WiFi 100 Mbps",
    description: "Koneksi cepat & stabil",
  },
  {
    icon: Wind,
    title: "AC / Kipas Angin",
    description: "Pilihan sesuai tipe kamar",
  },
  {
    icon: Bath,
    title: "Kamar Mandi Dalam",
    description: "Privasi lebih terjamin",
  },
]

const commonFacilities = [
  {
    icon: Car,
    title: "Parkir Motor Luas",
    description: "Aman dengan kanopi",
  },
  {
    icon: Sun,
    title: "Area Jemur",
    description: "Luas dan mendapat sinar matahari",
  },
  {
    icon: UtensilsCrossed,
    title: "Dapur Bersama",
    description: "Lengkap dengan kulkas & kompor",
  },
  {
    icon: Sofa,
    title: "Ruang Santai",
    description: "Area komunal yang nyaman",
  },
]

export function Facilities() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section 
      id="fasilitas" 
      className="py-20 bg-[#F5F7FA]"
    >
      <div 
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Title and Security Card */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-semibold text-[#5046E5] uppercase tracking-wider">
                Fasilitas Lengkap
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 leading-tight">
                Kenyamanan seperti di rumah sendiri
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Kami menyediakan berbagai fasilitas unggulan untuk memastikan masa tinggal Anda nyaman, aman, dan produktif.
              </p>
            </div>

            {/* Security Card */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#5046E5]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Keamanan 24 Jam</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    Dilengkapi CCTV di area publik dan kunci akses elektronik.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Room Facilities */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border">
            <div className="flex items-center gap-2 mb-6">
              <Home className="w-5 h-5 text-[#5046E5]" />
              <h3 className="font-semibold text-foreground text-lg">Fasilitas Kamar</h3>
            </div>
            <div className="space-y-6">
              {roomFacilities.map((facility, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center flex-shrink-0">
                    <facility.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{facility.title}</h4>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Common Facilities */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 rounded-full bg-[#34C77B] flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
              <h3 className="font-semibold text-foreground text-lg">Fasilitas Umum</h3>
            </div>
            <div className="space-y-6">
              {commonFacilities.map((facility, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center flex-shrink-0">
                    <facility.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{facility.title}</h4>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
