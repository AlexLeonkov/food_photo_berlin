import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/vertical/img1_3.jpg";
import img2 from "../../images/vertical/img2_5.jpg";
import img250 from "../../images/vertical/img250_3.jpg";

import img251 from "../../images/vertical/img251_3.jpg";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
const images = ["../../images/horizont/img251_2.jpg"];

function HomeMobile() {
  return (
    <div className="mobile">
      <Link to="/food_photo_berlin/about">
        <section
          style={{
            height: "100vh",

            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <h1 className="content">About + Contact</h1>
        </section>
      </Link>
      <Link to="/food_photo_berlin/food">
        <section
          style={{
            height: "100vh",

            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <h1 className="content">Food</h1>
        </section>
      </Link>
      <Link to="/food_photo_berlin/drinks">
        <section
          style={{
            height: "100vh",
            backgroundPosition: "center center",
            backgroundImage: `url(${img251})`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="content">Drinks</h1>
        </section>
      </Link>
      <Link to="/food_photo_berlin/interior">
        <section
          style={{
            height: "100vh",
            backgroundPosition: "center center",
            backgroundImage: `url(${img250})`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="content">Interior</h1>
        </section>
      </Link>
    </div>
  );
}

export default HomeMobile;
