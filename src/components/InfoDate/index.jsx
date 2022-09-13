import React from "react";
import dotQr from "../../assets/images/dot-qr.png";
import network from "../../assets/images/network.svg";
import useGetDate from "../../hooks/useGetDate";
import "./InfoDate.css";

const InfoDate = ({ isCode }) => {
  const { dayName, dayNumber, monthName, time, year } = useGetDate();

  return (
    <div className="home__info_container">
      {isCode && (
        <p className="home__info_date">{`lang:=”en” data-light>”DARK”</head>`}</p>
      )}
      <img src={dotQr} alt="qr" className="home__info_qr" />
      <div className="home__info__wrapper">
        <div className="home__info">
          <p>
            <span>{time}</span> <br />
            {dayName}, {monthName} {dayNumber}, {year} <br />
            Coordinated Universal Time (UTC)
          </p>
        </div>
        <div className="home_network_wrap">
          <img src={network} className="home_network" alt="network" />
        </div>
      </div>
    </div>
  );
};

export default InfoDate;
