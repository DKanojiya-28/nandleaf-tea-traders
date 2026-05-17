import {
  LayoutDashboard,
  Package,
  LogOut,
} from "lucide-react"

import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom"

import logo from "../../assets/images/logo.jpg"

function AdminLayout({ children }) {

  const navigate = useNavigate()

  const location = useLocation()

  const handleLogout = () => {

    localStorage.removeItem("adminToken")

    navigate("/login")

  }

  const menuItems = [

    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin",
    },

    {
      title: "Manage Products",
      icon: Package,
      path: "/admin/products",
    },

  ]

  return (

  <div className="min-h-screen bg-[#fdfaf5] flex flex-col lg:flex-row overflow-x-hidden">

    {/* Sidebar */}
    <aside className="w-full lg:w-[290px] bg-white border-r border-[#ece7df] p-5 sm:p-6 flex flex-col justify-between">

      <div>

        {/* Logo */}
        <div className="flex flex-col items-center text-center mb-10">

          <img
            src={logo}
            alt="Logo"
            className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] object-contain mb-4"
          />

          <h2 className="text-[20px] sm:text-[24px] font-bold text-[#2d2016] leading-tight">
            Nandleaf Tea
          </h2>

          <p className="text-[#777] text-[14px] sm:text-[15px]">
            Admin Dashboard
          </p>

        </div>

        {/* Menu */}
        <div className="space-y-3">

          {menuItems.map((item) => (

            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-5 h-[56px] rounded-[18px] text-[16px] sm:text-[17px] font-semibold transition-all duration-300

              ${location.pathname === item.path

                  ? "bg-[#4a7c59] text-white"

                  : "text-[#2d2016] hover:bg-[#f5f5f5]"
                }`}
            >

              <item.icon size={20} />

              {item.title}

            </Link>

          ))}

        </div>

      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white h-[54px] rounded-[18px] text-[16px] sm:text-[17px] font-semibold flex items-center justify-center gap-3 mt-10"
      >

        <LogOut size={20} />

        Logout

      </button>

    </aside>

    {/* Main Content */}
    <main className="flex-1 w-full p-4 sm:p-6 lg:p-8 overflow-y-auto">

      {children}

    </main>

  </div>

)

}

export default AdminLayout