import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/img1.JPEG";
import img2 from "../../images/img2.JPEG";
import img250 from "../../images/img250.JPEG";

import img251 from "../../images/img251.JPEG";
import { useState } from "react";

function Home() {
  const [style, setStyle] = useState({
    backgroundImage: `url(${img1})`,
    backgroundSize: "cover",
  });

  const defaultMoveIn = (e) => {
    setStyle({
      backgroundImage: `url(${img1})`,
      backgroundSize: "cover",
    });
  };

  const foodMoveIn = (e) => {
    setStyle({ backgroundImage: `url(${img2})`, backgroundSize: "cover" });
  };

  const drinksMoveIn = (e) => {
    setStyle({ backgroundImage: `url(${img251})`, backgroundSize: "cover" });
  };

  const interiorMoveIn = (e) => {
    setStyle({ backgroundImage: `url(${img250})`, backgroundSize: "cover" });
  };

  const moveOut = (e) => {
    setStyle({ backgroundImage: `url(${img1})` });
  };

  return (
    <div style={style} className="home">
      <ul className="home_list">
        <li onMouseOver={defaultMoveIn}>
          <Link to="/food_photo_berlin/about">About + Contact</Link>
        </li>
        <li onMouseOver={foodMoveIn}>
          <Link to="/food_photo_berlin/food">Food</Link>
        </li>
        <li onMouseOver={drinksMoveIn}>
          <Link to="/food_photo_berlin/drinks">Drinks</Link>
        </li>
        <li onMouseOver={interiorMoveIn}>
          <Link to="/food_photo_berlin/interior">Interior</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
