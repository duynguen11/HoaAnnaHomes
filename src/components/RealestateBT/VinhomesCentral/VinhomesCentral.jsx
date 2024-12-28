import { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

import Central1 from "../../../assets/images/RealestateBT/VinhomesCentral/Central1.jpg";
import Central2 from "../../../assets/images/RealestateBT/VinhomesCentral/Central2.jpg";
import Central3 from "../../../assets/images/RealestateBT/VinhomesCentral/Central3.jpg";
import Central4 from "../../../assets/images/RealestateBT/VinhomesCentral/Central4.jpg";
import Central5 from "../../../assets/images/RealestateBT/VinhomesCentral/Central5.jpg";
import Central6 from "../../../assets/images/RealestateBT/VinhomesCentral/Central6.jpg";

import Vitri1 from "../../../assets/images/RealestateBT/VinhomesCentral/Vitri1.jpg";
import Vitri2 from "../../../assets/images/RealestateBT/VinhomesCentral/Vitri2.jpg";
import Vitri3 from "../../../assets/images/RealestateBT/VinhomesCentral/Vitri3.jpg";
import Vitri4 from "../../../assets/images/RealestateBT/VinhomesCentral/Vitri4.jpg";
import Vitri5 from "../../../assets/images/RealestateBT/VinhomesCentral/Vitri5.jpg";
import Vitri6 from "../../../assets/images/RealestateBT/VinhomesCentral/Vitri6.jpg";
import Vitri7 from "../../../assets/images/RealestateBT/VinhomesCentral/Vitri7.jpg";
import Vitri8 from "../../../assets/images/RealestateBT/VinhomesCentral/Vitri8.jpg";
import Vitri9 from "../../../assets/images/RealestateBT/VinhomesCentral/Vitri9.jpg";
import Vitri10 from "../../../assets/images/RealestateBT/VinhomesCentral/Vitri10.jpg";
import Vitri11 from "../../../assets/images/RealestateBT/VinhomesCentral/Vitri11.jpg";
import Vitri12 from "../../../assets/images/RealestateBT/VinhomesCentral/Vitri12.jpg";
import Vitri13 from "../../../assets/images/RealestateBT/VinhomesCentral/Vitri13.jpg";

import AvatarHoa from "../../../assets/images/AvatarHoa.png";
import FloatContact from "../../../components/FloatingContact/FloatingContact";

const slides = [
  {
    id: 1,
    content: "Vinhomes Central Park",
    image: Central1,
  },
  {
    id: 2,
    content: "Vinhomes Central Park",
    image: Central2,
  },
  {
    id: 3,
    content: "Vinhomes Central Park",
    image: Central3,
  },
  {
    id: 4,
    content: "Vinhomes Central Park",
    image: Central4,
  },
  {
    id: 5,
    content: "Vinhomes Central Park",
    image: Central5,
  },
  {
    id: 6,
    content: "Vinhomes Central Park",
    image: Central6,
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
    content: "Mặt bằng điển hình căn hộ 01",
    image: Vitri2,
  },
  {
    id: 3,
    content: "Mặt bằng điển hình căn hộ 02",
    image: Vitri3,
  },
  {
    id: 4,
    content: "Mặt bằng điển hình căn hộ 03",
    image: Vitri4,
  },
  {
    id: 5,
    content: "Mặt bằng điển hình căn hộ 04",
    image: Vitri5,
  },
  {
    id: 6,
    content: "Mặt bằng điển hình căn hộ 05",
    image: Vitri6,
  },
  {
    id: 7,
    content: "Mặt bằng điển hình căn hộ 06",
    image: Vitri7,
  },
  {
    id: 8,
    content: "Mặt bằng điển hình căn hộ 07",
    image: Vitri8,
  },
  {
    id: 9,
    content: "Mặt bằng điển hình căn hộ 08",
    image: Vitri9,
  },
  {
    id: 10,
    content: "Mặt bằng điển hình căn hộ 09",
    image: Vitri10,
  },
  {
    id: 11,
    content: "Mặt bằng điển hình căn hộ 10",
    image: Vitri11,
  },
  {
    id: 12,
    content: "Mặt bằng điển hình căn hộ 11",
    image: Vitri12,
  },
];

const VinhomesCentral = () => {
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
              VINHOMES CENTRAL PARK
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Đường Điện Biên Phủ, Phường 22, Bình Thạnh, Hồ Chí Minh.
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
                      {slide.description || "Diện tích: 43,9 ha"}
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
                81,33 - 852,73 triệu/ m2
              </h2>
              <p className="text-sm font-bold text-gray-700">13000 CĂN HỘ</p>
            </div>
            <hr />
            <div>
              <p className="text-sm text-gray-600 my-5">
                Vinhomes Central Park (tên cũ Vinhomes Tân Cảng) là dự án căn hộ
                chung cư và biệt thự nằm trên đường Nguyễn Hữu Cảnh, quận Bình
                Thạnh, TP.HCM. Dự án do tập đoàn VinGroup đầu tư và phát triển
                trên khu đất diện tích 43,91ha trải dài theo bờ sông Sài Gòn.
              </p>
              <p className="text-sm text-gray-600 mb-5">
                Lấy cảm hứng từ khu công viên Central Park nổi tiếng tại thành
                phố New York của Mỹ, dự án Vinhomes Central Park được xem là khu
                đô thị - công viên hiện đại tại trung tâm TPHCM, đồng thời là
                nơi an cư lý tưởng nhờ môi trường sống trong lành, thoáng mát
                bên bờ sông Sài Gòn.
              </p>
              <p className="text-sm text-gray-600">
                Toàn bộ dự án đã hoàn thành và bàn giao trong năm 2018. Tất cả
                các căn hộ đều đã có sổ hồng sở hữu lâu dài.
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
                      81,33 - 852,73 triệu/m²
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Diện tích
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      43,91 ha
                    </td>
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
                      Số căn hộ
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      13000 căn
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Quy mô</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Gồm 18 Block và gần 80 căn biệt thự đơn lập và song lập
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Thời điểm hoàn thành
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Năm 2018
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Đơn vị thi công
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Sổ hồng sở hữu lâu dài
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Chủ đầu tư
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Tập đoàn Vingroup
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
                Dự án Vinhomes Central Park nằm tại địa chỉ số 208 Nguyễn Hữu
                Cảnh, phường 22, quận Bình Thạnh, TP.HCM. Đây là một trong những
                vị trí đẹp tại thành phố Hồ Chí Minh, khi vừa ôm trọn hơn 1 km
                mặt sông Sài Gòn, thừa hưởng trọn vẹn khí hậu trong lành từ mặt
                nước, vừa nằm tiếp giáp với các tuyến đường lớn Nguyễn Hữu Cảnh,
                Điện Biên Phủ, Ung Văn Khiêm, dễ dàng kết nối trung tâm và nhiều
                khu vực trọng điểm của thành phố.
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Hiện tại, khu đô thị Vinhomes Central Park đang có tất cả 3 cổng
                vào, trong đó có 2 cổng vào từ đường Nguyễn Hữu Cảnh và 1 cổng
                vào từ đường ven sông Sài Gòn nối giữa đường Trần Trọng Kim &
                Ung Văn Khiêm.
              </p>
              <img src={Vitri13} alt="" className="w-full h-auto rounded" />
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

export default VinhomesCentral;