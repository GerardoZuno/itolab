import React from "react";
import { Link } from "react-router-dom";
import "./Home_4.css";

const About = () => {
  return (
    <div className="Home_4__container">
      <div className="Home_4__wrapper">
        <div className="Home_4__box">
          {/* FIRTS PHASE */}
          <div className="Home_4__phrase">ONE</div>
          <div className="Home_4__phrase Home_4_contain">COMPANY</div>
          <div className="Home_4__phrase">TO</div>
        </div>
        {/* SECOND PHRASE */}
        <div className="Home_4__box">
          <div className="Home_4__phrase" style={{ width: "100%" }}>
            STRATEGIZE,
          </div>
        </div>
        {/* THIRTH PHRASE */}
        <div className="Home_4__box">
          <div className="Home_4__phrase" style={{ width: "100%" }}>
            SUPPORT
          </div>
          <div className="Home_4__phrase">AND</div>
        </div>
        {/* FORTH PHRASE */}
        <div className="Home_4__box">
          <div className="Home_4__phrase">CREATE</div>
          <div className="Home_4__phrase">YOUR</div>

          <div
            className="Home_4__phrase"
            style={{
              background: "black",
              color: "white",
              width: "auto",
              padding: "0 0 0 7px",
            }}
          >
            BRAND
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
