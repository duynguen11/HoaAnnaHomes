import { useState, useEffect } from "react";

import EatonPark1 from "../../assets/images/EatonPark/EatonPark1.jpg";
import EatonPark2 from "../../assets/images/EatonPark/EatonPark2.jpg";
import EatonPark3 from "../../assets/images/EatonPark/EatonPark3.jpg";
import EatonPark4 from "../../assets/images/EatonPark/EatonPark4.jpg";
import EatonPark5 from "../../assets/images/EatonPark/EatonPark5.jpg";
import EatonPark6 from "../../assets/images/EatonPark/EatonPark6.jpg";

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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Thông tin dự án Eaton Park ở 94A Mai Chí Thọ, Phường An Phú, Thành phố
          Thủ Đức, Thành phố Hồ Chí Minh cập nhật mới nhất tháng 12/2024 từ Hòa
          Anna Homes
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]">
          <div className="bg-gray-50 rounded p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              EATON PARK
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              94A Mai Chí Thọ, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ
              Chí Minh
            </p>
            <div
              className="w-full mx-auto rounded relative overflow-hidden h-[35vh] md:h-[50vh] lg:h-[55vh]"
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
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-4 rounded-lg">
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? slides.length - 1 : prevIndex - 1
                  )
                }
              >
                ◀
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                  )
                }
              >
                ▶
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
                src="https://via.placeholder.com/50"
                alt="Avatar"
                className="w-16 h-16 rounded-full object-cover"
              />
              <h2 className="text-xl font-semibold text-blue-900">
                Hòa Anna Homes
              </h2>
            </div>

            {/* Form nhập liệu */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Tên"
                className="w-full p-2 border rounded-md text-sm"
              />
              <input
                type="text"
                placeholder="Số điện thoại/Zalo"
                className="w-full p-2 border rounded-md text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md text-sm"
              />
              <textarea
                placeholder="Hello, I am interested in [Eaton Park]"
                className="w-full p-2 border rounded-md text-sm"
                rows="3"
              ></textarea>
              {/* Checkbox */}
              <div className="flex items-center gap-2 text-sm pt-6">
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
          <div className="bg-gray-50 rounded mt-6 p-6">
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
          <div className="bg-gray-50 rounded mt-6 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Vị trí</h2>
            <div
              className="w-full mx-auto rounded relative overflow-hidden h-[35vh] md:h-[50vh] lg:h-[55vh]"
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
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-4 rounded-lg">
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? slides.length - 1 : prevIndex - 1
                  )
                }
              >
                ◀
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                  )
                }
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
      <FloatContact />
    </div>
  );
};

export default EatonPark;
