import React from "react";
import { foodImages } from "../images/index";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import video from "../videos/video1.mp4";

function food() {
  return (
    <div>
      <Header />

      <main>
        <div className="row">
          {foodImages.map((image, index) => {
            return (
              <div key={index} className="column">
                <img src={image} alt={index} />
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
