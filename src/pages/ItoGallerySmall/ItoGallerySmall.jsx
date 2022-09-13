import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import galleryLogo from "../../assets/images/gallery-logo.svg";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import Location from "../../components/Location/Location";
import InfoDate from "../../components/InfoDate";
import GalleryBoxSmall from "../../components/GalleryBox/GalleryBoxSmall";
import EmptyBoxSmall from "../../components/GalleryBox/EmptyBoxSmall";

import "./ItoGallerySmall.css";

const ItoStudioSmall = () => {
  const wrapperBox = useRef(null);
  const info = useRef(null);
  const [infoHeight, setInfoHeight] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    const infoHeight = info.current.offsetHeight;
    const boxHeight = wrapperBox.current.offsetHeight;

    setBoxHeight(boxHeight);
    setInfoHeight(infoHeight);
  }, []);
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{
        delay: 0.2,
        stiffness: 100,
        type: "tween",
        duration: 0.5,
      }}
      className="GallerySmall__container"
    >
      <div className="GallerySmall__wrapper">
        <div className="GallerySmall__Header_container">
          <Header
            sectionPhoto={galleryLogo}
            phrase="Designed to exhibit the works of our artists. and hosting experiences and events, both physically and digitally."
          />
        </div>
        <div className="GallerySmall__maincontent_wrapper">
          <div className="GallerySmall__subtitle">
            <h3>
              <span>PHYGITAL</span> GALLERY
            </h3>
          </div>
          <div style={{ width: "100%" }}>
            <div className="GallerySmall__box_text">
              <p>
                This phygital center is essential for the armonic co-existance
                of both the digital and the real world, it helps us maximize our
                creative potential.
              </p>
              <p>
                The gallery hosts inmersive art experiences and cultural events,
                a real phygital house located in heart of Mexico City and in the
                center of the metaverse.
              </p>
            </div>
            <div style={{ width: "100%", margin: "2em 0 2em 0" }}>
              <Location />
            </div>
            <div className="GallerySmall__subtitle">
              <h3 onClick={() => setIsGuest(!isGuest)}>
                {!isGuest ? (
                  <>
                    <span>NFT</span> DROPS /// EVENTS
                  </>
                ) : (
                  <>
                    <span>EVENTS</span> /// NFT DROPS
                  </>
                )}
              </h3>
            </div>
            <div ref={wrapperBox} style={{ height: "400px", width: "100%" }}>
              {!isGuest ? (
                <div style={{ height: "100%" }}>
                  <GalleryBoxSmall
                    infoHeight={infoHeight}
                    boxHeight={boxHeight}
                  />
                  <div style={{ width: "100%" }} ref={info}>
                    <InfoDate />
                  </div>
                </div>
              ) : (
                <div style={{ height: "100%" }}>
                  <EmptyBoxSmall
                    infoHeight={infoHeight}
                    boxHeight={boxHeight}
                  />
                  <div style={{ width: "100%" }} ref={info}>
                    <InfoDate />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <ScrollBar />
      </div>
    </motion.div>
  );
};

export default ItoStudioSmall;
