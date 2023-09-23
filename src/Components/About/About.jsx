import React from "react";
import aboutF from "../../Assets/about.jpg";
import { Link } from "react-router-dom";

import "./About.css";

const About = () => {
  return (
    <section className="about container section">
      <div className="card">
        <div className="imageDiv">
          <img src={aboutF} class="card__image" alt="About us image" />
        </div>
        <div className="card__content">
          <h3>About Us</h3>
          <p>
            Just worship is a nondenominational , live worship and praise
            outreaches organised by a team of worship leaders in and outside
            Nigeria and Africa with the sole intent of inspiring intimacy with
            God through worship and praise.
          </p>

          <h3 className="long">Our Mission</h3>
          <p>
            Igniting the fire of revival and raising a generation of Genuine Worshippers.
          </p>
          {/* <div className="aboutBtn">
            <button className="btn">
              <Link to="/about">Read More..</Link>
              </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
