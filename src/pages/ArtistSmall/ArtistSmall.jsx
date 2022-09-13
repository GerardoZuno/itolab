import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import studioLogo from "../../assets/images/studio-logo.svg";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import NameSlide from "../../components/NameSlide/NameSlide";
import rodrigoIcon from "../../assets/images/rodrigo.png";
import mundiIcon from "../../assets/images/mundi.png";
import shades from "../../assets/images/shades.svg";
import dotQr from "../../assets/images/dot-qr.png";
import powered from "../../assets/images/powered.svg";
import vector from "../../assets/images/vector.svg";
import itoIcon from "../../assets/images/ITOLAB.svg";
import bar from "../../assets/images/bar.svg";

import "./ArtistSmall.css";

const ItoStudioSmall = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {/* FIXED BARS  */}
      <div className="ArtistSmall__stickyBars">
        <div className="ArtistSmall__stickyBar_top_container">
          <div className="ArtistSmall__stickyBar_top" />
        </div>
      </div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{
          delay: 0.2,
          stiffness: 100,
          type: "tween",
          duration: 0.5,
        }}
        className="StudioSmall__container"
      >
        <div className="ArtistSmall__wrapper">
          <div className="ArtistSmall__Header_contaner">
            <Header
              sectionPhoto={studioLogo}
              phrase="ITO STUDIO is an inhouse contemporary tattoo studio, we succesfully implemented blockchain
              technology into tattooing as a case study, a place
              where the physical world collides with the digital one and manages to coexist
              in perfect harmony.
               "
            />
          </div>
          <div className="ArtistSmall__maincontent_wrapper">
            <div className="ArtistSmall__subtitle">
              <h3>
                <span>RESIDENT</span> ARTIST
              </h3>
            </div>
            <div className="ArtistSmall__box_container">
              <div className="ArtistSmall__box_header">
                <NameSlide firtsName="RODRIGO" lastName="SALCEDO ///" />
              </div>
              <div className="ArtistSmall__box_content">
                <div className="ArtistSmall__box_text">
                  <p>
                    Rodrigo Salcedo Velarca is a multidisciplinary artist born
                    in Guadalajara City, México. Growing up with an artist
                    mother, he was introduced to the art world at a very young
                    age, allowing him to explore its different realms.
                    Eventually discovering the art of tattooing in 2018, where
                    he found a passionate drive and purpose; Now, with only a
                    few years in the industry, he has become one of the most
                    prominent high on-demand tattoo artists in the country, with
                    a list of celebrity clients and international recognition.
                  </p>
                  <p>
                    He’s known for transcending his work through multiple fields
                    with an interdisciplinary focus on digital art and visual
                    media, illustration, painting, fashion, and jewelry design.
                    He currently resides in Mexico City and works at his project
                    studio @ito.estudio
                  </p>
                </div>
                <div className="ArtistSmall__content_right_content_button">
                  <a href="/appointment">appointments</a>
                </div>
                <div className="ArtistSmall__card_container">
                  <div className="ArtistSmall__card_numbers">
                    <p>0000 01</p>
                  </div>
                  <div className="ArtistSmall__card_wrapper">
                    <div className="ArtistSmall__card_img">
                      <img src={rodrigoIcon} alt="" />
                      <div className="ArtistSmall__bottom_container">
                        <div className="ArtistSmall__bottom_text">
                          <p>"KOSMOVISIONES" #0000018283</p>
                          <p>Created by Rodrigo Salcedo</p>
                          <p>
                            <span>sold for </span>
                            0.04ETH
                          </p>
                          <p>
                            The portals are the graphic representation of an
                            awakening moment, they are the point of no return,
                            an interdimensional passage through which one can
                            bridge the regular state of mind with altered states
                            of conciousness, the
                          </p>
                        </div>
                        <div className="ArtistSmall__bottom_images">
                          <div className="ArtistSmall__bottom_img_left">
                            <div className="ArtistSmall__bottom_img_left_section_1">
                              <img src={powered} alt="" />
                              <img src={itoIcon} alt="" />
                            </div>
                            <div className="ArtistSmall__bottom_img_left_section_2">
                              <img src={bar} alt="" />
                              <img src={vector} alt="" />
                            </div>
                          </div>
                          <div className="ArtistSmall__bottom_img_right">
                            <div className="ArtistSmall__bottom_img_right_section_1">
                              <img src={mundiIcon} alt="" />
                            </div>
                            <div className="ArtistSmall__bottom_img_right_section_2">
                              <img src={shades} alt="" />
                              <img src={dotQr} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ArtistSmall__card_text">
                      <p>
                        {
                          '{"internalType":"Kosmovisiones","name":"collectionSize2222","type":soul"uint1"}'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{ width: "100%" }}>
          <ScrollBar />
        </div> */}
      </motion.div>
    </div>
  );
};

export default ItoStudioSmall;
