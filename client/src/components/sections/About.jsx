import {
  Award,
  Leaf,
  Heart,
  TrendingUp,
} from "lucide-react"

import teaCup from "../../assets/images/about-tea.jpg"

function About() {

  return (

    <section
      id="about"
      className="bg-[#fdfaf5] py-[55px]"
    >

      <div className="max-w-[1700px] mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-[45px]">

          <h2 className="text-[42px] font-bold text-[#2d2016] mb-3">
            About Nandleaf Tea Traders
          </h2>

          <p className="text-[18px] text-[#9a7440]">
            Your trusted source for premium quality tea in Maharashtra
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-[40px] items-start">

          {/* Left Side */}
          <div>

            <h3 className="text-[32px] font-bold text-[#2d2016] mb-6">
              Our Story
            </h3>

            <div className="space-y-5">

              <p className="text-[17px] leading-[1.9] text-[#4b4b4b]">
                Nandleaf Tea Traders has been serving the finest quality tea
                to businesses and homes across Maharashtra. Based in Shindkheda,
                District Dhule, we have built our reputation on trust,
                quality, and consistent taste.
              </p>

              <p className="text-[17px] leading-[1.9] text-[#4b4b4b]">
                Our journey began with a simple vision:
                to bring premium quality tea to every cup.
                Today, we proudly serve hotels, restaurants,
                cafés, retail shops, and direct customers.
              </p>

              <p className="text-[17px] leading-[1.9] text-[#4b4b4b]">
                Under the leadership of Proprietor Harsh Rajendra Gupta,
                we continue delivering excellence with every order.
              </p>

            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              {/* Card */}
              <div className="bg-[#f7f7f5] rounded-[16px] p-6 border border-[#ece7df]">

                <Award
                  size={30}
                  className="text-[#4a7c59] mb-4"
                />

                <h4 className="text-[20px] font-bold text-[#2d2016] mb-2">
                  Quality Assured
                </h4>

                <p className="text-[15px] text-[#666]">
                  Every batch tested
                </p>

              </div>

              {/* Card */}
              <div className="bg-[#f7f7f5] rounded-[16px] p-6 border border-[#ece7df]">

                <Leaf
                  size={30}
                  className="text-[#4a7c59] mb-4"
                />

                <h4 className="text-[20px] font-bold text-[#2d2016] mb-2">
                  Fresh Selection
                </h4>

                <p className="text-[15px] text-[#666]">
                  Carefully sourced
                </p>

              </div>

              {/* Card */}
              <div className="bg-[#f7f7f5] rounded-[16px] p-6 border border-[#ece7df]">

                <Heart
                  size={30}
                  className="text-[#4a7c59] mb-4"
                />

                <h4 className="text-[20px] font-bold text-[#2d2016] mb-2">
                  Customer Trust
                </h4>

                <p className="text-[15px] text-[#666]">
                  Built over years
                </p>

              </div>

              {/* Card */}
              <div className="bg-[#f7f7f5] rounded-[16px] p-6 border border-[#ece7df]">

                <TrendingUp
                  size={30}
                  className="text-[#4a7c59] mb-4"
                />

                <h4 className="text-[20px] font-bold text-[#2d2016] mb-2">
                  Consistent Taste
                </h4>

                <p className="text-[15px] text-[#666]">
                  Every single time
                </p>

              </div>

            </div>

          </div>

          {/* Right Side Image */}
          <div>

            <img
              src={teaCup}
              alt="Tea Cup"
              className="w-full h-[640px] object-cover rounded-[24px] shadow-md"
            />

          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-10 rounded-[24px] bg-gradient-to-r from-[#4a7c59] to-[#8a7546] px-8 py-10">

          <div className="grid md:grid-cols-3 gap-8 text-center text-white">

            <div>

              <h3 className="text-[34px] font-bold mb-3">
                Quality
              </h3>

              <p className="text-[16px] leading-[1.8]">
                Premium tea leaves carefully selected
                for freshness and flavor
              </p>

            </div>

            <div>

              <h3 className="text-[34px] font-bold mb-3">
                Trust
              </h3>

              <p className="text-[16px] leading-[1.8]">
                Long-term relationships built on
                reliability and consistency
              </p>

            </div>

            <div>

              <h3 className="text-[34px] font-bold mb-3">
                Service
              </h3>

              <p className="text-[16px] leading-[1.8]">
                Dedicated to meeting your tea supply
                needs on time
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default About