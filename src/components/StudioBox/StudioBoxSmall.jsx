import React, { useEffect, useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import instagramIcon from "../../assets/images/instagram.svg";
import frontAndres from "../../assets/images/front-andres.svg";
import backRodrigo from "../../assets/images/back-rodrigo.svg";

import longArrow from "../../assets/images/longArrow.svg";
import { AppContext } from "../../context/Context";

import "./StudioBoxSmall.css";

const StudioBoxSmall = ({ infoHeight, boxHeight }) => {
  const { togglePortal } = useContext(AppContext);
  const wrapper = useRef(null);
  const child_1 = useRef(null);
  const child_2 = useRef(null);
  const child_3 = useRef(null);
  const child_4 = useRef(null);
  const child_5 = useRef(null);

  const [heightWrapper, setHeightWrapper] = useState(0);
  const [childrenWidth, setChildrenWidth] = useState({
    child1: 0,
    child2: 0,
    child3: 0,
    child4: 0,
    child5: 0,
  });

  console.log(boxHeight, "boxHeight");

  useEffect(() => {
    setHeightWrapper(wrapper.current.offsetHeight);
    console.log(wrapper, "wrapper.current.offsetHeight");
    setChildrenWidth({
      child1: child_1.current.offsetHeight,
      child2: child_2.current.offsetHeight,
      child3: child_3.current.offsetHeight,
      child4: child_4.current.offsetHeight,
      child5: child_5.current.offsetHeight,
    });
  }, [heightWrapper]);

  console.log(heightWrapper, "heightWrapper");

  const onMouseEnter = () => {
    togglePortal(true);
  };

  const onMouseLeave = () => {
    togglePortal(false);
  };
  return (
    <div
      className="StudioBoxSmall__artists__container"
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
    >
      <div className="StudioBoxSmall__artist__wrapper">
        <div className="StudioBoxSmall__artist">
          <div className="StudioBoxSmall__artist_img">
            <span>A</span>
            <img src={backRodrigo} alt="" />
          </div>
          <div className="StudioBoxSmall__artist_text">
            <p>///</p>
            <p>RODRIGO</p>
            <p>SALCEDO</p>
          </div>
          <div className="StudioBoxSmall__artist_links">
            <div className="StudioBoxSmall__artist_insta">
              <a href="https://www.instagram.com/rodrigosalcedo.v/">
                <img src={instagramIcon} alt="" />
              </a>
            </div>
            <div className="StudioBoxSmall__artist_more">
              <a href="/artist">
                <p>Learn more</p>
                <img src={longArrow} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="StudioBoxSmall__artist">
          <div className="StudioBoxSmall__artist_img">
            <span>B</span>
            <img src={frontAndres} alt="" />
          </div>
          <div className="StudioBoxSmall__artist_text">
            <p>///</p>
            <p>ANDRES</p>
            <p>SALCEDO</p>
          </div>
          <div className="StudioBoxSmall__artist_links">
            <div className="StudioBoxSmall__artist_insta">
              <a href="https://www.instagram.com/andresalcedov/">
                <img src={instagramIcon} alt="" />
              </a>
            </div>
            <div className="StudioBoxSmall__artist_more">
              <a href="/artist">
                <p>Learn more</p>
                <img src={longArrow} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="StudioBoxSmall__artist__scroll"
        // style={{ height: `calc(${boxHeight}px - ${infoHeight}px + 5px)` }}
      >
        <div className="StudioBoxSmallScroll__vertical_container" ref={wrapper}>
          <motion.div
            ref={child_1}
            initial={{ y: 0 }}
            animate={{
              y: boxHeight - childrenWidth.child1,
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 7,
            }}
            className="dot__vertical"
          />
          <motion.div
            ref={child_2}
            initial={{ y: 0 }}
            animate={{ y: heightWrapper - childrenWidth.child2 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
            }}
            className="dot__vertical"
          />
          <motion.div
            ref={child_3}
            initial={{ y: 0 }}
            animate={{ y: heightWrapper - childrenWidth.child3 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 6,
            }}
            className="dot__vertical"
          />
          <motion.div
            ref={child_4}
            initial={{ y: 0 }}
            animate={{ y: heightWrapper - childrenWidth.child4 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 10,
            }}
            className="dot__vertical"
          />
          <motion.div
            ref={child_5}
            initial={{ y: 0 }}
            animate={{ y: heightWrapper - childrenWidth.child5 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 8,
            }}
            className="dot__vertical"
          />
        </div>
      </div>
    </div>
  );
};

export default StudioBoxSmall;
