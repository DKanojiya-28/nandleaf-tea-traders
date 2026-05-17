import { useEffect, useState } from "react"
import AdminLayout from "../components/admin/AdminLayout"

import {
    Trash2,
    Plus,
} from "lucide-react"

function ProductAdmin() {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)
    const [editId, setEditId] =
        useState(null)

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        shortDescription: "",
        fullDescription: "",
        price: "",
        image: "",
    })

    // Fetch Products
    const fetchProducts = async () => {

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/products`
            )

            const data = await response.json()


            if (data.success) {

                setProducts(data.data)

            }

        } catch (error) {

            console.log(error)

        } finally {

            setLoading(false)

        }

    }

    useEffect(() => {

        fetchProducts()

    }, [])

    // Handle Input
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })

    }

    // Add Product
    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            let response

            // Edit Product
            if (editId) {

                response = await fetch(
                   `${import.meta.env.VITE_API_URL}/api/products/${editId}`,
                    {
                        method: "PUT",

                        headers: {
                            "Content-Type": "application/json",
                        },

                        body: JSON.stringify(formData),
                    }
                )

            }

            // Add Product
            else {

                response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/products`,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json",
                        },

                        body: JSON.stringify(formData),
                    }
                )

            }

            const data = await response.json()

            if (data.success) {

                fetchProducts()

                setFormData({
                    name: "",
                    category: "",
                    shortDescription: "",
                    fullDescription: "",
                    price: "",
                    image: "",
                })

                setEditId(null)

            }

        } catch (error) {

            console.log(error)

        }

    }

    // Delete Product
    const deleteProduct = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this product?"
        )

        if (!confirmDelete) return

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/products/${id}`,
                {
                    method: "DELETE",
                }
            )

            const data = await response.json()

            if (data.success) {

                setProducts(
                    products.filter(
                        (item) => item._id !== id
                    )
                )

            }

        } catch (error) {

            console.log(error)

        }

    }
    const editProduct = (product) => {

        setEditId(product._id)

        setFormData({

            name: product.name,

            category: product.category,

            shortDescription:
                product.shortDescription,

            fullDescription:
                product.fullDescription,

            price: product.price,

            image: product.image,

        })

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })

    }
    return (
<AdminLayout>
        <section className="min-h-screen bg-[#fdfaf5] py-14">

            <div className="max-w-[1700px] mx-auto px-5">

                {/* Heading */}
                <div className="mb-10">

                    <h1 className="text-[44px] font-bold text-[#2d2016] mb-3">
                        Product Management
                    </h1>

                    <p className="text-[18px] text-[#8b6f47]">
                        Add and manage tea products
                    </p>

                </div>

                {/* Form */}
                <div className="bg-white border border-[#ece7df] rounded-[30px] p-8 mb-10">

                    <h2 className="text-[30px] font-bold text-[#2d2016] mb-6">
                        Add Product
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="grid md:grid-cols-2 gap-5"
                    >

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Product Name"
                            className="h-[58px] rounded-[16px] border border-[#ddd] px-5 outline-none"
                            required
                        />

                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="h-[58px] rounded-[16px] border border-[#ddd] px-5 outline-none"
                            required
                        >

                            <option value="">
                                Select Category
                            </option>

                            <option value="Home Use">
                                Home Use
                            </option>

                            <option value="Commercial Use">
                                Commercial Use
                            </option>

                            <option value="Customized">
                                Customized
                            </option>

                            <option value="Flavoured">
                                Flavoured
                            </option>

                        </select>

                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Price"
                            className="h-[58px] rounded-[16px] border border-[#ddd] px-5 outline-none"
                            required
                        />

                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Image URL"
                            className="h-[58px] rounded-[16px] border border-[#ddd] px-5 outline-none md:col-span-2"
                            required
                        />

                        <textarea
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleChange}
                            placeholder="Short Description"
                            rows="3"
                            className="rounded-[16px] border border-[#ddd] p-5 outline-none md:col-span-2 resize-none"
                            required
                        ></textarea>

                        <textarea
                            name="fullDescription"
                            value={formData.fullDescription}
                            onChange={handleChange}
                            placeholder="Full Product Details"
                            rows="5"
                            className="rounded-[16px] border border-[#ddd] p-5 outline-none md:col-span-2 resize-none"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-[#4a7c59] hover:bg-[#3d694a] transition-all duration-300 text-white h-[58px] rounded-[16px] text-[17px] font-semibold flex items-center justify-center gap-3 md:w-[240px]"
                        >

                            <Plus size={20} />

                            Add Product

                        </button>

                    </form>

                </div>

                {/* Products */}
                {loading ? (

                    <div className="text-[20px] text-[#4a7c59]">
                        Loading products...
                    </div>

                ) : (

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {products.map((product) => (

                            <div
                                key={product._id}
                                className="bg-white border border-[#ece7df] rounded-[24px] overflow-hidden shadow-sm"
                            >

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[240px] object-cover"

                                    onError={(e) => {
                                        e.target.src =
                                            "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200"
                                    }}
                                />

                                <div className="p-6">

                                    <div className="flex items-start justify-between gap-4 mb-3">

                                        <div>

                                            <h2 className="text-[24px] font-bold text-[#2d2016]">
                                                {product.name}
                                            </h2>

                                            <p className="text-[#4a7c59] text-[18px] font-semibold mt-1">
                                                {product.price}
                                            </p>

                                        </div>

                                        <div className="flex items-center gap-3">

                                            {/* Edit */}
                                            <button
                                                onClick={() => editProduct(product)}
                                                className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white w-11 h-11 rounded-xl flex items-center justify-center"
                                            >
                                                ✎
                                            </button>

                                            {/* Delete */}
                                            <button
                                                onClick={() => deleteProduct(product._id)}
                                                className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white w-11 h-11 rounded-xl flex items-center justify-center"
                                            >

                                                <Trash2 size={18} />

                                            </button>

                                        </div>
                                    </div>

                                    <p className="text-[#555] leading-[1.8] text-[16px]">
                                        {product.description}
                                    </p>

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

export default ProductAdmin