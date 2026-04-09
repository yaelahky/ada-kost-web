"use client"

import Image from "next/image"
import { Bed, Wind, Zap, DoorOpen, Snowflake, Bath } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const rooms = [
  {
    name: "Regular Room",
    size: "Ukuran 3×3 Meter",
    price: "Rp500.000",
    badge: "Sisa 2 Kamar",
    badgeStyle: "bg-white text-[#34C77B] border border-[#34C77B]",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
    facilities: [
      { icon: Bed, label: "Kasur & Bantal" },
      { icon: DoorOpen, label: "Lemari Pakaian" },
      { icon: Wind, label: "Kipas Angin" },
      { icon: Zap, label: "Listrik (Token Sendiri)" },
    ],
  },
  {
    name: "Large Room",
    size: "Ukuran 4×4 Meter + AC",
    price: "Rp900.000",
    badge: "Populer",
    badgeStyle: "bg-[#5046E5] text-white",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
    facilities: [
      { icon: Bed, label: "Kasur Springbed Premium" },
      { icon: Snowflake, label: "AC (Air Conditioner)" },
      { icon: DoorOpen, label: "Lemari Besar & Meja Belajar" },
      { icon: Bath, label: "Kamar Mandi Dalam" },
    ],
  },
]

export function RoomTypes() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section 
      id="tipe-kamar"
      className="py-16 md:py-24 bg-white"
    >
      <div 
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Pilihan Kamar
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Pilih tipe kamar yang sesuai dengan kebutuhan dan budget Anda. Semua
            kamar didesain untuk kenyamanan maksimal.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${room.badgeStyle}`}
                  >
                    {room.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header with Price */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {room.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{room.size}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-[#5046E5]">
                      {room.price}
                    </span>
                    <span className="text-muted-foreground text-sm block">
                      / bulan
                    </span>
                  </div>
                </div>

                {/* Facilities */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                    Fasilitas Kamar
                  </p>
                  <ul className="space-y-2">
                    {room.facilities.map((facility, facilityIndex) => (
                      <li
                        key={facilityIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <facility.icon className="w-4 h-4 text-[#5046E5]" />
                        {facility.label}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/6282231509025?text=Halo%20kak%20saya%20mau%20tanya%20kost%2C%20dapat%20kontaknya%20dari%20Web",
                      "_blank",
                    )
                  }
                  className="w-full flex items-center justify-center gap-2 bg-[#34C77B] hover:bg-[#2DB36E] text-white font-semibold py-3.5 px-6 rounded-xl transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
