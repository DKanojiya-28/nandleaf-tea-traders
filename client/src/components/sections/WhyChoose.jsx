import {
  Leaf,
  TrendingDown,
  MapPin,
  Shield,
  Clock,
  Users,
} from "lucide-react"

import teaPlantation from "../../assets/images/hero-tea.jpg"

function WhyChooseUs() {

  const reasons = [
    {
      icon: Leaf,
      title: "Fresh Tea Leaves",
      description:
        "Carefully selected tea leaves with rich aroma and authentic taste.",
    },
    {
      icon: TrendingDown,
      title: "Wholesale Pricing",
      description:
        "Affordable bulk pricing designed for business profitability.",
    },
    {
      icon: MapPin,
      title: "Local Trusted Supplier",
      description:
        "Based in Maharashtra with strong local market understanding.",
    },
    {
      icon: Shield,
      title: "Reliable Supply",
      description:
        "Consistent stock availability and timely delivery service.",
    },
    {
      icon: Clock,
      title: "Consistent Taste",
      description:
        "Every batch maintains freshness, flavor, and premium quality.",
    },
    {
      icon: Users,
      title: "Customer Support",
      description:
        "Dedicated assistance for orders, delivery, and business needs.",
    },
  ]

  return (

    <section
      id="why-choose"
      className="bg-[#fdfaf5] py-[70px]"
    >

      <div className="max-w-[1700px] mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-[55px]">

          <h2 className="text-[44px] font-bold text-[#2d2016] mb-3">
            Why Choose Nandleaf Tea Traders?
          </h2>

          <p className="text-[19px] text-[#9a7440]">
            Trusted quality tea supply for businesses across Maharashtra
          </p>

        </div>

        {/* Top Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-12">

          {reasons.map((reason, index) => (

            <div
              key={index}
              className="bg-white border border-[#ece7df] rounded-[24px] p-8 shadow-sm hover:shadow-md transition"
            >

              <div className="w-[72px] h-[72px] rounded-[20px] bg-gradient-to-r from-[#4a7c59] to-[#8a7546] flex items-center justify-center mb-6">

                <reason.icon
                  size={34}
                  className="text-white"
                />

              </div>

              <h3 className="text-[24px] font-bold text-[#2d2016] mb-3">
                {reason.title}
              </h3>

              <p className="text-[17px] leading-[1.9] text-[#666]">
                {reason.description}
              </p>

            </div>

          ))}

        </div>

        {/* Bottom Section */}
        <div className="bg-white border border-[#ece7df] rounded-[32px] overflow-hidden shadow-sm">

          <div className="grid lg:grid-cols-2">

            {/* Left Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">

              <h3 className="text-[40px] font-bold text-[#2d2016] mb-6">
                Our Commitment to Excellence
              </h3>

              <div className="space-y-5">

                <p className="text-[17px] leading-[2] text-[#555]">
                  At Nandleaf Tea Traders, we focus on quality, trust,
                  and long-term business partnerships.
                </p>

                <p className="text-[17px] leading-[2] text-[#555]">
                  We ensure every tea batch maintains freshness,
                  authentic taste, and consistent premium quality.
                </p>

                <p className="text-[17px] leading-[2] text-[#555]">
                  Whether you run a hotel, café, restaurant, or retail
                  business, we provide reliable wholesale tea supply
                  with timely delivery.
                </p>

              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-10">

                <div>

                  <h4 className="text-[38px] font-bold text-[#4a7c59]">
                    100%
                  </h4>

                  <p className="text-[15px] text-[#777]">
                    Quality Assured
                  </p>

                </div>

                <div>

                  <h4 className="text-[38px] font-bold text-[#4a7c59]">
                    Fast
                  </h4>

                  <p className="text-[15px] text-[#777]">
                    Delivery Service
                  </p>

                </div>

                <div>

                  <h4 className="text-[38px] font-bold text-[#4a7c59]">
                    Trusted
                  </h4>

                  <p className="text-[15px] text-[#777]">
                    Business Partner
                  </p>

                </div>

              </div>

            </div>

            {/* Right Image */}
            <div className="h-full min-h-[520px]">

              <img
                src={teaPlantation}
                alt="Tea Plantation"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default WhyChooseUs