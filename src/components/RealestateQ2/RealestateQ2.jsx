import { Link } from "react-router-dom";

import DedgeImg from "../../assets/images/RealestateQ2/D'Edge.jpg";
import GreenImg from "../../assets/images/RealestateQ2/TĐGreen.jpg";
import NassimImg from "../../assets/images/RealestateQ2/Nassim.jpg";
import Q2Img from "../../assets/images/RealestateQ2/Q2.jpg";
import DiamondImg from "../../assets/images/RealestateQ2/DiamondIsland.jpg";
import FelizImg from "../../assets/images/RealestateQ2/FelizEnVista.jpg";
import DefineImg from "../../assets/images/RealestateQ2/Define.jpg";

const RealestateQ2 = () => {
  const cardData = [
    {
      imageUrl: DedgeImg,
      propertyCount: "Hiện có 20 bất động sản",
      priceRange: "33 - 180.2 triệu/ tháng",
      title: "D'Edge",
      description: "Đã bàn giao",
      author: "CapitalLand Development VN",
      role: "Co-Founder / CTO",
      detailUrl: "/DEdgeTown-BT",
    },
    {
      imageUrl: GreenImg,
      propertyCount: "Hiện có 20 bất động sản",
      priceRange: "25.8 - 45.3 triệu/ tháng",
      title: "Thảo Điền Green",
      description: "Bàn giao ngày 2/8/2023",
      author: "Công ty đầu tư BĐS SIC",
      role: "Co-Founder / CTO",
      detailUrl: "/TDGreen",
    },
    {
      imageUrl: NassimImg,
      propertyCount: "Hiện có 20 bất động sản",
      priceRange: "26 - 107.3 triệu/ tháng",
      title: "Nassim Thảo Điền",
      description: "Đang mở bán",
      author: "Công ty CP BĐS Sơn Kim Land",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
    {
      imageUrl: Q2Img,
      propertyCount: "Hiện có 20 bất động sản",
      priceRange: "20.5 - 58.2 triệu/ tháng",
      title: "Q2 Thảo Điền",
      description: "Bàn giao năm 2021",
      author: "Đang cập nhật ...",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
    {
      imageUrl: DiamondImg,
      propertyCount: "Hiện có 63 bất động sản",
      priceRange: "18 - 86.7 triệu/ tháng",
      title: "Diamond Island",
      description: "Đã bàn giao",
      author: "Kusto Home",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
    {
      imageUrl: FelizImg,
      propertyCount: "Hiện có 71 bất động sản",
      priceRange: "18.5 - 85 triệu/ tháng",
      title: "Feliz En Vista",
      description: "Đã bàn giao",
      author: "CapitalLand Development VN",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
    {
      imageUrl: DefineImg,
      propertyCount: "Hiện có 20 bất động sản",
      priceRange: "60 - 126.8 triệu/ tháng",
      title: "Căn hộ DEFINE",
      description: "Sắp bàn giao",
      author: "CapitalLand Development VN",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
  ];
  return (
    <div className="p-3">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 my-6">
          Căn hộ cho thuê khu vực Quận 2
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
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

export default RealestateQ2;
