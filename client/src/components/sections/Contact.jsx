import { useState } from "react"
import { toast } from "react-toastify"

import {
  MapPin,
  User,
  Phone,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()

      if (data.success) {

       toast.success(
  "Message Sent Successfully"
)

        setFormData({
          name: "",
          phone: "",
          message: "",
        })

      } else {

         toast.error(data.message)

      }

    } catch (error) {

      console.log(error)

      toast.error(
  "Something went wrong"
)

    } finally {

      setLoading(false)

    }

  }

  return (

    <section
      id="contact"
      className="bg-white py-16 scroll-mt-28"
    >

      <div className="container-custom">

        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-[44px] font-bold text-[#2d2016] mb-3">
            Contact Us
          </h2>

          <p className="text-[18px] text-[#8b6f47]">
            Get in touch with us for inquiries, orders, or any questions
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT CARD */}
          <div className="bg-gradient-to-br from-[#5c875d] to-[#8a7546] rounded-[30px] p-8 text-white shadow-sm">

            <h3 className="text-[32px] font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-7">

              {/* Address */}
              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">

                  <MapPin size={24} />

                </div>

                <div>

                  <h4 className="text-[20px] font-bold mb-2">
                    Address
                  </h4>

                  <p className="text-[16px] leading-[1.8] text-white/95">
                    NANDLEAF TEA TRADERS
                    <br />
                    Shindkheda
                    <br />
                    District Dhule, Maharashtra
                    <br />
                    India
                  </p>

                </div>

              </div>

              {/* Proprietor */}
              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">

                  <User size={24} />

                </div>

                <div>

                  <h4 className="text-[20px] font-bold mb-2">
                    Proprietor
                  </h4>

                  <p className="text-[16px] text-white/95">
                    Harsh Rajendra Gupta
                  </p>

                </div>

              </div>

              {/* Phone */}
              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">

                  <Phone size={24} />

                </div>

                <div>

                  <h4 className="text-[20px] font-bold mb-2">
                    Phone Number
                  </h4>

                  <a
                    href="tel:+917588509084"
                    className="text-[16px] text-white/95 hover:underline"
                  >
                    +91 7588509084
                  </a>

                </div>

              </div>

              {/* Email */}
              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">

                  <Mail size={24} />

                </div>

                <div>

                  <h4 className="text-[20px] font-bold mb-2">
                    Email
                  </h4>

                  <a
                    href="mailto:nandleaf@gmail.com"
                    className="text-[16px] text-white/95 hover:underline break-all"
                  >
                    nandleaf@gmail.com
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#f8f5ef] rounded-[30px] p-8 shadow-sm">

            <h3 className="text-[32px] font-bold text-[#2d2016] mb-8">
              Send Us a Message
            </h3>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}
              <div>

                <label className="block text-[16px] font-semibold mb-2 text-[#2d2016]">
                  Your Name *
                </label>

                <div className="relative">

                  <User
                    size={20}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8b6f47]"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full h-[58px] rounded-[18px] border border-[#ddd6ca] bg-white pl-14 pr-5 text-[16px] outline-none"
                    required
                  />

                </div>

              </div>

              {/* Phone */}
              <div>

                <label className="block text-[16px] font-semibold mb-2 text-[#2d2016]">
                  Phone Number *
                </label>

                <div className="relative">

                  <Phone
                    size={20}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8b6f47]"
                  />

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full h-[58px] rounded-[18px] border border-[#ddd6ca] bg-white pl-14 pr-5 text-[16px] outline-none"
                    required
                  />

                </div>

              </div>

              {/* Message */}
              <div>

                <label className="block text-[16px] font-semibold mb-2 text-[#2d2016]">
                  Message *
                </label>

                <div className="relative">

                  <MessageSquare
                    size={20}
                    className="absolute left-5 top-5 text-[#8b6f47]"
                  />

                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full rounded-[18px] border border-[#ddd6ca] bg-white pl-14 pr-5 pt-5 text-[16px] outline-none resize-none"
                    required
                  ></textarea>

                </div>

              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-[58px] bg-[#4a7c59] hover:bg-[#3d694a] transition-all duration-300 rounded-[18px] text-white text-[17px] font-semibold flex items-center justify-center gap-3"
              >

                <Send size={18} />

                {loading ? "Sending..." : "Send Message"}

              </button>

            </form>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12">

          <div className="bg-gradient-to-r from-[#eef2ee] to-[#f5efe6] rounded-[30px] py-10 px-8 text-center">

            <h3 className="text-[36px] font-bold text-[#2d2016] mb-4">
              Ready to Partner With Us?
            </h3>

            <p className="text-[17px] text-[#374151] leading-[1.8] max-w-[760px] mx-auto mb-8">
              Contact us today to discuss your tea supply requirements
              and get a competitive quote for your business.
            </p>

            <div className="flex items-center justify-center gap-5 flex-wrap">

              {/* Call */}
              <a
                href="tel:+917588509084"
                className="bg-[#4a7c59] hover:bg-[#3d694a] transition-all duration-300 text-white px-8 h-[58px] rounded-[18px] text-[18px] font-semibold inline-flex items-center gap-3"
              >

                <Phone size={20} />

                Call Us Now

              </a>

              {/* Email */}
              <a
                href="mailto:nandleaf@gmail.com"
                className="border-2 border-[#4a7c59] text-[#4a7c59] hover:bg-[#4a7c59] hover:text-white transition-all duration-300 px-8 h-[58px] rounded-[18px] text-[18px] font-semibold inline-flex items-center gap-3"
              >

                <Mail size={20} />

                Send Inquiry

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Contact