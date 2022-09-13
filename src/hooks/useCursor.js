import { useEffect, useRef, useState } from "react";
import "../components/CustomCursor/dotCursor.css";

const useCursor = () => {
  const delay = 1;

  const dot = useRef(null);
  const dotOutline = useRef(null);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);

    animateDotOutline();
    animateDotHover();

    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = "translate(-50%, -50%) scale(0.75) ";
      dotOutline.current.style.transform = "translate(-50%, -50%)";
      dotOutline.current.style.width = "25px";
      dotOutline.current.style.height = "25px";
      dotOutline.current.style.transition = "width .2s, height .2s";
    } else {
      dot.current.style.transform = "translate(-20%, +100%) scale(1)";
      dotOutline.current.style.transform = "translate(-50%, -50%)";
      dotOutline.current.style.width = "8px";
      dotOutline.current.style.height = "8px";
      dotOutline.current.style.transition = "width .2s, height .2s";
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };

  const animateDotHover = () => {
    // need id for animation of dot
    document.querySelectorAll("a, button, #title").forEach((el) => {
      el.addEventListener("mouseover", mouseOverEvent);
      el.addEventListener("mouseout", mouseOutEvent);
    });
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  const DotCursor = (isPortal) => {
    return (
      <div className="cursor-container">
        <div
          ref={dotOutline}
          className={!isPortal ? "cursor-dot-outline" : "cursor-hidden"}
        ></div>
        <div ref={dot} className="cursor-dot"></div>
      </div>
    );
  };

  return {
    DotCursor,
    dot,
    dotOutline,
  };
};

export default useCursor;
