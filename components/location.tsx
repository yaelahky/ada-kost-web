"use client"

import { MapPin, Building2, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Location() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section 
      id="lokasi"
      className="py-16 md:py-24 bg-white"
    >
      <div 
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Lokasi Strategis
              </h2>
              <p className="text-muted-foreground">
                Berada di pusat Latsari Tuban, memudahkan mobilitas Anda ke berbagai tempat penting.
              </p>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#5046E5]" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Alamat Lengkap</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Jl. Sunan Kudus III No.2A, Latsari, Kec. Tuban, Kabupaten Tuban, Jawa Timur 62314
                </p>
              </div>
            </div>

            {/* Nearby Access */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#5046E5]" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Akses Terdekat</h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    5 Menit ke Alun-Alun Tuban
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    10 Menit ke Kampus UNIROW
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    Dekat minimarket & warung makan
                  </li>
                </ul>
              </div>
            </div>

            {/* Google Maps Link */}
            <a
              href="https://maps.app.goo.gl/FEd6EyojYHw7KofLA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#5046E5] font-medium hover:underline"
            >
              Buka di Google Maps
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column - Map */}
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=112.0409%2C-6.8970%2C112.0470%2C-6.8910&layer=mapnik&marker=-6.894047%2C112.043949"
              width="100%"
              height="100%"
              style={{ border: 0, pointerEvents: 'none' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi ADA Kost Latsari"
            />
            {/* Custom Marker Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none">
              <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg text-sm font-medium text-foreground mb-1">
                ADA Kost Latsari
              </div>
              <div className="w-10 h-10 mx-auto bg-[#5046E5] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
