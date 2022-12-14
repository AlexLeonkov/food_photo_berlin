import React from "react";
import { foodImages, interiorImages } from "../images/index";
import { Link } from "react-router-dom";
import Header from "../layout/header";

function interior() {
  return (
    <div>
      <Header />

      <main>
        <div className="row">
          {interiorImages.map((image, index) => {
            return (
              <div key={index} className="column">
                <img src={image} alt={index} />
              </div>
            );
          })}
        </div>

      

        <h1 className="main_title">Interior Photography Berlin</h1>
      </main>
    </div>
  );
}

export default interior;
