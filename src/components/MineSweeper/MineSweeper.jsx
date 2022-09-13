import React, { useEffect, useState } from "react";
import MineSweeperGame from "pb-minesweeper";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import FilterLock from "../FilterLock/FilterLock";
import "./MineSweeper.css";

const MineSweeper = ({ isFilter }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  return (
    <div className="MineSweeper__wrapper">
      <div className="MineSweeper__container">
        {isFilter && <FilterLock />}
        {/* DESKTOP VIEW */}
        {windowWidth == 2301 || windowWidth >= 2301 ? (
          <MineSweeperGame mines={99} gridSize={[50, 19]} />
        ) : null}
        {windowWidth <= 2300 && windowWidth >= 2231 ? (
          <MineSweeperGame mines={99} gridSize={[49, 19]} />
        ) : null}
        {windowWidth <= 2230 && windowWidth >= 2191 ? (
          <MineSweeperGame mines={99} gridSize={[48, 19]} />
        ) : null}
        {windowWidth <= 2190 && windowWidth >= 2141 ? (
          <MineSweeperGame mines={99} gridSize={[47, 19]} />
        ) : null}
        {windowWidth <= 2141 && windowWidth >= 2101 ? (
          <MineSweeperGame mines={99} gridSize={[46, 19]} />
        ) : null}
        {windowWidth <= 2100 && windowWidth >= 2061 ? (
          <MineSweeperGame mines={99} gridSize={[45, 19]} />
        ) : null}
        {windowWidth <= 2060 && windowWidth >= 2011 ? (
          <MineSweeperGame mines={99} gridSize={[44, 19]} />
        ) : null}
        {windowWidth <= 2010 && windowWidth >= 1971 ? (
          <MineSweeperGame mines={99} gridSize={[43, 19]} />
        ) : null}
        {windowWidth <= 1970 && windowWidth >= 1921 ? (
          <MineSweeperGame mines={99} gridSize={[42, 19]} />
        ) : null}
        {windowWidth <= 1920 && windowWidth >= 1881 ? (
          <MineSweeperGame mines={99} gridSize={[41, 19]} />
        ) : null}
        {windowWidth <= 1880 && windowWidth >= 1831 ? (
          <MineSweeperGame mines={99} gridSize={[40, 19]} />
        ) : null}
        {windowWidth <= 1830 && windowWidth >= 1791 ? (
          <MineSweeperGame mines={99} gridSize={[39, 19]} />
        ) : null}
        {windowWidth <= 1790 && windowWidth >= 1751 ? (
          <MineSweeperGame mines={99} gridSize={[38, 19]} />
        ) : null}
        {windowWidth <= 1750 && windowWidth >= 1701 ? (
          <MineSweeperGame mines={99} gridSize={[37, 19]} />
        ) : null}
        {windowWidth <= 1700 && windowWidth >= 1651 ? (
          <MineSweeperGame mines={99} gridSize={[36, 19]} />
        ) : null}
        {windowWidth <= 1650 && windowWidth >= 1611 ? (
          <MineSweeperGame mines={99} gridSize={[35, 19]} />
        ) : null}
        {windowWidth <= 1610 && windowWidth >= 1561 ? (
          <MineSweeperGame mines={99} gridSize={[34, 19]} />
        ) : null}
        {windowWidth <= 1560 && windowWidth >= 1521 ? (
          <MineSweeperGame mines={99} gridSize={[33, 19]} />
        ) : null}
        {windowWidth <= 1520 && windowWidth >= 1471 ? (
          <MineSweeperGame mines={99} gridSize={[32, 17]} />
        ) : null}
        {windowWidth <= 1470 && windowWidth >= 1431 ? (
          <MineSweeperGame mines={99} gridSize={[31, 15]} />
        ) : null}
        {windowWidth <= 1430 && windowWidth >= 1381 ? (
          <MineSweeperGame mines={99} gridSize={[30, 17]} />
        ) : null}
        {windowWidth <= 1380 && windowWidth >= 1341 ? (
          <MineSweeperGame mines={99} gridSize={[29, 17]} />
        ) : null}
        {windowWidth <= 1340 && windowWidth >= 1291 ? (
          <MineSweeperGame mines={99} gridSize={[28, 17]} />
        ) : null}
        {windowWidth <= 1290 && windowWidth >= 1241 ? (
          <MineSweeperGame mines={99} gridSize={[27, 16]} />
        ) : null}
        {windowWidth <= 1240 && windowWidth >= 1201 ? (
          <MineSweeperGame mines={99} gridSize={[26, 16]} />
        ) : null}
        {windowWidth <= 1200 && windowWidth >= 1151 ? (
          <MineSweeperGame mines={99} gridSize={[25, 16]} />
        ) : null}
        {windowWidth <= 1150 && windowWidth >= 1111 ? (
          <MineSweeperGame mines={99} gridSize={[24, 16]} />
        ) : null}
        {windowWidth <= 1110 && windowWidth >= 1061 ? (
          <MineSweeperGame mines={99} gridSize={[23, 16]} />
        ) : null}
        {windowWidth <= 1060 && windowWidth >= 1021 ? (
          <MineSweeperGame mines={99} gridSize={[22, 16]} />
        ) : null}
        {windowWidth <= 1020 && windowWidth >= 971 ? (
          <MineSweeperGame mines={99} gridSize={[21, 16]} />
        ) : null}
        {windowWidth <= 970 && windowWidth >= 951 ? (
          <MineSweeperGame mines={99} gridSize={[20, 16]} />
        ) : null}

        {/* MOBILE & TABLE VIEW */}

        {windowWidth <= 950 && windowWidth >= 931 ? (
          <MineSweeperGame mines={99} gridSize={[45, 19]} />
        ) : null}
        {windowWidth <= 930 && windowWidth >= 911 ? (
          <MineSweeperGame mines={99} gridSize={[44, 25]} />
        ) : null}
        {windowWidth <= 910 && windowWidth >= 891 ? (
          <MineSweeperGame mines={99} gridSize={[43, 25]} />
        ) : null}
        {windowWidth <= 890 && windowWidth >= 871 ? (
          <MineSweeperGame mines={99} gridSize={[42, 25]} />
        ) : null}
        {windowWidth <= 870 && windowWidth >= 851 ? (
          <MineSweeperGame mines={99} gridSize={[41, 25]} />
        ) : null}
        {windowWidth <= 850 && windowWidth >= 831 ? (
          <MineSweeperGame mines={99} gridSize={[40, 25]} />
        ) : null}
        {windowWidth <= 830 && windowWidth >= 811 ? (
          <MineSweeperGame mines={99} gridSize={[39, 25]} />
        ) : null}
        {windowWidth <= 810 && windowWidth >= 791 ? (
          <MineSweeperGame mines={99} gridSize={[38, 25]} />
        ) : null}
        {windowWidth <= 790 && windowWidth >= 771 ? (
          <MineSweeperGame mines={99} gridSize={[37, 25]} />
        ) : null}
        {windowWidth <= 770 && windowWidth >= 751 ? (
          <MineSweeperGame mines={99} gridSize={[36, 25]} />
        ) : null}
        {windowWidth <= 750 && windowWidth >= 731 ? (
          <MineSweeperGame mines={99} gridSize={[35, 25]} />
        ) : null}
        {windowWidth <= 730 && windowWidth >= 711 ? (
          <MineSweeperGame mines={99} gridSize={[34, 25]} />
        ) : null}
        {windowWidth <= 710 && windowWidth >= 691 ? (
          <MineSweeperGame mines={99} gridSize={[33, 25]} />
        ) : null}
        {windowWidth <= 690 && windowWidth >= 671 ? (
          <MineSweeperGame mines={99} gridSize={[32, 25]} />
        ) : null}
        {windowWidth <= 670 && windowWidth >= 651 ? (
          <MineSweeperGame mines={99} gridSize={[31, 25]} />
        ) : null}
        {windowWidth <= 650 && windowWidth >= 631 ? (
          <MineSweeperGame mines={99} gridSize={[30, 24]} />
        ) : null}
        {windowWidth <= 630 && windowWidth >= 611 ? (
          <MineSweeperGame mines={99} gridSize={[29, 24]} />
        ) : null}
        {windowWidth <= 610 && windowWidth >= 581 ? (
          <MineSweeperGame mines={99} gridSize={[28, 21]} />
        ) : null}
        {windowWidth <= 580 && windowWidth >= 561 ? (
          <MineSweeperGame mines={99} gridSize={[27, 19]} />
        ) : null}

        {windowWidth <= 560 && windowWidth >= 541 ? (
          <MineSweeperGame mines={99} gridSize={[26, 19]} />
        ) : null}
        {windowWidth <= 540 && windowWidth >= 521 ? (
          <MineSweeperGame mines={99} gridSize={[25, 19]} />
        ) : null}
        {windowWidth <= 520 && windowWidth >= 501 ? (
          <MineSweeperGame mines={99} gridSize={[24, 19]} />
        ) : null}

        {windowWidth <= 500 && windowWidth >= 481 ? (
          <MineSweeperGame mines={99} gridSize={[23, 19]} />
        ) : null}

        {windowWidth <= 480 && windowWidth >= 461 ? (
          <MineSweeperGame mines={99} gridSize={[22, 19]} />
        ) : null}

        {windowWidth <= 460 && windowWidth >= 441 ? (
          <MineSweeperGame mines={99} gridSize={[21, 19]} />
        ) : null}

        {windowWidth <= 440 && windowWidth >= 421 ? (
          <MineSweeperGame mines={99} gridSize={[20, 19]} />
        ) : null}

        {windowWidth <= 420 && windowWidth >= 401 ? (
          <MineSweeperGame mines={99} gridSize={[19, 19]} />
        ) : null}
        {windowWidth <= 400 && windowWidth >= 381 ? (
          <MineSweeperGame mines={99} gridSize={[18, 18]} />
        ) : null}

        {windowWidth <= 380 && windowWidth >= 361 ? (
          <MineSweeperGame mines={99} gridSize={[17, 16]} />
        ) : null}

        {windowWidth <= 360 && windowWidth >= 341 ? (
          <MineSweeperGame mines={99} gridSize={[16, 15]} />
        ) : null}

        {windowWidth <= 340 && windowWidth >= 321 ? (
          <MineSweeperGame mines={99} gridSize={[15, 14]} />
        ) : null}
        {windowWidth <= 320 ? (
          <MineSweeperGame mines={99} gridSize={[14, 13]} />
        ) : null}
      </div>
      <div className="MineSweeper__scoreboard_container">
        <ScoreBoard />
      </div>
    </div>
  );
};

export default MineSweeper;
