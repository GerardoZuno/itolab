import React, { useState, useEffect, useRe, useRef } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import studioLogo from "../../assets/images/studio-logo.svg";
// import StudioBox from "../../components/StudioBox/StudioBox";
import StudioBoxSmall from "../../components/StudioBox/StudioBoxSmall";
import EmptyBoxSmall from "../../components/StudioBox/EmptyBoxSmall";
import InfoDate from "../../components/InfoDate";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import "./ItoStudioSmall.css";

const ItoStudioSmall = () => {
  const info = useRef(null);
  const wrapperBox = useRef(null);

  const [isGuest, setIsGuest] = useState(false);
  const [infoHeight, setInfoHeight] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);

  useEffect(() => {
    const infoHeight = info.current.offsetHeight;
    const boxHeight = wrapperBox.current.offsetHeight;

    setBoxHeight(boxHeight);
    setInfoHeight(infoHeight);
  }, []);

  console.log(boxHeight);

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
      className="StudioSmall__container"
    >
      <div className="StudioSmall__wrapper">
        <div className="StudioSmall__Header_contaner">
          <Header
            sectionPhoto={studioLogo}
            phrase="We can´t wait to hear to hear from you, dont forget to submit your enquiry 
the metaverse is waiting for you... "
          />
        </div>
        <div className="StudioSmall__maincontent_wrapper">
          <div className="StudioSmall__section_1">
            <h3>INK THE METAVERSE</h3>
            <p>AT ITO EACH PIECE TATTOOED WILL BE PAIRED WITH AN NFT,</p>
            <p>
              It will be given to its owner for them to keep forever.
              <br />
              This digital asset will carry all the different characteristics
              that a tattoo lacked in the past, including the possibility to
              gain value through time and be passed on generation after
              generation. It will provide it with timelessness.
            </p>
            <p>Something never seen before...</p>
          </div>
          <div className="StudioSmall__section_2">
            <p>HOW DOES IT WORK?</p>
            <p>
              Whenever a piece is tattooed by one of our artists, automatically
              an NFT will be minted, paired to the original tattoo design,
              unique and specifically crafted each time.
            </p>
            <p>
              Our different options of digital assets (paired to the tattoos)
              will go from simple 3D images, fully animated NFTs, or even an
              adaptation of the tattoo into a print, sculpture or jewelry piece.
            </p>
          </div>
          <div className="StudioSmall__section_3">
            <h3>
              <span className="StudioSmall__box">
                {!isGuest ? "RESIDENTS" : "GUESTS"}
              </span>{" "}
              ARTISTS
              <a onClick={() => setIsGuest(!isGuest)}>
                <span className="ItoStudio__subtitle__anchor">
                  {!isGuest ? " /// GUESTS" : " /// RESIDENTS"}
                </span>
              </a>
            </h3>
            <div ref={wrapperBox} style={{ height: "400px", width: "100%" }}>
              {!isGuest ? (
                <div style={{ height: "100%" }}>
                  <StudioBoxSmall
                    infoHeight={infoHeight}
                    boxHeight={boxHeight}
                  />
                  <div style={{ width: "100%" }} ref={info}>
                    <InfoDate />
                  </div>
                </div>
              ) : (
                <>
                  <EmptyBoxSmall
                    infoHeight={infoHeight}
                    boxHeight={boxHeight}
                  />
                  <div style={{ width: "100%" }} ref={info}>
                    <InfoDate />
                  </div>
                </>
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
