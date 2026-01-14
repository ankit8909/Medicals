import React from "react";
import docter from "../images/DocterHome.webp";
import eq1 from "../images/marcelo-leal-6pcGTJDuf6M-unsplash.jpg";
import surgery from "../images/surgery.png";
import heart from "../images/heart.png";
import care from "../images/care.png";
import monitor from "../images/monitoring.png";
import { Typewriter } from "react-simple-typewriter";

import "../Design/Slider.css";
import Team from "./Team";

function Slider() {
  return (
    <>
      <div className="slide">
        <img src={docter} alt="images not support" />
      </div>

      <div className="service-container">
        <div className="service">
          <h1 style={{ textAlign: "center" }}>
            {" "}
            {""}
            <span style={{ textAlign: "center", color: "rgba(20, 96, 105)" }}>
              <Typewriter
                words={[" Our Specializations and Services"]}
                loop={Infinity}
                typeSpeed={100}
                cursor
                cursorBlinking={30}
                cursorStyle="_"
              />
            </span>
          </h1>{" "}
          <br />
          <p>
            It’s an opportunity to feature the area of your expertise.
            Streamline the services clearly and concisely relly
          </p>
        </div>

        <div className="serv-container">
          <div className="s1">
            <img src={surgery} alt="n" />
            <div className="text">
              <h2>Surgery</h2>
              <p>
                There are ten recognised specialties within surgery, all of
                which will provide you with different challenges and rewards
                throughout your career.
              </p>
            </div>
          </div>

          <div className="s1">
            <img src={heart} alt="n" />
            <div className="text">
              <h2> <span id="spn"> 100% </span> Heart Care</h2>
              <p>
                There are ten recognised specialties within surgery, all of
                which will provide you with different challenges and rewards
                throughout your career.
              </p>
            </div>
          </div>

          <div className="s1">
            <img src={care} alt="n" />
            <div className="text">
              <h2>Best Health Care</h2>
              <p>
                There are ten recognised specialties within surgery, all of
                which will provide you with different challenges and rewards
                throughout your career.
              </p>
            </div>
          </div>

          <div className="s1">
            <img src={monitor} alt="n" />
            <div className="text">
              <h2> 100% Monitoring</h2>
              <p>
                There are ten recognised specialties within surgery, all of
                which will provide you with different challenges and rewards
                throughout your career.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Team/>
    </>
  );
}

export default Slider;
