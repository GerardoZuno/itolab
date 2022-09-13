import React, { useState, useEffect, Fragment } from "react";
import Header from "../../components/Header/Header";
import CustomForm from "../../components/CustomForm/CustomForm";
import MineSweeper from "../../components/MineSweeper/MineSweeper";
import InfoDateVertical from "../../components/InfoDateVertical/InfoDateVertical";
import InfoDate from "../../components/InfoDate";
import { motion } from "framer-motion";
import talkLogo from "../../assets/images/talk-logo.svg";
import "./index.css";
const LetsTalk = () => {
  const [isFilter, setIsFilter] = useState(true);

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

  const handleShowFilter = () => {
    setIsFilter(false);
  };

  return (
    <motion.div
      className="LetsTalk__container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{
        delay: 0.5,
        type: "keyframes",
        duration: 0.5,
      }}
    >
      <div className="LetsTalk__wrapper">
        <div className="LetsTalk__Header_contaner">
          <Header
            // sectionPhoto={talkLogo}
            phrase="We can´t wait to hear to hear from you, dont forget to submit your enquiry 
the metaverse is waiting for you... "
          />
        </div>
        {screenWidth >= 951 && (
          <div className="LetsTalk__maincontent_wrapper">
            <div className="LetsTalk__maincontent_left_container">
              <div className="LetsTalk__maincontent_left_binary">
                01001001 01010100 01001111 00100000
              </div>
              <div className="LetsTalk__maincontent_left_form">
                <CustomForm handleShowFilter={handleShowFilter} />
              </div>
              <div className="LetsTalk__maincontent_left_infodate_container">
                <div className="LetsTalk__maincontent_left_infodate">
                  <InfoDateVertical />
                </div>
              </div>
            </div>
            <div className="LetsTalk__maincontent_right_container">
              <MineSweeper isFilter={isFilter} />
            </div>
          </div>
        )}
        {screenWidth <= 950 && (
          <div className="LetsTalkMobile__maincontent_wrapper">
            <div className="LetsTalkMobile__maincontent_left_container">
              <div className="LetsTalkMobile__maincontent_left_binary">
                01001001 01010100 01001111 00100000
              </div>
              <div className="LetsTalkMobile__maincontent_left_form">
                <CustomForm handleShowFilter={handleShowFilter} />
              </div>
            </div>
            <div className="LetsTalkMobile__maincontent_right_container">
              <MineSweeper isFilter={isFilter} />
            </div>
            <div className="LetsTalkMobile__maincontent_left_infodate_container">
              <div className="LetsTalkMobile__maincontent_left_infodate">
                <InfoDate />
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default LetsTalk;
