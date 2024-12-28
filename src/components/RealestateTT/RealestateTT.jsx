import { Link } from "react-router-dom";

import MetropoleImg from "../../assets/images/RealestateTT/Metropole.jpg";
import TheRiverImg from "../../assets/images/RealestateTT/TheRiver.jpg";
import TheZietImg from "../../assets/images/RealestateTT/TheZeit.jpg";
import SalaImg from "../../assets/images/RealestateTT/Sala.jpg";

const RealestateTT = () => {
  const cardData = [
    {
      imageUrl: MetropoleImg,
      propertyCount: "Hiện có 194 bất động sản",
      priceRange: "29.1 - 130 triệu/ tháng",
      title: "The Metropole",
      description: "Đang bán giai đoạn 4 - The OpusK",
      author: "Công ty CP BĐS Sơn Kim Land",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
    {
      imageUrl: "https://via.placeholder.com/600x400",
      propertyCount: "",
      priceRange: "",
      title: "The Emprie City",
      description: "Đang mở bán",
      author: "",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
    {
      imageUrl: TheRiverImg,
      propertyCount: "Hiện có 54 bất động sản",
      priceRange: "24 - 100 triệu/ tháng",
      title: "The River",
      description: "Đã bàn giao",
      author: "Công ty cổ phần phát triển BĐS Refico",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
    {
      imageUrl: TheZietImg,
      propertyCount: "Hiện có 35 bất động sản",
      priceRange: "18 - 61.5 triệu/ tháng",
      title: "The Ziet River",
      description: "23/7/2023 mở bán tiếp GĐ2",
      author: "Công ty GS Engineering & Construction",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
    {
      imageUrl: SalaImg,
      propertyCount: "Hiện có 60 bất động sản",
      priceRange: "26 - 61.5 triệu/ tháng",
      title: "Khu đô thị Sala",
      description: "Đang mở bán",
      author: "Công ty CP Đầu tư địa ốc",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
  ];
  return (
    <div className="p-3">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 my-6">
          Căn hộ cho thuê khu vực Thủ Thiêm
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded overflow-hidden bg-white shadow border"
            >
              {/* Image Section */}
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-64 object-cover"
              />

              {/* Content Section */}
              <div className="p-4">
                {/* Date and Tag */}
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{card.propertyCount}</span>
                  <span className="ml-3 inline-block rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {card.priceRange}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                  {card.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3">{card.description}</p>

                {/* Author Section */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {card.author}
                    </p>
                    <p className="text-xs text-gray-500">{card.role}</p>
                  </div>

                  {/* Nút xem chi tiết */}
                  <Link
                    to={card.detailUrl}
                    className="ml-auto inline-block rounded bg-red-500 p-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
                  >
                    Thông tin dự án
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealestateTT;
