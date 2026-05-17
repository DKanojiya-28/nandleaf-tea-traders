import { useState } from "react"
import logo from "../assets/images/logo.jpg"
import { toast } from "react-toastify"

import {
  Mail,
  Lock,
  LogIn,
} from "lucide-react"

import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        "http://localhost:5000/api/admin/login",
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

        localStorage.setItem(
          "adminToken",
          data.token
        )

        navigate("/admin")
        toast.success("Login Successful")

      } else {

       toast.error(data.message)

      }

    } catch (error) {

      console.log(error)

      toast.error(
  "Something went wrong")

    } finally {

      setLoading(false)

    }

  }

  return (

    <section className="min-h-screen bg-[#fdfaf5] flex items-center justify-center px-5">

      <div className="w-full max-w-[520px] bg-white border border-[#ece7df] rounded-[30px] p-10 shadow-sm">

        <div className="text-center mb-10">
            <div className="flex justify-center mb-6">

  <img
    src={logo}
    alt="Logo"
    className="w-[100px] h-[100px] object-contain"
  />

</div>

          <h1 className="text-[42px] font-bold text-[#2d2016] mb-3">
            Admin Login
          </h1>

          <p className="text-[17px] text-[#8b6f47]">
            Login to access admin dashboard
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Email */}
          <div>

            <label className="block text-[16px] font-semibold mb-2 text-[#2d2016]">
              Email
            </label>

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8b6f47]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter admin email"
                className="w-full h-[60px] rounded-[18px] border border-[#ddd6ca] bg-white pl-14 pr-5 text-[16px] outline-none"
                required
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="block text-[16px] font-semibold mb-2 text-[#2d2016]">
              Password
            </label>

            <div className="relative">

              <Lock
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8b6f47]"
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full h-[60px] rounded-[18px] border border-[#ddd6ca] bg-white pl-14 pr-5 text-[16px] outline-none"
                required
              />

            </div>

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-[60px] bg-[#4a7c59] hover:bg-[#3d694a] transition-all duration-300 rounded-[18px] text-white text-[18px] font-semibold flex items-center justify-center gap-3"
          >

            <LogIn size={20} />

            {loading ? "Logging in..." : "Login"}

          </button>

        </form>

      </div>

    </section>

  )
}

export default Login