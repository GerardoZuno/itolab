import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import DesignBox from "../../components/DesignBox/DesignBox";
import Infodate from "../../components/InfoDate";
import designLogo from "../../assets/images/design-logo.svg";
import { Portal } from "react-portal";

import "./ItoDesign.css";

const ItoDesign = () => {
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
      className="Design__container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{
        delay: 0.2,
        stiffness: 100,
        type: "tween",
        duration: 0.5,
      }}
    >
      <div className="Design__wrapper">
        <div className="Design__Header__container">
          <Header
            sectionPhoto={designLogo}
            phrase="ITO D3SGN is where most of the magic happens, here we create all of our digital art, including renders,
            animations, UI/UX and a whide variety of graphics.
            "
          />
        </div>
        <div className="Design__content_wrapper">
          <div className="Design__left__container">
            <div className="Design__subtitle__container">
              <p>
                <span className="Design__subtitle__boder">CREATIVE</span> LAB
              </p>
            </div>
            <div className="Design__text__container">
              <div className="Design__text__left">
                <p>
                  Alongside our blockchain specialists we are equiped to develop
                  any type of digital asset, enough to be able to complement
                  your vision and bring it to the metaverse..
                </p>
                <p>
                  Through our specialized services, we can find offerings that
                  go from art direction and production of artistic projects, to
                  a complete set of integral branding services.
                </p>
                <p>
                  With effort we have gathered an unprecedented team of talents,
                  all brought together to complement the creative needs of web 3
                  ,able to potentialize any projects and take them to higher
                  levels. ITO LAB thrives from collaborating with emergent
                  artists, tech companies and multidisciplinary creative
                  projects, helping in the process to transcend their artistic
                  vision into to the digital world (or the other way around).
                </p>
                <p>
                  We tailor our packages to perfectly accommodate any of our
                  clients needs.
                </p>
              </div>
            </div>
          </div>
          <div className="Design__right__container">
            <div className="Design__subtitle__container">
              <p>
                ART
                <span className="Design__subtitle__boder">
                  DIRECTION
                </span> //{" "}
                <span
                  style={{ background: "black", color: "white" }}
                  className="Design__subtitle__black"
                >
                  PRODUCTION
                </span>
              </p>
            </div>
            <div
              style={{
                position: "relative",
                height: "29em",
                width: "100%",
              }}
            >
              <div className="Design__portal__container" ref={wrapperBox}>
                <Portal>
                  <div
                    className="Design__portal__wrapper"
                    style={{
                      width: boxWidth,
                      height: boxHeight,
                    }}
                  >
                    <DesignBox />
                    <div style={{ width: boxWidth }} ref={info}>
                      <Infodate />
                    </div>
                  </div>
                </Portal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ItoDesign;
