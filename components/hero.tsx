"use client"

import { MapPin, Shield, Sparkles, Image as ImageIcon, Star } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section 
      id="beranda" 
      className="relative overflow-hidden bg-white"
    >
      <div 
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDEAE8] text-[#E85A4F] rounded-full text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Khusus Putri
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Kost Putri Nyaman{" "}
                <br className="hidden sm:block" />
                di{" "}
                <span className="relative inline-block">
                  <span className="text-primary">Latsari Tuban</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8C20 4 40 2 60 4C80 6 100 10 120 8C140 6 160 2 180 4C190 5 198 7 198 7"
                      stroke="#A78BFA"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Nikmati kenyamanan tinggal seperti di rumah sendiri. Lingkungan aman, bersih, dan strategis dekat dengan pusat kota, kampus, dan area perkantoran.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6282231509025?text=Halo%20kak%20saya%20mau%20tanya%20kost%2C%20dapat%20kontaknya%20dari%20Web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#34C77B] hover:bg-[#2DB36E] text-white font-semibold rounded-full transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chat WhatsApp
              </a>
              <a
                href="#tipe-kamar"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border-2 border-border text-foreground font-semibold rounded-full transition-all hover:bg-secondary hover:border-muted-foreground/30"
              >
                <ImageIcon className="w-5 h-5" />
                Lihat Kamar
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-medium">Aman 24 Jam</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-medium">Bersih</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">Strategis</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image - Left */}
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80"
                    alt="Kamar tidur nyaman dengan tempat tidur empuk"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80"
                    alt="Ruang bersama yang luas dan terang"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Small Images - Right */}
              <div className="space-y-4 pt-8">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                    alt="Dapur bersih dengan peralatan lengkap"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80"
                    alt="Kamar mandi bersih dan modern"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Rating Card */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card rounded-xl shadow-xl p-4 flex items-center gap-3 border border-border">
                <div className="w-12 h-12 rounded-full bg-[#34C77B] flex items-center justify-center">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rating Penghuni</p>
                  <p className="text-xl font-bold text-foreground">4.9/5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
