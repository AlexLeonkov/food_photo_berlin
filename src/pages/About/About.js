import React from "react";
import about from "../../images/about.jpg";
import { Link } from "react-router-dom";
import Form from "../../components/FormTemplate";

function About() {
  return (
    <div>
      <div className="header_about">
        <nav class="navbar">
          <ul id="navbar" className="menu">
            <li>
              <Link to="/food_photo_berlin">Main</Link>
            </li>
            <li>
              <a href="#news">Clients</a>
            </li>
            <li>
              <Link to="/about">About + Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <img className="about" src={about} alt="image2" />
      <div className="text_about">
        <p>Hello, my name is Olena</p>
        <p>
          Do have a photo. One of the first things I do when viewing a
          photographer’s website is look for a picture of them, and I’m sure I’m
          not alone. This is one of the reasons we like to have headshots for
          all our Wonderful Machine member photographers. It’s nice to put a
          face to a name! While you can never go wrong with a traditional
          headshot/portrait, there are other approaches you can take as well,
          examples of which are toward the end of the article. Do keep our
          interest. If you’re more of a dreamer, an imaginative biography that
          keeps the reader engaged might be right up your alley.
        </p>
        <a href="https://www.instagram.com/hhey.ellen/?igshid=YzAyZWRlMzg%3D">
          <ion-icon size="large" name="logo-instagram"></ion-icon>
        </a>
      </div>

      <div class="container">
        <div>
          <h2>Contact information</h2>
          <p>+491794221182</p>
          <p>aleonkov2001@gmail.com</p>
          <p>
            <a href="https://www.instagram.com/hhey.ellen/?igshid=YzAyZWRlMzg%3D">
              hhey.elen
            </a>
          </p>
        </div>
      </div>

      <div className="form">
        <Form />
      </div>
    </div>
  );
}

export default About;
