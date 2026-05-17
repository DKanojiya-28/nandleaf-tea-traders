import {
  Truck,
  IndianRupee,
  Calendar,
  Handshake,
  Building2,
  UtensilsCrossed,
  Coffee,
  Store,
} from "lucide-react"

function Wholesale() {

  const services = [
    {
      icon: Building2,
      title: "Hotels & Resorts",
      description: "Premium tea supply for hospitality businesses",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurants",
      description: "Quality tea for dining establishments",
    },
    {
      icon: Coffee,
      title: "Cafés & Coffee Shops",
      description: "Specialty tea for your beverage menu",
    },
    {
      icon: Store,
      title: "Retail Shops",
      description: "Wholesale supply for resale",
    },
  ]

  const benefits = [
    {
      icon: IndianRupee,
      title: "Competitive Wholesale Pricing",
      description:
        "Best rates for bulk orders with flexible payment terms",
    },
    {
      icon: Calendar,
      title: "Regular Supply Schedule",
      description:
        "Timely delivery to ensure you never run out of stock",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnerships",
      description:
        "Build a lasting business relationship with dedicated support",
    },
    {
      icon: Truck,
      title: "Reliable Supply Chain",
      description:
        "Consistent quality and on-time delivery across Maharashtra",
    },
  ]

  return (

    <section
      id="wholesale"
      className="bg-[#fdfaf5] py-[70px]"
    >

      <div className="max-w-[1700px] mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-[55px]">

          <h2 className="text-[44px] font-bold text-[#2d2016] mb-3">
            Wholesale Services
          </h2>

          <p className="text-[19px] text-[#9a7440]">
            Your trusted wholesale partner for premium quality tea supply
          </p>

        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-[#faf8f4] border border-[#ece7df] rounded-[24px] px-7 py-10 text-center shadow-sm hover:shadow-md transition"
            >

              <div className="w-[82px] h-[82px] rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-7">

                <service.icon
                  size={38}
                  className="text-[#4a7c59]"
                />

              </div>

              <h3 className="text-[24px] font-bold text-[#2d2016] mb-3">
                {service.title}
              </h3>

              <p className="text-[17px] leading-[1.8] text-[#6b6b6b]">
                {service.description}
              </p>

            </div>

          ))}

        </div>

        {/* Middle Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          {/* Left */}
          <div className="bg-gradient-to-r from-[#4a7c59] to-[#8a7546] rounded-[30px] p-10 text-white">

            <h3 className="text-[34px] font-bold mb-8">
              Why Partner With Us?
            </h3>

            <div className="space-y-7">

              {benefits.map((benefit, index) => (

                <div
                  key={index}
                  className="flex gap-5"
                >

                  <div className="w-[54px] h-[54px] rounded-[16px] bg-white/20 flex items-center justify-center shrink-0">

                    <benefit.icon size={28} />

                  </div>

                  <div>

                    <h4 className="text-[21px] font-semibold mb-1">
                      {benefit.title}
                    </h4>

                    <p className="text-[16px] text-white/90 leading-[1.8]">
                      {benefit.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}
          <div className="bg-[#faf8f4] border border-[#ece7df] rounded-[30px] p-10">

            <h3 className="text-[34px] font-bold text-[#2d2016] mb-8">
              Business Benefits
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="w-[10px] h-[10px] rounded-full bg-[#4a7c59] mt-3"></div>

                <p className="text-[17px] leading-[1.9] text-[#555]">
                  Fresh & carefully selected tea leaves ensuring premium quality
                </p>

              </div>

              <div className="flex gap-4">

                <div className="w-[10px] h-[10px] rounded-full bg-[#4a7c59] mt-3"></div>

                <p className="text-[17px] leading-[1.9] text-[#555]">
                  Competitive wholesale pricing that improves your profit margins
                </p>

              </div>

              <div className="flex gap-4">

                <div className="w-[10px] h-[10px] rounded-full bg-[#4a7c59] mt-3"></div>

                <p className="text-[17px] leading-[1.9] text-[#555]">
                  Trusted local tea trader with understanding of regional preferences
                </p>

              </div>

              <div className="flex gap-4">

                <div className="w-[10px] h-[10px] rounded-full bg-[#4a7c59] mt-3"></div>

                <p className="text-[17px] leading-[1.9] text-[#555]">
                  Reliable supply chain ensuring consistent availability
                </p>

              </div>

              <div className="flex gap-4">

                <div className="w-[10px] h-[10px] rounded-full bg-[#4a7c59] mt-3"></div>

                <p className="text-[17px] leading-[1.9] text-[#555]">
                  Dedicated customer support for all tea supply needs
                </p>

              </div>

              <div className="flex gap-4">

                <div className="w-[10px] h-[10px] rounded-full bg-[#4a7c59] mt-3"></div>

                <p className="text-[17px] leading-[1.9] text-[#555]">
                  Flexible order quantities based on your business requirements
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Process Section */}
        <div className="bg-[#faf8f4] border border-[#ece7df] rounded-[30px] p-10">

          <h3 className="text-[38px] font-bold text-[#2d2016] text-center mb-10">
            Wholesale Ordering Process
          </h3>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

            {/* Step 1 */}
            <div className="bg-white border border-[#ece7df] rounded-[22px] p-7 text-center shadow-sm">

              <div className="w-[54px] h-[54px] rounded-full bg-[#4a7c59] text-white flex items-center justify-center mx-auto mb-5 text-[22px] font-bold">
                1
              </div>

              <h4 className="text-[22px] font-bold text-[#2d2016] mb-2">
                Contact Us
              </h4>

              <p className="text-[16px] text-[#666] leading-[1.8]">
                Reach out via phone or contact form
              </p>

            </div>

            {/* Step 2 */}
            <div className="bg-white border border-[#ece7df] rounded-[22px] p-7 text-center shadow-sm">

              <div className="w-[54px] h-[54px] rounded-full bg-[#4a7c59] text-white flex items-center justify-center mx-auto mb-5 text-[22px] font-bold">
                2
              </div>

              <h4 className="text-[22px] font-bold text-[#2d2016] mb-2">
                Discuss Needs
              </h4>

              <p className="text-[16px] text-[#666] leading-[1.8]">
                Share quantity and delivery requirements
              </p>

            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#ece7df] rounded-[22px] p-7 text-center shadow-sm">

              <div className="w-[54px] h-[54px] rounded-full bg-[#4a7c59] text-white flex items-center justify-center mx-auto mb-5 text-[22px] font-bold">
                3
              </div>

              <h4 className="text-[22px] font-bold text-[#2d2016] mb-2">
                Get Quote
              </h4>

              <p className="text-[16px] text-[#666] leading-[1.8]">
                Receive competitive pricing instantly
              </p>

            </div>

            {/* Step 4 */}
            <div className="bg-white border border-[#ece7df] rounded-[22px] p-7 text-center shadow-sm">

              <div className="w-[54px] h-[54px] rounded-full bg-[#4a7c59] text-white flex items-center justify-center mx-auto mb-5 text-[22px] font-bold">
                4
              </div>

              <h4 className="text-[22px] font-bold text-[#2d2016] mb-2">
                Delivery
              </h4>

              <p className="text-[16px] text-[#666] leading-[1.8]">
                Timely delivery across Maharashtra
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Wholesale