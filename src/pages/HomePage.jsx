import Header from "../components/Header/Header";
import SlideSection from "../components/SlideSection/SlideSection";
import IntroSection from "../components/IntroSection/IntroSection";
import FeedbackSection from "../components/FeedbackSection/FeedbackSection";
import FloatingContact from "../components/FloatingContact/FloatingContact";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <SlideSection />
      <IntroSection />
      <FeedbackSection />
      <FloatingContact />
      <Footer />
    </>
  );
}

export default HomePage;
