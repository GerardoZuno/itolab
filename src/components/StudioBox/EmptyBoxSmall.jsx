import React, { useEffect, useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import boxSlash from "../../assets/images/box-slash.svg";

import longArrow from "../../assets/images/longArrow.svg";
import { AppContext } from "../../context/Context";

import "./EmptyBoxSmall.css";

const EmptyBoxSmall = ({ infoHeight, boxHeight }) => {
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
      className="EmptyBoxSmall__artists__container"
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
    >
      <div
        className="EmptyBoxSmall__artist__wrapper"
        // style={{
        //   height: `calc(${boxHeight}px - 55px)`,
        // }}
      >
        <div className="EmptyBoxSmall__artist">
          <div className="EmptyBoxSmall__artist_img">
            <span>A</span>
            <img src={boxSlash} alt="" />
          </div>
          <div className="EmptyBoxSmall__artist_text">
            <p>NO EVENTS IN THE CALENDAR</p>
          </div>
          <div className="EmptyBoxSmall__artist_links">
            <div className="EmptyBoxSmall__artist_insta">
              {/* <a href="">
                <img src={instagramIcon} alt="" />
              </a> */}
            </div>
            <div className="EmptyBoxSmall__artist_more">
              <a href="/nft-isia">
                <p>Learn more</p>
                <img src={longArrow} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="EmptyBoxSmall__artist">
          <div className="EmptyBoxSmall__artist_img">
            <span>B</span>
            <img src={boxSlash} alt="" />
          </div>
          <div className="EmptyBoxSmall__artist_text">
            <p>NO EVENTS IN THE CALENDAR</p>
          </div>
          <div className="EmptyBoxSmall__artist_links">
            <div className="EmptyBoxSmall__artist_insta">
              {/* <a href="">
                <img src={instagramIcon} alt="" />
              </a> */}
            </div>
            <div className="EmptyBoxSmall__artist_more">
              <a href="/nft-kosmosvisiones">
                <p>Learn more</p>
                <img src={longArrow} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="EmptyBoxSmall__artist__scroll"
        // style={{ height: `calc(${boxHeight}px - ${infoHeight}px + 5px)` }}
      >
        <div className="EmptyBoxSmallScroll__vertical_container" ref={wrapper}>
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

export default EmptyBoxSmall;
