import { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

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
import Vitri12 from "../../assets/images/EatonPark/Vitri12.jpg";
import Vitri13 from "../../assets/images/EatonPark/Vitri13.jpg";

import AvatarHoa from "../../assets/images/AvatarHoa.png";
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
      content: "",
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
  const areas2 = [
    {
      id: 1,
      content: "Mặt bằng tổng thể dự án",
      image: Vitri2,
    },
    {
      id: 2,
      content: "Mặt bằng điển hình Toà A5",
      image: Vitri3,
    },
    {
      id: 3,
      content: "Mặt bằng điển hình căn hộ 1PN",
      image: Vitri4,
    },
    {
      id: 4,
      content: "Mặt bằng điển hình căn hộ 2PN",
      image: Vitri5,
    },
    {
      id: 5,
      content: "Mặt bằng điển hình căn hộ 3PN",
      image: Vitri6,
    },
    {
      id: 6,
      content: "Mặt bằng điển hình Toà A6",
      image: Vitri7,
    },
    {
      id: 7,
      content: "Mặt bằng điển hình căn hộ 1PN",
      image: Vitri8,
    },
    {
      id: 8,
      content: "Mặt bằng điển hình căn hộ 2PN",
      image: Vitri9,
    },
    {
      id: 9,
      content: "Mặt bằng điển hình căn hộ 3PN",
      image: Vitri10,
    },
    {
      id: 10,
      content: "Mặt bằng điển hình căn hộ Penthouse",
      image: Vitri11,
    },
    {
      id: 11,
      content: "Mặt bằng điển hình căn hộ Penthouse",
      image: Vitri12,
    },
    {
      id: 12,
      content: "Mặt bằng điển hình căn hộ Penthouse",
      image: Vitri13,
    },
  ];

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
            <div className="flex justify-between items-center my-3">
              <h2 className="text-xl font-bold text-blue-900">
                5,80 tỷ - 89 tỷ (120 - 180 triệu/ m2)
              </h2>
              <p className="text-sm font-bold text-gray-700">CĂN HỘ</p>
            </div>
            <hr />
            <div>
              <p className="text-sm text-gray-600 my-5">
                Dự án Eaton Park là một dự án siêu phẩm thành phố Thủ Đức tại
                trái tim của Sài Gòn. Nơi phát triển mạnh mẽ nhất lúc này. Một
                dự án có căn hộ cao cấp với quy mô 3.68 hecta.
              </p>
              <p className="text-sm text-gray-600">
                Eaton Park là dự án Căn hộ chung cư cao cấp, được phát triển bởi
                tập đoàn Gamuda Land. Tọa lạc tại vị trí mặt tiền Mai Chí Thọ,
                Phường An Phú, Eaton Park là thừa hưởng sự kết nối đắc địa vào
                trung tâm TP. HCM và ra Khu đông TP. Thủ Đức, dự án hứa hẹn sẽ
                đem lại sự tiện lợi và tiện ích trọn vẹn cho gia chủ về một cuộc
                sống ấm áp, hiện đại và tiện nghi.
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
                      Eaton Park
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Vị trí dự án
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      94A Mai Chí Thọ, Phường An Phú, Thành phố Thủ Đức (Quận 2
                      cũ), TP.HCM
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Chủ đầu tư
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Gamuda Land
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Đơn vị phát triển dự án
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Tập đoàn Gamuda Land – Malaysia
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Đơn vị thi công
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Nhà thầu The Contractor Founteach
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Thiết kế kiến trúc
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Công Ty TNHH AG INGO
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Đơn vị Tư vấn thiết kế Dân dụng & Kết cấu (C&S)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      TWAsia Consultants Co., Ltd
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Đơn vị Tư vấn thiết kế M&E
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Công Ty TNHH Tư Vấn Thiết Kế ASP
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Đơn vị thiết kế cảnh quan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Công Ty TNHH LJ Group
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Quy mô dự án
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      3,68 ha
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Mật độ xây dựng
                    </td>
                    <td className="border border-gray-300 px-4 py-2">40%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Dự án 2 Khối công trình
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Khu 1, Khu 2
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Tổng số tháp căn hộ
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      6 tháp – A1, A2, A3, A4, A5, A6
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Tổng số lượng sản phẩm
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      1.968 căn hộ, 12 căn penthouse & 51 căn Shop khối đế và 21
                      căn shophouse
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Số tầng hầm
                    </td>
                    <td className="border border-gray-300 px-4 py-2">02 hầm</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Shophouse thương mại
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Tầng 1-2 (17 căn)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Khối tháp cao
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      27 - 39 tầng
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Phân Khu 1 (K1)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Gồm 4 tháp (A1, A2, A3, A4):
                      <ul className="list-disc pl-5">
                        <li>Tầng 1-2: 15 shophouse</li>
                        <li>Tháp A1 (tòa): 38 tầng, 338 căn hộ (9 căn/tầng)</li>
                        <li>
                          Tháp A2 (tòa): 29 tầng, 276 căn hộ (10 căn/tầng)
                        </li>
                        <li>
                          Tháp A3 (tòa): 29 tầng, 347 căn hộ (13 căn/tầng)
                        </li>
                        <li>Tháp A4 (tòa): 39 tầng, 347 căn hộ (9 căn/tầng)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Phân Khu 2 (K2)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Gồm 2 tháp (A5, A6):
                      <ul className="list-disc pl-5">
                        <li>Tầng 1-2: 5 shophouse</li>
                        <li>Tháp (tòa) A5: 39 tầng, 346 căn hộ (9 căn/tầng)</li>
                        <li>Tháp (tòa) A6: 37 tầng, 326 căn hộ (9 căn/tầng)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Dự kiến bàn giao
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Quý 4/2026
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Pháp lý dự án
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Full pháp lý & Sổ hồng sở hữu lâu dài
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
                    Hồ bơi tiêu chuẩn hạng sang
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Khu chiêm nghưỡng phong cảnh
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Khu vui chơi trẻ em</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Sân cỏ đi bộ</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Khu BBQ</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Khu đọc sách ngoài trời
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Khu chiếu phim ngoài trời
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Khu tập thể dục ngoài trời
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Hồ bơi Trẻ em</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Hồ Jacuzzi</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Sảnh thiền và yoga</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Phòng Gym</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Đường chạy bộ trên cao
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Thư viện đọc sách</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Khu bóng đá/Khu bóng rổ
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Suối nước phong thủy</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Khu thảo mộc</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Khu thực tế ảo</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Thác nước</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Vườn treo</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
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

export default EatonPark;
