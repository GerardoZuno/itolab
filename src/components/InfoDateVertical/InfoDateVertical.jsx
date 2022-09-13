import React from "react";
import useGetDate from "../../hooks/useGetDate";
import dotQr from "../../assets/images/dot-qr.png";
import network from "../../assets/images/network.svg";

import "./InfoDateVertical.css";
const InfoDateVertical = () => {
  const { dayName, dayNumber, monthName, time, year } = useGetDate();

  return (
    <div className="main__info_side">
      <img src={dotQr} alt="qr" className="main__info_qr" />

      <div className="main__info__wrapper">
        <div className="main__info">
          <p>
            <span>{time}</span> <br />
            {dayName}, {monthName} {dayNumber}, {year} <br />
            Coordinated Universal Time (UTC)
          </p>
        </div>
        <div className="main_network_wrap">
          <img src={network} className="main_network" alt="network" />
        </div>
      </div>
    </div>
  );
};

export default InfoDateVertical;
