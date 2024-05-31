import React from "react";
import "../Design/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <section>
          <div className="about">
            <h2>About us</h2>
            <p>
              Phasellus scelerisque ornare nisl sit amet pulvinar. Nunc non
              scelerisque augue. Proin et sollicitudin velit.
            </p>

            <div className="address">
              <p>
                <i class="fa-solid fa-location-dot"></i> &nbsp; BlueDart
                Marthandam &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(K.K District) Tamil
                Nadu, IND
              </p>
              <p>
                <i class="fa-solid fa-envelope-open"></i> &nbsp;
                info@smarteyeapps.com &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                &nbsp;sales@smarteyeapps.com
              </p>

              <p>
                <i class="fa-solid fa-address-book"></i> &nbsp; +91 7345689756
                <br />
                &nbsp; &nbsp; &nbsp; +91 89765345768
              </p>
            </div>
          </div>

          <div className="about sb">
            <h2>From Latest Blog</h2>
            <p>
              Phasellus scelerisque ornare nisl sit amet pulvinar. Nunc non
              scelerisque augue. Proin et sollicitudin velit.
            </p>
            <br />

            <p>
              Phasellus scelerisque ornare nisl sit amet pulvinar. Nunc non
              scelerisque augue. Proin et sollicitudin velit.
            </p>
            <br />

            <p>
              Phasellus scelerisque ornare nisl sit amet pulvinar. Nunc non
              scelerisque augue. Proin et sollicitudin velit.
            </p>

            <div className="address"></div>
          </div>

          <div className="about">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="address">
              <p>
                <i class="fa-solid fa-angles-right"></i>Home
              </p>

              <p>
                <i class="fa-solid fa-angles-right"></i>About Us
              </p>

              <p>
                <i class="fa-solid fa-angles-right"></i>Service
              </p>

              <p>
                <i class="fa-solid fa-angles-right"></i>Blog
              </p>

              <p>
                <i class="fa-solid fa-angles-right"></i>Gallary
              </p>

              <p>
                <i class="fa-solid fa-angles-right"></i>Contacts us
              </p>
            </div>
          </div>

          <div className="about">
            <h2>Easy Tags</h2>

            <div className="skill">
              <p>Finance</p>
              <p>Web Design</p>
              <p>Internet Pro</p>
              <p>Node js</p>
              <p>Java Swing</p>
              <p>Angular js</p>
              <p>Vue js</p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
