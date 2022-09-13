import React, { useState, useContext } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/Context";
import Menu from "../../components/Menu/Menu";
import "./NavBar.css";

const NavBar = () => {
  const { isTalk, isStudio, isGallery, isDesign, isAbout } =
    useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__wrapper_left">
        <div className="navbar__logo_container">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar__folders">
          <a
            href="/main#about"
            className={isAbout ? "navbar__about_focused" : ""}
          >
            <div />
          </a>
          <a
            href="/main#design"
            className={isDesign ? "navbar__design_focused" : ""}
          >
            <div />
          </a>
          <a
            href="/main#gallery"
            className={isGallery ? "navbar__gallery_focused" : ""}
          >
            <div />
          </a>
          <a
            href="/main#studio"
            className={isStudio ? "navbar__studio_focused" : ""}
          >
            <div />
          </a>
        </div>
      </div>
      <div className="navbar__wrapper_right">
        <div className="navbar_lets_talk">
          <a href="/main#talk">Let's Talk</a>
        </div>
        <div className="navbar__menu" onClick={() => setShowMenu(!showMenu)}>
          <p className="navbar__menu__title">{"<menu>"}</p>
        </div>
      </div>
      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </nav>
  );
};

export default NavBar;
