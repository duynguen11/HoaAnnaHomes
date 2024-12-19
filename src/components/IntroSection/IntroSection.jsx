const IntroSection = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto py-8 flex items-center justify-center gap-x-3 flex flex-col sm:flex-row lg:flex-row">
        <div className="w-full">
          <h2 className="w-full mb-6 text-3xl font-bold text-blue-900">
            Hoà Anna Homes
          </h2>
          <p className="text-sm mb-6 text-gray-600">
            Sỡ hữu nhà dễ dàng hơn <br />
            An toàn hơn hạnh phúc hơn.
          </p>
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
            Sự hài lòng của Khách hàng - là điều Hoà Anna Homes trân quý nhất.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6">
        <img className="rounded" src={""} alt="" />
      </div>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="pt-4 text-3xl font-bold text-blue-900 mb-6">
          Giới thiệu Dịch Vụ Bất Động Sản Hoà Anna Homes
        </h2>
        <p className="text-sm text-gray-600 mb-12">
          Tại HoaAnna & Homes, chúng tôi mang đến các dịch vụ bất động sản
          chuyên nghiệp, đáp ứng mọi nhu cầu của khách hàng:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-900 text-white px-6 py-8 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Dịch Vụ Mua Bán Và Chuyển Nhượng
            </h3>
            <p className="text-sm">
              • Tư vấn mua bán, chuyển nhượng bất động sản từ thị trường sơ cấp
              đến thứ cấp. <br />• Tập trung vào các dự án cao cấp như căn hộ,
              shophouse thương mại và nhà phố, phù hợp với nhu cầu nhà ở và đầu
              tư.
            </p>
          </div>
          <div className="bg-blue-900 text-white px-6 py-8 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              {" "}
              Dịch Vụ Cho Thuê Và Quản Lý Tài Sản
            </h3>
            <p className="text-sm">
              • Hỗ trợ khách hàng tìm kiếm và cho thuê căn hộ, nhà ở, văn phòng
              một cách hiệu quả và nhanh chóng. <br />• Dịch vụ quản lý tài sản
              chuyên nghiệp, giúp khai thác tối ưu giá trị bất động sản.
            </p>
          </div>
          <div className="bg-blue-900 text-white px-6 py-8 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Tư Vấn Giải Pháp Tài Chính
            </h3>
            <p className="text-sm">
              • Hỗ trợ khách hàng lựa chọn các giải pháp tài chính phù hợp, giúp
              việc sở hữu bất động sản trở nên dễ dàng và thuận lợi hơn. <br />•
              Đồng hành trong việc hoạch định ngân sách đầu tư và mua bán bất
              động sản.
            </p>
          </div>
          <div className="bg-blue-900 text-white px-6 py-8 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Xây Dựng Mối Quan Hệ Và Đội Ngũ Chuyên Nghiệp
            </h3>
            <p className="text-sm">
              • Tập trung xây dựng mạng lưới đối tác rộng khắp, mang lại giá trị
              tối ưu cho khách hàng. <br />• Cam kết mang đến dịch vụ tận tâm,
              chuyên nghiệp và đáng tin cậy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
