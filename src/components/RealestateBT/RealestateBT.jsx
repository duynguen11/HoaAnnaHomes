import SaigonpearlImg from "../../assets/images/RealestateBT/Saigonpearl.jpg";
import ManorImg from "../../assets/images/RealestateBT/Manor.jpeg";
import VinhomesImg from "../../assets/images/RealestateBT/VinhomesCentral.jpg";
import SunwahImg from "../../assets/images/RealestateBT/Sunwah.jpg";

const RealestateBT = () => {
  const cardData = [
    {
      imageUrl: SunwahImg,
      propertyCount: "Hiện có 56 bất động sản",
      priceRange: "22.7 - 65 triệu/ tháng",
      title: "Sunwah Pearl",
      description: "Đã bàn giao",
      author: "Công ty Sunwah Properties",
      role: "Co-Founder / CTO",
      detailUrl: "#",
    },
    {
      imageUrl: VinhomesImg,
      propertyCount: "Hiện có 23 bất động sản",
      priceRange: "17 - 60 triệu/ tháng",
      title: "Vinhomes Central Park",
      description: "Đã bàn giao",
      author: "Tập đoàn Vingroup",
      role: "Co-Founder / CTO",
      detailUrl: "/VinhomesCentralPark-BT",
    },
    {
      imageUrl: ManorImg,
      propertyCount: "Hiện có 38 bất động sản",
      priceRange: "11 - 30.7 triệu/ tháng",
      title: "The Manor",
      description: "Bàn giao năm 2010",
      author: "Tập đoàn Bitexco",
      role: "Co-Founder / CTO",
      detailUrl: "/TheManor-BT",
    },
    {
      imageUrl: SaigonpearlImg,
      propertyCount: "Hiện có 60 bất động sản.",
      priceRange: "18 - 61.5 triệu/ tháng",
      title: "Saigon Pearl",
      description: "Đang mở bán",
      author: "Công ty CP tập đoàn S.S.G",
      role: "Co-Founder / CTO",
      detailUrl: "/SGPearl-BT",
    },
  ];
  return (
    <div className="p-3">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 my-6">
          Căn hộ cho thuê khu vực Bình Thạnh
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
                  <a
                    href={card.detailUrl}
                    className="ml-auto inline-block rounded bg-red-500 p-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
                  >
                    Thông tin dự án
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

export default RealestateBT;
