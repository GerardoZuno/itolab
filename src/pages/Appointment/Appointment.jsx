import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import Header from "../../components/Header/Header";
import studioLogo from "../../assets/images/studio-logo.svg";
import MineSweeper from "../../components/MineSweeper/MineSweeper";
import FormBooking from "./FormBooking";
import InfoDateVertical from "../../components/InfoDateVertical/InfoDateVertical";

import "./Appointment.css";
const Appointment = () => {
  const [isFilter, setIsFilter] = useState(true);

  const quitFilter = () => {
    setIsFilter(false);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* FIXED BARS  */}
      <div className="MainBigSize__stickyBars">
        <div className="MainBigSize__stickyBar_top_container">
          <div className="MainBigSize__stickyBar_top" />
        </div>
        {/* <div className="MainBigSize__stickyBar_bottom_container">
          <ScrollBar />
        </div> */}
      </div>
      <motion.div
        className="Appointment__container"
        initial={{ y: "100vw" }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.2,
          stiffness: 100,
          type: "tween",
          duration: 0.5,
        }}
      >
        <div className="Appointment__wrapper">
          <div className="Appointment__header_container">
            <Header
              sectionPhoto={studioLogo}
              phrase="ITO STUDIO is an inhouse contemporary tattoo studio, we implemented blockchain
technology into tattooing, a place
where the physical world collides with the digital one and manages to coexist
in perfect harmony.
 "
            />
          </div>
          <div className="Appointment__content_wrapper">
            <p>
              <span>BOOK</span> YOU'R <br /> APPOINTMENT
            </p>
            <div className="Appointment__content_container">
              <div className="Appointment__left_container">
                <div className="Appointment__left_wrapper">
                  <div className="Appointment__left_date">
                    AUG 19 / SEPT 20 // 10:00-20:00
                  </div>
                  <div className="Appointment__left_form">
                    <FormBooking quitFilter={quitFilter} />
                  </div>
                  <div className="Appointment__left_infodate_container">
                    <div className="Appointment__left_infodate">
                      <InfoDateVertical />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Appointment__right_container">
                <div className="Appointment__right_wrapper">
                  <MineSweeper isFilter={isFilter} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Appointment;
