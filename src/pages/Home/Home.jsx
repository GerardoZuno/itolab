import React from "react";
import GlitchTitle from "../../components/Glitch/GlitchTitle";
import ImageHover from "../../components/ImageHover/ImageHover";
import InfoDate from "../../components/InfoDate";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* LOGO */}
      <div className="home__wrapper">
        <div className="home__logo_wrap">
          <div id="title">
            <ImageHover />
          </div>
          <h2 className="home__logo_text">PHYGITAL LABORATORIES</h2>
        </div>

        {/* INFO */}
        {/* <div className="home__info_wrap">
          <GlitchTitle />
          <InfoDate />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
