import React from "react";
import { images } from "../images/index";
import { Link } from "react-router-dom";

function food() {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <ul id="navbar" className="menu">
            <li>
              <a href="#home">Portfolio</a>
            </li>
            <li>
              <a href="#news">Clients</a>
            </li>
            <li>
              <Link to="/food_photo_berlin/about">About + Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="row">
          {images.map((image, index) => {
            return (
              <div key={index} className="column">
                <img  src={image} alt={index} />
              </div>
            );
          })}
        </div>

        {/* <div className="column">
            <img src={img1} alt="image1" />
          </div>
          <div className="column">
            <img src={img1} alt="image2" />
          </div>*/}

        <h1 className="main_title">Food Photography Berlin</h1>
      </main>
    </div>
  );
}

export default food;
