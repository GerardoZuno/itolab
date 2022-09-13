import React, { useState, useEffect } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import LetsTalkSmall from "../LetsTalkSmall";
import ItoStudioSmall from "../ItoStudioSmall/ItoStudioSmall";
import ItoGallerySmall from "../ItoGallerySmall";
import DesignSmall from "../DesignSmall";
import AboutSmall from "../AboutSmall";

import "./MainSmallSize.css";

const MainSmallSize = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  const handleWindowSize = () => {
    setScreenHeight(window.innerHeight);
    setScreenWidth(window.innerWidth);
  };

  const handleSwipeLeft = (e) => {
    window.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    console.log("left");
  };
  const handleSwipeRight = (e) => {
    window.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    console.log("right");
  };

  return (
    <div className="">
      <ReactScrollWheelHandler
        rightHandler={(e) => handleSwipeRight(e)}
        leftHandler={(e) => handleSwipeLeft(e)}
        timeout={700}
      >
        <div className="MainSmallSize__wrapper">
          {/* FIXED BARS  */}
          <div className="MainSmallSize__stickyBars">
            <div className="MainSmallSize__stickyBar_top_container">
              <div className="MainSmallSize__stickyBar_top" />
            </div>
            {/* <div className="MainSmallSize__stickyBar_bottom_container">
              <ScrollBar />
            </div> */}
          </div>
          {/* MAIN SCREENS */}
          <div className="MainSmallSize__Screens__wrapper">
            <AboutSmall />
          </div>
          <div className="MainSmallSize__Screens__wrapper" id="design">
            {" "}
            <DesignSmall />
          </div>
          <div className="MainSmallSize__Screens__wrapper" id="gallery">
            <ItoGallerySmall />
          </div>
          <div className="MainSmallSize__Screens__wrapper" id="studio">
            <ItoStudioSmall />
          </div>
          <div className="MainSmallSize__Screens__wrapper" id="talk">
            <LetsTalkSmall />
          </div>
        </div>
      </ReactScrollWheelHandler>
    </div>
  );
};

export default MainSmallSize;
