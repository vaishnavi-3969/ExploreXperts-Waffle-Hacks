import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Carpooling from "./components/Carpooling/Carpooling.js";
import Footer from "./components/Footer.js";
import CyclingOptions from "./components/CyclingOptions/CyclingOptions.js";
import LocalGuide from "./components/LocalGuides/LocalGuides.js";
import EcoAccommodation from "./components/Accomodation Recommendations/EcoAccomodation.js";
import PackingTips from "./components/Packing Tips/PackingTips.js";
import SustainableActivities from "./components/Sustainable Activities/SustainableActivities.js";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="dropdown-container">
          <Dropdown />
        </div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/carpooling" element={<Carpooling />} exact />
          <Route path="/cycling-options" element={<CyclingOptions />} exact />
          <Route path="/local-guides" element={<LocalGuide />} exact />
          <Route path="/accomodation" element={<EcoAccommodation/>} exact />
          <Route path="/packing-tips" element={<PackingTips/>} exact />
          <Route path="/sustainable-activities" element={<SustainableActivities/>} exact />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
