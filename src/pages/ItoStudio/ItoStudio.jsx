import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import StudioBox from "../../components/StudioBox/StudioBox";
import EmptyBox from "../../components/StudioBox/EmptyBox";
import Infodate from "../../components/InfoDate";
import studioLogo from "../../assets/images/studio-logo.svg";
import "./ItoStudio.css";
import { Portal } from "react-portal";

const ItoStudio = () => {
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
      className="ItoStudio__container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{
        delay: 0.2,
        stiffness: 100,
        type: "tween",
        duration: 0.5,
      }}
    >
      <div className="ItoStudio__wrapper">
        <div className="ItoStudio__Header__container">
          <Header
            sectionPhoto={studioLogo}
            phrase="ITO STUDIO is an inhouse contemporary tattoo studio, we succesfully implemented blockchain
technology into tattooing as a case study, a place
where the physical world collides with the digital one and manages to coexist
in perfect harmony.
 "
          />
        </div>
        <div className="ItoStudio__content_wrapper">
          <div className="ItoStudio__left__container">
            <div className="ItoStudio__subtitle__container">
              <p>INK THE METAVERSE</p>
            </div>
            <div className="ItoStudio__text__container">
              <div className="ItoStudio__text__left">
                <p style={{ fontWeight: "bold" }}>
                  AT ITO EACH PIECE TATTOOED WILL BE PAIRED WITH AN NFT,
                </p>
                <p>
                  It will be given to its owner for them to keep forever.
                  <br />
                  This digital asset will carry all the different
                  characteristics that a tattoo lacked in the past, including
                  the possibility to gain value through time and be passed on
                  generation after generation. It will provide it with
                  timelessness.
                </p>
                <p>Something never seen before...</p>
              </div>
              <div className="ItoStudio__text__right">
                <p style={{ fontWeight: "bold" }}>HOW DOES IT WORK?</p>
                <p>
                  Whenever a piece is tattooed by one of our artists,
                  automatically an NFT will be minted, paired to the original
                  tattoo design, unique and specifically crafted each time.
                </p>
                <p>
                  Our different options of digital assets (paired to the
                  tattoos) will go from simple 3D images, fully animated NFTs,
                  or even an adaptation of the tattoo into a print, sculpture or
                  jewelry piece.
                </p>
              </div>
            </div>
          </div>
          <div className="ItoStudio__right__container">
            <div className="ItoStudio__subtitle__container">
              <p>
                <span className="ItoStudio__subtitle__box">
                  {!isGuest ? "RESIDENTS " : "GUESTS "}
                </span>
                ARTISTS
                <a onClick={() => setIsGuest(!isGuest)}>
                  <span className="ItoStudio__subtitle__anchor">
                    {!isGuest ? " ///GUESTS" : " ///RESIDENTS"}
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
                <div className="ItoStudio__portal__container" ref={wrapperBox}>
                  <Portal>
                    <div
                      className="ItoStudio__portal__wrapper"
                      style={{
                        width: boxWidth,
                        height: boxHeight,
                      }}
                    >
                      <StudioBox
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
                <div className="ItoStudio__portal__container" ref={wrapperBox}>
                  <Portal>
                    <div
                      className="ItoStudio__portal__wrapper"
                      style={{
                        width: boxWidth,
                        height: boxHeight,
                      }}
                    >
                      <EmptyBox infoHeight={infoHeight} boxHeight={boxHeight} />

                      <div style={{ width: boxWidth }} ref={info}>
                        <Infodate />
                      </div>
                    </div>
                  </Portal>
                </div>
              )}
            </div>

            {/* <div className="ItoStudio__infodate__container">
              <Infodate />
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ItoStudio;
