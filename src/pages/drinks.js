import React from "react";
import { drinksImages } from "../images/index";
import { Link } from "react-router-dom";
import Header from "../layout/header";

function drinks() {
  return (
    <div>
      <Header />

      <main>
        <div className="row">
          {drinksImages.map((image, index) => {
            return (
              <div key={index} className="column">
                <img src={image} alt={index} />
              </div>
            );
          })}
        </div>

        <h1 className="main_title">Drinks Photography Berlin</h1>
      </main>
    </div>
  );
}

export default drinks;
