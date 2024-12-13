import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper và SwiperSlide
import { Autoplay, Pagination } from "swiper/modules"; // Import module từ 'swiper/modules'
import "swiper/css"; // Import CSS cơ bản của Swiper
import "swiper/css/pagination";
import "./FeedbackSection.css";

const FeedbackSection = () => {
  const slidersData = [
    {
      title: "Slider 1",
      slides: [
        {
          title: "Kiến thức vững chắc & chia sẻ nhiệt tình",
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
    <div className="max-w mx-auto px-6 py-12 bg-gray-50">
      <h2 className="text-center text-3xl font-bold text-blue-900 pt-6 mb-6">
        Đánh giá từ Khách hàng và Đối tác của Hoà Anna Homes
      </h2>
      <p className="text-sm text-center text-gray-600 mb-12">
        Kiến thức rộng, chuyên môn cao và dịch vụ đáng tin cậy
      </p>
      {/* Loop through each slider */}
      {slidersData.map((slider, index) => (
        <div key={index} className="">
          {/* Swiper component for each slider */}
          <Swiper
            modules={[Autoplay, Pagination]} // Kích hoạt Autoplay và Pagination
            spaceBetween={30} // Khoảng cách giữa các slide
            autoplay={{ delay: 3500, disableOnInteraction: false }} // Cấu hình autoplay
            loop={true} // Bật tính năng loop để tự động quay lại slide đầu tiên khi đến cuối
            pagination={{
              el: ".custom-pagination", // Chỉ định nơi đặt pagination
              clickable: true,
            }} // Hiển thị pagination với các nút tròn nhỏ và có thể click được
            breakpoints={{
              640: { slidesPerView: 1 }, // Trên màn hình nhỏ (>= 640px), hiển thị 1 slide
              768: { slidesPerView: 2 }, // Trên màn hình trung bình (>= 768px), hiển thị 2 slide
              1024: { slidesPerView: 2 }, // Trên màn hình lớn (>= 1024px), hiển thị 3 slide
            }}
            className="bg-white max-w-7xl mx-auto"
          >
            {slider.slides.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex} className="flex justify-center">
                <div className="bg-gray-600 text-white p-6 rounded shadow-md h-[280px] w-full">
                  <div className="flex items-center mb-4">
                    <img
                      src={slide.avatar} // Hiển thị avatar
                      alt="Avatar"
                      className="w-20 h-20 rounded-full object-cover mr-6"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{slide.title}</h3>
                      <p className="mt-2 text-sm text-gray-300">
                        {slide.author}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm">{slide.content}</p>
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

export default FeedbackSection;
