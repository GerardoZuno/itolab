import React, { useState, useEffect } from "react";
import "./glitchTitle.css";

const GlitchTitle = () => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setGlitch(!glitch);
    }, 4000);
    return () => clearInterval(timer);
  }, [glitch]);

  return (
    <>
      {glitch ? (
        <section className="section">
          <div className="hero-container">
            <div className="environment"></div>
            <h2
              className="hero glitch layers"
              data-text="-BRIDGING ART BETWEEN WORLDS"
            >
              <span> -BRIDGING ART BETWEEN WORLDS</span>
            </h2>
          </div>
        </section>
      ) : (
        <section className="section">
          <div className="hero-container">
            <div className="environment"></div>
            <h2
              className="hero__normal"
              data-text="-BRIDGING ART BETWEEN WORLDS"
            >
              <span> -BRIDGING ART BETWEEN WORLDS</span>
            </h2>
          </div>
        </section>
      )}
    </>
  );
};

export default GlitchTitle;
