import React, { useState, useEffect, useContext } from "react";
import Home_1 from "./Home";
import Home_2 from "./Home_2";
import Home_3 from "./Home_3";
import Home_4 from "./Home_4";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import GlitchTitle from "../../components/Glitch/GlitchTitle";
import InfoDate from "../../components/InfoDate";
import { AppContext } from "../../context/Context";

import "./index.css";

const MIN_WIDTH = 800;

const Home = () => {
  const mainHome = useInView();
  const home4 = useInView({ threshold: 0.1 });
  const { toggleNavBarPosition } = useContext(AppContext);
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, [windowWidth, home4.inView]);

  if (mainHome.inView) {
    toggleNavBarPosition(true);
  }

  const handleWindowSizeChange = () => {
    setWindowWidth(window.innerWidth);
  };

  const child = {
    width: `100vw`,
    height: `calc(100vh)`,
    background: "transparent",
    overflowY: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const scrollRigth = (e) => {
    if (windowWidth < MIN_WIDTH) {
      console.log("screen is too big");
      return {};
    }

    if (home4.inView) {
      window.location.href = "/main";
    }
    console.log("right");
    window.scrollBy({ left: window.innerWidth, behavior: "smooth" });
  };

  const scrollLeft = (e) => {
    if (windowWidth < MIN_WIDTH) {
      console.log("screen is too big");
      return {};
    }
    console.log("left");
    window.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
  };

  const handleSwipeRight = (e) => {
    if (windowWidth > MIN_WIDTH) {
      console.log("screen is too big");
      return {};
    }

    window.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
  };

  const handleSwipeLeft = (e) => {
    if (windowWidth > MIN_WIDTH) {
      console.log("screen is too big");
      return {};
    }
    if (home4.inView) {
      console.log("hey");
      window.location.href = "/main";
    }
    window.scrollBy({ left: window.innerWidth, behavior: "smooth" });
  };
  return (
    <div className="home">
      <ReactScrollWheelHandler
        upHandler={(e) => scrollLeft(e)}
        downHandler={(e) => scrollRigth(e)}
        rightHandler={(e) => handleSwipeRight(e)}
        leftHandler={(e) => handleSwipeLeft(e)}
        timeout={700}
      >
        <div
          ref={mainHome.ref}
          style={{
            width: "400vw",
            height: "cal(100vh)",
            display: "flex",
          }}
        >
          <div style={child}>
            <Home_1 />
            <div className="home__info_wrap">
              <GlitchTitle />
              <InfoDate isCode />
            </div>
          </div>
          <div style={child}>
            <Home_2 />
          </div>
          <div style={child}>
            <Home_3 />
          </div>
          <div style={child} ref={home4.ref}>
            <Home_4 />
          </div>
        </div>
      </ReactScrollWheelHandler>
    </div>
  );
};

export default Home;
