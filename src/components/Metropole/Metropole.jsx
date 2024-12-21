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

import Metropole1 from "../../assets/images/Metropole/Metropole1.jpg";
import Metropole2 from "../../assets/images/Metropole/Metropole2.jpg";
import Metropole3 from "../../assets/images/Metropole/Metropole3.jpg";
import Metropole4 from "../../assets/images/Metropole/Metropole4.jpg";
import Metropole5 from "../../assets/images/Metropole/Metropole5.jpg";
import Metropole6 from "../../assets/images/Metropole/Metropole6.jpg";
import Metropole7 from "../../assets/images/Metropole/Metropole7.jpg";
import Metropole8 from "../../assets/images/Metropole/Metropole8.jpg";
import Metropole9 from "../../assets/images/Metropole/Metropole9.jpg";
import Metropole10 from "../../assets/images/Metropole/Metropole10.jpg";
import Metropole11 from "../../assets/images/Metropole/Metropole11.jpg";
import Metropole12 from "../../assets/images/Metropole/Metropole12.jpg";

import Vitri1 from "../../assets/images/Metropole/Vitri1.jpg";
import Vitri2 from "../../assets/images/Metropole/Vitri2.jpg";
import Vitri3 from "../../assets/images/Metropole/Vitri3.jpg";
import Vitri4 from "../../assets/images/Metropole/Vitri4.png";
import Vitri5 from "../../assets/images/Metropole/Vitri5.png";
import Vitri6 from "../../assets/images/Metropole/Vitri6.png";
import Vitri7 from "../../assets/images/Metropole/Vitri7.png";

const Metropole = () => {
  const slides = [
    {
      id: 1,
      content: "Slide 1",
      image: Metropole1,
    },
    {
      id: 2,
      content: "Slide 2",
      image: Metropole2,
    },
    {
      id: 3,
      content: "Slide 3",
      image: Metropole3,
    },
    {
      id: 4,
      content: "Slide 4",
      image: Metropole4,
    },
    {
      id: 5,
      content: "Slide 5",
      image: Metropole5,
    },
    {
      id: 6,
      content: "Slide 6",
      image: Metropole6,
    },
    {
      id: 7,
      content: "Slide 7",
      image: Metropole7,
    },
    {
      id: 8,
      content: "Slide 8",
      image: Metropole8,
    },
    {
      id: 9,
      content: "Slide 9",
      image: Metropole9,
    },
    {
      id: 10,
      content: "Slide 10",
      image: Metropole10,
    },
    {
      id: 11,
      content: "Slide 11",
      image: Metropole11,
    },
    {
      id: 12,
      content: "Slide 12",
      image: Metropole12,
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
  ];

  const areas2 = [
    {
      id: 1,
      content: "Mặt bằng tổng thể dự án",
      image: Vitri2,
    },
    {
      id: 2,
      content: "Mặt bằng tiện ích",
      image: Vitri3,
    },
    {
      id: 3,
      content: "Mặt bằng căn hộ 1PN",
      image: Vitri4,
    },
    {
      id: 4,
      content: "Mặt bằng căn hộ 2PN",
      image: Vitri5,
    },
    {
      id: 5,
      content: "Mặt bằng căn hộ 3PN",
      image: Vitri6,
    },
    {
      id: 6,
      content: "Mặt bằng căn hộ 4PN",
      image: Vitri7,
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
        <h2 className="text-justify text-xl font-bold text-blue-900 my-6">
          Thông tin dự án The OpusK Metropole ở Trần Bạch Đằng, Phường An Khánh,
          Thành phố Thủ Đức, Thành phố Hồ Chí Minh cập nhật mới nhất tháng
          12/2024 từ Hoà Anna Homes.
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]">
          <div className="rounded my-4">
            <h2 className="text-xl font-bold text-blue-900 mb-2">
              THE OPUSK METROPOLE
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Trần Bạch Đằng, Phường An Khánh, Thành phố Thủ Đức, Thành phố Hồ
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
                6,50 tỷ - 61 tỷ
              </h2>
              <p className="text-sm font-bold text-gray-700">
                CĂN HỘ, SHOPHOUSE
              </p>
            </div>
            <hr />
            <div>
              <p className="text-justify text-sm text-gray-600 my-5">
                Kiến tạo chuẩn mực cho cuộc sống phồn vinh, The OpusK là kiệt
                tác nghệ thuật giữa lòng thành phố. Vươn lên giữa khoảng trời
                nơi Thủ Thiêm tấp nập, The OpusK Metropole đại diện cho những
                giá trị sống đặc sắc nhất của phố thị đương đại.
              </p>
              <p className="text-justify text-sm text-gray-600">
                Là điểm nhấn cuối cùng của dự án The Metropole, The OPUSK mang
                đến một không gian sống thượng lưu với bộ sưu tập 190 căn hộ,
                một trong những vị trí đắt giá nhất của thành phố Hồ Chí Minh.
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
                      The OpusK Residence
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Vị trí</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Lô 1.14 khu chức năng số 1 Thủ Thiêm, P. An Khánh, TP. Thủ
                      Đức
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Chủ đầu tư
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Sonkim Land
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Đối tác phát triển dự án
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc pl-5">
                        <li>Đơn vị phát triển: Sonkim Land</li>
                        <li>Chủ đầu tư: Quốc Lộc Phát</li>
                        <li>
                          Thiết kế kiến trúc và Quy hoạch tổng thể: DP
                          Architects Pte. Ltd, Singapore
                        </li>
                        <li>Thiết kế nội thất: Công ty ID Dept Singapore</li>
                        <li>
                          Thiết kế cảnh quan: Công ty Site Concepts
                          International, USA & Philippines
                        </li>
                        <li>
                          Thiết kế cơ điện: Công ty J.Roger Preston Vietnam co.
                          Ltd, Singapore
                        </li>
                        <li>
                          Thiết kế dân dụng và kết cấu: Công ty Acons, Vietnam
                        </li>
                        <li>Nhà thầu chính: Công ty TBU</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Diện tích đất
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      8,572.3m2
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Loại hình sản phẩm
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Căn hộ, Duplex, Loft, Sky Villas, Retails, Office
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Số toà</td>
                    <td className="border border-gray-300 px-4 py-2">02 toà</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Chiều cao
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      28 và 36 tầng
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Tổng số sản phẩm
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      192 căn
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Diện tích trung bình
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      58m2 - 230m2
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Dự kiến bàn giao
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Q2/2026
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Tiêu chuẩn bàn giao
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Hoàn thiện cao cấp
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Pháp lý
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Lâu dài cho người Việt Nam, 50 năm cho người nước ngoài
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
                    Hồ nước nóng và spa ngoài trời
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Sân chơi thư giãn trên không Green Loft
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Khu Massage ngoài trời
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Bồn tắm massage thuỷ trị liệu
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Chòi Sauna</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Khu chức năng dưới nước
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Công viên cây xanh</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">
                    Phòng Gym chuyên nghiệp
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Yoga</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Sân golf giả lập</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Hồ bơi tràn bờ</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckIcon className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-sm text-gray-700">Hồ bơi trẻ em</p>
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

export default Metropole;
