import React, { useState, useEffect, useRef, useContext } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import LetsTalk from "../LetsTalk/LetsTalk";
import ItoStudio from "../ItoStudio/ItoStudio";
import ItoGallery from "../ItoGallery/ItoGallery";
import ItoDesign from "../ItoDesign";
import About from "../About";
import { useInView } from "react-intersection-observer";
import { AppContext } from "../../context/Context";

import "./MainBigSize.css";
const MIN_WIDTH = 800;

const MainBigSize = () => {
  const letsTalk = useInView({ threshold: 0.1 });
  const itoStudio = useInView({ threshold: 0.1 });
  const itoGallery = useInView({ threshold: 0.1 });
  const itoDesign = useInView({ threshold: 0.1 });
  const aboutUs = useInView({ threshold: 0.1 });

  const { setIsGallery, setIsStudio, setIsTalk, setIsDesign, setIsAbout } =
    useContext(AppContext);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [currentScrollX, setCurrentScrollX] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  if (letsTalk.inView) {
    setIsTalk(true);
  } else {
    setIsTalk(false);
  }

  if (itoStudio.inView) {
    setIsStudio(true);
  } else {
    setIsStudio(false);
  }

  if (itoGallery.inView) {
    setIsGallery(true);
  } else {
    setIsGallery(false);
  }

  if (itoDesign.inView) {
    setIsDesign(true);
  } else {
    setIsDesign(false);
  }

  if (aboutUs.inView) {
    setIsAbout(true);
  } else {
    setIsAbout(false);
  }

  const handleWindowSize = () => {
    setScreenHeight(window.innerHeight);
    setScreenWidth(window.innerWidth);
  };

  const scrollLeft = (e) => {
    handleInidicatorScroll();
    if (screenWidth < MIN_WIDTH) {
      return {};
    }
    window.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
  };
  const handleSwipeRight = (e) => {
    if (screenWidth > MIN_WIDTH) {
      return {};
    }
    window.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
  };
  const handleSwipeLeft = (e) => {
    if (screenWidth > MIN_WIDTH) {
      return {};
    }
    window.scrollBy({ left: window.innerWidth, behavior: "smooth" });
  };
  const scrollRigth = (e) => {
    handleInidicatorScroll();
    if (screenWidth < MIN_WIDTH) {
      return {};
    }
    window.scrollBy({ left: window.innerWidth, behavior: "smooth" });
  };

  const handleInidicatorScroll = () => {
    const scrollX =
      (document.documentElement.scrollWidth / window.scrollX) * 100;

    setCurrentScrollX(scrollX);
  };

  return (
    <div className="MainBigSize__container">
      <ReactScrollWheelHandler
        upHandler={(e) => scrollLeft(e)}
        downHandler={(e) => scrollRigth(e)}
        rightHandler={(e) => handleSwipeRight(e)}
        leftHandler={(e) => handleSwipeLeft(e)}
        timeout={700}
      >
        <div className="MainBigSize__wrapper">
          {/* FIXED BARS  */}
          <div className="MainBigSize__stickyBars">
            <div className="MainBigSize__stickyBar_top_container">
              <div className="MainBigSize__stickyBar_top" />
            </div>
            <div className="MainBigSize__stickyBar_bottom_container">
              <ScrollBar currentScrollX={currentScrollX} />
            </div>
          </div>
          {/* MAIN SCREENS */}
          <div
            className="MainBigSize__Screens__wrapper"
            id="about"
            ref={aboutUs.ref}
          >
            <About />
          </div>
          <div
            className="MainBigSize__Screens__wrapper"
            id="design"
            ref={itoDesign.ref}
          >
            <ItoDesign />
          </div>
          <div
            className="MainBigSize__Screens__wrapper"
            id="gallery"
            ref={itoGallery.ref}
          >
            <ItoGallery />
          </div>
          <div
            className="MainBigSize__Screens__wrapper"
            id="studio"
            ref={itoStudio.ref}
          >
            <ItoStudio />
          </div>
          <div
            className="MainBigSize__Screens__wrapper"
            id="talk"
            ref={letsTalk.ref}
          >
            <LetsTalk />
          </div>
        </div>
      </ReactScrollWheelHandler>
    </div>
  );
};

export default MainBigSize;
