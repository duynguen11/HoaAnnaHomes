import Bg1 from "../../assets/images/bg-1.jpg";
import BgAbout from "../../assets/images/Bg-about.jpg";

const AboutSection = () => {
  return (
    <>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <img src={Bg1} alt="BgAbout" className="rounded" />
          <div>
            <h2 className="pt-6 text-3xl text-center font-bold text-blue-900 my-6">
              Chào mừng bạn đến với Hoà Anna Homes
            </h2>
            <p className="text-sm text-gray-600 text-justify">
              Xin chào, tôi là Hoà Anna một môi giới bất động sản chuyên nghiệp,
              đồng thời là một cư dân lâu năm sinh sống và làm việc tại các khu
              vực Thảo Điền, Quận 2 và trung tâm TP.HCM.
            </p>
            <p className="text-sm text-gray-600 text-justify">
              Tôi không chỉ là một nhà môi giới, mà còn là người am hiểu sâu sắc
              về nhịp sống, văn hóa và cộng đồng tại nơi đây. Là người sống
              trong khu vực, tôi hiểu rõ từ những tiện ích phù hợp cho gia đình,
              các dịch vụ dành cho người nước ngoài, cho đến phong cách sống đặc
              trưng của từng dự án. Tất cả nhằm mang lại cho khách hàng một sự
              lựa chọn hoàn hảo nhất, không chỉ là nơi ở mà còn là không gian
              sống lý tưởng.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 py-10">
            <div className="">
              <h2 className="text-2xl font-bold text-gray-700 mb-3">
                Chuyên tư vấn và cung cấp giải pháp bất động sản cho nhiều phân
                khúc đa dạng
              </h2>
              <p className="text-sm text-gray-600 text-justify mb-8">
                Với sự am hiểu sâu sắc về thị trường và sự phong phú trong các
                phân khúc, tôi cam kết mang đến những lời tư vấn chân thành,
                khách quan và phù hợp nhất với nhu cầu và mong muốn của bạn.{" "}
                <br /> • Căn Hộ Cao Cấp • Căn hộ cho thuê • Căn hộ chuyển nhượng
                • Căn hộ sơ cấp từ các dự án mới • Căn hộ nghỉ dưỡng • Nhà phố &
                Villa: Không gian sống sang trọng và đẳng cấp • Văn phòng: Địa
                điểm làm việc hiện đại, chuyên nghiệp.
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mb-3">
                Tôi Là Ai Với Khách Hàng ?
              </h2>
              <p className="text-sm text-gray-600 text-justify mb-8">
                Tôi không chỉ là một nhà môi giới, mà còn là người đồng hành
                đáng tin cậy trong hành trình tìm kiếm không gian sống của bạn.
                Tôi luôn lắng nghe và thấu hiểu từng nhu cầu, từng câu chuyện
                của mỗi khách hàng, để đảm bảo rằng: <br /> • Bạn cảm thấy an
                tâm khi đầu tư. <br />• Bạn hạnh phúc với lựa chọn của mình.{" "}
                <br />• Bạn tìm thấy ngôi nhà lý tưởng và phong cách sống phù
                hợp.
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mb-3">
                Tầm Nhìn & Sứ Mệnh
              </h2>
              <p className="text-sm text-gray-600 text-justify mb-8">
                {" "}
                Tầm Nhìn: Trở thành người đồng hành không thể thiếu khi khách
                hàng nghĩ đến bất động sản tại TP.HCM. <br />
                Sứ Mệnh: Không chỉ giúp khách hàng tìm nhà, mà còn giúp họ tìm
                thấy hạnh phúc và giá trị sống thực sự qua mỗi không gian.
              </p>
            </div>
            <img className="rounded w-full h-[550px]" src={BgAbout} alt="Bg-about" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
