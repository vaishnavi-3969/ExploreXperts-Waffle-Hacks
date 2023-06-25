import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import Dropdown from "./components/Dropdown";
import Carpooling from "./components/Carpooling/Carpooling.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="dropdown-container">
          <Dropdown />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/carpooling" element={<Carpooling />} exact />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
