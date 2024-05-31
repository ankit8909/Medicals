import React from "react";
import "../Design/Header.css";
import Slider from "./Slider";


function Header() {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <h2>Medical Center</h2>
        </div>

        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Home">Home</a>
          </li>
        </ul>
      </nav>

      <Slider />
    </div>
  );
}

export default Header;
