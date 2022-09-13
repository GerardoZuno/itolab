import React, { useEffect, useState, useRef, useContext } from "react";
import { AppContext } from "../../context/Context";
import { motion } from "framer-motion";
import "./ScrollBar.css";

const ScrollBar = () => {
  const wrapper = useRef(null);
  const child_1 = useRef(null);
  const child_2 = useRef(null);
  const child_3 = useRef(null);
  const child_4 = useRef(null);
  const child_5 = useRef(null);
  const child_6 = useRef(null);
  const child_7 = useRef(null);
  const { isStudio, isTalk, isGallery, isDesign, isAbout } =
    useContext(AppContext);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [childrenWidth, setChildrenWidth] = useState({
    child1: 0,
    child2: 0,
    child3: 0,
    child4: 0,
    child5: 0,
    child6: 0,
    child7: 0,
  });
  const [position, setPosition] = useState({ x: 0 });

  useEffect(() => {
    setWrapperWidth(wrapper.current.offsetWidth);
    setChildrenWidth({
      child1: child_1.current.offsetWidth,
      child2: child_2.current.offsetWidth,
      child3: child_3.current.offsetWidth,
      child4: child_4.current.offsetWidth,
      child5: child_5.current.offsetWidth,
      child6: child_6.current.offsetWidth,
      child7: child_7.current.offsetWidth,
    });
    handleIndicator();
  }, [isStudio, isTalk, isGallery, isDesign, isAbout]);

  const handleIndicator = () => {
    //ABOUT US
    if (isAbout) setPosition({ x: 0 });
    //ITO DESIGN
    if (isDesign) setPosition({ x: "100%" });
    //ITO GALLERY
    if (isGallery) setPosition({ x: "200%" });
    //ITO STUDIO
    if (isStudio) setPosition({ x: "300%" });
    //LETS TALK
    if (isTalk) setPosition({ x: "400%" });
  };

  return (
    <div>
      <div className="container__lamp">
        <motion.ul
          initial={{ x: 0 }}
          animate={position}
          transition={{ duration: 0.5 }}
          className="dot__wrapper"
          ref={wrapper}
        >
          <motion.li
            initial={{ x: 0 }}
            animate={{ x: wrapperWidth - childrenWidth.child1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
            }}
            className="dot"
            ref={child_1}
          />
          <motion.li
            initial={{ x: 0 }}
            animate={{ x: wrapperWidth - childrenWidth.child2 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5,
            }}
            className="dot"
            ref={child_2}
          />
          <motion.li
            initial={{ x: 0 }}
            animate={{ x: wrapperWidth - childrenWidth.child3 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
            }}
            className="dot"
            ref={child_3}
          />
          <motion.li
            initial={{ x: 0 }}
            animate={{ x: wrapperWidth - childrenWidth.child4 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 6,
            }}
            className="dot"
            ref={child_4}
          />
          <motion.li
            initial={{ x: 0 }}
            animate={{ x: wrapperWidth - childrenWidth.child5 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 9,
            }}
            className="dot"
            ref={child_5}
          />
          <motion.li
            initial={{ x: 0 }}
            animate={{ x: wrapperWidth - childrenWidth.child6 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
            }}
            className="dot"
            ref={child_6}
          />
          <motion.li
            initial={{ x: 0 }}
            animate={{ x: wrapperWidth - childrenWidth.child7 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 7,
            }}
            className="dot"
            ref={child_7}
          />
        </motion.ul>
      </div>
      <svg version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5"
              result="gaussianBlur"
            />
            <feColorMatrix
              in="gaussianBlur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="color-matrix"
            />
            <feBlend in="SourceGraphic" in2="color-matrix" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ScrollBar;
