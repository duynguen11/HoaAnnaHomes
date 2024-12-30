import { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

import Diamond1 from "../../../assets/images/RealestateQ2/DiamondIsland/Diamond1.jpg";
import Diamond2 from "../../../assets/images/RealestateQ2/DiamondIsland/Diamond2.jpg";
import Diamond3 from "../../../assets/images/RealestateQ2/DiamondIsland/Diamond3.jpg";
import Diamond4 from "../../../assets/images/RealestateQ2/DiamondIsland/Diamond4.jpg";
import Diamond5 from "../../../assets/images/RealestateQ2/DiamondIsland/Diamond5.jpg";
import Diamond6 from "../../../assets/images/RealestateQ2/DiamondIsland/Diamond6.jpg";
import Diamond7 from "../../../assets/images/RealestateQ2/DiamondIsland/Diamond7.jpg";
import Diamond8 from "../../../assets/images/RealestateQ2/DiamondIsland/Diamond8.png";
import Diamond9 from "../../../assets/images/RealestateQ2/DiamondIsland/Diamond9.jpg";

import Vitri1 from "../../../assets/images/RealestateQ2/DiamondIsland/Vitri1.jpg";
import Vitri2 from "../../../assets/images/RealestateQ2/DiamondIsland/Vitri2.jpg";
import Vitri3 from "../../../assets/images/RealestateQ2/DiamondIsland/Vitri3.jpg";
import Vitri4 from "../../../assets/images/RealestateQ2/DiamondIsland/Vitri4.jpg";
import Vitri5 from "../../../assets/images/RealestateQ2/DiamondIsland/Vitri5.jpg";
import Vitri6 from "../../../assets/images/RealestateQ2/DiamondIsland/Vitri6.jpg";

import AvatarHoa from "../../../assets/images/AvatarHoa.png";
import FloatContact from "../../../components/FloatingContact/FloatingContact";

const slides = [
  {
    id: 1,
    content: "The Diamond Island ",
    image: Diamond1,
  },
  {
    id: 2,
    content: "The Diamond Island",
    image: Diamond2,
  },
  {
    id: 3,
    content: "The Diamond Island",
    image: Diamond3,
  },
  {
    id: 4,
    content: "The Diamond Island",
    image: Diamond4,
  },
  {
    id: 5,
    content: "The Diamond Island",
    image: Diamond5,
  },
  {
    id: 6,
    content: "The Diamond Island",
    image: Diamond6,
  },
  {
    id: 7,
    content: "The Diamond Island",
    image: Diamond7,
  },
  {
    id: 8,
    content: "The Diamond Island",
    image: Diamond8,
  },
  {
    id: 9,
    content: "The Diamond Island",
    image: Diamond9,
  },
];

const areas2 = [
  {
    id: 1,
    content: "Mặt bằng tổng thể dự án",
    image: Vitri1,
  },
  {
    id: 2,
    content: "Căn hộ 1 phòng ngủ",
    image: Vitri2,
  },
  {
    id: 3,
    content: "Căn hộ 2A",
    image: Vitri3,
  },
  {
    id: 4,
    content: "Căn hộ 2C",
    image: Vitri4,
  },
  {
    id: 5,
    content: "Căn hộ 2B",
    image: Vitri5,
  },
  {
    id: 6,
    content: "Căn hộ 3A",
    image: Vitri6,
  },
];

const DiamondIsland = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Điều khiển mở modal
  const [openItems, setOpenItems] = useState(Array(areas2.length).fill(false));

  // Mở modal và hiển thị ảnh
  const openModal = (image) => {
    setModalImage(image); // Lưu ảnh được click
    setIsModalOpen(true); // Mở modal
  };

  // Đóng modal
  const closeModal = () => {
    setIsModalOpen(false); // Đóng modal
    setModalImage(null); // Xóa ảnh trong modal
  };

  const toggleImage = (index) => {
    const updatedItems = [...openItems];
    updatedItems[index] = !updatedItems[index]; // Chuyển đổi trạng thái của mục được click
    setOpenItems(updatedItems); // Cập nhật state mới
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 2500 + 1000); // Tự động chuyển sau 2 giây
      return () => clearInterval(interval); // Clear interval khi unmount
    }
  }, [slides.length, isPaused]);
  return (
    <div className="py-6 px-3">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]">
          <div className="rounded my-4">
            <h2 className="text-xl font-bold text-blue-900 mb-2">
              DIAMOND ISLAND
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Số 01 đường số 104, khu phố 3, phường Bình Trưng Tây, quận 2, Tp.
              HCM.
            </p>
            <div
              className="w-full mx-auto rounded relative overflow-hidden h-[35vh] md:h-[50vh] lg:h-[60vh]"
              onMouseEnter={() => setIsPaused(true)} // Tạm dừng khi hover
              onMouseLeave={() => setIsPaused(false)}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                    index === currentIndex
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover", // Ensures the image covers the entire area
                    backgroundPosition: "center", // Centers the image
                    backgroundRepeat: "no-repeat", // Prevents tiling
                    width: "100%", // Set width to 100% of the parent container
                    height: "100%", // Adjust height as needed
                  }}
                >
                  {/* Overlay thông tin */}
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-4 rounded">
                    <h2 className="text-lg md:text-xl lg:text-4xl font-bold">
                      {slide.content}
                    </h2>
                    <p className="text-sm font-bold md:text-base">
                      {slide.description || "Diện tích: 8 ha"}
                    </p>
                  </div>
                </div>
              ))}
              <button
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? slides.length - 1 : prevIndex - 1
                  )
                }
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                  )
                }
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-between items-center my-3">
              <h2 className="text-xl font-bold text-blue-900">
                81,05 - 186,84 triệu/ m2
              </h2>
              <p className="text-sm font-bold text-gray-700">1275 CĂN HỘ</p>
            </div>
            <hr />
            <div>
              <p className="text-sm text-gray-600 my-5">
                Diamond Island là dự án căn hộ hạng sang nằm trên hòn đảo biệt
                lập duy nhất tại Quận 2, được bao quanh với 4 mặt sông nước tạo
                nên không gian sống tuyệt vời và đầy tính riêng tư. Diamond
                Island được quy hoạch trên tổng diện tích 79.944,6m2, mật độ xây
                dựng tổng khu chiếm khoảng 13,5%, còn lại 86,5% là mật độ dành
                cho mảng xanh và khu vực công cộng. Dự an gồm 6 cụm tòa tháp cao
                cấp gồm Brilliant, Bora Bora, Hawaii, Maldives, Cavary, Bahamas.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <div className="flex flex-col items-center justify-center text-center gap-2 mb-6">
              <img
                src={AvatarHoa}
                alt="Avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
              <h2 className="text-2xl font-semibold text-blue-900">
                Hòa Anna Homes
              </h2>
            </div>

            {/* Form nhập liệu */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Tên của bạn"
                className="w-full p-2 border rounded text-sm"
              />
              <input
                type="text"
                placeholder="Số điện thoại/Zalo"
                className="w-full p-2 border rounded text-sm"
              />
              <input
                type="email"
                placeholder="Email liên hệ"
                className="w-full px-2 py-3 border rounded text-sm"
              />
              <textarea
                placeholder="VD: Hello, I am interested in [Eaton Park]"
                className="w-full p-2 border rounded text-sm"
                rows="3"
              ></textarea>
              {/* Checkbox */}
              <div className="flex items-center gap-2 text-sm pb-5">
                <input type="checkbox" id="agree" className="rounded w-4 h-4" />
                <label htmlFor="agree">
                  Đồng ý với{" "}
                  <a href="#" className="text-blue-600 underline">
                    điều khoản bảo mật thông tin
                  </a>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 py-2 px-3 bg-blue-100 text-sm text-blue-600 rounded-full">
                  Gọi ngay
                </button>
                <button className="flex-1 py-2 px-3 bg-blue-600 text-sm text-white rounded-full">
                  Gửi thông tin
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]">
          <div className="rounded mt-10">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Tổng quan dự án
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse border border-gray-300 w-full text-sm text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 font-semibold text-gray-700">
                      Thông tin
                    </th>
                    <th className="border border-gray-300 px-4 py-2 font-semibold text-gray-700">
                      Chi tiết
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Giá</td>
                    <td className="border border-gray-300 px-4 py-2">
                      81,05 - 186,84 triệu/m²
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Diện tích
                    </td>
                    <td className="border border-gray-300 px-4 py-2">8 ha</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Thời điểm hoàn thành
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Năm 2020
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Quy mô</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Gồm 6 tòa chung cư 25 tầng
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Chủ đầu tư
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Kusto Home
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]">
          <div className="rounded py-6">
            <h2 className="text-xl font-bold text-gray-800 mt-4 ml-2">
              Vị trí mặt bằng
            </h2>
            <div className="p-2">
              <p className="text-sm text-gray-600 mb-3">
                Dự án Diamond Island tọa lạc tại số 1, đường 104, phường Bình
                Trưng Tây, TP.Thủ Đức. Căn hộ nằm ngay trên một hòn đảo biệt lập
                duy nhất tại Quận 2 với 3 mặt tiếp giáp với sông nước, nằm liền
                kề với khu đô thị mới Thủ Thiêm.
              </p>
              <img src={Vitri1} alt="" className="w-full h-auto rounded" />
            </div>
            <div className="p-2">
              {areas2.map((item, index) => (
                <div key={item.id} className="mb-3">
                  <h2
                    className="text-sm cursor-pointer hover:bg-gray-50 flex items-center p-2 rounded"
                    onClick={() => toggleImage(index)} // Khi click vào h2, gọi hàm toggle cho mục tương ứng
                  >
                    {item.content}
                    {/* Mũi tên sẽ xoay tùy thuộc vào trạng thái của item */}
                    {openItems[index] ? (
                      <ChevronUpIcon className="w-4 h-4 ml-2 transform transition-transform duration-300" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4 ml-2 transform transition-transform duration-300" />
                    )}
                  </h2>

                  {/* Ảnh sẽ hiển thị khi trạng thái mở của mục tương ứng là true */}
                  {openItems[index] && (
                    <img
                      src={item.image}
                      alt={item.content}
                      className="mt-4 w-full h-auto rounded transition-all duration-300"
                    />
                  )}
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]">
          <div className="bg-gray-50 rounded p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Tiện ích</h2>
            <hr className="mb-6" />
            <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Bãi đỗ xe</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Công viên</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Phòng Gym</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">HT An ninh</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Lối thoát hiểm</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Hồ bơi</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Phòng sinh hoạt</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Siêu thị</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Lễ tân</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Trường mẫu giáo</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Thang máy</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">BBQ</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Phòng xông hơi</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Phòng Yoga</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">HT Điều hòa</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Hệ thống PCCC</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Hồ bơi vô cực</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">ATM & Ngân hàng</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Vui chơi trẻ em</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Cửa hàng tiện lợi</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Coffee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]">
          <div className="rounded mt-10">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Thư viện ảnh
            </h2>
            <div className="flex flex-wrap">
              {/* Các ảnh */}
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="w-full p-2 sm:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={() => openModal(slide.image)} // Quy định số cột ở từng kích thước màn hình
                >
                  <div
                    className="w-full rounded h-64 sm:h-48 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                    }}
                  ></div>
                </div>
              ))}
              {/* Modal */}
              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div className="relative">
                    <button
                      className="absolute bg-gray-700 text-white rounded-full top-5 right-5 text-white p-2 text-3xl hover:bg-gray-600"
                      onClick={closeModal}
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                    <img
                      src={modalImage}
                      alt="Larger view"
                      className="max-w-full max-h-full object-contain rounded"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <FloatContact />
    </div>
  );
};

export default DiamondIsland;
