import React, { useState, useEffect, Fragment } from "react";
import MainBigSize from "./MainBigSize";
import MainSmallSize from "./MainSmallSize";

const Main = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  const handleWindowSize = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <Fragment>
      {screenWidth <= 950 ? <MainSmallSize /> : <MainBigSize />}
    </Fragment>
  );
};

export default Main;
