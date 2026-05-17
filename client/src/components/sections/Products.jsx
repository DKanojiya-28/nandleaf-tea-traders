import { useState } from "react"
import { useEffect } from "react"

import {
    Home,
    Building2,
    Sparkles,
    Coffee,
    CheckCircle,
} from "lucide-react"

import product1 from "../../assets/images/product-1.jpg"
import product2 from "../../assets/images/product-2.jpg"
import product3 from "../../assets/images/product-3.jpg"
import heroTea from "../../assets/images/hero-tea.jpg"

function Products() {

    const [activeCategory, setActiveCategory] = useState(0)

    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] =
        useState(null)

    const categories = [

        {
            title: "Home Use",
            icon: Home,
            image: product1,
            description:
                "Perfect tea varieties for daily household consumption.",
        },

        {
            title: "Commercial Use",
            icon: Building2,
            image: product2,
            description:
                "Bulk tea supplies for hotels, cafés, and restaurants.",
        },

        {
            title: "Customized",
            icon: Sparkles,
            image: product3,
            description:
                "Personalized tea blends tailored to your needs.",
        },

        {
            title: "Flavoured",
            icon: Coffee,
            image: heroTea,
            description:
                "Aromatic flavoured teas for a delightful experience.",
        },

    ]

    const fetchProducts = async () => {

        try {

            const response = await fetch(
                "http://localhost:5000/api/products"
            )

            const data = await response.json()

            if (data.success) {

                setProducts(data.data)

            }

        } catch (error) {

            console.log(error)

        }

    }

    useEffect(() => {

        fetchProducts()

    }, [])

    const filteredProducts = products.filter(

        (product) =>

            product.category ===
            categories[activeCategory].title

    )

    return (

        <section
            id="products"
            className="bg-[#fdfaf5] py-[70px]"
        >

            <div className="max-w-[1700px] mx-auto px-5">

                {/* Heading */}
                <div className="text-center mb-[50px]">

                    <h2 className="text-[44px] font-bold text-[#2d2016] mb-3">
                        Our Products
                    </h2>

                    <p className="text-[19px] text-[#9a7440]">
                        Premium quality tea products for homes and businesses
                    </p>

                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">

                    {categories.map((category, index) => (

                        <button
                            key={index}
                            onClick={() => setActiveCategory(index)}
                            className={`flex items-center gap-3 px-6 h-[58px] rounded-[18px] text-[16px] font-semibold transition-all duration-300 border
              
              ${activeCategory === index
                                    ? "bg-[#4a7c59] text-white border-[#4a7c59]"
                                    : "bg-white text-[#2d2016] border-[#ece7df] hover:border-[#4a7c59]"
                                }`}
                        >

                            <category.icon size={20} />

                            {category.title}

                        </button>

                    ))}

                </div>

                {/* Main Product Display */}
                <div className="bg-white border border-[#ece7df] rounded-[30px] overflow-hidden mb-12 shadow-sm">

                    <div className="grid lg:grid-cols-2">

                        {/* Left Image */}
                        <div className="relative h-[520px]">

                            <img
                                src={categories[activeCategory].image}
                                alt={categories[activeCategory].title}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8">

                                <h3 className="text-[38px] font-bold text-white mb-2">
                                    {categories[activeCategory].title}
                                </h3>

                                <p className="text-[17px] text-white/90 max-w-[520px] leading-[1.8]">
                                    {categories[activeCategory].description}
                                </p>

                            </div>

                        </div>

                        {/* Right Content */}
                        <div className="p-10 lg:p-14">

                            <h4 className="text-[34px] font-bold text-[#2d2016] mb-8">
                                Available Products
                            </h4>

                            <div className="grid gap-4">

                                {filteredProducts.length > 0 ? (

                                    filteredProducts.map((product) => (

                                        <div
                                            key={product._id}

                                            onClick={() => setSelectedProduct(product)}

                                            className="flex items-center gap-4 bg-[#faf7f2] border border-[#ece7df] rounded-[18px] px-5 py-4 cursor-pointer hover:border-[#4a7c59] transition-all duration-300"
                                        >

                                            <CheckCircle
                                                size={22}
                                                className="text-[#4a7c59] shrink-0"
                                            />

                                            <span className="text-[17px] font-medium text-[#2d2016]">
                                                {product.name}
                                            </span>

                                        </div>

                                    ))

                                ) : (

                                    <div className="bg-[#faf7f2] border border-[#ece7df] rounded-[18px] px-5 py-6 text-[#777] text-[16px]">

                                        No products available in this category.

                                    </div>

                                )}

                            </div>

                        </div>

                    </div>

                </div>

                {/* Small Cards */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">

                    {categories.map((category, index) => (

                        <div
                            key={index}
                            onClick={() => setActiveCategory(index)}
                            className={`bg-white border rounded-[24px] p-7 cursor-pointer transition-all duration-300
              
              ${activeCategory === index
                                    ? "border-[#4a7c59] shadow-md"
                                    : "border-[#ece7df] hover:border-[#4a7c59]"
                                }`}
                        >

                            <div className="w-[68px] h-[68px] rounded-[18px] bg-gradient-to-r from-[#4a7c59] to-[#8a7546] flex items-center justify-center mb-5">

                                <category.icon
                                    size={30}
                                    className="text-white"
                                />

                            </div>

                            <h3 className="text-[24px] font-bold text-[#2d2016] mb-3">
                                {category.title}
                            </h3>

                            <p className="text-[16px] text-[#666] leading-[1.8] mb-4">
                                {category.description}
                            </p>

                            <p className="text-[15px] font-semibold text-[#4a7c59]">
                                {
                                    products.filter(
                                        (item) =>
                                            item.category === category.title
                                    ).length
                                } Products Available
                            </p>

                        </div>

                    ))}

                </div>

                {/* Quality Section */}
                <div className="bg-white border border-[#ece7df] rounded-[30px] overflow-hidden shadow-sm">

                    <div className="grid lg:grid-cols-2 items-center">

                        {/* Left */}
                        <div className="p-10 lg:p-14">

                            <h3 className="text-[40px] font-bold text-[#2d2016] mb-5">
                                Quality Assurance
                            </h3>

                            <p className="text-[17px] leading-[2] text-[#555] mb-8">
                                Every tea batch goes through strict quality checks to
                                ensure freshness, aroma, authentic taste, and premium
                                consistency.
                            </p>

                            <div className="space-y-5">

                                <div className="flex items-start gap-4">

                                    <CheckCircle
                                        size={22}
                                        className="text-[#4a7c59] mt-1 shrink-0"
                                    />

                                    <div>

                                        <h4 className="text-[18px] font-bold text-[#2d2016]">
                                            Freshness Guaranteed
                                        </h4>

                                        <p className="text-[15px] text-[#777]">
                                            Carefully selected and freshly packed tea leaves.
                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-start gap-4">

                                    <CheckCircle
                                        size={22}
                                        className="text-[#4a7c59] mt-1 shrink-0"
                                    />

                                    <div>

                                        <h4 className="text-[18px] font-bold text-[#2d2016]">
                                            Consistent Quality
                                        </h4>

                                        <p className="text-[15px] text-[#777]">
                                            Same premium taste and aroma in every batch.
                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-start gap-4">

                                    <CheckCircle
                                        size={22}
                                        className="text-[#4a7c59] mt-1 shrink-0"
                                    />

                                    <div>

                                        <h4 className="text-[18px] font-bold text-[#2d2016]">
                                            Tested & Approved
                                        </h4>

                                        <p className="text-[15px] text-[#777]">
                                            Every batch quality checked before dispatch.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Right */}
                        <div className="h-[520px]">

                            <img
                                src={heroTea}
                                alt="Tea Quality"
                                className="w-full h-full object-cover"
                            />

                        </div>

                    </div>

                </div>

            </div>
            {/* Product Details Modal */}
            {selectedProduct && (

                <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-5">

                    <div className="bg-white w-full max-w-[950px] rounded-[30px] overflow-hidden relative animate-fadeIn">

                        {/* Close */}
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-5 right-5 bg-black text-white w-11 h-11 rounded-full text-[18px] z-20"
                        >
                            ✕
                        </button>

                        <div className="grid lg:grid-cols-2">

                            {/* Image */}
                            <div className="h-[500px] bg-[#f5f5f5]">

                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"

                                    onError={(e) => {
                                        e.target.src =
                                            "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200"
                                    }}
                                />

                            </div>

                            {/* Content */}
                            <div className="p-10 overflow-y-auto max-h-[500px]">

                                <p className="text-[#4a7c59] font-semibold text-[15px] uppercase tracking-wide mb-3">

                                    {selectedProduct.category}

                                </p>

                                <h2 className="text-[38px] font-bold text-[#2d2016] mb-4 leading-tight">
                                    {selectedProduct.name}
                                </h2>

                                <p className="text-[#4a7c59] text-[26px] font-bold mb-6">
                                    ₹ {selectedProduct.price}
                                </p>

                                <p className="text-[17px] text-[#666] leading-[2] mb-8">
                                    {selectedProduct.fullDescription}
                                </p>

                                <a
                                    href="#contact"

                                    onClick={() => setSelectedProduct(null)}

                                    className="inline-flex items-center justify-center bg-[#4a7c59] hover:bg-[#3d694a] transition-all duration-300 text-white px-8 h-[58px] rounded-[18px] text-[17px] font-semibold"
                                >
                                    Send Inquiry
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            )}
        </section>

    )
}

export default Products