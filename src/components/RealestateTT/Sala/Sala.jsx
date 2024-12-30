import { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

import Sala1 from "../../../assets/images/RealestateTT/Sala/Sala1.jpg";
import Sala2 from "../../../assets/images/RealestateTT/Sala/Sala2.jpg";
import Sala3 from "../../../assets/images/RealestateTT/Sala/Sala3.jpg";
import Sala4 from "../../../assets/images/RealestateTT/Sala/Sala4.jpg";
import Sala5 from "../../../assets/images/RealestateTT/Sala/Sala5.jpg";
import Sala6 from "../../../assets/images/RealestateTT/Sala/Sala6.jpg";

import Vitri1 from "../../../assets/images/RealestateTT/Sala/Vitri1.jpg";
import Vitri2 from "../../../assets/images/RealestateTT/Sala/Vitri2.jpg";

import AvatarHoa from "../../../assets/images/AvatarHoa.png";
import FloatContact from "../../../components/FloatingContact/FloatingContact";

const slides = [
  {
    id: 1,
    content: "The Sala River",
    image: Sala1,
  },
  {
    id: 2,
    content: "The Sala River",
    image: Sala2,
  },
  {
    id: 3,
    content: "The Sala River",
    image: Sala3,
  },
  {
    id: 4,
    content: "The Sala River",
    image: Sala4,
  },
  {
    id: 5,
    content: "The Sala River",
    image: Sala5,
  },
  {
    id: 6,
    content: "The Sala River",
    image: Sala6,
  },
];

const areas2 = [
  {
    id: 2,
    content: "Mặt bằng tổng thể dự án",
    image: Vitri2,
  },
];

const Sala = () => {
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
              KHU ĐÔ THỊ SALA
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Số 10 Mai Chí Thọ, An Lợi Đông, Quận 2, Hồ Chí Minh.
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
                      {slide.description || "Diện tích: 37 ha"}
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
                258,39 - 1.082,24 triệu/m²
              </h2>
              <p className="text-sm font-bold text-gray-700">CĂN HỘ</p>
            </div>
            <hr />
            <div>
              <p className="text-sm text-gray-600 my-5">
                KĐT Sala Đại Quang Minh tọa lạc ngay Đại Lộ Mai Chí Thọ, cách
                đường hầm Thủ Thiêm khoảng 550m. Dự án với tổng quy mô 227ha, dự
                án các sản phẩm như: Shophouse, biệt thự, căn hộ do Đại Quang
                Minh làm chủ đầu tư.. Dự án được bao bọc bởi 2 tuyến đường huyết
                mạch của khu đô thị Thủ Thiêm là đại lộ Đông Tây và Trục đường
                Bắc Nam (Nối cầu Thủ Thiêm 1 với cầu Thủ Thiêm 4).
              </p>
              <p className="text-sm text-gray-600 my-5">
                KĐT Đại Quang Minh có mật độ xây dựng thấp với nhiều khu cây
                xanh, công viên, đầy đủ tiện ích cao cấp như Trường học Quốc Tế,
                khu văn hóa, thể thao, khu phố thương mại, nhà hàng, rạp chiếu
                phim…
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
                      258,39 - 1.082,24 triệu/m²
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Diện tích
                    </td>
                    <td className="border border-gray-300 px-4 py-2">37 ha</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Pháp lý
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Sổ hồng sở hữu lâu dài
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Mật độ xây dựng
                    </td>
                    <td className="border border-gray-300 px-4 py-2">24%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Chủ đầu tư
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Công ty CP Đầu tư Địa ốc Đại Quang Minh
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Quy mô</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Quy mô234 căn biệt thự biệt lập sinh thái; 395 căn nhà ở
                      kết hợp thương mại (Shophouse); Khoảng 5.900 căn hộ cao
                      cấp, cao ốc văn phòng;5.000 m2 tổng diện tích sàn thương
                      mại
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
                Dự án Đại Quang Minh thuộc khu chức năng số 5 khu đô thị Thủ
                Thiêm Quận 2, Tp.HCM.
              </p>
              <p className="text-sm text-gray-600 mb-3">
                - Cách hầm Thủ Thiêm 550m <br />- Cách trung tâm tài chính Thủ
                Thiêm 1km <br />- Phía Tây Bắc: Giáp các lô 5-4, 5-5 và một phần
                Đại lộ Mai Chí Thọ <br />- Phía Đông: Giáp công viên ven rạch Cá
                Trê 2 <br />- Phía Tây: Giáp khu lâm viên sinh thái phía Nam{" "}
                <br />- Phía Đông Nam: Giáp khu lâm viên sinh thái phía Nam
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

export default Sala;
