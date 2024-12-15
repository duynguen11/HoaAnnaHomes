import LogoZalo from "../../assets/images/Logo-zalo.png";
import LogoWhats from "../../assets/images/Whats-App.webp";
import LogoCall from "../../assets/images/call-logo.png";

const FloatingContact = () => {
  return (
    <>
      <div className="fixed bottom-4 right-4 flex flex-col items-center gap-4 z-50">
        {/* Zalo */}
        <a
          href="https://zalo.me/your-zalo-id"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <img
            src={LogoZalo} // Đường dẫn đến icon Zalo
            alt="Zalo"
            className="rounded-full w-10 h-10"
          />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/your-phone-number"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <img
            src={LogoWhats} // Đường dẫn đến icon WhatsApp
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </a>

        {/* Phone */}
        <a
          href="tel:your-phone-number"
          className="w-16 h-16 bg-red-300 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <img
            src={LogoCall} // Đường dẫn đến icon Phone
            alt="Phone"
            className="w-10 h-10"
          />
        </a>
      </div>
    </>
  );
};

export default FloatingContact;
