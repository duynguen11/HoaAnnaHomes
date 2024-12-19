import { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import EatonPark1 from "../../assets/images/EatonPark/EatonPark1.jpg";
import EatonPark2 from "../../assets/images/EatonPark/EatonPark2.jpg";
import EatonPark3 from "../../assets/images/EatonPark/EatonPark3.jpg";
import EatonPark4 from "../../assets/images/EatonPark/EatonPark4.jpg";
import EatonPark5 from "../../assets/images/EatonPark/EatonPark5.jpg";
import EatonPark6 from "../../assets/images/EatonPark/EatonPark6.jpg";
import EatonPark7 from "../../assets/images/EatonPark/EatonPark7.jpg";
import EatonPark8 from "../../assets/images/EatonPark/EatonPark8.jpg";
import EatonPark9 from "../../assets/images/EatonPark/EatonPark9.jpg";
import EatonPark10 from "../../assets/images/EatonPark/EatonPark10.jpg";
import EatonPark11 from "../../assets/images/EatonPark/EatonPark11.jpg";
import EatonPark12 from "../../assets/images/EatonPark/EatonPark12.jpg";

import Vitri1 from "../../assets/images/EatonPark/Vitri1.jpg";
import Vitri2 from "../../assets/images/EatonPark/Vitri2.jpg";
import Vitri3 from "../../assets/images/EatonPark/Vitri3.jpg";
import Vitri4 from "../../assets/images/EatonPark/Vitri4.jpg";
import Vitri5 from "../../assets/images/EatonPark/Vitri5.jpg";
import Vitri6 from "../../assets/images/EatonPark/Vitri6.jpg";
import Vitri7 from "../../assets/images/EatonPark/Vitri7.jpg";
import Vitri8 from "../../assets/images/EatonPark/Vitri8.jpg";
import Vitri9 from "../../assets/images/EatonPark/Vitri9.jpg";
import Vitri10 from "../../assets/images/EatonPark/Vitri10.jpg";
import Vitri11 from "../../assets/images/EatonPark/Vitri11.jpg";

import AvatarHoa from "../../assets/images/EatonPark/AvatarHoa.png";
import { CheckIcon } from "@heroicons/react/20/solid";
import FloatContact from "../../components/FloatingContact/FloatingContact";

const EatonPark = () => {
  const slides = [
    {
      id: 1,
      content: "Slide 1",
      image: EatonPark1,
    },
    {
      id: 2,
      content: "Slide 2",
      image: EatonPark2,
    },
    {
      id: 3,
      content: "Slide 3",
      image: EatonPark3,
    },
    {
      id: 4,
      content: "Slide 4",
      image: EatonPark4,
    },
    {
      id: 5,
      content: "Slide 5",
      image: EatonPark5,
    },
    {
      id: 6,
      content: "Slide 6",
      image: EatonPark6,
    },
    {
      id: 7,
      content: "Slide 7",
      image: EatonPark7,
    },
    {
      id: 8,
      content: "Slide 8",
      image: EatonPark8,
    },
    {
      id: 9,
      content: "Slide 9",
      image: EatonPark9,
    },
    {
      id: 10,
      content: "Slide 10",
      image: EatonPark10,
    },
    {
      id: 11,
      content: "Slide 11",
      image: EatonPark11,
    },
    {
      id: 12,
      content: "Slide 12",
      image: EatonPark12,
    },
  ];
  const areas = [
    {
      id: 1,
      content: "Slide 1",
      image: Vitri1,
    },
    {
      id: 2,
      content: "Slide 2",
      image: Vitri2,
    },
    {
      id: 3,
      content: "Slide 3",
      image: Vitri3,
    },
    {
      id: 4,
      content: "Slide 4",
      image: Vitri4,
    },
    {
      id: 5,
      content: "Slide 5",
      image: Vitri5,
    },
    {
      id: 6,
      content: "Slide 6",
      image: Vitri6,
    },
    {
      id: 7,
      content: "Slide 7",
      image: Vitri7,
    },
    {
      id: 8,
      content: "Slide 8",
      image: Vitri8,
    },
    {
      id: 9,
      content: "Slide 9",
      image: Vitri9,
    },
    {
      id: 10,
      content: "Slide 10",
      image: Vitri10,
    },
    {
      id: 11,
      content: "Slide 11",
      image: Vitri11,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Điều khiển mở modal
  const [modalImage, setModalImage] = useState(null);

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
    <div className="py-6 px-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-blue-900 my-6">
          Thông tin dự án Eaton Park ở 94A Mai Chí Thọ, Phường An Phú, Thành phố
          Thủ Đức, Thành phố Hồ Chí Minh cập nhật mới nhất tháng 12/2024 từ Hòa
          Anna Homes
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]">
          <div className="rounded my-4">
            <h2 className="text-xl font-bold text-blue-900 mb-2">EATON PARK</h2>
            <p className="text-sm text-gray-600 mb-3">
              94A Mai Chí Thọ, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ
              Chí Minh
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
                    <h2 className="text-lg md:text-2xl lg:text-4xl font-bold">
                      {slide.content}
                    </h2>
                    <p className="text-sm md:text-base">
                      {slide.description || "Mô tả chi tiết cho ảnh này."}
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
            <div className="flex justify-between items-center mt-3">
              <h2 className="text-xl font-bold text-blue-900">
                5,80 tỷ - 89 tỷ
              </h2>
              <p className="text-sm text-gray-500">CĂN HỘ</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={AvatarHoa}
                alt="Avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
              <h2 className="text-xl font-semibold text-blue-900">
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
              <div className="flex items-center gap-2 text-sm pt-3">
                <input type="checkbox" id="agree" className="rounded" />
                <label htmlFor="agree">
                  Đồng ý với{" "}
                  <a href="#" className="text-blue-600 underline">
                    điều khoản bảo mật thông tin
                  </a>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="p-2 bg-blue-100 text-sm text-blue-600 rounded-full">
                  Gọi ngay
                </button>
                <button className="p-2 bg-blue-600 text-sm text-white rounded-full">
                  Gửi thông tin
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]">
          <div className="bg-gray-50 rounded mt-10 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Tổng quan</h2>
            <hr className="mb-6" />
            <div className="flex space-x-6">
              {/* Cột bên trái */}
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Tên dự án
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Chủ đầu tư
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Diện tích đất
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Loại hình sản phẩm
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Số toà
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Chiều cao
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Tổng số sản phẩm
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Diện tích trung bình
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Năm bàn giao
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  Tiêu chuẩn bàn giao
                </p>
              </div>
              {/* Cột bên phải */}
              <div className="flex-1">
                <p className="text-sm text-gray-700 mb-3">Eaton Park</p>
                <p className="text-sm text-gray-700 mb-3">Gamuda Land</p>
                <p className="text-sm text-gray-700 mb-3">3,76 hecta</p>
                <p className="text-sm text-gray-700 mb-3">Căn hộ</p>
                <p className="text-sm text-gray-700 mb-3">6</p>
                <p className="text-sm text-gray-700 mb-3">39</p>
                <p className="text-sm text-gray-700 mb-3">1968</p>
                <p className="text-sm text-gray-700 mb-3">45 - 145 m2</p>
                <p className="text-sm text-gray-700 mb-3">2026</p>
                <p className="text-sm text-gray-700">Cơ bản</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]">
          <div className="rounded py-6">
            <h2 className="text-xl font-bold text-gray-800">
              Vị trí mặt bằng
            </h2>
            <div
              className="w-full mx-auto rounded relative overflow-hidden h-[50vh] md:h-[55vh] lg:h-[70vh]"
              onMouseEnter={() => setIsPaused(true)} // Tạm dừng khi hover
              onMouseLeave={() => setIsPaused(false)}
            >
              {areas.map((area, index) => (
                <div
                  key={area.id}
                  className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                    index === currentIndex
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                  style={{
                    backgroundImage: `url(${area.image})`,
                    backgroundSize: "contain", // Ensures the image is fully visible and scaled
                    backgroundPosition: "center", // Centers the image
                    backgroundRepeat: "no-repeat", // Prevents tiling
                    width: "100%", // Set width to 100% of the parent container
                    height: "100%", // Adjust height as needed
                  }}
                ></div>
              ))}
              <button
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? areas.length - 1 : prevIndex - 1
                  )
                }
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === areas.length - 1 ? 0 : prevIndex + 1
                  )
                }
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]">
          <div className="bg-gray-50 rounded p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Tiện ích</h2>
            <hr className="mb-6" />
            <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Hồ bơi tiêu chuẩn hạng sang
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Khu chiêm nghưỡng phong cảnh
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Khu vui chơi trẻ em</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Sân cỏ đi bộ</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Khu BBQ</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Khu đọc sách ngoài trời
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Khu chiếu phim ngoài trời
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Khu tập thể dục ngoài trời
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Hồ bơi Trẻ em</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Hồ Jacuzzi</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Sảnh thiền và yoga</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Phòng Gym</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Đường chạy bộ trên cao
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Thư viện đọc sách</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Khu bóng đá/Khu bóng rổ
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Suối nước phong thủy</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Khu thảo mộc</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Khu thực tế ảo</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Thác nước</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Vườn treo</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">Khu sinh hoạt cư dân</p>
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
                  className="w-full sm:w-1/2 lg:w-1/3 p-1 transition-transform transform hover:scale-105 cursor-pointer"
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

export default EatonPark;
