import "./App.css";
import About from "./pages/About/About";
import Food from "./pages/food";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/food_photo_berlin" element={<Food />}></Route>
        <Route path="/food_photo_berlin/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
