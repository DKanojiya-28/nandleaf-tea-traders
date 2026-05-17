import { ShoppingCart, Phone } from "lucide-react"
import heroTea from "../../assets/images/hero-tea.jpg"

function Hero() {
  return (
    <section
      id="home"
      className="bg-[#f8f5ef] min-h-screen flex items-center"
    >
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center py-10">

        {/* LEFT */}
        <div className="max-w-[560px]">

          {/* Badge */}
          <div className="inline-flex items-center bg-[#e7efe8] text-[#4a7c59] px-5 py-2 rounded-full text-sm mb-8">
            Premium Tea Wholesale & Retail
          </div>

          {/* Heading */}
          <h1 className="text-[60px] leading-[0.95] font-bold text-[#2d2016] mb-8">
            Har Cup Me NandLeaf
            <br />
           Ka Bharosa
          </h1>

          {/* Subtitle */}
          <h2 className="text-[28px] font-medium text-[#9a7743] mb-7">
            Har Cup Mein Nandleaf Ka Bharosa
          </h2>

          {/* Description */}
          <p className="text-[18px] leading-[1.8] text-gray-700 mb-10">
            Your trusted partner for premium quality tea.
            Fresh supply for hotels, cafés, retailers,
            and homes across Maharashtra.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-3 gap-5 mb-10">

            <div className="bg-white rounded-[28px] shadow-sm p-6 text-center">

              <h3 className="text-[44px] font-bold text-[#4a7c59] leading-none mb-2">
                100%
              </h3>

              <p className="text-[15px] text-gray-700">
                Premium Quality
              </p>

            </div>

            <div className="bg-white rounded-[28px] shadow-sm p-6 text-center">

              <h3 className="text-[44px] font-bold text-[#4a7c59] leading-none mb-2">
                Fresh
              </h3>

              <p className="text-[15px] text-gray-700">
                Daily Supply
              </p>

            </div>

            <div className="bg-white rounded-[30px] shadow-sm p-6 text-center">

              <h3 className="text-[42px] font-bold text-[#4a7c59] leading-none mb-2 text-center">
                Trusted
              </h3>

              <p className="text-[15px] text-gray-700">
                Wholesale Partner
              </p>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-5 flex-wrap">

            {/* View Products */}
            <a
              href="#products"
              className="bg-[#4a7c59] hover:bg-[#3d694a] transition-all duration-300 text-white px-8 h-[58px] rounded-[18px] text-[17px] font-semibold inline-flex items-center justify-center gap-3"
            >

              <ShoppingCart size={20} />

              View Products

            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="border-2 border-[#4a7c59] text-[#4a7c59] hover:bg-[#4a7c59] hover:text-white transition-all duration-300 px-8 h-[58px] rounded-[18px] text-[17px] font-semibold inline-flex items-center justify-center gap-3"
            >

              <Phone size={20} />

              Contact Us

            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-end">

          <img
            src={heroTea}
            alt="Tea Plantation"
            className="w-full max-w-[760px] h-[520px] object-cover rounded-[28px] shadow-sm"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-6 left-[-20px] bg-white rounded-[28px] shadow-sm px-7 py-6 w-[260px]">

            <p className="text-[15px] text-gray-600 mb-2">
              Serving Quality Since
            </p>

            <h3 className="text-[46px] font-bold text-[#4a7c59] leading-none mb-3">
              Years
            </h3>

            <p className="text-[15px] text-gray-700 leading-relaxed">
              Trusted by Hotels, Cafés & Retailers
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero