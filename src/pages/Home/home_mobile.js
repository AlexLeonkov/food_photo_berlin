import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/vertical/img1_3.jpg";
import img2 from "../../images/vertical/img2_5.jpg";
import img250 from "../../images/vertical/img250_3.jpg";

import img251 from "../../images/vertical/img251_3.jpg";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = ["../../images/horizont/img251_2.jpg"];

function HomeMobile() {
  return (
    <div className="mobile">
      <section
        style={{
          height: "100vh",

          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></section>
      <section
        style={{
          height: "100vh",

          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></section>
      <section
        style={{
          height: "100vh",
          backgroundPosition: "center center",
          backgroundImage: `url(${img250})`,
          backgroundSize: "cover",
        }}
      ></section>
      <section
        style={{
          height: "100vh",
          backgroundPosition: "center center",
          backgroundImage: `url(${img251})`,
          backgroundSize: "cover",
        }}
      ></section>
    </div>
  );
}

export default HomeMobile;
