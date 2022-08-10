import "./App.css";
import About from "./pages/About/About";
import Food from "./pages/food";
import Home from "./pages/Home/home";
import Interior from "./pages/interior";
import { Routes, Route, Link } from "react-router-dom";
import HomeMobile from "./pages/Home/home_mobile";
import Drinks from "./pages/drinks";

function App() {
  const isMobile = window.innerWidth <= 500;
  console.log(isMobile);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/food_photo_berlin/"
          element={isMobile ? <HomeMobile /> : <Home />}
        ></Route>
        {/* <Route path="/food_photo_berlin/" element={<Home />}></Route> */}
        <Route path="/food_photo_berlin/food" element={<Food />}></Route>
        <Route path="/food_photo_berlin/drinks" element={<Drinks />}></Route>
        <Route
          path="/food_photo_berlin/interior"
          element={<Interior />}
        ></Route>
        <Route path="/food_photo_berlin/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
