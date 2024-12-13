import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper và SwiperSlide
import { Autoplay, Pagination } from "swiper/modules"; // Import module từ 'swiper/modules'
import "swiper/css"; // Import CSS cơ bản của Swiper
import "swiper/css/pagination";
import "./MarketsSection.css";

const MarketsSection = () => {
  const slidersData = [
    {
      title: "Slider 1",
      slides: [
        {
          title: "Kiến thức vững chắc",
          content:
            "Nhờ có em Hòa Anna Homes nên đã hiểu rõ hơn rất nhiều về điểm mạnh/yếu của dự án, sản phẩm, có thêm được nhiều insights sâu sắc để tư vấn cũng như lựa chọn sản phẩm cho khách hàng.",
          author: "Khách hàng và thành viên",
          avatar: "https://via.placeholder.com/300", // Đường dẫn tới avatar của khách hàng
        },
        {
          title: "Hỗ trợ hết mình giúp đạt mục tiêu",
          content:
            "Nhờ có Hòa Anna Homes đã luôn động viên, hỗ trợ và chia sẻ kinh nghiệm kiến thức nền đã đạt được mục tiêu doanh số để ra cho bản thân, cảm thấy rất vui khi là thành viên trong team của Hòa Anna Homes.",
          author: "Thành viên trong team",
          avatar: "https://via.placeholder.com/300", // Đường dẫn tới avatar của thành viên
        },
        {
          title: "Dự án thành công ngoài mong đợi",
          content:
            "Tiff luôn đảm bảo mọi chi tiết trong công việc, làm việc hiệu quả, chuyên nghiệp và đáng tin cậy.",
          author: "Khách hàng trong nước",
          avatar: "https://via.placeholder.com/300", // Đường dẫn tới avatar
        },
        {
          title: "Dịch vụ tuyệt vời",
          content:
            "Cảm ơn Hòa Anna Homes vì đã mang đến những dịch vụ chăm sóc khách hàng tuyệt vời. Luôn kịp thời hỗ trợ và giải quyết vấn đề.",
          author: "Khách hàng",
          avatar: "https://via.placeholder.com/300", // Đường dẫn tới avatar
        },
        {
          title: "Giải pháp sáng tạo",
          content:
            "Hòa Anna Homes luôn mang đến những giải pháp sáng tạo và khác biệt cho mỗi dự án, mang lại thành công cho khách hàng.",
          author: "Thành viên trong nhóm",
          avatar: "https://via.placeholder.com/300", // Đường dẫn tới avatar
        },
      ],
    },
  ];

  return (
    <div className="max-w mx-auto p-6 pt-12 bg-gray-50">
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-6">
        Cập nhật của Hòa Anna Homes về thị trường
      </h2>
      <p className="text-sm text-center text-gray-600 mb-12">
        Nơi ghi lại các hoạt động, thành tựu, chương trình đào tạo cũng như
        thông tin thị trường về BĐS
      </p>
      {/* Loop through each slider */}
      {slidersData.map((slider, index) => (
        <div key={index} className="mb-10">
          {/* Swiper component for each slider */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="bg-gray-50 max-w-7xl mx-auto"
          >
            {slider.slides.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex} className="flex justify-center">
                <div className="mx-auto bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    className="w-full h-[280px] object-cover"
                    src={slide.image || "https://via.placeholder.com/300"}
                    alt={slide.title || "Product Image"}
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {slide.title || "Thông tin bài viết"}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {slide.description ||
                        "Đây là mô tả ngắn của sản phẩm, cung cấp thông tin cơ bản và tạo sự thu hút."}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className=" text-lg font-bold text-blue-600"></span>
                      <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                        Xem thêm
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination"></div>
        </div>
      ))}
    </div>
  );
};

export default MarketsSection;
