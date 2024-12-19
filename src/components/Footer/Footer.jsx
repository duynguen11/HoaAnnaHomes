const Footer = () => {
  return (
    <footer className="p-3">
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {/* Cột Tiffany & Homes */}
        <div>
          <h3 className="text-3xl font-bold text-blue-900 mb-8">
            Hoà Anna Homes
          </h3>
          <p className="text-sm text-gray-600">
            Đối tác của IQI Vietnam - Hoà Anna Homes là chuyên viên tư vấn Bất
            động sản chuyên nghiệp, với nhiều năm kinh nghiệm trong các sản phẩm
            và phân khúc.
          </p>
          <p className="mt-6 text-sm text-gray-600">
            Hoà Anna Homes luôn tập trung đến giá trị thật cho Quý Khách hàng và
            Đối tác:
            <br />+ Cung cấp những thông tin chính xác
            <br />+ Cập nhật mới nhất cùng những bài phân tích thị trường chuyên
            sâu
            <br />
            Từ đó giúp Khách hàng tối đa hóa lợi nhuận từ khoản đầu tư của mình.
          </p>
          <p className="mt-6 text-sm text-gray-600">
            Liên hệ Hoà Anna Homes tại:
            <br />+ Call/Zalo/Whatsapp: 0906 821 738/ 0938 846 848
            <br />+ WeChat ID: HoaAnnaHomesVN
            <br />+ Email: hoaanna.realtor@gmail.com
            <br />+ VP IQI Vietnam: 67-69 Đ. Võ Nguyên Giáp, Thảo Điền, TP. Thủ
            Đức, TP. HCM
          </p>
          <p className="mt-6 text-sm text-gray-600">
            Sự hài lòng của Khách hàng là điều Hoà Anna Homes trân quý nhất.{" "}
            <br />
            Không chỉ là một Căn Nhà, mà còn là một Tổ Ấm.
          </p>
          <button className="mt-6 bg-blue-500 text-sm text-white p-3 rounded hover:bg-blue-800 w-full md:w-auto">
            Đăng Ký Ngay
          </button>
        </div>

        {/* Cột Khu Vực, Dịch Vụ, Liên Hệ (3 cột nhỏ trên màn hình lớn) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cột Khu Vực */}
          <div>
            <h3 className="text-base text-gray-700 font-semibold mb-8">
              Khu Vực
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>TP. HCM</li>
              <li>TP. Thủ Đức</li>
              <li>TP. Hà Nội</li>
              <li>BĐS Nghi dưỡng</li>
              <li>BĐS Di trú</li>
              <li>Đồng Nai/ Long An</li>
            </ul>
          </div>

          {/* Cột Dịch Vụ */}
          <div>
            <h3 className="text-base text-gray-700 font-semibold mb-8">
              Dịch Vụ
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Tư vấn Đầu tư BĐS</li>
              <li>Quản lý Tài sản</li>
              <li>Chuyển nhượng & Cho thuê</li>
              <li>Tuyển dụng Nhân sự</li>
              <li>Xây dựng Đội ngũ</li>
              <li>Đào tạo Chuyên môn</li>
            </ul>
          </div>

          {/* Cột Liên Hệ */}
          <div>
            <h3 className="text-base text-gray-700 font-semibold mb-8">
              Liên Hệ
            </h3>
            <ul className="text-sm text-gray-700">
              <li>SĐT: 0906 821 738</li>
              <li className="mt-3">
                Zalo/Whatsapp: <br />
                0938 846 848
              </li>
              <li className="mt-3">WeChat ID: HoaAnnaHomesVN</li>
              <li className="mt-3">LineID: hoaannahomes</li>
              <li className="mt-3">Email: hoaanna.realtor@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6">
        <hr className="border-t-1 border-gray-300" />
      </div>
      <div className="pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between text-sm text-gray-600">
          {/* Follow Me */}
          <div className="flex space-x-4">
            <span className="text-gray-700">Follow me:</span>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png"
                alt="TikTok"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
                className="w-7 h-6"
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          </div>

          {/* Quy định bảo mật */}
          <div className="mt-4 lg:mt-0 text-gray-700">
            <span>Quy định bảo mật | Điều khoản và điều kiện</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-700 mt-4">
          <span>@HoaAnnaHomes, Inc - 2024 All right reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
