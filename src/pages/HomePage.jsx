import Header from "../components/Header/Header";
import SlideSection from "../components/SlideSection/SlideSection";
import IntroSection from "../components/IntroSection/IntroSection";
import AchievementsSection from "../components/AchievementsSection/AchievementsSection";
import FeedbackSection from "../components/FeedbackSection/FeedbackSection";
import MarketsSection from "../components/MarketsSection/MarketsSection";
import FloatingContact from "../components/FloatingContact/FloatingContact";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <SlideSection />
      <IntroSection />
      <AchievementsSection />
      <FeedbackSection />
      <MarketsSection />
      <FloatingContact />
      <Footer />
    </>
  );
}

export default HomePage;
