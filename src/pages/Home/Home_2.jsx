import React from "react";
import "./Home_2.css";
import textborder from "../../assets/images/border-text.svg";

const About = () => {
  return (
    <div className="Home_2__container">
      <div className="Home_2__wrapper">
        <div style={{ display: "flex" }}>
          <div className="Home_2__phrase">WE ARE A</div>
          <div className="Home_2__phrase_box">CREATIVE</div>
        </div>

        <div className="Home_2__phrase">PARTNER</div>
        <small className="Home_2__phrase_small">
          We will be your creative partner in the journey that you are on,
          together we can bring the gap closer between your vision and your
          audience.
        </small>
      </div>
    </div>
  );
};

export default About;
