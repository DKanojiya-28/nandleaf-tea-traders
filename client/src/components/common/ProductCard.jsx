import { CheckCircle2 } from "lucide-react"

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-lg transition duration-300">

      {/* Image */}
      <div className="h-[240px] overflow-hidden relative">

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />

      </div>

      {/* Content */}
      <div className="p-8">

        {/* Title */}
        <h3 className="text-[34px] font-bold text-[#2d2016] mb-5 leading-tight">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-[17px] text-gray-600 leading-[1.8] mb-7">
          {product.description}
        </p>

        {/* Points */}
        <div className="space-y-4">

          {product.points.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >

              <CheckCircle2
                size={22}
                className="text-[#4a7c59]"
              />

              <span className="text-[16px] text-gray-700">
                {point}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default ProductCard