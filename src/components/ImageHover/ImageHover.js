import React, { useState, useEffect, useRef } from "react";

import itoLogo from "../../assets/images/ito-black.svg";
import itoOutline from "../../assets/images/ito-outline.svg";

import "./ImageHover.css";

const ImageHover = () => {
  const [clipMask, setClipMask] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const imageVisible = useRef(null);

  const mouseMoveEvent = (e) => {
    const imagePosition = {
      posX: containerRef.current.offsetLeft,
      posY: containerRef.current.offsetTop,
    };

    const posX = e.pageX - imagePosition.posX;
    const posY = e.pageY - imagePosition.posY;

    setClipMask({
      x: (posX / containerRef.current.clientWidth) * 100,
      y: (posY / containerRef.current.clientHeight) * 100,
    });
  };

  const toggleRefVisibility = () => {
    if (imageVisible.current) {
      imageRef.current.style.opacity = 1;
    } else {
      imageRef.current.style.opacity = 0;
    }
  };

  const mouseEnterEvent = () => {
    imageVisible.current = true;
    toggleRefVisibility();
  };

  const mouseLeaveEvent = () => {
    imageVisible.current = false;
    toggleRefVisibility();
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", mouseMoveEvent);
    // return () => {
    //   containerRef.current.removeEventListener("mousemove", mouseMoveEvent);
    // };
  }, []);

  return (
    <>
      <div
        className="ito__container"
        ref={containerRef}
        onMouseEnter={mouseEnterEvent}
        onMouseLeave={mouseLeaveEvent}
      >
        <img
          ref={imageRef}
          src={itoOutline}
          style={
            imageVisible.current
              ? {
                  clipPath: `circle(2.5% at ${clipMask.x}% ${clipMask.y}%)`,
                  opacity: 1,
                }
              : { opacity: 0 }
          }
          className="ito__outline_none"
        />
        <img src={itoLogo} className="ito ito__normal" />
      </div>
    </>
  );
};

export default ImageHover;
