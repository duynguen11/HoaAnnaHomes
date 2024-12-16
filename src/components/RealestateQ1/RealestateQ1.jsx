import GoldenRiverImg from "../../assets/images/RealestateQ1/GoldenRiver.jpg";
import GrandMariaImg from "../../assets/images/RealestateQ1/Grandmaria.jpg";

const RealestateQ1 = () => {
  const cardData = [
    {
      imageUrl: GoldenRiverImg,
      propertyCount: "Hiện có 136 bất động sản",
      priceRange: "18 - 60.5 triệu/tháng",
      title: "Vinhomes Golden River",
      description: "Đã bàn giao 4 tòa - Đang mở bán 2 tòa",
      author: "Tập đoàn Vingroup",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
    {
      imageUrl: GrandMariaImg,
      propertyCount: "Hiện có 23 bất động sản",
      priceRange: "40 - 66.1 triệu/tháng",
      title: "Grand Marina Saigon",
      description: "Đang mở bán",
      author: "Masterise Homes",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
    {
      imageUrl: "https://via.placeholder.com/600x400",
      propertyCount: "",
      priceRange: "",
      title: "Fairfield by Marriott",
      description: "Đang mở bán",
      author: "",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
    {
      imageUrl: "https://via.placeholder.com/600x400",
      propertyCount: "",
      priceRange: "",
      title: "Lancaster",
      description: "Đang mở bán",
      author: "",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
  ];
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Căn hộ cho thuê khu vực Quận 1
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded overflow-hidden bg-white shadow-lg border"
            >
              {/* Image Section */}
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-64 object-cover"
              />

              {/* Content Section */}
              <div className="p-6">
                {/* Date and Tag */}
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{card.propertyCount}</span>
                  <span className="ml-3 inline-block rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {card.priceRange}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer mb-2">
                  {card.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">{card.description}</p>

                {/* Author Section */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {card.author}
                    </p>
                    <p className="text-xs text-gray-500">{card.role}</p>
                  </div>

                  {/* Nút xem chi tiết */}
                  <a
                    href={card.detailUrl}
                    className="ml-auto inline-block rounded bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
                  >
                    Xem chi tiết dự án
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealestateQ1;
