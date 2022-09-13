import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import studioLogo from "../../assets/images/studio-logo.svg";
import NameSlide from "../../components/NameSlide/NameSlide";

import mundiIcon from "../../assets/images/mundi.png";
import shades from "../../assets/images/shades.svg";
import dotQr from "../../assets/images/dot-qr.png";
import powered from "../../assets/images/powered.svg";
import vector from "../../assets/images/vector.svg";
import itoIcon from "../../assets/images/ITOLAB.svg";
import bar from "../../assets/images/bar.svg";
import isiaIcon from "../../assets/images/isia-nft.svg";

// import "./KosmovisionesSmall.css";

const IsiaSmall = () => {
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
                <span>NFT</span> DROPS
              </h3>
            </div>
            <div className="ArtistSmall__box_container">
              <div className="ArtistSmall__box_header">
                <NameSlide firtsName="BY ALEXANDRO" lastName="GUSSO ///" />
              </div>
              <div className="ArtistSmall__box_content">
                <div className="ArtistSmall__box_text">
                  <p>
                    Kósmovisiones is a series of 2222 generative light portals
                    conceptualized and brought to the metaverse by artist
                    Rodrigo Salcedo in collaboration with ITO LAB. For Rodrigo,
                    achieving altered states of consciousness meant an
                    unprecedented rupture in the way we perceive life. He
                    described this metamorphosis of the mind as "the opening of
                    a portal that could never be closed." Now, through recent
                    advances in digital technologies and after one year of
                    artistic exploration, we can share with the metaverse how
                    these transcendental experiences shaped the artistry and
                    vision for this unique series.
                  </p>
                  <p>
                    The portals are the graphic representation of an awakening
                    moment, they are the point of no return, the
                    interdimensional passage through which one can bridge the
                    physical world with the rest of the kosmos... A genesis
                    series full of magic, spirituality and mysticism, that
                    inhabits both the physical and digital world, establishing
                    an interesting dialogue between both of them, and leaving
                    some questions for the community to ponder: Will technology
                    and its digital tools replace art as we know it? Or is it
                    that both will eventually coexist and live in harmony? Are
                    we as a species destined to inhabit multiple realities?
                    Click the link below to find out.
                  </p>
                </div>
                {/* <div className="ArtistSmall__content_right_content_button">
                  <a href="/appointment">appointments</a>
                </div> */}
                <div className="ArtistSmall__card_container">
                  <div className="ArtistSmall__card_numbers">
                    <p>0000 01</p>
                  </div>
                  <div className="ArtistSmall__card_wrapper">
                    <div className="ArtistSmall__card_img">
                      <img src={isiaIcon} alt="" />
                      <div className="ArtistSmall__bottom_container">
                        <div className="ArtistSmall__bottom_text">
                          <p>"ISIA" #0000018283</p>
                          <p>Created by Alexandro Gusso</p>
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

export default IsiaSmall;
