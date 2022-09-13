import React, { useState, useEffect, useRef } from "react";
import "./rainbow.css";

const DotRainbow = ({ top, left, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.style.top = `${top}px`;
    ref.current.style.left = `${left}px`;
  }, [top, left]);

  return (
    <>
      <div className={className} ref={ref}></div>
    </>
  );
};

const Rainbow = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [dotPositions, setDotPositions] = useState(
    Array(12).fill({ x: 0, y: 0 })
  );

  const timer = useRef(null);

  const animate = () => {
    const FACTOR = 10;

    // Returns a position a step closer to the target, everytime
    const chase = (target, follower) => {
      return {
        x: (target.x + follower.x * FACTOR) / (FACTOR + 1.0009),
        y: (target.y + follower.y * FACTOR) / (FACTOR + 1.0009),
      };
    };

    const positions = [];
    // firts dot, follow the mouse
    let target = mouse;

    dotPositions.forEach((pos) => {
      positions.push(chase(target, pos));
      target = pos;
    });

    setDotPositions(positions);
  };

  useEffect(() => {
    timer.current = setInterval(() => animate(), 1);

    return () => clearInterval(timer.current);
  });

  useEffect(() => {
    window.addEventListener("mousemove", trackMouse);

    return () => window.removeEventListener("mousemove", trackMouse);
  }, []);

  const trackMouse = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  const dotRainbowGum = "dotRainbowGum";
  const dotRainbowBlue = "dotRainbowBlue";
  const dotRainbowPink = "dotRainbowPink";
  const dotRainbowYellow = "dotRainbowYellow";
  const dotRainbowMustard = "dotRainbowMustard";
  const _blankDot = "dotRainbowBlank";
  let className;

  return (
    <div>
      {dotPositions.map((pos, index) => {
        if (index === 0 || index === 1) className = dotRainbowGum;
        if (index === 2 || index === 3) className = dotRainbowBlue;
        if (index === 4 || index === 5) className = dotRainbowPink;
        if (index === 6 || index === 7) className = dotRainbowYellow;
        if (index === 8 || index === 9) className = dotRainbowMustard;
        if (index === 10 || index === 11) className = _blankDot;

        return (
          <DotRainbow
            key={index}
            top={pos.y}
            left={pos.x}
            className={className}
          />
        );
      })}
    </div>
  );
};

export default Rainbow;
