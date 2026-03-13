"use client"

import { Shield, Wallet, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Shield,
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#5046E5]",
    title: "Aman & Terjaga",
    description:
      "Lingkungan kost khusus putri dengan akses terkontrol, CCTV 24 jam di area umum, dan lingkungan sekitar yang ramah.",
  },
  {
    icon: Wallet,
    iconBg: "bg-[#ECFDF5]",
    iconColor: "text-[#34C77B]",
    title: "Harga Terjangkau",
    description:
      "Fasilitas lengkap dengan harga yang sangat kompetitif di area Latsari Tuban. Bebas biaya tambahan tersembunyi.",
  },
  {
    icon: Zap,
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#5046E5]",
    title: "Respon Cepat",
    description:
      "Pengelola siap sedia membantu jika ada kendala fasilitas. Perbaikan dan maintenance dilakukan dengan cepat.",
  },
]

export function Features() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section 
      id="keunggulan"
      className="py-16 md:py-24 bg-[#F5F7FA]"
    >
      <div 
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Kenapa Memilih ADA Kost?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kami mengutamakan kenyamanan, keamanan, dan kebersihan untuk mendukung
            aktivitas harian Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5`}
              >
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
