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
import EmpireCityPageTT from "./pages/EmpireCityPageTT";
import ZietRiverPageTT from "./pages/ZietRiverPageTT";
import SalaPageTT from "./pages/SalaPageTT";
import TheRiverPageTT from "./pages/TheRiverPage";
import RealestatePageQ2 from "./pages/RealestatePageQ2";
import DiamondIslandPageQ2 from "./pages/DiamondIslandPageQ2";
import NassimPageQ2 from "./pages/NassimPageQ2";
import Q2TĐPageQ2 from "./pages/Q2TĐPageQ2";
import FelizPageQ2 from "./pages/FelizPageQ2";
import DefinePageQ2 from "./pages/DefinePageQ2";
import EatonParkPage from "./pages/EatonParkPage";
import GrandMarinaPage from "./pages/GrandMarinaPage";
import GlobalCityPage from "./pages/GlobalCityPage";
import MetropolePage from "./pages/MetropolePage";
import TDGreenPage from "./pages/TDGreenPage";
import LandCasterPage from "./pages/LandCasterPage";
import CrestMetropolePage from "./pages/CrestMetropolePage";
import VillaThaoDienPage from "./pages/VillaThaoDienPage";
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
        <Route path="/EmpireCity-TT" element={<EmpireCityPageTT />} />
        <Route path="/TheRiver-TT" element={<TheRiverPageTT />} />
        <Route path="/TheZietRiver-TT" element={<ZietRiverPageTT />} />
        <Route path="/Sala-TT" element={<SalaPageTT />} />
        <Route path="/realestateQ2" element={<RealestatePageQ2 />} />
        <Route path="/DiamondIsland-Q2" element={<DiamondIslandPageQ2 />} />
        <Route path="/Nassim-Q2" element={<NassimPageQ2 />} />
        <Route path="/Q2ThaoDien-Q2" element={<Q2TĐPageQ2 />} />
        <Route path="/Feliz-Q2" element={<FelizPageQ2 />} />
        <Route path="/Define-Q2" element={<DefinePageQ2 />} />
        <Route path="/EatonPark" element={<EatonParkPage />} />
        <Route path="/GrandMarina" element={<GrandMarinaPage />} />
        <Route path="/GlobalCity" element={<GlobalCityPage />} />
        <Route path="/Metropole" element={<MetropolePage />} />
        <Route path="/PearlPlaza" element={<PearlPlazaPage />} />
        <Route path="/TDGreen" element={<TDGreenPage />} />
        <Route path="/LandCaster" element={<LandCasterPage />} />
        <Route path="/CrestMetropole" element={<CrestMetropolePage />} />
        <Route path="/VillaThaoDien" element={<VillaThaoDienPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
