import React, { useRef, useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import instagramIcon from "../../assets/images/instagram.svg";
import boxSlash from "../../assets/images/box-slash.svg";
import longArrow from "../../assets/images/longArrow.svg";
import { AppContext } from "../../context/Context";

const EmptyBox = ({ infoHeight, boxHeight }) => {
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

  useEffect(() => {
    setHeightWrapper(wrapper.current.offsetHeight);
    setChildrenWidth({
      child1: child_1.current.offsetHeight,
      child2: child_2.current.offsetHeight,
      child3: child_3.current.offsetHeight,
      child4: child_4.current.offsetHeight,
      child5: child_5.current.offsetHeight,
    });
  }, []);

  return (
    <div
      className="box__artists__container"
      onMouseEnter={() => togglePortal(true)}
      onMouseLeave={() => togglePortal(false)}
    >
      <div
        className="box__artist__wrapper"
        style={{
          height: `calc(${boxHeight}px - 55px)`,
        }}
      >
        <div className="box__artist">
          <div className="box__artist__upper">
            <div className="box__artis__upper_wrap">
              <span className="box__artist__upper_spanA">A</span>
            </div>
            <a href="https://www.instagram.com/">
              <img src={instagramIcon} alt="" />
            </a>
          </div>
          <div className="box__artist__bottom">
            <div className="box__carousel__container">
              <a>{"<"}</a>
              <img src={boxSlash} alt="" />
              <a>{">"}</a>
            </div>
            <p>NOT AVAILBLE</p>
            <div className="box__artist__learmore">
              <a href="/appointment">
                book appointment
                <img src={longArrow} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="box__artist">
          <div className="box__artist__upper">
            <div className="box__artis__upper_wrap">
              <span className="box__artist__upper_spanA">B</span>
            </div>
            <a href="https://www.instagram.com/">
              <img src={instagramIcon} alt="" />
            </a>
          </div>
          <div className="box__artist__bottom">
            <div className="box__carousel__container">
              <a>{"<"}</a>
              <img src={boxSlash} alt="" />
              <a>{">"}</a>
            </div>
            <p>NOT AVAILBLE</p>
            <div className="box__artist__learmore">
              <a href="/appointment">
                book appointment
                <img src={longArrow} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="box__artist__line" />
      </div>
      <div className="box__artist__scroll">
        <div className="boxScroll__vertical_container" ref={wrapper}>
          <motion.div
            ref={child_1}
            initial={{ y: 0 }}
            animate={{ y: heightWrapper - childrenWidth.child1 }}
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

export default EmptyBox;
