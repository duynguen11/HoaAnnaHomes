import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RealestatePageQ1 from "./pages/RealestatePageQ1";
import RealestatePageBT from "./pages/RealestatePageBT";
import RealestatePageTT from "./pages/RealestatePageTT";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/realestateQ1" element={<RealestatePageQ1 />} />
        <Route path="/realestateBT" element={<RealestatePageBT />} />
        <Route path="/realestateTT" element={<RealestatePageTT />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
