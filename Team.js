import React from "react";
import { Typewriter } from "react-simple-typewriter";
import d1 from "../images/D1.jpg";
import d2 from "../images/D2.jpg";
import d3 from "../images/D3.jpg";

import "../Design/Team.css";
import About from "./About";

function Team() {
  return (
    <>
      <div className="team">
        <div className="team-text">
          <h2
            style={{
              textAlign: "center",
              color: "rgba(20, 96, 105)",
              fontSize: "4rem",
              paddingBlock: "2rem",
            }}
          >
            <span style={{ textAlign: "center" }}>
              <Typewriter
                words={["Doctor/team information"]}
                loop={Infinity}
                typeSpeed={60}
                cursor
                cursorStyle="...."
                cursorBlinking={60}
              />
            </span>
          </h2>
        </div>

        <div className="member-container">
          <div className="member">
            <img src={d1} alt="" />
            <div className="mem-text">
              <h2>David Kanuel</h2>
              <p>Facial Surgan</p>
            </div>
          </div>

          <div className="member">
            <img src={d2} alt="" />
            <div className="mem-text">
              <h2>Surgen</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>

          <div className="member">
            <img src={d3} alt="" />
            <div className="mem-text">
              <h2>Surgen</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>

          <div className="member">
            <img src={d1} alt="" />
            <div className="mem-text">
              <h2>Surgen</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>

      <About/>
      hiii
    </>
  );
}

export default Team;
