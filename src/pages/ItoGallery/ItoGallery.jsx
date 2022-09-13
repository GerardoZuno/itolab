import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import GalleryBox from "../../components/GalleryBox/GalleryBox";
import EmptyBox from "../../components/GalleryBox/EmptyBox";
import Infodate from "../../components/InfoDate";
import Location from "../../components/Location/Location";
import galleryLogo from "../../assets/images/gallery-logo.svg";
import { Portal } from "react-portal";

import "./ItoGallery.css";

const ItoGallery = () => {
  const info = useRef(null);
  const wrapperBox = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHieght] = useState(0);

  const [infoHeight, setInfoHeight] = useState(0);

  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    const boxWidth = wrapperBox.current.offsetWidth;
    const boxHeight = wrapperBox.current.offsetHeight;

    const infoHeight = info.current.offsetHeight;
    setInfoHeight(infoHeight);
    setBoxWidth(boxWidth);
    setBoxHieght(boxHeight);
  }, []);

  return (
    <motion.div
      className="Gallery__container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{
        delay: 0.2,
        stiffness: 100,
        type: "tween",
        duration: 0.5,
      }}
    >
      <div className="Gallery__wrapper">
        <div className="Gallery__Header__container">
          <Header
            sectionPhoto={galleryLogo}
            phrase="Designed to exhibit the works of our artists. and hosting experiences and events, both physically and digitally."
          />
        </div>
        <div className="Gallery__content_wrapper">
          <div className="Gallery__left__container">
            <div className="Gallery__subtitle__container">
              <p>
                <span className="Gallery__subtitle__boder">PHYGITAL</span>{" "}
                GALLERY
              </p>
            </div>
            <div className="Gallery__text__container">
              <div className="Gallery__text__left">
                <p>
                  The gallery hosts inmersive art experiences and cultural
                  events, a real phygital house located in heart of Mexico City
                  and in the center of web 3.
                </p>
                <p>
                  The gallery hosts inmersive art experiences and cultural
                  events, a real phygital house located in heart of Mexico City
                  and in the center of web 3.
                </p>
              </div>
              <div style={{ width: "100%" }}>
                <Location />
              </div>
            </div>
          </div>
          <div className="Gallery__right__container">
            <div className="Gallery__subtitle__container">
              <p>
                <span className="Gallery__subtitle__box">
                  {!isGuest ? "NFT" : "EVENTS"}
                </span>{" "}
                <span style={{ letterSpacing: "5px" }}>
                  {!isGuest ? "DROPS" : ""}
                </span>
                <a onClick={() => setIsGuest(!isGuest)}>
                  <span className="Gallery__subtitle__anchor">
                    {!isGuest ? " ///EVENTS" : " ///NFT DROPS"}
                  </span>
                </a>
              </p>
            </div>
            <div
              style={{
                position: "relative",
                height: "29em",
                width: "100%",
              }}
            >
              {!isGuest ? (
                <div className="Gallery__portal__container" ref={wrapperBox}>
                  <Portal>
                    <div
                      className="Gallery__portal__wrapper"
                      style={{
                        width: boxWidth,
                        height: boxHeight,
                      }}
                    >
                      <GalleryBox
                        infoHeight={infoHeight}
                        boxHeight={boxHeight}
                      />
                      <div style={{ width: boxWidth }} ref={info}>
                        <Infodate />
                      </div>
                    </div>
                  </Portal>
                </div>
              ) : (
                <div className="Gallery__portal__container" ref={wrapperBox}>
                  <Portal>
                    <div
                      className="Gallery__portal__wrapper"
                      style={{
                        width: boxWidth,
                        height: boxHeight,
                      }}
                    >
                      <EmptyBox
                        infoHeight={infoHeight}
                        boxHeight={boxHeight}
                        prhase="NO EVENTS IN THE CALENDAR"
                      />

                      <div style={{ width: boxWidth }} ref={info}>
                        <Infodate />
                      </div>
                    </div>
                  </Portal>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ItoGallery;
