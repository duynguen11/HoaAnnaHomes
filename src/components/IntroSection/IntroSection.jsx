
const IntroSection = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto py-8 flex items-center justify-center gap-x-3 flex flex-col sm:flex-row lg:flex-row">
        <div className="w-full">
          <h2 className="w-full mb-6 text-3xl font-bold text-blue-900">
            Hoà Anna Homes
          </h2>
          <p className="text-sm mb-6 text-gray-600">Sỡ hữu nhà dễ dàng hơn <br/>An toàn hơn hạnh phúc hơn.</p>
        </div>
        <div>
          <p className="flex justify-evenly text-sm mb-6 text-gray-600">
            Đối tác của IQI Vietnam - Hoà Anna & Homes là chuyên viên tư vấn Bất
            động sản chuyên nghiệp, với nhiều năm kinh nghiệm trong đa dạng sản
            phẩm, từ dòng Căn hộ Trung cấp - Cao cấp - Hạng sang, BĐS Liền thổ,
            BĐS Nghỉ dưỡng, BĐS Di trú,... hứa hẹn mang đến giá trị thật cho Quý
            Khách hàng: Cung cấp những thông tin chính xác, cập nhật nhất cùng
            những bài phân tích thị trường chuyên sâu nhằm giúp Khách hàng tối
            đa hóa lợi nhuận từ khoản đầu tư của mình.
          </p>
          <p className="text-sm mb-6 text-gray-600">
            Không chỉ là một Căn Nhà, mà còn là một Tổ Ấm.
          </p>
          <p className="text-sm text-gray-600">
            Sự hài lòng của Khách hàng - là điều Hoà Anna Homes trân quý
            nhất.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6">
        <img className="rounded" src={""} alt="" />
      </div>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="pt-6 text-3xl font-bold text-blue-900 mb-6">
          Hoạt động chính của Hoà Anna Homes
        </h2>
        <p className="text-sm text-gray-600 mb-12">
          Tư Vấn - Quản Lý - Tuyển Dụng
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-900 text-white px-6 py-8 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Dịch Vụ Về BĐS</h3>
            <p className="text-sm">
              Tư vấn mua mới, chuyển nhượng, cho thuê và quản lý khai thác tài
              sản
            </p>
          </div>
          <div className="bg-blue-900 text-white px-6 py-8 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Tư Vấn Tài Chính</h3>
            <p className="text-sm">
              Giải pháp tài chính giúp khách hàng mua căn nhà phù hợp với ngân
              sách
            </p>
          </div>
          <div className="bg-blue-900 text-white px-6 py-8 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Xây Dựng Đội Ngũ</h3>
            <p className="text-sm">
              Không ngừng tuyển dụng mở rộng đội ngũ lan tỏa dịch vụ BĐS tốt
              nhất
            </p>
          </div>
          <div className="bg-blue-900 text-white px-6 py-8 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Đào Tạo Chuyên Môn</h3>
            <p className="text-sm">
              Bộ giáo trình đào tạo từ nghiên cứu chuyên sâu và kinh nghiệm thực
              tế
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
