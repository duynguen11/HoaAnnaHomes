import { useState, useEffect } from "react";
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
    <div className="p-6">
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
  );
};

export default SlideSection;
