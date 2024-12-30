import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RealestatePageQ1 from "./pages/RealestatePageQ1";
import VinhomeGoldenPageQ1 from "./pages/VinhomeGoldenPageQ1";
import RealestatePageBT from "./pages/RealestatePageBT";
import VinhomeCentralPageBT from "./pages/VinhomeCentralPageBT";
import ManorPageBT from "./pages/ManorPageBT";
import DEdgePageBT from "./pages/DEdgePageBT";
import SGPearlPageBT from "./pages/SGPearlPageBT";
import SunWahPage from "./pages/SunWahPage";
import PearlPlazaPage from "./pages/PearlPlazaPage";
import RealestatePageTT from "./pages/RealestatePageTT";
import RealestatePageQ2 from "./pages/RealestatePageQ2";
import DiamondIslandPageQ2 from "./pages/DiamondIslandPageQ2";
import EatonParkPage from "./pages/EatonParkPage";
import GrandMarinaPage from "./pages/GrandMarinaPage";
import GlobalCityPage from "./pages/GlobalCityPage";
import MetropolePage from "./pages/MetropolePage";
import TDGreenPage from "./pages/TDGreenPage";
import LandCasterPage from "./pages/LandCasterPage";
import CrestMetropolePage from "./pages/CrestMetropolePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/realestateQ1" element={<RealestatePageQ1 />} />
        <Route path="/VinhomeGolden-Q1" element={<VinhomeGoldenPageQ1 />} />
        <Route path="/realestateBT" element={<RealestatePageBT />} />
        <Route
          path="/VinhomesCentralPark-BT"
          element={<VinhomeCentralPageBT />}
        />
        <Route path="/TheManor-BT" element={<ManorPageBT />} />
        <Route path="/DEdgeTown-BT" element={<DEdgePageBT />} />
        <Route path="/SGPearl-BT" element={<SGPearlPageBT />} />
        <Route path="/SunWah-BT" element={<SunWahPage />} />
        <Route path="/realestateTT" element={<RealestatePageTT />} />
        <Route path="/realestateQ2" element={<RealestatePageQ2 />} />
        <Route path="/DiamondIsland-Q2" element={<DiamondIslandPageQ2 />} />
        <Route path="/EatonPark" element={<EatonParkPage />} />
        <Route path="/GrandMarina" element={<GrandMarinaPage />} />
        <Route path="/GlobalCity" element={<GlobalCityPage />} />
        <Route path="/Metropole" element={<MetropolePage />} />
        <Route path="/PearlPlaza" element={<PearlPlazaPage />} />
        <Route path="/TDGreen" element={<TDGreenPage />} />
        <Route path="/LandCaster" element={<LandCasterPage />} />
        <Route path="/CrestMetropole" element={<CrestMetropolePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
