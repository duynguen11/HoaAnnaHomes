import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Bg1 from "../../assets/images/bg-1.jpg";
import Bg2 from "../../assets/images/Bg-2.jpg";
import Bg3 from "../../assets/images/Bg-3.jpg";
import Bg4 from "../../assets/images/Bg-4.jpg";

const SlideSection = () => {
  const slides = [
    {
      id: 1,
      content: "Slide 1",
      image: Bg1,
    },
    {
      id: 2,
      content: "Slide 2",
      image: Bg2,
    },
    {
      id: 3,
      content: "Slide 3",
      image: Bg3,
    },
    {
      id: 4,
      content: "Slide 4",
      image: Bg4,
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
      }, 2000 + 1000); // Tự động chuyển sau 2 giây
      return () => clearInterval(interval); // Clear interval khi unmount
    }
  }, [slides.length, isPaused]);

  return (
    <div className="p-3">
      <div
        className="max-w-7xl w-full mx-auto h-[50vh] md:h-[60vh] lg:h-[75vh] rounded relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)} // Tạm dừng khi hover
        onMouseLeave={() => setIsPaused(false)} // Tiếp tục khi rời chuột
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.content}
              className="w-full h-full object-contain" // Đảm bảo ảnh hiển thị đầy đủ
            />
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
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? slides.length - 1 : prevIndex - 1
            )
          }
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            )
          }
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SlideSection;
