function FeatureCard({ item }) {
  const Icon = item.icon

  return (
    <div className="bg-white rounded-[28px] p-8 shadow-sm hover:shadow-lg transition duration-300">

      {/* Icon */}
      <div className="bg-[#edf4ee] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">

        <Icon
          size={30}
          className="text-[#4a7c59]"
        />

      </div>

      {/* Title */}
      <h3 className="text-[28px] font-bold text-[#2d2016] mb-4 leading-tight">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-[16px] text-gray-600 leading-[1.8]">
        {item.description}
      </p>

    </div>
  )
}

export default FeatureCard