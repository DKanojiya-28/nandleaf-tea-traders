import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

import logo from "../../assets/images/logo.jpg"

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#5c875d] to-[#8a7546] text-white pt-12 pb-6">

      <div className="container-custom">

        {/* Top Grid */}
        <div className="grid lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            {/* Logo */}
            <div className="flex items-center gap-4 mb-6">

              <img
  src={logo}
  alt="Nandleaf Tea Traders"
  className="w-[90px] h-[90px] object-contain"
/>

              <div>

                <h2 className="text-[22px] font-bold leading-none">
                  NANDLEAF
                </h2>

                <p className="text-[13px] mt-1 text-white/90">
                  TEA TRADERS
                </p>

              </div>

            </div>

            {/* Description */}
            <p className="text-[15px] leading-[1.8] text-white/95 max-w-[320px] mb-6">
              Your trusted partner for premium quality tea in Maharashtra.
              Fresh supply for hotels, cafés, retailers, and homes.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 transition-all duration-300 flex items-center justify-center text-[15px] font-semibold"
              >
                IG
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 transition-all duration-300 flex items-center justify-center text-[15px] font-semibold"
              >
                IN
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917588509084"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 transition-all duration-300 flex items-center justify-center text-[15px] font-semibold"
              >
                WA
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-[18px] font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">

              <a
                href="#home"
                className="block text-[15px] hover:text-white/80 transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="block text-[15px] hover:text-white/80 transition"
              >
                About Us
              </a>

              <a
                href="#products"
                className="block text-[15px] hover:text-white/80 transition"
              >
                Products
              </a>

              <a
                href="#wholesale"
                className="block text-[15px] hover:text-white/80 transition"
              >
                Wholesale
              </a>

              <a
                href="#why-choose"
                className="block text-[15px] hover:text-white/80 transition"
              >
                Why Choose Us
              </a>

              <a
                href="#contact"
                className="block text-[15px] hover:text-white/80 transition"
              >
                Contact Us
              </a>

            </div>

          </div>

          {/* Products */}
          <div>

            <h3 className="text-[18px] font-bold mb-6">
              Our Products
            </h3>

            <div className="space-y-4 text-[15px] text-white/95">

              <a
                href="#products"
                className="block hover:text-white/80 transition"
              >
                Wholesale Tea Supply
              </a>

              <a
                href="#products"
                className="block hover:text-white/80 transition"
              >
                Retail Tea Packs
              </a>

              <a
                href="#products"
                className="block hover:text-white/80 transition"
              >
                Loose Tea & Bulk Supply
              </a>

              <a
                href="#products"
                className="block hover:text-white/80 transition"
              >
                Premium Quality Tea
              </a>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-[18px] font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5">

              {/* Address */}
              <div className="flex gap-3">

                <MapPin
                  size={20}
                  className="mt-1 shrink-0"
                />

                <p className="text-[15px] leading-[1.6] text-white/95">
                  Shindkheda, District Dhule
                  <br />
                  Maharashtra, India
                </p>

              </div>

              {/* Phone */}
              <div className="flex gap-3 items-center">

                <Phone size={20} />

                <a
                  href="tel:+917588509084"
                  className="text-[15px] text-white/95 hover:underline"
                >
                  +91 XXXXX XXXXX
                </a>

              </div>

              {/* Email */}
              <div className="flex gap-3 items-center">

                <Mail size={20} />

                <a
                  href="mailto:nandleaf.tea@gmail.com"
                  className="text-[15px] text-white/95 hover:underline break-all"
                >
                  nandleaf.tea@gmail.com
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-5">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-3">

            <p className="text-[14px] text-white/95 text-center">
              © 2026 Nandleaf Tea Traders. All rights reserved.
            </p>

            <p className="text-[14px] text-white/95 text-center">
              Proprietor: Harsh Rajendra Gupta
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer