import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import InfoDate from "../../components/InfoDate";
import GalleryBoxSmall from "../../components/GalleryBox/GalleryBoxSmall";
import EmptyBoxSmall from "../../components/GalleryBox/EmptyBoxSmall";
import aboutLogo from "../../assets/images/about-logo.svg";
import fakeStatutte from "../../assets/images/fake-statutte.svg";
import GridAboutSmall from "../../components/GridAbout/GridAboutSmall";

const ItoStudioSmall = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{
        delay: 0.2,
        stiffness: 100,
        type: "tween",
        duration: 0.5,
      }}
      className="GallerySmall__container"
    >
      <div className="GallerySmall__wrapper">
        <div className="GallerySmall__Header_container">
          <Header
            sectionPhoto={aboutLogo}
            phrase="ITO Laboratories is a phygital creative center dedicated to the exploration of the different realms of art and design. We
            focus primarily on bridging art between the real world and web 3.
            "
          />
        </div>
        <div className="GallerySmall__maincontent_wrapper">
          <div className="GallerySmall__subtitle">
            <h3>
              <span>PHYGITAL</span> CREATIVE CENTER
            </h3>
          </div>
          <div style={{ width: "100%" }}>
            <div className="GallerySmall__box_text">
              <p>
                In the midst of a digital revolution it is inevitable for us to
                see the potential that blockchain technology has to help
                potentialize any business, or brand..
              </p>
              <p>
                The company’s vision is to help brands, artists and all types of
                creators tap into the digital world by the imnplementation of
                NFTs and blockchain.
              </p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "60%", outline: "red solid" }}>
                <p style={{ fontFamily: "Oxygen Mono", fontSize: "0.7em" }}>
                  Through our main pillars: ITO GALLERY, ITO D3SIGN and ITO
                  STUDIO we are able to offer a complete set of integral
                  services ranging from design, art production and
                  digitalization, to specialized art and NFT consulting.{" "}
                </p>
              </div>
              <div style={{ width: "auto", outline: "green solid" }}>
                <img
                  style={{ width: "110px", outline: "blue solid" }}
                  src={fakeStatutte}
                  alt=""
                />
              </div>
            </div>
            <div className="" style={{ width: "99.7%", height: "400px" }}>
              <GridAboutSmall />
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <ScrollBar />
      </div>
    </motion.div>
  );
};

export default ItoStudioSmall;
