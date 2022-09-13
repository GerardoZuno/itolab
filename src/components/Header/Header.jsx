import React from "react";
import "./Header.css";
import talkLogo from "../../assets/images/talk-logo.svg";

const Header = ({ phrase, sectionPhoto }) => {
  return (
    <div>
      <div className="Header__wrapper">
        <div className="Header__title_wrapper">
          {sectionPhoto ? (
            <div className="Header__title_photo">
              <img src={sectionPhoto} alt="" />
            </div>
          ) : (
            <div className="Header__title_photo_talk">
              <img src={talkLogo} alt="" />
            </div>
          )}
        </div>
        <div>
          <p className="Header__phrase">{phrase}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
