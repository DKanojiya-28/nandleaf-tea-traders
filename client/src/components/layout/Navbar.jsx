import { useState } from "react"
import { Menu, X } from "lucide-react"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-[#ece7df]">

      <div className="container-custom">

        <div className="h-[90px] flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-4">

            <div className="w-[52px] h-[52px] rounded-full bg-[#4a7c59] flex items-center justify-center shrink-0">

              <span className="text-white text-[24px] font-bold">
                NT
              </span>

            </div>

            <div>

              <h1 className="text-[22px] font-bold text-[#4a7c59] leading-none">
                NANDLEAF TEA TRADERS
              </h1>

              <p className="text-[13px] text-[#7b7b7b] mt-1">
                Premium Quality Tea
              </p>

            </div>

          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">

            <a
              href="#home"
              className="text-[17px] font-semibold text-[#2d2016] hover:text-[#4a7c59] transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-[17px] font-semibold text-[#2d2016] hover:text-[#4a7c59] transition"
            >
              About Us
            </a>

            <a
              href="#products"
              className="text-[17px] font-semibold text-[#2d2016] hover:text-[#4a7c59] transition"
            >
              Products
            </a>

            <a
              href="#wholesale"
              className="text-[17px] font-semibold text-[#2d2016] hover:text-[#4a7c59] transition"
            >
              Wholesale
            </a>

            <a
              href="#why-choose"
              className="text-[17px] font-semibold text-[#2d2016] hover:text-[#4a7c59] transition"
            >
              Why Choose Us
            </a>

            <a
              href="#contact"
              className="bg-[#4a7c59] hover:bg-[#3d694a] transition-all duration-300 text-white px-8 h-[58px] rounded-[18px] text-[17px] font-semibold inline-flex items-center justify-center"
            >
              Contact Us
            </a>

          </nav>

          {/* Mobile */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (

        <div className="lg:hidden bg-white border-t border-[#ece7df] px-6 py-5 space-y-5">

          <a href="#home" className="block text-[17px] font-medium">
            Home
          </a>

          <a href="#about" className="block text-[17px] font-medium">
            About Us
          </a>

          <a href="#products" className="block text-[17px] font-medium">
            Products
          </a>

          <a href="#wholesale" className="block text-[17px] font-medium">
            Wholesale
          </a>

          <a href="#why-choose" className="block text-[17px] font-medium">
            Why Choose Us
          </a>

          <a
            href="#contact"
            className="bg-[#4a7c59] text-white px-6 py-3 rounded-xl text-[17px] font-semibold inline-flex"
          >
            Contact Us
          </a>

        </div>

      )}

    </header>
  )
}

export default Header