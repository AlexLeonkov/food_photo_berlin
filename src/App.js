import "./App.css";
import About from "./pages/About/About";
import Food from "./pages/food";
import Home from "./pages/Home/home";
import { Routes, Route, Link } from "react-router-dom";
import HomeMobile from "./pages/Home/home_mobile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/food_photo_berlin/" element={<HomeMobile />}></Route>
        {/* <Route path="/food_photo_berlin/" element={<Home />}></Route> */}
        <Route path="/food_photo_berlin/food" element={<Food />}></Route>
        <Route path="/food_photo_berlin/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
