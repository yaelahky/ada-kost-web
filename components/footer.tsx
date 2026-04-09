"use client"

import { MapPin, Phone, Instagram } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Footer() {
  const { ref, isVisible } = useScrollAnimation()

  const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Tipe Kamar", href: "#tipe-kamar" },
    { label: "Fasilitas", href: "#fasilitas" },
    { label: "Lokasi", href: "#lokasi" },
  ]

  return (
    <footer className="bg-[#1F2937] pt-12 pb-6">
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-5xl mx-auto px-4 md:px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#5046E5] flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-white font-bold text-xl">ADA Kost</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kost putri eksklusif, nyaman, dan aman di area Latsari Tuban. Solusi hunian terbaik untuk mahasiswi dan karyawati.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/adakost.tuban"
                aria-label="Instagram ADA Kost Tuban"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#374151] flex items-center justify-center hover:bg-[#4B5563] transition-colors"
              >
                <Instagram className="w-4 h-4 text-gray-300" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#5046E5] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Jl. Sunan Kudus III No.2A, Latsari, Tuban
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#5046E5] shrink-0" />
                <span className="text-gray-400 text-sm">082231509025</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © 2026 ADA Kost Latsari Tuban. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
