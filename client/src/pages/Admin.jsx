import { useEffect, useState } from "react"
import {
  useNavigate,
  Link,
} from "react-router-dom"
import logo from "../assets/images/logo.jpg"
import AdminLayout from "../components/admin/AdminLayout"

function Admin() {

  const [contacts, setContacts] = useState([])

  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  const fetchContacts = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/api/contact"
      )

      const data = await response.json()

      if (data.success) {

        setContacts(data.data)

      }

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }

  }

  const deleteMessage = async (id) => {

  const confirmDelete = window.confirm(
    "Delete this inquiry?"
  )

  if (!confirmDelete) return

  try {

    const response = await fetch(
      `http://localhost:5000/api/contact/${id}`,
      {
        method: "DELETE",
      }
    )

    const data = await response.json()

    if (data.success) {

      setContacts(
        contacts.filter(
          (item) => item._id !== id
        )
      )

    }

  } catch (error) {

    console.log(error)

  }

}

const handleLogout = () => {

  localStorage.removeItem("adminToken")

  navigate("/login")

}

  useEffect(() => {

    fetchContacts()

  }, [])

  return (

    <AdminLayout>

    <section className="min-h-screen bg-[#fdfaf5] py-14">

      <div className="max-w-[1700px] mx-auto px-5">

        <div className="flex items-center gap-4 mb-6">

  <img
    src={logo}
    alt="Logo"
    className="w-[70px] h-[70px] object-contain"
  />

  <div>

    <h2 className="text-[20px] font-semibold text-[#4a7c59]">
      Nandleaf Tea Traders
    </h2>

    <p className="text-[#777]">
      Admin Dashboard
    </p>

  </div>

</div>

        {/* Heading */}
       {/* Heading */}
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">

  <div>

    <h1 className="text-[44px] font-bold text-[#2d2016] mb-3">
      Contact Inquiries
    </h1>

    <p className="text-[18px] text-[#8b6f47]">
      All customer messages from website contact form
    </p>

  </div>

  {/* Buttons */}
 

</div>

        {/* Loading */}
        {loading ? (

          <div className="text-[20px] font-medium text-[#4a7c59]">
            Loading messages...
          </div>

        ) : (

          <div className="grid gap-6">

            {contacts.map((contact) => (

              <div
                key={contact._id}
                className="bg-white border border-[#ece7df] rounded-[24px] p-8 shadow-sm"
              >

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                  {/* Left */}
                  <div>

                    <h2 className="text-[28px] font-bold text-[#2d2016] mb-2">
                      {contact.name}
                    </h2>

                    <p className="text-[17px] text-[#4a7c59] font-medium mb-3">
                      {contact.phone}
                    </p>

                    <p className="text-[17px] leading-[1.9] text-[#555] max-w-[1000px]">
                      {contact.message}
                    </p>

                  </div>

                  {/* Right */}
                 {/* Right */}
<div className="flex flex-col items-start lg:items-end gap-4 shrink-0">

  <div className="text-[15px] text-[#888]">
    {new Date(contact.createdAt).toLocaleString()}
  </div>

  <button
    onClick={() => deleteMessage(contact._id)}
    className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-5 py-2 rounded-xl text-[15px] font-medium"
  >
    Delete
  </button>

</div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
    </AdminLayout>

  )
}

export default Admin