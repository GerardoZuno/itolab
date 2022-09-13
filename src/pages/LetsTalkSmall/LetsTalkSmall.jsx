import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import CustomForm from "../../components/CustomForm/CustomForm";
import InfoDate from "../../components/InfoDate";
import MineSweeper from "../../components/MineSweeper/MineSweeper";

import "./LetsTalkSmall.css";

const LetsTalkSmall = () => {
  const [isFilter, setIsFilter] = useState(true);

  const handleShowFilter = () => {
    setIsFilter(false);
  };
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
      className="LetsTalkSmall__container"
    >
      <div className="LetsTalkSmall__wrapper">
        <div className="LetsTalkSmall__Header_contaner">
          <Header
            phrase="We can´t wait to hear to hear from you, dont forget to submit your enquiry 
the metaverse is waiting for you... "
          />
        </div>
        <div className="LetsTalkSmall__maincontent_wrapper">
          <div className="LetsTalkSmall__maincontent_left_container">
            <div className="LetsTalkSmall__maincontent_left_binary">
              01001001 01010100 01001111 00100000
            </div>
            <div className="LetsTalkSmall__maincontent_left_form">
              <CustomForm handleShowFilter={handleShowFilter} />
            </div>
          </div>
          <div className="LetsTalkSmall__maincontent_right_container">
            <MineSweeper isFilter={isFilter} />
          </div>
          <div className="LetsTalkSmall__maincontent_left_infodate_container">
            <div className="LetsTalkSmall__maincontent_left_infodate">
              <InfoDate />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LetsTalkSmall;
