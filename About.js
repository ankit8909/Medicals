import React from "react";
import about from "../images/about.webp";
import '../Design/About.css';
import Blog from "./Blog";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="aboutpage">
          <div className="left">
            <img src={about} alt="" />
          </div>
          <div className="right">
            <h1>We are the Leading Cloud Service Provider</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>
            
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>

            <div className="check">
           <ul>
            <li>
            <p>&#10003; Boost SEO Sharing</p>
            <p>&#10003; Boost SEO Sharing</p>

            <p>&#10003; Boost SEO Sharing</p>
            </li>
           </ul>
           <ul>
            <li>
            <p>&#10003; Boost SEO Sharing</p>
            <p>&#10003; Boost SEO Sharing</p>

            <p>&#10003; Boost SEO Sharing</p>
            </li>
           </ul>
            </div>
            

          </div>
        </div>
      </div>

      <Blog/>
    </>
  );
}

export default About;
