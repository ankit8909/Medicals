import React from "react";
import "../Design/Blog.css";
import b1 from "../images/dheart.webp";
import b2 from '../images/philippe.jpg';
import b3 from '../images/hh-e-LwYlLzteMxo-unsplash.jpg'
import { Typewriter } from "react-simple-typewriter";
import Footer from "./Footer";

function Blog() {
  return (
    <>
      <div className="blog-container">
        <div className="blog-head">
          <h1 style={{ textAlign: "center" }}>
            <span style={{ textAlign: "center", color:"rgba(20, 96, 105)" }}>
              <Typewriter
                words={["Our Blog"]}
                loop={Infinity}
                typeSpeed={60}
                cursor
                cursorBlinking={30}
                cursorStyle=".."
              />
            </span>
          </h1>

          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna aliquyam.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>

        <div className="blog-card">
          <div className="blog-card-box">
            <img src={b1} alt="" />
            <div className="box-contnet">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio tempora dolorum corrupti, maxime ipsa quisquam at sit
                provident quae enim! Itaque, ipsam expedita!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio tempora dolorum corrupti, maxime ipsa quisquam at sit
                provident quae enim! Itaque, ipsam expedita!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio tempora dolorum corrupti, maxime ipsa quisquam at sit
                provident quae enim! Itaque, ipsam expedita!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio tempora dolorum corrupti, maxime ipsa quisquam at sit
                provident quae enim! Itaque, ipsam expedita!
              </p>
            </div>
          </div>

          <div className="blog-card-box">
            <img src={b2} alt="" />
            <div className="box-contnet">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio tempora dolorum corrupti, maxime ipsa quisquam at sit
                provident quae enim! Itaque, ipsam expedita!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio tempora dolorum corrupti, maxime ipsa quisquam at sit
                provident quae enim! Itaque, ipsam expedita!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio tempora dolorum corrupti, maxime ipsa quisquam at sit
                provident quae enim! Itaque, ipsam expedita!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio tempora dolorum corrupti, maxime ipsa quisquam at sit
                provident quae enim! Itaque, ipsam expedita!
              </p>
            </div>
          </div>

          <div className="blog-card-box">
            <img src={b3} alt="" />
            <div className="box-contnet">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio tempora dolorum corrupti, maxime ipsa quisquam at sit
                provident quae enim! Itaque, ipsam expedita!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio tempora dolorum corrupti, maxime ipsa quisquam at sit
                provident quae enim! Itaque, ipsam expedita!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio tempora dolorum corrupti, maxime ipsa quisquam at sit
                provident quae enim! Itaque, ipsam expedita!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio tempora dolorum corrupti, maxime ipsa quisquam at sit
                provident quae enim! Itaque, ipsam expedita!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Blog;
