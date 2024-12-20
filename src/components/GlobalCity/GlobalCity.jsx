import { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

import FloatContact from "../../components/FloatingContact/FloatingContact";

import AvatarHoa from "../../assets/images/AvatarHoa.png";

import GlobalCity1 from "../../assets/images/GlobalCity/GlobalCity1.jpg";
import GlobalCity2 from "../../assets/images/GlobalCity/GlobalCity2.jpg";
import GlobalCity3 from "../../assets/images/GlobalCity/GlobalCity3.jpg";
import GlobalCity4 from "../../assets/images/GlobalCity/GlobalCity4.jpg";
import GlobalCity5 from "../../assets/images/GlobalCity/GlobalCity5.jpg";
import GlobalCity6 from "../../assets/images/GlobalCity/GlobalCity6.jpg";
import GlobalCity7 from "../../assets/images/GlobalCity/GlobalCity7.jpg";
import GlobalCity8 from "../../assets/images/GlobalCity/GlobalCity8.jpg";
import GlobalCity9 from "../../assets/images/GlobalCity/GlobalCity9.jpg";
import GlobalCity10 from "../../assets/images/GlobalCity/GlobalCity10.jpg";
import GlobalCity11 from "../../assets/images/GlobalCity/GlobalCity11.jpg";
import GlobalCity12 from "../../assets/images/GlobalCity/GlobalCity12.jpg";

import Vitri1 from "../../assets/images/GlobalCity/Vitri1.jpg";
import Vitri2 from "../../assets/images/GlobalCity/Vitri2.jpg";
import Vitri3 from "../../assets/images/GlobalCity/Vitri3.jpg";
import Vitri4 from "../../assets/images/GlobalCity/Vitri4.jpg";
import Vitri5 from "../../assets/images/GlobalCity/Vitri5.jpg";
import Vitri6 from "../../assets/images/GlobalCity/Vitri6.jpg";
import Vitri7 from "../../assets/images/GlobalCity/Vitri7.jpg";
import Vitri8 from "../../assets/images/GlobalCity/Vitri8.jpg";
import Vitri9 from "../../assets/images/GlobalCity/Vitri9.jpg";
import Vitri10 from "../../assets/images/GlobalCity/Vitri10.jpg";
import Vitri11 from "../../assets/images/GlobalCity/Vitri11.jpg";

const GlobalCity = () => {
  const slides = [
    {
      id: 1,
      content: "Slide 1",
      image: GlobalCity1,
    },
    {
      id: 2,
      content: "Slide 2",
      image: GlobalCity2,
    },
    {
      id: 3,
      content: "Slide 3",
      image: GlobalCity3,
    },
    {
      id: 4,
      content: "Slide 4",
      image: GlobalCity4,
    },
    {
      id: 5,
      content: "Slide 5",
      image: GlobalCity5,
    },
    {
      id: 6,
      content: "Slide 6",
      image: GlobalCity6,
    },
    {
      id: 7,
      content: "Slide 7",
      image: GlobalCity7,
    },
    {
      id: 8,
      content: "Slide 8",
      image: GlobalCity8,
    },
    {
      id: 9,
      content: "Slide 9",
      image: GlobalCity9,
    },
    {
      id: 10,
      content: "Slide 10",
      image: GlobalCity10,
    },
    {
      id: 11,
      content: "Slide 11",
      image: GlobalCity11,
    },
    {
      id: 12,
      content: "Slide 12",
      image: GlobalCity12,
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
      content: "Slide 5",
      image: Vitri6,
    },
    {
      id: 7,
      content: "Slide 5",
      image: Vitri7,
    },
    {
      id: 8,
      content: "Slide 5",
      image: Vitri8,
    },
    {
      id: 9,
      content: "Slide 5",
      image: Vitri9,
    },
    {
      id: 10,
      content: "Slide 5",
      image: Vitri10,
    },
    {
      id: 11,
      content: "Slide 5",
      image: Vitri11,
    },
  ];

  const areas2 = [
    {
      id: 1,
      content: "Mặt bằng tổng thể dự án",
      image: Vitri2,
    },
    {
      id: 2,
      content: "Sơ đồ các phân khu theo sản phẩm",
      image: Vitri3,
    },
    {
      id: 3,
      content: "Mặt bằng nhà phố Soho loại 1D",
      image: Vitri4,
    },
    {
      id: 4,
      content: "Mặt bằng nhà phố Soho loại 1C",
      image: Vitri5,
    },
    {
      id: 5,
      content: "Mặt bằng nhà phố Soho loại 1B",
      image: Vitri6,
    },
    {
      id: 6,
      content: "Mặt bằng nhà phố Soho loại 1A",
      image: Vitri7,
    },
    {
      id: 7,
      content: "Mặt bằng nhà phố Soho loại 2A",
      image: Vitri8,
    },
    {
      id: 8,
      content: "Mặt bằng nhà phố Soho loại 3A",
      image: Vitri9,
    },
    {
      id: 9,
      content: "Mặt bằng nhà phố Soho loại 3C",
      image: Vitri10,
    },
    {
      id: 10,
      content: "Mặt bằng nhà phố Soho loại 4A",
      image: Vitri11,
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Điều khiển mở modal
  const [openItems, setOpenItems] = useState(Array(areas2.length).fill(false));

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
        <h2 className="text-xl font-bold text-blue-900 my-6">
          Thông tin dự án Khu Đô Thị The Global City ở Đỗ Xuân Hợp, Phường An
          Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh cập nhật mới nhất tháng
          12/2024 từ Hoà Anna Homes.
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]">
          <div className="rounded my-4">
            <h2 className="text-xl font-bold text-blue-900 mb-2">
              THE GLOBAL CITY
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Đỗ Xuân Hợp, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí
              Minh
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
            <div className="flex justify-between items-center my-3">
              <h2 className="text-xl font-bold text-blue-900">
                5,50 tỷ - 68 tỷ
              </h2>
              <p className="text-sm font-bold text-gray-700">
                CĂN HỘ, BIÊT THỰ, NHÀ PHỐ & KHU ĐÔ THỊ
              </p>
            </div>
            <hr />
            <div>
              <p className="text-sm text-gray-600 my-5">
                Global City “Downtown” nổi lên như ngọn hải đăng của sự tinh tế
                đô thị, hòa quyện các biểu tượng Đông Nam Á với trải nghiệm sống
                quốc tế để tạo nên một khu đô thị mang tính biểu tượng ở trung
                tâm Đông Nam Á. Với sự chú ý tỉ mỉ đến từng chi tiết và cam kết
                về tính bền vững, Thành phố Toàn cầu mang đến cho cư dân một
                phong cách sống tuyệt vời tương đương với tiêu chuẩn của các
                điểm đến nổi tiếng toàn cầu như Dubai Downtown hay Marina Bay
                Sands.
              </p>
              <p className="text-sm text-gray-600">
                Tọa lạc ở vị trí đắc địa, mặt tiền Đỗ Xuân Hợp và cao tốc TP.HCM
                - Long Thành - Dầu Giây, giáp sông Rạch Chiếc đẹp như tranh vẽ,
                The Global City sở hữu quy hoạch tổng thể bao gồm nhiều loại
                hình nhà ở đa dạng. tùy chọn. Từ 1.800 căn Shophouse, nhà phố
                SOHO đến nhà phố Dining Square và biệt thự sang trọng, cùng hơn
                8.000 căn hộ hạng A tại phân khu cao tầng Canal Walk, cư dân có
                thể lựa chọn không gian sống đa dạng phù hợp với sở thích và nhu
                cầu của mình.
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
                    <td className="border border-gray-300 px-4 py-2">
                      Tên dự án
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Downtown The Global City
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Vị trí</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Đường Đỗ Xuân Hợp, Phường An Phú, Thành phố Thủ Đức, TP.
                      HCM
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Chủ đầu tư
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Masterise Homes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Tổng thầu xây dựng
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Tung Feng
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Thầu phụ
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Central, An Phong
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Đơn vị giám sát
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Artelia
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Thiết kế kiến trúc
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Foster and Partners (Anh)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Thiết kế cảnh quan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">WATG</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Đơn vị quản lý vận hành
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Masterise Property Management
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Quy mô</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc pl-5">
                        <li>117ha (6 giai đoạn)</li>
                        <li>Phase 1: Khu Soho – 925 căn</li>
                        <li>Phase 2: Khu Dinners Square – 487 căn</li>
                        <li>Phase 3: Khu Waterfront Park – 426</li>
                        <li>Phase 4: Căn hộ cao tầng</li>
                        <li>Phase 5: Căn hộ cao tầng</li>
                        <li>Phase 6: Căn hộ cao tầng</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Tổng số lượng thấp tầng
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      1.828 căn + 22 villa
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Tổng số lượng cao tầng
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      8.000 căn (18 tòa)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Mật độ xây dựng
                    </td>
                    <td className="border border-gray-300 px-4 py-2">28%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Hình thức bàn giao
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc pl-5">
                        <li>Nhà phố – Hoàn thiện ngoài, thô bên trong</li>
                        <li>Căn hộ – Hoàn thiện cơ bản cao cấp</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Khởi công - Bàn giao
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc pl-5">
                        <li>Tiện ích năm 2021 - 2026</li>
                        <li>Nhà phố năm 2022 - 2023</li>
                        <li>Căn hộ năm 2024 - 2026</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Dự kiến hoàn thành toàn khu
                    </td>
                    <td className="border border-gray-300 px-4 py-2">2028</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Các đối tác uy tín thực hiện triển khai khu downtown The
                      Global City
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc pl-5">
                        <li>Đơn vị Thiết kế: Foster and Partner từ nước Anh</li>
                        <li>Chủ đầu tư: Masterise Homes</li>
                        <li>Ngân hàng tài trợ: Techcombank</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Pháp lý
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Sở hữu lâu dài cho người Việt Nam và 50 năm với người nước
                      ngoài
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
            <h2 className="text-xl font-bold text-gray-800 ml-2">
              Vị trí mặt bằng
            </h2>
            <div
              className="w-full mx-auto rounded relative overflow-hidden h-[50vh] md:h-[55vh] lg:h-[70vh] py-4"
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
                  <p className="text-sm text-gray-700">
                    Khu trung tâm thương mại hạng A
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Nhạc nước hiện đại lớn nhất Đông Nam Á
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Hệ thống trường học và bệnh viện Quốc tế
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Gần 13 ha diện tích mảng xanh
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Khu vui chơi trẻ em</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Công viên ven sông</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Cung đường lễ hội Festive Boulevard
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Khu vui chơi giải trí</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Cảnh quan cộng đồng</p>
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
    </div>
  );
};

export default GlobalCity;
