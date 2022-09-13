import React from "react";
import "./Home_3.css";
import textborder from "../../assets/images/border-text.svg";

const About = () => {
  return (
    <div className="Home_3__container">
      <div className="Home_3__wrapper">
        <div className="Home_3__box">
          {/* FIRTS PHASE */}
          <div className="Home_3__phrase">REAL</div>
          <div className="Home_3__phrase Home_3__contain">ARTISTS</div>
          <div className="Home_3__phrase">AND</div>
        </div>
        {/* SECOND PHRASE */}
        <div className="Home_3__box">
          <div
            className="Home_3__phrase"
            style={{
              color: "transparent",
              WebkitTextStroke: "0.2px #333333",
            }}
          >
            DESIGNERS
          </div>
          <div className="Home_3__phrase" style={{ letterSpacing: "6px" }}>
            BRINGING
          </div>
        </div>
        {/* THIRTH PHRASE */}
        <div className="Home_3__box">
          <div className="Home_3__phrase">TRUE</div>
          <div className="Home_3__phrase">ARTSITIC</div>
          <div className="Home_3__phrase">VALUE</div>
        </div>
        {/* FOURTH PHRASE */}

        <div
          className="Home_3__box"
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div className="Home_3__phrase">TO</div>
          <div
            className="Home_3__phrase"
            style={{
              background: "black",
              color: "white",
              width: "auto",
              padding: "0 0 0 7px",
            }}
          >
            WEB 3
          </div>
        </div>
        <div className="Home_3__box">
          <small className="Home_3__phrase_small">
            The first creative studio 100% equipped with world renowned artists
            and designers to complement the creative needs of web3.
          </small>
        </div>
      </div>
    </div>
  );
};

export default About;
