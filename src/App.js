import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="dropdown-container">
          <Dropdown />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
